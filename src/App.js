import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import ServiceLayout from './Pages/ServicesDetails/ServiceLayout';

const Home = lazy(() => import('./Pages/Home'));
const Services = lazy(() => import('./Pages/Services'));
const Apropos = lazy(() => import('./Pages/Apropos'));
const Ressources = lazy(() => import('./Pages/Ressources'));
const Consultation = lazy(() => import('./Pages/Consultation'));
const JeMeLance = lazy(() => import('./Pages/JeMeLance'));
const CreateEntrepriseForm = lazy(() => import('./Pages/CreateEntrepriseForm'));
const NotFound = lazy(() => import('./Pages/NotFound'));
const MentionsLegales = lazy(() => import('./Pages/MentionsLegales'));
const Confidentialite = lazy(() => import('./Pages/Confidentialite'));

const ComptaCard = lazy(() => import('./Pages/ServicesDetails/ComptaCard'));
const FiscalCard = lazy(() => import('./Pages/ServicesDetails/FiscalCard'));
const CreationCard = lazy(() => import('./Pages/ServicesDetails/CreationEntrepriseCard'));
const GestionCard = lazy(() => import('./Pages/ServicesDetails/GestionCard'));
const JuridiqueCard = lazy(() => import('./Pages/ServicesDetails/JuridiqueCard'));
const SocialCard = lazy(() => import('./Pages/ServicesDetails/SocialCard'));
const FormationsCard = lazy(() => import('./Pages/ServicesDetails/FormationCard'));
const Paie = lazy(() => import('./Pages/ServicesDetails/Paie'));

const Loader = () => (
  <div className="page-loader" role="status" aria-label="Chargement">
    <span />
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <a href="#contenu" className="skip-link">Aller au contenu</a>
      <Navbar />
      <main id="contenu">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/apropos" element={<Apropos />} />
            <Route path="/ressources" element={<Ressources />} />
            <Route path="/consultation" element={<Consultation />} />
            <Route path="/contact" element={<JeMeLance />} />
            <Route path="/creation-entreprise" element={<CreateEntrepriseForm />} />

            <Route element={<ServiceLayout />}>
              <Route path="/comptabilite" element={<ComptaCard />} />
              <Route path="/conseil-fiscal" element={<FiscalCard />} />
              <Route path="/service-creation-entreprise" element={<CreationCard />} />
              <Route path="/paie" element={<Paie />} />
              <Route path="/conseil-gestion" element={<GestionCard />} />
              <Route path="/conseil-juridique" element={<JuridiqueCard />} />
              <Route path="/prestation-sociale" element={<SocialCard />} />
              <Route path="/formations" element={<FormationsCard />} />
            </Route>

            <Route path="/mentions-legales" element={<MentionsLegales />} />
            <Route path="/confidentialite" element={<Confidentialite />} />
            <Route path="/aide"element={<Navigate to="/contact" replace />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
