import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Consultation from './Pages/Consultation';
import Apropos from './Pages/Apropos';
import JeMeLance from './Pages/JeMeLance';
import Login from './Pages/Login';
import Logout from './Pages/Logout';
import Register from './Pages/Register';
import CreerSasu from './Pages/CreerSasu';
import CreerEurl from './Pages/CreerEurl';
import CreerSarl from './Pages/CreerSarl';
import CreerSas from './Pages/CreerSas';
import CreerMonEntreprise from './Pages/CreerMonEntreprise';
import DropdownMenu from './Pages/DropdownMenu'; 




function App() {
  return (
      <Router>
        <Navbar/>
          <Routes>
          <Route path="/dropdownmenu" element={<DropdownMenu/>} />
          <Route path="/creer-sasu" element={<CreerSasu />} />
          <Route path="/creer-eurl" element={<CreerEurl />} />
          <Route path="/creer-sarl" element={<CreerSarl />} />
          <Route path="/creer-sas" element={<CreerSas />} />
          <Route path="/creer-mon-entreprise" element={<CreerMonEntreprise />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<JeMeLance />} />
          <Route path="/consultation" element={<Consultation />} />
          <Route path="/" element={<Home/>}></Route>
          <Route path="/services" element={<Services/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/apropos" element={<Apropos />} />
        </Routes>
        <Footer/>
      </Router>
  );
}

export default App;
