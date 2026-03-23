import { motion } from "framer-motion";
import { BookOpen, Users, Globe2, Lightbulb } from "lucide-react";

export default function About() {
    const cards = [
        {
            icon: <BookOpen className="w-8 h-8 text-primary" />,
            title: "Promote Research",
            desc: "Fostering advanced research and computational applications in Next-Generation Communication and Information Processing.",
        },
        {
            icon: <Users className="w-8 h-8 text-primary" />,
            title: "Global Networking",
            desc: "Connecting researchers, academicians, and industry experts from across the globe.",
        },
        {
            icon: <Globe2 className="w-8 h-8 text-primary" />,
            title: "Knowledge Exchange",
            desc: "Providing a premier interdisciplinary platform to present and discuss innovations.",
        },
        {
            icon: <Lightbulb className="w-8 h-8 text-primary" />,
            title: "Real-world Solutions",
            desc: "Addressing practical challenges and discussing encountered solutions in communication and information processing.",
        },
    ];

    return (
        <section id="about" className="w-full py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-slate-800 mb-4"
                    >
                        About The <span className="text-primary">Conference</span>
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        whileInView={{ opacity: 1, width: "100%" }}
                        viewport={{ once: true }}
                        className="h-1 w-24 bg-primary mx-auto rounded-full"
                    />
                </div>

                {/* Content & Objectives */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6 text-slate-600 text-lg leading-relaxed"
                    >
                        <p className="font-medium text-slate-800 text-xl">
                            Welcome to the 2nd International Conference on Next Generation Communication & Information Processing (INCIP-2026).
                        </p>
                        <p>
                            INCIP aims to bring together leading academic scientists, researchers, and research scholars to exchange and share their experiences and research results on all aspects of Next-Generation Communication and Information Processing.
                        </p>
                        <a href="https://www.cuk.ac.in/#/home" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold tracking-wide uppercase hover:underline underline-offset-4 mt-4 inline-flex items-center">
                            Read More About Central University of Karnataka
                            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>
                    </motion.div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
                        {/* Background glowing blob */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-400/20 blur-3xl rounded-full z-0 pointer-events-none"></div>

                        {cards.map((card, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="glass p-8 rounded-2xl relative z-10 hover:-translate-y-1 transition-transform duration-300"
                            >
                                <div className="bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                                    {card.icon}
                                </div>
                                <h3 className="text-xl font-bold text-slate-800 mb-3">{card.title}</h3>
                                <p className="text-sm text-slate-500 leading-relaxed">{card.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* About the University Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="bg-slate-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row relative"
                >
                    {/* Content Side */}
                    <div className="p-10 md:p-16 flex-1 flex flex-col justify-center relative z-10">
                        <span className="text-blue-400 font-mono text-sm uppercase tracking-widest mb-4 block">The Venue</span>
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Central University of Karnataka</h3>
                        <p className="text-slate-300 mb-8 leading-relaxed">
                            The Central University of Karnataka (CUK), established in 2009 by an Act of Parliament (No. 3 of 2009) in Kalaburagi, Karnataka, is one of 16 new Central Universities created under the UGC XI Plan to enhance equity and access to quality higher education in underdeveloped regions. Situated on a 654-acre campus, CUK provides an excellent environment for academic conferences and networking.
                        </p>
                        <a href="https://www.cuk.ac.in/#/home" target="_blank" rel="noreferrer" className="inline-flex items-center text-white bg-white/10 hover:bg-white/20 px-6 py-3 rounded-lg font-medium transition-colors w-fit border border-white/10 backdrop-blur-sm">
                            Explore Campus
                        </a>
                    </div>

                    {/* Campus Image */}
                    <div className="w-full md:w-5/12 min-h-[300px] relative overflow-hidden">
                        <img
                            src="/conference/pictures/About/image.png"
                            alt="Central University of Karnataka Campus"
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        {/* Subtle overlay for blending */}
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 to-transparent pointer-events-none"></div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
