import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";

import { technologies } from "../../data/technologies";

const Technologies = () => {
  return (
    <section className="py-20 bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Tecnologías que Dominamos
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Trabajamos con las mejores herramientas y plataformas del mercado para ofrecerte soluciones de vanguardia
          </p>
        </div>

        {/* Slider de tecnologías */}
        <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        speed={800}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
            320: { slidesPerView: 3 },   // smartphone
            768: { slidesPerView: 4 },   // tablet
            1024: { slidesPerView: 5 },  // desktop
        }}
        >
        {technologies.map((tech) => (
            <SwiperSlide key={tech.id}>
            <div className="group h-40 flex flex-col justify-center items-center bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/30 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105">
                <div className="w-12 h-12 mb-4 flex items-center justify-center">
                <img
                    src={tech.logo}
                    alt={`Logo de ${tech.name}`}
                    className="max-w-full max-h-full object-contain filter brightness-0 invert group-hover:filter-none transition-all duration-300"
                />
                </div>
                <h3 className="text-sm font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {tech.name}
                </h3>
                <p className="text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {tech.description}
                </p>
            </div>
            </SwiperSlide>
        ))}
        </Swiper>


        {/* Mensaje adicional */}
        <div className="text-center mt-12">
          <p className="text-gray-300 mb-6">
            Dominamos un ecosistema amplio de tecnologías y seguimos sumando innovación
          </p>
          <button
            onClick={() => document.getElementById("modal-cotizacion")?.classList.remove("hidden")}
            className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Consulta sobre tu tecnología
          </button>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
