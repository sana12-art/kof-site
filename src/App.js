import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Consultation from './Pages/Consultation';
import Apropos from './Pages/Apropos';
<<<<<<< HEAD
=======
import JeMeLance from './Pages/JeMeLance';
>>>>>>> 6180aa15309943c8f93d3b7a776b88cf56582ef9
import Login from './Pages/Login';
import Logout from './Pages/Logout';
import Register from './Pages/Register';
import DropdownMenu from './Pages/DropdownMenu'; 
import CreateEntrepriseForm from './Pages/CreateEntrepriseForm';
import Aide from './Pages/Aide';
import SmileYourPlanet from './Pages/SmileYourPlanet';
import Webinar from './Pages/Webinar';
import Presse from './Pages/Presse';
import Post1 from './Pages/Post1';  
import Post2 from './Pages/Post2';  
import Post3 from './Pages/Post3';  
import ComptaCard from "./Pages/ServicesDetails/ComptaCard";
import FiscalCard from "./Pages/ServicesDetails/FiscalCard";
import CreationCard from "./Pages/ServicesDetails/CreationEntrepriseCard";
import GestionCard from "./Pages/ServicesDetails/GestionCard";
import JuridiqueCard from "./Pages/ServicesDetails/JuridiqueCard";
import SocialCard from "./Pages/ServicesDetails/SocialCard";
import FormationsCard from "./Pages/ServicesDetails/FormationCard";
import Paie from "./Pages/ServicesDetails/Paie";
<<<<<<< HEAD
import Ressources from './Pages/Ressources';
=======

>>>>>>> 6180aa15309943c8f93d3b7a776b88cf56582ef9




function App() {
  return (
      <Router>
        <Navbar/>
          <Routes>
<<<<<<< HEAD
          <Route path="/ressources" element={<Ressources />} />
=======
>>>>>>> 6180aa15309943c8f93d3b7a776b88cf56582ef9
          <Route path="/blog/post1" component={Post1} />
          <Route path="/blog/post2" component={Post2} />
          <Route path="/blog/post3" component={Post3} />
          <Route path="/aide" element={<Aide />} />
          <Route path="/smile-your-planet" element={<SmileYourPlanet />} />
          <Route path="/webinar" element={<Webinar />} />
          <Route path="/presse" element={<Presse />} />
          <Route path="/creation-entreprise" element={<CreateEntrepriseForm />} />
          <Route path="/dropdownmenu" element={<DropdownMenu/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<Register />} />
<<<<<<< HEAD
=======
          <Route path="/contact" element={<JeMeLance />} />
>>>>>>> 6180aa15309943c8f93d3b7a776b88cf56582ef9
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/" element={<Home/>}></Route>
          <Route path="/services" element={<Services/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/apropos" element={<Apropos />} />
          <Route path="/" element={<Services />} />
          <Route path="/comptabilite" element={<ComptaCard />} />
          <Route path="/conseil-fiscal" element={<FiscalCard />} />
          <Route path="/creation-entreprise" element={<CreationCard />} />
          <Route path="/paie" element={<Paie />} />
          <Route path="/conseil-gestion" element={<GestionCard />} />
          <Route path="/conseil-juridique" element={<JuridiqueCard />} />
          <Route path="/prestation-sociale" element={<SocialCard />} />
          <Route path="/formations" element={<FormationsCard />} />
        </Routes>
        <Footer/>
      </Router>
  );
}

export default App;
