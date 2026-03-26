import coeLogo from "../assets/COE.svg";
import ceLogo from "../assets/CEicon.svg";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="ce-bg-navy text-white mt-24">
            <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-4 gap-16 items-start">

                {/* LEFT - LOGO */}
                <div className="space-y-8">
                    <div className="flex items-center gap-6">
                        <img
                            src={coeLogo}
                            alt="COE"
                            className="w-14 h-14 object-contain"
                        />
                         <img
                            src={ceLogo}
                            alt="CE"
                            className="w-14 h-14 object-contain"
                        />
                    </div>
                    <div>
                        <div className="font-black text-2xl tracking-tighter">
                            BULSU <span className="ce-text-gold">CE</span>
                        </div>
                        <p className="mt-4 text-gray-400 text-sm leading-relaxed max-w-xs">
                            Leading the way in engineering excellence and innovation for a better tomorrow.
                        </p>
                    </div>
                </div>

                {/* LINKS */}
                <div>
                    <h4 className="ce-text-gold font-bold uppercase tracking-widest text-xs mb-6">Navigation</h4>
                    <ul className="space-y-4 text-sm text-gray-400">
                        <li>
                            <Link to="/departments" className="hover:text-white transition-colors">
                                Departments
                            </Link>
                        </li>
                        <li>
                            <Link to="/#facilities" className="hover:text-white transition-colors">
                                Facilities
                            </Link>
                        </li>
                        <li>
                            <Link to="/#news" className="hover:text-white transition-colors">
                                News
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* DEPARTMENTS 1 */}
                <div>
                    <h4 className="ce-text-gold font-bold uppercase tracking-widest text-xs mb-6">Programs</h4>
                    <ul className="space-y-4 text-sm text-gray-400">
                        <li><Link to="/dept/CE" className="hover:text-white transition-colors font-bold text-white">Civil Engineering</Link></li>
                        <li><Link to="/dept/CPE" className="hover:text-white transition-colors">Computer Engineering</Link></li>
                        <li><Link to="/dept/ME" className="hover:text-white transition-colors">Mechanical Engineering</Link></li>
                        <li><Link to="/dept/IE" className="hover:text-white transition-colors">Industrial Engineering</Link></li>
                    </ul>
                </div>

                {/* DEPARTMENTS 2 */}
                <div>
                    <h4 className="ce-text-gold font-bold uppercase tracking-widest text-xs mb-6">&nbsp;</h4>
                    <ul className="space-y-4 text-sm text-gray-400">
                        <li><Link to="/dept/EE" className="hover:text-white transition-colors">Electrical Engineering</Link></li>
                        <li><Link to="/dept/ECE" className="hover:text-white transition-colors">Electronics Engineering</Link></li>
                        <li><Link to="/dept/MEE" className="hover:text-white transition-colors">Mechatronics Engineering</Link></li>
                        <li><Link to="/dept/MFE" className="hover:text-white transition-colors">Manufacturing Engineering</Link></li>
                    </ul>
                </div>
            </div>

            {/* COPYRIGHT */}
            <div className="border-t border-white/10 max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-sm text-gray-500">
                    Copyright © {new Date().getFullYear()} COE. All rights reserved.
                </div>
                <div className="flex gap-8 text-xs font-bold uppercase tracking-widest text-gray-500">
                    <button className="hover:text-white">Privacy Policy</button>
                    <button className="hover:text-white">Terms of Service</button>
                </div>
            </div>
        </footer>
    );
}
