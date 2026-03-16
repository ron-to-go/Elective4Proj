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
          <div className="mt-2 text-lg font-bold text-gray-900">{dept.programOverview.subtitle}</div>
          
            {dept.programOverview.contents.map((c, idx) => (
              <div key={idx}>
                <div className="mt-5 text-sm font-semibold text-red-900">{c.heading}</div>
                <p className="mt-3 text-sm text-gray-500 leading-relaxed max-w-6xl">{c.text}</p>
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

        <div className="mt-10 grid grid-cols-12 gap-8 items-start">
          <div className="col-span-12 md:col-span-6">
            <div className="rounded-2xl overflow-hidden bg-gray-200">
              <img src={dept.images.peo} alt="" className="w-full h-[320px] md:h-[400px] object-cover" />
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

      <section id="curriculum" className="max-w-6xl mx-auto px-6 pt-16">
        <div className="grid grid-cols-12 gap-8 items-start">
          <div className="col-span-12 md:col-span-6">
            <div className="text-xs font-semibold text-gray-400 tracking-wide">TAKE A TOUR</div>
            <h2 className="mt-2 text-3xl font-extrabold text-gray-900">{dept.curriculum.title}</h2>
            <p className="mt-3 text-sm text-gray-500 leading-relaxed">{dept.curriculum.text}</p>

            <ul className="mt-6 space-y-4 text-sm text-gray-600">
              {dept.curriculum.bullets.map((b, idx) => (
                <li key={idx} className="flex flex-col">

                  {/* Bullet + Title */}
                  <div className="flex items-center gap-2">
                    <span
                      className="w-2 h-2 rounded-full bg-yellow-500 inline-block flex-shrink-0"

                    />
                    <p className="font-semibold text-red-900">
                      {typeof b === "string" ? b : b.title}
                    </p>
                  </div>

                  {/* Description */}
                  {typeof b !== "string" && (
                    <p className="mt-3 ml-4 text-gray-600 whitespace-pre-line" >
                      {b.text}
                    </p>
                  )}

                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-12 md:col-span-6">
            <div className="h-[360px] md:h-[500px] rounded-2xl flex items-center justify-center overflow-hidden">
              <img src={dept.images.watermark} alt="" className="w-[420px] md:w-[520px] opacity-20 select-none" />
            </div>
          </div>
        </div>
      </section>

      <section id="laboratories" className="max-w-6xl mx-auto px-6 pt-16">
        <SectionTitle center eyebrow={dept.title} title={dept.laboratories.title} subtitle="Department laboratories and learning spaces" />

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
          {dept.laboratories.items.map((lab, idx) => (
            <div key={idx} className="rounded-2xl border bg-white p-6">
              <div className="text-xs font-semibold text-gray-400">LAB {idx + 1}</div>
              <h3 className="mt-2 text-base font-bold text-gray-900">{lab}</h3>
            </div>
          ))}
        </div>
      </section>

      <section id="faculty" className="max-w-6xl mx-auto px-6 pt-16">
        <SectionTitle center eyebrow={dept.title} title={dept.faculty.title} />

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5">
          {dept.faculty.members.map((member, idx) => (
            <div key={`${member.name}-${idx}`} className="rounded-2xl border bg-white p-6">
              <h3 className="font-bold text-gray-900">{member.name}</h3>
              <p className="mt-1 text-sm text-gray-600">{member.role}</p>
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
                    <div key={cardIdx} className={`card rounded-2xl border bg-gray-100 p-4 gap-4 text-center flex flex-col items-center ${shouldCenter ? "md:col-start-2" : ""}`}>
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

      <section id="contact" className="max-w-6xl mx-auto px-6 pt-16">
        <div className="rounded-2xl border bg-gray-50 p-6 md:p-8">
          <h2 className="text-xl font-bold text-gray-900">Department Contact</h2>
          <p className="mt-2 text-sm text-gray-600">Add contact details for {dept.title} in this section.</p>
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

function Bullet({ title, text }: { title: string; text: string }) {
  return (
    <div>
      <div className="font-semibold text-gray-900">{title}</div>
      <div className="mt-1 text-sm text-gray-500">{text}</div>
    </div>
  );
}

function OutcomeCard({ title, text, iconUrl }: { title: string; text: string; iconUrl: string }) {
  return (
    <div className="card h-full rounded-2xl border bg-white p-6 text-center flex flex-col">
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
