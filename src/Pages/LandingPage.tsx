import { type ReactNode } from "react";
import { Building2, CalendarDays, Send, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { type LandingPageData } from "../data/landing";
import { useLandingPageContent } from "../lib/landingAdmin";

type Sections = LandingPageData["sections"];
type HeroStat = LandingPageData["hero"]["stats"][number];

const heroStatIcons: Record<HeroStat["icon"], typeof Send> = {
  send: Send,
  building: Building2,
  calendar: CalendarDays,
  users: Users,
};

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
  const data = useLandingPageContent();

  const { navbar, hero, sections } = data;

  return (
    <div className="min-h-screen bg-[#fbf8f4]">
      <header className="sticky top-0 z-50 border-b border-[#ece7df] bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          <Link to="/" className="shrink-0 rounded-full transition-transform duration-300 hover:scale-[1.03]">
            <img
              src={navbar.logoSrc}
              alt={navbar.logoAlt}
              className="h-12 w-12 object-contain sm:h-14 sm:w-14"
            />
          </Link>

          <nav className="hidden flex-1 items-center justify-center md:flex">
            <ul className="flex items-center gap-10 text-[15px] font-medium text-[#8f8b84]">
              {navbar.links.map((link) => (
                <li key={link.label}>
                  {link.isRoute ? (
                    <Link
                      to={link.href}
                      className="transition-colors duration-200 hover:text-[#202020]"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className={`transition-colors duration-200 hover:text-[#202020] ${
                        link.label === "Home" ? "font-semibold text-[#202020]" : ""
                      }`}
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <a
            href={navbar.contactHref}
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#b52a16] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_20px_rgba(181,42,22,0.22)] transition-colors duration-200 hover:bg-[#992211] sm:px-8"
          >
            {navbar.contactLabel}
          </a>
        </div>
      </header>

      <main>
        <section id="hero" className="mx-auto max-w-6xl px-4 py-10 sm:px-6 md:py-14">
          <div className="overflow-hidden rounded-[2rem] border border-[#ece7df] bg-white p-4 shadow-[0_25px_80px_rgba(15,23,42,0.08)] sm:p-5 md:p-6">
            <div className="relative overflow-hidden rounded-[1.75rem] bg-[#080606]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_40%,rgba(167,18,0,0.48),transparent_30%),radial-gradient(circle_at_48%_94%,rgba(255,123,63,0.4),transparent_28%),linear-gradient(125deg,rgba(7,7,7,0.96),rgba(16,9,8,0.88)_45%,rgba(3,3,3,0.98))]" />
              <div
                className="absolute inset-y-0 left-[-8%] w-[52%] bg-contain bg-left bg-no-repeat opacity-[0.18]"
                style={{ backgroundImage: `url('${hero.leftWatermarkSrc}')` }}
              />
              <div
                className="absolute inset-y-0 right-[-6%] w-[44%] bg-contain bg-right bg-no-repeat opacity-[0.12]"
                style={{
                  backgroundImage: `url('${hero.rightWatermarkSrc}')`,
                  transform: "scaleX(-1) rotate(12deg)",
                }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent_18%,transparent_80%,rgba(255,255,255,0.03))]" />

              <div className="relative z-10 flex min-h-[26rem] flex-col items-center justify-center px-6 py-16 text-center md:min-h-[28rem] md:px-16">
                <p className="text-sm font-semibold tracking-[0.12em] text-white/80 md:text-base">
                  {hero.eyebrow}
                </p>
                <h2 className="mt-5 max-w-[8ch] whitespace-pre-line text-5xl font-black leading-[0.93] text-white sm:text-6xl md:text-7xl">
                  {hero.title}
                </h2>

                <div className="mt-9">
                  <Link
                    to={hero.primaryButtonHref}
                    className="inline-flex items-center justify-center rounded-full border-[5px] border-[#8c95c6] bg-[#ef8f33] px-8 py-3.5 text-lg font-semibold text-white shadow-[0_14px_30px_rgba(239,143,51,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#f39a44] sm:px-10"
                  >
                    {hero.primaryButtonLabel}
                  </Link>
                </div>
              </div>
            </div>

            <div className="grid gap-4 border-t border-[#f1ece4] px-2 py-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-6">
              {hero.stats.map((item) => {
                const Icon = heroStatIcons[item.icon];

                return (
                <div key={item.label} className="flex items-start gap-3 rounded-2xl px-3 py-1">
                  <span className="mt-1 text-[#bcc1cf]">
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </span>
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
