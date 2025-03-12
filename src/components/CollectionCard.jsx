/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import './CollectionCard.css';

const CollectionCard = ({ collection }) => {
  return (
    <motion.div 
      className="collection-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <Link to={`/products?collection=${collection.id}`} className="collection-link">
        <div className="collection-image-container">
          <img 
            src={`${import.meta.env.BASE_URL}${collection.image}`} 
            alt={collection.title} 
            className="collection-image"
            loading="lazy"
          />
          <div className="collection-overlay">
            <span className="view-collection-btn">
              Ver Coleção
            </span>
          </div>
        </div>
        <div className="collection-info">
          <h3 className="collection-title">{collection.title}</h3>
          <p className="collection-description">{collection.description}</p>
        </div>
      </Link>
    </motion.div>
  );
};

export default CollectionCard;