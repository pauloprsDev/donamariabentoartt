import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Fecha o menu quando a rota muda
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Impede rolagem quando o menu está aberto
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [menuOpen]);

  return (
    <>
      <div className="video-banner" aria-hidden="true">
        <video autoPlay muted loop playsInline>
          <source src={`${import.meta.env.BASE_URL}banner1.mp4`} type="video/mp4" />
          Seu navegador não suporta vídeos HTML5.
        </video>
        <div className="banner-overlay">
          
        </div>
      </div>
      
      <nav className="navbar" role="navigation" aria-label="Menu principal">
        <div className="nav-content">
          <button 
            className="menu-button" 
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="nav-menu"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
          
          <div 
            className={`nav-links ${menuOpen ? 'active' : ''}`} 
            id="nav-menu"
            aria-hidden={!menuOpen}
          >
            <Link to="/" className="nav-link" aria-current={location.pathname === '/' ? 'page' : undefined}>
              Início
            </Link>
            <Link to="/about" className="nav-link" aria-current={location.pathname === '/about' ? 'page' : undefined}>
              Sobre
            </Link>
            <Link to="/products" className="nav-link" aria-current={location.pathname === '/products' ? 'page' : undefined}>
              Produtos
            </Link>
            <Link to="/contact" className="nav-link" aria-current={location.pathname === '/contact' ? 'page' : undefined}>
              Contato
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;