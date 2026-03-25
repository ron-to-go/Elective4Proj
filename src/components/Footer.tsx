import bulsuLogo from "../assets/bulsu.svg";
import { Link } from "react-router-dom";
import { landingPageData } from "../data/landing";

export default function Footer() {
  const footerData = landingPageData.sections.footer;
  const animations = footerData.animations;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const getSocialLogo = (platform: string) => {
    switch (platform) {
      case 'facebook':
      return (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      );
      default:
      return null;
    }
  };

  const linkHoverClass = "text-white/70 hover:text-white hover:font-bold hover:translate-x-1 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] transition-all duration-300 block";
  
  return (
    <footer 
      className="mt-20 relative overflow-hidden border-t border-yellow-500/30 animate-in fade-in slide-in-from-bottom-4 duration-1000"
      style={{ backgroundColor: "#961d1d" }}
    >
      {/* Top Accent Line */}
      <div className="w-full h-1 bg-[#D97706]"></div>
      
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-6 pt-8 pb-6 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-4">
          <div className="bg-white p-2 rounded-2xl shadow-lg transition-transform hover:scale-105 duration-500">
            <img src={bulsuLogo} alt="BULSU" className="w-10 h-10" />
          </div>
          <div>
            <h2 className="text-lg font-bold text-yellow-400 leading-none">BULSU <span className="text-white">COE</span></h2>
            <p className="text-[9px] text-white/60 uppercase tracking-widest font-medium mt-1">Engineering Excellence</p>
          </div>
        </div>

        {footerData.backToTop.enabled && (
          <button
            onClick={scrollToTop}
            className="group flex flex-col items-center gap-1 transition-all duration-300 hover:-translate-y-1 active:scale-90"
          >
            <div className="w-10 h-10 flex items-center justify-center rounded-2xl bg-white/5 border border-white/10 text-yellow-400 group-hover:bg-yellow-400 group-hover:text-[#961d1d] group-hover:shadow-[0_0_20px_rgba(250,204,21,0.4)] transition-all">
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 15l7-7 7 7" />
              </svg>
            </div>
            <span className="text-[8px] font-bold uppercase tracking-widest text-yellow-400/70 group-hover:text-yellow-400 transition-colors">Top</span>
          </button>
        )}
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="w-full h-px bg-white/10 mb-8"></div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 items-start">
        
          {/* VISIT US */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-bold text-yellow-300 uppercase tracking-widest text-xs">Visit Us</h4>
            <div className="text-xs text-white/80 space-y-1 leading-relaxed">
              <p>{footerData.address}</p>
              <p className="opacity-60 italic">{footerData.operatingHours}</p>
            </div>
            <div className="pt-2">
              <a
                href={footerData.socialLinks[0]?.href}
                className="inline-flex p-2.5 bg-white/5 rounded-xl text-white hover:bg-white/20 transition-all"
                style={{ transitionDuration: `${animations.socialIconHover.duration}ms` }}
                onMouseEnter={(e) => e.currentTarget.style.transform = `rotate(${animations.socialIconHover.rotate}deg) scale(${animations.socialIconHover.scale})`}
                onMouseLeave={(e) => e.currentTarget.style.transform = "rotate(0) scale(1)"}
              >
                {getSocialLogo('facebook')}
              </a>
            </div>
          </div>

          {/* NAVIGATION */}
          <div className="md:col-span-2">
            <h4 className="font-bold text-yellow-300 uppercase tracking-widest text-xs mb-4">Navigation</h4>
            <ul className="space-y-2 text-xs uppercase">
              {footerData.linkPreviews.quickNav.map((item) => (
              <li key={item.label}>
                <Link to="/" className={linkHoverClass}>
                {item.label}
                </Link>
              </li>
              ))}
            </ul>
          </div>

          {/* DEPARTMENTS */}
          <div className="md:col-span-4">
            <h4 className="font-bold text-yellow-300 uppercase tracking-widest text-xs mb-4">Departments</h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
              {['CIVIL', 'COMPUTER', 'MECHANICAL', 'INDUSTRIAL', 'ELECTRICAL', 'ELECTRONICS', 'MECHATRONICS', 'MANUFACTURING'].map((dept) => (
              <li key={dept}>
                <Link to="/" className={linkHoverClass}>
                {dept}
                </Link>
              </li>
              ))}
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div className="md:col-span-3 space-y-5">
            <h4 className="font-bold text-yellow-300 uppercase tracking-widest text-xs mb-5">Contact Details</h4>
            
            <div className="flex items-center gap-4 group/contact">
              <div 
                className="w-9 h-9 rounded-xl bg-yellow-400 flex items-center justify-center text-[#961d1d] shrink-0 shadow-lg transition-all"
                style={{ transitionDuration: `${animations.socialIconHover.duration}ms` }}
                onMouseEnter={(e) => e.currentTarget.style.transform = `rotate(${animations.socialIconHover.rotate}deg) scale(${animations.socialIconHover.scale})`}
                onMouseLeave={(e) => e.currentTarget.style.transform = "rotate(0) scale(1)"}
                >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
              </div>
              <div className="text-[11px]">
                <p className="font-bold text-white/50 uppercase tracking-[0.2em] text-[9px]">Email Inquiry</p>
                <a href="mailto:engineering@bulsu.edu.ph" className="text-white hover:text-white hover:font-bold transition-all block underline decoration-transparent hover:decoration-yellow-400 underline-offset-4">
                  engineering@bulsu.edu.ph
                </a>
            </div>
          </div>

          <div className="flex items-start gap-4 group/contact">
            <div 
              className="w-9 h-9 rounded-xl bg-yellow-400 flex items-center justify-center text-[#961d1d] flex-shrink-0 shadow-lg transition-all"
              style={{ transitionDuration: `${animations.socialIconHover.duration}ms` }}
              onMouseEnter={(e) => e.currentTarget.style.transform = `rotate(-${animations.socialIconHover.rotate}deg) scale(${animations.socialIconHover.scale})`}
              onMouseLeave={(e) => e.currentTarget.style.transform = "rotate(0) scale(1)"}
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" /></svg>
            </div>
            <div className="text-[11px]">
              <p className="font-bold text-white/50 uppercase tracking-[0.2em] text-[9px]">Phone / Telefax</p>
              <a href="tel:0449197800" className="text-white hover:text-white hover:font-bold transition-all block font-medium">
                (044) 919 7800
              </a>
              <div className="flex gap-2 mt-1.5 text-[10px] text-white">
                  <span className="bg-white/10 px-1.5 py-0.5 rounded">Dean: <b className="text-yellow-400">1068</b></span>
                  <span className="bg-white/10 px-1.5 py-0.5 rounded">Sec: <b className="text-yellow-400">1069</b></span>
              </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Copyright Strip */}
      <div className="bg-black/20 py-4 text-center">
        <p className="text-[10px] text-white/40 uppercase tracking-[0.2em] font-medium">
          {footerData.copyrightText}
        </p>
        </div>
    </footer>
  );
}