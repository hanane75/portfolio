import React from 'react';
import { FaCode, FaMobileAlt, FaLaptopCode, FaTools } from 'react-icons/fa'; // Import des icônes spécifiques


const Services = () => {
  return (
    <section id="services" className="services">
      <h2 className='skills-title'>{" < Mes Services >"}</h2>
      <div className="services-container">
        <div className="service-item">
          <FaCode className="service-icon" />
          <h3>Création de Sites Web et Landing Pages</h3>
          <p>Conception sur mesure, quelle que soit la complexité</p>
        </div>
        <div className="service-item">
          <FaMobileAlt className="service-icon" />
          <h3>Design Adaptatif</h3>
          <p>Optimisé pour tous les navigateurs et appareils</p>
        </div>
        <div className="service-item">
          <FaLaptopCode className="service-icon" />
          <h3>Développement Frontend</h3>
          <p>Programmation et intégration de solutions modernes</p>
        </div>
        <div className="service-item">
          <FaTools className="service-icon" />
          <h3>Mise à jour et Adaptation</h3>
          <p>Réparation et amélioration de designs existants</p>
        </div>
      </div>
     
    </section>
  );
};

export default Services;
