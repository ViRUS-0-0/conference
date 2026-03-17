import { motion } from "framer-motion";

export default function TimelinePage() {
    const dates = [
        { date: "January 07, 2026", title: "Call for Papers Opens" },
        { date: "April 15, 2026", title: "Paper Submission Deadline" },
        { date: "June 15, 2026", title: "Notification of Acceptance" },
        { date: "July 15, 2026", title: "Camera-Ready Submission" },
        { date: "October 15, 2026", title: "Early Registration Ends" },
        { date: "November 19-21, 2026", title: "Conference Dates" },
    ];

    return (
        <div className="w-full flex flex-col items-center py-20 px-4 min-h-screen">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl font-black text-slate-800 mb-6"
            >
                Important <span className="text-primary">Dates</span>
            </motion.h1>
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-slate-500 mb-16 text-center max-w-2xl"
            >
                Mark your calendars. Below are the key milestones leading up to ICCAIML 2026.
            </motion.p>

            <div className="w-full max-w-4xl relative">
                {/* Vertical line connecting timeline */}
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-slate-200 -translate-x-1/2"></div>

                {dates.map((item, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className={`flex flex-col md:flex-row items-start md:items-center relative mb-12 ${i % 2 === 0 ? "md:justify-start" : "md:justify-end"
                            }`}
                    >
                        {/* Dot */}
                        <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-sm -translate-x-1/2 mt-1 md:mt-0 z-10"></div>

                        {/* Content card */}
                        <div className={`ml-12 md:ml-0 md:w-5/12 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"}`}>
                            <div className="glass p-6 rounded-xl hover:-translate-y-1 transition duration-300">
                                <span className="text-sm font-mono text-primary font-semibold tracking-wider block mb-2">{item.date}</span>
                                <h3 className="text-xl font-bold text-slate-800">{item.title}</h3>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
