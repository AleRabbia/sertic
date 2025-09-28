import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/a11y";

import { technologies } from "../../data/technologies";

const Technologies = () => {
  const handleConsultClick = () => {
    const modal = document.getElementById("modal-cotizacion");
    if (modal) {
      modal.classList.remove("hidden");
      // Mover foco al modal
      modal.focus();
    }
  };

  return (
    <section className="py-20 bg-black/20" aria-labelledby="tech-title">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="tech-title" className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Tecnologías que Dominamos
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Trabajamos con las mejores herramientas y plataformas del mercado para ofrecerte soluciones de vanguardia
          </p>
        </div>

        {/* Slider de tecnologías */}
        <div role="region" aria-labelledby="tech-title" aria-label="Carrusel de tecnologías">
          <Swiper
            modules={[Autoplay, Keyboard, A11y]}
            spaceBetween={20}
            speed={800}
            autoplay={{ 
              delay: 2500, 
              disableOnInteraction: false,
              pauseOnMouseEnter: true 
            }}
            keyboard={{
              enabled: true,
              onlyInViewport: true,
            }}
            a11y={{
              enabled: true,
              prevSlideMessage: 'Slide anterior',
              nextSlideMessage: 'Siguiente slide',
              firstSlideMessage: 'Este es el primer slide',
              lastSlideMessage: 'Este es el último slide',
            }}
            loop={true}
            breakpoints={{
                320: { slidesPerView: 3 },   // smartphone
                768: { slidesPerView: 4 },   // tablet
                1024: { slidesPerView: 5 },  // desktop
            }}
            className="focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black rounded-2xl"
          >
            {technologies.map((tech, index) => (
                <SwiperSlide key={tech.id}>
                <article 
                  className="group h-40 flex flex-col justify-center items-center bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/30 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105 focus-within:border-cyan-500/50 focus-within:scale-105"
                  tabIndex="0"
                  aria-label={`Tecnología ${index + 1} de ${technologies.length}: ${tech.name}`}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      // Opcional: acción al presionar enter/espacio
                    }
                  }}
                >
                    <div className="w-12 h-12 mb-4 flex items-center justify-center">
                    <img
                    loading="lazy"
                        src={tech.logo}
                        alt={`Logo de ${tech.name}`}
                        className="max-w-full max-h-full object-contain filter brightness-0 invert group-hover:filter-none group-focus-within:filter-none transition-all duration-300"
                    />
                    </div>
                    <h3 className="text-sm font-semibold text-white mb-2 group-hover:text-cyan-400 group-focus-within:text-cyan-400 transition-colors">
                    {tech.name}
                    </h3>
                    <p className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300">
                    {tech.description}
                    </p>
                </article>
                </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Controles de accesibilidad para el slider */}
        <div className="sr-only" aria-live="polite" id="slider-status">
          Use las flechas del teclado para navegar por las tecnologías
        </div>

        {/* Mensaje adicional */}
        <div className="text-center mt-12">
          <p className="text-gray-300 mb-6">
            Dominamos un ecosistema amplio de tecnologías y seguimos sumando innovación
          </p>
          <button
            onClick={handleConsultClick}
            className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-black px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 focus:scale-105"
            aria-label="Abrir modal para consultar sobre tu tecnología específica"
          >
            Consulta sobre tu tecnología
          </button>
        </div>
      </div>
    </section>
  );
};

export default Technologies;