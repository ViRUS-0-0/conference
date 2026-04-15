import { motion } from "framer-motion";

const speakers = [
    {
        name: "Prof. T. Srinivas",
        role: "IISc Bangalore",
        expertise: "Microwave Engineering and RF Systems",
        image: "/conference/pictures/Speakers/SrinivasTalabattula.png",
    },
    {
        name: "Prof. Preetam Kumar",
        role: "IIT Patna",
        expertise: "Signal Processing and Intelligent Communication",
        image: "/conference/pictures/Speakers/PreetamKumar.png",
    },
    {
        name: "Prof. Ram Bilas Pachori",
        role: "IIT Indore",
        expertise: "Biomedical Signals and AI-enabled Analytics",
        image: "/conference/pictures/Speakers/RamBilasPachori.png",
    },
];

export default function EsteemedSpeakers() {
    return (
        <section className="w-full py-24 bg-gradient-to-b from-slate-50 via-white to-slate-100 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-24 right-0 w-72 h-72 rounded-full bg-primary/10 blur-3xl" />
                <div className="absolute bottom-0 -left-20 w-72 h-72 rounded-full bg-blue-400/10 blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-14">
                    <motion.p
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="uppercase tracking-[0.28em] text-xs font-semibold text-primary"
                    >
                        Incip 2026
                    </motion.p>
                    <motion.h2
                        initial={{ opacity: 0, y: 22 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mt-4 text-3xl md:text-5xl font-bold text-slate-900"
                    >
                        Esteemed <span className="text-primary">Speakers</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="mt-5 max-w-3xl mx-auto text-slate-600"
                    >
                        Meet distinguished experts shaping next-generation communication and information processing through research, innovation, and industry impact.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {speakers.map((speaker, index) => (
                        <motion.article
                            key={speaker.name}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="rounded-3xl bg-white/95 border border-slate-200 shadow-xl shadow-[#4c6fd4]/10 overflow-hidden group hover:shadow-2xl transition-all duration-300"
                        >
                            <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
                                <img
                                    src={speaker.image}
                                    alt={speaker.name}
                                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                />
                                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-slate-950/80 via-slate-900/15 to-transparent" />
                            </div>
                            <div className="p-7">
                                <h3 className="text-2xl font-semibold text-slate-900">{speaker.name}</h3>
                                <p className="mt-1 text-primary font-semibold">{speaker.role}</p>
                                <p className="mt-4 text-sm leading-relaxed text-slate-500">{speaker.expertise}</p>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
