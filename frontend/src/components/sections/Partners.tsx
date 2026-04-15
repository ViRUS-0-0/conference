import { motion } from "framer-motion";

export default function Partners() {
    const partners = [
        { name: "IEEE Bangalore", type: "Technical Co-Sponsor", image: "/conference/pictures/Sponser/IEEE.png" },
        { name: "IEEE NKSS", type: "Technical Co-Sponsor", image: "/conference/pictures/Sponser/IEEE-2.png" },
        { name: "Manipal University Jaipur", type: "Academic Partner", image: "/conference/pictures/AcademicPartner/image.png" },
        { name: "Manipal Academy of Higher Education", type: "Academic Partner", image: "/conference/pictures/AcademicPartner/image-2.png" },
    ];

    return (
        <section className="relative w-full py-24 bg-slate-50/50 border-t border-slate-200 overflow-hidden">
            <div className="absolute inset-0 bg-plexus opacity-40 z-0"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
                        Our <span className="text-primary">Partners</span>
                    </h2>
                    <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-lg">
                        Collaborating with world-class organizations to enrich INCIP 2026.
                    </p>
                </motion.div>

                <div className="w-full">
                    <div className="flex flex-wrap justify-center gap-5 md:gap-7">
                        {partners.map((partner, index) => (
                            <motion.div
                                key={partner.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="w-full sm:w-[46%] lg:w-[23%] bg-white/95 p-6 flex flex-col items-center justify-center rounded-2xl border border-slate-200 shadow-lg hover:shadow-xl hover:shadow-[#4c6fd4]/10 hover:-translate-y-1 transition-all duration-300"
                            >
                                <img src={partner.image} alt={partner.name} className="h-16 w-full object-contain" />
                                <p className="mt-4 text-xs tracking-[0.15em] uppercase text-slate-500 text-center">{partner.type}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
