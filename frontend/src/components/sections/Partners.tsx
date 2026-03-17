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
                        Collaborating with world-class organizations in AI & ML research.
                    </p>
                </motion.div>

                {/* Partners Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="glass p-8 flex items-center justify-center rounded-2xl aspect-[3/2] hover:scale-105 transition-transform duration-300 bg-white"
                    >
                        <h4 className="font-bold text-xl text-slate-700 flex items-center space-x-2">
                            <img src="/placeholder.svg" alt="Springer Logo" className="h-8 max-w-full hidden" />
                            <span>Springer</span>
                        </h4>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="glass p-8 flex items-center justify-center rounded-2xl aspect-[3/2] hover:scale-105 transition-transform duration-300 bg-white"
                    >
                        <div className="text-center">
                            <h4 className="font-bold text-indigo-900 border-b border-orange-500 pb-1 mb-1">MANIPAL UNIVERSITY</h4>
                            <p className="text-xs text-slate-500 tracking-widest uppercase">Jaipur</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="glass p-8 flex items-center justify-center rounded-2xl aspect-[3/2] hover:scale-105 transition-transform duration-300 bg-white"
                    >
                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto bg-slate-100 rounded-full flex items-center justify-center border-4 border-slate-200 text-primary font-bold text-xl mb-2">
                                AI
                            </div>
                            <h4 className="font-bold text-sm text-slate-700 uppercase tracking-widest">AIML Community</h4>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="glass p-8 flex items-center justify-center rounded-2xl aspect-[3/2] hover:scale-105 transition-transform duration-300 bg-white"
                    >
                        <div className="text-center">
                            <h4 className="font-bold text-blue-800 text-sm">INSTITUTION'S INNOVATION COUNCIL</h4>
                            <p className="text-[10px] text-red-600 mt-1 uppercase">(Ministry of Education Initiative)</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
