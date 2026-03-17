import { motion } from "framer-motion";

export default function GalleryPage() {
    const images = Array.from({ length: 9 }).map((_, i) => `https://picsum.photos/seed/${i + 1}conf/600/400`);

    return (
        <div className="w-full flex justify-center py-20 px-4 min-h-[80vh]">
            <div className="max-w-7xl w-full">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-black text-slate-800 mb-6 text-center"
                >
                    Past <span className="text-primary">Gallery</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-slate-500 mb-16 text-center max-w-2xl mx-auto"
                >
                    Highlights from our previous editions of the conference.
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {images.map((img, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="aspect-video rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-slate-200"
                        >
                            <img src={img} alt={`Gallery ${i}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
