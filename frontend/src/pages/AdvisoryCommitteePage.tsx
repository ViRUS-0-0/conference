import { motion } from "framer-motion";

export default function AdvisoryCommitteePage() {
    const intlAdvisoryMembers = [
        { name: "Dr. Goutam Chattopadhyay", affiliation: "JPL NASA, USA" },
        { name: "Prof. Chinmoy Saha", affiliation: "IIST, Thiruvananthapuram" },
        { name: "Dr. Ashutosh Kedar", affiliation: "LRDE, DRDO" },
        { name: "Prof. Maurizio Bozzi", affiliation: "University of Pavia , Italy" },
        { name: "Prof. Jawad Siddiqui", affiliation: "University of Calcutta, India / RMC Canada" },
        { name: "Dr. Sudhakar Rao", affiliation: "Rao’s Consultants LLC, Los Angeles, USA" },
        { name: "Dr. C. J. Reddy", affiliation: "VP, Altair Engineering, USA" },
        { name: "Dr. Jaume Anguera", affiliation: "Universiatat Ramon Llull, Barcelona, Spain" },
        { name: "Prof. V.S. Tripathi", affiliation: "MNNIT, Allahabad" },
        { name: "Dr. Madhu Chetty", affiliation: "Federation University, Australia" },
        { name: "Mr. Sankara Reddy Thamma", affiliation: "Deloitte Consulting LLP, Charlotte, North Carolina" },
        { name: "Prof. Guy A. E. Vandenbosch", affiliation: "KU Leuven, Belgium" },
        { name: "Dr. Zayar Aung", affiliation: "Applies Mathematics and Informatics National Research University, Russian" },
        { name: "Prof. Chintha Tellambura", affiliation: "University of Alberta, Canada" },
        { name: "Prof. Mihaela Albu", affiliation: "Politehnica University of Bucharest, Romania" },
        { name: "Prof. Marcin Paprzycki", affiliation: "Polish Academy of Sciences, Poland" },
        { name: "Dr. Suresh Vishwakarma", affiliation: "University of Trinidad and Tobago, Vancouver, Canada" },
        { name: "Prof. Aime Lay-Ekuakille", affiliation: "University of Salento, Lecce, Italy" },
        { name: "Dr. Danish Ather", affiliation: "Amity University, Tashkent" },
        { name: "Prof. Yeon Ho Chung", affiliation: "Pukyong, National University, Busan, South Korea" },
        { name: "Prof. Hanjung Song", affiliation: "Inje University, South Korea" },
        { name: "Prof. Sunday, Ekpo", affiliation: "Manchester Meteropolitan University, UK" },
        { name: "Ms. Shirin Bhambhani", affiliation: "Senior Solutions Architect, Amazon Web Services, USA" },
        { name: "Dr. Tejasvi Parupudi", affiliation: "Arizona State University, Tempe. USA" }
    ];

    const natAdvisoryMembers = [
        { name: "Prof. Sriram Kumar", affiliation: "NIT Trichy" },
        { name: "Prof. John D’Souza", affiliation: "NITK Surathkal" },
        { name: "Prof. Anil Kumar Dahiya", affiliation: "DIT University, Dehradun" },
        { name: "Prof. Sumit Srivastava", affiliation: "Manipal University, Jaipur" },
        { name: "Prof. Neelawar Sekhar Vittal Shet", affiliation: "NITK Surathkal" },
        { name: "Prof. Santosh k. Vishwakarma", affiliation: "Gyan Ganga Institute of Technology and Sciences Jabalpur" },
        { name: "Prof. Geeta Sikka", affiliation: "NIT, Delhi" },
        { name: "Prof. T. Laxminidhi", affiliation: "NITK Surathkal" },
        { name: "Dr. Pooja Jain", affiliation: "IIIT, Nagpur" },
        { name: "Prof. Muralidhar Kulkarni", affiliation: "NITK Surathkal" },
        { name: "Dr. Tapan Jain", affiliation: "IIIT, Nagpur" },
        { name: "Prof. Brajesh Kaushik", affiliation: "IIT Roorkee" },
        { name: "Prof. Binod Kumar Kanuajia", affiliation: "JNU, New Delhi" },
        { name: "Dr. Neelakandan R", affiliation: "IIT, Goa" },
        { name: "Dr. A A Bazil Raj", affiliation: "DIAT, Pune" },
        { name: "Prof. M. Ganesh Madhan", affiliation: "MIT, Anna University, Chennai" },
        { name: "Prof. S. J. Thiruvengadam", affiliation: "TCE, Madurai" },
        { name: "Prof. Sivanantha Raja Avaninathan", affiliation: "ACCET, Tamil Nadu" },
        { name: "Dr.S N Prasad", affiliation: "Dayananda Sagar University, Bangalore" },
        { name: "Dr. Sumit Kumar", affiliation: "JAIN (Deemed-to-be University), Bangalore" }
    ];

    const renderGrid = (members: { name: string; affiliation: string }[]) => (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {members.map((member, i) => (
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
    );

    return (
        <div className="w-full min-h-[80vh] bg-slate-50 py-20 px-4 relative">
            <div className="absolute inset-0 bg-plexus opacity-30 z-0 pointer-events-none"></div>
            
            <div className="max-w-6xl mx-auto relative z-10 pt-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-800 tracking-tight mb-6">
                        Advisory <span className="text-primary italic">Committee</span>
                    </h1>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                        Visionary leaders providing strategic guidance to INCIP 2026.
                    </p>
                </motion.div>

                <div className="space-y-16">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl font-bold text-slate-800 mb-8 pb-2 border-b-2 border-primary/20 inline-block uppercase tracking-wider">
                            International Advisory Committee
                        </h2>
                        {renderGrid(intlAdvisoryMembers)}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-2xl font-bold text-slate-800 mb-8 pb-2 border-b-2 border-primary/20 inline-block uppercase tracking-wider">
                            National Advisory Committee
                        </h2>
                        {renderGrid(natAdvisoryMembers)}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
