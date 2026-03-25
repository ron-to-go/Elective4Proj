import { useEffect, useMemo, useState, type ReactNode } from "react";
import { Building2, CalendarDays, Send, Users, ArrowUpRight } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { landingPageData, type LandingPageData } from "../data/landing";
import {
  loadLandingDraft,
  mergeLandingWithOverrides,
} from "../lib/landingAdmin";
import { Mail } from "lucide-react";

import CE_Img from '../assets/Civil_Engineering.jpg';
import CPE_Img from '../assets/Computer_Engineering.jpg';
import ECE_Img from '../assets/Electronics_Engineering.jpg';
import EE_Img from '../assets/Electrical_Engineering.jpg';
import IE_Img from '../assets/Industrial_Engineering.jpg';
import ME_Img from '../assets/Mechanical_Engineering.jpg';
import MEE_Img from '../assets/Mechatronics_Engineering.jpg';
import MFE_Img from '../assets/Manufacturing_Engineering.jpg';

type Sections = LandingPageData["sections"];
type HeroStat = LandingPageData["hero"]["stats"][number];

const heroStatIcons: Record<HeroStat["icon"], typeof Send> = {
  send: Send,
  building: Building2,
  calendar: CalendarDays,
  users: Users,
};

const departments = [
  { id: 'CE', name: 'Civil Engineering', description: 'Advancing infrastructure with precision and sustainable innovation.', image: CE_Img },
  { id: 'CPE', name: 'Computer Engineering', description: 'Bridging software and hardware to power the digital future.', image: CPE_Img },
  { id: 'ECE', name: 'Electronics Engineering', description: 'Innovating communication systems and electronic technologies.', image: ECE_Img },
  { id: 'EE', name: 'Electrical Engineering', description: 'Generating power solutions and efficient energy systems.', image: EE_Img },
  { id: 'IE', name: 'Industrial Engineering', description: 'Optimizing complex processes and integrated systems.', image: IE_Img },
  { id: 'ME', name: 'Mechanical Engineering', description: 'Designing the machinery and thermal systems of tomorrow.', image: ME_Img },
  { id: 'MEE', name: 'Mechatronics Engineering', description: 'Streamlining production through advanced automation.', image: MEE_Img },
  { id: 'MFE', name: 'Manufacturing Engineering', description: 'Specialized manufacturing processes and material science.', image: MFE_Img },
];

