import React from "react";
import "./ServiceDetail.css"; 

const Paie = () => {
    return(
        <div className="service-cards">
            <h1>Gestion de Paie</h1>
            <p>
                Nous gérons intégralement vos bulletins de salaire et déclarations sociales
                pour vous libérer des contraintes administratives.
            </p>
            <ul>
                <li>Édition des bulletins</li>
                <li>Déclarations URSSAF</li>
                <li>Conformité légale</li>
            </ul>
        </div>
    );
};
export default Paie;