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
        switch(platform) {
            case 'facebook':
                return (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                );
            case 'instagram':
                return (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0m0 22.4C6.337 22.4 1.6 17.663 1.6 12S6.337 1.6 12 1.6s10.4 4.737 10.4 10.4-4.737 10.4-10.4 10.4m3.2-17.6H8.8c-2.2 0-4 1.8-4 4v6.4c0 2.2 1.8 4 4 4h6.4c2.2 0 4-1.8 4-4V8.8c0-2.2-1.8-4-4-4zm0 10.4h-6.4v-6.4h6.4v6.4zm-3.2-5.2c1.3 0 2.4-1.1 2.4-2.4S13.3 7.2 12 7.2s-2.4 1.1-2.4 2.4 1.1 2.4 2.4 2.4z"/>
                    </svg>
                );
            case 'linkedin':
                return (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"/>
                    </svg>
                );
            default:
                return null;
        }
    };

    return (
        <>
            <footer 
                className="mt-20"
                style={{ backgroundColor: "#8B1A1A" }}
            >
                {}
                <div className="w-full h-px bg-yellow-400" style={{ opacity: 0.5 }}></div>

                {/* HEADER WITH LOGO LEFT AND BACK TO TOP RIGHT */}
                <div className="w-full py-8 flex items-center justify-between px-6" style={{ backgroundColor: "#8B1A1A" }}>
                    <div className="flex items-start gap-4 flex-1">
                        <img
                            src={bulsuLogo}
                            alt="BULSU"
                            className="w-12 h-12 flex-shrink-0"
                        />
                        <div>
                            <p className="text-sm font-bold text-yellow-300">BULSU COE</p>
                            <p className="text-xs text-white mt-1 leading-relaxed max-w-xs">{footerData.slogan}</p>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-8">
                        <div className="h-8 w-px bg-gray-400" style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}></div>
                        {footerData.backToTop.enabled && (
                            <button
                                onClick={scrollToTop}
                                className="text-yellow-400 hover:text-yellow-300 transition-colors text-2xl font-bold border-2 border-yellow-400 rounded-full px-2 py-1 hover:scale-110 active:scale-95"
                                style={{ transitionDuration: "200ms" }}
                            >
                                ↑
                            </button>
                        )}
                    </div>
                </div>

                <div className="w-full h-px bg-yellow-400" style={{ opacity: 0.2 }}></div>
                
                <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10 items-start">

                    {/* LEFT - ADDRESS & INFO */}
                    <div className="flex flex-col gap-6">
                        <div className="text-xs text-gray-200 space-y-2">
                            <p className="font-semibold text-yellow-400 text-sm">Location</p>
                            <p>{footerData.address}</p>
                            <p>{footerData.operatingHours}</p>
                        </div>

                        {/* SOCIAL LINKS */}
                        <div>
                            <h4 className="font-semibold text-yellow-400 mb-3 text-sm">Connect</h4>
                            <div className="flex gap-3">
                                {footerData.socialLinks.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-200 hover:text-yellow-400 transition-all"
                                        title={social.label}
                                        style={{ 
                                            transitionDuration: `${animations.socialIconHover.duration}ms`,
                                            transitionProperty: "color, transform"
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = `rotate(${animations.socialIconHover.rotate}deg) scale(${animations.socialIconHover.scale})`;
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = "rotate(0) scale(1)";
                                        }}
                                    >
                                        {getSocialLogo(social.icon)}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* USEFUL LINKS */}
                    <div className="flex flex-col items-start mx-auto w-fit">
                        <h4 className="font-semibold text-yellow-400 mb-3 text-sm">Quick Links</h4>
                        <ul className="space-y-2 text-sm text-gray-200">
                            {footerData.linkPreviews.quickNav.map((item) => (
                                <li key={item.label}>
                                    <div
                                        className="w-fit"
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = `scale(${animations.linkHover.scale})`;
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = "scale(1)";
                                        }}
                                        style={{ 
                                            transitionDuration: `${animations.linkHover.duration}ms`,
                                            transitionProperty: "transform"
                                        }}
                                    >
                                        <Link 
                                            to={item.label === "Department" ? "/departments" : item.label === "Facilities" ? "/#facilities" : "/#news"}
                                            className="hover:text-yellow-400 transition-colors duration-300"
                                        >
                                            {item.label}
                                        </Link>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* DEPARTMENTS */}
                    <div className="flex flex-col items-start mx-auto w-fit">
                        <h4 className="font-semibold text-yellow-400 mb-3 text-sm">Departments</h4>
                        <ul className="grid grid-cols-2 gap-4 text-sm text-gray-200">
                            {footerData.linkPreviews.departments.map((item) => {
                                const deptCode = item.label === "Civil" ? "CE" : item.label === "Computer" ? "CPE" : item.label === "Mechanical" ? "ME" : item.label === "Industrial" ? "IE" : item.label === "Electronics" ? "ECE" : item.label === "Mechatronics" ? "MEE" : item.label === "Manufacturing" ? "MFE" : "EE";
                                return (
                                    <li key={item.label}>
                                        <div
                                            className="w-fit"
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.transform = `scale(${animations.linkHover.scale})`;
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.transform = "scale(1)";
                                            }}
                                            style={{ 
                                                transitionDuration: `${animations.linkHover.duration}ms`,
                                                transitionProperty: "transform"
                                            }}
                                        >
                                            <Link to={`/dept/${deptCode}`} className="hover:text-yellow-400 transition-colors duration-300">
                                                {item.label}
                                            </Link>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* RIGHT - CONTACT & SOCIAL */}
                    <div className="flex flex-col gap-6">
                        <div className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                            </svg>
                            <div className="text-xs text-gray-200">
                                <p className="font-semibold text-white">Email: <a href={`mailto:${footerData.email}`} className="hover:text-yellow-400 transition-colors">{footerData.email}</a></p>
                            </div>
                        </div>

                        {/* PHONE */}
                        <div className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                            </svg>
                            <div className="text-xs text-gray-200 space-y-1">
                                <p className="font-semibold text-white">Phone: <a href={`tel:${footerData.phone}`} className="hover:text-yellow-400 transition-colors">{footerData.phone}</a></p>
                                <p>Dean's Office: 1068</p>
                                <p>College Secretary: 1069</p>
                            </div>
                        </div>

                        {/* LOCATION */}
                        <div className="flex items-start gap-3">
                            <svg className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-13c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z"/>
                            </svg>
                            <div className="text-xs text-gray-200">
                                <p className="font-semibold text-white">Address: {footerData.address}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* BOTTOM SECTION - QUICK LINKS + COPYRIGHT + BACK TO TOP */}
                <div 
                    className="py-6"
                    style={{ backgroundColor: "#8B1A1A" }}
                >
                    <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row gap-6 justify-center items-center w-full">
                        <div className="text-xs text-gray-200 text-center">
                            {footerData.copyrightText}
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
