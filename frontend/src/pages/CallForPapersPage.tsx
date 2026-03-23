import { motion } from "framer-motion";

export default function CallForPapersPage() {
    const tracks = [
        {
            id: 1,
            title: "Advance Communication",
            topics: [
                "Unmanned Aerial Vehicle Networks", "5G Networks and IoT", "Future Internet Architecture",
                "Disaster Recovery of Networks", "Mobile Networks", "Ad hoc and Mesh Networks",
                "Named Data Networking", "Network Performance Analysis", "QoS for Emergency Applications",
                "Reconfigurable intelligent surfaces", "Real-time Systems and Networks", 
                "Context and location-aware wireless services and applications", "User-centric networks and adaptive services",
                "Dynamic sensor networks for urban applications", "Wireless emergency and security systems",
                "Small Cells and femtocell Networks", "Wireless mesh Networks", "Vehicular Wireless Networks",
                "Cognitive Radio Networks", "Underwater Wireless Networks", "mm Wave Wireless Networks",
                "Software-defined Wireless Networks", "Reconfigurable Wireless Networks", 
                "Satellite-based mobile access and backhaul", "Testbed and prototype implementation of Wireless services",
                "Machine and Deep Learning for Wireless Communication and Computing", "Green Communication Systems and Network",
                "Optical Networks and Systems"
            ],
        },
        {
            id: 2,
            title: "Information Processing",
            topics: [
                "Computational Intelligence", "Ambient Intelligence", "Deep Learning",
                "Recommendation Systems", "Intelligent Systems", "Image Processing",
                "Natural Language Processing", "Computer Vision", "Sentiment Analysis",
                "Speech & Gesture Analysis", "Augmented/Virtual Reality, Data Pre-Processing",
                "Big Data Analytics", "Soft Computing", "Nature Inspired Computing",
                "Predictive Analysis", "Medical Imaging and Signal Processing",
                "Medical Information Processing and Security Challenges", "Biomedical and Healthcare Blockchain",
                "Robotics and Artificial Intelligence"
            ],
        },
        {
            id: 3,
            title: "Smart Systems",
            topics: [
                "Internet of Things", "Smart healthcare systems", "Energy Efficient Infrastructure",
                "Intelligent Infrastructure and Transportation", "Applications of Deep Learning for building Smart Systems",
                "Innovative Control and Management Techniques", "Energy Saving and green IoT applications",
                "Smart City Solutions", "Autonomous Vehicles", "Intelligence Fault Diagnosis and Maintenance Technologies",
                "Smart Process monitoring and Control Strategies", "Smart Materials", "Micro-electromechanical Systems",
                "Sensors Technologies", "Remote Sensing Technologies", "Smart Circuits for Micromachines",
                "Semiconductor Technologies and Cognitive Electronics", "Advanced VLSI systems",
                "Communication Technologies and Standards for Smart Grids", "Cyber Security for Power Grid",
                "Electric Vehicle Technology", "Charging Infrastructure: Wired and Wireless Charging Systems",
                "Smart Grid and Micro Grid Modeling & Simulation.", "Renewable Energy Integration",
                "Solar PV Energy Systems and Materials", "Applications of Computational Intelligence in Power Systems"
            ],
        },
        {
            id: 4,
            title: "RF, Microwave and mm-Wave",
            topics: [
                "Phased Array Antennas", "Reflector and Reflect-array Antennas", "Planar Antennas",
                "Frequency-selective Surfaces", "Satellite Antennas and Payloads", "Aircraft Antennas",
                "Ultra-wideband and Multi-band Antennas"
            ],
        }
    ];

    return (
        <div className="w-full min-h-[80vh] bg-slate-50 py-20 px-4 relative">
            <div className="absolute inset-0 bg-plexus opacity-30 z-0"></div>

            <div className="max-w-4xl mx-auto relative z-10">
                {/* Hero Header */}
                <div className="text-center mb-12">
                    <span className="inline-block py-1.5 px-4 rounded-full bg-blue-100 text-primary text-xs font-semibold tracking-widest uppercase mb-6 border border-blue-200">
                        CALL FOR PAPERS
                    </span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold text-primary mb-4"
                    >
                        Submit Your Research
                    </motion.h1>
                    <p className="text-slate-500 font-medium">INCIP '26 • August 20–21, 2026</p>
                </div>

                {/* Theme Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="glass p-8 rounded-2xl mb-12"
                >
                    <h2 className="text-2xl font-bold text-slate-800 mb-4">Conference Theme</h2>
                    <p className="text-slate-600 leading-relaxed">
                        The conference theme is based on Next Generation Communication & Information Processing. Four major tracks are included in the conference.
                    </p>
                </motion.div>

                {/* Tracks */}
                <div className="space-y-8 mb-16">
                    {tracks.map((track, i) => (
                        <motion.div
                            key={track.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
                        >
                            <div className="flex items-center space-x-4 mb-8">
                                <span className="w-8 h-8 rounded-full bg-blue-50 text-primary font-bold flex items-center justify-center shrink-0">
                                    {track.id}
                                </span>
                                <h3 className="text-2xl font-bold text-primary">{track.title}</h3>
                            </div>

                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                                {track.topics.map((topic, j) => (
                                    <li key={j} className="flex items-start text-sm text-slate-600 hover:text-primary transition-colors">
                                        <span className="text-blue-300 mr-2 shrink-0">▹</span>
                                        {topic}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Ready To Submit CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white p-12 rounded-2xl shadow-sm border border-slate-100 text-center mb-8"
                >
                    <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Submit?</h3>
                    <p className="text-slate-500 mb-8 max-w-lg mx-auto">
                        To submit your paper to the INCIP 2026, please click on the Submit Manuscript button.
                    </p>
                    <button
                        onClick={() => window.open("https://cmt3.research.microsoft.com/", "_blank")}
                        className="inline-flex items-center px-8 py-4 bg-primary text-white rounded-lg font-medium hover:bg-blue-700 transition-all shadow-lg shadow-primary/30"
                    >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                        Submit Manuscript
                    </button>
                </motion.div>

                {/* Acknowledgement */}
                <div className="bg-slate-100/50 p-6 rounded-xl border border-slate-200">
                    <h4 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-2">Acknowledgement</h4>
                    <p className="text-xs text-slate-500 leading-relaxed">
                        The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
                    </p>
                </div>
            </div>
        </div>
    );
}
