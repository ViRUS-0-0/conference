import { motion } from "framer-motion";

export default function RegistrationPage() {
    return (
        <div className="w-full flex justify-center py-20 px-4 min-h-[80vh]">
            <div className="max-w-4xl w-full">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-black text-slate-800 mb-6 text-center"
                >
                    Conference <span className="text-primary">Registration</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-slate-500 mb-16 text-center max-w-2xl mx-auto"
                >
                    Join us at ICCAIML 2026. Secure your spot by registering early.
                </motion.p>

                <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200">
                    <h3 className="text-2xl font-bold text-slate-800 mb-6 border-b border-slate-100 pb-4">Registration Fees</h3>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-slate-50 text-slate-600 font-medium text-sm">
                                    <th className="p-4 border-b border-slate-200">Category</th>
                                    <th className="p-4 border-b border-slate-200">Early Bird (Before Oct 15)</th>
                                    <th className="p-4 border-b border-slate-200">Standard</th>
                                </tr>
                            </thead>
                            <tbody className="text-slate-700">
                                <tr className="border-b border-slate-100/50 hover:bg-slate-50/50">
                                    <td className="p-4 font-medium">Students/Scholars (Indian)</td>
                                    <td className="p-4 font-mono font-semibold text-primary">₹6,000</td>
                                    <td className="p-4 font-mono">₹7,000</td>
                                </tr>
                                <tr className="border-b border-slate-100/50 hover:bg-slate-50/50">
                                    <td className="p-4 font-medium">Academicians (Indian)</td>
                                    <td className="p-4 font-mono font-semibold text-primary">₹8,000</td>
                                    <td className="p-4 font-mono">₹9,000</td>
                                </tr>
                                <tr className="border-b border-slate-100/50 hover:bg-slate-50/50">
                                    <td className="p-4 font-medium">Industry Participants (Indian)</td>
                                    <td className="p-4 font-mono font-semibold text-primary">₹10,000</td>
                                    <td className="p-4 font-mono">₹11,000</td>
                                </tr>
                                <tr className="border-b border-slate-100/50 hover:bg-slate-50/50">
                                    <td className="p-4 font-medium">Foreign Authors</td>
                                    <td className="p-4 font-mono font-semibold text-primary">$200</td>
                                    <td className="p-4 font-mono">$250</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="mt-12 text-center">
                        <button
                            onClick={() => window.open("https://www.iccaiml.com/registration", "_blank")}
                            className="px-10 py-5 bg-primary text-white rounded-xl font-bold text-lg tracking-wider hover:bg-blue-700 transition-colors shadow-lg shadow-primary/30 active:scale-95 duration-200"
                        >
                            PROCEED TO PAYMENT
                        </button>
                        <p className="text-xs text-slate-400 mt-4">Registration link will be active starting January 2026.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
