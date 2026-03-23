import { useEffect, useState, type ReactNode } from "react";
import {
  createAdminCredentials,
  loadAdminAuthState,
  loginAdmin,
  logoutAdmin,
} from "../lib/adminAuth";

type AdminAccessGateProps = {
  scopeKey: string;
  title: string;
  children: (controls: { logout: () => void }) => ReactNode;
};

export default function AdminAccessGate({
  scopeKey,
  title,
  children,
}: AdminAccessGateProps) {
  const [authenticated, setAuthenticated] = useState(false);
  const [hasCredentials, setHasCredentials] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    let cancelled = false;

    setIsLoading(true);
    setError("");

    loadAdminAuthState(scopeKey)
      .then((state) => {
        if (cancelled) return;
        setHasCredentials(state.hasCredentials);
        setAuthenticated(state.authenticated);
      })
      .catch((err) => {
        if (cancelled) return;
        const message = err instanceof Error ? err.message : "Failed to load admin access state.";
        setError(message);
      })
      .finally(() => {
        if (!cancelled) {
          setIsLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [scopeKey]);

  const isFirstTimeSetup = !hasCredentials;

  const logout = async () => {
    setIsSubmitting(true);
    setError("");

    try {
      await logoutAdmin(scopeKey);
      setAuthenticated(false);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to log out.";
      setError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-100 grid place-items-center px-6 py-10">
        <p className="text-sm text-gray-600">Loading admin access...</p>
      </div>
    );
  }

  if (authenticated) {
    return <>{children({ logout })}</>;
  }

  const onCreateCredentials = async () => {
    if (!username.trim() || !password) {
      setError("Username and password are required.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      const state = await createAdminCredentials(scopeKey, {
        username: username.trim(),
        password,
      });

      setHasCredentials(state.hasCredentials);
      setAuthenticated(state.authenticated);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to create admin credentials.";
      setError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const onLogin = async () => {
    setIsSubmitting(true);
    setError("");

    try {
      const state = await loginAdmin(scopeKey, {
        username: username.trim(),
        password,
      });

      setHasCredentials(state.hasCredentials);
      setAuthenticated(state.authenticated);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to log in.";
      setError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 grid place-items-center px-6 py-10">
      <div className="w-full max-w-md rounded-2xl border bg-white p-6">
        <p className="text-xs font-semibold tracking-[0.14em] text-gray-500">ADMIN ACCESS</p>
        <h1 className="mt-2 text-2xl font-black text-gray-900">{title}</h1>

        {isFirstTimeSetup ? (
          <>
            <p className="mt-3 text-sm text-gray-600">
              First-time setup. Create username + password for this admin page.
            </p>
            <div className="mt-5 space-y-3">
              <Field label="Username">
                <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  disabled={isSubmitting}
                  className="w-full rounded-lg border px-3 py-2"
                />
              </Field>
              <Field label="Password">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isSubmitting}
                  className="w-full rounded-lg border px-3 py-2"
                />
              </Field>
              <Field label="Confirm Password">
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  disabled={isSubmitting}
                  className="w-full rounded-lg border px-3 py-2"
                />
              </Field>
            </div>
            <button
              type="button"
              onClick={onCreateCredentials}
              disabled={isSubmitting}
              className="mt-5 w-full rounded-full bg-[#a90000] px-5 py-2 text-sm font-semibold text-white hover:bg-[#8f0000] disabled:cursor-not-allowed disabled:opacity-60"
            >
              Create Credentials
            </button>
          </>
        ) : (
          <>
            <p className="mt-3 text-sm text-gray-600">Enter your admin credentials.</p>
            <div className="mt-5 space-y-3">
              <Field label="Username">
                <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  disabled={isSubmitting}
                  className="w-full rounded-lg border px-3 py-2"
                />
              </Field>
              <Field label="Password">
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={isSubmitting}
                  className="w-full rounded-lg border px-3 py-2"
                />
              </Field>
            </div>
            <button
              type="button"
              onClick={onLogin}
              disabled={isSubmitting}
              className="mt-5 w-full rounded-full bg-[#a90000] px-5 py-2 text-sm font-semibold text-white hover:bg-[#8f0000] disabled:cursor-not-allowed disabled:opacity-60"
            >
              Login
            </button>
          </>
        )}

        {error && <p className="mt-4 text-sm text-red-700">{error}</p>}
      </div>
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-sm font-semibold text-gray-800">{label}</span>
      {children}
    </label>
  );
}
