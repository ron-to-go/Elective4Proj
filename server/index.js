import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { randomBytes, randomUUID, scryptSync, timingSafeEqual } from "node:crypto";
import express from "express";
import Database from "better-sqlite3";

const app = express();
const PORT = Number(process.env.PORT ?? 3001);
const SESSION_TTL_MS = 1000 * 60 * 60 * 24 * 30;
const dbPath =
  process.env.SQLITE_PATH ??
  path.join(os.tmpdir(), "webeng-admin.sqlite");

fs.mkdirSync(path.dirname(dbPath), { recursive: true });

const db = new Database(dbPath);
db.pragma("journal_mode = WAL");
db.pragma("foreign_keys = ON");

db.exec(`
  CREATE TABLE IF NOT EXISTS admin_users (
    scope TEXT PRIMARY KEY,
    username TEXT NOT NULL,
    password_hash TEXT NOT NULL,
    password_salt TEXT NOT NULL,
    created_at TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS admin_sessions (
    session_id TEXT PRIMARY KEY,
    scope TEXT NOT NULL,
    username TEXT NOT NULL,
    expires_at TEXT NOT NULL
  );

  CREATE INDEX IF NOT EXISTS admin_sessions_scope_idx
  ON admin_sessions (scope, expires_at);

  CREATE TABLE IF NOT EXISTS content_entries (
    scope TEXT PRIMARY KEY,
    content_json TEXT NOT NULL,
    updated_at TEXT NOT NULL
  );
`);

app.use(express.json({ limit: "2mb" }));
app.use((req, res, next) => {
  const origin = req.headers.origin;

  if (origin && isAllowedOrigin(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    res.header("Vary", "Origin");
  }

  if (req.method === "OPTIONS") {
    res.sendStatus(204);
    return;
  }

  next();
});

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, dbPath });
});

app.get("/api/auth/state/:scope", (req, res) => {
  const { scope } = req.params;
  const user = db
    .prepare("SELECT username FROM admin_users WHERE scope = ?")
    .get(scope);
  const session = getSession(req, scope);

  res.json({
    hasCredentials: Boolean(user),
    authenticated: Boolean(session),
    username: session?.username ?? null,
  });
});

app.post("/api/auth/setup/:scope", (req, res) => {
  const { scope } = req.params;
  const payload = readCredentialsBody(req, res);
  if (!payload) return;

  const existing = db
    .prepare("SELECT scope FROM admin_users WHERE scope = ?")
    .get(scope);

  if (existing) {
    res.status(409).json({ error: "Credentials already exist for this admin page." });
    return;
  }

  const now = new Date().toISOString();
  const passwordSalt = randomBytes(16).toString("hex");
  const passwordHash = hashPassword(payload.password, passwordSalt);

  db.prepare(
    `
      INSERT INTO admin_users (scope, username, password_hash, password_salt, created_at)
      VALUES (?, ?, ?, ?, ?)
    `
  ).run(scope, payload.username, passwordHash, passwordSalt, now);

  createSession(res, scope, payload.username);

  res.status(201).json({
    hasCredentials: true,
    authenticated: true,
    username: payload.username,
  });
});

app.post("/api/auth/login/:scope", (req, res) => {
  const { scope } = req.params;
  const payload = readCredentialsBody(req, res);
  if (!payload) return;

  const user = db
    .prepare(
      `
        SELECT username, password_hash, password_salt
        FROM admin_users
        WHERE scope = ?
      `
    )
    .get(scope);

  if (!user) {
    res.status(404).json({ error: "No credentials found for this admin page." });
    return;
  }

  if (
    user.username !== payload.username ||
    !verifyPassword(payload.password, user.password_salt, user.password_hash)
  ) {
    res.status(401).json({ error: "Invalid username or password." });
    return;
  }

  createSession(res, scope, user.username);

  res.json({
    hasCredentials: true,
    authenticated: true,
    username: user.username,
  });
});

app.post("/api/auth/logout/:scope", (req, res) => {
  const { scope } = req.params;
  const cookies = parseCookies(req.headers.cookie);
  const sessionId = cookies[getSessionCookieName(scope)];

  if (sessionId) {
    db.prepare("DELETE FROM admin_sessions WHERE session_id = ?").run(sessionId);
  }

  clearSessionCookie(res, scope);
  res.json({ ok: true });
});

app.get("/api/content/:scope", (req, res) => {
  const { scope } = req.params;
  const row = db
    .prepare(
      `
        SELECT content_json, updated_at
        FROM content_entries
        WHERE scope = ?
      `
    )
    .get(scope);

  if (!row) {
    res.json({ content: null, updatedAt: null });
    return;
  }

  res.json({
    content: JSON.parse(row.content_json),
    updatedAt: row.updated_at,
  });
});

