import React from 'react';
import { FaCode, FaMobileAlt, FaLaptopCode, FaTools } from 'react-icons/fa'; // Import des icônes spécifiques


const Services = () => {
  return (
    <section id="services" className="services">
      <h2>{" < What Do I Do >"}</h2>
      <div className="services-container">
        <div className="service-item">
          <FaCode className="service-icon" />
          <h3>Landing Pages and Websites</h3>
          <p>Design of any complexity</p>
        </div>
        <div className="service-item">
          <FaMobileAlt className="service-icon" />
          <h3>Responsive Layout</h3>
          <p>For all kinds of browsers and devices</p>
        </div>
        <div className="service-item">
          <FaLaptopCode className="service-icon" />
          <h3>Frontend Development</h3>
          <p>And programming</p>
        </div>
        <div className="service-item">
          <FaTools className="service-icon" />
          <h3>Patching and Adaptation</h3>
          <p>Of legacy design</p>
        </div>
      </div>
     
    </section>
  );
};

export default Services;
