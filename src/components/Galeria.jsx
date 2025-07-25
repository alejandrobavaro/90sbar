import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/scss/_03-Componentes/_Galeria.scss";

// Importación directa desde public (sin necesidad de import)
const imagenes = [
  { id: 1, src: "/img/05-img-galeria2/1.jpeg", titulo: "Ambiente Nocturno" },
  { id: 2, src: "/img/05-img-galeria2/1a.jpg", titulo: "Barra Principal" },
  { id: 3, src: "/img/05-img-galeria2/2.jpeg", titulo: "Eventos Especiales" },
  { id: 4, src: "/img/05-img-galeria2/2a.jpg", titulo: "Zona de Karaoke" },
  { id: 5, src: "/img/05-img-galeria2/3.jpeg", titulo: "Conciertos en Vivo" },
  { id: 6, src: "/img/05-img-galeria2/3a.jpg", titulo: "Tardes Relax" },
  { id: 7, src: "/img/05-img-galeria2/4.jpeg", titulo: "Fiestas Temáticas" },
  { id: 8, src: "/img/05-img-galeria2/4a.jpg", titulo: "Rincón Retro" },
  { id: 9, src: "/img/05-img-galeria2/5.jpeg", titulo: "Happy Hours" },
  { id: 10, src: "/img/05-img-galeria2/5a.jpg", titulo: "Zona VIP" },
  { id: 11, src: "/img/05-img-galeria2/6.jpeg", titulo: "Noches de DJ" },
  { id: 12, src: "/img/05-img-galeria2/6a.jpg", titulo: "Terraza Exterior" },
  { id: 13, src: "/img/05-img-galeria2/7.jpeg", titulo: "Eventos Privados" },
  { id: 14, src: "/img/05-img-galeria2/8.jpeg", titulo: "Barra de Cócteles" },
  { id: 15, src: "/img/05-img-galeria2/9.jpeg", titulo: "Ambiente Acogedor" },
  { id: 16, src: "/img/05-img-galeria2/10.jpeg", titulo: "Fines de Semana" }
];

function Galeria() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "15%",
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          centerPadding: "10%",
          slidesToShow: 2
        }
      },
      {
        breakpoint: 1024,
        settings: {
          centerPadding: "5%",
          slidesToShow: 3
        }
      }
    ]
  };

  const handleImageError = (e) => {
    e.target.src = "/img/placeholder-event.jpg";
    e.target.alt = "Imagen no disponible";
    e.target.style.objectFit = "contain";
  };

  return (
    <section className="galeria-container">
      <div className="galeria-header">
        <h2>Galería del Bar</h2>
        <p>Descubre nuestro ambiente único</p>
      </div>

      <div className="galeria-slider-container">
        <Slider {...settings}>
          {imagenes.map((imagen) => (
            <div key={imagen.id} className="galeria-item">
              <div className="image-wrapper">
                <img
                  src={imagen.src}
                  alt={imagen.titulo}
                  loading="lazy"
                  onError={handleImageError}
                />
              </div>
              <div className="image-caption">
                <h3>{imagen.titulo}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Galeria;