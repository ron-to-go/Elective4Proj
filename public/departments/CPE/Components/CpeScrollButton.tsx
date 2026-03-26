import { useState, useEffect } from "react";
import { Cpu, ChevronUp } from "lucide-react";

export default function CpeScrollButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Button appears after scrolling down 400px
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-8 right-8 z-[9999]">
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`group relative flex items-center justify-center w-14 h-14 bg-slate-950 border-2 border-slate-800 rounded-xl transition-all duration-500 overflow-hidden ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        } hover:border-yellow-500 hover:shadow-[0_0_25px_rgba(234,179,8,0.3)] hover:-translate-y-1`}
      >
        <div className="absolute inset-0 bg-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        <Cpu className="absolute w-6 h-6 text-slate-400 group-hover:opacity-0 group-hover:-translate-y-4 transition-all duration-300" />
        <ChevronUp className="absolute w-8 h-8 text-yellow-400 opacity-0 translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 drop-shadow-[0_0_8px_rgba(234,179,8,0.8)]" />
        
        <span className="absolute top-1 left-1 w-1 h-1 bg-slate-800 rounded-full group-hover:bg-yellow-500/50 transition-colors" />
        <span className="absolute top-1 right-1 w-1 h-1 bg-slate-800 rounded-full group-hover:bg-yellow-500/50 transition-colors" />
        <span className="absolute bottom-1 left-1 w-1 h-1 bg-slate-800 rounded-full group-hover:bg-yellow-500/50 transition-colors" />
        <span className="absolute bottom-1 right-1 w-1 h-1 bg-slate-800 rounded-full group-hover:bg-yellow-500/50 transition-colors" />
      </button>
    </div>
  );
}