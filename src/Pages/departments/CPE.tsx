import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
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
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-wide text-gray-900">
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

        <section className="p-4 md:p-8">
          <div className="mt-8 grid grid-cols-12 gap-5">
            {/* LEFT CONTENT CARD */}
            <div className="col-span-12 lg:col-span-5 flex flex-col justify-between p-8 bg-[#F9F6F0] rounded-[2rem] border border-stone-200 shadow-sm">
              <div>
                <header className="mb-6">
                  <p className="text-[10px] font-bold tracking-[0.2em] text-red-900 uppercase mb-2">
                    {dept.hero.university}
                  </p>
                  <h1 className="text-5xl font-black text-slate-900 leading-[0.9] tracking-tighter uppercase">
                    {/* We use replace to handle the <br /> if needed, or just let it wrap */}
                    {dept.title.split(" ").map((word, i) => (
                      <span key={i}>
                        {word} {i === 0 && <br />}
                      </span>
                    ))}
                  </h1>
                </header>

                <p className="text-slate-600 text-sm leading-relaxed mb-8 max-w-md">
                  {dept.hero.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-10">
                  <a
                    href={dept.links.explore}
                    className="px-6 py-2.5 bg-[#7B1616] hover:bg-red-950 text-white rounded-full font-bold text-xs transition-colors text-center"
                  >
                    Explore the Program
                  </a>
                  <a
                    href={dept.links.performance}
                    className="px-6 py-2.5 border border-stone-300 bg-white text-[#7B1616] hover:bg-stone-50 rounded-full font-bold text-xs transition-colors text-center"
                  >
                    CpE Performance and Extension
                  </a>
                </div>
              </div>

              {/* DYNAMIC STATS SECTION */}
              <div className="grid grid-cols-3 gap-3">
                {dept.hero.stats.map((stat, index) => (
                  <div
                    key={index}
                    className="p-4 bg-white/60 rounded-2xl border border-stone-100"
                  >
                    <span
                      className={`block text-xl font-black ${stat.highlight ? "text-red-800" : "text-slate-900"}`}
                    >
                      {stat.value}
                    </span>
                    <p className="text-[9px] leading-tight font-bold text-stone-500 uppercase">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT IMAGE CLUSTER - Now using the 'images' object from TS */}
            <div className="col-span-12 lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="md:col-span-2 h-64 rounded-[2rem] overflow-hidden bg-stone-200">
                <img
                  src={dept.images.heroBig}
                  alt="Hero Big"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="h-[400px] rounded-[2rem] overflow-hidden bg-stone-200">
                <img
                  src={dept.images.heroLeft}
                  alt="Hero Left"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col gap-5 h-[400px]">
                <div className="flex-1 rounded-[2rem] overflow-hidden bg-stone-200">
                  <img
                    src={dept.images.heroSmall1}
                    alt="Hero Small 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 rounded-[2rem] overflow-hidden bg-stone-200">
                  <img
                    src={dept.images.heroSmall2}
                    alt="Hero Small 2"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      {/* --- ABOUT SECTION --- */}
      <section
        id="about"
        className="w-full bg-slate-950 py-20 my-10 border-y-4 border-yellow-400"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="text-left flex-1">
              <div className="text-xs font-bold tracking-[0.2em] text-yellow-400 uppercase mb-3">
                {dept.programOverview.heading}
              </div>
              <h2 className="text-3xl font-black text-white mb-4 uppercase tracking-tighter">
                Mission & Vision
              </h2>
              <p className="text-base text-slate-300 leading-relaxed max-w-3xl">
                {dept.programOverview.text}
              </p>
            </div>
          </div>

          {/* Stats Grid with visible separation */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-0 border border-slate-800 rounded-3xl overflow-hidden">
            <Stat
              value={dept.programOverview.stats.nonTeaching}
              label="Non-Teaching Personnel"
              accentHex="#facc15" // Yellow-400
            />
            <Stat
              value={dept.programOverview.stats.faculty}
              label="Faculty"
              accentHex="#facc15"
            />
            <Stat
              value={dept.programOverview.stats.students}
              label="Enrolled Students"
              accentHex="#facc15"
            />
          </div>
        </div>
      </section>

      {/* --- PEO SECTION --- */}
      <section id="peo" className="max-w-6xl mx-auto px-6 pt-16">
        <SectionTitle
          center
          eyebrow={dept.title}
          title={dept.peo.title}
          subtitle={dept.peo.subtitle}
        />

        <div className="mt-10 grid grid-cols-12 gap-8 items-start">
          <div className="col-span-12 md:col-span-6">
            <div className="rounded-2xl overflow-hidden bg-gray-200">
              <img
                src={dept.images.peo}
                alt=""
                className="w-full h-[320px] md:h-[360px] object-cover"
              />
            </div>
          </div>

          <div className="col-span-12 md:col-span-6">
            <div className="space-y-5">
              {dept.peo.bullets.map((b, idx) => (
                <Bullet key={idx} title={`PEO ${idx + 1}`} text={b} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- SO SECTION --- */}
      <section id="so" className="max-w-6xl mx-auto px-6 pt-16">
        <SectionTitle
          center
          eyebrow={dept.title}
          title={dept.so.title}
          subtitle={dept.so.subtitle}
        />

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {dept.so.outcomes.map((o, idx) => (
            <OutcomeCard key={idx} title={o.title} text={o.text} />
          ))}
        </div>
      </section>

      {/* --- CURRICULUM SECTION --- */}
      <section id="curriculum" className="max-w-6xl mx-auto px-6 pt-16">
        <div className="grid grid-cols-12 gap-8 items-start">
          <div className="col-span-12 md:col-span-6">
            <div className="text-xs font-semibold text-gray-400 tracking-wide">
              TAKE A TOUR
            </div>
            <h2 className="mt-2 text-3xl font-extrabold text-gray-900">
              {dept.curriculum.title}
            </h2>
            <p className="mt-3 text-sm text-gray-500 leading-relaxed">
              {dept.curriculum.text}
            </p>

            <ul className="mt-6 space-y-3 text-sm text-gray-600">
              {dept.curriculum.bullets.map((b, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: dept.theme.accentHex }}
                  />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-12 md:col-span-6">
            <div className="h-[360px] md:h-[420px] rounded-2xl bg-gray-50 border flex items-center justify-center overflow-hidden">
              <img
                src={dept.images.watermark}
                alt=""
                className="w-[420px] md:w-[520px] opacity-20 select-none"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- LABORATORIES SECTION --- */}
      <section id="laboratories" className="max-w-6xl mx-auto px-6 pt-16">
        <SectionTitle
          center
          eyebrow={dept.title}
          title={dept.laboratories.title}
          subtitle="Department laboratories and learning spaces"
        />

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
          {dept.laboratories.items.map((lab, idx) => (
            <div key={idx} className="rounded-2xl border bg-white p-6">
              <div className="text-xs font-semibold text-gray-400">
                LAB {idx + 1}
              </div>
              <h3 className="mt-2 text-base font-bold text-gray-900">{lab}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* --- FACULTY SECTION --- */}
      <section id="faculty" className="max-w-6xl mx-auto px-6 pt-16">
        <SectionTitle center eyebrow={dept.title} title={dept.faculty.title} />

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
          {dept.faculty.members.map((member, idx) => (
            <div
              key={`${member.name}-${idx}`}
              className="rounded-2xl border bg-white p-6"
            >
              <h3 className="font-bold text-gray-900">{member.name}</h3>
              <p className="mt-1 text-sm text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

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
  value: number;
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

function Bullet({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <div className="font-semibold text-gray-900">{title}</div>
      <div className="mt-1 text-sm text-gray-500">{text}</div>
    </div>
  );
}

function OutcomeCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-2xl border bg-white p-6 text-center">
      <div className="mx-auto w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center font-bold text-[#A90000]">
        ✓
      </div>
      <div className="mt-4 font-semibold text-gray-900">{title}</div>
      <div className="mt-2 text-sm text-gray-500">{text}</div>
    </div>
  );
}
