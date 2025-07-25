/**
 * COMPONENTE DE CONTACTO
 * 
 * Este componente contiene:
 * - Formulario de contacto
 * - Información de ubicación y contacto
 * - Mapa interactivo
 * - Redes sociales
 */

import React from "react";
import { motion } from "framer-motion";
import { 
  FaFacebook, 
  FaInstagram, 
  FaWhatsapp, 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope 
} from "react-icons/fa";
import "../assets/scss/_03-Componentes/_Contacto.scss";

const Contacto = () => {
  return (
    <section className="contacto-90s">
      {/* Hero Section */}
      <div className="contacto-hero">
        <div className="hero-overlay"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <h1 className="title">Visítanos</h1>
          <p className="lead">
            Ven a disfrutar del auténtico ambiente 90's en Mar del Plata
          </p>
          <div className="gradient-bar"></div>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="container">
        <div className="contacto-grid">
          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="form-container"
          >
            <h2>Reserva tu mesa</h2>
            <form className="contacto-form">
              <div className="form-group">
                <input type="text" placeholder="Nombre completo" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="Correo electrónico" required />
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Teléfono" required />
              </div>
              <div className="form-group">
                <select required>
                  <option value="">Tipo de reserva</option>
                  <option value="cena">Cena</option>
                  <option value="evento">Evento especial</option>
                  <option value="grupo">Grupo grande</option>
                </select>
              </div>
              <div className="form-group">
                <textarea placeholder="Comentarios adicionales" rows="5"></textarea>
              </div>
              <button type="submit" className="btn-90s">
                Enviar reserva
              </button>
            </form>
          </motion.div>

          {/* Info Contacto */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="info-container"
          >
            <div className="contacto-info">
              <h3>Información de contacto</h3>
              
              <div className="info-item">
                <div className="info-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="info-content">
                  <h4>Ubicación</h4>
                  <p>Calle Güemes 1234, Mar del Plata</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <FaPhone />
                </div>
                <div className="info-content">
                  <h4>Teléfono</h4>
                  <p>+54 223 1234-5678</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <FaWhatsapp />
                </div>
                <div className="info-content">
                  <h4>WhatsApp</h4>
                  <p>+54 223 8765-4321</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <FaEnvelope />
                </div>
                <div className="info-content">
                  <h4>Email</h4>
                  <p>reservas@90sbar.com</p>
                </div>
              </div>
            </div>

            <div className="horarios">
              <h3>Horarios</h3>
              <div className="horario-item">
                <p>Martes a Jueves</p>
                <p>19:00 - 02:00</p>
              </div>
              <div className="horario-item">
                <p>Viernes y Sábado</p>
                <p>19:00 - 04:00</p>
              </div>
              <div className="horario-item">
                <p>Domingo</p>
                <p>19:00 - 00:00</p>
              </div>
            </div>

            <div className="social-media">
              <h3>Seguinos</h3>
              <div className="social-icons">
                <motion.a
                  whileHover={{ y: -5 }}
                  href="#" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <FaFacebook />
                </motion.a>
                <motion.a
                  whileHover={{ y: -5 }}
                  href="#" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                >
                  <FaInstagram />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mapa */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mapa-container"
        >
          <h3>Nuestra ubicación</h3>
          <div className="mapa">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3143.123456789012!2d-57.987654!3d-38.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDA3JzI0LjQiUyA1N8KwNTknMTMuNiJX!5e0!3m2!1ses!2sar!4v1234567890123!5m2!1ses!2sar" 
              width="100%" 
              height="400" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy"
              title="Ubicación 90's Bar"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contacto;