export type AdminCredentials = {
  username: string;
  password: string;
};

import { apiRequest } from "./api";

export type AdminAuthState = {
  hasCredentials: boolean;
  authenticated: boolean;
  username: string | null;
};

export async function loadAdminAuthState(scopeKey: string): Promise<AdminAuthState> {
  return apiRequest<AdminAuthState>(`/api/auth/state/${scopeKey}`);
}

export async function createAdminCredentials(
  scopeKey: string,
  credentials: AdminCredentials
): Promise<AdminAuthState> {
  return apiRequest<AdminAuthState>(`/api/auth/setup/${scopeKey}`, {
    method: "POST",
    body: JSON.stringify(credentials),
  });
}

export async function loginAdmin(
  scopeKey: string,
  credentials: AdminCredentials
): Promise<AdminAuthState> {
  return apiRequest<AdminAuthState>(`/api/auth/login/${scopeKey}`, {
    method: "POST",
    body: JSON.stringify(credentials),
  });
}

export async function logoutAdmin(scopeKey: string) {
  await apiRequest(`/api/auth/logout/${scopeKey}`, {
    method: "POST",
  });
}
