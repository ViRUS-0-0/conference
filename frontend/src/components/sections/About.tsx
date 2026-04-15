import { motion } from "framer-motion";
import { CalendarDays, MapPinned, Sparkles } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative w-full bg-white py-12 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* Left Column: Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex justify-center lg:col-span-3 lg:justify-start pt-2"
          >
            <img
              src="/conference/pictures/logo.jpeg"
              alt="Central University of Karnataka Logo"
              className="w-48 h-48 object-contain md:w-56 md:h-56"
            />
          </motion.div>

          {/* Right Column: Content */}
          <div className="lg:col-span-9 space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold text-slate-900">
                About Conference
              </h2>
              <div className="h-0.5 w-16 bg-blue-100" />
            </div>

            <div className="text-slate-600 leading-relaxed text-base md:text-lg">
              <p>
                The <span className="font-semibold text-slate-800">Second International Conference on Next Generation Communication & Information Processing (INCIP-2026)</span> is organized by the <span className="font-semibold text-slate-800">Department of Electronics & Communication Engineering, Central University of Karnataka, Kalaburagi.</span> 
                In the information and communication technology (ICT) sector and organizations, next-generation communication and information computing have become "Big Buzz Words" in recent years. The advent of more advanced communication and information processing is finding its new way into our day-to-day application areas like smart homes and automation, automotive, healthcare, logistics, finance, and the rest of the smart city applications.
              </p>
              <p className="mt-4">
                The purpose of holding this conference (INCIP) is to bring together, on a common platform, scientists, engineers, and researchers along with other eminent academic personalities in communication, information computing, and other related topics. The participants would get ample scope to make exchanges of views, ideas, and thoughts besides the presentation of papers and interact amongst themselves on recent research in the area of the conference themes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
