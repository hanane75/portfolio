import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Logo" />
    
      </div>
      <nav className="nav">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#Projects">Projects</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#cv">CV</a></li>
        </ul>
      </nav>
      <div className="contact-button">
        <a href="#contact" className="btn-contact">CONTACT</a>
      </div>
    </header>
  );
};

export default Header;
