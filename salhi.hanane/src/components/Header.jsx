import React, { useState } from 'react';

const Header = () => {
  // État pour gérer l'ouverture/fermeture du menu
  const [isOpen, setIsOpen] = useState(false);

  // Fonction pour basculer l'état du menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Logo" />
        
      </div>

      {/* Icône du menu hamburger */}
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <nav className="nav">
        {/* Appliquer la classe 'active' lorsque le menu est ouvert */}
        <ul className={isOpen ? 'active' : ''}>
          <li><a href="#home">Home</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#services">Services</a></li>
          <li>
            <a href={`${process.env.PUBLIC_URL}/cv-salhi-hanane.pdf`} target="_blank" rel="noopener noreferrer">
              CV
            </a>
          </li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
