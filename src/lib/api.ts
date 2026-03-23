type JsonObject = Record<string, unknown>;

export async function apiRequest<T>(
  path: string,
  init: RequestInit = {}
): Promise<T> {
  const headers = new Headers(init.headers);

  if (init.body && !headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }

  let response: Response;

  try {
    response = await fetch(buildApiUrl(path), {
      ...init,
      headers,
      credentials: "include",
    });
  } catch {
    throw new Error("API server is unavailable. Start `npm run server`.");
  }

  const data = (await readJson(response)) as JsonObject | null;

  if (!response.ok) {
    const message =
      typeof data?.error === "string"
        ? data.error
        : `Request failed with status ${response.status}.`;
    throw new Error(message);
  }

  return data as T;
}

function buildApiUrl(path: string): string {
  const configuredBase = import.meta.env.VITE_API_BASE_URL?.trim();
  if (configuredBase) {
    return new URL(path, ensureTrailingSlash(configuredBase)).toString();
  }

  if (typeof window === "undefined") {
    return path;
  }

  const { hostname, port, protocol, origin } = window.location;
  const isLocalHost = hostname === "localhost" || hostname === "127.0.0.1";

  if (isLocalHost && port === "5173") {
    return `${protocol}//${hostname}:3001${path}`;
  }

  return `${origin}${path}`;
}

function ensureTrailingSlash(value: string): string {
  return value.endsWith("/") ? value : `${value}/`;
}

async function readJson(response: Response): Promise<unknown> {
  if (response.status === 204) {
    return null;
  }

  const text = await response.text();
  if (!text) {
    return null;
  }

  return JSON.parse(text);
}
