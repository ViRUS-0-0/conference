import { motion } from "framer-motion";
import { CheckCircle2, Clock, Calendar } from "lucide-react";

const timelineEvents = [
    {
        date: "May 30, 2026",
        title: "Full Paper Submission",
        status: "upcoming",
        icon: <Clock className="w-5 h-5" />,
    },
    {
        date: "June 25, 2026",
        title: "Notification of Acceptance",
        status: "upcoming",
        icon: <CheckCircle2 className="w-5 h-5" />,
    },
    {
        date: "July 15, 2026",
        title: "Registration Last Date",
        status: "upcoming",
        icon: <Calendar className="w-5 h-5" />,
    },
    {
        date: "July 25, 2026",
        title: "Camera Ready Submission",
        status: "upcoming",
        icon: <CheckCircle2 className="w-5 h-5" />,
    },
    {
        date: "Aug 20-21, 2026",
        title: "Conference Dates",
        status: "upcoming",
        icon: <Calendar className="w-5 h-5" />,
    },
];

export default function HorizontalTimeline() {
    return (
        <section className="w-full py-12 md:py-16 bg-white border-b border-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                        Important <span className="text-primary font-bold">Dates</span>
                    </h2>
                    <div className="mx-auto mt-2 h-0.5 w-12 bg-blue-100" />
                </div>

                <div className="relative pt-4 pb-8">
                    {/* Connecting Line (Desktop) */}
                    <div className="absolute top-[48px] left-0 w-full h-[1px] bg-slate-100 hidden md:block" />

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-y-12 md:gap-y-0 relative z-10">
                        {timelineEvents.map((event, index) => (
                            <motion.div
                                key={event.title}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex flex-col items-center text-center group"
                            >
                                {/* Circle/Icon */}
                                <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 group-hover:border-primary group-hover:text-primary transition-all duration-300 relative z-20 shadow-sm group-hover:shadow-md">
                                    <div className="scale-75 transform">
                                        {event.icon}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="mt-4 space-y-1">
                                    <p className="text-[11px] font-bold text-primary uppercase tracking-[0.15em]">
                                        {event.date}
                                    </p>
                                    <h3 className="text-sm font-semibold text-slate-800 leading-tight">
                                        {event.title}
                                    </h3>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
