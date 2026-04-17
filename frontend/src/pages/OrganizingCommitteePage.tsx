import { motion } from "framer-motion";

export default function OrganizingCommitteePage() {
    const committeeData = [
        {
            category: "Chief Patron",
            members: [
                { name: "Prof. Battu Satyanarayana", role: "Vice Chancellor", affiliation: "Central University of Karnataka, Kalaburagi" }
            ]
        },
        {
            category: "Patron",
            members: [
                { name: "Prof. R. R. Biradar", role: "Registrar", affiliation: "Central University of Karnataka, Kalaburagi" }
            ]
        },
        {
            category: "General Chairs",
            members: [
                { name: "Prof. Paramesh", role: "Dean, School of Engineering", affiliation: "Central University of Karnataka, Kalaburagi" },
                { name: "Prof. Pramod Kumar", role: "Professor", affiliation: "Central University of Karnataka, Kalaburagi" }
            ]
        },
        {
            category: "General Co-Chairs",
            members: [
                { name: "Dr. Sanyog Rawat", role: "Associate Professor & Head", affiliation: "Central University of Rajasthan" },
                { name: "Dr. Mahesh Jangid", role: "Associate Professor, Dept. of CSE", affiliation: "Manipal University Jaipur" },
                { name: "Dr. Mahipal Bukya", role: "", affiliation: "MIT, Bengaluru" }
            ]
        },
        {
            category: "Organizing Chairs",
            members: [
                { name: "Dr. Debarati Ganguly", role: "", affiliation: "IIIT, Kottayam" },
                { name: "Dr. N C Pradhan", role: "", affiliation: "Central University of Karnataka, Kalaburagi" },
                { name: "Dr. Nagaraj Yamanakkanavar", role: "", affiliation: "Central University of Karnataka, Kalaburagi" }
            ]
        },
        {
            category: "Organizing Secretaries",
            members: [
                { name: "Dr. Layak Ali", role: "", affiliation: "Central University of Karnataka, Kalaburagi" },
                { name: "Dr. Mallikarjun Anandhalli", role: "", affiliation: "Central University of Karnataka, Kalaburagi" },
                { name: "Dr. Anil Kumar", role: "", affiliation: "Manipal University Jaipur, Jaipur" }
            ]
        },
        {
            category: "Finance Chair",
            members: [
                { name: "Dr. N C Pradhan", role: "", affiliation: "Central University of Karnataka, Kalaburagi" }
            ]
        },
        {
            category: "Program Chairs",
            members: [
                { name: "Prof. T. Srinivas", role: "Professor", affiliation: "IISc, Bangalore" },
                { name: "Prof. Preetam Kumar", role: "", affiliation: "IIT Patna" },
                { name: "Prof. Ram Bilas Pachori", role: "", affiliation: "IIT Indore" },
                { name: "Prof. Ashivini Chatutvedi", role: "", affiliation: "NITK, Surathkal" },
                { name: "Prof. Amarendra Matsa", role: "", affiliation: "CUK" },
                { name: "Dr. S. S. Karthikeyan", role: "", affiliation: "NIT Trichy" },
                { name: "Dr. Jogesh Dash", role: "", affiliation: "NIT Rourkela" },
                { name: "Dr. Priyansha Kaurav", role: "", affiliation: "IIT Roorkee" },
                { name: "Dr. Arvind Kumar", role: "", affiliation: "NIT Kurukshetra" },
                { name: "Prof. Veeresh G. Kasabegoudar", role: "", affiliation: "CUK" },
                { name: "Dr. Sandeep Kumar", role: "", affiliation: "JNU, New Delhi" },
                { name: "Dr. Ashok Kumar Ray", role: "", affiliation: "NERIST" }
            ]
        },
        {
            category: "Industry Liaison Chairs",
            members: [
                { name: "Dr. Puneet Mishra", role: "", affiliation: "URSC, ISRO" },
                { name: "Dr. Chandrakanta Kumar", role: "", affiliation: "ISRO Bangalore" },
                { name: "Dr. Keerthipriya Sathish", role: "", affiliation: "RRI, Bangalore" },
                { name: "Dr. Chengappa Munjandira", role: "", affiliation: "HCL, Bangalore" }
            ]
        },
        {
            category: "Technical Program Committee (TPC) Chairs",
            members: [
                { name: "Dr. Preetam Kumar", role: "", affiliation: "IIT Patna" },
                { name: "Dr. Ashvini Chaturvedi", role: "", affiliation: "NITK, Surathkal" },
                { name: "Dr. Parameshachari B. D.", role: "", affiliation: "Nitte Meenakshi Institute of Technology, Bengaluru" },
                { name: "Dr. Abhishek Deshmukh", role: "", affiliation: "KLE institute of Technology, Hubbali" },
                { name: "Dr. Mandeep Singh", role: "", affiliation: "NITK, Surathkal" },
                { name: "Dr. Sandeep Kumar", role: "", affiliation: "JNU, New Delhi" },
                { name: "Dr. Pallavi R. Mane", role: "", affiliation: "MIT, Manipal" },
                { name: "Dr. Kumar Shashvat", role: "", affiliation: "Manipal University Jaipur, Rajasthan" }
            ]
        },
        {
            category: "Publicity Chairs",
            members: [
                { name: "Dr. Uday Patil", role: "", affiliation: "Central University of Karnataka" },
                { name: "Dr. Peddeeti Sudheer", role: "", affiliation: "Central University of Karnataka, Kalaburagi" },
                { name: "Dr. Kumar Abhishek", role: "", affiliation: "NIT Patna" },
                { name: "Dr. Arshpreet Kaur", role: "", affiliation: "Manipal University Jaipur, Rajasthan" }
            ]
        },
        {
            category: "Local Arrangement Chairs",
            members: [
                { name: "Dr. Arunkumar Patil", role: "", affiliation: "Central University of Karnataka, Kalaburagi" },
                { name: "Dr. Santhosha Kumar A.", role: "", affiliation: "Central University of Karnataka, Kalaburagi" },
                { name: "Dr. Mallikarjun Anandhalli", role: "", affiliation: "Central University of Karnataka, Kalaburagi" }
            ]
        },
        {
            category: "Workshop & Tutorial Chairs",
            members: [
                { name: "Dr. M. Pandu Ranga Prasad", role: "", affiliation: "Central University of Karnataka, Kalaburagi" },
                { name: "Dr. Sangamesh", role: "", affiliation: "Central University of Karnataka, Kalaburagi" }
            ]
        }
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
                        Organizing <span className="text-primary italic">Committee</span>
                    </h1>
                    <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                        The dedicated team behind INCIP 2026 ensuring a world-class conference experience.
                    </p>
                </motion.div>

                <div className="space-y-16">
                    {committeeData.map((section) => (
                        <motion.div
                            key={section.category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <h2 className="text-2xl font-bold text-slate-800 mb-8 pb-2 border-b-2 border-primary/20 inline-block uppercase tracking-wider">
                                {section.category}
                            </h2>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {section.members.map((member, i) => (
                                    <motion.div
                                        key={i}
                                        whileHover={{ y: -5 }}
                                        className="bg-white rounded-2xl p-6 shadow-sm shadow-slate-200/50 border border-slate-100 flex flex-col items-start relative overflow-hidden group"
                                    >
                                        <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500"></div>
                                        
                                        <h3 className="font-bold text-lg text-slate-900 mb-1 z-10">{member.name}</h3>
                                        
                                        {member.role && (
                                            <p className="text-sm font-medium text-primary mb-2 z-10">{member.role}</p>
                                        )}
                                        
                                        <div className="mt-auto pt-2 z-10">
                                            <p className="text-sm text-slate-500">{member.affiliation}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
