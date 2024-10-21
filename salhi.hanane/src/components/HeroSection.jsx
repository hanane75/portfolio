import React, { useState, useEffect } from 'react';
import { FaReact, FaCss3Alt, FaJsSquare } from 'react-icons/fa';

function HeroSection() {
  const [displayedText, setDisplayedText] = useState("");
  const fullText = " Une développeuse web passionnée. Mon objectif est de créer des expériences utilisateur captivantes et fonctionnelles !";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1));
      index++;
      if (index >= fullText.length) {
        clearInterval(interval);
      }
    }, 100); // Change la vitesse ici (100 ms par lettre)

    return () => clearInterval(interval); // Nettoie l'intervalle
  }, [fullText]);

  return (
    <section className="hero-container">
      <div className="hero-content">
        <p className="subheading">Tu me connais ?</p>
        <h1>👋 Je suis Hanane SALHI</h1>
        <p className="hero-description">{displayedText}</p>
        <button className="btn bg-primary text-white bg-hover-primary">Contactez-moi</button>
      </div>

      <div className="hero-image-container">
        <img
          src={`${process.env.PUBLIC_URL}/photoProfil.jpg`}
          alt="SALHI Hanane"
          className="profile-image"
        />

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
    </section>
  );
}

export default HeroSection;
