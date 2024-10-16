import React from 'react';
import { FaReact, FaCss3Alt, FaJsSquare } from 'react-icons/fa';

function HeroSection() {
  return (
    <div className="hero-container">
   <div className="hero-content">
    <p className="subheading">Tu me connais ?</p>
    <h1>👋 Je suis Hanane SALHI </h1>
    <p className="hero-description">
      DEVELOPPEUSE WEB !
    </p>
    <button className="btn-contact">Contactez-moi</button>
  </div>

  <div className="hero-image-container">
            <img src="photoProfil.jpg" alt="SALHI Hanane" className="profile-image" />
            
            {/* Icônes flottantes */}
            <div className="icon React">
                <FaReact /> 
            </div>
            <div className="icon CSS">
                <FaCss3Alt /> 
            </div>

            <div className="icon JS">
                <FaJsSquare /> 
            </div>
        </div>
    </div>
  );
}

export default HeroSection;
