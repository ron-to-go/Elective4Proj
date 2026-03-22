import { useEffect, useMemo, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { landingPageData, type LandingPageData } from "../data/landing";
import {
  loadLandingDraft,
  mergeLandingWithOverrides,
} from "../lib/landingAdmin";

type Sections = LandingPageData["sections"];

function MissionVisionSection({ data }: { data: Sections["missionVision"] }) {
  return (
    <section id="mission-vision" className="max-w-6xl mx-auto px-6 py-10">
      <SectionCard data={data}>
        <p className="mt-3 text-sm text-gray-600">Mission: {data.missionText}</p>
        <p className="mt-1 text-sm text-gray-600">Vision: {data.visionText}</p>
      </SectionCard>
    </section>
  );
}

function DepartmentGridSection({ data }: { data: Sections["departmentGrid"] }) {
  return (
    <section id="department-grid" className="max-w-6xl mx-auto px-6 py-10">
      <SectionCard data={data}>
        <p className="mt-3 text-sm text-gray-600">{data.introText}</p>
      </SectionCard>
    </section>
  );
}

function NewsSection({ data }: { data: Sections["news"] }) {
  return (
    <section id="news" className="max-w-6xl mx-auto px-6 py-10">
      <SectionCard data={data}>
        <div className="mt-3 space-y-1 text-sm text-gray-600">
          {data.items.map((item, idx) => (
            <p key={idx}>
              {item.date} - {item.title}
            </p>
          ))}
        </div>
      </SectionCard>
    </section>
  );
}

function FacilitiesSection({ data }: { data: Sections["facilities"] }) {
  return (
    <section id="facilities" className="max-w-6xl mx-auto px-6 py-10">
      <SectionCard data={data}>
        <div className="mt-3 space-y-1 text-sm text-gray-600">
          {data.highlights.map((item, idx) => (
            <p key={idx}>- {item}</p>
          ))}
        </div>
      </SectionCard>
    </section>
  );
}

function StatisticsSection({ data }: { data: Sections["statistics"] }) {
  return (
    <section id="statistics" className="max-w-6xl mx-auto px-6 py-16">
      <div className="relative overflow-hidden rounded-3xl bg-white border border-gray-100 p-8 md:p-12 shadow-[0_8px_30px_rgba(169,0,0,0.06)]">
        
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-red-500 opacity-10 blur-[80px] pointer-events-none"></div>
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-orange-400 opacity-10 blur-[80px] pointer-events-none"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-12 border-b border-gray-100 pb-8">
          <div>
            <p className="text-sm font-bold tracking-widest text-orange-500 uppercase mb-2">College Enrollment</p>
            <div className="flex items-baseline gap-4">
              <h2 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#a90000] to-orange-500 tracking-tighter">
                {data.totalStudents}
              </h2>
              <span className="text-xl md:text-2xl font-bold text-gray-700">Total Students</span>
            </div>
          </div>
          <div className="text-left md:text-right max-w-sm">
            <p className="text-gray-500 text-sm leading-relaxed">
              Empowering the next generation of engineers with excellence and passion at Bulacan State University.
            </p>
          </div>
        </div>

        <div className="relative z-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {data.departmentStats.map((dept, idx) => (
            <div 
              key={idx} 
              className="group relative flex flex-col justify-between rounded-2xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-orange-300 hover:shadow-[0_15px_30px_rgba(234,88,12,0.12)]"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#a90000] to-orange-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 rounded-t-2xl"></div>

              <div>
                <h3 className="text-2xl font-black text-gray-900 group-hover:text-[#a90000] transition-colors">{dept.dept}</h3>
                
                <p className="mt-1 mb-3 text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-widest leading-tight">
                  {dept.fullName}
                </p>

                <p className="mt-1 text-3xl font-extrabold text-gray-800">
                  {dept.students} <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase">Students</span>
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-50">
                {dept.hasBoardExam ? (
                  <div>
                    <p className="flex items-center gap-2 text-lg font-black text-orange-600 leading-none">
                      <span className="h-2 w-2 animate-pulse rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.8)]"></span>
                      {dept.passingRate}
                    </p>
                    <p className="mt-1.5 text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-tight">
                      Board Exam Pass Rate <br/>
                      <span className="text-orange-500/80">({dept.latestExamDate})</span>
                    </p>
                  </div>
                ) : (
                  <div className="py-1">
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                      Non-Board Program
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

function ContactSection({ data }: { data: Sections["contact"] }) {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-10">
      <SectionCard data={data}>
        <p className="mt-3 text-sm text-gray-600">Email: {data.email}</p>
        <p className="text-sm text-gray-600">Phone: {data.phone}</p>
        <p className="text-sm text-gray-600">Address: {data.address}</p>
      </SectionCard>
    </section>
  );
}

function LandingFooterSection({ data }: { data: Sections["footer"] }) {
  return (
    <footer id="footer" className="border-t bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-gray-500">
        <p>
          {data.statusLabel}: {data.assignedGroup}
        </p>
        <div className="mt-3 flex flex-wrap gap-4">
          {data.links.map((link, idx) => (
            <a key={idx} href={link.href} className="text-sm text-gray-700 underline">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

function SectionCard({
  data,
  children,
}: { data: { id: string; title: string; assignedGroup: string; statusLabel: string }; children?: ReactNode }) {
  return (
    <div className="rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50 px-6 py-10 text-center">
      <p className="text-xs font-semibold tracking-[0.14em] text-gray-500">
        {data.statusLabel}
      </p>
      <h2 className="mt-3 text-2xl font-bold text-gray-900">{data.title}</h2>
      <p className="mt-2 text-sm text-gray-600">{data.assignedGroup}</p>
      {children}
    </div>
  );
}

export default function LandingPage() {
  const isPreviewMode = useMemo(() => {
    if (typeof window === "undefined") return false;
    return new URLSearchParams(window.location.search).get("preview") === "landing";
  }, []);

  const [data, setData] = useState(() => {
    if (isPreviewMode) {
      return loadLandingDraft() ?? mergeLandingWithOverrides(landingPageData);
    }

    return mergeLandingWithOverrides(landingPageData);
  });

  useEffect(() => {
    if (!isPreviewMode) return;

    const onStorage = (event: StorageEvent) => {
      if (event.key !== "landing-admin-draft") return;
      setData(loadLandingDraft() ?? mergeLandingWithOverrides(landingPageData));
    };

    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, [isPreviewMode]);

  const { hero, sections } = data;

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <h1 className="font-extrabold tracking-wide text-lg">BULSU COE</h1>
          <div className="flex items-center gap-2">
            <Link
              to="/admin"
              className="rounded-full border border-gray-400 px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-50"
            >
              Landing Admin
            </Link>
            <Link
              to="/departments"
              className="rounded-full bg-[#a90000] px-5 py-2 text-sm font-semibold text-white hover:bg-[#8f0000]"
            >
              Department Pages
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section id="hero" className="max-w-6xl mx-auto px-6 py-16 md:py-20">
          <div className="rounded-3xl bg-gradient-to-r from-[#f4efe3] via-[#ead9b5] to-[#d6b26f] p-8 md:p-12">
            <p className="text-xs font-semibold tracking-[0.14em] text-[#6f4d12]">
              {hero.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl md:text-5xl font-black leading-tight text-[#2a1d0b] whitespace-pre-line">
              {hero.title}
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to={hero.primaryButtonHref}
                className="rounded-full bg-[#2a1d0b] px-5 py-2 text-sm font-semibold text-white hover:bg-black"
              >
                {hero.primaryButtonLabel}
              </Link>
            </div>
          </div>
        </section>

        <MissionVisionSection data={sections.missionVision} />
        <DepartmentGridSection data={sections.departmentGrid} />
        <NewsSection data={sections.news} />
        <FacilitiesSection data={sections.facilities} />
        <StatisticsSection data={sections.statistics} />
        <ContactSection data={sections.contact} />
      </main>

      <LandingFooterSection data={sections.footer} />
    </div>
  );
}
