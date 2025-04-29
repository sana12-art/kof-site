import React, { useState } from 'react';
import '../components/Navbar.css';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="dropdown">
      <button className="dropdown-button" onClick={toggleDropdown}>
        Création d’entreprise <span className="arrow">&#9662;</span>
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          <li>Création d'entreprise</li>
          <li>Création entreprise SASU</li>
          <li>Création entreprise EURL</li>
          <li>Création entreprise SARL</li>
          <li>Création entreprise SAS</li>
          <li>Créer mon entreprise</li>
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
