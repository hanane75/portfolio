import React from 'react';
import { FaFacebookF, FaLinkedinIn ,  FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-container">
      <p>Mes réseaux sociaux </p>
      <div className="social-icons">
        
      <a href="https://www.linkedin.com/in/hanane-salhi-81194b2ab/" target="_blank" rel="noreferrer" aria-label="linkedin de Hanane Salhi" className="icon-container">
          <FaLinkedinIn className="icon linkedin-icon" />
        </a>
        <a href="https://www.facebook.com/profile.php?id=61565869227101" target="_blank" rel="noreferrer"  aria-label="facebook de Hanane Salhi" className="icon-container">
          <FaFacebookF className="icon facebook-icon" />
        </a>
        <a href="https://github.com/hanane75" target="_blank" rel="noreferrer"  aria-label="GitHub de Hanane Salhi" className="icon-container">
          <FaGithub className="icon github-icon " />
        </a>
        {/***<a href="https://www.instagram.com" target="_blank" rel="noreferrer"  aria-label="Instagram de Hanane Salhi" className="icon-container">
          <FaInstagram className="icon instagram-icon" />
        </a>***/}
       
      </div>
      <p>SALHI Hanane : tous droits réservés</p>
    </footer>
  );
};

export default Footer;
