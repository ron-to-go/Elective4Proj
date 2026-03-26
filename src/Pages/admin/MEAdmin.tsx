import { useEffect, useState } from "react";
import {
  clearDeptDraft,
  clearDeptOverrides,
  extractEditableContent,
  getDeptDefaults,
  loadDeptDraft,
  loadDeptOverrides,
  saveDeptDraft,
  saveDeptOverrides,
} from "../../lib/departmentAdmin";
import { mergeWithShape } from "../../lib/jsonShape";
import { ME } from "../../data/department/ME";
import AdminAccessGate from "../../components/AdminAccessGate";
import JsonValueEditor from "../../components/JsonValueEditor";
import MEAdminPreview from "../../components/MEAdminPreview";
import "../../styles/admin/MEAdmin.css";

const code = "ME" as const;
const imageKeys = [
  "heroLeft",
  "heroBig",
  "heroSmall1",
  "heroSmall2",
  "peo",
  "watermark",
] as const;

const legacyImageValues = {
  heroLeft: "/departments/ME/hero-left.png",
  heroBig: "/departments/ME/hero-big.png",
  heroSmall1: "/departments/ME/hero-small-1.png",
  heroSmall2: "/departments/ME/hero-small-2.png",
  peo: "/departments/ME/peo.png",
  watermark: "/departments/ME/watermark.png",
} as const;

const previewPages = {
  program: {
    label: "Program Page",
    route: `/dept/${code}`,
    previewUrl: `/dept/${code}?preview=dept`,
    description: "Main ME page with the hero, overview, outcomes, curriculum, facilities, and careers sections.",
  },
  excellence: {
    label: "Excellence Page",
    route: `/dept/${code}/excellence`,
    previewUrl: `/dept/${code}/excellence?preview=dept`,
    description: "Secondary ME page for licensure, research, feedback, international, community, and alumni content.",
  },
} as const;

type PreviewPage = keyof typeof previewPages;
type ImageKey = (typeof imageKeys)[number];
type WorkspaceId = "program" | "performance" | "shared" | "images" | "advanced";

type SectionDefinition = {
  id: string;
  label: string;
  help: string;
  badge: string;
  previewPage: PreviewPage;
  getValue: (dept: typeof ME) => unknown;
  applyValue: (dept: typeof ME, next: unknown) => typeof ME;
};

function makeDirectSection<K extends keyof typeof ME>(
  id: string,
  key: K,
  label: string,
  help: string,
  badge: string,
  previewPage: PreviewPage
): SectionDefinition {
  return {
    id,
    label,
    help,
    badge,
    previewPage,
    getValue: (dept) => dept[key],
    applyValue: (dept, next) =>
      ({
        ...dept,
        [key]: mergeWithShape(dept[key], next),
      }) as typeof ME,
  };
}

const sharedSections: SectionDefinition[] = [
  {
    id: "identity",
    label: "Titles and Subtitle",
    help: "Edit the department title, short title, and subtitle shown across the ME pages.",
    badge: "Shared Details",
    previewPage: "program",
    getValue: (dept) => ({
      title: dept.title,
      shortTitle: dept.shortTitle,
      subtitle: dept.subtitle,
    }),
    applyValue: (dept, next) => {
      const shaped = mergeWithShape(
        {
          title: dept.title,
          shortTitle: dept.shortTitle,
          subtitle: dept.subtitle,
        },
        next
      ) as {
        title: string;
        shortTitle: string;
        subtitle: string;
      };

      return {
        ...dept,
        title: shaped.title,
        shortTitle: shaped.shortTitle,
        subtitle: shaped.subtitle,
      };
    },
  },
  makeDirectSection("theme", "theme", "Color Theme", "Adjust the ME page accent colors.", "Shared Details", "program"),
  makeDirectSection("contact", "contact", "Contact Details", "Update the address, phone, email, and website.", "Shared Details", "program"),
  makeDirectSection("footer", "footer", "Footer", "Edit the footer text shown on both ME pages.", "Shared Details", "program"),
  makeDirectSection("excellencePage", "excellencePage", "Performance Page Link", "Edit the label and description used when linking to the secondary ME page.", "Shared Details", "excellence"),
];

