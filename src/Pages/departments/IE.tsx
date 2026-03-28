import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar";
import SectionTitle from "../../components/SectionTitle";
import Footer from "../../components/Footer";
import { mergeDeptWithOverrides } from "../../lib/departmentAdmin";
import { IE } from "../../data/department/IE";
import "../../styles/departments/IE.css";

export default function IEPage() {
  const [selectedYear, setSelectedYear] = useState<any | null>(null);
  const [baseDept] = useState<typeof IE>(IE);

  const dept = useMemo(
    () => mergeDeptWithOverrides(baseDept),
    [baseDept]
  );

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

  const onNav = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const [heroImgIndex, setHeroImgIndex] = useState(0);

  const heroImages = useMemo(() => [
    dept.images.heroBig,
    dept.images.heroLeft,
    dept.images.heroSmall1,
    dept.images.heroSmall2
  ], [dept.images]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroImgIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000); // 
    return () => clearInterval(interval);
  }, [heroImages]);

  return (
    <div className="bg-white min-h-screen text-gray-900">
      <Navbar onNav={onNav} />

      <section id="home" className="relative max-w-7xl mx-auto px-6 pt-16 pb-20 overflow-hidden">
  {/* Add a subtle background glow */}
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(22,163,74,0.05)_0%,_transparent_70%)] pointer-events-none" />

  <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
    <div className="lg:col-span-5 text-left">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-100 text-green-700 text-xs font-bold mb-6 animate-fade-in">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
        </span>
        CPE DEPARTMENT
      </div>
      <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-gray-900 leading-[1.1]">
        {dept.title.split(' ')[0]} <br/>
        <span className="text-[#16a34a]">{dept.title.split(' ').slice(1).join(' ')}</span>
      </h1>
      <p className="mt-6 text-lg text-gray-500 leading-relaxed max-w-md">
        {dept.subtitle}
      </p>
      
      <div className="mt-8 flex flex-wrap items-center gap-4">
        {/* Main Explore Button */}
        <button 
          onClick={() => onNav('about')} 
          className="px-8 py-4 bg-[#16a34a] text-white rounded-2xl font-bold shadow-[0_20px_40px_-10px_rgba(22,163,74,0.3)] hover:scale-105 active:scale-95 transition-all"
        >
          Explore Program
        </button>

        {/* Back and Styled: Admin Link */}
        <Link
          to={`/dept/${dept.code}/admin`}
          className="group flex items-center gap-2 px-6 py-4 rounded-2xl border border-gray-200 text-sm font-bold text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition-all"
        >
          <span className="opacity-60 group-hover:opacity-100 transition-opacity">🔐</span>
          Open Department Admin
        </Link>
      </div>
    </div>

    {/* The Dynamic Bento-Grid Hero */}
    <div className="lg:col-span-7 grid grid-cols-12 gap-4">
      {/* Changing Image Card */}
      <div className="col-span-8 relative group h-[400px] rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-700 hover:rotate-1">
        {heroImages.map((img, idx) => (
          <img
            key={img}
            src={img}
            alt=""
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
              idx === heroImgIndex ? "opacity-100 z-10" : "opacity-0 z-0"
            } group-hover:scale-110 transition-transform duration-[3000ms]`}
          />
        ))}
      </div>

      <div className="col-span-4 flex flex-col gap-4">
        <div className="h-1/2 rounded-[2rem] overflow-hidden shadow-xl transition-all hover:-translate-x-2">
           <img src={dept.images.heroLeft} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="h-1/2 rounded-[2rem] bg-gradient-to-br from-[#16a34a] to-[#115e2e] p-6 text-white flex flex-col justify-end shadow-xl transition-all hover:-translate-y-2">
           <div className="text-3xl font-black">{dept.programOverview.stats.students}+</div>
           <div className="text-[10px] font-bold uppercase tracking-widest opacity-80">Active Students</div>
        </div>
      </div>
    </div>
  </div>
</section>


<section id="about" className="max-w-6xl mx-auto px-6 pt-16">
  {/* Left Aligned Heading and Main Text */}
  <div className="text-left mb-12">
    <div className="text-xs font-semibold text-[#16a34a] tracking-widest uppercase mb-1">PROGRAM OVERVIEW</div>
    <h2 className="text-3xl font-extrabold text-gray-900">{dept.programOverview.heading}</h2>
    <p className="mt-4 text-sm text-gray-500 leading-relaxed max-w-4xl">{dept.programOverview.text}</p>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
    {dept.programOverview.pillars.map((pillar: any, idx: number) => (
      <div 
        key={idx} 
        className="group relative flex flex-col gap-3 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#16a34a] hover:shadow-[0_8px_30px_rgb(22,163,74,0.1)]"
      >
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-green-50/50 text-2xl shadow-inner group-hover:bg-green-100 group-hover:scale-105 transition-all">
            {pillar.icon}
          </div>
          <h3 className="text-base font-bold text-gray-900 group-hover:text-[#16a34a] transition-colors">
            {pillar.title}
          </h3>
        </div>
        <p className="text-xs text-gray-500 leading-relaxed mt-1">{pillar.desc}</p>
        <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-green-50 opacity-0 blur-2xl group-hover:opacity-100 transition-opacity"></div>
      </div>
    ))}
  </div>

  <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center bg-gray-50/50 p-8 rounded-3xl border border-gray-100">
    <Stat value={dept.programOverview.stats.nonTeaching} label="Non-Teaching Personnel" accentHex={dept.theme.accentHex} />
    <Stat value={dept.programOverview.stats.faculty} label="Faculty" accentHex={dept.theme.accentHex} />
    <Stat value={dept.programOverview.stats.students} label="Enrolled Students" accentHex={dept.theme.accentHex} />
  </div>
</section>

<div className="py-10 bg-white overflow-hidden whitespace-nowrap border-y border-gray-50">
  <div className="flex animate-scroll gap-10 items-center">
    {[...Array(2)].map((_, i) => (
      <div key={i} className="flex gap-10 items-center">
        {["OPTIMIZATION", "EFFICIENCY", "ERGONOMICS", "SYSTEMS DESIGN", "OPERATIONS RESEARCH", "SUPPLY CHAIN", "QUALITY CONTROL"].map((skill) => (
          <span key={skill} className="text-5xl font-black text-gray-100 hover:text-green-50 transition-colors cursor-default">
            {skill}
          </span>
        ))}
      </div>
    ))}
  </div>
</div>

      <section id="peo" className="max-w-6xl mx-auto px-6 pt-24 pb-20">
  <SectionTitle center eyebrow={dept.title} title={dept.peo.title} subtitle={dept.peo.subtitle} />

  <div className="mt-16 grid grid-cols-12 gap-12 items-center">
    
<div className="col-span-12 md:col-span-5 flex justify-center py-10">
  <div className="relative h-[380px] w-[380px] flex items-center justify-center group">
    
    <div className="absolute inset-0 z-0 pointer-events-none">
      
      <div className="absolute top-[20%] left-[20%] -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] 
        bg-[conic-gradient(from_0deg,_transparent_0%,_#16a34a40_25%,_#22c55e60_50%,_#16a34a40_75%,_transparent_100%)] 
        animate-spin-slow blur-[60px] opacity-90 group-hover:opacity-100 transition-all duration-1000" 
      />
      
      <div className="absolute bottom-[20%] right-[20%] translate-x-1/2 translate-y-1/2 w-[100%] h-[100%] 
        bg-[conic-gradient(from_180deg,_transparent_0%,_#4ade8030_25%,_#16a34a50_50%,_#4ade8030_75%,_transparent_100%)] 
        animate-spin-reverse-slow blur-[50px] opacity-80 group-hover:opacity-100 transition-all duration-1000" 
      />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75%] h-[75%] 
        bg-[#16a34a35] rounded-full blur-[80px] animate-pulse-slow" 
      />
    </div>

    <img 
      src={dept.images.peo} 
      alt="IE Department Logo" 
      className="relative z-10 w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(22,163,74,0.3)] 
        animate-logo-pulse transition-transform duration-700 group-hover:scale-110" 
    />
  </div>
</div>

    <div className="col-span-12 md:col-span-7 space-y-6">
      {dept.peo.bullets.map((b, idx) => (
        <div 
          key={idx} 
          className="group relative p-[2px] rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-green-900/10"
        >
          <div className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,transparent_45%,#16a34a_50%,transparent_55%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <div className="relative flex items-center gap-6 p-8 rounded-[calc(1rem-2px)] bg-white z-10 h-full">
            <div className="relative flex-shrink-0">
              <div className="w-14 h-14 flex items-center justify-center rounded-2xl 
                bg-gray-50 text-gray-400 font-black text-xl 
                group-hover:bg-[#16a34a] group-hover:text-white 
                group-hover:shadow-[0_10px_25px_rgba(22,163,74,0.3)]
                transition-all duration-300 z-10 relative">
                0{idx + 1}
              </div>
              
              <div className="absolute inset-0 rounded-2xl border-2 border-green-500/0 group-hover:border-green-500/20 group-hover:scale-125 transition-all duration-700"></div>
            </div>

            <div className="flex-1">
              <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 group-hover:text-[#16a34a] mb-2 transition-colors">
                PEO Objective {idx + 1}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed text-left font-medium">
                {b}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>

  </div>
</section>

      <section id="so" className="max-w-6xl mx-auto px-6 pt-16">
        <SectionTitle center eyebrow={dept.title} title={dept.so.title} subtitle={dept.so.subtitle} />

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {dept.so.outcomes.map((o: any, idx: number) => (
            <OutcomeCard key={idx} title={o.title} text={o.text} icon={o.icon} />
          ))}
        </div>
      </section>

      <section id="curriculum" className="max-w-6xl mx-auto px-6 pt-16">
        <div className="text-xs font-semibold text-gray-400 tracking-wide">TAKE A TOUR</div>
        <h2 className="mt-2 text-3xl font-extrabold text-gray-900">{dept.curriculum.title}</h2>
        <p className="mt-3 text-sm text-gray-500 leading-relaxed max-w-2xl">{dept.curriculum.text}</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
          {dept.curriculum.years.map((year: any) => (
            <button
              key={year.id}
              onClick={() => setSelectedYear(year)}
              className="group relative rounded-2xl border-2 border-gray-100 bg-white p-8 text-center transition-all duration-300 hover:border-[#16a34a] hover:bg-green-50/30 hover:shadow-[0_8px_30px_rgb(22,163,74,0.15)] hover:-translate-y-1"
            >
              <div className="text-sm font-bold text-gray-900 group-hover:text-[#16a34a] transition-colors">
                {year.label}
              </div>
              <div className="mt-2 text-xs text-[#16a34a] font-semibold opacity-0 group-hover:opacity-100 transition-opacityuppercase tracking-widest">
                View Courses →
              </div>
            </button>
          ))}
        </div>

        {selectedYear && (
          <CurriculumModal 
            year={selectedYear} 
            onClose={() => setSelectedYear(null)} 
            accentColor={dept.theme.accentHex} 
          />
        )}
      </section>

      <section id="laboratories" className="max-w-6xl mx-auto px-6 pt-16">
        <SectionTitle center eyebrow={dept.title} title={dept.laboratories.title} subtitle={dept.laboratories.description} />

        {dept.laboratories.rooms.map((room: any, rIdx: number) => (
          <div key={rIdx} className="mt-10 rounded-3xl border border-gray-100 bg-gray-50/50 p-6 md:p-8 transition-all duration-300 hover:border-green-100 hover:bg-white hover:shadow-[0_8px_30px_rgb(22,163,74,0.08)]">
            
            <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4 text-center md:text-left">
              <div>
                <p className="text-sm font-black text-[#16a34a] tracking-widest uppercase mb-1">
                  {room.roomNumber}
                </p>
                <h3 className="text-2xl font-extrabold text-gray-900">{room.name}</h3>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {room.images.map((img: string, iIdx: number) => (
                <div 
                  key={iIdx} 
                  className="group relative h-64 md:h-72 w-full overflow-hidden rounded-2xl bg-gray-200 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgb(22,163,74,0.2)] cursor-pointer"
                >
                  <img 
                    src={img} 
                    alt={`${room.name} - View ${iIdx + 1}`} 
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-5">
                    <div className="transform translate-y-4 transition-transform duration-300 group-hover:translate-y-0">
                      <span className="text-white font-bold tracking-wide text-sm flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-[#16a34a] animate-pulse"></span>
                        Facility View 0{iIdx + 1}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        ))}
      </section>

      <section id="faculty" className="max-w-6xl mx-auto px-6 pt-16">
        <SectionTitle center eyebrow={dept.title} title={dept.faculty.title} />

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {dept.faculty.members.map((member: any, idx: number) => (
            <div key={`${member.name}-${idx}`} className="flex flex-col items-center text-center group">
              
              <div className="relative mb-4 h-32 w-32 overflow-hidden rounded-full border-4 border-gray-50 shadow-md transition-all duration-300 group-hover:border-[#16a34a] group-hover:shadow-[0_8px_25px_rgb(22,163,74,0.2)]">
                <img 
                  src={member.image} 
                  alt={`Profile of ${member.name}`} 
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=f3f4f6&color=374151&size=128`;
                  }}
                />
              </div>

              <h3 className="text-sm font-bold text-gray-900 group-hover:text-[#16a34a] transition-colors">{member.name}</h3>
              <p className="mt-1 text-xs text-gray-500 max-w-[200px] leading-tight">{member.role}</p>
              
            </div>
          ))}
        </div>
      </section>

      <section id="careers" className="max-w-7xl mx-auto px-6 pt-24 pb-32">
  <SectionTitle center eyebrow={dept.title} title={dept.careers.title} subtitle={dept.careers.subtitle} />

  <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {dept.careers.cards.map((card: any, idx: number) => (
      <div 
        key={idx} 
        className="group relative flex flex-col h-full rounded-[2.5rem] border border-gray-100 bg-white p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_40px_80px_-20px_rgba(22,163,74,0.1)] overflow-hidden"
      >
        <div className="absolute left-0 top-0 w-2 h-full bg-gradient-to-b from-[#16a34a] to-[#22c55e] -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />

        <div className="absolute inset-0 bg-gradient-to-br from-green-50/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        
        <div className="flex items-center justify-between mb-10 relative z-10">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-50 text-4xl transition-all duration-500 group-hover:bg-white group-hover:shadow-lg group-hover:scale-110">
            {card.icon}
          </div>
          <span className="text-4xl font-black text-gray-50 group-hover:text-green-50 transition-colors duration-500">
            0{idx + 1}
          </span>
        </div>

        <div className="relative z-10 flex-1">
          <h3 className="text-2xl font-black text-gray-900 leading-tight mb-8 group-hover:text-[#16a34a] transition-colors">
            {card.title}
          </h3>
          
          <div className="space-y-4">
            {card.text.split('\n').map((line: string, lIdx: number) => (
              <div key={lIdx} className="group/line flex items-start gap-4">
                <div className="mt-1.5 h-1.5 w-1.5 rounded-sm bg-gray-200 group-hover/line:bg-[#16a34a] group-hover/line:scale-125 transition-all duration-300" />
                <p className="text-sm font-medium text-gray-500 group-hover:text-gray-800 transition-colors">
                  {line.replace('• ', '')}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-50 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
          <span className="text-[10px] font-black text-[#16a34a] tracking-[0.2em] uppercase">
            Industry Focus Area
          </span>
        </div>
      </div>
    ))}
  </div>
</section>

      <section id="contact" className="max-w-6xl mx-auto px-6 pt-16 pb-16">
  <div className="rounded-[2.5rem] border border-gray-100 bg-gray-50 p-8 md:p-12 flex flex-col lg:flex-row gap-12 items-start lg:items-center justify-between shadow-sm overflow-hidden">
    
    <div className="max-w-xl text-center lg:text-left w-full">
      <h2 className="text-4xl font-black text-gray-900 tracking-tight">Get in Touch</h2>
      <p className="mt-4 text-base text-gray-600 leading-relaxed">
        For inquiries regarding the {dept.title} program, curriculum, or department activities, please reach out directly to the department office.
      </p>
    </div>

    <div className="relative overflow-hidden bg-gradient-to-br from-[#16a34a] to-[#14532d] p-6 md:p-10 rounded-[2rem] shadow-[0_20px_50px_-15px_rgba(22,163,74,0.4)] w-full lg:w-auto lg:min-w-[400px] transform transition-all duration-300 hover:-translate-y-2">
      
      <div className="absolute -right-10 -top-10 w-40 h-40 bg-white opacity-10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-green-400 opacity-20 rounded-full blur-2xl pointer-events-none"></div>
      
      <div className="relative z-10">
        <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
          Engr. Jeremy Laurence M. Bañez
        </h3>
        <p className="text-[10px] font-black text-green-300 mt-1 uppercase tracking-[0.2em]">
          Program Chair
        </p>
        
        <div className="mt-8 space-y-5">
          <div className="flex items-center gap-4 text-sm text-white group">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-lg transition-transform group-hover:scale-110">
              ✉️
            </div>
            <a 
              href="mailto:jeremylaurence.banez@bulsu.edu.ph" 
              className="font-medium hover:text-green-200 transition-colors break-all md:break-normal"
            >
              jeremylaurence.banez@bulsu.edu.ph
            </a>
          </div>
          
          <div className="flex items-center gap-4 text-sm text-white group">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-lg transition-transform group-hover:scale-110">
              📍
            </div>
            <span className="font-medium">College of Engineering, BulSU</span>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>

      <Footer />
    </div>
  );
}


function Stat({ value, label, accentHex }: { value: number; label: string; accentHex: string; }) {
  return (
    <div className="group relative rounded-3xl border border-gray-100 bg-white p-8 transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <div className="text-5xl font-black tracking-tighter transition-all duration-500 group-hover:scale-110 group-hover:translate-x-2" style={{ color: accentHex }}>
          {value === 0 ? '—' : value}
        </div>
        <div className="mt-3 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 group-hover:text-gray-900 transition-colors">
          {label}
        </div>
      </div>
      
      <div className="absolute -bottom-2 -right-2 h-12 w-12 rounded-full bg-green-100/50 scale-0 group-hover:scale-100 transition-transform duration-700" />
    </div>
  );
}

function OutcomeCard({ title, text, icon }: { title: string; text: string; icon?: string }) {
  return (
    <div className="group relative flex flex-col h-[400px] rounded-[2.5rem] border border-gray-100 bg-white p-8 text-left transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_30px_60px_-15px_rgba(22,163,74,0.12)] overflow-hidden">
      
      <div className="absolute -top-20 -right-20 h-64 w-64 bg-green-50/50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      
      <div className="relative mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-50 text-gray-400 group-hover:bg-[#16a34a] group-hover:text-white group-hover:shadow-[0_10px_20px_rgba(22,163,74,0.2)] transition-all duration-300 shadow-inner">
         <span className="text-xl font-black">{icon ? icon : "•"}</span>
      </div>
      
      <div className="relative z-10 flex flex-col h-full">
        <div className="relative pl-4 mb-4">
          <div className="absolute left-0 top-0 h-full w-1 bg-gray-100 group-hover:bg-[#16a34a] transition-colors duration-300" />
          <h3 className="text-lg font-black text-gray-900 leading-tight transition-colors group-hover:text-[#16a34a]">
            {title}
          </h3>
        </div>
        
        <div className="custom-scrollbar flex-1 overflow-y-auto pr-2 text-sm leading-relaxed text-gray-500 group-hover:text-gray-700 transition-colors">
          {text}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gray-50 overflow-hidden">
        <div className="h-full w-1/4 bg-[#16a34a] -translate-x-full group-hover:animate-laser-pass" />
      </div>
    </div>
  );
}

function CurriculumModal({ year, onClose, accentColor }: { year: any; onClose: () => void; accentColor: string }) {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      <div className="relative w-full max-w-6xl max-h-[90vh] overflow-hidden rounded-3xl bg-white shadow-2xl flex flex-col">
        
        <div className="flex items-center justify-between p-6 border-b bg-gray-50/50">
          <div>
            <h2 className="text-2xl font-black text-gray-900">{year.label.toUpperCase()}</h2>
            <p className="text-xs text-gray-500 mt-1">Bachelor of Science in Industrial Engineering (Revised 2024)</p>
          </div>
          <button 
            onClick={onClose} 
            className="p-2 hover:bg-red-50 hover:text-red-600 rounded-full text-gray-400 transition-colors"
          >
            <span className="text-xl font-bold">✕</span>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-12 custom-scrollbar">
          {year.terms.map((term: any, tIdx: number) => (
            <div key={tIdx} className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-8 w-1.5 rounded-full" style={{ backgroundColor: accentColor }} />
                <h3 className="text-lg font-bold text-gray-900 italic">{term.name}</h3>
              </div>
              
              <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                <table className="w-full text-left border-collapse text-[12px]">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      {term.headers.map((header: string, hIdx: number) => (
                        <th key={hIdx} className="px-4 py-3 font-bold text-gray-600 uppercase tracking-tighter">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {term.courses.map((course: any, rIdx: number) => (
                      <tr key={rIdx} className="hover:bg-gray-50/80 transition-colors group">
                        <td className="px-4 py-3 font-bold text-gray-900 group-hover:text-[#16a34a]">{course.code}</td>
                        <td className="px-4 py-3 text-gray-700 max-w-[250px] leading-tight">{course.title}</td>
                        <td className="px-4 py-3 text-gray-500 text-center font-semibold">{course.lec}</td>
                        <td className="px-4 py-3 text-gray-500 text-center font-semibold">{course.lab}</td>
                        <td className="px-4 py-3 font-black text-gray-900 text-center" style={{ color: accentColor }}>{course.units}</td>
                        <td className="px-4 py-3 text-gray-500 italic whitespace-pre-line">{course.prereq}</td>
                        <td className="px-4 py-3 text-[#a90000] font-medium whitespace-pre-line">{course.coreq || "-"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
