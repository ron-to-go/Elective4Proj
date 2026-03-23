import { useEffect, useMemo, useState } from "react";
import { landingPageData, type LandingPageData } from "../data/landing";
import { clearPublishedContent, fetchPublishedContent, savePublishedContent } from "./contentApi";
import { mergeWithShape } from "./jsonShape";

export type LandingEditableContent = LandingPageData;

const STORAGE_KEY = "landing-admin";
const DRAFT_KEY = "landing-admin-draft";

function parseStoredLandingContent(raw: string): LandingEditableContent | null {
  try {
    const parsed = JSON.parse(raw) as unknown;
    return mergeWithShape(landingPageData, parsed);
  } catch {
    return null;
  }
}

export function loadLandingOverrides(): LandingEditableContent | null {
  if (typeof window === "undefined") return null;
  return parseStoredLandingContent(window.localStorage.getItem(STORAGE_KEY) ?? "");
}

export async function fetchLandingOverrides(): Promise<LandingEditableContent | null> {
  const content = await fetchPublishedContent<LandingEditableContent>("landing");
  if (!content) return null;
  return mergeWithShape(landingPageData, content);
}

export async function saveLandingOverrides(content: LandingEditableContent) {
  await savePublishedContent("landing", content);
}

export async function clearLandingOverrides() {
  await clearPublishedContent("landing");
}

export function loadLandingDraft(): LandingEditableContent | null {
  if (typeof window === "undefined") return null;

  const raw = window.localStorage.getItem(DRAFT_KEY);
  if (!raw) return null;

  return parseStoredLandingContent(raw);
}

export function saveLandingDraft(content: LandingEditableContent) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(DRAFT_KEY, JSON.stringify(content));
}

export function clearLandingDraft() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(DRAFT_KEY);
}

export function mergeLandingWithOverrides(base: LandingPageData): LandingPageData {
  return base;
}

export function getLandingDefaults(): LandingEditableContent {
  return landingPageData;
}

export function useLandingPageContent() {
  const isPreviewMode = useMemo(() => {
    if (typeof window === "undefined") return false;
    return new URLSearchParams(window.location.search).get("preview") === "landing";
  }, []);

  const [data, setData] = useState<LandingPageData>(() => {
    if (isPreviewMode) {
      return loadLandingDraft() ?? landingPageData;
    }

    return landingPageData;
  });

  useEffect(() => {
    let cancelled = false;

    if (isPreviewMode) {
      return () => {
        cancelled = true;
      };
    }

    fetchLandingOverrides()
      .then((overrides) => {
        if (cancelled || !overrides) return;
        setData(overrides);
      })
      .catch(() => {
        if (!cancelled) {
          setData(landingPageData);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [isPreviewMode]);

  useEffect(() => {
    if (!isPreviewMode) return;

    const onStorage = (event: StorageEvent) => {
      if (event.key !== DRAFT_KEY) return;
      setData(loadLandingDraft() ?? landingPageData);
    };

    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, [isPreviewMode]);

  return data;
}