const programSections: SectionDefinition[] = [
  makeDirectSection("hero", "hero", "Hero Section", "Main headline copy and the three top metrics.", "Program Page", "program"),
  makeDirectSection("programOverview", "programOverview", "Program Overview", "Overview text, cards, and summary stats.", "Program Page", "program"),
  makeDirectSection("accreditation", "accreditation", "Program Credentials", "Accreditation and basic program information.", "Program Page", "program"),
  makeDirectSection("peo", "peo", "Program Educational Objectives", "PEO title, subtitle, and bullet points.", "Program Page", "program"),
  makeDirectSection("so", "so", "Student Outcomes", "Outcome cards and supporting text.", "Program Page", "program"),
  makeDirectSection("curriculum", "curriculum", "Curriculum", "Curriculum notes, bullets, and focus areas.", "Program Page", "program"),
  makeDirectSection("industryPanel", "industryPanel", "Industry Panel", "Stakeholder and advisory panel details.", "Program Page", "program"),
  makeDirectSection("laboratories", "laboratories", "Facilities and Labs", "Facilities text and list items.", "Program Page", "program"),
  makeDirectSection("careers", "careers", "Career Cards", "Career paths shown at the end of the main page.", "Program Page", "program"),
];

const performanceSections: SectionDefinition[] = [
  makeDirectSection("licensure", "licensure", "Licensure", "Board exam benchmarks and topnotchers.", "Performance Page", "excellence"),
  makeDirectSection("research", "research", "Research", "Research metrics and contributor notes.", "Performance Page", "excellence"),
  makeDirectSection("feedback", "feedback", "Feedback and Satisfaction", "Learner and graduate satisfaction content.", "Performance Page", "excellence"),
  makeDirectSection("international", "international", "International Outlook", "Internationalization, WURI, and global exposure content.", "Performance Page", "excellence"),
  makeDirectSection("extension", "extension", "Extension and Community", "Community engineering projects and awards.", "Performance Page", "excellence"),
  makeDirectSection("alumni", "alumni", "Alumni Recognition", "Alumni cards on the excellence page.", "Performance Page", "excellence"),
];

const workspaceOptions = [
  {
    id: "program",
    label: "Program Page",
    description: "Edit the main /dept/ME page one section at a time.",
    previewPage: "program",
  },
  {
    id: "performance",
    label: "Performance Page",
    description: "Edit the /dept/ME/excellence page one section at a time.",
    previewPage: "excellence",
  },
  {
    id: "shared",
    label: "Shared Details",
    description: "Edit titles, contact details, colors, footer, and shared link labels.",
    previewPage: "program",
  },
  {
    id: "images",
    label: "Images",
    description: "Upload real images or keep the gray placeholder boxes.",
    previewPage: "program",
  },
  {
    id: "advanced",
    label: "Advanced JSON",
    description: "Only use this if you need the full ME JSON at once.",
    previewPage: "program",
  },
] as const satisfies ReadonlyArray<{
  id: WorkspaceId;
  label: string;
  description: string;
  previewPage: PreviewPage;
}>;

function getSections(workspace: WorkspaceId) {
  if (workspace === "program") return programSections;
  if (workspace === "performance") return performanceSections;
  if (workspace === "shared") return sharedSections;
  return [];
}

