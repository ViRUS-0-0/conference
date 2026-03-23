import { motion } from "framer-motion";

export default function RegistrationPage() {
    return (
        <div className="w-full flex justify-center py-20 px-4 min-h-[80vh] bg-slate-50 relative">
            <div className="absolute inset-0 bg-plexus opacity-30 z-0 pointer-events-none"></div>

            <div className="max-w-5xl w-full relative z-10">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-black text-slate-800 mb-6 text-center tracking-tight"
                >
                    Conference <span className="text-primary">Registration</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-slate-500 mb-16 text-center max-w-2xl mx-auto text-lg"
                >
                    Join us at INCIP 2026. Review our registration fees and payment details below to secure your spot.
                </motion.p>

                <div className="bg-white rounded-3xl p-6 md:p-12 shadow-sm border border-slate-200 mb-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-3xl rounded-full transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

                    <h3 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                        <span className="w-8 h-8 rounded-lg bg-blue-50 text-primary flex items-center justify-center mr-3 text-sm shrink-0">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </span>
                        Registration Fees
                    </h3>

                    <div className="overflow-x-auto rounded-xl border border-slate-100 mb-8 w-full max-w-full">
                        <table className="w-full text-left border-collapse min-w-[700px]">
                            <thead>
                                <tr className="bg-slate-50 text-slate-700 font-bold text-sm uppercase tracking-wider">
                                    <th className="p-4 md:p-5 border-b border-slate-200 border-r" rowSpan={2}>Delegates Category</th>
                                    <th className="p-4 md:p-5 border-b border-slate-200 text-center border-r" colSpan={2}>Indian (INR)</th>
                                    <th className="p-4 md:p-5 border-b border-slate-200 text-center" colSpan={2}>International (USD)</th>
                                </tr>
                                <tr className="bg-slate-50/50 text-slate-600 font-medium text-xs md:text-sm">
                                    <th className="px-3 py-3 md:p-4 border-b border-slate-200 border-r text-center whitespace-nowrap">IEEE Member</th>
                                    <th className="px-3 py-3 md:p-4 border-b border-slate-200 border-r text-center whitespace-nowrap">Non-IEEE Member</th>
                                    <th className="px-3 py-3 md:p-4 border-b border-slate-200 border-r text-center whitespace-nowrap">IEEE Member</th>
                                    <th className="px-3 py-3 md:p-4 border-b border-slate-200 text-center whitespace-nowrap">Non-IEEE Member</th>
                                </tr>
                            </thead>
                            <tbody className="text-slate-700 text-sm md:text-base">
                                {[
                                    { cat: "Students / Research Scholars", i1: "₹7,000", i2: "₹7,500", u1: "$200", u2: "$250" },
                                    { cat: "Faculty from Academics", i1: "₹9,000", i2: "₹9,500", u1: "$250", u2: "$300" },
                                    { cat: "Delegates from Industry", i1: "₹10,000", i2: "₹11,000", u1: "$325", u2: "$375" },
                                    { cat: "Attendee", i1: "₹3,000", i2: "₹5,000", u1: "$75", u2: "$100" },
                                    { cat: "Workshop", i1: "₹400", i2: "₹500", u1: "$50", u2: "$75" },
                                ].map((row, idx) => (
                                    <tr key={idx} className="border-b border-slate-100 hover:bg-blue-50/30 transition-colors">
                                        <td className="p-4 md:p-5 font-semibold text-slate-800 border-r border-slate-100">{row.cat}</td>
                                        <td className="p-4 md:p-5 font-mono font-medium text-primary border-r border-slate-100 text-center">{row.i1}</td>
                                        <td className="p-4 md:p-5 font-mono font-medium text-slate-600 border-r border-slate-100 text-center">{row.i2}</td>
                                        <td className="p-4 md:p-5 font-mono font-medium text-primary border-r border-slate-100 text-center">{row.u1}</td>
                                        <td className="p-4 md:p-5 font-mono font-medium text-slate-600 text-center">{row.u2}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-10 flex items-start space-x-4">
                        <div className="shrink-0 mt-0.5 text-amber-500">
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                        </div>
                        <p className="text-sm text-amber-800 leading-relaxed">
                            <strong className="font-bold">Note:</strong> 6 pages are the limit of the paper. After 6 pages, one additional page shall be charged <strong>2000 INR/page</strong> for participants from India and <strong>50 USD/page</strong> for International participants. The Conference registration fee once paid is non-refundable and non-transferable.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-4">
                        {/* Bank Details */}
                        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                            <h4 className="text-lg font-bold text-slate-800 mb-6 flex items-center pb-2 border-b border-slate-200">
                                <svg className="w-5 h-5 mr-2 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>
                                Bank Account Details
                            </h4>
                            <ul className="space-y-4 text-sm">
                                <li className="flex justify-between flex-wrap gap-2">
                                    <span className="text-slate-500 shrink-0">Account Holder</span>
                                    <span className="font-semibold text-slate-800 text-right">Central University of Karnataka</span>
                                </li>
                                <li className="flex justify-between border-t border-slate-200/50 pt-3 flex-wrap gap-2">
                                    <span className="text-slate-500 shrink-0">Account Number</span>
                                    <span className="font-mono font-bold text-primary">5109101000001</span>
                                </li>
                                <li className="flex justify-between border-t border-slate-200/50 pt-3 flex-wrap gap-2">
                                    <span className="text-slate-500 shrink-0">IFSC Code</span>
                                    <span className="font-mono font-bold text-slate-800">CNRB0005109</span>
                                </li>
                                <li className="flex justify-between border-t border-slate-200/50 pt-3 flex-wrap gap-2">
                                    <span className="text-slate-500 shrink-0">Bank Name</span>
                                    <span className="font-semibold text-slate-800 text-right">Canara Bank</span>
                                </li>
                                <li className="flex justify-between border-t border-slate-200/50 pt-3 flex-wrap gap-2">
                                    <span className="text-slate-500 shrink-0">Branch Address</span>
                                    <span className="font-semibold text-slate-800 text-right">CUK Campus, Kadaganchi</span>
                                </li>
                                <li className="flex justify-between border-t border-slate-200/50 pt-3 flex-wrap gap-2">
                                    <span className="text-slate-500 shrink-0">SWIFT Code</span>
                                    <span className="font-mono font-bold text-slate-800">CNRBINBBBFD</span>
                                </li>
                            </ul>
                        </div>

                        {/* Registration Process */}
                        <div className="bg-blue-50/50 rounded-2xl p-6 border border-blue-100 flex flex-col justify-start">
                            <h4 className="text-lg font-bold text-slate-800 mb-6 flex items-center pb-2 border-b border-blue-200/50">
                                <span className="text-primary mr-2">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                </span>
                                Registration Process
                            </h4>
                            
                            <div className="space-y-8 flex-grow">
                                <div className="flex">
                                    <div className="shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm mr-4 border border-primary/20">1</div>
                                    <div>
                                        <h5 className="font-bold text-slate-800 mb-1">Make Payment</h5>
                                        <p className="text-sm text-slate-600 leading-relaxed">Pay the appropriate registration fee to the provided bank account via wire transfer or online banking.</p>
                                    </div>
                                </div>
                                <div className="flex">
                                    <div className="shrink-0 w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm mr-4 border border-primary/20">2</div>
                                    <div>
                                        <h5 className="font-bold text-slate-800 mb-1">Fill the Form</h5>
                                        <p className="text-sm text-slate-600 leading-relaxed mb-4">After a successful payment, fill out the official registration form with your transaction reference number.</p>
                                        <button
                                            onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLScdV56g8VmyFsAT3MpgBsX2Rm7rhTkiI-Pwm5tplEB8wjXcsg/viewform?usp=preview", "_blank")}
                                            className="inline-flex items-center px-6 py-3 bg-primary text-white text-sm rounded-xl font-bold hover:bg-blue-700 hover:-translate-y-0.5 transition-all shadow-lg shadow-primary/30"
                                        >
                                            Registration Form
                                            <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
