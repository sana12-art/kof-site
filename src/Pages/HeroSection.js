// src/components/HeroSection.js
import React from 'react';
import './HeroSection.css';
import heroImage from '../assets/aee7a1c2-7fd4-475b-8199-a7c33e6fed60.png';

const HeroSection = () => {
    return (
        <section className="hero-section">
            <div className="hero-left">
                <h1>Parlons de <span className="highlight">votre activité</span></h1>
                <p>Un accompagnement personnalisé pour la création ou la gestion de votre entreprise.</p>
                <ul className="hero-benefits">
                    <li>✅ Une réponse rapide</li>
                    <li>✅ +10 000 clients accompagnés</li>
                    <li>✅ Conseil fiscal et comptable inclus</li>
                </ul>
            </div>
            <div className="hero-right">
                <img src={heroImage} alt="Illustration accueil" />
            </div>
        </section>
    );
};

export default HeroSection;
