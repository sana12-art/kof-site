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
import DropdownMenu from './Pages/DropdownMenu'; 
import CreateEntrepriseForm from './Pages/CreateEntrepriseForm';






function App() {
  return (
      <Router>
        <Navbar/>
          <Routes>
          <Route path="/creation-entreprise" element={<CreateEntrepriseForm />} />
          <Route path="/dropdownmenu" element={<DropdownMenu/>} />
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
