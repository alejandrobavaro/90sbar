/**
 * COMPONENTE ESCENARIO
 * 
 * Propósito:
 * - Muestra información sobre el escenario y eventos musicales del bar
 * - Incluye horarios de presentaciones en vivo
 * - Listado de bandas y artistas frecuentes
 * - Diseño temático de los 90s
 */

import React from "react";
import { FiCalendar, FiClock, FiMic, FiMusic } from "react-icons/fi";
import "../assets/scss/_03-Componentes/_Escenario.scss";

function Escenario() {
  // Datos de eventos y horarios
  const eventos = [
    {
      dia: "Viernes",
      hora: "21:00",
      artista: "The Retro Band",
      genero: "Rock 90s"
    },
    {
      dia: "Sábado",
      hora: "22:00",
      artista: "DJ Neon",
      genero: "Electrónica Retro"
    },
    {
      dia: "Domingo",
      hora: "20:00",
      artista: "Acústico 90s",
      genero: "Acústico"
    }
  ];

  // Bandas frecuentes
  const bandas = [
    "Nirvana Tribute",
    "Pearl Jam Experience",
    "Red Hot Chili Peppers Cover",
    "Radiohead Revival",
    "Smashing Pumpkins Tribute"
  ];

  return (
    <section className="escenario-container">
      {/* Encabezado con efecto neón */}
      <div className="escenario-header">
        <h1 className="neon-text">Escenario 90's</h1>
        <p>Donde revivimos los mejores hits de los 90s</p>
      </div>

      {/* Sección de horarios */}
      <div className="horarios-section">
        <h2>
          <FiCalendar className="icon" /> Próximos Eventos
        </h2>
        
        <div className="eventos-grid">
          {eventos.map((evento, index) => (
            <div key={index} className="evento-card">
              <div className="evento-dia">{evento.dia}</div>
              <div className="evento-hora">
                <FiClock /> {evento.hora}
              </div>
              <div className="evento-artista">
                <FiMic /> {evento.artista}
              </div>
              <div className="evento-genero">
                <FiMusic /> {evento.genero}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sección de bandas */}
      <div className="bandas-section">
        <h2>Bandas que nos visitan frecuentemente</h2>
        <ul className="bandas-list">
          {bandas.map((banda, index) => (
            <li key={index}>
              <span className="vinyl-icon">💿</span> {banda}
            </li>
          ))}
        </ul>
      </div>

      {/* Llamado a la acción */}
      <div className="cta-section">
        <p>¿Quieres tocar en nuestro escenario?</p>
        <button className="cta-button">Contáctanos</button>
      </div>
    </section>
  );
}

export default Escenario;