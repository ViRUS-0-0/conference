import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const location = useLocation();

    const links = [
        { name: "HOME", path: "/" },
        { name: "ABOUT", path: "/about" },
        {
            name: "AUTHOR'S INFO", 
            dropdown: [
                { name: "Call for Papers", path: "/call-for-papers" },
                { name: "Paper Submissions", path: "/paper-submissions" },
                { name: "Brochure", path: "/brochure.pdf", external: true }
            ]
        },
        {
            name: "PREVIOUS EDITION",
            dropdown: [
                { name: "INCIP 2025", path: "/previous-edition/incip-2025" }
            ]
        },
        { name: "TIMELINE", path: "/timeline" },
        {
            name: "COMMITTEE",
            dropdown: [
                { name: "Organizing Committee", path: "/committee/organizing-committee" },
                { name: "Technical Program Committee", path: "/committee/technical-program-committee" },
                { name: "Advisory Committee", path: "/committee/advisory-committee" }
            ]
        },
        { name: "CONTACT", path: "/contact" },
    ];

    const isActive = (path?: string, dropdown?: { name: string, path: string, external?: boolean }[]) => {
        if (path && location.pathname === path) return true;
        if (dropdown) {
            return dropdown.some(item => !item.external && location.pathname === item.path);
        }
        return false;
    };

    return (
        <div className="fixed top-6 left-0 right-0 z-50 px-4 pointer-events-none">
            <nav className={`max-w-5xl mx-auto glass pointer-events-auto border-white/40 shadow-xl overflow-visible transition-all duration-300 ${isOpen ? 'rounded-2xl bg-white/95 backdrop-blur-3xl' : 'rounded-full'}`}>
                <div className="px-6 md:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo Section */}
                        <div className="flex items-center space-x-2">
                            <span className="text-primary text-xl animate-pulse">◈</span>
                            <Link to="/" onClick={() => setIsOpen(false)} className="font-bold text-lg tracking-tight text-slate-900 hover:text-primary transition-colors">
                                INCIP <span className="text-primary font-light text-base">'26</span>
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-1">
                            {links.map((link) => (
                                <div key={link.name} className="relative group" 
                                     onMouseEnter={() => setActiveDropdown(link.name)}
                                     onMouseLeave={() => setActiveDropdown(null)}>
                                    {link.dropdown ? (
                                        <button className={`flex items-center space-x-1 px-4 py-2 text-[10px] font-bold transition-all tracking-widest uppercase rounded-full hover:bg-white/50 ${isActive(link.path, link.dropdown) ? 'text-primary bg-primary/5' : 'text-slate-600 hover:text-primary'}`}>
                                            <span>{link.name}</span>
                                            <ChevronDown size={14} className={`transition-transform duration-200 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />
                                        </button>
                                    ) : (
                                        <Link
                                            to={link.path!}
                                            className={`px-4 py-2 text-[10px] font-bold transition-all tracking-widest uppercase rounded-full hover:bg-white/50 block ${isActive(link.path) ? 'text-primary bg-primary/5' : 'text-slate-600 hover:text-primary'}`}
                                        >
                                            {link.name}
                                        </Link>
                                    )}

                                    {/* Dropdown Menu Desktop */}
                                    {link.dropdown && activeDropdown === link.name && (
                                        <div className="absolute top-full left-0 pt-2 w-48">
                                            <div className="bg-white/95 backdrop-blur-xl border border-slate-100/50 rounded-2xl shadow-xl shadow-slate-200/50 py-2 overflow-hidden transform opacity-100 transition-all origin-top-left animate-in fade-in slide-in-from-top-2">
                                                {link.dropdown.map((subLink) => (
                                                    subLink.external ? (
                                                        <a
                                                            key={subLink.name}
                                                            href={subLink.path}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="block px-5 py-2.5 text-xs font-semibold text-slate-600 hover:text-primary hover:bg-blue-50/50 hover:pl-6 transition-all"
                                                        >
                                                            {subLink.name}
                                                        </a>
                                                    ) : (
                                                        <Link
                                                            key={subLink.name}
                                                            to={subLink.path!}
                                                            onClick={() => setActiveDropdown(null)}
                                                            className={`block px-5 py-2.5 text-xs font-semibold hover:text-primary hover:bg-blue-50/50 hover:pl-6 transition-all ${location.pathname === subLink.path ? 'text-primary bg-primary/5' : 'text-slate-600'}`}
                                                        >
                                                            {subLink.name}
                                                        </Link>
                                                    )
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-slate-600 hover:text-primary focus:outline-none p-2  rounded-full"
                            >
                                {isOpen ? <X size={20} /> : <Menu size={20} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden flex flex-col items-start px-8 py-6 space-y-6 border-t border-slate-100/50 animate-in slide-in-from-top-4 fade-in duration-200">
                        {links.map((link) => (
                            <div key={link.name} className="w-full">
                                {link.dropdown ? (
                                    <div className="flex flex-col space-y-4 w-full">
                                        <div className="text-[10px] font-bold text-slate-400 tracking-widest uppercase border-b border-slate-100/50 pb-2 w-full">{link.name}</div>
                                        <div className="flex flex-col pl-4 space-y-4">
                                            {link.dropdown.map((subLink) => (
                                                subLink.external ? (
                                                    <a
                                                        key={subLink.name}
                                                        href={subLink.path}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        onClick={() => setIsOpen(false)}
                                                        className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors block"
                                                    >
                                                        {subLink.name}
                                                    </a>
                                                ) : (
                                                    <Link
                                                        key={subLink.name}
                                                        to={subLink.path!}
                                                        onClick={() => setIsOpen(false)}
                                                        className={`text-sm font-semibold transition-colors block ${location.pathname === subLink.path ? 'text-primary' : 'text-slate-600 hover:text-primary'}`}
                                                    >
                                                        {subLink.name}
                                                    </Link>
                                                )
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <Link
                                        to={link.path!}
                                        onClick={() => setIsOpen(false)}
                                        className={`text-[10px] font-bold transition-colors tracking-widest uppercase block border-b border-slate-100/50 pb-2 w-full ${isActive(link.path) ? 'text-primary' : 'text-slate-600 hover:text-primary'}`}
                                    >
                                        {link.name}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </nav>
        </div>
    );
}
