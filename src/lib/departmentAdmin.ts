import { useEffect, useState } from "react";
import { departments, type DeptCode } from "../data/department";
import type { DepartmentData } from "../types/department";
import { clearPublishedContent, fetchPublishedContent, savePublishedContent } from "./contentApi";
import { mergeWithShape } from "./jsonShape";

export type DepartmentEditableContent = DepartmentData;

function storageKey(code: string) {
  return `department-admin:${code.toUpperCase()}`;
}

function draftStorageKey(code: string) {
  return `department-admin-draft:${code.toUpperCase()}`;
}

export function getDeptDefaults(code: DeptCode): DepartmentData {
  return departments[code];
}

export function extractEditableContent(
  dept: DepartmentData
): DepartmentEditableContent {
  // Return everything now to be dynamic.
  return { ...dept };
}

export function loadDeptOverrides(
  code: DeptCode
): DepartmentEditableContent | null {
  if (typeof window === "undefined") return null;
  const raw = window.localStorage.getItem(storageKey(code));
  if (!raw) return null;

  try {
    const parsed = JSON.parse(raw) as unknown;
    const defaults = getDeptDefaults(code);
    return mergeWithShape(defaults, parsed) as DepartmentEditableContent;
  } catch {
    return null;
  }
}

export async function fetchDeptOverrides(
  code: DeptCode
): Promise<DepartmentEditableContent | null> {
  const content = await fetchPublishedContent<DepartmentEditableContent>(code);
  if (!content) return null;

  const defaults = getDeptDefaults(code);
  return mergeWithShape(defaults, content) as DepartmentEditableContent;
}

export async function saveDeptOverrides(
  code: DeptCode,
  content: DepartmentEditableContent
) {
  await savePublishedContent(code, content);
}

export async function clearDeptOverrides(code: DeptCode) {
  await clearPublishedContent(code);
}

export function loadDeptDraft(code: DeptCode): DepartmentEditableContent | null {
  if (typeof window === "undefined") return null;

  const raw = window.localStorage.getItem(draftStorageKey(code));
  if (!raw) return null;

  try {
    const parsed = JSON.parse(raw) as unknown;
    const defaults = getDeptDefaults(code);
    return mergeWithShape(defaults, parsed) as DepartmentEditableContent;
  } catch {
    return null;
  }
}

export function saveDeptDraft(code: DeptCode, content: DepartmentEditableContent) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(draftStorageKey(code), JSON.stringify(content));
}

export function clearDeptDraft(code: DeptCode) {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(draftStorageKey(code));
}

export function mergeDeptWithOverrides<T extends DepartmentData>(dept: T): T {
  const isPreviewMode =
    typeof window !== "undefined" &&
    new URLSearchParams(window.location.search).get("preview") === "dept";

  const code = dept.code as DeptCode;
  const source = isPreviewMode ? loadDeptDraft(code) : null;

  if (!source) return dept;

  return mergeWithShape(dept, source) as T;
}

export function parseEditableContent(
  code: DeptCode,
  json: string
): DepartmentEditableContent {
  const parsed = JSON.parse(json) as unknown;
  const defaults = getDeptDefaults(code);
  return mergeWithShape(defaults, parsed) as DepartmentEditableContent;
}

export function useDepartmentPageContent<T extends DepartmentData>(baseDept: T): T {
  const code = baseDept.code as DeptCode;
  const isPreviewMode =
    typeof window !== "undefined" &&
    new URLSearchParams(window.location.search).get("preview") === "dept";

  const [dept, setDept] = useState<T>(() => {
    if (!isPreviewMode) return baseDept;

    const draft = loadDeptDraft(code);
    if (!draft) return baseDept;

    return mergeWithShape(baseDept, draft) as T;
  });

  useEffect(() => {
    let cancelled = false;

    if (isPreviewMode) {
      return () => {
        cancelled = true;
      };
    }

    fetchDeptOverrides(code)
      .then((overrides) => {
        if (cancelled || !overrides) return;
        setDept(mergeWithShape(baseDept, overrides) as T);
      })
      .catch(() => {
        if (!cancelled) {
          setDept(baseDept);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [baseDept, code, isPreviewMode]);

  return dept;
}
