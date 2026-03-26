import { useEffect, useMemo, useState, useRef, type ReactNode } from "react";
import Navbar from "../../components/CEnavbar";
import SectionTitle from "../../components/CEsectiontitle";
import Footer from "../../components/CEfooter";
import { mergeDeptWithOverrides } from "../../lib/departmentAdmin";
import { CE } from "../../data/department/CE";
import CEIcon from "../../assets/CEicon.svg";
import "../../styles/departments/CE.css";

function FadeInSection({ children, className = "", delay = "" }: { children: ReactNode, className?: string, delay?: string }) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const current = domRef.current;
    if (current) observer.observe(current);
    return () => { if (current) observer.unobserve(current); };
  }, []);

  return (
    <div
      className={`${className} ${isVisible ? 'ce-animate-fade-in' : 'opacity-0'} ${delay}`}
      ref={domRef}
    >
      {children}
    </div>
  );
}

function ImageStack({ images }: { images: string[] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 1500); // Switches every 1.5 seconds for a smooth but quick feel
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full max-w-4xl mx-auto h-[400px] md:h-[600px] mt-16">
      {images.map((img, idx) => {
        // Calculate position relative to current index
        const position = (idx - currentIndex + images.length) % images.length;
        const isVisible = position < 3; // Show top 3 layers

        return (
          <div
            key={idx}
            className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
              !isVisible ? "opacity-0 scale-95 translate-y-8" : ""
            }`}
            style={{
              zIndex: images.length - position,
              transform: `translateY(${position * 20}px) scale(${1 - position * 0.05})`,
              opacity: isVisible ? 1 - position * 0.3 : 0,
            }}
          >
            <div className="w-full h-full rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white ce-border-gold">
              <img
                src={img}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

function PEOSlider({ objectives }: { objectives: any[] }) {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSetCurrent = (idx: number) => {
    if (isAnimating || idx === current) return;
    setIsAnimating(true);
    setCurrent(idx);
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <div className="relative max-w-5xl mx-auto">
      {/* Blueprint Grid Background Decoration */}
      <div className="absolute -inset-10 opacity-[0.03] pointer-events-none -z-10 overflow-hidden">
        <div className="w-full h-full" style={{ backgroundImage: 'linear-gradient(#1F3A4D 1px, transparent 1px), linear-gradient(90deg, #1F3A4D 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-stretch">
        {/* Left Side: Vertical Tabs */}
        <div className="lg:w-1/3 flex flex-col gap-4">
          {objectives.map((obj, idx) => (
            <button
              key={obj.id}
              onClick={() => handleSetCurrent(idx)}
              className={`group relative p-6 rounded-2xl text-left transition-all duration-500 border-l-4 ${
                current === idx 
                ? "ce-bg-navy ce-border-gold shadow-xl -translate-x-2" 
                : "bg-white border-transparent hover:bg-gray-50 text-gray-400"
              }`}
            >
              <div className={`text-[10px] font-black tracking-[0.2em] mb-1 ${current === idx ? "ce-text-gold" : "text-gray-300"}`}>
                {obj.id}
              </div>
              <div className={`font-black text-sm uppercase tracking-tight ${current === idx ? "text-white" : "ce-text-navy"}`}>
                {obj.title}
              </div>
              {current === idx && (
                <div className="absolute right-6 top-1/2 -translate-y-1/2 text-gold-400 ce-animate-fade-in">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                </div>
              )}
            </button>
          ))}
          
          <div className="mt-auto p-6 ce-bg-gold/10 rounded-2xl border border-gold-200/20 hidden lg:block">
            <div className="text-[10px] font-black ce-text-navy/40 uppercase tracking-widest mb-2">Core Vision</div>
            <p className="text-xs font-bold ce-text-navy/60 italic leading-relaxed">
              "Engineering solutions that bridge the gap between imagination and reality."
            </p>
          </div>
        </div>

        {/* Right Side: Main Content Card */}
        <div className="lg:w-2/3">
          <div className="h-full overflow-hidden bg-white p-10 md:p-16 rounded-[3rem] shadow-2xl border border-gray-100 relative flex flex-col justify-center min-h-[450px]">
            {/* Technical Detail Elements */}
            <div className="absolute top-10 right-10 flex gap-1">
              {[1, 2, 3].map(i => <div key={i} className={`w-1 h-1 rounded-full ${i <= current + 1 ? 'ce-bg-gold' : 'bg-gray-200'}`}></div>)}
            </div>
            
            <div className="absolute bottom-0 right-0 w-48 h-48 opacity-[0.03] select-none -z-10 translate-x-10 translate-y-10">
              <svg viewBox="0 0 100 100" className="w-full h-full fill-current ce-text-navy">
                <path d="M0 0h100v100H0zM10 10h80v80H10z"/>
                <path d="M20 20h60v60H20zM30 30h40v40H30z"/>
              </svg>
            </div>

            <div className={`transition-all duration-500 transform ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
              <div className="inline-block px-4 py-1 ce-bg-navy rounded-full text-[10px] font-black ce-text-gold uppercase tracking-[0.3em] mb-8">
                Detailed Objective
              </div>
              <h3 className="text-3xl md:text-5xl font-black ce-text-navy mb-8 leading-tight uppercase tracking-tighter">
                {objectives[current].title}
              </h3>
              <div className="w-20 h-1.5 ce-bg-gold mb-8 rounded-full"></div>
              <p className="text-xl text-gray-600 leading-relaxed font-medium">
                {objectives[current].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SOSlider({ outcomes }: { outcomes: any[] }) {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent((prev) => (prev + 1) % outcomes.length);
      setIsAnimating(false);
    }, 400);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent((prev) => (prev - 1 + outcomes.length) % outcomes.length);
      setIsAnimating(false);
    }, 400);
  };

  const handleSelect = (idx: number) => {
    if (isAnimating || idx === current) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent(idx);
      setIsAnimating(false);
    }, 400);
  };

  const currentOutcome = outcomes[current];

  return (
    <div className="relative max-w-5xl mx-auto mt-16">
      {/* Decorative Grid/Blueprint background for the slider */}
      <div className="absolute -inset-10 opacity-[0.05] pointer-events-none -z-10 overflow-hidden">
        <div className="w-full h-full" style={{ backgroundImage: 'radial-gradient(#D4AF37 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      </div>

      {/* Main Outcome Card */}
      <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-[3rem] p-10 md:p-20 shadow-2xl overflow-hidden min-h-[500px] flex flex-col justify-center">
        {/* Animated Background Indicator */}
        <div className="absolute top-10 right-10 text-[12rem] font-black text-white/[0.03] select-none leading-none pointer-events-none uppercase italic transition-all duration-700">
           {currentOutcome.title}
        </div>

        <div className={`transition-all duration-500 transform ${isAnimating ? 'opacity-0 translate-y-8 blur-sm' : 'opacity-100 translate-y-0 blur-0'}`}>
          <div className="flex flex-col md:flex-row md:items-center gap-6 mb-12">
            <div className="w-20 h-20 rounded-2xl ce-bg-gold flex items-center justify-center text-navy font-black text-4xl shadow-2xl shadow-gold-500/20">
              {currentOutcome.title.toUpperCase()}
            </div>
            <div>
              <div className="text-xs font-black ce-text-gold tracking-[0.4em] uppercase mb-2">Student Outcome</div>
              <h3 className="text-3xl md:text-5xl font-black text-white tracking-tighter uppercase leading-tight italic">
                {currentOutcome.subtitle}
              </h3>
            </div>
          </div>

          <div className="w-full h-[2px] bg-gradient-to-r from-gold-500/50 via-gold-500/20 to-transparent mb-12"></div>

          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-medium italic">
            "{currentOutcome.text}"
          </p>
        </div>

        {/* Navigation Controls */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-8 pt-10 border-t border-white/10">
          <div className="flex gap-4">
            <button 
              onClick={handlePrev}
              className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:ce-bg-gold hover:text-navy hover:border-transparent transition-all duration-300 group"
              aria-label="Previous Outcome"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:-translate-x-1 transition-transform rotate-180"><path d="m9 18 6-6-6-6"/></svg>
            </button>
            <button 
              onClick={handleNext}
              className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center hover:ce-bg-gold hover:text-navy hover:border-transparent transition-all duration-300 group"
              aria-label="Next Outcome"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {outcomes.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-500 ${
                  current === idx ? "ce-bg-gold w-10" : "bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to outcome ${idx + 1}`}
              />
            ))}
          </div>

          <div className="text-xs font-black ce-text-gold tracking-widest uppercase hidden md:block">
            {current + 1} <span className="text-white/20 mx-2">/</span> {outcomes.length}
          </div>
        </div>
      </div>
    </div>
  );
}

function TrackModal({ isOpen, onClose, tracks, base }: { isOpen: boolean, onClose: () => void, tracks: any[], base: string }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-navy-900/80 backdrop-blur-sm ce-animate-fade-in"
        onClick={onClose}
      ></div>
      
      {/* Modal Content */}
      <div className="relative bg-white rounded-[3rem] shadow-2xl w-full max-w-2xl overflow-hidden ce-animate-scale-in">
        <div className="ce-bg-navy p-10 text-white relative">
          <div className="absolute top-0 right-0 p-8">
            <button onClick={onClose} className="text-white/40 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
            </button>
          </div>
          <div className="text-sm font-black ce-text-gold tracking-[0.4em] uppercase mb-4">Specialization</div>
          <h3 className="text-3xl font-black uppercase tracking-tighter italic">Choose your <span className="ce-text-gold">Track</span></h3>
        </div>
        
        <div className="p-10 bg-gray-50">
          <p className="text-gray-500 font-medium mb-8">Select a specialized field to download the corresponding program modules and curriculum details.</p>
          
          <div className="space-y-4">
            {tracks.map((track, idx) => (
              <a
                key={idx}
                href={`${base}/${track.file}`}
                download
                onClick={onClose}
                className="flex items-center justify-between p-6 bg-white border border-gray-100 rounded-2xl hover:border-gold-300 hover:shadow-xl transition-all group"
              >
                <div className="flex items-center gap-6">
                   <div className="w-12 h-12 rounded-xl ce-bg-light flex items-center justify-center text-navy font-black text-lg group-hover:ce-bg-gold transition-colors">
                      0{idx + 1}
                   </div>
                   <span className="text-lg font-black ce-text-navy group-hover:ce-text-gold transition-colors">{track.name}</span>
                </div>
                <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-300 group-hover:ce-bg-navy group-hover:text-white group-hover:border-transparent transition-all">
                   <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="p-8 bg-white border-t border-gray-100 text-center">
           <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Bulacan State University • College of Engineering</p>
        </div>
      </div>
    </div>
  );
}

function ImagePreviewModal({ isOpen, onClose, images, title, eyebrow }: { isOpen: boolean, onClose: () => void, images: string[], title: string, eyebrow: string }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
      <div 
        className="absolute inset-0 bg-navy-900/95 backdrop-blur-md ce-animate-fade-in"
        onClick={onClose}
      ></div>
      
      <div className="relative bg-white rounded-[3rem] shadow-2xl w-full max-w-5xl overflow-hidden ce-animate-scale-in max-h-[90vh] flex flex-col">
        <div className="ce-bg-navy p-8 text-white flex justify-between items-center relative overflow-hidden">
          {/* Background Decorative Text */}
          <div className="absolute right-0 bottom-0 text-6xl font-black text-white/[0.03] select-none pointer-events-none translate-y-4 uppercase italic">
            {title.split(" ").pop()}
          </div>

          <div className="relative z-10">
            <div className="text-[10px] font-black ce-text-gold tracking-[0.4em] uppercase mb-1">{eyebrow}</div>
            <h3 className="text-2xl font-black uppercase tracking-tighter italic">{title.split(" ").slice(0, -1).join(" ")} <span className="ce-text-gold">{title.split(" ").pop()}</span></h3>
          </div>
          <button onClick={onClose} className="text-white/40 hover:text-white transition-colors p-2 relative z-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
        </div>
        
        <div className="p-10 bg-gray-50 overflow-y-auto flex-1 custom-scrollbar">
          <div className="grid grid-cols-1 gap-12">
            {images.map((img, idx) => (
              <div key={idx} className="space-y-4">
                <div className="text-xs font-black ce-text-navy/40 uppercase tracking-widest flex items-center gap-3">
                   <span className="w-8 h-px ce-bg-gold"></span>
                   Visual Document 0{idx + 1}
                </div>
                <div className="rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl bg-white">
                  <img src={img} alt={`${title} ${idx + 1}`} className="w-full h-auto" />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 bg-white border-t border-gray-100 flex justify-between items-center">
           <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Bulacan State University • Civil Engineering</p>
           <button onClick={onClose} className="text-[10px] font-black ce-text-navy uppercase tracking-widest hover:ce-text-gold transition-colors">Close Preview</button>
        </div>
      </div>
    </div>
  );
}

export default function CEPage() {
  const [baseDept] = useState<typeof CE>(CE);
  const [activeId, setActiveId] = useState<string>("home");
  const [isTrackModalOpen, setIsTrackModalOpen] = useState(false);
  const [isGraphModalOpen, setIsGraphModalOpen] = useState(false);
  const [isChartModalOpen, setIsChartModalOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const dept = useMemo(
    () => mergeDeptWithOverrides(baseDept),
    [baseDept]
  );

  const baseDir = "/departments/CE"; // Ensure baseDir is correct for downloads

  const heroImages = useMemo(() => dept.images.heroCarousel, [dept.images.heroCarousel]);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveId(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = ["home", "about", "cele", "peo", "so", "curriculum", "careers", "laboratories", "faculty"];
    
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

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
    <div className="bg-white ce-text-dark selection:bg-gold-200 overflow-x-hidden">
      <Navbar onNav={onNav as any} activeId={activeId as any} />
      
      {/* Scroll Progress Bar */}
      <div className="fixed top-[72px] md:top-[88px] left-0 w-full h-1 z-[45] pointer-events-none">
        <div 
          className="h-full ce-bg-gold transition-all duration-150 ease-out shadow-[0_0_10px_rgba(212,175,55,0.5)]"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Hero Section - Initial Entrance */}
      <section id="home" className="max-w-6xl mx-auto px-6 pt-16">
        <div className="text-center">
          <div className="mb-8 flex justify-center group ce-animate-scale-in">
             <img src={CEIcon} alt="CE Logo" className="w-40 h-40 object-contain transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110" />
          </div>
          <div className="text-sm font-black ce-text-gold tracking-[0.3em] uppercase mb-4 ce-animate-fade-in ce-delay-2">
            {dept.subtitle}
          </div>
          <h1 className="text-4xl md:text-7xl font-black tracking-tight ce-text-navy uppercase ce-animate-fade-in ce-delay-4">
            {dept.title}
          </h1>

          <div className="mt-12 relative ce-animate-fade-in ce-delay-6 flex flex-col items-center">
            {/* Decorative background glow */}
            <div className="absolute inset-0 bg-gold-400/5 blur-3xl rounded-full -z-10 scale-150"></div>
            
            <div className="relative py-10 px-6 md:px-16 flex flex-col items-center">
              {/* Architectural Corner Accents */}
              <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 ce-border-gold/30"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 ce-border-gold/30"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 ce-border-gold/30"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 ce-border-gold/30"></div>

              <div className="text-lg md:text-2xl font-black ce-text-navy tracking-[0.2em] uppercase text-center leading-relaxed">
                Bounded by <span className="ce-text-gold">Synergy</span>
                <span className="mx-6 hidden md:inline opacity-20 text-navy/30">|</span>
                <br className="md:hidden" />
                Committed to <span className="ce-text-gold">Excellence</span>
              </div>
              
              <div className="mt-10 relative group">
                {/* Animated glow on hover */}
                <div className="absolute -inset-4 bg-gold-400/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="relative flex items-center gap-4 md:gap-8">
                   <div className="h-[1px] w-8 md:w-16 ce-bg-gold/40"></div>
                   <div className="text-[10px] md:text-xs font-black ce-text-navy tracking-[0.8em] uppercase flex items-center whitespace-nowrap bg-white px-4 py-1">
                     PRIDE <span className="mx-3 md:mx-5 text-[6px] ce-text-gold">■</span> 
                     HONOR <span className="mx-3 md:mx-5 text-[6px] ce-text-gold">■</span> 
                     DIGNITY
                   </div>
                   <div className="h-[1px] w-8 md:w-16 ce-bg-gold/40"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <FadeInSection delay="ce-delay-8">
          <ImageStack images={heroImages} />
        </FadeInSection>
      </section>

      {/* 1. Program Overview */}
      <section id="about" className="ce-bg-light mt-32 py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-start">
            <div className="lg:w-1/2">
              <FadeInSection delay="ce-delay-1">
                <div className="text-sm font-black ce-text-gold tracking-[0.3em] uppercase mb-6">
                  {dept.programOverview.heading}
                </div>
                <h2 className="text-4xl md:text-5xl font-black ce-text-navy leading-tight">
                  {dept.programOverview.subheading}
                </h2>
                <div className="mt-8 text-xl text-gray-600 leading-relaxed font-medium space-y-6">
                  {dept.programOverview.text.split("\n\n").map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
              </FadeInSection>
            </div>
            
            <div className="lg:w-1/2 w-full space-y-8">
              {/* Performance Card */}
              <FadeInSection delay="ce-delay-3" className="bg-white p-10 rounded-[2.5rem] shadow-xl border-t-8 ce-border-gold">
                <div className="flex items-center gap-4 mb-8">
                   <div className="w-12 h-12 rounded-xl ce-bg-navy flex items-center justify-center text-white">
                     <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m3 11 18-5v12L3 14v-3z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg>
                   </div>
                   <h3 className="text-xl font-black ce-text-navy uppercase tracking-tight">Licensure Performance</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="relative pt-2">
                    <div className="flex justify-between mb-2">
                      <span className="text-xs font-bold ce-text-navy uppercase tracking-widest">BulSU Average</span>
                      <span className="text-xs font-black ce-text-gold">70-76%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full ce-bg-gold rounded-full w-[74%] transition-all duration-1000 ce-delay-10"></div>
                    </div>
                  </div>
                  <div className="relative pt-2">
                    <div className="flex justify-between mb-2">
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">National Average</span>
                      <span className="text-xs font-black text-gray-400">30-40%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-gray-300 rounded-full w-[35%] transition-all duration-1000 ce-delay-10"></div>
                    </div>
                  </div>
                </div>
                
                <p className="mt-8 text-xs font-bold text-gray-400 italic">
                  * Consistently performing above the national passing rate for over a decade.
                </p>
              </FadeInSection>

              {/* Accreditation Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FadeInSection delay="ce-delay-4" className="bg-white p-8 rounded-[2rem] shadow-lg border border-gray-100">
                  <div className="text-[10px] font-black ce-text-gold uppercase tracking-[0.2em] mb-2">Accreditation</div>
                  <div className="text-lg font-black ce-text-navy leading-tight">{dept.programOverview.stats.accreditation}</div>
                  <div className="mt-4 text-[10px] text-gray-400 font-bold uppercase">AACCUP Accredited</div>
                </FadeInSection>
                <FadeInSection delay="ce-delay-5" className="bg-white p-8 rounded-[2rem] shadow-lg border border-gray-100">
                  <div className="text-[10px] font-black ce-text-gold uppercase tracking-[0.2em] mb-2">CHED Recognition</div>
                  <div className="text-lg font-black ce-text-navy leading-tight">{dept.programOverview.stats.ched}</div>
                  <div className="mt-4 text-[10px] text-gray-400 font-bold uppercase">Program Compliance</div>
                </FadeInSection>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1.5 Licensure Examination Section */}
      {dept.licensureExam && (
        <section id="cele" className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <FadeInSection delay="ce-delay-1">
              <SectionTitle 
                center 
                eyebrow={dept.licensureExam.eyebrow} 
                title={dept.licensureExam.title} 
                subtitle={dept.licensureExam.subtitle} 
              />
            </FadeInSection>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10">
              {dept.licensureExam.results.map((result, rIdx) => (
                <FadeInSection 
                  key={rIdx} 
                  delay={`ce-delay-${rIdx + 2}`}
                  className="bg-gray-50 p-8 md:p-12 rounded-[2.5rem] border border-gray-100 hover:shadow-xl transition-all"
                >
                  <h3 className="text-2xl font-black ce-text-navy mb-8 flex items-center gap-4">
                    <span className="w-12 h-0.5 ce-bg-gold"></span>
                    {result.period}
                  </h3>
                  <div className="grid grid-cols-1 gap-6">
                    {result.stats.map((stat, sIdx) => (
                      <div key={sIdx} className="flex justify-between items-center border-b border-gray-200 pb-4">
                        <span className="text-gray-500 font-bold uppercase text-xs tracking-wider">{stat.label}</span>
                        <span className="text-2xl font-black ce-text-gold">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </FadeInSection>
              ))}
            </div>

            {/* Preview Graphs Button */}
            <FadeInSection delay="ce-delay-5" className="mt-16 flex justify-center">
               <button 
                 onClick={() => setIsGraphModalOpen(true)}
                 className="group relative flex items-center gap-4 bg-white border-2 ce-border-gold px-10 py-5 rounded-2xl hover:ce-bg-navy hover:border-transparent transition-all duration-500 shadow-xl shadow-gold-500/10"
               >
                 <div className="flex flex-col items-start">
                   <span className="text-[10px] font-black ce-text-gold uppercase tracking-[0.3em] group-hover:text-white/40 transition-colors">Visual Data</span>
                   <span className="text-sm font-black ce-text-navy uppercase tracking-widest group-hover:text-white transition-colors">Performance Graphs</span>
                 </div>
                 <div className="w-10 h-10 rounded-xl ce-bg-light flex items-center justify-center text-navy group-hover:ce-bg-gold transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M18 9l-5 5-2-2-4 4"/></svg>
                 </div>
               </button>
            </FadeInSection>
          </div>
        </section>
      )}

      {/* 2. Program Educational Objectives */}
      <section id="peo" className="max-w-6xl mx-auto px-6 py-32 overflow-hidden">
        <FadeInSection delay="ce-delay-1">
          <SectionTitle 
            center 
            eyebrow={dept.peo.eyebrow} 
            title={dept.peo.title} 
            subtitle={dept.peo.subtitle} 
          />
        </FadeInSection>

        <div className="mt-20">
          <PEOSlider objectives={dept.peo.objectives} />
        </div>
      </section>

      {/* 3. Student Outcomes */}
      <section id="so" className="ce-bg-navy py-32 text-white relative overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-500/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-navy-400/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-[120px] pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <FadeInSection delay="ce-delay-1" className="text-center">
            <div className="text-sm font-black ce-text-gold tracking-[0.4em] uppercase mb-6">{dept.so.eyebrow}</div>
            <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter uppercase italic">
              {dept.so.title.split(' ')[0]} <span className="ce-text-gold">{dept.so.title.split(' ')[1]}</span>
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto text-xl mb-12 font-medium leading-relaxed">
              {dept.so.subtitle}
            </p>
          </FadeInSection>

          <FadeInSection delay="ce-delay-3">
            <SOSlider outcomes={dept.so.outcomes} />
          </FadeInSection>

          <div className="mt-24 p-12 rounded-[3rem] border border-white/5 bg-gradient-to-br from-white/[0.02] to-transparent text-center">
             <p className="text-gray-500 font-bold italic text-lg max-w-4xl mx-auto">
               "These outcomes ensure that our graduates are not only technically proficient but also socially responsible and ready to lead the global infrastructure landscape."
             </p>
          </div>
        </div>
      </section>

      {/* 4. Curriculum */}
      <section id="curriculum" className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-20 items-start">
            {/* Left Column: Info & Highlights */}
            <div className="lg:w-1/3">
              <FadeInSection delay="ce-delay-1">
                <div className="text-sm font-black ce-text-gold tracking-[0.4em] uppercase mb-6">{dept.curriculum.eyebrow}</div>
                <h2 className="text-4xl md:text-6xl font-black ce-text-navy leading-tight uppercase tracking-tighter italic mb-8">
                  {dept.curriculum.title.split(' ')[0]} <br />
                  <span className="ce-text-gold">{dept.curriculum.title.split(' ')[1]}</span>
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed font-medium mb-12">
                  {dept.curriculum.description}
                </p>

                <div className="space-y-6">
                  {dept.curriculum.highlights.map((h: string, idx: number) => (
                    <div key={idx} className="flex items-center gap-4 group">
                      <div className="w-10 h-10 rounded-xl ce-bg-light border border-gold-200 flex items-center justify-center text-gold-600 group-hover:ce-bg-gold group-hover:text-navy transition-all duration-300 shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6 9 17l-5-5"/></svg>
                      </div>
                      <span className="text-gray-700 font-bold group-hover:ce-text-navy transition-colors">{h}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-16 relative group hidden lg:block">
                  <div className="absolute -inset-4 bg-navy-50 rounded-3xl -z-10 opacity-50"></div>
                  <div className="p-8 border-2 border-dashed ce-border-gold/30 rounded-3xl">
                     <div className="text-[10px] font-black ce-text-navy/40 uppercase tracking-[0.3em] mb-4 text-center">Architectural Blueprint</div>
                     <div className="flex justify-center opacity-10 grayscale group-hover:grayscale-0 group-hover:opacity-20 transition-all duration-700">
                        <img src={CEIcon} alt="" className="w-24 h-24" />
                     </div>
                  </div>
                </div>
              </FadeInSection>
            </div>

            {/* Right Column: Year Cards */}
            <div className="lg:w-2/3 w-full">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {dept.curriculum.years.map((y: any, idx: number) => (
                    <FadeInSection 
                      key={idx} 
                      delay={`ce-delay-${idx + 2}`} 
                      className="group bg-gray-50 p-10 rounded-[3rem] border border-transparent hover:bg-white hover:border-gold-300 hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
                    >
                      <div className="flex justify-between items-start mb-8">
                        <h3 className="text-2xl font-black ce-text-navy uppercase tracking-tight group-hover:ce-text-gold transition-colors">{y.year}</h3>
                        <div className="text-4xl font-black text-gray-200 group-hover:text-gold-500/10 transition-colors italic">0{idx + 1}</div>
                      </div>
                      
                      <div className="space-y-6 mb-10">
                        {y.semesters.map((s: string, sIdx: number) => (
                          <div key={sIdx} className="flex items-center justify-between p-4 bg-white rounded-2xl border border-gray-100 group-hover:border-gold-100 transition-all shadow-sm">
                            <span className="text-sm font-bold text-gray-500 group-hover:ce-text-navy uppercase tracking-widest">{s}</span>
                            <div className="w-2 h-2 rounded-full ce-bg-gold opacity-30 group-hover:opacity-100"></div>
                          </div>
                        ))}
                      </div>

                      <button 
                        onClick={() => setIsTrackModalOpen(true)}
                        className="mt-auto flex items-center gap-3 text-xs font-black ce-text-navy group-hover:ce-text-gold uppercase tracking-widest transition-all"
                      >
                        <span>View Modules</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                      </button>
                    </FadeInSection>
                  ))}
               </div>

               {/* Bottom CTA */}
               <FadeInSection delay="ce-delay-6" className="mt-12 p-8 ce-bg-navy rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-8 group overflow-hidden relative">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:bg-gold-500/10 transition-colors"></div>
                  <div className="relative z-10">
                    <h4 className="text-white font-black text-xl mb-2 uppercase tracking-tight">Full Curriculum Details</h4>
                    <p className="text-white/50 text-sm font-medium">Download the official program curriculum PDF for detailed course descriptions.</p>
                  </div>
                  <button 
                    onClick={() => setIsTrackModalOpen(true)}
                    className="relative z-10 ce-bg-gold text-navy px-10 py-4 rounded-2xl font-black text-xs uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-xl shadow-gold-500/20"
                  >
                    Download PDF
                  </button>
               </FadeInSection>
            </div>
          </div>
        </div>
      </section>

      {/* Track Selection Modal */}
      <TrackModal 
        isOpen={isTrackModalOpen} 
        onClose={() => setIsTrackModalOpen(false)} 
        tracks={dept.curriculum.tracks} 
        base={baseDir} 
      />

      {/* 6. Career Opportunities */}
      <section id="careers" className="max-w-6xl mx-auto px-6 py-32">
        <FadeInSection delay="ce-delay-1">
          <SectionTitle 
            center 
            eyebrow={dept.careers.eyebrow} 
            title={dept.careers.title} 
            subtitle={dept.careers.subtitle} 
          />
        </FadeInSection>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10">
          {dept.careers.cards.map((card, idx) => (
            <FadeInSection key={idx} delay={`ce-delay-${idx + 2}`} className="group bg-white p-12 rounded-[2.5rem] border-2 border-gray-50 text-center hover:border-gold-300 ce-card-hover shadow-sm">
              <div className="w-24 h-24 ce-bg-light rounded-3xl flex items-center justify-center text-5xl mx-auto group-hover:ce-bg-gold transition-all duration-500 group-hover:rotate-6 shadow-sm" aria-hidden="true">
                {card.icon}
              </div>
              <h3 className="mt-10 text-2xl font-black ce-text-navy uppercase tracking-tight">{card.title}</h3>
              <p className="mt-6 text-gray-500 leading-relaxed font-medium text-lg">{card.text}</p>
            </FadeInSection>
          ))}
        </div>
      </section>

      {/* Facilities & Activities */}
      <section id="laboratories" className="ce-bg-light py-32">
         <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                <FadeInSection delay="ce-delay-1" className="text-left">
                     <div className="text-sm font-black ce-text-gold tracking-[0.3em] uppercase mb-6">{dept.facilitiesAndActivities.eyebrow}</div>
                    <h2 className="text-4xl md:text-6xl font-black ce-text-navy uppercase tracking-tight">{dept.facilitiesAndActivities.title}</h2>
                </FadeInSection>
                <FadeInSection delay="ce-delay-2" className="text-gray-500 max-w-md text-lg font-medium italic">{dept.facilitiesAndActivities.description}</FadeInSection>
            </div>

            <div className="space-y-32">
              {/* Facilities Slider */}
              <FadeInSection delay="ce-delay-3">
                <div className="text-center mb-10">
                  <div className="inline-block px-4 py-1 ce-bg-navy rounded-full text-[10px] font-black ce-text-gold uppercase tracking-[0.3em] mb-4">
                    Laboratory Facilities
                  </div>
                  <h3 className="text-2xl font-black ce-text-navy uppercase italic">Engineering <span className="ce-text-gold">Spaces</span></h3>
                </div>
                <ImageStack images={dept.facilitiesAndActivities.facilitiesImages} />
              </FadeInSection>

              {/* Activities Slider */}
              <FadeInSection delay="ce-delay-5">
                <div className="text-center mb-10">
                  <div className="inline-block px-4 py-1 ce-bg-navy rounded-full text-[10px] font-black ce-text-gold uppercase tracking-[0.3em] mb-4">
                    Department Activities
                  </div>
                  <h3 className="text-2xl font-black ce-text-navy uppercase italic">Academic <span className="ce-text-gold">Life</span></h3>
                </div>
                <ImageStack images={dept.facilitiesAndActivities.activitiesImages} />
              </FadeInSection>
            </div>
        </div>
      </section>

      {/* Faculty */}
      <section id="faculty" className="max-w-6xl mx-auto px-6 py-32">
        <FadeInSection delay="ce-delay-1">
          <SectionTitle center eyebrow={dept.faculty.eyebrow} title={dept.faculty.title} />
        </FadeInSection>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-10">
          {dept.faculty.members.map((member, idx) => (
            <FadeInSection key={`${member.name}-${idx}`} delay={`ce-delay-${idx + 2}`} className="group flex items-center gap-8 bg-white p-10 rounded-[2.5rem] border-2 border-gray-50 hover:border-gold-300 transition-all hover:shadow-2xl hover:-translate-y-1">
                <div className="w-24 h-24 rounded-2xl ce-bg-navy flex items-center justify-center text-white font-black text-3xl transition-transform group-hover:scale-110 group-hover:rotate-3 shadow-xl overflow-hidden shrink-0 border-2 border-white">
                    {member.image ? (
                        <img 
                          src={member.image} 
                          alt={member.name} 
                          className="w-full h-full object-cover" 
                          onError={(e) => {
                            (e.target as HTMLImageElement).style.display = 'none';
                            (e.target as HTMLImageElement).parentElement!.innerHTML = member.name.split(" ").pop()?.charAt(0) || "E";
                          }}
                        />
                    ) : (
                        member.name.split(" ").pop()?.charAt(0)
                    )}
                </div>
                <div>
                    <h3 className="font-black text-2xl ce-text-navy tracking-tight">{member.name}</h3>
                    <div className="mt-2 flex items-center gap-3">
                        <span className="w-6 h-0.5 ce-bg-gold"></span>
                        <p className="text-xs font-black ce-text-gold uppercase tracking-widest">{member.role}</p>
                    </div>
                </div>
            </FadeInSection>
          ))}
        </div>

        {/* Organizational Chart Button */}
        <FadeInSection delay="ce-delay-5" className="mt-20 flex justify-center">
            <button 
              onClick={() => setIsChartModalOpen(true)}
              className="group relative flex items-center gap-6 bg-white border-2 ce-border-gold px-12 py-6 rounded-3xl hover:ce-bg-navy hover:border-transparent transition-all duration-500 shadow-2xl shadow-gold-500/10"
            >
              <div className="flex flex-col items-start">
                <span className="text-[10px] font-black ce-text-gold uppercase tracking-[0.4em] group-hover:text-white/40 transition-colors">Hierarchy</span>
                <span className="text-base font-black ce-text-navy uppercase tracking-widest group-hover:text-white transition-colors">Organizational Chart</span>
              </div>
              <div className="w-12 h-12 rounded-2xl ce-bg-light flex items-center justify-center text-navy group-hover:ce-bg-gold transition-all shadow-inner">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
              </div>
            </button>
        </FadeInSection>
      </section>

      <Footer />

      <ImagePreviewModal 
        isOpen={isGraphModalOpen} 
        onClose={() => setIsGraphModalOpen(false)} 
        images={dept.licensureExam.performanceGraphs || []} 
        title="Performance Graphs"
        eyebrow="Licensure Visualization"
      />

      <ImagePreviewModal 
        isOpen={isChartModalOpen} 
        onClose={() => setIsChartModalOpen(false)} 
        images={dept.faculty.organizationalCharts || []} 
        title="Organizational Charts"
        eyebrow="Department Hierarchy"
      />
    </div>
  );
}
