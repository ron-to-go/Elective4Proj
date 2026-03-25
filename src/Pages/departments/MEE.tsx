import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/navbar";
import SectionTitle from "../../components/SectionTitle";
import Footer from "../../components/Footer";
import { mergeDeptWithOverrides } from "../../lib/departmentAdmin";
import { MEE } from "../../data/department/MEE";
import "../../styles/departments/MEE.css";
import {
  Lightbulb,
  Users,
  FlaskConical,
  ShieldCheck,
  Wrench,
  MessageSquare,
  Search,
  Globe,
  BookOpen,
  Scale,
  Cpu,
  Briefcase,
  Cog,
} from "lucide-react";

export default function MEEPage() {
  const [baseDept] = useState<typeof MEE>(MEE);


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

  const onNav = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="bg-[#e8eff3]">
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
              className="inline-flex items-center rounded-full border border-[#a90000] px-5 py-2 text-sm font-semibold text-[#a90000] hover:bg-[#a90000] hover:text-white"
            >
              Open Department Admin
            </Link>
          </div>
        </div>



        <div className="mt-8 grid grid-cols-12 gap-5">

          {/* LEFT BIG */}
          <a
            href="https://www.facebook.com/photo?fbid=3604494319879176&set=a.750132340243852"
            target="_blank"
            rel="noopener noreferrer"
            className="block col-span-12 md:col-span-4"
          >
            <div className="group h-[380px] md:h-[670px] rounded-2xl overflow-hidden bg-gray-200 
                    transition-all duration-500 ease-out 
                    hover:-translate-y-2 hover:shadow-2xl cursor-pointer">

              <div className="w-full h-full relative overflow-hidden">
                <img
                  src={dept.images.heroLeft}
                  alt=""
                  className="w-full h-full object-cover 
                     transition-transform duration-700 ease-out 
                     group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/10 
                        opacity-0 group-hover:opacity-100 
                        transition duration-500"></div>
              </div>
            </div>
          </a>


          <div className="col-span-12 md:col-span-8 grid grid-cols-12 gap-5">

            {/* TOP BIG */}
            <a
              href="https://www.facebook.com/photo/?fbid=1263589322231482&set=a.750132360243850"
              target="_blank"
              rel="noopener noreferrer"
              className="block col-span-12"
            >
              <div className="group h-[300px] rounded-2xl overflow-hidden bg-gray-200 
                      transition-all duration-500 ease-out 
                      hover:-translate-y-2 hover:shadow-2xl cursor-pointer">

                <div className="w-full h-full relative overflow-hidden">
                  <img
                    src={dept.images.heroBig}
                    alt=""
                    className="w-full h-full object-cover 
                       transition-transform duration-700 ease-out 
                       group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10 
                          opacity-0 group-hover:opacity-100 
                          transition duration-500"></div>
                </div>
              </div>
            </a>


            {/* SMALL 1 */}
            <a
              href="https://www.facebook.com/AIMEESBulSU/posts/pfbid0QBMLNdvqEusEnLRtnMp6d5jxH2NGUHKFcPr7BGNu2ii6W3wUGATKcNa4po2ScTZQl?rdid=HBuJMuAqSMrBdxxk#"
              target="_blank"
              rel="noopener noreferrer"
              className="block col-span-12 md:col-span-6"
            >
              <div className="group h-[350px] rounded-2xl overflow-hidden bg-gray-200 
                      transition-all duration-500 ease-out 
                      hover:-translate-y-2 hover:shadow-2xl cursor-pointer">

                <div className="w-full h-full relative overflow-hidden">
                  <img
                    src={dept.images.heroSmall1}
                    alt=""
                    className="w-full h-full object-cover 
                       transition-transform duration-700 ease-out 
                       group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10 
                          opacity-0 group-hover:opacity-100 
                          transition duration-500"></div>
                </div>
              </div>
            </a>


            {/* SMALL 2 */}
            <a
              href="https://www.facebook.com/AIMEESBulSU/posts/pfbid02ijHers3CGTgvyKqmZkGb1X7XDtdX6uhnTX3J8hCWgEYbuXzUhY2eGnktoXpjJUaHl?rdid=MeGMAnY0orEaeqMi#"
              target="_blank"
              rel="noopener noreferrer"
              className="block col-span-12 md:col-span-6"
            >
              <div className="group h-[350px] rounded-2xl overflow-hidden bg-gray-200 
                      transition-all duration-500 ease-out 
                      hover:-translate-y-2 hover:shadow-2xl cursor-pointer">

                <div className="w-full h-full relative overflow-hidden">
                  <img
                    src={dept.images.heroSmall2}
                    alt=""
                    className="w-full h-full object-cover 
                       transition-transform duration-700 ease-out 
                       group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/10 
                          opacity-0 group-hover:opacity-100 
                          transition duration-500"></div>
                </div>
              </div>
            </a>

          </div>
        </div>
      </section>

      <section id="about" className="max-w-6xl mx-auto px-6 pt-10">
        <div className="mt-12 max-w-[1100px]">
<SectionTitle
  title={dept.programOverview.heading}
/>
          <p className="mt-4 text-md text-gray-800 leading-9 text-justify">
            {dept.programOverview.text}
          </p>
        </div>

        <div className="mt-18 grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          <div className="scale-150">
            <Stat
              value={dept.programOverview.stats.nonTeaching}
              label="Non-Teaching Personnel"
              accentHex={dept.theme.accentHex}
            />
          </div>

          <div className="scale-150">
            <Stat
              value={dept.programOverview.stats.faculty}
              label="Faculty"
              accentHex={dept.theme.accentHex}
            />
          </div>

          <div className="scale-150">
            <Stat
              value={dept.programOverview.stats.students}
              label="Enrolled Students"
              accentHex={dept.theme.accentHex}
            />
          </div>
        </div>
      </section>

      <section id="peo" className="mt-10 max-w-6xl mx-auto px-6 pt-16">
        <SectionTitle
          center
          eyebrow={dept.title}
          title={dept.peo.title}
          subtitle={dept.peo.subtitle}
        />

<div className="mt-10 grid grid-cols-12 gap-8 items-start">

  {/* IMAGE */}
  <div className="col-span-12 md:col-span-6 overflow-hidden">
    <div className="w-full h-[350px] md:h-[350px] rounded-2xl overflow-hidden flex items-center justify-center">
      
      <img
        src={dept.images.peo}
        alt="Mechatronics Gears"
        className="w-full h-full object-contain p-6"
      />

    </div>
  </div>

  {/* TEXT */}
  <div className="col-span-12 md:col-span-6 min-w-0">
    <div className="space-y-6">
      
      {dept.peo.bullets.map((b, idx) => (
        <div key={idx}>
          
          <h4 className="text-lg font-semibold text-gray-800">
            PEO {idx + 1}
          </h4>

          <p className="mt-2 text-gray-600 leading-relaxed text-justify break-words">
            {b}
          </p>

        </div>
      ))}

    </div>
  </div>

</div>
      </section>

      <section id="so" className="mt-10 max-w-6xl mx-auto px-6 pt-16">
        <SectionTitle
          center
          eyebrow={dept.title}
          title={dept.so.title}
          subtitle={dept.so.subtitle}
        />

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {dept.so.outcomes.map((o, idx) => (
            <OutcomeCard
              key={idx}
              title={o.title}
              text={o.text}
              icon={outcomeIcons[idx]}
            />
          ))}
        </div>
      </section>

      <section id="curriculum" className="mt-10 max-w-6xl mx-auto px-6 pt-16">
        <div className="grid grid-cols-12 gap-8 items-stretch">
          <div className="col-span-12 md:col-span-6">
            <div className="text-xs font-semibold text-gray-400 tracking-wide">
              TAKE A TOUR
            </div>

            <h2 className="mt-2 text-3xl font-extrabold text-gray-900">
              {dept.curriculum.title}
            </h2>

            {"subtitle" in dept.curriculum && dept.curriculum.subtitle && (
              <p className="mt-2 text-sm font-medium text-gray-700">
                {dept.curriculum.subtitle}
              </p>
            )}

            <p className="mt-6 text-lg text-gray-700 leading-relaxed text-justify">
              {dept.curriculum.text}
            </p>

            {"structure" in dept.curriculum && dept.curriculum.structure && (
              <p className="mt-3 text-lg text-gray-700 leading-relaxed text-justify ">
                {dept.curriculum.structure}
              </p>
            )}
          </div>

          <div className="mt-6 col-span-12 md:col-span-6 flex">
            <div className="w-full flex items-center justify-center">
              <img
                src={dept.images.watermark}
                alt=""
                className="w-[80%] md:w-[80%] object-contain select-none"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {dept.curriculum.years.map((year, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">  
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300 rounded-2xl"
                style={{ backgroundColor: "#1c638b" }}
              />

              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-gray-900 transition group-hover:text-white">
                    {year.title}
                  </h3>
                  <span className="h-3 w-3 rounded-full bg-[#1c638b] transition group-hover:bg-white" />
                </div>

                <p className="mt-2 text-sm text-gray-400 transition group-hover:text-blue-100">
                  Hover to view details
                </p>

                <div className="mt-4 h-px bg-gray-100 transition group-hover:bg-white/30" />

                <div className="mt-4 max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:max-h-96 group-hover:opacity-100">
                  <p className="text-sm text-gray-600 transition group-hover:text-blue-100">
                    {year.description}
                  </p>

                  <ul className="mt-3 space-y-2 text-sm text-gray-600">
                    {year.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#1c638b] group-hover:bg-white" />
                        <span className="transition group-hover:text-white">
                          {b}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="laboratories" className="mt-10 max-w-6xl mx-auto px-6 pt-16">
        <SectionTitle
          center
          eyebrow={dept.title}
          title={dept.laboratories.title}
          subtitle="Department laboratories and learning spaces"
        />

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dept.laboratories.items.map((lab, idx) => (
            <div
              key={idx}
              className="group rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(28,99,139,0.2)] hover:bg-[#1c638b]">
              <div className=" text-xs font-semibold tracking-widest text-gray-400 group-hover:text-white/80">
                LAB {idx + 1}
              </div>

              <h3 className="mt-2 text-base md:text-lg font-bold text-gray-900 group-hover:text-white transition">
                {lab}
              </h3>
            </div>
          ))}
        </div>
      </section>

      <section id="faculty" className="mt-10 max-w-6xl mx-auto px-6 pt-16">
        <SectionTitle center eyebrow={dept.title} title={dept.faculty.title} />

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {dept.faculty.members.map((member, idx) => (
            <div
              key={`${member.name}-${idx}`}
              className="group overflow-hidden rounded-[2rem] border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(28,99,139,0.22)]">
              <div className="h-64 w-full overflow-hidden bg-gray-200">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-5 text-center transition-colors duration-300 group-hover:bg-[#1c638b]">
                <h3 className="text-base font-bold uppercase leading-snug text-[#1c638b] transition-colors duration-300 group-hover:text-white">
                  {member.name}
                </h3>

                <div className="mx-auto my-3 h-[2px] w-14 bg-[#1c638b]/30 transition-colors duration-300 group-hover:bg-white/50" />

                <p className="text-sm font-semibold uppercase tracking-wider text-gray-500 transition-colors duration-300 group-hover:text-white/85">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>



      <section id="careers" className="mt-10 max-w-6xl mx-auto px-6 pt-16">
        <SectionTitle
          center
          eyebrow={dept.title}
          title={dept.careers.title}
          subtitle={dept.careers.subtitle}
        />

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
  {dept.careers.cards.map((card, idx) => {
    const Icon = careerIcons[idx];

    return (
      <div
        key={idx}
        className="group rounded-2xl border-2 border-[#1c638b]/20 bg-[#e8eff3] p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_15px_30px_rgba(28,99,139,0.25)] hover:bg-[#1c638b] hover:border-[#1c638b]"
      >
        {/* ICON */}
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#1c638b]/10 group-hover:bg-white/20 transition">
          <Icon className="h-6 w-6 text-[#1c638b] group-hover:text-white" />
        </div>

        {/* TITLE */}
        <h3 className="mt-2 font-bold text-gray-900 group-hover:text-white transition">
          {card.title}
        </h3>

        {/* TEXT */}
        <p className="mt-2 text-sm text-gray-700 leading-relaxed text-justify group-hover:text-white/90 transition">
          {card.text}
        </p>
      </div>
    );
  })}
</div>
      </section>

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
      <div className="text-lg font-bold text-gray-900">
        {title}
      </div>
      <div className="text-sm text-gray-700 text-justify leading-relaxed">
        {text}
      </div>
    </div>
  );
}

const outcomeIcons = [
  Lightbulb, Users, FlaskConical, ShieldCheck, Wrench, MessageSquare, Search, Globe, BookOpen, Scale, Cpu, Briefcase, Cog, 
];

const careerIcons = [
  Cpu, Cog, Wrench,
];

  function OutcomeCard({
  title,
  text,
  icon: Icon,
}: {
  title: string;
  text: string;
  icon: any;
}) {
  return (
    <div
      className="
        group relative rounded-2xl border border-gray-200 bg-white p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:bg-[#1c638b] hover:shadow-[0_15px_30px_rgba(28,99,139,0.25)]">
      <div
        className="
          mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[#1c638b]/10 transition group-hover:bg-white/20">
        <Icon className="h-6 w-6 text-[#1c638b] group-hover:text-white" />
      </div>

      <div className="text-lg font-bold text-gray-900 transition group-hover:text-white">
        {title}
      </div>

      <div className="mt-2 text-sm leading-relaxed text-gray-700 transition group-hover:text-white/90">
        {text}
      </div>
    </div>
  );
}