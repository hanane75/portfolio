import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Logo" />
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <nav className="nav">
        <ul className={isOpen ? 'active' : ''}>
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              onClick={toggleMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              onClick={toggleMenu}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="services"
              smooth={true}
              duration={500}
              onClick={toggleMenu}
            >
              Services
            </Link>
          </li>
          <li>
            <a
              href={`${process.env.PUBLIC_URL}/cv-salhi-hanane.pdf`}
              target="_blank"
              rel="noopener noreferrer"
            >
              CV
            </a>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
