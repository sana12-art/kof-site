import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import logo from '../assets/logo.png';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

 const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch('http://localhost:5000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (response.ok && data.success) {
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/');
    } else {
      alert(data.message || 'Identifiants incorrects');
    }
  } catch (error) {
    console.error('Erreur de connexion:', error);
    alert('Erreur serveur lors de la connexion');
  }
};
 



  const handleRegister = () => {
    navigate('/register'); // Redirige vers la page d'inscription
  };

  return (
    <div className="login-container">
      <img src={logo} alt="KOF Logo" className="logo" />
      <h2>Connexion</h2>
      <form onSubmit={handleLogin}>
        <input 
          type="email" 
          placeholder="Email" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input 
          type="password" 
          placeholder="Mot de passe" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Se connecter</button>
      </form>

    </div>
  );
}

export default Login;
