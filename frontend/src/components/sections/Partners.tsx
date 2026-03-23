import { motion } from "framer-motion";

export default function Partners() {
    return (
        <section className="relative w-full py-24 bg-slate-50 border-t border-slate-200 overflow-hidden">
            <div className="absolute inset-0 bg-plexus opacity-50 z-0"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-800 tracking-tight">
                        Our <span className="text-primary">Partners</span>
                    </h2>
                    <p className="mt-4 text-slate-500 max-w-2xl mx-auto text-lg">
                        Collaborating with world-class organizations to enrich INCIP 2026.
                    </p>
                </motion.div>

                {/* Technical Co-Sponsors */}
                <div className="w-full mb-16">
                    <h3 className="text-2xl font-bold text-slate-800 text-center mb-8">
                        Technical Co-Sponsor
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 max-w-3xl mx-auto gap-6 sm:gap-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-white p-8 flex items-center justify-center rounded-2xl aspect-[2/1] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                        >
                            <img src="/conference/pictures/Sponser/IEEE.png" alt="IEEE Bangalore" className="max-h-full max-w-full object-contain drop-shadow-sm" />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white p-8 flex items-center justify-center rounded-2xl aspect-[2/1] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                        >
                            <img src="/conference/pictures/Sponser/IEEE-2.png" alt="IEEE NKSS" className="max-h-full max-w-full object-contain drop-shadow-sm" />
                        </motion.div>
                    </div>
                </div>

                {/* Academic Partners */}
                <div className="w-full">
                    <h3 className="text-2xl font-bold text-slate-800 text-center mb-8">
                        Academic Partner
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 max-w-3xl mx-auto gap-6 sm:gap-10">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="bg-white p-8 flex items-center justify-center rounded-2xl aspect-[2/1] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                        >
                            <img src="/conference/pictures/AcademicPartner/image.png" alt="Manipal University Jaipur" className="max-h-full max-w-full object-contain drop-shadow-sm" />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="bg-white p-8 flex items-center justify-center rounded-2xl aspect-[2/1] shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                        >
                            <img src="/conference/pictures/AcademicPartner/image-2.png" alt="Manipal Academy of Higher Education" className="max-h-full max-w-full object-contain drop-shadow-sm" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
