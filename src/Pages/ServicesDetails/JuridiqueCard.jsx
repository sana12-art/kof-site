import React from "react";
import "./ServiceDetail.css"; 

const JuridiqueCard = () => {
  return (
    <div className="service-cards">
      <h1>Service : Conseil Juridique</h1>
      <p>
        Le droit des affaires évolue constamment. Nous vous assurons une conformité juridique
        optimale et vous défendons dans vos démarches contractuelles ou contentieuses.
      </p>

      <h2>Prestations proposées</h2>
      <ul>
        <li>Rédaction de contrats</li>
        <li>Conseil en droit des sociétés</li>
        <li>Assistance en cas de litige</li>
      </ul>

      <h2>Avantage</h2>
      <p>Accès à la justice : permet aux personnes à faibles revenus de faire valoir leurs droits. Équité : assure que le système judiciaire est accessible à tous, indépendamment des ressources financières.</p>
    </div>
  );
};

export default JuridiqueCard;