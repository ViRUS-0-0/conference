import { motion } from "framer-motion";
import { Calendar, MapPin, Award, BookOpen, Lightbulb, Zap, ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

export default function AboutPage() {
    const keyDetails = [
        {
            icon: <Calendar className="w-6 h-6 text-primary" />,
            label: "CONFERENCE DATES",
            value: "August 20–21, 2026"
        },
        {
            icon: <MapPin className="w-6 h-6 text-primary" />,
            label: "VENUE",
            value: "Central University of Karnataka"
        },
        {
            icon: <Award className="w-6 h-6 text-primary" />,
            label: "PUBLICATION",
            value: "IEEE Xplore",
            sub: "Scopus"
        }
    ];

    const mainSections = [
        {
            id: "about-conf",
            icon: <BookOpen className="w-6 h-6" />,
            title: "About the Conference",
            content: "The 2nd International Conference on Next Generation Communication & Information Processing (INCIP'26) will provide an outstanding arena for the exchange of information and findings in information computing and advanced communication."
        },
        {
            id: "why-incip",
            icon: <Zap className="w-6 h-6" />,
            title: "Why INCIP?",
            content: "A focused, high-quality forum for AI, ML, and Next-Gen Communication research. This conference gives attendees the opportunity to discuss fresh ideas and application experiences face-to-face."
        },
        {
            id: "impact",
            icon: <Lightbulb className="w-6 h-6" />,
            title: "Conference Impact",
            content: "The conference provides a platform for international relationships among researchers involved in Engineering and Technology. It offers opportunities to form partnerships among research participants."
        }
    ];



    return (
        <div className="w-full pt-32 pb-20 overflow-hidden bg-slate-50/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 text-primary text-sm font-medium mb-6 uppercase tracking-wider"
                    >
                        <BookOpen className="w-4 h-4" />
                        Conference Overview
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-bold mb-6"
                    >
                        About <span className="text-primary italic">INCIP'26</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-slate-500 max-w-2xl mx-auto text-lg"
                    >
                        International Conference on Next Generation Communication & Information Processing
                    </motion.p>
                </div>

                {/* Key Details Grid */}
                <div className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="glass p-10 md:p-12 rounded-[2.5rem] border border-slate-200"
                    >
                        <div className="text-center mb-12">
                            <h3 className="text-2xl font-bold mb-2">Key Details</h3>
                            <p className="text-slate-400 text-sm uppercase tracking-widest font-medium">Essential Conference Information</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {keyDetails.map((detail, idx) => (
                                <div key={idx} className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50/80 border border-slate-100 hover:shadow-lg transition-shadow duration-300">
                                    <div className="bg-white p-4 rounded-xl shadow-sm mb-4">
                                        {detail.icon}
                                    </div>
                                    <span className="text-[10px] font-bold text-slate-400 mb-2 tracking-[0.2em]">{detail.label}</span>
                                    <span className="text-lg font-bold text-slate-800">{detail.value}</span>
                                    {detail.sub && <span className="text-sm text-primary font-medium mt-1">{detail.sub}</span>}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Main Content Sections (Stacked Cards) */}
                <div className="space-y-6 mb-24">
                    {mainSections.map((section, idx) => (
                        <motion.div
                            key={section.id}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="bg-white rounded-2xl p-8 border border-slate-100 hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row gap-6 md:items-center group"
                        >
                            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300 shrink-0">
                                {section.icon}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold mb-3 text-slate-900 flex items-center gap-2 group-hover:text-primary transition-colors">
                                    {section.title}
                                </h3>
                                <p className="text-slate-600 leading-relaxed md:pr-12">
                                    {section.content}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CUK Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass rounded-[3rem] p-8 md:p-12 mb-24 border border-slate-200 overflow-hidden relative"
                >
                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                        <div className="lg:w-1/2 space-y-6">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                                    <MapPin className="w-5 h-5 text-blue-600" />
                                </div>
                                <span className="font-bold text-sm tracking-widest text-slate-400 uppercase">Host Institution</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-black italic">About Central <span className="text-blue-600">University</span> of Karnataka</h2>
                            <p className="text-slate-600 leading-relaxed">
                                The Central University of Karnataka (CUK), established in 2009 by an Act of Parliament (No. 3 of 2009) in Kalaburagi, Karnataka, is one of 16 new Central Universities created under the UGC XI Plan to enhance equity and access to quality higher education in underdeveloped regions. Situated on a 654-acre campus, CUK is fully committed to excellence in academics and impactful research.
                            </p>
                            <a
                                href="https://www.cuk.ac.in/#/home"
                                target="_blank"
                                className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all duration-300"
                            >
                                LEARN MORE ABOUT CUK
                                <ExternalLink className="w-4 h-4" />
                            </a>
                        </div>
                        <div className="lg:w-1/2 relative">
                            <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center bg-slate-100 text-slate-400">
                                Campus Video Pending
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary rounded-full blur-3xl opacity-20 -z-10"></div>
                        </div>
                    </div>
                </motion.div>



                {/* Sub-CTA Final */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass rounded-[3rem] p-12 text-center border border-slate-200"
                >
                    <h3 className="text-3xl font-black mb-4">Ready to Submit Your Research?</h3>
                    <p className="text-slate-500 mb-10 text-lg">Join researchers from across the globe in shaping the future of AI & Machine Learning.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            to="/call-for-papers"
                            className="bg-primary text-white px-10 py-4 rounded-full font-bold hover:shadow-2xl hover:shadow-primary/20 transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
                        >
                            Call for Papers
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                        <button className="bg-white text-slate-900 border border-slate-200 px-10 py-4 rounded-full font-bold hover:bg-slate-50 transition-all duration-300">
                            Register Now
                        </button>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}
