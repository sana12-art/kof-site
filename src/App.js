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
import Blog from './Pages/Blog';
import Aide from './Pages/Aide';
import SmileYourPlanet from './Pages/SmileYourPlanet';
import Webinar from './Pages/Webinar';
import Presse from './Pages/Presse';
import Post1 from './Pages/Post1';  
import Post2 from './Pages/Post2';  
import Post3 from './Pages/Post3';  





function App() {
  return (
      <Router>
        <Navbar/>
          <Routes>
          <Route path="/blog" element={<Blog />} />
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
