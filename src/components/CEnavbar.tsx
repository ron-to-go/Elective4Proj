import { useMemo, useState, useEffect } from "react";
import CEIcon from "../assets/CEicon.svg";
import type { NavId } from "../types/CEnav";
import { Menu, X } from "lucide-react";
import { cn } from "../lib/utils";

type NavbarProps = {
  logoSrc?: string;
  onNav?: (id: NavId) => void;
  activeId?: NavId;
};

export default function Navbar({
  logoSrc = CEIcon,
  onNav,
  activeId,
}: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = useMemo(
    () => [
      { id: "home" as const, label: "Home" },
      { id: "about" as const, label: "Program Overview" },
      { id: "cele" as const, label: "CELE" },
      { id: "peo" as const, label: "PEO" },
      { id: "so" as const, label: "SO" },
      { id: "curriculum" as const, label: "Curriculum" },
      { id: "careers" as const, label: "Careers" },
      { id: "laboratories" as const, label: "Laboratories" },
      { id: "faculty" as const, label: "Faculty" },
    ],
    []
  );

  const handleNav = (id: NavId) => {
    onNav?.(id);
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={cn(
        "sticky top-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled ? "ce-bg-navy/95 backdrop-blur-md shadow-xl py-2" : "ce-bg-navy py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Left: logo + text */}
        <button
          type="button"
          onClick={() => handleNav("home")}
          className="flex items-center gap-4 group relative z-[60]"
          aria-label="Home"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gold-400/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <img 
              src={logoSrc} 
              alt="Logo" 
              className="w-12 h-12 md:w-14 md:h-14 object-contain transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 relative z-10" 
            />
          </div>
          <div className="flex flex-col -space-y-1">
            <span className="text-white font-black tracking-tighter text-xl md:text-2xl">
              BULSU <span className="ce-text-gold">CE</span>
            </span>
            <span className="text-[10px] text-white/40 font-bold uppercase tracking-[0.2em]">Engineering</span>
          </div>
        </button>

        {/* Center Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {links.map((l) => (
            <button
              key={l.id}
              type="button"
              onClick={() => handleNav(l.id)}
              className={cn(
                "px-4 py-2 text-[12px] font-bold uppercase tracking-widest transition-all duration-300 rounded-lg ce-nav-link relative overflow-hidden group",
                activeId === l.id 
                  ? "text-white bg-white/10" 
                  : "text-white/60 hover:text-white hover:bg-white/5"
              )}
            >
              <span className="relative z-10">{l.label}</span>
              {activeId === l.id && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 ce-bg-gold" />
              )}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden relative z-[60] w-12 h-12 flex items-center justify-center text-white hover:ce-text-gold transition-colors"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu Overlay */}
        <div 
          className={cn(
            "fixed inset-0 ce-bg-navy z-50 lg:hidden transition-all duration-500 ease-in-out transform",
            isMenuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col h-full pt-32 px-10 pb-10 overflow-y-auto">
            <div className="space-y-4">
              {links.map((l, idx) => (
                <button
                  key={l.id}
                  type="button"
                  onClick={() => handleNav(l.id)}
                  className={cn(
                    "w-full text-left py-4 border-b border-white/5 flex items-center justify-between group",
                    activeId === l.id ? "text-white" : "text-white/50"
                  )}
                  style={{ 
                    transitionDelay: `${idx * 50}ms`,
                    transform: isMenuOpen ? 'translateX(0)' : 'translateX(20px)',
                    opacity: isMenuOpen ? 1 : 0
                  }}
                >
                  <span className="text-2xl font-black uppercase tracking-tighter">
                    {l.label}
                  </span>
                  <div className={cn(
                    "w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-300",
                    activeId === l.id 
                      ? "ce-bg-gold border-transparent text-navy" 
                      : "border-white/10 text-white group-hover:border-white/30"
                  )}>
                    <span className="font-bold text-sm">0{idx + 1}</span>
                  </div>
                </button>
              ))}
            </div>
            
            <div className="mt-auto pt-10">
              <div className="text-white/30 text-xs font-bold uppercase tracking-[0.3em] mb-4">Department Location</div>
              <p className="text-white/60 text-sm leading-relaxed">
                College of Engineering, Bulacan State University<br />
                Malolos City, Bulacan, Philippines
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
