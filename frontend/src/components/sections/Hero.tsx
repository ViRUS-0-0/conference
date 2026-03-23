import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {

    return (
        <section className="relative w-full min-h-screen flex flex-col items-center justify-center pt-24 overflow-hidden bg-[#f5f5f5]">
            {/* Main Video Container: Full-bleed background */}
            <div className="absolute inset-0 z-0 overflow-hidden shadow-2xl">
                {/* The Video Element */}
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover scale-105"
                    style={{
                        filter: "saturate(0.85) contrast(0.95) brightness(1.05) blur(1px)",
                    }}
                >
                    <source src="/conference/videos/hero-video.mp4" type="video/mp4" />
                </video>

                {/* Cinematic Overlays */}
                
                {/* 1. Global Subtle Tint */}
                <div className="absolute inset-0 bg-[#0b1b2b]/20 pointer-events-none"></div>

                {/* 2. Top & Bottom Dark Gradients for UI Readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#0b1b2b]/50 via-transparent to-[#0b1b2b]/40 pointer-events-none"></div>

                {/* 3. Center Clean Area: Subtle reduced contrast for text clarity */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-full max-w-4xl h-1/2 bg-white/5 backdrop-blur-[1px] rounded-full blur-[100px] opacity-20"></div>
                </div>

                {/* 4. Subtle Orange Ambient Accent */}
                <div className="absolute -top-20 -right-20 w-80 h-80 bg-[#ff6a2b]/10 blur-[100px] rounded-full pointer-events-none"></div>
            </div>

            <div className="z-10 flex flex-col items-center text-center px-4 w-full max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Badges */}
                    <div className="glass-dark inline-flex items-center space-x-2 md:space-x-4 px-4 py-2 rounded-full mb-8 text-[10px] md:text-sm font-mono tracking-widest text-[#ff6a2b] font-semibold uppercase backdrop-blur-md border border-white/20">
                        <span className="flex items-center text-white">
                            <span className="w-1.5 h-1.5 bg-[#ff6a2b] rounded-sm rotate-45 mr-2"></span>
                            2ND EDITION
                        </span>
                        <span className="text-white/30">•</span>
                        <span className="text-white/90">SPRINGER</span>
                        <span className="text-white/30">•</span>
                        <span className="text-white/90">SCOPUS</span>
                    </div>
                </motion.div>

                {/* Huge Main Title */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight text-white mb-6 drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                        INCIP <span className="text-[#ff6a2b]">'26</span>
                    </h1>
                </motion.div>

                {/* Subtitles */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="space-y-4 mb-12"
                >
                    <p className="text-lg md:text-2xl text-white/90 font-medium max-w-2xl mx-auto drop-shadow-md">
                        International Conference on Next Generation Communication & Information Processing
                    </p>
                    <p className="text-sm md:text-base text-[#ff6a2b] font-bold font-mono tracking-[0.3em] uppercase drop-shadow-sm">
                        August 20–21, 2026 <span className="mx-2 text-white/50">•</span> Central University of Karnataka
                    </p>
                </motion.div>


                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="mt-4 mb-16 relative group"
                >
                    {/* Subtle orange glow effect behind button */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-[#ff6a2b] to-orange-400 rounded-lg blur opacity-40 group-hover:opacity-100 transition duration-500"></div>

                    <Link to="/registration" className="relative flex items-center justify-center px-10 py-5 bg-white text-[#0b1b2b] rounded-lg font-bold text-lg tracking-wider transition-all duration-300 border border-white/10 hover:bg-[#ff6a2b] hover:text-white shadow-xl">
                        REGISTER NOW
                    </Link>
                </motion.div>

                {/* Venue details at very bottom of hero */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="text-xs text-white/60 flex items-center justify-center font-mono"
                >
                    <span className="mr-2 text-[#ff6a2b] font-bold">&gt;</span>
                    Central University of Karnataka, Kalaburagi
                    <span className="ml-2 w-2 h-4 bg-[#ff6a2b] block animate-pulse"></span>
                </motion.div>
            </div>
        </section>
    );
}
