import { apiRequest } from "./api";

type ContentResponse<T> = {
  content: T | null;
  updatedAt: string | null;
};

export async function fetchPublishedContent<T>(scope: string): Promise<T | null> {
  const response = await apiRequest<ContentResponse<T>>(`/api/content/${scope}`);
  return response.content;
}

export async function savePublishedContent<T>(scope: string, content: T) {
  await apiRequest(`/api/content/${scope}`, {
    method: "PUT",
    body: JSON.stringify({ content }),
  });
}

export async function clearPublishedContent(scope: string) {
  await apiRequest(`/api/content/${scope}`, {
    method: "DELETE",
  });
}
