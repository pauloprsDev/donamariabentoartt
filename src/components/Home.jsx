/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import PageTransition from './PageTransition';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();
  
  // Collections data
  const collections = [
    {
      id: 1,
      title: "Coleção Frases",
      description: "Panos de prato com mensagens inspiradoras e motivacionais para alegrar seu dia",
      image: "melembro.jpg",
      link: "/products?category=frases"
    },
    {
      id: 2,
      title: "Coleção Fazenda",
      description: "Peças com temas rústicos e campestres, trazendo o aconchego do campo para sua casa",
      image: "cozinhareamar.jpg",
      link: "/products?category=fazenda"
    },
    {
      id: 3,
      title: "Coleção Chá e Café",
      description: "Produtos elegantes para momentos de pausa, com motivos que celebram o ritual do café",
      image: "coisas_boas_acontecem.jpg",
      link: "/products?category=cha-cafe"
    },
    {
      id: 4,
      title: "Coleção Flores",
      description: "Delicadas flores pintadas à mão em tecidos especiais, trazendo a natureza para dentro de casa",
      image: "floral.jpg",
      link: "/products?category=flores"
    }
  ];
  
  // Handle collection navigation
  const handleCollectionClick = (e, categoryLink) => {
    e.preventDefault();
    navigate(categoryLink);
    window.scrollTo(0, 0);
  };
  
  // Handle navigation
  const handleLearnMoreClick = (e) => {
    e.preventDefault();
    navigate('/about');
    window.scrollTo(0, 0);
  };
  
  return (
    <PageTransition>
      <main className="home">
        {/* Video Banner Section */}
        <section className="video-banner">
          <div className="video-container">
            <video 
              autoPlay 
              muted 
              loop 
              playsInline
              className="banner-video"
              poster={`${import.meta.env.BASE_URL}banner-poster.jpg`}
            >
              <source src={`${import.meta.env.BASE_URL}banner1-compressed.mp4`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="banner-overlay">
              <h1>Dona Maria Bento</h1>
              <p>Arte em tecido feita com amor</p>
            </div>
          </div>
        </section>

        {/* Collections Section */}
        <section className="collections-section">
          <div className="section-header">
            <h2 className="collections-title">Nossas Coleções</h2>
            <p className="collections-subtitle">Conheça nossas linhas de produtos feitos com amor e dedicação</p>
          </div>
          
          <div className="collections-grid">
            {collections.map((collection, index) => (
              <motion.div
                key={collection.id}
                className="collection-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + index * 0.1 }}
              >
                <img 
                  src={`${import.meta.env.BASE_URL}${collection.image}`} 
                  alt={collection.title} 
                  className="collection-image"
                  loading="lazy"
                />
                <div className="collection-content">
                  <h3 className="collection-title">{collection.title}</h3>
                  <p className="collection-description">{collection.description}</p>
                  <Link 
                    to={collection.link} 
                    className="collection-link"
                    onClick={(e) => handleCollectionClick(e, collection.link)}
                  >
                    Ver coleção <span aria-hidden="true">→</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </PageTransition>
  );
};

export default Home;