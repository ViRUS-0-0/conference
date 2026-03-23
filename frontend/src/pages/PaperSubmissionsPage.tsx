import { motion } from "framer-motion";

export default function PaperSubmissionsPage() {
    return (
        <div className="w-full py-20 px-4 min-h-screen bg-slate-50 relative">
            {/* Background Decorations */}
            <div className="absolute inset-0 bg-plexus opacity-30 z-0 pointer-events-none"></div>

            <div className="max-w-4xl mx-auto relative z-10 pt-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-black text-slate-800 mb-6 tracking-tight">
                        Paper <span className="text-primary">Submission</span>
                    </h1>
                    <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
                        Guidelines and detailed instructions for manuscript preparation, formatting, and submission for INCIP 2026.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.1 }}
                    className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200 mb-12 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-3xl rounded-full transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

                    <div className="prose prose-slate prose-lg md:prose-xl max-w-none text-slate-600">
                        <h2 className="text-2xl font-bold text-slate-800 mb-4 pb-2 border-b border-slate-100">Manuscript Preparation</h2>
                        
                        <div className="bg-blue-50/50 rounded-xl p-6 border border-blue-100 mb-8">
                            <p className="font-semibold text-slate-800 flex items-center flex-wrap gap-2">
                                <span className="bg-primary text-white text-xs px-2 py-1 rounded-md uppercase tracking-wider">Submission Link</span>
                                Submit your paper at:
                            </p>
                            <a 
                                href="https://cmt3.research.microsoft.com/INCIP2026" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-block mt-3 text-primary font-bold hover:underline break-all"
                            >
                                https://cmt3.research.microsoft.com/INCIP2026
                            </a>
                        </div>

                        <p className="mb-6 leading-relaxed text-base">
                            All papers are required to be prepared and submitted in the <strong>IEEE Standard two-column conference format</strong> of A4 size in English. Papers must be four to six pages in length, including texts, Figures, photographs and references. Any submitted paper that exceeds six pages will be rejected. The first page must include the title of the paper, author(s), affiliations, address and text. Please do not include page numbers on submitted documents. Failing to conform to the standard format will result in rejection. 
                        </p>

                        <div className="bg-slate-50 rounded-xl p-5 mb-8 border border-slate-200">
                            <p className="font-semibold text-slate-800 text-base mb-2">Paper Template:</p>
                            <p className="text-sm leading-relaxed mb-3">The authors are required to use the standard IEEE manuscript template for conferences. The Microsoft Word template can be downloaded from the IEEE conference template page:</p>
                            <a href="https://www.ieee.org/conferences/publishing/templates.html" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm px-4 py-2 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition-colors">
                                Download Template
                                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                            </a>
                        </div>

                        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 mb-8">
                            <p className="text-amber-800 text-sm font-medium"><strong>NOTE:</strong> Once the paper is submitted, we shall start reviewing it, so authors cannot update/resubmit the paper. They should submit the final version, update/resubmissions are not allowed.</p>
                        </div>

                        <ul className="space-y-3 mb-10 text-base list-disc pl-5">
                            <li>The paper shall consist of original and previously unpublished work, including specific results. The <strong>'Introduction'</strong> of the paper shall clearly indicate the unique aspects of the submission and how it is related to the previous work.</li>
                            <li>All paper submissions must be electronic, using <strong>IEEE Xplore compliant PDF format (*.pdf)</strong>. Failure to do so may result in the rejection of the paper.</li>
                            <li>Type 3 fonts (bitmaps) will not be accepted. Authors can use the IEEE PDF eXpress to generate compliant PDF Files for final submission.</li>
                        </ul>

                        <h2 className="text-2xl font-bold text-slate-800 mb-4 pb-2 border-b border-slate-100 mt-10">Paper Upload</h2>
                        <p className="mb-4 text-base">All papers must be submitted in PDF or as a Microsoft Word Document via Microsoft Conference Management Toolkit (CMT).</p>
                        <p className="mb-4 text-base">The submitting authors may be required to create a Microsoft CMT account before uploading the paper. While uploading, the authors should provide the <strong>title of the paper</strong>, an <strong>abstract of no more than 250 words</strong> and <strong>keywords</strong> in the respective text boxes.</p>
                        <p className="mb-8 text-base">Please note that all accepted papers that are registered and presented in the conference will be sent for possible inclusion in IEEE Xplore. The authors must agree to the IEEE copyright conditions and sign the IEEE copyright form as part of the online submission process. All submitted papers will be peer reviewed by the Technical Program Committees (TPC).</p>

                        <h2 className="text-2xl font-bold text-slate-800 mb-4 pb-2 border-b border-slate-100 mt-10">General Guidelines and Policies</h2>
                        <ul className="space-y-6 text-base">
                            <li>
                                <strong>Important Instructions:</strong> INCIP 2026 invites original research contribution. Papers must be submitted on or before the last date. After this deadline, authors will not be able to register new papers. While submitting, include at least one primary area. Authors are requested to remove author information from the manuscript for review. Once you submit your paper, you will be assigned a unique paper ID. quote that ID in all communications.
                            </li>
                            <li>
                                <strong>Confidentiality:</strong> The review process is strictly confidential. Misuse of confidential information is a severe professional failure and appropriate measures will be taken.
                            </li>
                            <li>
                                <strong>Review Process:</strong> Papers will be peer reviewed by our expert reviewers after checking for plagiarism from a plagiarism checking software (preferably "Turnitin"). Papers with more than 30% similarity index will be summarily rejected without review. For final camera-ready submission, the similarity index must be below 15%.
                            </li>
                            <li>
                                <strong>Plagiarism:</strong> Plagiarism consists of wrong appropriation of someone's content, thoughts, ideas by representing as one's original work. Papers having more than 20% plagiarized text will not be processed, hence they will be summarily rejected.
                            </li>
                            <li>
                                <strong>Dual/Double Submissions:</strong> By submitting a manuscript to the conference, authors acknowledge that it has not been previously published or accepted for publication in substantially similar form in any peer-reviewed venue. Violation of any of these conditions will lead to rejection.
                            </li>
                            <li>
                                <strong>Attendance responsibilities:</strong> If the paper is accepted, at least one of the authors will register for the conference and present the paper. Acceptance of a paper does not claim for final publication. Only presented papers will be forwarded to our publication partner. Presenters will be provided a certificate of paper presentation.
                            </li>
                            <li>
                                <strong>Publication:</strong> All accepted and presented papers will be submitted for publication to our publication partner. Keep visiting conference website for more updates regarding publication details.
                            </li>
                            <li>
                                <strong>Publicity on Social Media:</strong> Papers submitted to the conference must not be publicized in social media/press until official acceptance notifications are available with the authors from conference committee via CMT Portal. Violations may result in the paper being rejected or removed from the conference proceedings. <br/><a href="https://incip.in/index.php/paper-submission/" className="text-primary hover:underline text-sm font-semibold mt-2 inline-block" target="_blank" rel="noopener noreferrer">Source Reference</a>
                            </li>
                        </ul>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
