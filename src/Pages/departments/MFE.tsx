import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar";
import SectionTitle from "../../components/SectionTitle";
import Footer from "../../components/Footer";
import { mergeDeptWithOverrides } from "../../lib/departmentAdmin";
import { MFE } from "../../data/department/MFE";
import "../../styles/departments/MFE.css";

function StatItem({ value, label }: { value: number | string; label: string }) {
  return (
    <div className="group cursor-default">
      <div className="text-5xl font-black tracking-tighter italic mb-3 text-white transition-transform group-hover:scale-110 leading-none tabular-nums">
        {value.toLocaleString()}
      </div>
      <div className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 group-hover:text-slate-300 transition-colors">
        {label}
      </div>
    </div>
  );
}

interface AnimatedStatProps {
  value: number;
  label: string;
  Component: React.ComponentType<{ value: number; label: string }>;
}

const AnimatedStat = ({ value, label, Component }: AnimatedStatProps) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    if (end === 0) {
      setDisplayValue(0);
      return;
    }

    const totalMiliseconds = 2000;
    const frameRate = 16; 
    const totalFrames = totalMiliseconds / frameRate;
    const increment = end / totalFrames;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setDisplayValue(end);
        clearInterval(timer);
      } else {
        setDisplayValue(Math.floor(start));
      }
    }, frameRate);

    return () => clearInterval(timer);
  }, [value]);

  return <Component value={displayValue} label={label} />;
};

