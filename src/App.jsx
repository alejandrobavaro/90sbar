/**
 * COMPONENTE PRINCIPAL DE LA APLICACIÓN
 * 
 * Propósito:
 * - Configura el enrutamiento principal de la aplicación
 * - Estructura el layout base (header, contenido principal, footer)
 * - Maneja la navegación entre todas las páginas
 * - Incluye componentes globales (WhatsApp flotante)
 */

import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

// Estilos globales
import "./assets/scss/_01-General/_App.scss";

// Componentes estructurales
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsappFloat from "./components/WhatsappFloat";

// Componentes de páginas
import MainHome from "./components/MainHome"; 
import Contacto from "./components/Contacto";
import Galeria from "./components/Galeria";
import Nosotros from "./components/Nosotros";
import Escenario from "./components/Escenario";
import Menu from "./components/Menu";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        
        <main className="main-content">
          <div className="content-wrapper">
            <Routes>
              <Route path="/" element={<MainHome />} />
              <Route path="/inicio" element={<MainHome />} />
              <Route path="/nosotros" element={<Nosotros />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/eventos" element={<Escenario />} />
              <Route path="/galeria" element={<Galeria />} />
              <Route path="/contacto" element={<Contacto />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </main>
        
        <Footer />
        <WhatsappFloat />
      </div>
    </Router>
  );
}

export default App;