import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/scss/_03-Componentes/_HeroBanner.scss";

const HeroBanner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const heroImages = [
    { img: "/img/bar-90s-1.jpg", alt: "Interior del bar años 90" },
    { img: "/img/bar-90s-2.jpg", alt: "Concierto en vivo en el bar" },
    { img: "/img/bar-90s-3.jpg", alt: "Tragos especiales del bar" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => 
        prev === heroImages.length - 1 ? 0 : prev + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section className="hero-banner">
      {/* Slideshow de fondo */}
      <div className="hero-slideshow">
        {heroImages.map((image, index) => (
          <div 
            key={image.img}
            className={`hero-slide ${index === currentImageIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image.img})` }}
            aria-label={image.alt}
            role="img"
          />
        ))}
      </div>
      
      {/* Overlay para mejor contraste */}
      <div className="hero-overlay"></div>
      
      {/* Contenido principal */}
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="title-part-1">90's</span>
            <span className="title-part-2">BAR</span>
          </h1>
          
          <p className="hero-subtitle">
            Revive la mejor década en el corazón de Mar del Plata.<br /> 
            Música, tragos y ambiente auténtico de los años 90.
          </p>
          
          <div className="hero-buttons">
            <Link to="/menu" className="hero-btn primary">
              Ver nuestra carta
            </Link>
            <Link to="/eventos" className="hero-btn secondary">
              Próximos eventos
            </Link>
          </div>
        </div>
        
        {/* Indicadores de slides */}
        <div className="slide-indicators">
          {heroImages.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentImageIndex ? 'active' : ''}`}
              onClick={() => setCurrentImageIndex(index)}
              aria-label={`Ir a imagen ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;