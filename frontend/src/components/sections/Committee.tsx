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
            bgPrimary: "bg-primary/20",
            bgSecondary: "bg-purple-500/20",
            members: [
                { name: "Prof. Pramod Kumar", role: "General Chair" },
                { name: "Dr. N. C. Pradhan", role: "Organizing Secretary" }
            ],
            link: "/people/organizing-committee"
        },
        {
            title: "Technical Program Committee",
            bgPrimary: "bg-blue-500/20",
            bgSecondary: "bg-emerald-500/20",
            members: [
                { name: "Dr. Álvaro Rocha", role: "University of Lisbon" },
                { name: "Dr. Anand Nayyar", role: "Duy Tan University" }
            ],
            link: "/people/technical-program-committee"
        },
        {
            title: "Advisory Committee",
            bgPrimary: "bg-amber-500/20",
            bgSecondary: "bg-rose-500/20",
            members: [
                { name: "Dr. Goutam Chattopadhyay", role: "JPL NASA, USA" },
                { name: "Prof. Chinmoy Saha", role: "IIST, Kerala" }
            ],
            link: "/people/advisory-committee"
        }
    ];

    return (
        <section id="people" className="w-full py-24 relative bg-slate-50">
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

                {/* Committees List */}
                <div className="space-y-10 max-w-5xl mx-auto">
                    {committeeSections.map((section, idx) => (
                        <motion.div 
                            key={idx} 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-slate-900 rounded-3xl p-8 md:p-12 text-center overflow-hidden relative shadow-lg"
                        >
                            {/* Background elements */}
                            <div className={`absolute top-0 right-0 w-64 h-64 ${section.bgPrimary} blur-[100px] rounded-full pointer-events-none`}></div>
                            <div className={`absolute bottom-0 left-0 w-64 h-64 ${section.bgSecondary} blur-[100px] rounded-full pointer-events-none`}></div>

                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-10 relative z-10">
                                {section.title}
                            </h3>

                            <div className="flex justify-center flex-wrap gap-6 relative z-10 mb-10">
                                {section.members.map((member, i) => (
                                    <div
                                        key={i}
                                        className="bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl p-6 min-w-[250px] shadow-sm hover:bg-white/10 transition-colors"
                                    >
                                        <h4 className="text-lg font-semibold text-white mb-2">{member.name}</h4>
                                        <p className="text-sm text-blue-300 font-medium">{member.role}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="relative z-10 block">
                                <Link to={section.link} onClick={() => window.scrollTo(0,0)} className="inline-block text-slate-300 hover:text-white border-b border-slate-500 hover:border-white transition-colors pb-1 text-sm font-medium tracking-wide">
                                    View Full Committee List →
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
