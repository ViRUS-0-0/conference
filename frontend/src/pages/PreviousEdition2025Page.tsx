import { motion } from "framer-motion";
import { Calendar, MapPin, BookOpen, Images, ExternalLink } from "lucide-react";

const glimpseImages = [
    "/conference/pictures/previous-edition/2025/1-1-300x200.jpeg",
    "/conference/pictures/previous-edition/2025/1-2-300x200.jpeg",
    "/conference/pictures/previous-edition/2025/1-3-300x200.jpeg",
    "/conference/pictures/previous-edition/2025/1-4-300x200.jpeg",
    "/conference/pictures/previous-edition/2025/1-5-300x200.jpeg",
    "/conference/pictures/previous-edition/2025/1-6-300x200.jpeg",
    "/conference/pictures/previous-edition/2025/1-7-300x200.jpeg",
    "/conference/pictures/previous-edition/2025/1-8-300x200.jpeg",
    "/conference/pictures/previous-edition/2025/1-9-300x200.jpeg",
    "/conference/pictures/previous-edition/2025/1-10-300x200.jpeg",
];

const speakers = [
    {
        name: "Dr. Srinivas Talabattula",
        affiliation: "Professor, Indian Institute of Science, Bangalore",
        image: "/conference/pictures/previous-edition/2025/Srinivas--226x300.jpg",
        profile: "https://ece.iisc.ac.in/~tsrinu/",
    },
    {
        name: "Dr. Shankar Venugopal",
        affiliation: "Vice President, Mahindra and Mahindra, India",
        image: "/conference/pictures/previous-edition/2025/shankar-232x300.png",
        profile: "https://vtindia.in/team/dr-shankar-venugopal/",
    },
    {
        name: "Dr. Dalal Alharthi",
        affiliation: "University of Arizona, USA",
        image: "/conference/pictures/previous-edition/2025/dalal.jpeg",
        profile: "https://profiles.arizona.edu/person/dalharthi",
    },
    {
        name: "Dr. Brij B. Gupta",
        affiliation: "Asia University, Taiwan",
        image: "/conference/pictures/previous-edition/2025/Brij-Photo.jpg",
        profile: "https://en.wikipedia.org/wiki/Brij_B._Gupta",
    },
    {
        name: "Dr. Preetam Kumar",
        affiliation: "Professor, Indian Institute of Technology, Patna",
        image: "/conference/pictures/previous-edition/2025/preetam-225x300.jpg",
        profile: "https://www.iitp.ac.in/~pkumar/",
    },
    {
        name: "Dr. Rajesh Kumar",
        affiliation: "University of Johannesburg, South Africa",
        image: "/conference/pictures/previous-edition/2025/rajesh-225x300.jpg",
        profile: "https://www.mnit.ac.in/dept_ee/profile?fid=RKiJ",
    },
    {
        name: "Dr. Amit Dua",
        affiliation: "BITS, Pilani",
        image: "/conference/pictures/previous-edition/2025/amit.jpeg",
        profile: "https://web.bits-pilani.ac.in/pilani/amitdua/profile",
    },
    {
        name: "Dr. Ranga Srinivas Gunti",
        affiliation: "General Manager - Tata Motors, Pune",
        image: "/conference/pictures/previous-edition/2025/gunti.png",
        profile: "https://web.bits-pilani.ac.in/pilani/amitdua/profile",
    },
];

