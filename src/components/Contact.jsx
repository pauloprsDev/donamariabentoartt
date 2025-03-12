/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import PageTransition from './PageTransition';
import './Contact.css';

const Contact = () => {
  return (
    <PageTransition>
      <motion.div 
        className="contact-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="contact-header">
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Entre em Contato
          </motion.h1>
          <motion.p
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="contact-subtitle"
          >
            Estamos ansiosos para ouvir você e responder suas dúvidas
          </motion.p>
        </div>

        <div className="contact-content-centered">
          <motion.div 
            className="contact-info-centered"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <div className="info-cards-container" role="list" aria-label="Informações de contato">
              <div className="info-card" role="listitem">
                <div className="info-icon" aria-hidden="true">
                  <FaEnvelope />
                </div>
                <h3 id="email-title">Email</h3>
                <p>
                  <a 
                    href="mailto:contato@donamariabentoart.com" 
                    aria-labelledby="email-title"
                  >
                    contato@donamariabentoart.com
                  </a>
                </p>
              </div>
              
              <div className="info-card" role="listitem">
                <div className="info-icon" aria-hidden="true">
                  <FaInstagram />
                </div>
                <h3 id="instagram-title">Instagram</h3>
                <p>
                  <a 
                    href="https://instagram.com/donamariabentoart" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-labelledby="instagram-title"
                  >
                    @donamariabentoart
                  </a>
                </p>
              </div>
              
              <div className="info-card" role="listitem">
                <div className="info-icon" aria-hidden="true">
                  <FaWhatsapp />
                </div>
                <h3 id="whatsapp-title">WhatsApp</h3>
                <p>
                  <a 
                    href="https://wa.me/5511999999999" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-labelledby="whatsapp-title"
                  >
                    (11) 99999-9999
                  </a>
                </p>
              </div>
            </div>
            
            <div className="contact-image-wrapper">
              <div className="contact-image loading">
                <picture>
                  <source 
                    srcSet={`${import.meta.env.BASE_URL}floral.webp`} 
                    type="image/webp" 
                  />
                  <img 
                    src={`${import.meta.env.BASE_URL}floral.jpg`} 
                    alt="Pano de prato floral pintado à mão com detalhes em tons de rosa e verde" 
                    loading="lazy"
                    onLoad={(e) => {
                      e.target.classList.add('loaded');
                      e.target.parentElement.parentElement.classList.remove('loading');
                    }}
                  />
                </picture>
              </div>
              <div className="image-caption" aria-hidden="true">
                Arte feita com carinho e dedicação
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </PageTransition>
  );
};

export default Contact;