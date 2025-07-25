/**
 * COMPONENTE NOSOTROS
 * 
 * Muestra información sobre:
 * - Historia del bar
 * - Equipo del bar
 * - Espacios y ambiente
 */

import React from "react";
import { motion } from "framer-motion";
import "../assets/scss/_03-Componentes/_Nosotros.scss";

const Nosotros = () => {
  // Datos del equipo
  const equipo = [
    {
      id: 1,
      nombre: "Carlos 'Retro' Gómez",
      rol: "Fundador/DJ",
      descripcion: "DJ desde los 90's con una colección de vinilos que haría llorar a cualquier coleccionista.",
      imagen: "/img/team/dj.jpg"
    },
    {
      id: 2,
      nombre: "María 'Mix' López",
      rol: "Bartender Jefe",
      descripcion: "Creadora de nuestros cócteles signature inspirados en los 90's.",
      imagen: "/img/team/bartender.jpg"
    },
    {
      id: 3,
      nombre: "Pablo 'Pixel' Rodríguez",
      rol: "Coordinador de Eventos",
      descripcion: "Experto en recrear la auténtica experiencia arcade de los 90's.",
      imagen: "/img/team/events.jpg"
    }
  ];

  // Áreas del bar
  const areas = [
    {
      id: 1,
      nombre: "Zona Arcade",
      imagen: "/img/areas/arcade.jpg",
      descripcion: "Máquinas retro con los mejores juegos de los 90's. Desde Street Fighter II hasta Pac-Man.",
    },
    {
      id: 2,
      nombre: "Escenario Principal",
      imagen: "/img/areas/stage.jpg",
      descripcion: "Donde las bandas reviven los éxitos de Nirvana, Backstreet Boys y más.",
    },
    {
      id: 3,
      nombre: "Barra Neon",
      imagen: "/img/areas/bar.jpg",
      descripcion: "Nuestra icónica barra iluminada donde servimos los tragos más nostálgicos.",
    }
  ];

  return (
    <section className="nosotros-90s">
      {/* Hero Section */}
      <div className="nosotros-hero">
        <div className="hero-overlay"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <h1 className="title">90's Bar: <span>Donde la nostalgia cobra vida</span></h1>
          <p className="lead">
            Un viaje en el tiempo a la década más vibrante de la música y el entretenimiento.
          </p>
        </motion.div>
      </div>

      {/* Historia Section */}
      <div className="container">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="historia-section"
        >
          <div className="historia-content">
            <h2>Nuestra Historia</h2>
            <div className="divider"></div>
            <p>
              Abrimos nuestras puertas en 2024 con una misión: revivir la auténtica experiencia de los años 90. 
              Desde nuestro icónico logo hasta la selección musical, cada detalle está cuidadosamente diseñado 
              para transportarte a la mejor década.
            </p>
            <p>
              Lo que comenzó como un sueño de tres amigos apasionados por la cultura 90's, hoy es el lugar de 
              encuentro para quienes añoran (o quieren descubrir) la esencia de esta época dorada.
            </p>
          </div>
          <div className="historia-imagen">
            <img src="/img/logo-vintage.png" alt="Fundadores del 90's Bar" />
          </div>
        </motion.div>

        {/* Equipo Section */}
        <div className="equipo-section">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Conoce al Equipo
          </motion.h2>
          <p className="subtitle">Los que hacen posible la magia retro</p>
          
          <div className="equipo-grid">
            {equipo.map((miembro) => (
              <motion.div
                key={miembro.id}
                className="miembro-card"
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: miembro.id * 0.1 }}
              >
                <div className="miembro-imagen">
                  <img src={miembro.imagen} alt={miembro.nombre} />
                  <div className="miembro-overlay">
                    <p>{miembro.descripcion}</p>
                  </div>
                </div>
                <h3>{miembro.nombre}</h3>
                <p className="rol">{miembro.rol}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Áreas Section */}
        <div className="areas-section">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="areas-header"
          >
            <h2>Nuestros Espacios</h2>
            <p className="subtitle">Cada rincón es una experiencia</p>
            <div className="divider"></div>
          </motion.div>

          <div className="areas-grid">
            {areas.map((area) => (
              <motion.div
                key={area.id}
                className="area-card"
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: area.id * 0.1 }}
              >
                <div className="area-imagen">
                  <img src={area.imagen} alt={area.nombre} />
                </div>
                <div className="area-info">
                  <h3>{area.nombre}</h3>
                  <p>{area.descripcion}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Video Section */}
        <div className="video-section">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2>Viví la Experiencia 90's</h2>
            <div className="divider"></div>
            <div className="video-container">
              <iframe 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                title="Tour por el 90's Bar" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;