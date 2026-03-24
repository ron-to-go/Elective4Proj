import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight, DraftingCompass, Cpu } from "lucide-react";
import { CircuitBackground } from "../../../public/departments/CPE/Components/CircuitBackground";
// 1. Updated Import
import CPEnavbar from "../../components/CPEnavbar";
import SectionTitle from "../../components/SectionTitle";
import Footer from "../../components/Footer";
import { mergeDeptWithOverrides } from "../../lib/departmentAdmin";
import { CPE } from "../../data/department/CPE";
import type { NavId } from "../../types/nav"; // Import your type for safety
import "../../styles/departments/CPE.css";

export default function CPEPage() {
  const [baseDept] = useState<typeof CPE>(CPE);

  const dept = useMemo(() => mergeDeptWithOverrides(baseDept), [baseDept]);
  const [activeSoIndex, setActiveSoIndex] = useState(0);
  const [activeYear, setActiveYear] = useState(0);

  const handleNextSo = () => {
    if (activeSoIndex < dept.so.outcomes.length - 1) {
      setActiveSoIndex((prev) => prev + 1);
    }
  };

  const handlePrevSo = () => {
    if (activeSoIndex > 0) {
      setActiveSoIndex((prev) => prev - 1);
    }
  };

  useEffect(() => {
    if (!dept) return;

    document.title = `${dept.code} | BULSU COE`;

    const link =
      (document.querySelector("link[rel='icon']") as HTMLLinkElement | null) ??
      (document.querySelector("link[rel~='icon']") as HTMLLinkElement | null);

    if (link) {
      link.href = `/icons/${dept.code.toLowerCase()}.svg`;
    }
  }, [dept]);

  // 2. The Scrolling Logic
  // This matches the "id" from the buttons in CPEnavbar to the "id" on your <section> tags
  const onNav = (id: NavId | string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="bg-white">
      {/* 3. Using the new Component */}
      <CPEnavbar onNav={onNav} />
      {/* --- HOME SECTION --- */}
      <section id="home" className="max-w-6xl mx-auto px-6 pt-10">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-wide text-slate-900 transition-all duration-500 hover:tracking-widest cursor-default">
            {dept.title}
          </h1>
          <p className="mt-2 text-sm text-slate-500">{dept.subtitle}</p>
          <div className="mt-5">
            <Link
              to={`/dept/${dept.code}/admin`}
              className="inline-flex items-center rounded-full border border-blue-600 px-5 py-2 text-sm font-semibold text-blue-600 transition-all duration-300 hover:bg-blue-600 hover:text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] hover:-translate-y-1"
            >
              Open Department Admin
            </Link>
          </div>
        </div>

        <section className="p-4 md:p-8">
          <div className="mt-8 grid grid-cols-12 gap-5">
            {/* LEFT CONTENT CARD (Floating Dark Tech Panel) */}
            <div className="col-span-12 lg:col-span-5 flex flex-col justify-between p-8 bg-slate-950 rounded-[2rem] border border-slate-800 relative overflow-hidden transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(59,130,246,0.3)] hover:border-blue-500/30 group">
              {/* Ambient background glow inside the card that intensifies on hover */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[80px] rounded-full pointer-events-none transition-all duration-700 group-hover:bg-blue-500/20 group-hover:scale-125" />

              <div className="relative z-10">
                <header className="mb-6">
                  <p className="text-[10px] font-bold tracking-[0.2em] text-yellow-500 uppercase mb-2">
                    {dept.hero.university}
                  </p>
                  <h1 className="text-5xl font-black text-white leading-[0.9] tracking-tighter uppercase">
                    {dept.title.split(" ").map((word, i) => (
                      <span key={i}>
                        {word} {i === 0 && <br />}
                      </span>
                    ))}
                  </h1>
                </header>

                <p className="text-slate-300 text-sm leading-relaxed mb-8 max-w-md">
                  {dept.hero.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-10">
                  <a
                    href={dept.links.explore}
                    className="px-6 py-2.5 bg-yellow-500 text-slate-950 rounded-full font-bold text-xs transition-all duration-300 hover:bg-yellow-400 hover:shadow-[0_0_20px_rgba(234,179,8,0.5)] hover:-translate-y-1"
                  >
                    Explore the Program
                  </a>
                  <a
                    href={dept.links.performance}
                    className="px-6 py-2.5 border border-slate-700 bg-slate-900/50 text-white rounded-full font-bold text-xs transition-all duration-300 hover:bg-slate-800 hover:border-blue-400 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:-translate-y-1 backdrop-blur-sm"
                  >
                    CpE Performance & Extension
                  </a>
                </div>
              </div>

              {/* DYNAMIC STATS SECTION */}
              <div className="grid grid-cols-3 gap-3 relative z-10">
                {dept.hero.stats.map((stat, index) => (
                  <div
                    key={index}
                    className="group/stat p-4 bg-slate-900/80 rounded-2xl border border-slate-800/80 backdrop-blur-sm transition-all duration-300 cursor-default hover:-translate-y-1.5 hover:bg-slate-800 hover:border-yellow-500/40 hover:shadow-[0_10px_20px_-5px_rgba(234,179,8,0.15)]"
                  >
                    <span
                      className={`block text-xl font-black transition-transform duration-300 group-hover/stat:scale-110 ${
                        stat.highlight
                          ? "text-yellow-400 drop-shadow-[0_0_8px_rgba(234,179,8,0.5)]"
                          : "text-white"
                      }`}
                    >
                      {stat.value}
                    </span>
                    <p className="text-[9px] leading-tight font-bold text-slate-400 uppercase tracking-wider mt-1 transition-colors duration-300 group-hover/stat:text-slate-300">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT IMAGE CLUSTER */}
            <div className="col-span-12 lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* BIG IMAGE */}
              <div className="group md:col-span-2 h-64 rounded-[2rem] overflow-hidden bg-slate-100 border border-slate-200 relative transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(59,130,246,0.2)] hover:border-blue-400/50 cursor-pointer">
                {/* Subtle color overlay on hover */}
                <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors duration-500 z-10 pointer-events-none" />
                <img
                  src={dept.images.heroBig}
                  alt="Hero Big"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>

              {/* LEFT TALL IMAGE */}
              <div className="group h-[400px] rounded-[2rem] overflow-hidden bg-slate-100 border border-slate-200 relative transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(59,130,246,0.2)] hover:border-yellow-400/50 cursor-pointer">
                <div className="absolute inset-0 bg-yellow-500/0 group-hover:bg-yellow-500/10 transition-colors duration-500 z-10 pointer-events-none" />
                <img
                  src={dept.images.heroLeft}
                  alt="Hero Left"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
              </div>

              {/* RIGHT STACKED IMAGES */}
              <div className="flex flex-col gap-5 h-[400px]">
                <div className="group flex-1 rounded-[2rem] overflow-hidden bg-slate-100 border border-slate-200 relative transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(59,130,246,0.2)] hover:border-blue-400/50 cursor-pointer">
                  <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors duration-500 z-10 pointer-events-none" />
                  <img
                    src={dept.images.heroSmall1}
                    alt="Hero Small 1"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                </div>
                <div className="group flex-1 rounded-[2rem] overflow-hidden bg-slate-100 border border-slate-200 relative transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-10px_rgba(59,130,246,0.2)] hover:border-yellow-400/50 cursor-pointer">
                  <div className="absolute inset-0 bg-yellow-500/0 group-hover:bg-yellow-500/10 transition-colors duration-500 z-10 pointer-events-none" />
                  <img
                    src={dept.images.heroSmall2}
                    alt="Hero Small 2"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
      ``
      {/* --- ABOUT SECTION --- */}
      <section
        id="about"
        className="w-full bg-slate-950 py-24 border-y-2 border-slate-900"
      >
        <div className="max-w-6xl mx-auto px-6">
          {/* 1. PRIMARY PROGRAM OVERVIEW (Large Format) */}
          <div className="mb-20">
            <div className="text-xs font-bold tracking-[0.3em] text-yellow-500 uppercase mb-4">
              {dept.programOverview.heading}
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white leading-[0.95] tracking-tighter uppercase mb-8">
              The Future of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
                Computer Engineering
              </span>
            </h2>
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed max-w-4xl font-medium">
              {dept.programOverview.text}
            </p>
          </div>

          {/* 2. MISSION & VISION */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 border-t border-slate-800/50 pt-16">
            <div className="relative group cursor-default">
              {/* Animated Accent Line */}
              <div className="absolute -left-4 top-0 h-full w-1 bg-yellow-500 opacity-30 group-hover:opacity-100 group-hover:shadow-[0_0_15px_rgba(234,179,8,0.6)] transition-all duration-500 rounded-full" />
              <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                Our Mission
              </h3>
              <p className="text-slate-400 text-base leading-relaxed">
                {dept.programOverview.mission ||
                  "To provide high-quality instruction and research-driven education in the field of Computer Engineering."}
              </p>
            </div>

            <div className="relative group cursor-default">
              {/* Animated Accent Line */}
              <div className="absolute -left-4 top-0 h-full w-1 bg-yellow-500 opacity-30 group-hover:opacity-100 group-hover:shadow-[0_0_15px_rgba(234,179,8,0.6)] transition-all duration-500 rounded-full" />
              <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-4 group-hover:text-yellow-400 transition-colors duration-300">
                Our Vision
              </h3>
              <p className="text-slate-400 text-base leading-relaxed">
                {dept.programOverview.vision ||
                  "A leading center of excellence recognized for producing innovative and globally competitive computer engineers."}
              </p>
            </div>
          </div>

          {/* 3. --- PROGRAM SIGNALS (Animated Cards) --- */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-20">
            {/* Regulatory Context */}
            <div className="group relative flex flex-col justify-between bg-slate-900/50 border-2 border-slate-800 p-8 rounded-[2rem] transition-all duration-300 hover:-translate-y-3 hover:border-yellow-500 hover:bg-slate-900 hover:shadow-[0_15px_40px_-10px_rgba(234,179,8,0.2)] overflow-hidden cursor-pointer">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div>
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4 transition-colors duration-300 group-hover:text-yellow-400">
                  Regulatory Signal
                </p>
                <h4 className="text-xl font-black text-white leading-tight mb-3 uppercase">
                  CHED Compliant
                </h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Fully aligned with{" "}
                  <strong className="text-slate-200">
                    CMO No. 87, s. 2017
                  </strong>
                  , ensuring a curriculum that meets international standards for
                  21st-century engineering education.
                </p>
              </div>
            </div>

            {/* Admission Standard (Highlighted Center Card) */}
            <div className="group relative flex flex-col justify-between bg-slate-900 border-2 border-yellow-500/40 p-8 rounded-[2rem] transition-all duration-300 hover:-translate-y-3 hover:border-yellow-400 hover:shadow-[0_15px_40px_-10px_rgba(234,179,8,0.3)] overflow-hidden cursor-pointer">
              {/* Permanent top glow that gets brighter on hover */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-100" />
              <div>
                <p className="text-[10px] font-black text-yellow-500 uppercase tracking-widest mb-4">
                  Admission Signal
                </p>
                <h4 className="text-xl font-black text-white leading-tight mb-3 uppercase">
                  Academic Rigor
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Entry requires a high-tier scholastic standing, prioritizing{" "}
                  <strong className="text-white">STEM track</strong> graduates
                  with specialized performance in advanced mathematics and
                  physics.
                </p>
              </div>
            </div>

            {/* Industry Linkage */}
            <div className="group relative flex flex-col justify-between bg-slate-900/50 border-2 border-slate-800 p-8 rounded-[2rem] transition-all duration-300 hover:-translate-y-3 hover:border-yellow-500 hover:bg-slate-900 hover:shadow-[0_15px_40px_-10px_rgba(234,179,8,0.2)] overflow-hidden cursor-pointer">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div>
                <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-4 transition-colors duration-300 group-hover:text-yellow-400">
                  Industry Signal
                </p>
                <h4 className="text-xl font-black text-white leading-tight mb-3 uppercase">
                  Career Readiness
                </h4>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Facilitated through the{" "}
                  <strong className="text-slate-200">
                    BulSU CarDSI Office
                  </strong>
                  , bridging students to internships in high-tech firms across
                  the region and Metro Manila.
                </p>
              </div>
            </div>
          </div>

          {/* 4. DYNAMIC STATS GRID */}
          <div className="grid grid-cols-1 md:grid-flow-col md:auto-cols-fr border-2 border-slate-800 bg-slate-900/30 rounded-3xl overflow-hidden shadow-2xl shadow-yellow-500/5">
            {dept.programOverview.stats.map((stat: any, idx: number) => (
              <Stat
                key={idx}
                value={stat.value}
                label={stat.label}
                accentHex={stat.highlight ? "#eab308" : "#64748b"}
              />
            ))}
          </div>
        </div>
      </section>
      {/* --- PEO SECTION (Sticky Sidebar Layout) --- */}
      <section
        id="peo"
        className="w-full bg-slate-950 py-24 border-y-4 border-yellow-400 border-slate-900"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* LEFT COLUMN: Sticky Header & Image */}
            <div className="lg:col-span-5 lg:sticky lg:top-32 space-y-8">
              <div>
                <p className="text-[10px] font-black tracking-[0.3em] text-yellow-400 uppercase mb-4">
                  {dept.title}
                </p>
                <h2 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tighter mb-4">
                  {dept.peo.title}
                </h2>
                <p className="text-slate-400 text-base leading-relaxed">
                  {dept.peo.subtitle}
                </p>
              </div>

              {/* Image Holder with Yellow Accent Blend */}
              <div className="rounded-[2rem] overflow-hidden bg-slate-900 border-2 border-slate-800 relative group">
                <div className="absolute inset-0 bg-yellow-400/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors duration-500" />
                <img
                  src={dept.images.peo}
                  alt="PEO Representation"
                  className="w-full h-[300px] object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>

            {/* RIGHT COLUMN: Scrolling PEO Cards */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              {dept.peo.items.map((peo, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900 border border-slate-800 p-8 rounded-[2rem] relative overflow-hidden group hover:border-yellow-400/50 transition-all duration-300 hover:-translate-y-1 shadow-lg"
                >
                  {/* Huge Watermark Number in the Background */}
                  <div className="absolute -right-4 -top-8 text-[120px] font-black text-slate-800/30 group-hover:text-yellow-400/5 transition-colors select-none">
                    0{idx + 1}
                  </div>

                  {/* Content (Z-10 to stay above the watermark) */}
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-1 bg-yellow-400 rounded-full" />
                      <h3 className="text-xl font-bold text-white uppercase tracking-tight">
                        {peo.title}
                      </h3>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed pr-8">
                      {peo.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* --- SO SECTION (Interactive Tech Flashcards) --- */}
      <section
        id="so"
        className="relative w-full bg-slate-950 py-24 overflow-hidden border-y border-slate-900"
      >
        {/* BACKGROUND IMAGE HOLDER (Neural Network / Blueprint) */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-slate-950 z-10" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950 z-10" />
          <img
            src="/images/cpe/neural-bg.jpg" /* Replace with your actual background image path */
            alt="Neural Network Background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          {/* HEADER */}
          <div className="text-center mb-16">
            <p className="text-[10px] font-black tracking-[0.3em] text-yellow-400 uppercase mb-4">
              {dept.title}
            </p>
            <h2 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tighter mb-4">
              {dept.so.title}
            </h2>
            <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto">
              {dept.so.subtitle}
            </p>
          </div>

          {/* FLASHCARD CAROUSEL CONTAINER */}
          <div className="relative h-[350px] md:h-[400px] w-full max-w-4xl mx-auto flex items-center justify-center perspective-1000">
            {dept.so.outcomes.map((outcome, index) => {
              // Calculate the distance of this card from the active card
              const offset = index - activeSoIndex;

              // Hide cards that are behind the current one, or more than 4 steps ahead
              if (offset < 0 || offset > 4) return null;

              const isActive = offset === 0;

              return (
                <div
                  key={index}
                  className={`absolute top-0 transition-all duration-500 ease-out border-2 rounded-2xl ${
                    isActive
                      ? "bg-slate-900 border-yellow-400 shadow-[0_0_40px_rgba(250,204,21,0.15)] z-50 cursor-default"
                      : "bg-slate-800/90 border-slate-700 cursor-pointer hover:border-slate-500"
                  }`}
                  style={{
                    // CSS Math to create the 3D stacking effect pushing cards to the right
                    transform: isActive
                      ? "translateX(-50%) scale(1)"
                      : `translateX(calc(-50% + ${offset * 60}px)) scale(${1 - offset * 0.05})`,
                    zIndex: 50 - offset,
                    opacity: 1 - offset * 0.2,
                    width: "100%",
                    maxWidth: "600px",
                    left: "50%",
                  }}
                  onClick={() => {
                    // Allow users to click a background card to jump directly to it
                    if (!isActive) setActiveSoIndex(index);
                  }}
                >
                  {/* CARD INNER CONTENT */}
                  <div className="p-6 md:p-8 h-full flex flex-col">
                    {/* Card Header */}
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h4 className="text-yellow-400 font-bold tracking-widest text-xs mb-1 uppercase">
                          Student Outcomes
                        </h4>
                        <h3
                          className={`font-black ${isActive ? "text-4xl text-yellow-400" : "text-3xl text-slate-500"} transition-colors`}
                        >
                          SO {index + 1}
                        </h3>
                      </div>
                      <div
                        className={`p-3 rounded-lg border ${isActive ? "bg-slate-950 border-yellow-400/30" : "bg-transparent border-transparent"}`}
                      >
                        {isActive ? (
                          <DraftingCompass className="w-8 h-8 text-slate-400" />
                        ) : (
                          <Cpu className="w-6 h-6 text-slate-600" />
                        )}
                      </div>
                    </div>

                    {/* Card Body (Circuit Board Styling) */}
                    <div
                      className={`flex-grow border ${isActive ? "border-yellow-400/50" : "border-slate-700"} rounded-lg p-6 relative flex items-center justify-center text-center`}
                    >
                      {/* Circuit corner accents for active card */}
                      {isActive && (
                        <>
                          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-yellow-400 -mt-[1px] -ml-[1px] rounded-tl-lg" />
                          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-yellow-400 -mb-[1px] -mr-[1px] rounded-br-lg" />
                        </>
                      )}

                      <p
                        className={`${isActive ? "text-white text-lg md:text-xl font-medium" : "text-slate-500 text-sm"} leading-relaxed`}
                      >
                        {isActive
                          ? outcome.text
                          : "Click to expand outcome details..."}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* NAVIGATION CONTROLS */}
          <div className="flex flex-col items-center justify-center mt-12 gap-4 relative z-20">
            <div className="flex items-center gap-4">
              <button
                onClick={handlePrevSo}
                disabled={activeSoIndex === 0}
                className="p-3 rounded-lg border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-slate-950 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-yellow-400 transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNextSo}
                disabled={activeSoIndex === dept.so.outcomes.length - 1}
                className="p-3 rounded-lg border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-slate-950 disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-yellow-400 transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            <div className="text-xl font-black text-slate-500 tracking-widest">
              <span className="text-yellow-400">
                {String(activeSoIndex + 1).padStart(2, "0")}
              </span>
              <span className="text-slate-700 mx-2">/</span>
              {dept.so.outcomes.length}
            </div>
          </div>
        </div>
      </section>
      {/* --- CURRICULUM SECTION --- */}
      <section
        id="curriculum"
        className="relative w-full bg-slate-950 py-24 overflow-hidden border-t border-slate-900"
      >
        {/* The Custom Circuit Background */}
        <CircuitBackground />

        {/* Ambient Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-900/20 blur-[120px] rounded-full pointer-events-none z-0" />

        <div className="relative z-10 max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          {/* LEFT COLUMN: Text & Interactive Curriculum Tabs */}
          <div className="md:col-span-7 space-y-6">
            <div className="text-sm font-bold text-yellow-500 tracking-[0.2em] uppercase drop-shadow-md">
              Take a Tour
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              {dept.curriculum.title}
            </h2>
            <p className="text-base text-slate-300 leading-relaxed bg-slate-950/50 p-4 rounded-xl backdrop-blur-sm border border-slate-800">
              {dept.curriculum.text}
            </p>

            {/* --- INTERACTIVE TABS CONTAINER --- */}
            <div className="mt-8 bg-slate-900/60 backdrop-blur-md border border-slate-700/50 rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/10">
              {/* Tab Header / Buttons */}
              <div className="flex overflow-x-auto border-b border-slate-700/50 scrollbar-hide">
                {dept.curriculum.yearLevels.map(
                  (yearLevel: any, idx: number) => (
                    <button
                      key={idx}
                      onClick={() => setActiveYear(idx)}
                      className={`flex-1 min-w-[100px] py-4 px-4 text-sm font-bold uppercase tracking-wider transition-all duration-300 border-b-2 ${
                        activeYear === idx
                          ? "border-yellow-500 text-yellow-400 bg-slate-800/50"
                          : "border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/30"
                      }`}
                    >
                      {yearLevel.year}
                    </button>
                  ),
                )}
              </div>

              {/* Tab Content (Subjects List) */}
              <div className="p-6">
                <div className="mb-4 flex items-center justify-between">
                  <h4 className="text-lg font-bold text-white">
                    {dept.curriculum.yearLevels[activeYear].title}
                  </h4>
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                    Total Units:{" "}
                    {dept.curriculum.yearLevels[activeYear].totalUnits}
                  </span>
                </div>

                <ul className="space-y-3">
                  {dept.curriculum.yearLevels[activeYear].subjects.map(
                    (subject: any, sIdx: number) => (
                      <li
                        key={sIdx}
                        className="group flex items-center justify-between p-3 rounded-lg bg-slate-950/40 border border-transparent hover:border-slate-700 transition-colors duration-300"
                      >
                        <div className="flex items-center gap-3">
                          {/* Small Tech Node Bullet */}
                          <div className="h-1.5 w-1.5 rounded-full bg-yellow-500 shadow-[0_0_5px_rgba(234,179,8,0.8)] group-hover:scale-150 transition-transform duration-300" />
                          <span className="text-sm font-medium text-slate-300 group-hover:text-white transition-colors duration-300">
                            {subject.name}
                          </span>
                        </div>
                        <span className="text-xs font-bold text-slate-500 group-hover:text-yellow-500 transition-colors duration-300">
                          {subject.units} Units
                        </span>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Interactive Image/Graphic */}
          <div className="md:col-span-5 sticky top-24">
            <div className="group relative h-[400px] md:h-[520px] w-full rounded-3xl bg-slate-900/60 border border-blue-500/30 flex items-center justify-center overflow-hidden backdrop-blur-md transition-all duration-500 hover:border-yellow-500/80 hover:bg-slate-900/80 hover:shadow-[0_0_50px_rgba(59,130,246,0.2)] cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <img
                src={dept.images.watermark}
                alt="Curriculum Overview Graphic"
                className="relative z-10 w-[280px] md:w-[380px] opacity-40 transition-all duration-700 ease-out group-hover:scale-110 group-hover:opacity-80 drop-shadow-[0_0_25px_rgba(59,130,246,0.4)]"
              />
            </div>
          </div>
        </div>
      </section>
      {/* --- LABORATORIES SECTION --- */}
      <section
        id="laboratories"
        className="relative w-full bg-slate-950 py-24 overflow-hidden border-t border-slate-900"
      >
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-yellow-500 [&_h2]:text-white [&_p]:text-slate-300 bg-slate-950/40 inline-block px-8 py-4 rounded-2xl backdrop-blur-sm border border-slate-800/50 mb-8">
            <SectionTitle
              center
              eyebrow={dept.title}
              title={dept.laboratories.title}
              subtitle="Department laboratories and learning spaces"
            />
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {dept.laboratories.items.map((lab, idx) => (
              <div
                key={idx}
                className="group relative flex flex-col justify-between rounded-2xl border-2 border-slate-700 bg-slate-900/80 backdrop-blur-md p-8 transition-all duration-300 hover:-translate-y-3 hover:border-blue-400 hover:bg-slate-900 hover:shadow-[0_15px_40px_-10px_rgba(59,130,246,0.3)] overflow-hidden cursor-pointer"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div>
                  <div className="text-xs font-bold text-slate-400 tracking-[0.15em] transition-colors duration-300 group-hover:text-blue-400">
                    LAB 0{idx + 1}
                  </div>
                  <h3 className="mt-3 text-xl font-bold text-white transition-colors duration-300">
                    {lab}
                  </h3>
                </div>

                <div className="mt-8 flex items-center text-slate-500 transition-colors duration-300 group-hover:text-yellow-500">
                  <span className="text-sm font-semibold uppercase tracking-wider">
                    Explore Facility
                  </span>
                  <svg
                    className="w-5 h-5 ml-2 transform transition-all duration-300 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* --- FACULTY SECTION : SECURE ID BADGE APPROACH --- */}
      <section
        id="faculty"
        className="relative w-full bg-slate-950 py-24 overflow-hidden border-t border-slate-900"
      >
        {/* Ambient Tech Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950 z-0" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-20 z-0" />

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="text-yellow-500 [&_h2]:text-white mb-16 text-center">
            <p className="text-xs font-mono tracking-[0.3em] text-slate-500 mb-4">
              // SYS.DIR.FACULTY_ROSTER
            </p>
            <SectionTitle
              center
              eyebrow={dept.title}
              title="Department Faculty"
            />
          </div>

          {/* ID Badge Grid Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {dept.faculty.members.map((member: any, idx: number) => {
              const isLeadership = idx === 0;

              return (
                <div
                  key={`${member.name}-${idx}`}
                  className={`group relative flex flex-col rounded-xl border bg-slate-900 overflow-hidden transition-all duration-300 hover:-translate-y-2 cursor-default ${
                    isLeadership
                      ? "border-yellow-500/50 shadow-[0_0_20px_rgba(234,179,8,0.1)] hover:shadow-[0_15px_30px_-5px_rgba(234,179,8,0.3)]"
                      : "border-slate-800 hover:border-blue-500/50 hover:shadow-[0_15px_30px_-5px_rgba(59,130,246,0.2)]"
                  }`}
                >
                  {/* Animated Laser Scanner Line */}
                  <div
                    className={`absolute left-0 w-full h-[2px] -translate-y-[20px] group-hover:translate-y-[400px] transition-transform duration-[1.5s] ease-in-out opacity-0 group-hover:opacity-100 z-50 pointer-events-none ${
                      isLeadership
                        ? "bg-yellow-400 shadow-[0_0_15px_#facc15]"
                        : "bg-blue-400 shadow-[0_0_15px_#60a5fa]"
                    }`}
                  />

                  {/* Top Lanyard/Clip Area */}
                  <div className="h-8 w-full bg-slate-950 border-b border-slate-800 flex justify-center items-center">
                    <div className="w-12 h-2 rounded-full bg-slate-800/80 shadow-inner" />
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    {/* Badge Header: Microchip & Security Level */}
                    <div className="flex justify-between items-start mb-6">
                      {/* SVG Microchip */}
                      <svg
                        className={`w-8 h-8 ${isLeadership ? "text-yellow-500" : "text-slate-600 group-hover:text-blue-400"} transition-colors`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                        />
                      </svg>

                      <div className="text-right">
                        <p className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">
                          Clearance
                        </p>
                        <p
                          className={`text-xs font-black tracking-widest uppercase ${isLeadership ? "text-yellow-500" : "text-blue-500"}`}
                        >
                          {isLeadership ? "LVL 01 : CHAIR" : "LVL 02 : INST"}
                        </p>
                      </div>
                    </div>

                    {/* Portrait Area */}
                    <div className="relative mb-6">
                      <div
                        className={`w-full aspect-square overflow-hidden rounded-lg border-2 bg-slate-950 transition-colors duration-500 ${
                          isLeadership
                            ? "border-yellow-500/30 group-hover:border-yellow-400"
                            : "border-slate-800 group-hover:border-blue-500/50"
                        }`}
                      >
                        <img
                          src={member.imageUrl || "/api/placeholder/300/300"}
                          alt={`${member.name} portrait`}
                          className="w-full h-full object-cover transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
                        />
                        {/* Digital Glitch/Overlay effect on the image */}
                        <div
                          className={`absolute inset-0 opacity-20 mix-blend-overlay ${isLeadership ? "bg-yellow-500" : "bg-blue-500"}`}
                        />
                      </div>
                      {/* Registration Number Watermark */}
                      <div className="absolute -bottom-2 -right-2 bg-slate-900 border border-slate-700 px-2 py-1 rounded text-[8px] font-mono text-slate-400">
                        ID-{Math.floor(Math.random() * 9000) + 1000}-
                        {idx.toString().padStart(2, "0")}
                      </div>
                    </div>

                    {/* Info Area */}
                    <div className="mt-auto">
                      <h3 className="text-lg font-bold text-white uppercase tracking-tight leading-tight mb-2">
                        {member.name}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-1.5 h-1.5 rounded-full ${isLeadership ? "bg-yellow-500 animate-pulse" : "bg-blue-500"}`}
                        />
                        <p className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                          {member.role}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Tech Barcode (CSS Generated) */}
                  <div className="mt-auto px-6 pb-4">
                    <div
                      className={`w-full h-6 opacity-30 group-hover:opacity-70 transition-opacity duration-300`}
                      style={{
                        backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 2px, ${isLeadership ? "#facc15" : "#fff"} 2px, ${isLeadership ? "#facc15" : "#fff"} 4px, transparent 4px, transparent 5px, ${isLeadership ? "#facc15" : "#fff"} 5px, ${isLeadership ? "#facc15" : "#fff"} 6px, transparent 6px, transparent 10px, ${isLeadership ? "#facc15" : "#fff"} 10px, ${isLeadership ? "#facc15" : "#fff"} 12px)`,
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      ``
      {/* --- CAREERS SECTION --- */}
      <section id="careers" className="max-w-6xl mx-auto px-6 pt-16">
        <SectionTitle
          center
          eyebrow={dept.title}
          title={dept.careers.title}
          subtitle={dept.careers.subtitle}
        />

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
          {dept.careers.cards.map((card, idx) => (
            <div
              key={idx}
              className="rounded-2xl border bg-white p-6 text-center"
            >
              <div className="text-3xl" aria-hidden="true">
                {card.icon}
              </div>
              <h3 className="mt-4 font-bold text-gray-900">{card.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{card.text}</p>
            </div>
          ))}
        </div>
      </section>
      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="max-w-6xl mx-auto px-6 pt-16">
        <div className="rounded-2xl border bg-gray-50 p-6 md:p-8">
          <h2 className="text-xl font-bold text-gray-900">
            Department Contact
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Add contact details for {dept.title} in this section.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}

// Sub-components (Stat, Bullet, OutcomeCard) stay the same as your original file
function Stat({
  value,
  label,
  accentHex,
}: {
  value: number | string;
  label: string;
  accentHex: string;
}) {
  return (
    <div className="bg-slate-900/50 p-10 border-slate-800 border-r last:border-r-0 hover:bg-slate-900 transition-colors group">
      <div
        className="text-5xl font-black tracking-tighter transition-transform group-hover:scale-110 duration-300"
        style={{ color: accentHex }}
      >
        {value}
      </div>
      <div className="mt-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
        {label}
      </div>
    </div>
  );
}
