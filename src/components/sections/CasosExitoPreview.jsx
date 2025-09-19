// src/components/sections/CasosExitoPreview.jsx
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { getFeaturedCases } from '../../data/casosExito';

const CasosExitoPreview = () => {
  // Obtenemos solo los casos destacados
  const featuredCases = getFeaturedCases();

  return (
    <section className="py-20 bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Casos de Éxito Destacados
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Algunos ejemplos de cómo apoyamos a nuestros clientes en diferentes sectores
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {featuredCases.map((caso) => (
            <div
              key={caso.id}
              className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <div className="w-full h-40 bg-slate-700/30 flex items-center justify-center p-4">
                  <img
                    src={caso.logo}
                    alt={`Logo de ${caso.title}`}
                    className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-300"
                    style={{ filter: 'brightness(0) invert(1)' }}
                  />
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-gradient-to-r from-cyan-500/80 to-purple-600/80 rounded-full text-xs text-white font-semibold">
                    {caso.metrics?.uptime || caso.metrics?.hoursPerMonth || caso.sector}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                  {caso.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm">{caso.description}</p>

                <div className="flex flex-wrap gap-2">
                  {caso.services.slice(0, 3).map((service, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-full text-xs text-cyan-300 border border-cyan-500/30"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action para ver más */}
        <div className="text-center">
          <button
            onClick={() => (window.location.href = '/casos-de-exito')}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Ver todos los casos de éxito
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CasosExitoPreview;
