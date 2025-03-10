/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaShoppingBag, FaSearch } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import '../styles/Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="video-background">
        <video autoPlay muted loop playsInline className="banner-video">
          <source src={`${import.meta.env.BASE_URL}banner1.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay"></div>
      </div>
      
      
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="navbar-links-container"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="navbar-links">
              <Link 
                to="/" 
                className={location.pathname === '/' ? 'active' : ''}
                onClick={toggleMenu} // Close menu when link is clicked
              >
                Inicio
              </Link>
              <Link 
                to="/products" 
                className={location.pathname === '/products' ? 'active' : ''}
                onClick={toggleMenu}
              >
                Produtos
              </Link>
              <Link 
                to="/about" 
                className={location.pathname === '/about' ? 'active' : ''}
                onClick={toggleMenu}
              >
                Nossa História
              </Link>
              <Link 
                to="/contact" 
                className={location.pathname === '/contact' ? 'active' : ''}
                onClick={toggleMenu}
              >
                Contato
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className="main-nav-links">
        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
          Inicio
        </Link>
        <Link to="/products" className={location.pathname === '/products' ? 'active' : ''}>
          Produtos
        </Link>
        <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
          Nossa História
        </Link>
        <Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''}>
          Contato
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;