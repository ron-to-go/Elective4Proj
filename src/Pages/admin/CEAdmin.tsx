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
import JsonValueEditor from "../../components/CEJsonValueEditor";
import ResizablePagePreview from "../../components/ResizablePagePreview";

const code = "CE" as const;

const SECTIONS = [
  { id: "images", label: "Media & Assets" },
  { id: "programOverview", label: "Program Overview" },
  { id: "licensureExam", label: "Licensure Exam (CELE)" },
  { id: "peo", label: "Educational Objectives (PEO)" },
  { id: "so", label: "Student Outcomes (SO)" },
  { id: "curriculum", label: "Curriculum Map" },
  { id: "facilitiesAndActivities", label: "Facilities & Activities" },
  { id: "faculty", label: "Faculty & Staff" },
  { id: "careers", label: "Career Opportunities" },
] as const;

export default function CEAdminPage() {
  const [baseDept, setBaseDept] = useState<DepartmentData | null>(null);
  const [form, setForm] = useState<DepartmentEditableContent | null>(null);
  const [activeSection, setActiveSection] = useState<string>(SECTIONS[0].id);
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
      <div className="min-h-screen grid place-items-center px-6 text-center bg-gray-50">
        <div className="bg-white p-10 rounded-[3rem] shadow-2xl border border-red-100">
          <p className="text-sm font-black text-red-600 uppercase tracking-widest">{error}</p>
        </div>
      </div>
    );
  }

  if (!baseDept || !form) {
    return (
      <div className="min-h-screen grid place-items-center px-6 text-center bg-[#1F3A4D]">
        <div className="space-y-4">
          <div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin mx-auto"></div>
          <p className="text-xs font-black text-white/40 uppercase tracking-[0.3em]">Initialising Editor...</p>
        </div>
      </div>
    );
  }

  const handleSave = () => {
    saveDeptOverrides(code, form);
    setStatus("Saved local admin override for this browser.");
    setTimeout(() => setStatus(""), 3000);
  };

  const handleReset = () => {
    if (!confirm("Are you sure? This will discard all your current changes.")) return;
    clearDeptOverrides(code);
    clearDeptDraft(code);
    setForm(extractEditableContent(baseDept));
    setStatus("Reset complete. Local override removed.");
    setTimeout(() => setStatus(""), 3000);
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
    setStatus(`Downloaded ${code}.json.`);
    setTimeout(() => setStatus(""), 3000);
  };

  const handleCopyJson = async () => {
    try {
      await navigator.clipboard.writeText(fullJsonText);
      setStatus(`Copied full JSON.`);
      setTimeout(() => setStatus(""), 3000);
    } catch {
      setStatus("Clipboard access failed.");
    }
  };

  const updateSection = (next: any) => {
    if (!form) return;
    setForm({
      ...form,
      [activeSection]: next
    });
  };

  return (
    <AdminAccessGate scopeKey={`department-${code}`} title={`${code} Department Admin`}>
      {({ logout }) => (
        <div className="min-h-screen bg-[#f8f9fa]">
          <div className="grid min-h-screen grid-cols-1 xl:grid-cols-[1.1fr_0.9fr] gap-0">
            <div className="bg-white flex flex-col h-screen overflow-hidden border-r border-gray-100 shadow-2xl relative z-10">
              {/* Header */}
              <div className="bg-[#1F3A4D] p-8 text-white relative overflow-hidden shrink-0">
                <div className="absolute right-0 top-0 text-[8rem] font-black text-white/[0.03] select-none pointer-events-none translate-x-10 -translate-y-10 italic">
                  {code}
                </div>
                
                <div className="relative z-10 flex justify-between items-start">
                  <div>
                    <p className="text-[10px] font-black text-[#D4AF37] tracking-[0.4em] uppercase mb-2">
                      Department Management
                    </p>
                    <h1 className="text-3xl font-black tracking-tighter uppercase italic leading-none">
                      {baseDept.title.split(" ").slice(0, -1).join(" ")} <span className="text-[#D4AF37]">{baseDept.title.split(" ").pop()}</span>
                    </h1>
                  </div>
                  <button 
                    onClick={logout}
                    className="p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-colors text-white/60 hover:text-white"
                    title="Logout"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>
                  </button>
                </div>
              </div>

              {/* Navigation Tabs Grid */}
              <div className="p-6 bg-white border-b border-gray-100 shrink-0">
                <div className="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-4 ml-1">Select Edit Workspace</div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3">
                  {SECTIONS.map(s => (
                    <button
                      key={s.id}
                      onClick={() => setActiveSection(s.id)}
                      className={`flex items-center justify-center p-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 border-2 ${
                        activeSection === s.id
                        ? "ce-bg-navy ce-border-gold text-white shadow-lg shadow-navy-900/20 scale-[1.02]"
                        : "bg-gray-50 border-transparent text-gray-400 hover:bg-white hover:border-gray-200 hover:text-[#1F3A4D]"
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Toolbar Actions */}
              <div className="px-8 py-4 bg-gray-50/50 border-b border-gray-100 flex justify-between items-center shrink-0">
                <div className="flex items-center gap-4">
                  <button
                    type="button"
                    onClick={handleSave}
                    className="bg-[#1F3A4D] text-white px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-[#2a4d6b] active:scale-95 transition-all shadow-lg shadow-navy-900/10"
                  >
                    Save Changes
                  </button>
                  <div className="w-px h-8 bg-gray-200"></div>
                  <div className="flex gap-2">
                    <button onClick={handleDownloadJson} className="p-3 bg-white rounded-xl text-gray-400 hover:text-[#1F3A4D] border border-gray-100 hover:border-gray-200 transition-all" title="Download JSON">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                    </button>
                    <button onClick={handleCopyJson} className="p-3 bg-white rounded-xl text-gray-400 hover:text-[#1F3A4D] border border-gray-100 hover:border-gray-200 transition-all" title="Copy Raw JSON">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>
                    </button>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button onClick={handleReset} className="p-3 bg-red-50 rounded-xl text-red-300 hover:text-red-600 hover:bg-red-100 transition-all" title="Reset All Changes">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
                  </button>
                  <Link
                    to={`/dept/${baseDept.code}`}
                    target="_blank"
                    className="bg-white border-2 border-gray-100 text-gray-400 px-4 py-3 rounded-2xl hover:text-[#1F3A4D] hover:border-[#1F3A4D] transition-all"
                    title="Open Live Site"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></svg>
                  </Link>
                </div>
              </div>

              {/* Editor Workspace */}
              <div className="flex-1 overflow-y-auto p-8 custom-scrollbar bg-gray-50/50">
                <div className="max-w-4xl mx-auto">
                  <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-gray-100 min-h-[400px]">
                    <div className="mb-10 pb-6 border-b border-gray-50 flex justify-between items-end">
                      <div>
                        <div className="text-[10px] font-black text-[#D4AF37] tracking-[0.4em] uppercase mb-1">Active Workspace</div>
                        <h2 className="text-3xl font-black text-[#1F3A4D] uppercase italic tracking-tight">
                          {SECTIONS.find(s => s.id === activeSection)?.label}
                        </h2>
                      </div>
                      <div className="text-[10px] font-black text-gray-300 uppercase tracking-widest italic">CE-ADMIN-v2.0</div>
                    </div>

                    <JsonValueEditor
                      label={activeSection}
                      value={form[activeSection as keyof DepartmentEditableContent]}
                      onChange={updateSection}
                      showLabel={false}
                    />
                  </div>
                </div>
              </div>

              {/* Status Toast */}
              {status && (
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 ce-animate-scale-in z-50">
                  <div className="bg-[#1F3A4D] text-white px-8 py-4 rounded-2xl shadow-2xl border-2 border-[#D4AF37]/30 flex items-center gap-4">
                    <div className="w-6 h-6 rounded-full bg-[#D4AF37] flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                    <span className="text-xs font-black uppercase tracking-widest">{status}</span>
                  </div>
                </div>
              )}
            </div>

            <div className="h-screen">
              <ResizablePagePreview
                title="Synchronized Live Preview"
                description="Real-time rendering of the Civil Engineering department page with your active edits."
                previewUrl={`/dept/${code}?preview=dept`}
                liveToken={fullJsonText}
              />
            </div>
          </div>
        </div>
      )}
    </AdminAccessGate>
  );
}
