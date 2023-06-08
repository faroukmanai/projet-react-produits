import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
              <a href="#">Accueil</a>
              <a href="#">Produits</a>
              <a href="#">À propos</a>
              <a href="#">Contact</a>
        </div>
        <div className="footer-social">
              <a href="#">
                <FaFacebook />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2023 Farouk Manai. Tous les droits sont réservés.</p>
      </div>
    </footer>
  );
};

export default Footer;
