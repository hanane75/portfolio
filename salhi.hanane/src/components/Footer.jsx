import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="social-icons">
      <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="icon-container">
          <FaLinkedinIn className="icon linkedin-icon" />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="icon-container">
          <FaFacebookF className="icon facebook-icon" />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noreferrer" className="icon-container">
          <FaTwitter className="icon twitter-icon" />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="icon-container">
          <FaInstagram className="icon instagram-icon" />
        </a>
       
      </div>
    </footer>
  );
};

export default Footer;
