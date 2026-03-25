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

  return (
    <div className="bg-white min-h-screen text-gray-900">
      <Navbar onNav={onNav} />

      <section id="home" className="max-w-6xl mx-auto px-6 pt-10">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-wide text-gray-900">
            {dept.title}
          </h1>
          <p className="mt-2 text-sm text-gray-500">{dept.subtitle}</p>
          <div className="mt-5">
            <Link
              to={`/dept/${dept.code}/admin`}
              className="inline-flex items-center rounded-full border border-[#a90000] px-5 py-2 text-sm font-semibold text-[#a90000] hover:bg-[#a90000] hover:text-white transition-colors"
            >
              Open Department Admin
            </Link>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-12 gap-5">
          <div className="col-span-12 md:col-span-4">
            <div className="group h-[380px] md:h-[440px] rounded-2xl overflow-hidden bg-gray-200 shadow-sm transition-all duration-500 hover:shadow-xl">
              <img src={dept.images.heroLeft} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
          </div>

          <div className="col-span-12 md:col-span-8 grid grid-cols-12 gap-5">
            <div className="col-span-12">
              <div className="group h-[220px] md:h-[240px] rounded-2xl overflow-hidden bg-gray-200 shadow-sm transition-all duration-500 hover:shadow-xl">
                <img src={dept.images.heroBig} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
            </div>

            <div className="col-span-12 md:col-span-6">
              <div className="group h-[160px] rounded-2xl overflow-hidden bg-gray-200 shadow-sm transition-all duration-500 hover:shadow-xl">
                <img src={dept.images.heroSmall1} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
            </div>

            <div className="col-span-12 md:col-span-6">
              <div className="group h-[160px] rounded-2xl overflow-hidden bg-gray-200 shadow-sm transition-all duration-500 hover:shadow-xl">
                <img src={dept.images.heroSmall2} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="max-w-6xl mx-auto px-6 pt-10">
        <div className="text-left">
          <div className="text-sm font-semibold text-gray-900">{dept.programOverview.heading}</div>
          <p className="mt-3 text-sm text-gray-500 leading-relaxed max-w-3xl">{dept.programOverview.text}</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <Stat value={dept.programOverview.stats.nonTeaching} label="Non-Teaching Personnel" accentHex={dept.theme.accentHex} />
          <Stat value={dept.programOverview.stats.faculty} label="Faculty" accentHex={dept.theme.accentHex} />
          <Stat value={dept.programOverview.stats.students} label="Enrolled Students" accentHex={dept.theme.accentHex} />
        </div>
      </section>

      <section id="peo" className="max-w-6xl mx-auto px-6 pt-16">
        <SectionTitle center eyebrow={dept.title} title={dept.peo.title} subtitle={dept.peo.subtitle} />

        <div className="mt-10 grid grid-cols-12 gap-8 items-center">
          
          <div className="col-span-12 md:col-span-5 lg:col-span-6">
            <div className="group relative flex h-[320px] md:h-[420px] w-full items-center justify-center overflow-hidden rounded-3xl border border-green-50 bg-gradient-to-br from-green-50/50 to-white p-8 shadow-[0_8px_30px_rgb(22,163,74,0.05)] transition-all duration-500 hover:shadow-[0_8px_40px_rgb(22,163,74,0.15)]">
              
              <div className="absolute -left-10 -top-10 h-48 w-48 rounded-full bg-green-200 opacity-40 blur-3xl transition-transform duration-700 group-hover:scale-150 group-hover:opacity-60"></div>
              <div className="absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-[#16a34a] opacity-10 blur-3xl transition-transform duration-700 group-hover:scale-150 group-hover:opacity-30"></div>
              
              <img 
                src={dept.images.peo} 
                alt="IE Department Logo" 
                className="relative z-10 h-full w-full object-contain drop-shadow-xl transition-transform duration-500 group-hover:scale-105" 
              />
            </div>
          </div>

          <div className="col-span-12 md:col-span-7 lg:col-span-6 flex flex-col justify-center space-y-4">
            {dept.peo.bullets.map((b: string, idx: number) => (
              <div 
                key={idx} 
                className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#16a34a] hover:shadow-[0_8px_30px_rgb(22,163,74,0.12)]"
              >
                <div className="absolute left-0 top-0 h-0 w-1 bg-[#16a34a] transition-all duration-300 group-hover:h-full"></div>
                
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gray-50 text-xl font-black text-gray-400 transition-all duration-300 group-hover:bg-green-50 group-hover:text-[#16a34a] group-hover:scale-110 group-hover:rotate-3 shadow-sm">
                    0{idx + 1}
                  </div>
                  
                  <div>
                    <h3 className="mb-2 text-base font-bold text-gray-900 transition-colors group-hover:text-[#16a34a]">
                      PEO {idx + 1}
                    </h3>
                    <p className="text-sm leading-relaxed text-gray-600">
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

      <section id="careers" className="max-w-6xl mx-auto px-6 pt-16">
        <SectionTitle center eyebrow={dept.title} title={dept.careers.title} subtitle={dept.careers.subtitle} />

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dept.careers.cards.map((card: any, idx: number) => (
            <div 
              key={idx} 
              className="group relative flex flex-col rounded-2xl border border-gray-100 bg-white px-8 pt-8 pb-4 text-left overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[#16a34a] hover:shadow-[0_8px_30px_rgb(22,163,74,0.15)]"
            >
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#16a34a] transition-all duration-500 ease-out group-hover:w-full" />

              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-50 text-3xl shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-green-50 group-hover:shadow-green-100">
                <span className="transform transition-transform duration-300 group-hover:rotate-6">
                  {card.icon}
                </span>
              </div>
              
              <h3 className="text-center mb-4 text-xl font-extrabold text-gray-900 transition-colors duration-300 group-hover:text-[#16a34a]">
                {card.title}
              </h3>
              
              <p className="text-sm text-gray-600 whitespace-pre-line leading-loose flex-1 text-left">
                {card.text}
              </p>
              
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="max-w-6xl mx-auto px-6 pt-16 pb-16">
        <div className="rounded-3xl border border-gray-100 bg-gray-50 p-6 md:p-10 flex flex-col md:flex-row gap-10 items-start md:items-center justify-between shadow-sm">
          
          <div className="max-w-lg">
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">Get in Touch</h2>
            <p className="mt-4 text-base text-gray-600 leading-relaxed">
              For inquiries regarding the {dept.title} program, curriculum, or department activities, please reach out directly to the department office.
            </p>
          </div>

          <div className="relative overflow-hidden bg-gradient-to-br from-[#16a34a] to-[#14532d] p-8 rounded-2xl shadow-[0_10px_40px_-10px_rgba(22,163,74,0.5)] w-full md:w-auto min-w-[340px] transform transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-10px_rgba(22,163,74,0.6)]">
            
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-white opacity-10 rounded-full blur-2xl pointer-events-none"></div>
            <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-green-400 opacity-20 rounded-full blur-2xl pointer-events-none"></div>
            
            <h3 className="text-xl font-bold text-white relative z-10">Engr. Jeremy Laurence M. Bañez</h3>
            <p className="text-xs font-black text-green-200 mt-1 uppercase tracking-widest relative z-10">Program Chair</p>
            
            <div className="mt-8 space-y-4 relative z-10">
              <div className="flex items-center gap-4 text-sm text-white group">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-lg transition-transform group-hover:scale-110 group-hover:bg-white/20">✉️</div>
                <a 
                  href="mailto:jeremylaurence.banez@bulsu.edu.ph" 
                  className="font-medium hover:text-green-100 transition-colors"
                >
                  jeremylaurence.banez@bulsu.edu.ph
                </a>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-white group">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-lg transition-transform group-hover:scale-110 group-hover:bg-white/20">📍</div>
                <span className="font-medium">College of Engineering, BulSU</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
}

// Child Components

function Stat({ value, label, accentHex }: { value: number; label: string; accentHex: string; }) {
  return (
    <div className="group rounded-2xl border border-transparent p-6 transition-all duration-300 hover:-translate-y-2 hover:border-green-100 hover:bg-green-50/40 hover:shadow-[0_8px_30px_rgb(22,163,74,0.1)]">
      <div className="text-4xl font-extrabold transition-transform duration-300 group-hover:scale-110" style={{ color: accentHex }}>
        {value}
      </div>
      <div className="mt-2 text-xs font-bold uppercase tracking-wider text-gray-500 transition-colors duration-300 group-hover:text-gray-800">{label}</div>
    </div>
  );
}

function OutcomeCard({ title, text, icon }: { title: string; text: string; icon?: string }) {
  return (
    <div className="group relative flex flex-col h-[350px] rounded-2xl border border-gray-100 bg-white p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#16a34a] hover:shadow-[0_8px_30px_rgb(22,163,74,0.15)]">
      
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-50 transition-all duration-300 group-hover:bg-green-50 group-hover:scale-110 text-3xl shadow-sm group-hover:shadow-green-100">
         {icon ? (
           <span className="opacity-80 transition-opacity group-hover:opacity-100">{icon}</span>
         ) : (
           <div className="h-4 w-4 rounded-full bg-gray-200 transition-colors group-hover:bg-[#16a34a]" />
         )}
      </div>
      
      <h3 className="mb-3 text-base font-bold text-gray-900 leading-tight group-hover:text-[#16a34a] transition-colors">
        {title}
      </h3>
      
      <div className="custom-scrollbar flex-1 overflow-y-auto pr-2 text-sm leading-relaxed text-gray-500 whitespace-pre-line text-left">
        {text}
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