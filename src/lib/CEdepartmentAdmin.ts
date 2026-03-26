import { departments, type DeptCode } from "../data/department";
import type { DepartmentData } from "../types/department";
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

export function saveDeptOverrides(code: DeptCode, content: DepartmentEditableContent) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(storageKey(code), JSON.stringify(content));
}

export function clearDeptOverrides(code: DeptCode) {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(storageKey(code));
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
  const source = isPreviewMode ? loadDeptDraft(code) : loadDeptOverrides(code);

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
