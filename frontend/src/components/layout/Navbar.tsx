import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { name: "HOME", path: "/" },
        { name: "ABOUT", path: "/about" },
        { name: "CALL FOR PAPERS", path: "/call-for-papers" },
        { name: "TIMELINE", path: "/timeline" },
        { name: "PEOPLE", path: "/people" },
        { name: "GALLERY", path: "/gallery" },
        { name: "CONTACT", path: "/contact" },
    ];

    return (
        <div className="fixed top-6 left-0 right-0 z-50 px-4 pointer-events-none">
            <nav className="max-w-5xl mx-auto glass rounded-full pointer-events-auto border-white/40 shadow-xl overflow-hidden">
                <div className="px-6 md:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo Section */}
                        <div className="flex items-center space-x-2">
                            <span className="text-primary text-xl animate-pulse">◈</span>
                            <Link to="/" className="font-bold text-lg tracking-tight text-slate-900 hover:text-primary transition-colors">
                                ICCAIML <span className="text-primary font-light text-base">'26</span>
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-1">
                            {links.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className="px-4 py-2 text-[10px] font-bold text-slate-600 hover:text-primary transition-all tracking-widest uppercase rounded-full hover:bg-white/50"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        {/* Mobile menu button */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="text-slate-600 hover:text-primary focus:outline-none p-2"
                            >
                                {isOpen ? <X size={20} /> : <Menu size={20} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden bg-white/90 backdrop-blur-xl border-t border-slate-100 flex flex-col items-center py-6 space-y-4">
                        {links.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className="text-xs font-bold text-slate-600 hover:text-primary transition-colors tracking-widest uppercase block"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                )}
            </nav>
        </div>
    );
}
