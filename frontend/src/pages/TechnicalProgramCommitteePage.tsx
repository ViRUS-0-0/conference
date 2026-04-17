import { motion } from "framer-motion";

export default function TechnicalProgramCommitteePage() {
    const tpcMembers = [
        { name: "Dr. Álvaro Rocha", affiliation: "University of Lisbon, Portugal" },
        { name: "Dr. Anand Nayyar", affiliation: "Duy Tan University, Vietnam" },
        { name: "Dr. Dr Sameerchand Pudaruth", affiliation: "University of Mauritius, Mauritius" },
        { name: "Dr. Anil Suroliya", affiliation: "Amity University, Tashkent, Uzbekistan" },
        { name: "Dr. Aruna Kumar S V", affiliation: "University of Beira Interior Covilha, Portugal" },
        { name: "Dr. Ashish Jain", affiliation: "Manipal University Jaipur, India" },
        { name: "Dr. Brij B. Gupta", affiliation: "Asia University, Taiwan" },
        { name: "Dr. Dr. Sheeba Armoogum", affiliation: "University of Mauritius, Mauritius" },
        { name: "Dr. Chhagan Charan", affiliation: "National Institute of Technology, Kurukshetra, India" },
        { name: "Dr. Deepak Sinwar", affiliation: "Manipal University Jaipur, India" },
        { name: "Dr. Dilbag Singh", affiliation: "Gwangju Institute of Science and Technology, South Korea" },
        { name: "Dr. Dinesh Yadav", affiliation: "Manipal University Jaipur, India" },
        { name: "Dr. Ganesh Nayak", affiliation: "University of Sydney, Australia" },
        { name: "Dr. Gaurav Aggarwal", affiliation: "Amity University, Tashkent, Uzbekistan" },
        { name: "Dr. Jagadeesh Nayak", affiliation: "BITS, Dubai" },
        { name: "Dr. Jagadeesh V K", affiliation: "NIT Patna, India" },
        { name: "Dr. Jaume Anguera", affiliation: "Universiatat Ramon Llull, Barcelona" },
        { name: "Dr. Jolly Parikh", affiliation: "Bharati Vidyapeeth’s College of Engineering, India" },
        { name: "Dr. Mohammad Abu Kausar", affiliation: "University of Nizwa, Sultanate of Oman" },
        { name: "Dr. Nitin Sharma", affiliation: "MAIT, Rohini, Delhi, India" },
        { name: "Dr. Pankaj Gupta", affiliation: "IGDTUW, DELHI, India" },
        { name: "Dr. Pinnamaneni Bhanu Prasad", affiliation: "Kelenn Technology, France" },
        { name: "Dr. Rajiv Selvam", affiliation: "MAHE, Dubai" },
        { name: "Dr. Ramaprasad Poojary", affiliation: "MAHE, Dubai" },
        { name: "Dr. Ravishankar Dudhe", affiliation: "MAHE ,  Dubai" },
        { name: "Dr. Samrat Kumar Dey", affiliation: "Bangladesh Open University, Bangladesh" },
        { name: "Dr. Siddhaling U", affiliation: "BITS Dubai, BITS, Dubai" },
        { name: "Dr. Sudhanshu Tripathi", affiliation: "Amity University, Uzbekistan" },
        { name: "Dr. Tanupriya Choudhury", affiliation: "UPES, Dehradun, India" },
        { name: "Dr. Thanh-Phong Dao", affiliation: "Ton Duc Thang University, Vietnam" },
        { name: "Dr. Vishal Mathur", affiliation: "American International University, Kuwait" },
        { name: "Dr. Wanyang Dai", affiliation: "Nanjing University, China" },
        { name: "Dr. Yugnanda", affiliation: "Bharati Vidyapeeth’s College of Engineering, New Delhi, India" },
        { name: "Dr. Zayar Aung", affiliation: "Applies Mathematics and Informatics National Research University, Russian" },
        { name: "Prof. Ali Kadhum Idrees", affiliation: "University of Babylon, Iraq" },
        { name: "Prof. Popentiu Vladicescu Florin", affiliation: "University POLITEHNICA of Bucharest, Romania" },
        { name: "Prof. Selwyn Piramuthu", affiliation: "University of Florida, Florida" }
    ];

    return (
        <div className="w-full min-h-[80vh]  py-20 px-4 relative">
            <div className="absolute inset-0 bg-plexus opacity-30 z-0 pointer-events-none"></div>
            
            <div className="max-w-6xl mx-auto relative z-10 pt-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-800 tracking-tight mb-6">
                        Technical Program <span className="text-primary italic">Committee</span>
                    </h1>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                        The distinguished experts ensuring the technical excellence of INCIP 2026.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {tpcMembers.map((member, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                className="bg-white rounded-2xl p-6 shadow-sm shadow-slate-200/50 border border-slate-100 flex flex-col items-start relative overflow-hidden group"
                            >
                                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500"></div>
                                
                                <h3 className="font-bold text-lg text-slate-900 mb-1 z-10">{member.name}</h3>
                                
                                <div className="mt-auto pt-2 z-10">
                                    <p className="text-sm font-medium text-slate-500">{member.affiliation}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
