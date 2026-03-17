import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Committee() {
    const speakers = [
        {
            name: "Dr. Alan Turing",
            role: "Keynote Speaker",
            affiliation: "Cambridge University",
            country: "UK",
            image: "https://i.pravatar.cc/300?img=11",
            domain: "#Algorithms",
        },
        {
            name: "Prof. Ada Lovelace",
            role: "Plenary Speaker",
            affiliation: "London Data Institute",
            country: "UK",
            image: "https://i.pravatar.cc/300?img=47",
            domain: "#DataScience",
        },
        {
            name: "Dr. John McCarthy",
            role: "Guest Speaker",
            affiliation: "Stanford University",
            country: "USA",
            image: "https://i.pravatar.cc/300?img=33",
            domain: "#AI",
        },
        {
            name: "Prof. Grace Hopper",
            role: "Keynote Speaker",
            affiliation: "Yale University",
            country: "USA",
            image: "https://i.pravatar.cc/300?img=44",
            domain: "#Compilers",
        },
    ];

    const committeeMembers = [
        { name: "Dr. Rajesh Kumar", role: "General Chair" },
        { name: "Dr. Priya Sharma", role: "Program Chair" },
        { name: "Prof. Amit Patel", role: "Technical Chair" },
        { name: "Dr. Sunita Singh", role: "Organizing Secretary" },
    ];

    return (
        <section id="people" className="w-full py-24 relative bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-slate-800 mb-4"
                    >
                        Esteemed <span className="text-primary">Speakers</span>
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        whileInView={{ opacity: 1, width: "100%" }}
                        viewport={{ once: true }}
                        className="h-1 w-24 bg-primary mx-auto rounded-full"
                    />
                </div>

                {/* Speakers Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
                    {speakers.map((speaker, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative"
                        >
                            <div className="bg-slate-50 rounded-2xl p-6 text-center border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 relative z-10 h-full flex flex-col items-center">
                                {/* Image */}
                                <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-white shadow-md group-hover:scale-105 transition-transform duration-300">
                                    <img src={speaker.image} alt={speaker.name} className="w-full h-full object-cover" />
                                </div>

                                {/* Info */}
                                <h3 className="text-lg font-bold text-slate-800 mb-1">{speaker.name}</h3>
                                <p className="text-sm font-medium text-primary mb-3">{speaker.role}</p>
                                <div className="mt-auto">
                                    <p className="text-xs text-slate-500 mb-1">{speaker.affiliation}</p>
                                    <p className="text-xs text-slate-400 font-mono uppercase tracking-wider mb-4">{speaker.country}</p>
                                    <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-[10px] font-mono rounded-full font-semibold">
                                        {speaker.domain}
                                    </span>
                                </div>
                            </div>

                            {/* Decorative background blob on hover */}
                            <div className="absolute inset-0 bg-primary/5 rounded-2xl blur-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100 -z-10 mt-4 scale-95"></div>
                        </motion.div>
                    ))}
                </div>

                {/* Organizing Committee Simplified List */}
                <div className="bg-slate-900 rounded-3xl p-10 md:p-16 text-center overflow-hidden relative">
                    {/* Background elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px] rounded-full pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 blur-[100px] rounded-full pointer-events-none"></div>

                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-2xl md:text-3xl font-bold text-white mb-12 relative z-10"
                    >
                        Organizing Committee
                    </motion.h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 relative z-10">
                        {committeeMembers.map((member, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl p-6"
                            >
                                <h4 className="text-lg font-semibold text-white mb-1">{member.name}</h4>
                                <p className="text-sm text-blue-300 font-medium">{member.role}</p>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="mt-12"
                    >
                        <Link to="/people" className="inline-block text-slate-300 hover:text-white border-b border-slate-500 hover:border-white transition-colors pb-1 text-sm font-medium tracking-wide">
                            View Full Committee List →
                        </Link>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
