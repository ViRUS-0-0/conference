import { motion } from "framer-motion";
import { Cpu, Network, Database, Radio } from "lucide-react";

export default function Tracks() {
    const tracks = [
        {
            title: "Advance Communication",
            icon: <Network className="w-8 h-8 text-primary" />,
            topics: [
                "Unmanned Aerial Vehicle Networks",
                "5G Networks and IoT",
                "Future Internet Architecture",
                "Disaster Recovery of Networks",
                "Mobile Networks",
            ],
        },
        {
            title: "Information Processing",
            icon: <Database className="w-8 h-8 text-primary" />,
            topics: [
                "Computational Intelligence",
                "Ambient Intelligence",
                "Deep Learning",
                "Recommendation Systems",
                "Intelligent Systems",
            ],
        },
        {
            title: "Smart Systems",
            icon: <Cpu className="w-8 h-8 text-primary" />,
            topics: [
                "Internet of Things",
                "Smart healthcare systems",
                "Energy Efficient Infrastructure",
                "Intelligent Infrastructure and Transportation",
                "Applications of Deep Learning for building Smart Systems"
            ],
        },
        {
            title: "RF, Microwave and mm-Wave",
            icon: <Radio className="w-8 h-8 text-primary" />,
            topics: [
                "Phased Array Antennas",
                "Reflector and Reflect-array Antennas",
                "Planar Antennas",
                "Frequency-selective Surfaces",
                "Satellite Antennas and Payloads"
            ],
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    };

    return (
        <section id="tracks" className="w-full py-24 bg-slate-50 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-slate-800 mb-4"
                    >
                        Call for <span className="text-primary">Papers</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-slate-500 max-w-2xl mx-auto mb-6"
                    >
                        Authors are solicited to contribute to the conference by submitting articles that illustrate research results, projects, surveying works and industrial experiences.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        whileInView={{ opacity: 1, width: "100%" }}
                        viewport={{ once: true }}
                        className="h-1 w-24 bg-primary mx-auto rounded-full"
                    />
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
                >
                    {tracks.map((track, i) => (
                        <motion.div
                            key={i}
                            variants={itemVariants}
                            className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-slate-100 group"
                        >
                            <div className="w-14 h-14 bg-blue-50/80 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary transition-all duration-300">
                                <div className="group-hover:text-white transition-colors duration-300 child-svg-white">
                                    {track.icon}
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-4">{track.title}</h3>
                            <ul className="space-y-3">
                                {track.topics.map((topic, j) => (
                                    <li key={j} className="flex items-start text-sm text-slate-600">
                                        <span className="text-primary mr-2 mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                                        {topic}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center"
                >
                    <a href="/brochure.pdf" target="_blank" rel="noopener noreferrer" className="inline-block px-8 py-4 bg-slate-900 text-white rounded-lg font-medium tracking-wide hover:bg-primary transition-colors duration-300 shadow-md">
                        Download Brochure
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
