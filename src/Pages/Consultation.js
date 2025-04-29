import React from 'react';
import './Consultation.css';
import homme from '../assets/homme.svg'; 
import { FaFacebookF, FaXTwitter, FaInstagram } from 'react-icons/fa6';

const Consultation = () => {
    return (
        <div className="consultation-container">
            <div className="consultation-columns">
                <div className="consultation-text">
                <h1>Vous avez un projet ? <br/>Contactez-nous pour  <br/>planifier votre <br/> première  <br/>consultation <br/> gratuite !</h1>
                <p>
                    Nous sommes heureux de vous offrir une consultation <br/> initiale gratuite. 
                    C’est l’occasion idéale pour discuter de vos <br/> besoins en entreprise et découvrir 
                    comment nos services <br/> peuvent vous aider à atteindre vos objectifs.Que vous<br/>  cherchiez des conseils, une formation sur mesure ou une <br/> stratégie d’affaires, notre première rencontre est un pas<br/> vers votre réussite.
                </p>
                </div>

                <form className="consultation-form">
                <label>Service souhaité :</label>

                <select>
                
                    <option>Comptabilité</option>
                    <option>Conseil en gestion</option>
                    <option>Conseil fiscal</option>
                    <option>Création d’entreprise</option>         
                    <option>Conseil Financier</option>
                    <option>Conseil Juridique</option>
                    <option>RH et Conseil Social</option>
                    <option>Formations</option>
                    <option>Accompagnement sur mesure</option>

                </select>

                <label>Nom :</label>
                <input type="text" placeholder="Nom" required />

                <label>Email :</label>
                <input type="email" placeholder="Adresse e-mail" required />

                <label>Téléphone :</label>
                <input type="tel" placeholder="Numéro de téléphone" required />

                <label>Date et heure préférées :</label>
                <input type="datetime-local" />

                <label>Questions spécifiques :</label>
                <textarea rows="4" placeholder="Vos questions..."></textarea>

                <div className="checkbox-container">
                    <input className='box'type="checkbox" id="acceptData" name="acceptData" />
                    <label htmlFor="acceptData">J'accepte que mes données soient collectées.</label>
                </div>

                <button type="submit">Envoyer ma demande</button>
                </form>
            </div>

          
            <div className="consultation-image">
                <img src={homme} alt="Homme vecteur" />
            </div>

           
            <div className="consultation-contact">
                <h1>Pour toutes questions avant votre consultation gratuite, ou si vous avez besoin d’aide pour la réservation, n’hésitez pas à nous contacter</h1>
                <div data-number="01">
                    <span>01 53 10 32 06</span>
                </div>
                <div data-number="02">
                    <span> 60 Rue de La Jonquière, 75017 Paris</span>
                </div>
                <div data-number="03">
                    <span>contact@kof-experts.ma</span>
                </div>
            </div>
            
            <footer className="site-footer">
                <div className="footer-content">
                    <div className="footer-left">
                    <h2>Conseils personnalisés, <br />Réussites partagées</h2>
                    <div className="footer-links">
                        <a href="/">Accueil</a>
                        <a href="/services">Services</a>
                        <a href="/contact">Contact</a>
                        <a href="/decouvrir">Découvrez Dynom</a>
                    </div>
                    </div>

                    <div className="social-icons">
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaXTwitter /></a>
                        <a href="#"><FaInstagram /></a>
                    </div>
                </div>

                <hr />

                <p className="footer-bottom">
                    Crafted, Designed, And Developed With Care By <strong>ARTIFIVE</strong>
                </p>
            </footer>



        </div>
        
        
        
            
            

    );
};
export default Consultation;






            

            