function DepartmentGrid() {
  const navigate = useNavigate();
  return (
    <section id="programs-grid" className="max-w-6xl mx-auto px-6 py-10">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-white border border-gray-100 p-8 md:p-12 shadow-[0_8px_30px_rgba(169,0,0,0.06)]">
        
        <div className="absolute inset-0 z-0">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-red-500 opacity-[0.03] blur-[80px] pointer-events-none"></div>
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-orange-400 opacity-[0.03] blur-[80px] pointer-events-none"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:30px_30px] opacity-40" />
        </div>

        <div className="relative z-10">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-10 border-b border-gray-100 pb-8">
            <div className="space-y-1">
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-orange-500">college of engineering</p>
              <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none italic">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a90000] to-orange-500 uppercase">Engineering</span>
                <br />
                <span className="not-italic text-gray-900 uppercase">Departments</span>
              </h2>
            </div>
            <div className="max-w-xs">
              <p className="text-gray-400 text-[13px] font-medium leading-relaxed border-l-2 border-[#a90000] pl-4">
                Fostering specialized expertise and technical mastery across our diverse engineering disciplines at Bulacan State University.
              </p>
            </div>
          </div>

          {/* Grid gaps tightened to 6 for a more 'together' look */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept) => (
              <div 
                key={dept.id} 
                className="group cursor-pointer relative" 
                onClick={() => navigate(`/dept/${dept.id}`)}
              >
                {/* --- SHARP RECTANGULAR BORDER --- */}
                <div className="relative transition-all duration-500 border border-gray-200 group-hover:border-transparent">
                  
                  {/* Living Border Gradient (Sharp Edges) */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#a90000] via-orange-400 to-white p-[2px]" />

                  {/* Inner Content (Rectangle) */}
                  <div className="relative aspect-square bg-white z-10 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-translate-y-1">
                    <img 
                      src={dept.image} 
                      alt={dept.name} 
                      className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105" 
                    />
                    
                    {/* Minimalist Top Badge */}
                    <div className="absolute top-0 right-0 px-3 py-1 bg-black/60 backdrop-blur-sm text-white opacity-0 group-hover:opacity-100 transition-all duration-500 z-20">
                      <span className="text-[9px] font-bold uppercase tracking-widest">{dept.id}</span>
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-opacity" />
                    
                    <div className="absolute top-4 left-4 h-8 w-8 bg-[#a90000] text-white flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500 z-20">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>

                    <div className="absolute bottom-0 left-0 w-full p-4 text-white z-10">
                      <h3 className="text-lg font-black leading-tight uppercase tracking-tight group-hover:text-orange-400 transition-colors">
                        {dept.name}
                      </h3>
                    </div>
                  </div>
                </div>
                
                {/* Descriptive Text Content */}
                <div className="mt-4 px-1 space-y-2">
                   <p className="text-[11px] text-gray-500 leading-snug line-clamp-2 font-medium group-hover:text-gray-800 transition-colors">
                    {dept.description}
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="h-[2px] w-4 bg-gray-200 group-hover:w-10 group-hover:bg-[#a90000] transition-all duration-500" />
                    <span className="text-[10px] font-black text-[#a90000] opacity-0 group-hover:opacity-100 uppercase tracking-widest transition-all">Explore</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MissionVisionSection({ data }: { data: Sections["missionVision"] }) {
  return (
    <section id="mission-vision" className="max-w-6xl mx-auto px-6 py-16">
      <div className="relative">
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-sm font-bold tracking-[0.2em] text-orange-500 uppercase mb-2">
            COLLEGE OF ENGINEERING
          </p>
          <h2 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#a90000] to-orange-500 tracking-tighter">
            {data.title}
          </h2>
        </div>

        {/* Two-Column Grid for Separate Hover Effects */}
        <div className="grid md:grid-cols-2 gap-8 relative z-10">

          {/* Mission Card */}
          <div className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-8 md:p-10 transition-all duration-500 hover:-translate-y-3 hover:border-orange-300
      hover:shadow-[0_20px_50px_rgba(169,0,0,0.12)]">
            {/* Lively Animated Background Glow */}
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#a90000] opacity-0 blur-[60px] transition-opacity duration-500 group-hover:opacity-20 pointer-events-none"></div>

            {/* Top Border Animation */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#a90000] to-orange-500 transform scale-x-0 transition-transform duration-500 origin-left
      group-hover:scale-x-100 rounded-t-3xl"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-1.5 bg-[#a90000] rounded-full"></div>
                <h3 className="text-3xl font-black text-gray-900 group-hover:text-[#a90000] transition-colors duration-300 uppercase tracking-widest">
                  Mission
                </h3>
              </div>
              <p className="text-xl text-gray-600 leading-relaxed font-medium transition-colors duration-300 group-hover:text-gray-900">
                {data.missionText}
              </p>
            </div>

            {/* Decorative Icon or Watermark */}
            <div className="absolute bottom-4 right-6 text-8xl font-black text-gray-50 select-none transition-colors duration-500 group-hover:text-orange-50">
              M
            </div>
          </div>

          {/* Vision Card */}
          <div className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-8 md:p-10 transition-all duration-500 hover:-translate-y-3 hover:border-orange-300
      hover:shadow-[0_20px_50px_rgba(234,88,12,0.12)]">
            {/* Lively Animated Background Glow */}
            <div className="absolute -left-10 -bottom-10 h-40 w-40 rounded-full bg-orange-400 opacity-0 blur-[60px] transition-opacity duration-500 group-hover:opacity-20
      pointer-events-none"></div>

            {/* Top Border Animation */}
            <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-orange-500 to-[#a90000] transform scale-x-0 transition-transform duration-500 origin-right
      group-hover:scale-x-100 rounded-t-3xl"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-1.5 bg-orange-500 rounded-full"></div>
                <h3 className="text-3xl font-black text-gray-900 group-hover:text-orange-600 transition-colors duration-300 uppercase tracking-widest">
                  Vision
                </h3>
              </div>
              <p className="text-xl text-gray-600 leading-relaxed font-medium transition-colors duration-300 group-hover:text-gray-900">
                {data.visionText}
              </p>
            </div>

            {/* Decorative Icon or Watermark */}
            <div className="absolute bottom-4 right-6 text-8xl font-black text-gray-50 select-none transition-colors duration-500 group-hover:text-red-50">
              V
            </div>
          </div>

        </div>
      </div>
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
            <div key={idx} className="group relative flex flex-col justify-between rounded-2xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-orange-300 hover:shadow-[0_15px_30px_rgba(234,88,12,0.12)]">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#a90000] to-orange-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 rounded-t-2xl"></div>
              <div>
                <h3 className="text-2xl font-black text-gray-900 group-hover:text-[#a90000] transition-colors">{dept.dept}</h3>
                <p className="mt-1 mb-3 text-[10px] sm:text-xs font-bold text-gray-400 uppercase tracking-widest leading-tight">{dept.fullName}</p>
                <p className="mt-1 text-3xl font-extrabold text-gray-800">{dept.students} <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase">Students</span></p>
              </div>
              <div className="mt-6 pt-4 border-t border-gray-50">
                {dept.hasBoardExam ? (
                  <div>
                    <p className="flex items-center gap-2 text-lg font-black text-orange-600 leading-none">
                      <span className="h-2 w-2 animate-pulse rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.8)]"></span>
                      {dept.passingRate}
                    </p>
                    <p className="mt-1.5 text-[10px] font-bold text-gray-400 uppercase tracking-widest leading-tight">Board Exam Pass Rate <br/><span className="text-orange-500/80">({dept.latestExamDate})</span></p>
                  </div>
                ) : (
                  <div className="py-1"><p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Non-Board Program</p></div>
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
  // TODO: use data
  data = data; // doing it this way for now so that the website actually builds...

  const contacts = [
    {
      program: "Bachelor of Science in Civil Engineering",
      email: "radgerteddy.manuel@bulsu.edu.ph",
    },
    {
      program: "Bachelor of Science in Computer Engineering",
      email: "marialorena.villena@ms.bulsu.edu.ph",
    },
    {
      program: "Bachelor of Science in Electrical Engineering",
      email: "eleazar.nabong@ms.bulsu.edu.ph",
    },
    {
      program: "Bachelor of Science in Electronics Engineering",
      email: "donald.lapiguera@bulsu.edu.ph",
    },
    {
      program: "Bachelor of Science in Industrial Engineering",
      email: "jeremylaurence.banez@bulsu.edu.ph",
    },
    {
      program: "Bachelor of Science in Mechanical Engineering",
      email: "aldrin.bernardo@bulsu.edu.ph",
    },
    {
      program: "Bachelor of Science in Manufacturing Engineering",
      email: "mfe@bulsu.edu.ph",
    },
    {
      program: "Bachelor of Science in Mechatronics Engineering",
      email: "arvinjulius.tullao@bulsu.edu.ph",
    },
  ];

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-16">
      <div className="rounded-3xl bg-white border border-gray-100 p-8 md:p-12 shadow-[0_8px_30px_rgba(169,0,0,0.06)]">

        <div className="mb-10 border-b border-gray-100 pb-6">
          <p className="text-sm font-bold tracking-widest text-orange-500 uppercase mb-2">
            Contact Directory
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-[#a90000]">
            College of Engineering
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            Bulacan State University
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {contacts.map((item, idx) => (
            <div
              key={idx}
              className="group rounded-2xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-orange-400 hover:shadow-[0_15px_30px_rgba(234,88,12,0.12)]"
            >
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-[#a90000] transition-colors">
                {item.program}
              </h3>

              <div className="mt-3 flex items-center gap-3 text-sm text-gray-600">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-50 group-hover:bg-orange-100 transition">
                  <Mail className="h-4 w-4 text-orange-500" strokeWidth={2} />
                </div>
                <span className="leading-none">{item.email}</span>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-50">
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                  Bulacan State University
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LandingFooterSection({ data }: { data: Sections["footer"] }) {
  return (
    <footer id="footer" className="border-t bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-gray-500">
        <p>{data.statusLabel}: {data.assignedGroup}</p>
        <div className="mt-3 flex flex-wrap gap-4">
          {data.links.map((link, idx) => (
            <a key={idx} href={link.href} className="text-sm text-gray-700 underline">{link.label}</a>
          ))}
        </div>
      </div>
    </footer>
  );
}

function SectionCard({ data, children }: { data: { id: string; title: string; assignedGroup: string; statusLabel: string }; children?: ReactNode }) {
  return (
    <div className="rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50 px-6 py-10 text-center">
      <p className="text-xs font-semibold tracking-[0.14em] text-gray-500">{data.statusLabel}</p>
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
    if (isPreviewMode) return loadLandingDraft() ?? mergeLandingWithOverrides(landingPageData);
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

  const { navbar, hero, sections } = data;

  const scrollToPrograms = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('programs-grid')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#fbf8f4]">
      <header className="sticky top-0 z-50 border-b border-[#ece7df] bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          <Link to="/" className="shrink-0 rounded-full transition-transform duration-300 hover:scale-[1.03]">
            <img src={navbar.logoSrc} alt={navbar.logoAlt} className="h-12 w-12 object-contain sm:h-14 sm:w-14" />
          </Link>
          <nav className="hidden flex-1 items-center justify-center md:flex">
            <ul className="flex items-center gap-10 text-[15px] font-medium text-[#8f8b84]">
              {navbar.links.map((link) => (
                <li key={link.label}>
                  {link.label === "Department" || link.label === "Departments" || link.label === "Programs" ? (
                     <a href="#programs-grid" onClick={scrollToPrograms} className="transition-colors duration-200 hover:text-[#202020] cursor-pointer">{link.label}</a>
                  ) : link.isRoute ? (
                    <Link to={link.href} className="transition-colors duration-200 hover:text-[#202020]">{link.label}</Link>
                  ) : (
                    <a href={link.href} className={`transition-colors duration-200 hover:text-[#202020] ${link.label === "Home" ? "font-semibold text-[#202020]" : ""}`}>{link.label}</a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <a href={navbar.contactHref} className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#b52a16] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_20px_rgba(181,42,22,0.22)] transition-colors duration-200 hover:bg-[#992211] sm:px-8">{navbar.contactLabel}</a>
        </div>
      </header>
      <main>
        <section id="hero" className="mx-auto max-w-6xl px-4 py-10 sm:px-6 md:py-14">
          <div className="overflow-hidden rounded-[2rem] border border-[#ece7df] bg-white p-4 shadow-[0_25px_80px_rgba(15,23,42,0.08)] sm:p-5 md:p-6">
            <div className="relative overflow-hidden rounded-[1.75rem] bg-[#080606]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_40%,rgba(167,18,0,0.48),transparent_30%),radial-gradient(circle_at_48%_94%,rgba(255,123,63,0.4),transparent_28%),linear-gradient(125deg,rgba(7,7,7,0.96),rgba(16,9,8,0.88)_45%,rgba(3,3,3,0.98))]" />
              <div className="absolute inset-y-0 left-[-8%] w-[52%] bg-contain bg-left bg-no-repeat opacity-[0.18]" style={{ backgroundImage: `url('${hero.leftWatermarkSrc}')` }} />
              <div className="absolute inset-y-0 right-[-6%] w-[44%] bg-contain bg-right bg-no-repeat opacity-[0.12]" style={{ backgroundImage: `url('${hero.rightWatermarkSrc}')`, transform: "scaleX(-1) rotate(12deg)" }} />
              <div className="relative z-10 flex min-h-[26rem] flex-col items-center justify-center px-6 py-16 text-center md:min-h-[28rem] md:px-16">
                <p className="text-sm font-semibold tracking-[0.12em] text-white/80 md:text-base">{hero.eyebrow}</p>
                <h2 className="mt-5 max-w-[8ch] whitespace-pre-line text-5xl font-black leading-[0.93] text-white sm:text-6xl md:text-7xl">{hero.title}</h2>
                <div className="mt-9">
                  <Link to="#programs-grid" onClick={scrollToPrograms} className="inline-flex items-center justify-center rounded-full border-[5px] border-[#8c95c6] bg-[#ef8f33] px-8 py-3.5 text-lg font-semibold text-white shadow-[0_14px_30px_rgba(239,143,51,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#f39a44] sm:px-10">{hero.primaryButtonLabel}</Link>
                </div>
              </div>
            </div>
            <div className="grid gap-4 border-t border-[#f1ece4] px-2 py-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-6">
              {hero.stats.map((item) => {
                const Icon = heroStatIcons[item.icon];
                return (
                  <div key={item.label} className="flex items-start gap-3 rounded-2xl px-3 py-1">
                    <span className="mt-1 text-[#bcc1cf]"><Icon className="h-5 w-5" strokeWidth={1.8} /></span>
                    <div>
                      <p className="text-[1.75rem] font-bold leading-none text-[#252525]">{item.value}</p>
                      <p className="mt-2 text-sm text-[#8d8d93]">{item.label}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <MissionVisionSection data={sections.missionVision} />
        <DepartmentGrid />
        <NewsSection data={sections.news} />
        <FacilitiesSection data={sections.facilities} />
        <StatisticsSection data={sections.statistics} />
        <ContactSection data={sections.contact} />
      </main>
      <LandingFooterSection data={sections.footer} />
    </div>
  );
}
