import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { landingPageData, type LandingPageData } from "../data/landing";
import {
  loadLandingDraft,
  mergeLandingWithOverrides,
} from "../lib/landingAdmin";

type Sections = LandingPageData["sections"];

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
  const sortedItems = useMemo(() => {
    if (!data.items) return [];
    return [...data.items].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [data.items]);

  const featuredList = sortedItems.slice(0, 4) || [];
  const [current, setCurrent] = useState(0);
  const [manualTick, setManualTick] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [activeItem, setActiveItem] = useState<typeof sortedItems[number] | null>(null);
  const itemsPerPage = 6;

  const wrappedCurrent =
    featuredList.length > 0
      ? ((current % featuredList.length) + featuredList.length) %
        featuredList.length
      : 0;
  const currentItem = featuredList[wrappedCurrent];

  const gridPageCount = Math.max(1, Math.ceil(sortedItems.length / itemsPerPage));
  const safeCurrentPage = Math.min(currentPage, gridPageCount - 1);
  const visibleGridItems = sortedItems.slice(
    safeCurrentPage * itemsPerPage,
    (safeCurrentPage + 1) * itemsPerPage
  );

  const goTo = (index: number) => {
    if (index >= 0 && index < featuredList.length) {
      setCurrent(index);
      setManualTick((n) => n + 1);
    }
  };

  const handlePageChange = (nextPage: number) => {
    setCurrentPage(nextPage);
    document.getElementById("coe-news")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    if (featuredList.length <= 1) return;

    const intervalId = window.setInterval(() => {
      setCurrent((prev) => (prev + 1) % featuredList.length);
    }, 3000);

    return () => window.clearInterval(intervalId);
  }, [featuredList.length, manualTick]);

  const isFirstHistoryRef = useRef(true);

