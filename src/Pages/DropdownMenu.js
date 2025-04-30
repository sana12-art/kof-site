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
    </div>
  );
};

export default DropdownMenu;
