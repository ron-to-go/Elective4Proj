import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  clearDeptDraft,
  clearDeptOverrides,
  extractEditableContent,
  getDeptDefaults,
  loadDeptDraft,
  loadDeptOverrides,
  saveDeptDraft,
  saveDeptOverrides,
  type DepartmentEditableContent,
} from "../../lib/departmentAdmin";
import { mergeWithShape } from "../../lib/jsonShape";
import type { DepartmentData } from "../../types/department";
import AdminAccessGate from "../../components/AdminAccessGate";
import JsonValueEditor from "../../components/JsonValueEditor";
import ResizablePagePreview from "../../components/ResizablePagePreview";

const code = "EE" as const;

export default function EEAdminPage() {
  const [baseDept, setBaseDept] = useState<DepartmentData | null>(null);
  const [form, setForm] = useState<DepartmentEditableContent | null>(null);
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    try {
      const data = getDeptDefaults(code);
      const defaults = extractEditableContent(data);
      const draft = loadDeptDraft(code);
      const overrides = loadDeptOverrides(code);

      setBaseDept(data);
      setForm(mergeWithShape(defaults, draft ?? overrides));
      setError("");
    } catch (err) {
      const message = err instanceof Error ? err.message : "Failed to load department admin data.";
      setError(message);
    }
  }, []);

  useEffect(() => {
    if (!form) return;
    saveDeptDraft(code, form);
  }, [form]);

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

  const handleSave = () => {
    saveDeptOverrides(code, form);
    setStatus("Saved local admin override for this browser.");
  };

  const handleReset = () => {
    clearDeptOverrides(code);
    clearDeptDraft(code);
    setForm(extractEditableContent(baseDept));
    setStatus("Reset complete. Local override removed.");
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
    setStatus(`Downloaded ${code}.json. Commit it to public/data/departments/${code}.json`);
  };

  const handleCopyJson = async () => {
    try {
      await navigator.clipboard.writeText(fullJsonText);
      setStatus(`Copied full JSON. Paste into public/data/departments/${code}.json and commit.`);
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
                  className="rounded-full bg-[#a90000] px-5 py-2 text-sm font-semibold text-white hover:bg-[#8f0000]"
                >
                  Save Local Override
                </button>
                <button
                  type="button"
                  onClick={handleDownloadJson}
                  className="rounded-full border border-gray-400 px-5 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-50"
                >
                  Download {code}.json
                </button>
                <button
                  type="button"
                  onClick={handleCopyJson}
                  className="rounded-full border border-gray-400 px-5 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-50"
                >
                  Copy JSON
                </button>
                <button
                  type="button"
                  onClick={handleReset}
                  className="rounded-full border border-gray-400 px-5 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-50"
                >
                  Reset Local Override
                </button>
                <button
                  type="button"
                  onClick={logout}
                  className="rounded-full border border-gray-400 px-5 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-50"
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
