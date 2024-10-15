import React from 'react';
import { FaReact, FaCss3Alt, FaJsSquare } from 'react-icons/fa';


function HeroSection() {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <p className="subheading">Tu me connais ?</p>
        <h1>👋 Je suis Hanane SALHI</h1>
        <p className="hero-description">DEVELOPPEUSE WEB !</p>
        <button className="btn-contact">Contactez-moi</button>
      </div>

      <div className="hero-image-container">
      <img src={`${process.env.PUBLIC_URL}/photoProfil.jpg`} alt="SALHI Hanane" className="profile-image" />

        {/* Icônes flottantes */}
        <div className="rotate-container">
          <div className="icon icon-js">
            <FaJsSquare size={40} />
          </div>
          <div className="icon icon-react">
            <FaReact size={40} />
          </div>
          <div className="icon icon-css">
            <FaCss3Alt size={40} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
