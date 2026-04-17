import { Mail, MapPin, Phone, Twitter, Facebook, Linkedin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full  border-t border-slate-200 py-12 mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand & Description */}
                    <div className="col-span-1">
                        <div className="flex items-center space-x-2 mb-4">
                            <span className="text-primary text-xl">◈</span>
                            <span className="font-bold text-xl tracking-tight text-slate-900">
                                INCIP <span className="text-primary font-light text-lg">'26</span>
                            </span>
                        </div>
                        <p className="text-sm text-slate-500 leading-relaxed">
                            2nd International Conference on Next Generation Communication & Information Processing. August 20-21, 2026.
                        </p>
                    </div>

                    {/* Contact Details */}
                    <div className="col-span-1">
                        <h3 className="font-bold text-slate-800 mb-4">Contact</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start text-sm text-slate-500">
                                <MapPin className="w-4 h-4 mr-2 text-primary mt-1 flex-shrink-0" />
                                <span>
                                    Central University of Karnataka,
                                    <br />
                                    Kalaburagi
                                    <br />
                                    Karnataka
                                </span>
                            </li>
                            <li className="flex items-center text-sm text-slate-500">
                                <Phone className="w-4 h-4 mr-2 text-primary" />
                                <span>+91 8618218389, +91 9776111926</span>
                            </li>
                            <li className="flex items-center text-sm text-slate-500">
                                <Mail className="w-4 h-4 mr-2 text-primary" />
                                <a href="mailto:incip.conference@gmail.com" className="hover:text-primary">
                                    incip.conference@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Links */}
                    <div className="col-span-1">
                        <h3 className="font-bold text-slate-800 mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" className="p-2 bg-white rounded-full shadow-sm hover:shadow-md hover:text-primary transition-all text-slate-400">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 bg-white rounded-full shadow-sm hover:shadow-md hover:text-primary transition-all text-slate-400">
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a href="#" className="p-2 bg-white rounded-full shadow-sm hover:shadow-md hover:text-primary transition-all text-slate-400">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Map Image Placeholder */}
                    <div className="col-span-1">
                        <h3 className="font-bold text-slate-800 mb-4">Venue</h3>
                        <a
                            href="https://maps.app.goo.gl/YourMapLinkHere"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full h-32 bg-slate-200 rounded-lg flex items-center justify-center border border-slate-300 overflow-hidden relative group block"
                        >
                            <span className="text-slate-500 text-xs font-medium z-10 group-hover:text-primary transition-colors">
                                View on Maps
                            </span>
                            {/* Optional: Add a real Google Maps embed later */}
                            <div className="absolute inset-0 bg-slate-300/50 mix-blend-multiply group-hover:bg-transparent transition-all"></div>
                        </a>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
                    <div className="flex flex-col items-center md:items-start gap-1">
                        <p>© 2026 INCIP. All rights reserved.</p>
                        <p className="font-medium text-slate-400">Developed by <span className="text-primary/70">Om Vanwari</span></p>
                    </div>
                    <div className="space-x-4 mt-4 md:mt-0">
                        <a href="#" className="hover:text-primary">Privacy Policy</a>
                        <a href="#" className="hover:text-primary">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
