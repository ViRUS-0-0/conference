import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Committee() {
    const speakers = [
        {
            name: "Prof. Preetam Kumar",
            role: "Professor",
            affiliation: "IIT Patna",
            country: "INDIA",
            domain: "#Engineering",
            image: "/conference/pictures/Speakers/PreetamKumar.png",
        },
        {
            name: "Prof. Srinivas Talabattula",
            role: "Professor",
            affiliation: "IISc Bangalore",
            country: "INDIA",
            domain: "#Communication",
            image: "/conference/pictures/Speakers/SrinivasTalabattula.png",
        },
        {
            name: "Prof. Ram Bilas Pachori",
            role: "Professor",
            affiliation: "IIT Indore",
            country: "INDIA",
            domain: "#InformationProcessing",
            image: "/conference/pictures/Speakers/RamBilasPachori.png",
        },
    ];

    const committeeSections = [
        {
            title: "Organizing Committee",
            link: "/committee/organizing-committee"
        },
        {
            title: "Technical Program Committee",
            link: "/committee/technical-program-committee"
        },
        {
            title: "Advisory Committee",
            link: "/committee/advisory-committee"
        }
    ];

    return (
        <section id="committee" className="w-full py-24 relative">
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-32 max-w-5xl mx-auto">
                    {speakers.map((speaker, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="group relative"
                        >
                            <div className="bg-white rounded-2xl p-6 text-center border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 relative z-10 h-full flex flex-col items-center">
                                {/* Image */}
                                <div className="w-32 h-32 rounded-full overflow-hidden mb-6 border-4 border-white shadow-md group-hover:scale-105 transition-transform duration-300">
                                    <img src={speaker.image} alt={speaker.name} className="w-full h-full object-cover object-center bg-white" />
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
                            <div className="absolute inset-0 bg-primary/5 rounded-2xl blur-xl transition-opacity duration-300 opacity-0 group-hover:opacity-100 -z-10 mt-4 scale-95"></div>
                        </motion.div>
                    ))}
                </div>

                {/* Committee Navigation */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto"
                >
                    <div className="flex flex-wrap items-center justify-center gap-4">
                        {committeeSections.map((section) => (
                            <Link
                                key={section.link}
                                to={section.link}
                                onClick={() => window.scrollTo(0, 0)}
                                className="inline-flex items-center rounded-full border border-primary/20 bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary hover:shadow"
                            >
                                {section.title}
                            </Link>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