export default function PreviousEdition2025Page() {
    return (
        <div className="w-full pt-28 pb-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <section className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-900 text-white px-8 py-14 md:px-14 md:py-20">
                    <div
                        className="absolute inset-0 bg-cover bg-center opacity-30"
                        style={{ backgroundImage: "url('/conference/pictures/previous-edition/2025/connected-device-ipad-4414938.png')" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-slate-900/60" />

                    <div className="relative z-10 max-w-3xl">
                        <p className="text-sm font-mono tracking-[0.2em] uppercase text-primary mb-4">Previous Edition</p>
                        <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">INCIP 2025</h1>
                        <p className="text-lg md:text-2xl text-white/90 font-semibold mb-6">
                            1st International Conference on Next Generation Communication & Information Processing
                        </p>
                        <div className="flex flex-wrap items-center gap-5 text-sm md:text-base text-white/80">
                            <span className="inline-flex items-center gap-2"><Calendar className="w-4 h-4" /> January 23-24, 2025</span>
                            <span className="inline-flex items-center gap-2"><MapPin className="w-4 h-4" /> Manipal Institute of Technology, Bengaluru</span>
                        </div>
                    </div>
                </section>

                <section className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="rounded-2xl bg-white border border-slate-200 p-6">
                        <p className="text-xs tracking-widest text-slate-400 font-semibold mb-2">INDEXING</p>
                        <p className="text-xl font-bold text-slate-800">IEEE Xplore</p>
                        <p className="text-slate-500">Scopus</p>
                    </div>
                    <div className="rounded-2xl bg-white border border-slate-200 p-6">
                        <p className="text-xs tracking-widest text-slate-400 font-semibold mb-2">IEEE RECORD</p>
                        <p className="text-xl font-bold text-slate-800">#64058</p>
                        <a
                            href="https://conferences.ieee.org/conferences_events/conferences/conferencedetails/64058"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-3 inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                        >
                            Conference Details <ExternalLink className="w-4 h-4" />
                        </a>
                    </div>
                    <div className="rounded-2xl bg-white border border-slate-200 p-6">
                        <p className="text-xs tracking-widest text-slate-400 font-semibold mb-2">MODE</p>
                        <p className="text-xl font-bold text-slate-800">Hybrid</p>
                        <p className="text-slate-500">International participation</p>
                    </div>
                </section>

                <section className="mt-14 rounded-2xl bg-white border border-slate-200 p-8 md:p-10">
                    <div className="flex items-center gap-3 mb-5">
                        <BookOpen className="w-5 h-5 text-primary" />
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-800">About Conference</h2>
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                        The First International Conference on Next Generation Communication & Information Processing (INCIP-2025)
                        was organized by MIT, Bengaluru. In the ICT domain, next-generation communication and information
                        processing are rapidly influencing applications such as smart homes, automation, automotive, healthcare,
                        logistics, finance, and broader smart-city systems. INCIP was created to bring scientists, engineers,
                        researchers, and academic leaders together on one platform to exchange views, ideas, and research
                        outcomes across communication, information computing, and related themes.
                    </p>
                </section>

                <section className="mt-14">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-800">Our Speakers</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {speakers.map((speaker, idx) => (
                            <motion.a
                                key={speaker.name}
                                href={speaker.profile}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 16 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="rounded-2xl overflow-hidden border border-slate-200 bg-white hover:shadow-lg transition-shadow"
                            >
                                <div className="aspect-[4/5] bg-slate-100">
                                    <img src={speaker.image} alt={speaker.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="p-4">
                                    <h3 className="font-bold text-slate-800 leading-tight">{speaker.name}</h3>
                                    <p className="mt-2 text-sm text-slate-500">{speaker.affiliation}</p>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </section>

                <section className="mt-14 rounded-2xl bg-white border border-slate-200 p-8 md:p-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">Publication & Co-sponsors</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="space-y-4">
                            <img src="/conference/pictures/previous-edition/2025/IEEE-XploreDigitalLibrary.jpg" alt="IEEE Xplore" className="max-w-full h-auto" />
                            <a
                                href="https://ieeexplore.ieee.org/xpl/conhome/11018833/proceeding?sortType=vol-only-seq&isnumber=11018886&pageNumber=8"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
                            >
                                Proceedings of INCIP 2025 <ExternalLink className="w-4 h-4" />
                            </a>
                        </div>
                        <div className="space-y-6">
                            <img src="/conference/pictures/previous-edition/2025/ieee-mb-blue.png" alt="IEEE MB" className="max-w-[260px] h-auto" />
                            <img src="/conference/pictures/previous-edition/2025/IEEE-banglore-Section-Blue-300x75-2.png" alt="IEEE Bangalore Section" className="max-w-[260px] h-auto" />
                        </div>
                    </div>
                </section>

                <section className="mt-14">
                    <div className="flex items-center gap-3 mb-6">
                        <Images className="w-5 h-5 text-primary" />
                        <h2 className="text-2xl md:text-3xl font-bold text-slate-800">Glimpses of INCIP 2025</h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                        {glimpseImages.map((image, idx) => (
                            <motion.div
                                key={image}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.04 }}
                                className="aspect-[3/2] rounded-xl overflow-hidden border border-slate-200 bg-white"
                            >
                                <img src={image} alt={`INCIP 2025 glimpse ${idx + 1}`} className="w-full h-full object-cover" />
                            </motion.div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
