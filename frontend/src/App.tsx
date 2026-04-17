import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import ScrollToTop from "./components/ui/ScrollToTop";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CallForPapersPage from "./pages/CallForPapersPage";
import CommitteePage from "./pages/CommitteePage";
import TimelinePage from "./pages/TimelinePage";
import PaperSubmissionsPage from "./pages/PaperSubmissionsPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";
import RegistrationPage from "./pages/RegistrationPage";
import OrganizingCommitteePage from "./pages/OrganizingCommitteePage";
import TechnicalProgramCommitteePage from "./pages/TechnicalProgramCommitteePage";
import AdvisoryCommitteePage from "./pages/AdvisoryCommitteePage";
import PreviousEdition2025Page from "./pages/PreviousEdition2025Page";

function App() {
  return (
    <>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/call-for-papers" element={<CallForPapersPage />} />
          <Route path="/paper-submissions" element={<PaperSubmissionsPage />} />
          <Route path="/committee" element={<CommitteePage />} />
          <Route path="/timeline" element={<TimelinePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/committee/organizing-committee" element={<OrganizingCommitteePage />} />
          <Route path="/committee/technical-program-committee" element={<TechnicalProgramCommitteePage />} />
          <Route path="/committee/advisory-committee" element={<AdvisoryCommitteePage />} />
          <Route path="/previous-edition/incip-2025" element={<PreviousEdition2025Page />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
