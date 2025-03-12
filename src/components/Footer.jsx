import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram,  } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  // Function to scroll to top when a link is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="footer">
      <div className="footer-border-top"></div>
      <div className="footer-content">
        <div className="footer-links">
          <Link to="/" className="footer-link" onClick={scrollToTop}>Início</Link>
          <Link to="/about" className="footer-link" onClick={scrollToTop}>Sobre</Link>
          <Link to="/products" className="footer-link" onClick={scrollToTop}>Produtos</Link>
          <Link to="/contact" className="footer-link" onClick={scrollToTop}>Contato</Link>
        </div>
        
        <div className="footer-info">
          <img 
            src={`${import.meta.env.BASE_URL}logo.webp`} 
            alt="Dona Maria Bento Ateliê" 
            className="footer-logo"
          />
          
          <div className="social-links">
            <a 
              href="https://instagram.com/donamariabentoart" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-link"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            
            
          </div>
          
          <p className="copyright">
            &copy; {new Date().getFullYear()} Dona Maria Bento Ateliê. Todos os direitos reservados.
          </p>
        </div>
      </div>
      <div className="footer-border-bottom"></div>
    </footer>
  );
};

export default Footer;