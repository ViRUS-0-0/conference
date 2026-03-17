import React from "react";
import Countdown from "../ui/Countdown";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
    // Target date for ICCAIML 2026
    const targetDate = "2026-11-19T00:00:00";

    const particles = React.useMemo(() => {
        return Array.from({ length: 20 }).map((_, i) => ({
            id: i,
            width: (i % 4) + 2 + "px",
            height: (i % 4) + 2 + "px",
            top: (i * 5) % 100 + "%",
            left: (i * 13) % 100 + "%",
        }));
    }, []);

    return (
        <section className="relative w-full min-h-[90vh] flex flex-col items-center justify-center pt-20 overflow-hidden">
            {/* Background connecting dots (Plexus) simulation using CSS/SVG is active globally via Layout bg-plexus */}

            <div className="z-10 flex flex-col items-center text-center px-4 w-full max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Badges */}
                    <div className="glass inline-flex items-center space-x-2 md:space-x-4 px-4 py-2 rounded-full mb-8 text-[10px] md:text-sm font-mono tracking-widest text-primary font-semibold uppercase">
                        <span className="flex items-center">
                            <span className="w-1.5 h-1.5 bg-primary rounded-sm rotate-45 mr-2"></span>
                            2ND EDITION
                        </span>
                        <span className="text-slate-300">•</span>
                        <span>SPRINGER</span>
                        <span className="text-slate-300">•</span>
                        <span>SCOPUS</span>
                    </div>
                </motion.div>

                {/* Huge Main Title */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight text-slate-900 mb-6 drop-shadow-sm">
                        ICCAIML <span className="text-primary">'26</span>
                    </h1>
                </motion.div>

                {/* Subtitles */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="space-y-4 mb-12"
                >
                    <p className="text-lg md:text-2xl text-slate-600 font-medium max-w-2xl mx-auto">
                        International Conference on Computation of Artificial Intelligence &
                        Machine Learning
                    </p>
                    <p className="text-sm md:text-base text-primary/80 font-mono tracking-widest uppercase">
                        November 19–21, 2026 <span className="mx-2">•</span> Manipal University Jaipur
                    </p>
                </motion.div>

                {/* Countdown */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="w-full"
                >
                    <Countdown targetDate={targetDate} />
                </motion.div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="mt-12 mb-20 relative group"
                >
                    {/* Subtle glow effect behind button */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-400 rounded-lg blur opacity-40 group-hover:opacity-100 transition duration-500"></div>

                    <Link to="/registration" className="relative flex items-center justify-center px-10 py-5 bg-white text-primary rounded-lg font-bold text-lg tracking-wider transition-all duration-300 border border-primary/20 hover:bg-primary hover:text-white shadow-[0_0_20px_rgba(36,99,235,0.2)]">
                        REGISTER NOW
                    </Link>
                </motion.div>

                {/* Venue details at very bottom of hero */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="text-xs text-slate-400 flex items-center justify-center font-mono opacity-60"
                >
                    <span className="mr-2">&gt;</span>
                    Jaipur-Ajmer Express Highway, Dehmi Kalan, Near GVK Toll Plaza, Jaipur, Rajasthan 303007 · MUJ campus
                    <span className="ml-2 w-2 h-2 bg-slate-300 block"></span>
                </motion.div>
            </div>

            {/* Decorative floating dots simulating the original background */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
                {particles.map((p) => (
                    <div
                        key={p.id}
                        className="absolute rounded-full bg-slate-400"
                        style={{
                            width: p.width,
                            height: p.height,
                            top: p.top,
                            left: p.left,
                        }}
                    />
                ))}
            </div>
        </section>
    );
}
