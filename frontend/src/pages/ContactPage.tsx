import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="w-full flex justify-center py-20 px-4 min-h-[80vh]">
            <div className="max-w-4xl w-full">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-black text-slate-800 mb-6 text-center"
                >
                    Get in <span className="text-primary">Touch</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-slate-500 mb-16 text-center max-w-2xl mx-auto"
                >
                    Have questions about the conference? Reach out to our organizing committee.
                </motion.p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="glass p-8 rounded-2xl"
                    >
                        <div className="space-y-8">
                            <div className="flex items-start">
                                <MapPin className="text-primary w-6 h-6 mt-1 mr-4 shrink-0" />
                                <div>
                                    <h3 className="font-bold text-slate-800 mb-1">Venue</h3>
                                    <p className="text-slate-600 text-sm">Central University of Karnataka,<br />Kalaburagi,<br />Karnataka 585367</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <Mail className="text-primary w-6 h-6 mt-1 mr-4 shrink-0" />
                                <div>
                                    <h3 className="font-bold text-slate-800 mb-1">Email Us</h3>
                                    <p className="text-slate-600 text-sm">incip.conference@gmail.com</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <Phone className="text-primary w-6 h-6 mt-1 mr-4 shrink-0" />
                                <div>
                                    <h3 className="font-bold text-slate-800 mb-1">Call Us</h3>
                                    <p className="text-slate-600 text-sm">+91 8618218389<br />+91 9776111926</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100"
                    >
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
                                <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all" placeholder="John Doe" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                                <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all" placeholder="john@example.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
                                <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all" placeholder="How can we help you?"></textarea>
                            </div>
                            <button
                                type="button"
                                onClick={() => alert("Thank you! Your message has been sent successfully. We will get back to you shortly.")}
                                className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition-colors shadow-lg shadow-primary/30 active:scale-95 duration-200"
                            >
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
