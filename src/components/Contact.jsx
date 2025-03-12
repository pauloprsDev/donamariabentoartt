/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaInstagram } from 'react-icons/fa';
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
            <div className="info-cards-container">
              <div className="info-card">
                <div className="info-icon">
                  <FaEnvelope />
                </div>
                <h3>Email</h3>
                <p><a href="mailto:contato@donamariabentoart.com">contato@donamariabentoart.com</a></p>
              </div>
              
              <div className="info-card">
                <div className="info-icon">
                  <FaInstagram />
                </div>
                <h3>Instagram</h3>
                <p><a href="https://instagram.com/donamariabentoart" target="_blank" rel="noopener noreferrer">@donamariabentoart</a></p>
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
                    alt="Dona Maria Bento Art" 
                    loading="lazy"
                    onLoad={(e) => {
                      e.target.classList.add('loaded');
                      e.target.parentElement.parentElement.classList.remove('loading');
                    }}
                  />
                </picture>
              </div>
              <div className="image-caption">
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