/**
 * COMPONENTE: Menu.jsx
 * DESCRIPCIÓN: Muestra el menú interactivo del Bar 90's con navegación por categorías.
 * REGLAS DEL PROYECTO:
 *  - Código SCSS simple, responsive, mobile-first.
 *  - Secciones rotuladas con explicaciones detalladas.
 *  - Sin mixins ni variables SCSS.
 */

import React, { useState } from "react"; // Importación de React y hook useState
import { 
  MdOutlineQrCodeScanner, // Icono de QR
  MdFastfood,             // Icono de comidas
  MdLocalBar,             // Icono de tragos
  MdCake,                 // Icono de postres
  MdRestaurant            // Icono de restaurantes (no usado aquí pero importado)
} from "react-icons/md";
import { QRCodeCanvas } from "qrcode.react"; // CORRECCIÓN: importación con llaves
import "../assets/scss/_03-Componentes/_Menu.scss"; // Estilos SCSS del componente

function Menu() {
  // ------------------------------------------------------------
  // SECCIÓN 1: DATOS DEL MENÚ
  // ------------------------------------------------------------

    const categoriasTragos = [
      {
        nombre: "🎸 Smells Like Teen Spirit (Nirvana)",
        items: [
          { nombre: "Nirvana Sour", descripcion: "Whisky, limón, azúcar, clara de huevo", precio: "$12" },
          { nombre: "Kurt Cobain", descripcion: "Vodka, jugo de arándano, granadina", precio: "$10" },
          { nombre: "Nevermind", descripcion: "Ron, jugo de piña, coco, crema", precio: "$13" },
          { nombre: "Bleach", descripcion: "Ginebra, lima, menta, soda", precio: "$11" },
          { nombre: "In Bloom", descripcion: "Tequila, jugo de toronja, jarabe de agave", precio: "$123" }
        ]
      },
      {
        nombre: "🎤 Wannabe (Spice Girls)",
        items: [
          { nombre: "Spice Mojito", descripcion: "Ron, menta, lima, azúcar, soda", precio: "$11" },
          { nombre: "Ginger Spice", descripcion: "Ginebra, ginger beer, limón", precio: "$10" },
          { nombre: "Zigazig Ah", descripcion: "Tequila, jugo de naranja, granadina", precio: "$12" },
          { nombre: "2 Become 1", descripcion: "Vodka, crema de cacao, crema", precio: "$13" },
          { nombre: "Stop", descripcion: "Ron oscuro, jugo de manzana, canela", precio: "$14" }
        ]
      },
      {
        nombre: "🎵 Wonderwall (Oasis)",
        items: [
          { nombre: "Oasis Cooler", descripcion: "Gin, tónica, pepino, menta", precio: "$11" },
          { nombre: "Liam & Noel", descripcion: "Whisky escocés, drambuie, limón", precio: "$14" },
          { nombre: "Champagne Supernova", descripcion: "Champagne, licor de melón, vodka", precio: "$15" },
          { nombre: "Don't Look Back", descripcion: "Bourbon, amaretto, jugo de naranja", precio: "$13" },
          { nombre: "Live Forever", descripcion: "Tequila, jugo de arándano, lima", precio: "$12" }
        ]
      },
      {
        nombre: "🤘 Enter Sandman (Metallica)",
        items: [
          { nombre: "Blackened", descripcion: "Whisky, licor de café, crema", precio: "$14" },
          { nombre: "One Shot", descripcion: "Vodka, triple sec, jugo de arándano", precio: "$12" },
          { nombre: "Master of Mix", descripcion: "Ron, jugo de piña, coco, nuez moscada", precio: "$13" },
          { nombre: "Fade to Black", descripcion: "Ginebra, jugo de mora, lima", precio: "$11" },
          { nombre: "Fuel", descripcion: "Tequila, ginger beer, lima", precio: "$12" }
        ]
      },
      {
        nombre: "🎤 Baby One More Time (Britney)",
        items: [
          { nombre: "Oops! I Did It Again", descripcion: "Vodka, blue curaçao, limón, sprite", precio: "$12" },
          { nombre: "Toxic", descripcion: "Ginebra, jugo de maracuyá, lima", precio: "$13" },
          { nombre: "Crazy", descripcion: "Ron, jugo de piña, coco, crema", precio: "$14" },
          { nombre: "Lucky", descripcion: "Champagne, licor de melocotón", precio: "$15" },
          { nombre: "Stronger", descripcion: "Tequila, jugo de toronja, jarabe de agave", precio: "$12" }
        ]
      },
      {
        nombre: "🎵 No Diggity (Blackstreet)",
        items: [
          { nombre: "No Limit", descripcion: "Ron, jugo de naranja, granadina", precio: "$12" },
          { nombre: "Before I Let Go", descripcion: "Bourbon, jugo de manzana, canela", precio: "$13" },
          { nombre: "Don't Leave Me", descripcion: "Ginebra, jugo de arándano, lima", precio: "$11" },
          { nombre: "Good Life", descripcion: "Vodka, jugo de piña, coco", precio: "$12" },
          { nombre: "Joy", descripcion: "Tequila, jugo de mango, chile", precio: "$13" }
        ]
      }
    ];
  
    // ------------------------------------------------------------
    // DATOS COMPLETOS DEL MENÚ - COMIDAS (30 items)
    // ------------------------------------------------------------
    const categoriasComidas = [
      {
        nombre: "🍔 Californication (RHCP)",
        items: [
          { nombre: "Blood Sugar Sex Magik", descripcion: "Hamburguesa picante con queso azul", precio: "$18" },
          { nombre: "Under the Bridge", descripcion: "Nachos con guacamole y tres salsas", precio: "$15" },
          { nombre: "Give It Away", descripcion: "Alitas BBQ con aderezo especial", precio: "$16" },
          { nombre: "Can't Stop", descripcion: "Costillas ahumadas con salsa bourbon", precio: "$22" },
          { nombre: "Dani California", descripcion: "Tacos de carnitas con salsa verde", precio: "$17" }
        ]
      },
      {
        nombre: "🍟 Black Hole Sun (Soundgarden)",
        items: [
          { nombre: "Spoonman", descripcion: "Costillas ahumadas con salsa bourbon", precio: "$22" },
          { nombre: "Fell on Black Days", descripcion: "Tostadas de pulpo con paprika", precio: "$19" },
          { nombre: "Rusty Cage", descripcion: "Queso fundido con chorizo y chiles", precio: "$17" },
          { nombre: "Outshined", descripcion: "Pulled pork sandwich con coleslaw", precio: "$18" },
          { nombre: "Superunknown", descripcion: "Slider trio (res, pollo, cerdo)", precio: "$20" }
        ]
      },
      {
        nombre: "🍕 Bitter Sweet Symphony (The Verve)",
        items: [
          { nombre: "The Drugs Don't Work", descripcion: "Pizza margarita con albahaca fresca", precio: "$20" },
          { nombre: "Lucky Man", descripcion: "Tabla de quesos y embutidos", precio: "$21" },
          { nombre: "Sonnet", descripcion: "Bruschettas de tomate y mozzarella", precio: "$16" },
          { nombre: "History", descripcion: "Lasagna tradicional con salsa bolognesa", precio: "$19" },
          { nombre: "Velvet Morning", descripcion: "Risotto de hongos silvestres", precio: "$21" }
        ]
      },
      {
        nombre: "🌮 Sabotage (Beastie Boys)",
        items: [
          { nombre: "Fight for Your Right", descripcion: "Burrito gigante con tres carnes", precio: "$18" },
          { nombre: "Intergalactic", descripcion: "Quesadillas de huitlacoche", precio: "$16" },
          { nombre: "Brass Monkey", descripcion: "Tlayudas tradicionales", precio: "$17" },
          { nombre: "No Sleep Till", descripcion: "Chilaquiles rojos con huevo", precio: "$15" },
          { nombre: "Paul Revere", descripcion: "Enchiladas suizas", precio: "$16" }
        ]
      },
      {
        nombre: "🍗 Jeremy (Pearl Jam)",
        items: [
          { nombre: "Alive", descripcion: "Pollo asado con especias secretas", precio: "$18" },
          { nombre: "Even Flow", descripcion: "Pasta alfredo con pollo", precio: "$17" },
          { nombre: "Black", descripcion: "Arrachera al carbón", precio: "$22" },
          { nombre: "Yellow Ledbetter", descripcion: "Pescado a la talla", precio: "$21" },
          { nombre: "Daughter", descripcion: "Filete mignon con salsa de hongos", precio: "$25" }
        ]
      },
      {
        nombre: "🌯 Killing in the Name (Rage)",
        items: [
          { nombre: "Bulls on Parade", descripcion: "Hamburguesa doble con tocino", precio: "$19" },
          { nombre: "Guerrilla Radio", descripcion: "Sandwich de ribeye", precio: "$20" },
          { nombre: "Sleep Now", descripcion: "Sopa de tortilla", precio: "$14" },
          { nombre: "Know Your Enemy", descripcion: "Chiles en nogada", precio: "$18" },
          { nombre: "Freedom", descripcion: "Molletes especiales", precio: "$15" }
        ]
      }
    ];
  
    // ------------------------------------------------------------
    // DATOS COMPLETOS DEL MENÚ - POSTRES (10 items)
    // ------------------------------------------------------------
    const categoriasPostres = [
      {
        nombre: "🍰 Sweet Child O'Mine (Guns N' Roses)",
        items: [
          { nombre: "November Rain", descripcion: "Pastel de chocolate triple", precio: "$12" },
          { nombre: "Paradise City", descripcion: "Cheesecake de frutos rojos", precio: "$11" },
          { nombre: "Welcome to the Jungle", descripcion: "Brownie con helado", precio: "$10" },
          { nombre: "Don't Cry", descripcion: "Flan napolitano", precio: "$9" },
          { nombre: "Patience", descripcion: "Mousse de chocolate", precio: "$10" }
        ]
      },
      {
        nombre: "🍨 Ice Ice Baby (Vanilla Ice)",
        items: [
          { nombre: "Too Cold", descripcion: "Helado de vainilla con toppings", precio: "$8" },
          { nombre: "Under Pressure", descripcion: "Sundae de chocolate", precio: "$10" },
          { nombre: "Rollin'", descripcion: "Banana split", precio: "$12" },
          { nombre: "Play That Funky", descripcion: "Paletas artesanales", precio: "$7" },
          { nombre: "Stop Collaborate", descripcion: "Affogato al café", precio: "$11" }
        ]
      }
    ];

  // ------------------------------------------------------------
  // SECCIÓN 2: ESTADO Y MANEJADORES
  // ------------------------------------------------------------

  const [activeTab, setActiveTab] = useState('tragos'); // Pestaña activa

  const handleTabChange = (tab) => { // Cambiar pestaña
    setActiveTab(tab);
  };

  const qrUrl = `${window.location.origin}/menu`; // URL del QR

  // ------------------------------------------------------------
  // SECCIÓN 3: RENDERIZADO
  // ------------------------------------------------------------
  return (
    <section className="menu-container">
      {/* ---------------- ENCABEZADO ---------------- */}
      <div className="menu-header">
        <h1 className="retro-title">Menú 90's BAR</h1>
        <p className="retro-subtitle">Sabores que te harán viajar en el tiempo</p>
      </div>

      {/* ---------------- SECCIÓN QR ---------------- */}
      <div className="qr-section">
        <div className="qr-box">
          <MdOutlineQrCodeScanner className="qr-icon" />
          <p>Escanea el código QR en el bar para ver el menú</p>
          <div className="qr-code-container">
            <QRCodeCanvas 
              value={qrUrl} 
              size={200} 
              bgColor="#ffffff" 
              fgColor="#000000" 
              level="H"
            />
            <p className="qr-url">{qrUrl}</p>
          </div>
        </div>
      </div>

      {/* ---------------- PESTAÑAS ---------------- */}
      <div className="menu-tabs">
        <div 
          className={`tab ${activeTab === 'tragos' ? 'active' : ''}`}
          onClick={() => handleTabChange('tragos')}
        >
          <MdLocalBar /> Tragos
        </div>
        <div 
          className={`tab ${activeTab === 'comidas' ? 'active' : ''}`}
          onClick={() => handleTabChange('comidas')}
        >
          <MdFastfood /> Comidas
        </div>
        <div 
          className={`tab ${activeTab === 'postres' ? 'active' : ''}`}
          onClick={() => handleTabChange('postres')}
        >
          <MdCake /> Postres
        </div>
      </div>

      {/* ---------------- SECCIÓN TRAGOS ---------------- */}
      {activeTab === 'tragos' && (
        <div className="menu-section">
          <h2 className="section-title">
            <MdLocalBar /> Tragos Legendarios
          </h2>
          {categoriasTragos.map((categoria, index) => (
            <div key={`tragos-${index}`} className="category">
              <h3 className="category-title">{categoria.nombre}</h3>
              <div className="items-grid">
                {categoria.items.map((item, i) => (
                  <div key={`tragos-item-${i}`} className="menu-item">
                    <div className="item-header">
                      <span className="item-name">{item.nombre}</span>
                      <span className="item-price">{item.precio}</span>
                    </div>
                    <p className="item-desc">{item.descripcion}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ---------------- SECCIÓN COMIDAS ---------------- */}
      {activeTab === 'comidas' && (
        <div className="menu-section">
          <h2 className="section-title">
            <MdFastfood /> Comidas Épicas
          </h2>
          {categoriasComidas.map((categoria, index) => (
            <div key={`comidas-${index}`} className="category">
              <h3 className="category-title">{categoria.nombre}</h3>
              <div className="items-grid">
                {categoria.items.map((item, i) => (
                  <div key={`comidas-item-${i}`} className="menu-item">
                    <div className="item-header">
                      <span className="item-name">{item.nombre}</span>
                      <span className="item-price">{item.precio}</span>
                    </div>
                    <p className="item-desc">{item.descripcion}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* ---------------- SECCIÓN POSTRES ---------------- */}
      {activeTab === 'postres' && (
        <div className="menu-section">
          <h2 className="section-title">
            <MdCake /> Postres Deliciosos
          </h2>
          {categoriasPostres.map((categoria, index) => (
            <div key={`postres-${index}`} className="category">
              <h3 className="category-title">{categoria.nombre}</h3>
              <div className="items-grid">
                {categoria.items.map((item, i) => (
                  <div key={`postres-item-${i}`} className="menu-item">
                    <div className="item-header">
                      <span className="item-name">{item.nombre}</span>
                      <span className="item-price">{item.precio}</span>
                    </div>
                    <p className="item-desc">{item.descripcion}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Menu;
