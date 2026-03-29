import { useMemo } from "react";
import COELogo from "../assets/COE.svg";
import type { NavId } from "../types/nav";

type NavbarProps = {
  logoSrc?: string;
  onNav?: (id: NavId) => void;
};

export default function Navbar({
  logoSrc = COELogo,
  onNav,
}: NavbarProps) {
  const links = useMemo(
    () => [
      { id: "home" as const, label: "ako" },
      { id: "about" as const, label: "ay" },
      { id: "peo" as const, label: "nag" },
      { id: "so" as const, label: "tetesting" },
      { id: "curriculum" as const, label: "haha" },
      { id: "laboratories" as const, label: "Laboratories" },
      { id: "faculty" as const, label: "Faculty" },
      { id: "careers" as const, label: "Careers" },
    ],
    []
  );

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="relative h-16 max-w-6xl mx-auto px-6 flex items-center">
        {/* Left: logo + text */}
        <button
          type="button"
          onClick={() => onNav?.("home")}
          className="flex items-center gap-3"
          aria-label="Home"
        >
          <img src={logoSrc} alt="Logo" className="w-10 h-10 object-contain" />
          <div className="leading-tight text-left">
          </div>
        </button>

        {/* Center nav */}
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-6 text-xs text-gray-500">
          {links.map((l) => (
            <button
              key={l.id}
              type="button"
              onClick={() => onNav?.(l.id)}
              className="hover:text-gray-900 transition"
            >
              {l.label}
            </button>
          ))}
        </nav>

        {/* Right contact */}
        <div className="ml-auto">
          <button
            type="button"
            onClick={() => onNav?.("contact")}
            className="hidden md:inline-flex items-center justify-center px-5 py-2 rounded-full text-white text-sm font-semibold bg-[#A90000] hover:bg-[#8f0000] transition"
          >
            Contact
          </button>
        </div>
      </div>
    </header>
  );
}
