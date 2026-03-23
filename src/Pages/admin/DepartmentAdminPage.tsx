import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminAccessGate from "../../components/AdminAccessGate";
import JsonValueEditor from "../../components/JsonValueEditor";
import ResizablePagePreview from "../../components/ResizablePagePreview";
import {
  clearDeptDraft,
  clearDeptOverrides,
  extractEditableContent,
  fetchDeptOverrides,
  getDeptDefaults,
  loadDeptDraft,
  saveDeptDraft,
  saveDeptOverrides,
  type DepartmentEditableContent,
} from "../../lib/departmentAdmin";
import { mergeWithShape } from "../../lib/jsonShape";
import type { DeptCode } from "../../lib/departmentData";
import type { DepartmentData } from "../../types/department";

type DepartmentAdminPageProps = {
  code: DeptCode;
};

export default function DepartmentAdminPage({
  code,
}: DepartmentAdminPageProps) {
  const [baseDept, setBaseDept] = useState<DepartmentData | null>(null);
  const [form, setForm] = useState<DepartmentEditableContent | null>(null);
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    let cancelled = false;

    const data = getDeptDefaults(code);
    const defaults = extractEditableContent(data);
    const draft = loadDeptDraft(code);

    setBaseDept(data);
    setForm(mergeWithShape(defaults, draft));
    setError("");

    if (draft) {
      return () => {
        cancelled = true;
      };
    }

    fetchDeptOverrides(code)
      .then((overrides) => {
        if (cancelled) return;
        setForm(overrides ? mergeWithShape(defaults, overrides) : defaults);
      })
      .catch((err) => {
        if (cancelled) return;
        const message =
          err instanceof Error ? err.message : "Failed to load department admin data.";
        setError(message);
      });

    return () => {
      cancelled = true;
    };
  }, [code]);

  useEffect(() => {
    if (!form) return;
    saveDeptDraft(code, form);
  }, [code, form]);

  if (error) {
    return (
      <div className="min-h-screen grid place-items-center px-6 text-center">
        <p className="text-sm text-red-700">{error}</p>
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

  const handleSave = async () => {
    setIsSubmitting(true);
    setStatus("");

    try {
      await saveDeptOverrides(code, form);
      setStatus("Saved published department content to the server.");
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to save department content.";
      setStatus(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = async () => {
    setIsSubmitting(true);
    setStatus("");

    try {
      await clearDeptOverrides(code);
      clearDeptDraft(code);
      setForm(extractEditableContent(baseDept));
      setStatus("Reset complete. Published server override removed.");
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to reset department content.";
      setStatus(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const fullJsonText = JSON.stringify({ ...baseDept, ...form }, null, 2);

  const handleDownloadJson = () => {
    const blob = new Blob([fullJsonText], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `${code}.json`;
    anchor.click();
    URL.revokeObjectURL(url);
    setStatus(`Downloaded ${code}.json from the current editor state.`);
  };

  const handleCopyJson = async () => {
    try {
      await navigator.clipboard.writeText(fullJsonText);
      setStatus("Copied full JSON from the current editor state.");
    } catch {
      setStatus("Clipboard access failed. Use Download JSON instead.");
    }
  };

  return (
    <AdminAccessGate scopeKey={`department-${code}`} title={`${code} Department Admin`}>
      {({ logout }) => (
        <div className="min-h-screen bg-gray-100">
          <div className="grid min-h-screen grid-cols-1 xl:grid-cols-[1.1fr_0.9fr] gap-6">
            <div className="border bg-white p-6 md:p-8">
              <p className="text-xs font-semibold tracking-[0.14em] text-gray-500">
                DEPARTMENT ADMIN
              </p>
              <h1 className="mt-2 text-3xl font-black text-gray-900">
                {baseDept.title} Admin Editor
              </h1>
              <p className="mt-3 text-sm text-gray-600">
                Fields are generated from department JSON structure.
              </p>

              <section className="mt-8 rounded-xl border p-5">
                <h2 className="text-lg font-bold text-gray-900">Editable Content</h2>
                <p className="mt-1 text-xs text-gray-500">
                  Add/remove keys in JSON and this form updates automatically.
                </p>
                <div className="mt-4">
                  <JsonValueEditor
                    value={form}
                    onChange={(next) => setForm(next as DepartmentEditableContent)}
                  />
                </div>
              </section>

              <div className="mt-8 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={handleSave}
                  disabled={isSubmitting}
                  className="rounded-full bg-[#a90000] px-5 py-2 text-sm font-semibold text-white hover:bg-[#8f0000] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  Save Published Content
                </button>
                <button
                  type="button"
                  onClick={handleDownloadJson}
                  disabled={isSubmitting}
                  className="rounded-full border border-gray-400 px-5 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  Download {code}.json
                </button>
                <button
                  type="button"
                  onClick={handleCopyJson}
                  disabled={isSubmitting}
                  className="rounded-full border border-gray-400 px-5 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  Copy JSON
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  disabled={isSubmitting}
                  className="rounded-full border border-gray-400 px-5 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  Reset Published Content
                </button>
                <button
                  type="button"
                  onClick={logout}
                  disabled={isSubmitting}
                  className="rounded-full border border-gray-400 px-5 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-50 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  Logout
                </button>
                <Link
                  to={`/dept/${baseDept.code}`}
                  className="rounded-full border border-gray-400 px-5 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-50"
                >
                  View Department Page
                </Link>
              </div>

              {status && <p className="mt-4 text-sm text-gray-700">{status}</p>}
            </div>

            <ResizablePagePreview
              title="Live Preview"
              description="This is the actual department page rendered in an iframe. It refreshes automatically while you type."
              previewUrl={`/dept/${code}?preview=dept`}
              liveToken={fullJsonText}
            />
          </div>
        </div>
      )}
    </AdminAccessGate>
  );
}
