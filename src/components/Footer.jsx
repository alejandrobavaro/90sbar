
import React from "react";
import { Link } from "react-router-dom";
import { 
  BsInstagram, 
  BsYoutube, 
  BsFacebook, 
  BsImages,
  BsCalendarEvent 
} from "react-icons/bs";
import "../assets/scss/_03-Componentes/_Footer.scss";

function Footer() {
  // Función para scroll suave al top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-90s">
      {/* Botón principal de reservas */}
      <div className="reserva-btn-container">
        <Link 
          to="/contacto" 
          className="reserva-btn" 
          onClick={scrollToTop}
        >
          RESERVAS
        </Link>
      </div>

      {/* Links rápidos */}
      <div className="quick-links">
        <Link 
          to="/galeria" 
          onClick={scrollToTop} 
          className="quick-link"
        >
          <BsImages className="link-icon" />
          <span>Galería</span>
        </Link>
        <Link 
          to="/galeria" 
          onClick={scrollToTop} 
          className="quick-link"
        >
          <BsCalendarEvent className="link-icon" />
          <span>Galeria</span>
        </Link>
      </div>

      {/* Redes sociales */}
      <div className="social-container">
        <div className="social-links">
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
          >
            <BsInstagram className="social-icon" />
            <span>@90sbar_mdq</span>
          </a>
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
          >
            <BsYoutube className="social-icon" />
            <span>90's Bar</span>
          </a>
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer"
            className="social-link"
          >
            <BsFacebook className="social-icon" />
            <span>90's Bar MDQ</span>
          </a>
        </div>
      </div>

      {/* Separador decorativo */}
      <div className="divider-line"></div>

      {/* Copyright */}
      <div className="copyright">
        <p>
          © {new Date().getFullYear()} 90's Bar - Mar del Plata
        </p>
      </div>
    </footer>
  );
}

export default Footer;