useEffect(() => {
  if (isFirstHistoryRef.current) {
    isFirstHistoryRef.current = false;
    return;
  }
  if (currentPage === 0) return;

  const anchor = document.getElementById("coe-news");
  if (!anchor) return;

  anchor.scrollIntoView({ behavior: "smooth", block: "start" });
}, [currentPage]);
  
  return (
    <section id="news" className="bg-[#FCFCFD]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        {/* Hero */}
        <div className="relative bg-[#F4F5F6] rounded-t-[24px] overflow-hidden">
          {/* Background Image */}
          {data?.backgroundImage && (
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${data.backgroundImage})` }}
            />
          )}

          {/* Gradient Overlay */}
          {data?.overlayImage && (
            <div
              className="absolute inset-0 bg-cover bg-center opacity-80"
              style={{ backgroundImage: `url(${data.overlayImage})` }}
            />
          )}

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center gap-8 px-4 py-10 sm:py-12">
            {/* Frame */}
            <div className="flex flex-col items-center gap-4">
              {/* Hero Title */}
              <h1
                className="
                  font-bold text-white tracking-[-0.02em]
                  text-4xl leading-tight
                  sm:text-5xl sm:leading-[1.1]
                  md:text-6xl md:leading-[1.1]
                  lg:text-[72px] lg:leading-20
                "
              >
                {data?.title || "COE NEWS"}
              </h1>
            </div>
          </div>
        </div>
        {/* Featured News Card with Pagination */}
        {currentItem && (
          <div className="mt-8">
            {/* CARD */}
            <div className="relative w-full h-55 sm:h-80 md:h-105 lg:h-129.5 rounded-t-[6px] overflow-hidden transition-all duration-500 ease-out">
              {/* Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-500 ease-in-out"
                style={{ backgroundImage: `url(${currentItem.image})` }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60" />

              <div className="absolute inset-0 flex flex-col justify-between p-3 sm:p-4">
                {/* Badge */}
                <div>
                  <span className="inline-flex border border-[#EBEEF3] rounded-[3px] px-4 py-1 sm:mx-8 sm:my-4 text-[#EBEEF3] text-xs sm:text-sm md:text-base font-medium">
                    {"RECENT"}
                  </span>
                </div>

                {/* Text */}
                <div className="text-white flex flex-col gap-2 sm:gap-3 max-w-3xl sm:px-8 overflow-hidden transition-all duration-500 ease-in-out">
                  {(currentItem.author?.name || currentItem.date) && (
                    <div className="flex items-center gap-2 text-[#F9FAFC] text-xs sm:text-sm md:text-base">
                      {currentItem.author?.name && (
                        <span>{currentItem.author.name}</span>
                      )}
                      {currentItem.author?.name && currentItem.date && (
                        <span>•</span>
                      )}
                      {currentItem.date && <span>{currentItem.date}</span>}
                    </div>
                  )}

                  {currentItem.title && (
                    <h2
                      className="font-bold uppercase text-[#F9FAFC]
                      text-lg sm:text-xl md:text-2xl lg:text-[36px]
                      md:leading-10.75 line-clamp-2"
                    >
                      {currentItem.title}
                    </h2>
                  )}

                  {currentItem.description && (
                    <p
                      className="font-medium text-white
                      text-sm sm:text-base md:text-lg lg:text-[20px]
                      md:leading-7 line-clamp-3"
                    >
                      {currentItem.description}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* PAGINATION */}
            {featuredList.length > 1 && (
              <div className="flex items-center justify-center sm:justify-end sm:pr-8 gap-3 sm:gap-4 mt-6">
                {/* PREV */}
                <button
                  onClick={() => goTo(current - 1)}
                  disabled={current === 0}
                  className={`
                    w-12.5 h-10
                    flex items-center justify-center rounded-[3px]
                    ${current === 0 ? "bg-[#BAB8B8]" : "bg-[#262626] cursor-pointer active:scale-90 hover:scale-110 transition duration-300"}
                  `}
                >
                  <span className="border-2 border-[#EBEEF3] w-3 h-3 border-t-0 border-r-0 rotate-45" />
                </button>

                {/* NUMBERS */}
                <div className="flex items-center gap-2 sm:gap-3">
                  {featuredList.map((_, index) => {
                    const isActive = index === current;

                    return (
                      <button
                        key={index}
                        onClick={() => goTo(index)}
                        className={`
                          flex items-center justify-center
                          w-7.5 h-7.5 sm:w-8.75 sm:h-8.75
                          text-sm sm:text-base md:text-lg
                          ${
                            isActive
                              ? "bg-[#262626] text-white rounded-full"
                              : "text-[rgba(38,38,38,0.61)] cursor-pointer active:scale-90 hover:scale-120"
                          }
                        `}
                      >
                        {index + 1}
                      </button>
                    );
                  })}
                </div>

                {/* NEXT */}
                <button
                  onClick={() => goTo(current + 1)}
                  disabled={current === featuredList.length - 1}
                  className={`
                    w-12.5 h-10
                    flex items-center justify-center rounded-[3px]
                    ${
                      current === featuredList.length - 1
                        ? "bg-[#BAB8B8]"
                        : "bg-[#262626] cursor-pointer active:scale-90 hover:scale-110 transition duration-300"
                    }
                  `}
                >
                  <span className="border-2 border-[#EBEEF3] w-3 h-3 border-b-0 border-l-0 rotate-45" />
                </button>
              </div>
            )}
          </div>
        )}

        {/* NEWS GRID SECTION */}
        {sortedItems && (
          <div className="mt-12">
            {/* Heading */}
            <div className="mb-6 flex items-center justify-between gap-3">
              <h2
                id="coe-news"
                className="font-bold text-[#262626] text-xl sm:text-2xl md:text-[28px] mb-0"
              >
                COE NEWS
              </h2>
              <a
                href="#coe-news"
                aria-label="Scroll to COE NEWS section"
                className="hover:inline-flex items-center justify-center rounded-lg border border-gray-300 bg-white px-3 py-1.5 text-sm font-semibold text-[#262626] hover:bg-gray-100"
              >
                ↗
              </a>
            </div>

            {/* Grid */}
            <div
              className="
                grid sm:gap-6
                grid-cols-2
                sm:grid-cols-2
                lg:grid-cols-3
              "
            >
              {visibleGridItems.map((item, index) => (
                <div
                  key={index}
                  role="button"
                  tabIndex={0}
                  onClick={() => setActiveItem(item)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setActiveItem(item);
                    }
                  }}
                  className="flex flex-col gap-3 hover:scale-105 transition-all duration-300 ease-out hover:shadow-lg p-3 rounded-lg cursor-pointer active:scale-90"
                >
                  {/* Image Card */}
                  <div className="relative w-full h-50 sm:h-55 md:h-62 rounded-[6px] overflow-hidden">
                    {/* Image */}
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${item.image})` }}
                    />

                    {/* Optional dark overlay for readability */}
                    <div className="absolute inset-0 bg-black/20" />

                    {/* Label */}
                    {item.label && (
                      <div className="absolute top-2 right-2 border border-[#EBEEF3] rounded-lg px-2 py-0.5 bg-black/40">
                        <span className="text-[#EBEEF3] text-[10px] sm:text-[12px] font-normal capitalize">
                          {item.label}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* ✅ Avatar + Name */}
                  {item.author && (
                    <div className="flex items-center gap-3 mt-1">
                      {/* Avatar */}
                      <div
                        className="w-11 h-11 rounded-full bg-cover bg-center"
                        style={{
                          backgroundImage: `url(${item.author.avatar})`,
                        }}
                      />

                      {/* Name */}
                      <span className="text-black text-sm font-medium tracking-[0.1px]">
                        {item.author.name}
                      </span>
                    </div>
                  )}

                  {/* ✅ TEXT CONTENT */}
                  <div className="flex flex-col gap-1">
                    {/* Date */}
                    {item.date && (
                      <p className="text-[rgba(38,38,38,0.6)] text-xs sm:text-sm font-medium">
                        {item.date}
                      </p>
                    )}

                    {/* Title */}
                    {item.title && (
                      <h3
                        className="
                          text-[#262626]
                          font-semibold
                          text-base sm:text-lg md:text-[22px]
                          leading-snug
                          line-clamp-2
                        "
                      >
                        {item.title}
                      </h3>
                    )}

                    {/* Description */}
                    {item.description && (
                      <p
                        className="
                          text-[#696868]
                          font-medium
                          text-sm sm:text-base
                          leading-relaxed
                          line-clamp-3
                        "
                      >
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Grid pagination */}
            {gridPageCount > 1 && (
              <div className="mt-6 flex items-center justify-center gap-3 sm:gap-4">
                <button
                  onClick={() => handlePageChange(Math.max(0, currentPage - 1))}
                  disabled={currentPage === 0}
                  className={`
                    w-12.5 h-10
                    flex items-center justify-center rounded-[3px]
                    ${currentPage === 0 ? "bg-[#BAB8B8]" : "bg-[#262626] cursor-pointer active:scale-90 hover:scale-110 transition duration-300"}
                  `}
                >
                  <span className="border-2 border-[#EBEEF3] w-3 h-3 border-t-0 border-r-0 rotate-45" />
                </button>

                {Array.from({ length: gridPageCount }).map((_, pageIndex) => (
                  <button
                    key={pageIndex}
                    onClick={() => handlePageChange(pageIndex)}
                    className={`
                          flex items-center justify-center
                          w-7.5 h-7.5 sm:w-8.75 sm:h-8.75
                          text-sm sm:text-base md:text-lg
                          ${
                            currentPage === pageIndex
                              ? "bg-[#262626] text-white rounded-full"
                              : "text-[rgba(38,38,38,0.61)] cursor-pointer active:scale-90 hover:scale-120"
                          }
                        `}
                  >
                    {pageIndex + 1}
                  </button>
                ))}

                <button
                  onClick={() =>
                    handlePageChange(
                      Math.min(gridPageCount - 1, currentPage + 1),
                    )
                  }
                  disabled={currentPage === gridPageCount - 1}
                  className={`
                    w-12.5 h-10
                    flex items-center justify-center rounded-[3px]
                    ${currentPage === gridPageCount - 1 ? "bg-[#BAB8B8]" : "bg-[#262626] cursor-pointer active:scale-90 hover:scale-110 transition duration-300"}
                  `}
                >
                  <span className="border-2 border-[#EBEEF3] w-3 h-3 border-b-0 border-l-0 rotate-45" />
                </button>
              </div>
            )}

            {/* Modal for grid item detail */}
            {activeItem && (
              <div
                className="fixed inset-0 z-50 bg-black/60 grid place-items-center p-4"
                onClick={() => setActiveItem(null)}
              >
                <div
                  className="max-w-xl w-full rounded-2xl bg-white p-6 shadow-2xl overflow-auto max-h-[90vh]"
                  onClick={(e) => e.stopPropagation()}
                  role="dialog"
                  aria-modal="true"
                  aria-labelledby="news-item-title"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3
                      id="news-item-title"
                      className="text-xl font-bold text-gray-900"
                    >
                      {activeItem.title}
                    </h3>
                    <button
                      onClick={() => setActiveItem(null)}
                      className="text-gray-500 hover:text-red-500 cursor-pointer text-2xl hover:font-bold hover:scale-110 active:scale-90 transition duration-300"
                      aria-label="Close details"
                    >
                      ✕
                    </button>
                  </div>

                  {activeItem.image && (
                    <div
                      className="mb-4 h-52 rounded-lg bg-cover bg-center"
                      style={{ backgroundImage: `url(${activeItem.image})` }}
                    />
                  )}

                  <div className="mb-3 space-y-2 text-gray-700">
                    {activeItem.label && (
                      <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white bg-[#262626] rounded-full">
                        {activeItem.label}
                      </span>
                    )}

                    <div className="flex items-center gap-3">
                      {activeItem.author?.avatar && (
                        <div
                          className="w-10 h-10 rounded-full bg-cover bg-center"
                          style={{
                            backgroundImage: `url(${activeItem.author.avatar})`,
                          }}
                        />
                      )}
                      <div>
                        {activeItem.author?.name && (
                          <p className="text-sm font-medium text-gray-900">
                            {activeItem.author.name}
                          </p>
                        )}
                        {activeItem.date && (
                          <p className="text-xs text-gray-500">
                            {activeItem.date}
                          </p>
                        )}
                      </div>
                    </div>

                    {activeItem.description && (
                      <p className="text-base leading-relaxed text-gray-700">
                        {activeItem.description}
                      </p>
                    )}

                    {activeItem.hashtags && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {activeItem.hashtags.map((tag, idx) => (
                          <span
                            key={idx}
                            className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white bg-[#262626] rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {activeItem.links && (
                      <div className="mt-4">
                        <p className="text-sm font-semibold text-gray-900 mb-2">
                          Useful links
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {activeItem.links.map((link, idx) => (
                            <a
                              key={idx}
                              href={link.href}
                              target="_blank"
                              rel="noreferrer noopener"
                              aria-label={`Open ${link.label} in new tab`}
                              className="flex items-center p-3 border border-gray-200 rounded-xl bg-white text-left shadow-sm hover:shadow-md transition transform hover:-translate-y-0.5 active:scale-90"
                            >
                              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-100 mr-3 overflow-hidden">
                                {link.icon ? (
                                  <img
                                    src={link.icon}
                                    alt={`${link.label} icon`}
                                    className="w-10 h-10 object-contain"
                                  />
                                ) : (
                                  "↗"
                                )}
                              </span>

                              <div className="min-w-0">
                                <p className="text-sm font-semibold text-gray-900">
                                  {link.label}
                                </p>
                                {link.description && (
                                  <p className="text-xs text-gray-500 whitespace-pre-line">
                                    {link.description}
                                  </p>
                                )}
                              </div>

                              <span className="ml-auto text-gray-400 text-sm">
                                ↗
                              </span>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
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
    <section id="statistics" className="max-w-6xl mx-auto px-6 py-10">
      <SectionCard data={data}>
        <div className="mt-3 flex flex-wrap items-center justify-center gap-4 text-sm text-gray-700">
          {data.stats.map((item, idx) => (
            <span key={idx}>
              <strong>{item.value}</strong> {item.label}
            </span>
          ))}
        </div>
      </SectionCard>
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
  const isPreviewMode = useMemo(() => {
    if (typeof window === "undefined") return false;
    return new URLSearchParams(window.location.search).get("preview") === "landing";
  }, []);

  const [data, setData] = useState(() => {
    if (isPreviewMode) {
      return loadLandingDraft() ?? mergeLandingWithOverrides(landingPageData);
    }

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

  const { hero, sections } = data;

  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 border-b bg-white/95 backdrop-blur">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <h1 className="font-extrabold tracking-wide text-lg">BULSU COE</h1>
          <div className="flex items-center gap-2">
            <Link
              to="/admin"
              className="rounded-full border border-gray-400 px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-50"
            >
              Landing Admin
            </Link>
            <Link
              to="/departments"
              className="rounded-full bg-[#a90000] px-5 py-2 text-sm font-semibold text-white hover:bg-[#8f0000]"
            >
              Department Pages
            </Link>
          </div>
        </div>
      </header>

      <main>
        <section id="hero" className="max-w-6xl mx-auto px-6 py-16 md:py-20">
          <div className="rounded-3xl bg-gradient-to-r from-[#f4efe3] via-[#ead9b5] to-[#d6b26f] p-8 md:p-12">
            <p className="text-xs font-semibold tracking-[0.14em] text-[#6f4d12]">
              {hero.eyebrow}
            </p>
            <h2 className="mt-4 text-3xl md:text-5xl font-black leading-tight text-[#2a1d0b] whitespace-pre-line">
              {hero.title}
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to={hero.primaryButtonHref}
                className="rounded-full bg-[#2a1d0b] px-5 py-2 text-sm font-semibold text-white hover:bg-black"
              >
                {hero.primaryButtonLabel}
              </Link>
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