export default function MEAdminPage() {
  const [baseDept, setBaseDept] = useState<typeof ME | null>(null);
  const [form, setForm] = useState<typeof ME | null>(null);
  const [status, setStatus] = useState("");
  const [loadError, setLoadError] = useState("");
  const [jsonError, setJsonError] = useState("");
  const [workspace, setWorkspace] = useState<WorkspaceId>("program");
  const [selectedSectionId, setSelectedSectionId] = useState(programSections[0].id);
  const [previewPage, setPreviewPage] = useState<PreviewPage>("program");
  const [jsonDraft, setJsonDraft] = useState("");

  useEffect(() => {
    try {
      const data = getDeptDefaults(code) as typeof ME;
      const defaults = extractEditableContent(data) as typeof ME;
      const draft = loadDeptDraft(code);
      const overrides = loadDeptOverrides(code);

      setBaseDept(data);
      setForm(mergeWithShape(defaults, draft ?? overrides) as typeof ME);
      setLoadError("");
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to load department admin data.";
      setLoadError(message);
    }
  }, []);

  useEffect(() => {
    if (!form) return;
    saveDeptDraft(code, form);
    setJsonDraft(JSON.stringify(form, null, 2));
  }, [form]);

  useEffect(() => {
    const sections = getSections(workspace);
    if (sections.length === 0) return;

    if (!sections.some((section) => section.id === selectedSectionId)) {
      setSelectedSectionId(sections[0].id);
    }
  }, [workspace, selectedSectionId]);

  if (loadError) {
    return (
      <div className="min-h-screen grid place-items-center px-6 text-center">
        <p className="text-sm text-red-700">{loadError}</p>
      </div>
    );
  }

  if (!baseDept || !form) {
    return (
      <div className="min-h-screen grid place-items-center px-6 text-center">
        <p className="text-sm text-gray-600">Loading department admin...</p>
      </div>
    );
  }

  const fullJsonText = JSON.stringify(form, null, 2);
  const hasLegacyStockImages = imageKeys.some((key) => form.images[key] === legacyImageValues[key]);
  const currentSections = getSections(workspace);
  const currentSection = currentSections.find((section) => section.id === selectedSectionId) ?? currentSections[0] ?? null;
  const currentWorkspace = workspaceOptions.find((option) => option.id === workspace) ?? workspaceOptions[0];

  const activateWorkspace = (nextWorkspace: WorkspaceId) => {
    setWorkspace(nextWorkspace);

    const config = workspaceOptions.find((option) => option.id === nextWorkspace);
    if (config) {
      setPreviewPage(config.previewPage);
    }

    const sections = getSections(nextWorkspace);
    if (sections.length > 0) {
      setSelectedSectionId(sections[0].id);
    }
  };

  const handleSave = () => {
    saveDeptOverrides(code, form);
    setStatus("Saved in this browser.");
    setJsonError("");
  };

  const handleReset = () => {
    const defaults = extractEditableContent(baseDept) as typeof ME;
    clearDeptOverrides(code);
    clearDeptDraft(code);
    setForm(defaults);
    setStatus("Cleared the browser draft and restored the local default.");
    setJsonError("");
  };

  const handleDownloadJson = () => {
    const blob = new Blob([fullJsonText], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `${code}.json`;
    anchor.click();
    URL.revokeObjectURL(url);
    setStatus(`Downloaded ${code}.json.`);
  };

  const handleCopyJson = async () => {
    try {
      await navigator.clipboard.writeText(fullJsonText);
      setStatus("Copied the full ME JSON.");
    } catch {
      setStatus("Clipboard access failed. Use Download JSON instead.");
    }
  };

  const updateImage = (key: ImageKey, value: string) => {
    setForm((prev) => {
      if (!prev) return prev;

      return {
        ...prev,
        images: {
          ...prev.images,
          [key]: value,
        },
      };
    });
    setStatus(`Updated images.${key}`);
    setJsonError("");
  };

  const setImageValues = (
    resolver: (key: ImageKey, currentValue: string) => string,
    message: string
  ) => {
    setForm((prev) => {
      if (!prev) return prev;

      const nextImages = { ...prev.images };
      imageKeys.forEach((key) => {
        nextImages[key] = resolver(key, prev.images[key]);
      });

      return {
        ...prev,
        images: nextImages,
      };
    });
    setStatus(message);
    setJsonError("");
  };

  const handleImageUpload = (key: ImageKey, file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      const result = typeof reader.result === "string" ? reader.result : "";
      if (!result) {
        setStatus(`Upload failed for images.${key}`);
        return;
      }
      updateImage(key, result);
    };
    reader.onerror = () => setStatus(`Upload failed for images.${key}`);
    reader.readAsDataURL(file);
  };

  const handleApplyJson = () => {
    try {
      const parsed = JSON.parse(jsonDraft) as unknown;
      const defaults = extractEditableContent(baseDept) as typeof ME;
      const next = mergeWithShape(defaults, parsed) as typeof ME;

      setForm(next);
      setJsonError("");
      setStatus("Applied advanced JSON draft to the full ME object.");
    } catch (err) {
      const message = err instanceof Error ? err.message : "Invalid JSON.";
      setJsonError(message);
      setStatus("");
    }
  };

  const handleSectionChange = (nextValue: unknown) => {
    if (!currentSection) return;

    setForm((prev) => {
      if (!prev) return prev;
      return currentSection.applyValue(prev, nextValue);
    });
    setStatus(`Updated ${currentSection.label}.`);
  };

  const renderWorkspaceEditor = () => {
    if (workspace === "images") {
      return (
        <section className="me-admin__panel">
          <p className="me-admin__step">Step 3</p>
          <h2 className="me-admin__section-title">Update ME images</h2>
          <p className="me-admin__section-copy">
            Leave an image blank if you want the page to keep the gray placeholder guide.
          </p>

          <div className="me-admin__toolbar">
            <button
              type="button"
              className="me-admin__button me-admin__button--ghost"
              onClick={() => setImageValues(() => "", "All image slots switched back to placeholders.")}
            >
              Use Placeholder For All
            </button>
            {hasLegacyStockImages ? (
              <button
                type="button"
                className="me-admin__button me-admin__button--ghost"
                onClick={() =>
                  setImageValues(
                    (key, currentValue) =>
                      currentValue === legacyImageValues[key] ? "" : currentValue,
                    "Legacy stock-art image values were converted to placeholders."
                  )
                }
              >
                Clear Legacy Stock Art
              </button>
            ) : null}
          </div>

          <div className="me-admin__image-grid">
            {imageKeys.map((key) => {
              const currentValue = form.images[key];
              const meta = baseDept.imagePlaceholders[key];
              const isLegacyValue = currentValue === legacyImageValues[key];
              const filename = currentValue.startsWith("data:")
                ? "Local upload (data URL)"
                : isLegacyValue
                  ? "Legacy stock-art path still active"
                  : currentValue;

              return (
                <article key={key} className="me-admin__image-card">
                  <p className="me-admin__image-key">images.{key}</p>
                  <h3 className="me-admin__image-title">{meta.title}</h3>
                  <p className="me-admin__image-copy">{meta.text}</p>
                  <p className="me-admin__image-value">{filename || "Blank value - placeholder is active"}</p>

                  <div className="me-admin__image-actions">
                    <label className="me-admin__button me-admin__button--ghost">
                      Upload
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(event) => {
                          const file = event.target.files?.[0];
                          if (file) handleImageUpload(key, file);
                          event.currentTarget.value = "";
                        }}
                      />
                    </label>
                    <button
                      type="button"
                      className="me-admin__button me-admin__button--ghost"
                      onClick={() => updateImage(key, "")}
                    >
                      Use Placeholder
                    </button>
                    <button
                      type="button"
                      className="me-admin__button me-admin__button--ghost"
                      onClick={() => updateImage(key, baseDept.images[key])}
                    >
                      Reset Default
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      );
    }

    if (workspace === "advanced") {
      return (
        <section className="me-admin__panel">
          <p className="me-admin__step">Step 3</p>
          <h2 className="me-admin__section-title">Advanced ME JSON</h2>
          <p className="me-admin__section-copy">
            Only use this if you are comfortable editing the entire ME object at once.
          </p>

          <div className="me-admin__json-editor">
            <textarea
              value={jsonDraft}
              onChange={(event) => setJsonDraft(event.target.value)}
              className="me-admin__textarea"
              spellCheck={false}
            />

            <div className="me-admin__json-actions">
              <button
                type="button"
                onClick={handleApplyJson}
                className="me-admin__button me-admin__button--primary"
              >
                Apply JSON Draft
              </button>
              <button
                type="button"
                onClick={() => setJsonDraft(fullJsonText)}
                className="me-admin__button me-admin__button--ghost"
              >
                Reset JSON Draft
              </button>
            </div>
          </div>

          {jsonError ? <p className="me-admin__error">JSON error: {jsonError}</p> : null}
        </section>
      );
    }

    if (!currentSection) return null;

    return (
      <section className="me-admin__panel">
        <p className="me-admin__step">Step 3</p>
        <h2 className="me-admin__section-title">Edit one section at a time</h2>
        <p className="me-admin__section-copy">
          {currentWorkspace.description}
        </p>

        <div className="me-admin__editor-layout">
          <aside className="me-admin__section-list" aria-label="ME section list">
            {currentSections.map((section) => (
              <button
                key={section.id}
                type="button"
                onClick={() => {
                  setSelectedSectionId(section.id);
                  setPreviewPage(section.previewPage);
                }}
                className={
                  currentSection.id === section.id
                    ? "me-admin__section-button me-admin__section-button--active"
                    : "me-admin__section-button"
                }
              >
                <span className="me-admin__section-button-label">{section.label}</span>
                <span className="me-admin__section-button-copy">{section.help}</span>
              </button>
            ))}
          </aside>

          <div className="me-admin__editor-card">
            <p className="me-admin__editor-badge">{currentSection.badge}</p>
            <h3 className="me-admin__editor-title">{currentSection.label}</h3>
            <p className="me-admin__editor-help">{currentSection.help}</p>

            <div className="me-admin__editor-shell">
              <JsonValueEditor
                label={currentSection.id}
                value={currentSection.getValue(form)}
                onChange={handleSectionChange}
              />
            </div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <AdminAccessGate scopeKey={`department-${code}`} title={`${code} Department Admin`}>
      {({ logout }) => (
        <div className="me-admin">
          <div className="me-admin__layout">
            <section className="me-admin__panel">
              <p className="me-admin__eyebrow">Mechanical Engineering Admin</p>
              <h1 className="me-admin__title">Edit the ME pages</h1>
              <p className="me-admin__copy">
                This page is designed to be used one section at a time. Pick the area you want,
                open the real page in another tab, make the change here, then save.
              </p>
              <p className="me-admin__meta">
                Your working draft is kept in this browser while you edit. Use download when you
                need the final `ME.json` file.
              </p>

              <div className="me-admin__tip-grid">
                <article className="me-admin__tip-card">
                  <p className="me-admin__step">Step 1</p>
                  <p className="me-admin__tip-copy">Pick the page or area you want to edit.</p>
                </article>
                <article className="me-admin__tip-card">
                  <p className="me-admin__step">Step 2</p>
                  <p className="me-admin__tip-copy">Open the real page in a new tab to see the result clearly.</p>
                </article>
                <article className="me-admin__tip-card">
                  <p className="me-admin__step">Step 3</p>
                  <p className="me-admin__tip-copy">Edit one section at a time, then save.</p>
                </article>
              </div>

              <div className="me-admin__actions">
                <button
                  type="button"
                  onClick={handleSave}
                  className="me-admin__button me-admin__button--primary"
                >
                  Save In This Browser
                </button>
                <button
                  type="button"
                  onClick={handleDownloadJson}
                  className="me-admin__button me-admin__button--ghost"
                >
                  Download {code}.json
                </button>
                <button
                  type="button"
                  onClick={handleCopyJson}
                  className="me-admin__button me-admin__button--ghost"
                >
                  Copy JSON
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="me-admin__button me-admin__button--ghost"
                >
                  Clear Browser Draft
                </button>
                <button
                  type="button"
                  onClick={logout}
                  className="me-admin__button me-admin__button--ghost"
                >
                  Logout
                </button>
              </div>

              {status ? <p className="me-admin__status">{status}</p> : null}
              {jsonError ? <p className="me-admin__error">JSON error: {jsonError}</p> : null}
            </section>

            <section className="me-admin__panel">
              <p className="me-admin__step">Step 1</p>
              <h2 className="me-admin__section-title">Choose what you want to edit</h2>
              <p className="me-admin__section-copy">
                Start with the page or content area. The editor below will switch to the right
                section list and tools.
              </p>

              <div className="me-admin__workspace-grid">
                {workspaceOptions.map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => activateWorkspace(option.id)}
                    className={
                      workspace === option.id
                        ? "me-admin__workspace-button me-admin__workspace-button--active"
                        : "me-admin__workspace-button"
                    }
                  >
                    <span className="me-admin__workspace-label">{option.label}</span>
                    <span className="me-admin__workspace-copy">{option.description}</span>
                  </button>
                ))}
              </div>
            </section>

            <MEAdminPreview
              pages={previewPages}
              activePage={previewPage}
              onPageChange={(page) => setPreviewPage(page as PreviewPage)}
              liveToken={fullJsonText}
            />

            {renderWorkspaceEditor()}
          </div>
        </div>
      )}
    </AdminAccessGate>
  );
}
