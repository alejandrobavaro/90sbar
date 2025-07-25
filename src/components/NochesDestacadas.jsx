import React, { useState } from "react";
import { FiCalendar, FiPlay } from "react-icons/fi";
import "../assets/scss/_03-Componentes/_NochesDestacadas.scss";

function NochesDestacadas() {
  const [eventos] = useState([
    {
      id: 1,
      titulo: "Noche de Karaoke 90s",
      imagen: "/img/events/karaoke-night.jpg",
      fecha: "Viernes 15 Octubre",
      descripcion: "Revive los éxitos pop de los 90s en nuestro escenario. ¡Trae tus amigos y conviértete en una estrella por una noche!",
      destacado: true,
      color: "#5e35b1" // Púrpura
    },
    {
      id: 2,
      titulo: "Torneo de Arcade Retro",
      imagen: "/img/events/arcade-tournament.jpg",
      fecha: "Sábado 23 Octubre",
      descripcion: "Demuestra tus habilidades en Street Fighter II y otros clásicos arcade. Premios para los mejores jugadores.",
      destacado: true,
      color: "#00acc1" // Turquesa
    },
    {
      id: 3,
      titulo: "Fiesta Grunge Night",
      imagen: "/img/events/grunge-night.jpg",
      fecha: "Viernes 5 Noviembre",
      descripcion: "Homenaje a Nirvana, Pearl Jam y Soundgarden con bandas en vivo. Dress code: plaid shirts y converse.",
      destacado: true,
      color: "#ff7043" // Coral
    },
    {
      id: 4,
      titulo: "Pop Party 90s-00s",
      imagen: "/img/events/pop-party.jpg",
      fecha: "Sábado 20 Noviembre",
      descripcion: "Desde Spice Girls hasta Britney Spears. La mejor música pop para bailar toda la noche.",
      destacado: true,
      color: "#69F0AE" // Verde neón
    }
  ]);

  return (
    <section className="featured-events">
      <div className="section-header">
        <h2 className="section-title">
          <span className="title-highlight">Eventos</span> Destacados
        </h2>
        <p className="section-subtitle">
          Vive la auténtica experiencia 90s en nuestro bar
        </p>
      </div>
      
      <div className="events-grid">
        {eventos.map(evento => (
          <div key={evento.id} className="event-card">
            <div className="event-media">
              <img 
                src={evento.imagen} 
                alt={evento.titulo} 
                className="event-image" 
                loading="lazy"
              />
              <div className="event-badge" style={{ backgroundColor: evento.color }}>
                {evento.fecha}
              </div>
            </div>
            
            <div className="event-content">
              <h3 className="event-title">{evento.titulo}</h3>
              <p className="event-description">{evento.descripcion}</p>
              
              <div className="event-actions">
                <button 
                  className="event-button"
                  style={{ borderColor: evento.color, color: evento.color }}
                >
                  <FiCalendar className="icon" />
                  Reservar
                </button>
                <button className="event-button secondary">
                  <FiPlay className="icon" />
                  Ver más
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
 
    </section>
  );
}

export default NochesDestacadas;