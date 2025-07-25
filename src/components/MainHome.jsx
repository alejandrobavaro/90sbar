import React from "react";
import NochesDestacadas from "./NochesDestacadas";
import Galeria from "./Galeria";
import Escenario from "./Escenario";
import HeroBanner from "./HeroBanner";
import Contacto from "./Contacto";
import "../assets/scss/_03-Componentes/_MainHome.scss";

// ------------------------------------------------------------
// COMPONENTE PRINCIPAL MAINHOME
// ------------------------------------------------------------
// Este componente sirve como layout principal de la página de inicio
// Contiene y organiza todas las secciones principales del sitio

function MainHome() {
  return (
    // Contenedor principal
    <div className="main-home">
      {/* ------------------------------------------------------------ */}
      {/* HERO BANNER - Primera sección visual importante */}
      {/* ------------------------------------------------------------ */}
      <HeroBanner />

      {/* ------------------------------------------------------------ */}
      {/* ESCENARIO  */}
      {/* ------------------------------------------------------------ */}
      <section className="events-section">
        <Escenario />
      </section>
      
 {/* ------------------------------------------------------------ */}
      {/* GALERÍA DE EVENTOS - Muestra más eventos en formato galería */}
      {/* ------------------------------------------------------------ */}
      <section className="events-section">
        <Galeria />
      </section>


      {/* ------------------------------------------------------------ */}
      {/* EVENTOS DESTACADOS - Muestra los eventos principales */}
      {/* ------------------------------------------------------------ */}
      <section className="featured-section">
        <NochesDestacadas />
      </section>

     




    </div>
  );
}

export default MainHome;