export default function MFEPage() {
  const [baseDept] = useState<typeof MFE>(MFE);
  
  const deptWithNewAccent = useMemo(() => ({
    ...baseDept,
    theme: { ...baseDept.theme, accentHex: "#26bac8" }
  }), [baseDept]);

  const dept = useMemo(() => mergeDeptWithOverrides(deptWithNewAccent), [deptWithNewAccent]);

  useEffect(() => {
    if (!dept) return;
    document.title = `${dept.code} | BULSU COE`;
    const link = (document.querySelector("link[rel='icon']") as HTMLLinkElement | null) ??
                 (document.querySelector("link[rel~='icon']") as HTMLLinkElement | null);
    if (link) link.href = `/icons/${dept.code.toLowerCase()}.svg`;
  }, [dept]);

  const onNav = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const [selectedLab, setSelectedLab] = useState<null | { name: string; image: string }>(null);

  return (
    <div className="bg-[#fcfcfc] min-h-screen font-sans selection:bg-black selection:text-white overflow-x-hidden">
      <style>{`
        @keyframes revealDown { from { opacity: 0; transform: translateY(-15px); } to { opacity: 1; transform: translateY(0); } }
        .animate-reveal-down { animation: revealDown 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .blueprint-grid { background-image: radial-gradient(#e5e7eb 1.2px, transparent 1.2px); background-size: 35px 35px; }
        .glass-panel { background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(12px); border: 1px solid rgba(229, 231, 235, 0.8); }
        .hover-lift { transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
        .hover-lift:hover { transform: translateY(-5px); }
      `}</style>

      <Navbar onNav={onNav} />

      {/* --- home --- */}
      <section id="home" className="relative mt-16 pb-24 blueprint-grid">
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/80 to-[#fcfcfc] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 animate-reveal-down text-center lg:text-left relative z-20">
              <div className="group inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-white/40 backdrop-blur-md border border-slate-200 text-slate-500 text-[10px] font-bold tracking-[0.25em] uppercase mb-10 shadow-sm transition-all duration-500 hover:border-black hover:bg-white hover:shadow-xl">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-20" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-black" />
                </span>
                <span className="group-hover:text-black transition-colors duration-500">College of Engineering</span>
                <span className="text-slate-300 font-light translate-y-[0.5px]">/</span>
                <span className="text-[8px] opacity-60 group-hover:opacity-100 transition-opacity">BULSU</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-black tracking-tight leading-none mb-4 uppercase italic">
                Manufacturing
              </h1>
              <h2 className="text-xl md:text-2xl font-light tracking-[0.3em] text-slate-300 uppercase mb-10">
                Engineering
              </h2>
              <p className="text-sm md:text-base text-slate-500 font-medium max-w-md mb-12 leading-relaxed border-l-0 lg:border-l-2 border-black lg:pl-8 italic mx-auto lg:mx-0">
                {dept.subtitle}
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-5">
                <Link to={`/dept/${dept.code}/admin`} className="px-8 py-4 bg-black text-white rounded-lg font-black text-[10px] uppercase tracking-widest shadow-xl hover:bg-slate-800 hover:-translate-y-1 transition-all active:scale-95">Open Department Admin</Link>
                <button 
                  onClick={() => onNav('peo')} 
                  className="relative z-30 px-8 py-4 bg-white border border-slate-200 text-black rounded-lg font-black text-[10px] uppercase tracking-widest hover:border-black hover:bg-slate-50 transition-all shadow-sm cursor-pointer"
                >
                  Overview
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-6 relative z-10">
              <div className="space-y-6 pt-12">
                <div className="group relative rounded-2xl overflow-hidden shadow-xl border-2 border-white hover-lift">
                  <img src={dept.images.heroLeft} className="w-full h-36 md:h-44 object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1" />
                </div>
                <div className="group relative rounded-2xl overflow-hidden shadow-xl border-2 border-white hover-lift">
                  <img src={dept.images.heroSmall1} className="w-full h-48 md:h-56 object-cover transition-all duration-700 group-hover:scale-110 group-hover:-rotate-1" />
                </div>
              </div>
              <div className="space-y-6">
                <div className="group relative rounded-2xl overflow-hidden shadow-xl border-2 border-white hover-lift">
                  <img src={dept.images.heroBig} className="w-full h-64 md:h-72 object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1" />
                </div>
                <div className="group relative rounded-2xl overflow-hidden shadow-xl border-2 border-white hover-lift">
                  <img src={dept.images.heroSmall2} className="w-full h-32 md:h-40 object-cover transition-all duration-700 group-hover:scale-110 group-hover:-rotate-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- stats --- */}
      <section id="stats" className="w-full bg-[#0f172a] border-y border-slate-800 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-8 py-20 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="shrink-0 text-center lg:text-left">
            <h2 className="text-4xl font-black text-white italic uppercase leading-none tracking-tighter">
              Department <br /> <span className="text-slate-500 font-light italic">Overview</span>
            </h2>
          </div>

          <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-8 md:gap-16 w-full max-w-4xl">
            <div className="border-l border-slate-800 pl-8 hover:border-blue-600 transition-colors duration-500">
              <AnimatedStat 
                value={dept.programOverview.stats.students} 
                label="Enrolled Students" 
                Component={StatItem} 
              />
            </div>
            <div className="border-l border-slate-800 pl-8 hover:border-blue-600 transition-colors duration-500">
              <AnimatedStat 
                value={dept.programOverview.stats.faculty} 
                label="Academic Faculty" 
                Component={StatItem} 
              />
            </div>
            <div className="border-l border-slate-800 pl-8 hover:border-blue-600 transition-colors duration-500">
              <AnimatedStat 
                value={dept.programOverview.stats.nonTeaching} 
                label="Non-Teaching Personnel" 
                Component={StatItem} 
              />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      </section>

      {/* --- peo --- */}
      <section id="peo" className="max-w-6xl mx-auto px-6 py-24 relative overflow-hidden">
        <div className="text-center mb-16 group/header cursor-default">
          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-[0.4em] block mb-2 group-hover/header:text-black transition-colors duration-500">MANUFACTURING ENGINEERING</span>
          <h2 className="text-xl md:text-3xl font-black text-black uppercase tracking-tight italic leading-none mb-4">
            Program Educational <span className="text-slate-600 group-hover/header:text-slate-900 transition-colors duration-700">Objectives (PEO)</span>
          </h2>
        </div>
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-4 relative group">
            <div className="relative rounded-xl overflow-hidden shadow-md border-2 border-white">
              <img src={dept.images.peo} className="w-full h-[300px] md:h-[450px] object-cover transition-all duration-700 group-hover:scale-105" alt="PEO" />
            </div>
          </div>
          <div className="lg:col-span-8 relative pl-0 md:pl-10">
            <div className="absolute left-0 top-0 w-[1px] h-full bg-slate-100 hidden md:block" />
            <div className="space-y-4">
              {dept.peo.bullets.map((b, idx) => (
                <div key={idx} className="group relative flex items-start gap-6 p-6 bg-white border border-slate-100 rounded-xl transition-all duration-300 hover:border-black hover:shadow-sm hover:-translate-x-1">
                  <div className="flex-1 px-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-[9px] font-black text-slate-400 group-hover:text-black transition-colors uppercase tracking-[0.2em]">PEO 0{idx + 1}</span>
                    </div>
                    <p className="text-slate-600 group-hover:text-black text-[13px] font-medium leading-relaxed transition-colors">{b}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- so --- */}
      <section id="so" className="bg-black py-28 rounded-[4rem] mx-4 md:mx-12 my-12 relative overflow-hidden shadow-2xl">
        <div className="max-w-6xl mx-auto px-8 relative z-10">
          <div className="mb-20 text-center">
            <h2 className="text-3xl font-black text-white tracking-tight italic uppercase">Student Outcomes</h2>
            <p className="text-slate-500 font-black tracking-[0.5em] text-[10px] uppercase mt-4">Competency Framework</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {dept.so.outcomes.map((o, idx) => (
              <div key={idx} className="p-10 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white transition-all duration-500 group cursor-default">
                <div className="text-5xl font-black text-white/5 group-hover:text-black/5 transition-colors mb-8 italic">SO{idx+1}</div>
                <h3 className="text-white group-hover:text-black font-black text-xs mb-5 uppercase tracking-widest leading-tight">{o.title}</h3>
                <p className="text-[11px] text-slate-500 group-hover:text-slate-600 leading-relaxed font-medium">{o.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- curriculum --- */}
      <section id="curriculum" className="relative max-w-7xl mx-auto px-6 py-32 overflow-hidden">
        <div className="grid lg:grid-cols-12 gap-12 items-start relative z-10">
          <div className="lg:col-span-4">
            <div className="sticky top-32 flex flex-col items-center lg:items-start">
              <div className="group relative">
                <div className="absolute -inset-4 bg-slate-50 rounded-[3rem] scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-700 -z-10" />
                
                <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm p-10 flex items-center justify-center transition-all duration-500 group-hover:border-black group-hover:shadow-2xl">
                  <img 
                    src={dept.images.watermark} 
                    className="w-full h-full object-contain grayscale opacity-60 group-hover:opacity-100 group-hover:scale-110 group-hover:rotate-3 transition-all duration-1000" 
                    alt={dept.code} 
                  />
                  <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: dept.theme.accentHex }} />
                  </div>
                </div>
              </div>

              <div className="mt-10 text-center lg:text-left">
                <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.4em] block mb-2">Program Core</span>
                <h2 className="text-3xl font-black text-black uppercase tracking-tighter italic leading-none">
                  Curriculum <br /> <span className="text-slate-300">Overview</span>
                </h2>
                <div className="h-[2px] w-12 mt-6 bg-black" />
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 gap-4">
              {dept.curriculum.bullets.map((item, idx) => (
                <div 
                  key={idx} 
                  className="group relative flex items-center gap-6 p-6 bg-white/50 backdrop-blur-sm border border-slate-100 rounded-2xl transition-all duration-500 hover:border-black hover:bg-white hover:shadow-[20px_20px_60px_-15px_rgba(0,0,0,0.05)] hover:-translate-x-2"
                >
                  <div 
                    className="shrink-0 w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-xs font-black text-slate-400 group-hover:bg-black group-hover:text-white group-hover:rotate-[15deg] transition-all duration-500 italic"
                  >
                    {(idx + 1).toString().padStart(2, '0')}
                  </div>

                  <div className="flex-1">
                    <p className="text-slate-600 group-hover:text-black text-sm md:text-base font-medium leading-relaxed transition-colors">
                      {item}
                    </p>
                  </div>

                  <div 
                    className="w-1 h-0 group-hover:h-8 transition-all duration-500 rounded-full" 
                    style={{ backgroundColor: dept.theme.accentHex }} 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- laboratories --- */}
      <div className="w-full relative border-y border-slate-100 bg-[#fdfeff]">
        <div 
          className="absolute inset-0 pointer-events-none" 
          style={{ 
            backgroundImage: `
              linear-gradient(to right, rgba(226, 232, 240, 0.5) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(226, 232, 240, 0.5) 1px, transparent 1px)
            `, 
            backgroundSize: '40px 40px' 
          }} 
        />
        
        <section id="laboratories" className="relative max-w-7xl mx-auto px-6 py-32 overflow-hidden">
          <div className="relative z-10">
            <div className="flex flex-col items-center mb-20 text-center">
              <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.5em] block mb-4">Technical Facilities</span>
              <h2 className="text-4xl md:text-6xl font-black text-black uppercase tracking-tighter italic leading-none">{dept.laboratories.title}</h2>
              <div className="h-1 w-24 mt-8" style={{ backgroundColor: dept.theme.accentHex }} />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {dept.laboratories.items.map((lab, idx) => (
                <div 
                  key={idx} 
                  onClick={() => setSelectedLab({ name: lab.name, image: lab.image || dept.images.heroSmall1 })}
                  className="group relative bg-white border border-slate-100 rounded-3xl overflow-hidden transition-all duration-700 hover:border-black hover:shadow-2xl cursor-zoom-in"
                >
                  <div className="aspect-[16/10] bg-slate-50 overflow-hidden relative">
                    <img 
                      src={lab.image || dept.images.heroSmall1} 
                      alt={lab.name}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 flex items-center justify-center transition-all duration-500">
                      <span className="text-white text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all">View Full Image</span>
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="font-black text-black uppercase italic text-sm tracking-tight">{lab.name}</h3>
                    <div className="w-8 h-[2px] mt-2 transition-all duration-500 group-hover:w-full" style={{ backgroundColor: dept.theme.accentHex }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {selectedLab && (
            <div 
              className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12"
              style={{ animation: 'fadeIn 0.3s ease-out' }}
              onClick={() => setSelectedLab(null)}
            >
              <div className="absolute inset-0 bg-black/90 backdrop-blur-xl" />
              
              <div className="relative max-w-5xl w-full h-full flex flex-col items-center justify-center">
                <button 
                  className="absolute -top-12 right-0 text-white hover:text-slate-400 transition-colors flex items-center gap-2 uppercase font-black text-[10px] tracking-widest"
                  onClick={() => setSelectedLab(null)}
                >
                  Close <span className="text-2xl">×</span>
                </button>
                
                <img 
                  src={selectedLab.image} 
                  alt={selectedLab.name} 
                  className="w-full max-h-[70vh] object-contain shadow-2xl rounded-lg"
                />
                
                <div className="mt-8 text-center">
                  <h3 className="text-white font-black uppercase italic text-2xl tracking-tighter">{selectedLab.name}</h3>
                  <p className="text-slate-500 text-[10px] uppercase tracking-[0.4em] mt-2">BulSU Manufacturing Engineering Facility</p>
                </div>
              </div>
            </div>
          )}
        </section>
      </div>

      {/* --- faculty --- */}
      <section id="faculty" className="max-w-6xl mx-auto px-6 py-20 bg-white border-y border-slate-100">
        <div className="relative flex flex-col md:flex-row md:items-end justify-between mb-12 gap-8 group/header cursor-default">
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-black text-black tracking-tighter uppercase italic leading-none transition-transform duration-500 group-hover/header:translate-x-2">
              {dept.faculty.title}
            </h2>
            <div className="absolute -bottom-4 left-0 h-[3px] w-12 transition-all duration-700 group-hover/header:w-full" style={{ backgroundColor: dept.theme.accentHex }} />
          </div>
          <div className="flex flex-col items-start md:items-end gap-3">
            <div className="flex items-center gap-4">
              <div className="h-px w-12 bg-slate-200 group-hover/header:w-24 transition-all duration-700" />
              <span className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">{dept.code} // {dept.title}</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dept.faculty.members.map((member, idx) => (
            <div key={idx} className="group relative flex items-start gap-5 p-6 bg-white border border-slate-100 transition-all duration-300 hover:border-black hover:shadow-xl hover:-translate-y-1">
              <div className="relative shrink-0 w-20 h-20 md:w-24 md:h-24 bg-slate-50 border border-slate-100 overflow-hidden transition-all duration-500 group-hover:border-black">
                {member.image ? (
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-50">
                    <span className="text-slate-200 font-black italic text-xl">{dept.code}</span>
                  </div>
                )}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" style={{ backgroundColor: dept.theme.accentHex }} />
              </div>
              <div className="flex-1 min-w-0 py-1">
                <div className="flex items-center gap-2 mb-2">
                   {member.role === "Department Chair" && (
                      <span className="text-[7px] font-black px-1.5 py-0.5 text-white uppercase tracking-tighter" style={{ backgroundColor: dept.theme.accentHex }}>Chair</span>
                   )}
                   <p className="text-[9px] font-bold text-slate-400 group-hover:text-black uppercase tracking-widest transition-colors">{member.role}</p>
                </div>
                <h3 className="text-base md:text-lg font-black text-black transition-colors uppercase italic leading-none break-words">{member.name}</h3>
                <div className="h-[1px] w-0 mt-3 transition-all duration-500 group-hover:w-12" style={{ backgroundColor: dept.theme.accentHex }} />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- careers --- */}
      <section id="careers" className="relative max-w-7xl mx-auto px-6 py-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full blueprint-grid opacity-40 pointer-events-none" />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[120px] opacity-10 pointer-events-none" 
          style={{ backgroundColor: dept.theme.accentHex }} 
        />

        <div className="relative z-10">
          <div className="flex flex-col items-center justify-center mb-20 text-center">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[1px] w-8 bg-slate-200" />
              <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.5em] block">
                Future Pathways
              </span>
              <div className="h-[1px] w-8 bg-slate-200" />
            </div>
            
            <h2 className="text-4xl md:text-5xl font-black text-black uppercase tracking-tighter italic leading-none mb-8">
              {dept.careers.title}
            </h2>
            
            <p className="text-slate-500 text-xs md:text-sm font-medium italic max-w-xl leading-relaxed">
              {dept.careers.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {dept.careers.cards.map((card, idx) => (
              <div 
                key={idx} 
                className="group relative bg-white/80 backdrop-blur-sm border border-slate-100 rounded-[2.5rem] p-10 transition-all duration-700 hover:border-black hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2"
              >
                <div className="absolute top-10 right-10 text-4xl font-black text-slate-50 opacity-0 group-hover:opacity-100 transition-opacity duration-700 italic">
                  0{idx + 1}
                </div>

                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-10 shadow-sm transition-all duration-500 group-hover:rotate-[10deg] group-hover:shadow-xl"
                  style={{ backgroundColor: 'white', border: '1px solid #f1f5f9' }}
                >
                  <div className="text-slate-400 group-hover:text-black transition-colors duration-500">
                    {idx === 0 && <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square"><rect x="3" y="3" width="10" height="10" /><rect x="11" y="11" width="10" height="10" strokeDasharray="2 2" /></svg>}
                    {idx === 1 && <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square"><path d="M4 7h16M4 12h12M4 17h8" /><circle cx="18" cy="17" r="2" fill="currentColor" /></svg>}
                    {idx === 2 && <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square"><circle cx="12" cy="12" r="9" /><path d="M12 3v3m0 12v3M3 12h3m12 0h3" /></svg>}
                  </div>
                </div>

                <h3 className="text-[14px] font-black text-black uppercase tracking-widest mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: dept.theme.accentHex }} />
                  {card.title}
                </h3>
                
                <p className="text-slate-500 text-[12px] leading-relaxed font-medium mb-6">
                  {card.text}
                </p>

                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[3px] bg-black transition-all duration-500 group-hover:w-1/3 rounded-t-full" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- contact --- */}
      <section id="contact" className="max-w-5xl mx-auto px-6 py-24">
        <div className="group relative bg-[#0a0a0a] rounded-[3rem] p-12 md:p-20 overflow-hidden shadow-2xl transition-all duration-700 hover:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)]">
          
          <div className="absolute inset-0 opacity-[0.05] pointer-events-none blueprint-grid" />
          <div 
            className="absolute -top-24 -right-24 w-96 h-96 rounded-full blur-[120px] opacity-20 transition-opacity duration-700 group-hover:opacity-40" 
            style={{ backgroundColor: dept.theme.accentHex }} 
          />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="text-center lg:text-left flex-1">
              <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: dept.theme.accentHex }} />
                  <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: dept.theme.accentHex }} />
                </span>
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.4em]">
                  Direct Coordination
                </span>
              </div>

              <h2 className="text-3xl md:text-5xl font-black text-white uppercase italic tracking-tighter leading-none mb-6">
                Ready to <br /> <span className="text-slate-500">Collaborate?</span>
              </h2>
              
              <p className="text-slate-400 text-xs md:text-sm font-medium max-w-md leading-relaxed italic mb-0">
                For academic inquiries, industry partnerships, or facility tours, reach out to the {dept.code} department office directly.
              </p>
            </div>

            <div className="flex flex-col items-center lg:items-end gap-6">
              <button 
                className="group/btn relative px-12 py-6 bg-white rounded-2xl overflow-hidden transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl"
              >
                <div className="relative z-10 flex items-center gap-3">
                  <span className="text-black font-black text-[11px] uppercase tracking-[0.2em]">Send Message</span>
                  <svg 
                    width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" 
                    className="text-black transition-transform duration-300 group-hover/btn:translate-x-1"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
                <div 
                  className="absolute inset-0 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-300 opacity-10"
                  style={{ backgroundColor: dept.theme.accentHex }}
                />
              </button>

              <div className="flex flex-col items-center lg:items-end gap-2">
                <span className="text-[9px] font-bold text-slate-600 uppercase tracking-widest">Available Mon—Fri</span>
                <span className="text-[9px] font-bold text-slate-600 uppercase tracking-widest">8:00 AM — 5:00 PM</span>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 w-full flex h-1.5 overflow-hidden">
            <div className="h-full w-1/3 bg-white/10" />
            <div className="h-full w-1/3 transition-all duration-1000 group-hover:w-full" style={{ backgroundColor: dept.theme.accentHex }} />
            <div className="h-full w-1/3 bg-white/10" />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}