app.put("/api/content/:scope", (req, res) => {
  const { scope } = req.params;
  const session = requireSession(req, res, scope);
  if (!session) return;

  const { content } = req.body ?? {};
  if (typeof content === "undefined") {
    res.status(400).json({ error: "Request body must include content." });
    return;
  }

  const now = new Date().toISOString();
  const contentJson = JSON.stringify(content);

  db.prepare(
    `
      INSERT INTO content_entries (scope, content_json, updated_at)
      VALUES (?, ?, ?)
      ON CONFLICT(scope) DO UPDATE SET
        content_json = excluded.content_json,
        updated_at = excluded.updated_at
    `
  ).run(scope, contentJson, now);

  res.json({
    content,
    updatedAt: now,
    savedBy: session.username,
  });
});

app.delete("/api/content/:scope", (req, res) => {
  const { scope } = req.params;
  const session = requireSession(req, res, scope);
  if (!session) return;

  db.prepare("DELETE FROM content_entries WHERE scope = ?").run(scope);
  res.json({ ok: true, clearedBy: session.username });
});

const distDir = path.join(process.cwd(), "dist");
if (fs.existsSync(distDir)) {
  app.use(express.static(distDir));

  app.get(/^\/(?!api(?:\/|$)).*/, (_req, res) => {
    res.sendFile(path.join(distDir, "index.html"));
  });
}

app.listen(PORT, () => {
  console.log(`WebEng admin API listening on http://localhost:${PORT}`);
  console.log(`SQLite database: ${dbPath}`);
});

function isAllowedOrigin(origin) {
  const configuredOrigins = (process.env.ALLOWED_ORIGINS ?? "")
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean);

  if (configuredOrigins.includes(origin)) {
    return true;
  }

  try {
    const parsed = new URL(origin);
    return parsed.hostname === "localhost" || parsed.hostname === "127.0.0.1";
  } catch {
    return false;
  }
}

function parseCookies(cookieHeader = "") {
  return cookieHeader
    .split(";")
    .map((part) => part.trim())
    .filter(Boolean)
    .reduce((accumulator, part) => {
      const separatorIndex = part.indexOf("=");
      if (separatorIndex === -1) return accumulator;

      const key = part.slice(0, separatorIndex);
      const value = decodeURIComponent(part.slice(separatorIndex + 1));
      accumulator[key] = value;
      return accumulator;
    }, {});
}

function getSessionCookieName(scope) {
  return `webeng_admin_${encodeURIComponent(scope).replaceAll("%", "_")}`;
}

function createSession(res, scope, username) {
  const sessionId = randomUUID();
  const expiresAt = new Date(Date.now() + SESSION_TTL_MS).toISOString();

  db.prepare(
    `
      INSERT INTO admin_sessions (session_id, scope, username, expires_at)
      VALUES (?, ?, ?, ?)
    `
  ).run(sessionId, scope, username, expiresAt);

  res.cookie(getSessionCookieName(scope), sessionId, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: SESSION_TTL_MS,
  });
}

function clearSessionCookie(res, scope) {
  res.clearCookie(getSessionCookieName(scope), {
    path: "/",
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
  });
}

function getSession(req, scope) {
  const cookies = parseCookies(req.headers.cookie);
  const sessionId = cookies[getSessionCookieName(scope)];
  if (!sessionId) return null;

  const session = db
    .prepare(
      `
        SELECT session_id, scope, username, expires_at
        FROM admin_sessions
        WHERE session_id = ? AND scope = ?
      `
    )
    .get(sessionId, scope);

  if (!session) {
    return null;
  }

  if (new Date(session.expires_at).getTime() <= Date.now()) {
    db.prepare("DELETE FROM admin_sessions WHERE session_id = ?").run(sessionId);
    return null;
  }

  return session;
}

function requireSession(req, res, scope) {
  const session = getSession(req, scope);
  if (session) {
    return session;
  }

  clearSessionCookie(res, scope);
  res.status(401).json({ error: "You must be logged in to modify this content." });
  return null;
}

function readCredentialsBody(req, res) {
  const username = String(req.body?.username ?? "").trim();
  const password = String(req.body?.password ?? "");

  if (!username || !password) {
    res.status(400).json({ error: "Username and password are required." });
    return null;
  }

  if (password.length < 6) {
    res.status(400).json({ error: "Password must be at least 6 characters long." });
    return null;
  }

  return { username, password };
}

function hashPassword(password, salt) {
  return scryptSync(password, salt, 64).toString("hex");
}

function verifyPassword(password, salt, expectedHash) {
  const actualHash = hashPassword(password, salt);
  return timingSafeEqual(Buffer.from(actualHash, "hex"), Buffer.from(expectedHash, "hex"));
}
