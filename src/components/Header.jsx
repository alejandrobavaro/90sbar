import React from "react";
import { NavLink } from "react-router-dom";
import { FiHome, FiInfo, FiMusic, FiCoffee, FiMessageSquare, FiPhone } from "react-icons/fi";
import { MdOutlineLocalBar } from "react-icons/md";
import "../assets/scss/_03-Componentes/_Header.scss";

const Header = () => {
  const navItems = [
    { path: "/", icon: <FiHome size={18} />, label: "Inicio" },
    { path: "/nosotros", icon: <FiInfo size={18} />, label: "Nosotros" },
    { path: "/menu", icon: <MdOutlineLocalBar size={18} />, label: "Menú" },
    { path: "/eventos", icon: <FiMusic size={18} />, label: "Escenario" },
  
    { path: "/contacto", icon: <FiPhone size={18} />, label: "Contacto" },
  ];

  return (
    <header className="header-90s">
      <div className="header-container">
        <div className="logo-wrapper">
          <span className="logo-main">90's</span>
          <span className="logo-bar">BAR</span>
          <div className="logo-divider"></div>
          <span className="logo-since">Desde 2024</span>
        </div>

        <nav className="main-nav">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => 
                `nav-item ${isActive ? "active" : ""}`
              }
            >
              {item.icon}
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <button className="mobile-menu-btn">
          <div className="menu-line"></div>
          <div className="menu-line"></div>
          <div className="menu-line"></div>
        </button>
      </div>
    </header>
  );
};

export default Header;