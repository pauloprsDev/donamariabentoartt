/* eslint-disable no-undef */
// ... código existente ...

<section className="collections-section">
  <div className="section-header">
    <h2 className="collections-title">Nossas Coleções</h2>
    <p className="collections-subtitle">Conheça nossas linhas de produtos feitos com amor e dedicação</p>
    
    {/* Logo com efeito de flores separado das coleções */}
    <div className="flower-logo-container">
      <img 
        src={`${import.meta.env.BASE_URL}logo-flowers.png`} 
        alt="Logo Dona Maria Bento com decoração floral" 
        className="flower-logo"
      />
    </div>
  </div>
  
  <div className="collections-grid products-style">
    {collections?.map((collection, index) => (
      <motion.div
        key={collection.id}
        className="collection-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 + index * 0.1 }}
        whileHover={{ 
          y: -5, 
          boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
          transition: { duration: 0.3 } 
        }}
      >
        <div className="collection-image-container">
          <img 
            src={`${import.meta.env.BASE_URL}${collection.image}`} 
            alt={collection.title} 
            className="collection-image"
            loading="lazy"
          />
        </div>
        <div className="collection-content">
          <h3 className="collection-title">{collection.title}</h3>
          <p className="collection-description">{collection.description}</p>
          <Link to={collection.link} className="collection-link">
            Ver coleção <span aria-hidden="true">→</span>
          </Link>
        </div>
      </motion.div>
    ))}
  </div>
</section>

// ... código existente ...