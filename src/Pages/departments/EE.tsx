import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar";
import SectionTitle from "../../components/SectionTitle";
import Footer from "../../components/Footer";
import { mergeDeptWithOverrides } from "../../lib/departmentAdmin";
import { EE } from "../../data/department/EE";
import "../../styles/departments/EE.css";


export default function EEPage() {
  const [baseDept] = useState<typeof EE>(EE);

  const dept = useMemo(
    () => mergeDeptWithOverrides(baseDept),
    [baseDept]
  );

  const [selectedYearId, setSelectedYearId] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const bullets = baseDept.curriculum.bullets || [];
  
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

  const currentYearData = useMemo(() => {
    return baseDept.curriculum.years.find((y) => y.id === selectedYearId) || null;
  }, [selectedYearId, baseDept]);

  return (
    <div className="bg-white">
      <Navbar onNav={onNav} />

      <section id="home" className="max-w-6xl mx-auto px-6 pt-10">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-wide text-grey-900">
            {dept.title}
          </h1>
          <p className="mt-2 text-sm text-gray-500">{dept.subtitle}</p>
          <div className="mt-5">
            <Link
              to={`/dept/${dept.code}/admin`}
              className="inline-flex items-center rounded-full border border-[#a90000] px-5 py-2 text-sm font-semibold text-[#a90000] hover:bg-[#a90000] hover:text-white"
            >
              Open Department Admin
            </Link>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-12 gap-5">
          <div className="col-span-12 md:col-span-4">
            <div className="h-[380px] md:h-[540px] rounded-2xl overflow-hidden bg-gray-200">
              <img src={dept.images.heroLeft} alt="" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="col-span-12 md:col-span-8 grid grid-cols-12 gap-5">
            <div className="col-span-12">
              <div className="h-[220px] md:h-[240px] rounded-2xl overflow-hidden bg-gray-200">
                <img src={dept.images.heroBig} alt="" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="col-span-12 md:col-span-6">
              <div className="h-[280px] rounded-2xl overflow-hidden bg-gray-200">
                <img src={dept.images.heroSmall1} alt="" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="col-span-12 md:col-span-6">
              <div className="h-[280px] rounded-2xl overflow-hidden bg-gray-200">
                <img src={dept.images.heroSmall2} alt="" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="max-w-6xl mx-auto px-6 pt-10">
        <div className="text-left">
          <div className="mt-2 text-xl font-bold text-gray-900">{dept.programOverview.subtitle}</div>

          {dept.programOverview.contents.map((c, idx) => (
            <div key={idx}>
              <div className="mt-5 text-lg font-semibold text-red-900">{c.heading}</div>
              <p className="mt-3 text-sm text-gray-500 leading-relaxed max-w-6xl text-justify">{c.text}</p>
            </div>
          ))}


        </div>



        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <Stat value={dept.programOverview.stats.nonTeaching} label="Non-Teaching Personnel" accentHex={dept.theme.accentHex} />
          <Stat value={dept.programOverview.stats.faculty} label="Faculty" accentHex={dept.theme.accentHex} />
          <Stat value={dept.programOverview.stats.students} label="Enrolled Students" accentHex={dept.theme.accentHex} />
        </div>
      </section>

      <section id="peo" className="max-w-6xl mx-auto px-6 pt-16">
        <SectionTitle center eyebrow={dept.title} title={dept.peo.title} subtitle={dept.peo.subtitle} />

        <div className="mt-12 grid grid-cols-12 gap-12 items-center">
          <div className="col-span-12 md:col-span-5 flex justify-center">
            <div className="relative p-6">
              <img 
                src={dept.images.peo} 
                alt="Department Logo" 
                className="relative w-full max-w-[320px] animate-logo-float object-contain z-10" 
              />
            </div>
          </div>

          <div className="col-span-12 md:col-span-7 space-y-4">
            {dept.peo.bullets.map((b, idx) => (
              <div 
                key={idx} 
                className="peo-card-racing group flex items-center gap-6 p-6 rounded-[1rem] transition-all duration-300 hover:shadow-lg"
              >
                <div className="relative flex-shrink-0">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full 
                    bg-red-50 text-red-900 font-bold text-lg 
                    group-hover:bg-red-900 group-hover:text-white 
                    group-hover:shadow-[0_0_20px_rgba(153,27,27,0.4)]
                    transition-all duration-300 z-10 relative">
                    {idx + 1}
                  </div>
                  
                  <div className="absolute inset-0 rounded-full border border-red-900/0 group-hover:border-red-900/20 group-hover:scale-150 transition-all duration-500"></div>
                </div>

                <div className="flex-1 z-10">
                  <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400 group-hover:text-red-900 mb-1 transition-colors">
                    PEO {idx + 1}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed text-justify text-justify-inter-word">
                    {b}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="so" className="max-w-6xl mx-auto px-6 pt-16">
        <SectionTitle center eyebrow={dept.title} title={dept.so.title} subtitle={dept.so.subtitle} />

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {dept.so.outcomes.map((o, idx) => {
            const isLast = idx === dept.so.outcomes.length - 1;

            return (
              <div
                key={idx}
                className={`h-full ${isLast ? "md:col-start-2" : ""}`}
              >
                <OutcomeCard title={o.title} text={o.text} iconUrl={o.iconUrl} />
              </div>
            );
          })}
        </div>
      </section>

      <section id="curriculum" className="max-w-7xl mx-auto px-6 pt-16">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-black text-gray-900 uppercase">Curriculum Overview</h2>
        </div>

        {/* BULLET CARDS SECTION */}
        <div className="relative mb-16 group px-4 max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-[2rem]">
            <div 
              className="flex transition-transform duration-600 ease-[cubic-bezier(0.45,0,0.55,1)]"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {bullets.map((bullet, index) => (
                <div key={index} className="w-full md:w-1/2 flex-shrink-0 px-3">
                  <div className="p-7 rounded-[2rem] bg-red-50/40 border border-red-100 shadow-sm hover:shadow-md transition-all duration-300 h-64 flex flex-col">
                    
                    <div className="flex items-center gap-2 mb-4 flex-shrink-0">
                      <h3 className="text-red-900 font-black uppercase text-[13px] tracking-[0.18em] whitespace-normal leading-tight mb-1 text-center">
                        {bullet.title}
                      </h3>
                    </div>

                    <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
                      <div 
                        className="text-gray-600 text-[12px] leading-relaxed whitespace-pre-line 
                                  [&_b]:text-red-900/80 [&_b]:font-black" 
                        dangerouslySetInnerHTML={{ __html: bullet.text }} 
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={() => setCurrentIndex(prev => prev === 0 ? Math.ceil(bullets.length / 2) - 1 : prev - 1)}
            className="absolute -left-2 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md shadow-xl border border-gray-100 p-4 rounded-full text-red-900 hover:bg-red-900 hover:text-white transition-all z-10 opacity-0 group-hover:opacity-100"
          >
            <span className="block transform rotate-180 text-xs font-bold">➜</span>
          </button>
          
          <button 
            onClick={() => setCurrentIndex(prev => (prev + 1) % Math.ceil(bullets.length / 2))}
            className="absolute -right-2 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md shadow-xl border border-gray-100 p-4 rounded-full text-red-900 hover:bg-red-900 hover:text-white transition-all z-10 opacity-0 group-hover:opacity-100"
          >
            <span className="text-xs font-bold">➜</span>
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ length: Math.ceil(bullets.length / 2) }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? "w-10 bg-red-900" : "w-2 bg-gray-200"
                }`}
              />
            ))}
          </div>
        </div>

        <p className="text-gray-500 mt-4 italic font-medium text-center">
          Click on a year level to view the specific courses for each semester.
        </p>
        <p className="text-gray-400 mt-1 font-xs text-center leading-relaxed">
          Bachelor of Science in Electrical Engineering Curriculum <br />
          Revised 2024 <br />
          CMO 88 Series of 2017
        </p>
        {}

        <div className="h-8" />
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
            {baseDept.curriculum.years.map((year) => (
              <button
                key={year.id}
                onClick={() => setSelectedYearId(selectedYearId === year.id ? null : year.id)}
                className={`p-6 rounded-2xl border-2 transition-all duration-300 text-left relative ${
                  selectedYearId === year.id
                    ? "border-red-900 bg-red-50 shadow-md scale-105"
                    : "border-gray-100 bg-red-50/40 hover:border-red-200 shadow-sm"
                }`}
              >
                {selectedYearId === year.id && (
                  <span className="absolute top-3 right-4 text-red-900 font-bold text-[10px]">✕</span>
                )}
                
                <span className="block text-[10px] font-bold text-gray-400 uppercase mb-1 tracking-widest">
                  Curriculum
                </span>
                <span className={`block text-sm font-extrabold leading-tight ${
                  selectedYearId === year.id ? "text-red-900" : "text-gray-800"
                }`}>
                  {year.label}
                </span>
              </button>
            ))}
          </div>

          {selectedYearId && (
            <div className="bg-gray-50 rounded-[2.5rem] p-8 border border-gray-100 animate-fadeIn">
              {currentYearData?.terms.map((term, tIdx) => (
                <div key={tIdx} className={tIdx > 0 ? "mt-16" : ""}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-6 w-1 bg-red-900 rounded-full"></div>
                    <h3 className="text-lg font-bold text-gray-900 uppercase tracking-tight">
                      {term.name}
                    </h3>
                  </div>
                
                <div className="overflow-x-auto bg-white rounded-2xl shadow-sm border border-gray-100">
                  <table className="w-full text-left border-collapse table-fixed">
                    <thead>
                      <tr className="bg-gray-200 text-[10px] uppercase text-black border-b border-gray-100">
                        <th className="py-4 px-6 font-bold w-28">Code</th>
                        <th className="py-4 px-6 font-bold w-auto">Course Title</th>
                        <th className="py-4 px-2 text-center font-bold w-20">Lab Units</th>
                        <th className="py-4 px-2 text-center font-bold w-20">Lab Hrs</th>
                        <th className="py-4 px-2 text-center font-bold w-20">Lec Units</th>
                        <th className="py-4 px-2 text-center font-bold w-20">Lec Hrs</th>
                        <th className="py-4 px-6 font-bold w-44 text-center">Prerequisite/s</th>
                        <th className="py-4 px-6 font-bold w-44 text-center">Co-requisite/s</th>
                      </tr>
                    </thead>
                    <tbody className="text-[12px] divide-y divide-gray-50">
                      {term.courses?.map((course, cIdx) => (
                        <tr 
                          key={cIdx} 
                          className={`transition-colors duration-150 ${
                            course.code === 'TOTAL' 
                              ? 'bg-red-900 text-white font-black' 
                              : 'hover:bg-red-50/70 cursor-default' 
                          }`}
                        >
                          <td className={`py-4 px-6 font-mono font-bold ${course.code === 'TOTAL' ? 'text-white' : 'text-red-900'}`}>
                            {course.code}
                          </td>
                          <td className="py-4 px-6 font-medium">{course.title}</td>
                          <td className="py-4 px-2 text-center">{course.lab_units}</td>
                          <td className="py-4 px-2 text-center">{course.lab_hours || 0}</td>
                          <td className="py-4 px-2 text-center">{course.lec_units}</td>
                          <td className="py-4 px-2 text-center">{course.lec_hours || 0}</td>
                          <td className="py-4 px-6 text-[10px] whitespace-normal leading-relaxed text-center">
                            {course.prereq || ""}
                          </td>
                          <td className="py-4 px-6 text-[10px] whitespace-normal leading-relaxed text-center">
                            {course.coreq || ""}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      <section id="laboratories" className="max-w-6xl mx-auto px-6 pt-24 pb-16">
        <SectionTitle 
          center 
          eyebrow={dept.title} 
          title={dept.laboratories.title} 
          subtitle="State-of-the-art facilities for hands-on engineering education" 
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {dept.laboratories.items.map((lab, idx) => (
            <div 
              key={idx} 
              className="group relative rounded-[2.5rem] border border-red-100 bg-red-50/20 p-5 transition-all duration-500 hover:bg-white hover:shadow-xl hover:-translate-y-2"
            >
              <div className="absolute -top-3 left-8 bg-red-900 text-white text-[10px] font-black px-4 py-1 rounded-full shadow-lg z-10">
                LAB {String(idx + 1).padStart(2, '0')}
              </div>

              <div className="relative h-56 rounded-[1.8rem] overflow-hidden bg-gray-200 border-2 border-white shadow-inner">
                <img 
                  src={lab.photo} 
                  alt={lab.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-red-900/10 opacity-0 group-hover:opacity-900 transition-opacity duration-300" />
              </div>

              <div className="px-2 pt-6 pb-2">
                <h3 className="font-black text-red-900 text-lg leading-tight tracking-tight uppercase">
                  {lab.name}
                </h3>
                
                <div className="w-20 h-1 bg-red-200 my-3 rounded-full group-hover:w-72 transition-all duration-500" />
                
                <p className="text-sm text-gray-600 leading-relaxed line-clamp-5 text-justify">
                  {lab.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="faculty" className="max-w-6xl mx-auto px-6 pt-16">
        <SectionTitle center eyebrow={dept.title} title={dept.faculty.title} />

        <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-stretch">
          {dept.faculty.members.map((member, idx) => (
            <div 
              key={idx} 
              className="group relative flex flex-col h-full rounded-[2rem] bg-red-50/20 border border-red-200 overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:bg-white hover:border-red-900"
            >
              <div className="relative w-full h-48 md:h-48 overflow-hidden bg-white">
                <img
                  src={member.photo || "/faculty/placeholder.png"}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  alt={member.name}
                />
                <div className="absolute inset-0 bg-red-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-5 text-center flex-1 flex flex-col justify-center items-center">
                <h3 className="font-black text-[13px] md:text-sm text-red-900 uppercase tracking-tight leading-tight transition-colors duration-300 group-hover:text-red-700">
                  {member.name}
                </h3>
                
                <div className="w-6 h-0.5 bg-red-200 my-3 rounded-full transition-all duration-500 group-hover:w-12 group-hover:bg-red-900" />
                
                <p className="text-[11px] md:text-xs font-bold text-gray-500 uppercase tracking-widest transition-all duration-300 group-hover:text-gray-900 group-hover:translate-y-[-2px]">
                  {member.role}
                </p>
              </div>

              <div className="absolute bottom-0 left-0 w-full h-1 bg-red-900 scale-x-0 transition-transform duration-500 origin-left group-hover:scale-x-100" />
            </div>
          ))}
        </div>
      </section>

      <section id="careers" className="max-w-6xl mx-auto px-6 pt-16">
        <SectionTitle center eyebrow={dept.title} title={dept.careers.title} subtitle={dept.careers.subtitle} />

        <div id="careers" className="mt-8 grid grid-cols-1  gap-5">
          {dept.careers.categories.map((cat, idx) => (
            <div key={idx} className="rounded-2xl  bg-white p-6 text-center ">
              <h3 className="font-bold text-gray-900">{cat.title}</h3>
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                {cat.cards.map((card, cardIdx) => {
                  const isLast = cardIdx === cat.cards.length - 1;
                  const shouldCenter = isLast && cat.cards.length % 3 === 1;
                  return (
                    <div key={cardIdx} className={`card rounded-2xl  bg-gray-100 p-4 gap-4 text-center flex flex-col items-center ${shouldCenter ? "md:col-start-2" : ""}`}>
                      <div className="text-3xl" aria-hidden="true">{card.icon}</div>
                      <h4 className="mt-2 font-bold text-gray-900">{card.title}</h4>
                      <p className="mt-1 text-sm text-gray-600">{card.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="max-w-6xl mx-auto px-6 py-20">
        <div className="rounded-[2.5rem] border border-red-200 bg-red-50/20 p-8 md:p-12 shadow-md">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            
            <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
              <div className="flex items-center gap-4">
                <img src="/src/assets/bulsu.svg" alt="BULSU Logo" className="w-16 h-16 object-contain" />
                <img src="/public/COE.svg" alt="COE Logo" className="w-16 h-16 object-contain" />
                <img src="/public/departments/EE/ee-logo.png" alt="EE Logo" className="w-16 h-16 object-contain" />
                <img src="/public/departments/EE/watermark.png" alt="IIEE Logo" className="w-16 h-16 object-contain" />
                </div>
              
              <div>
                <h2 className="text-red-900 font-black text-xl tracking-tight leading-tight">
                  College of Engineering
                </h2>
                <p className="text-gray-700 font-bold text-lg">
                  Electrical Engineering Department
                </p>
                <p className="text-gray-500 text-sm font-medium uppercase tracking-widest mt-1">
                  Bulacan State University
                </p>
              </div>
            </div>

            <div className="w-full md:w-px h-px md:h-32 bg-red-900/50"></div>
            <div className="flex flex-col items-center md:items-end text-center md:text-right">
              <span className="inline-block text-[15px] font-bold text-gray-800 uppercase tracking-[0.2em] mb-6 bg-gray-200 px-3 py-1 rounded-full">
                Department Head
              </span>
              <h3 className="text-2xl font-black text-red-900 leading-none mb-1">
                Engr. Eleazer C. Nabong
              </h3>
              <a 
                href="mailto:eleazar.nabong@ms.bulsu.edu.ph" 
                className="text-gray-500 font-medium hover:text-red-800 transition-colors flex items-center gap-2 group"
              >
                eleazar.nabong@ms.bulsu.edu.ph
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function Stat({
  value,
  label,
  accentHex,
}: {
  value: number;
  label: string;
  accentHex: string;
}) {
  return (
    <div>
      <div className="text-3xl font-extrabold" style={{ color: accentHex }}>
        {value}
      </div>
      <div className="mt-1 text-xs font-semibold text-gray-500">{label}</div>
    </div>
  );
}

function OutcomeCard({ title, text, iconUrl }: { title: string; text: string; iconUrl: string }) {
  return (
    <div className="card h-full rounded-2xl bg-gray-100 p-6 text-center flex flex-col">
      <div id="so-icon-id" className="mx-auto w-15 h-15 rounded-xl bg-red-900 flex items-center justify-center">
        {iconUrl ? (
          <img id="so-icon" src={iconUrl} alt={title} className="w-10 h-10 object-contain" />
        ) : (
          <span className="text-gray-400">No Icon</span>
        )}
      </div>
      <div id="so-title" className="mt-4 font-semibold text-gray-900">{title}</div>
      <div id="so-text" className="mt-2 text-sm text-gray-500">{text}</div>
    </div>
  );
}
