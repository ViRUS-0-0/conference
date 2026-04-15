import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import ScrollToTop from "./components/ui/ScrollToTop";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CallForPapersPage from "./pages/CallForPapersPage";
import PeoplePage from "./pages/PeoplePage";
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
          <Route path="/people" element={<PeoplePage />} />
          <Route path="/timeline" element={<TimelinePage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/people/organizing-committee" element={<OrganizingCommitteePage />} />
          <Route path="/people/technical-program-committee" element={<TechnicalProgramCommitteePage />} />
          <Route path="/people/advisory-committee" element={<AdvisoryCommitteePage />} />
          <Route path="/previous-edition/incip-2025" element={<PreviousEdition2025Page />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
