import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/a11y";
import { motion } from "framer-motion";
import { technologies } from "../../data/technologies";

const Technologies = () => {
  const handleConsultClick = () => {
    const modal = document.getElementById("modal-cotizacion");
    if (modal) {
      modal.classList.remove("hidden");
      modal.focus();
    }
  };

  return (
    <section className="py-12 relative overflow-hidden">
      {/* Fondo sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 via-slate-900/40 to-purple-900/10 blur-3xl opacity-30"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Encabezado */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Tecnologías que Potencian Nuestros Servicios
          </h2>
          <p className="text-base text-gray-400 max-w-2xl mx-auto">
            Implementamos, integramos y administramos las principales plataformas tecnológicas.
          </p>
        </div>

        {/* Carrusel */}
        <Swiper
          modules={[Autoplay, Keyboard, A11y]}
          spaceBetween={30}
          speed={1000}
          autoplay={{
            delay: 2200,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          keyboard={{ enabled: true, onlyInViewport: true }}
          a11y={{
            enabled: true,
            prevSlideMessage: "Slide anterior",
            nextSlideMessage: "Siguiente slide",
          }}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 3 },
            640: { slidesPerView: 4 },
            1024: { slidesPerView: 6 },
          }}
          className="py-4"
        >
          {technologies.map((tech, i) => (
            <SwiperSlide key={tech.id}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="group h-28 flex flex-col justify-center items-center rounded-2xl bg-slate-800/40 backdrop-blur-md border border-slate-700/40 hover:border-cyan-400/30 shadow-md hover:shadow-cyan-500/10 transition-all duration-300"
              >
                <div className="w-14 h-14 flex items-center justify-center mb-3">
                  <img
                    loading="lazy"
                    src={tech.logo}
                    alt={tech.name}
                    className="max-w-full max-h-full object-contain rounded-lg"
                  />
                </div>
                <h3 className="text-xs font-semibold text-white mb-1 text-center break-words group-hover:text-cyan-400 transition-colors">
                  {tech.name}
                </h3>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Bloque inferior */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-6 text-sm md:text-base">
            Evolucionamos junto a las tecnologías para acompañar los desafíos de cada organización.
          </p>
          {/*
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleConsultClick}
            className="px-6 py-3 rounded-full font-medium text-white bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-900"
          >
            Consultá por tu stack tecnológico
          </motion.button>*/}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
