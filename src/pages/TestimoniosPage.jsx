// src/pages/TestimoniosPage.jsx
import React, { useState, useEffect } from 'react';
import { Navigation, Footer } from '../components/layout';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Filter } from 'lucide-react';
import { testimonials } from '../data/testimonials';

const TestimoniosPage = () => {
    const [activeFilter, setActiveFilter] = useState('todos');
    const navigate = useNavigate();
    useEffect(() => {
    window.scrollTo(0, 0);
    }, []);
  // Definir sectores manualmente (porque los querés fijos)
  const sectors = [
    { id: 'todos', name: 'Todos los sectores' },
    { id: 'agroindustria', name: 'Agroindustria' },
    { id: 'salud', name: 'Salud' },
    { id: 'educacion', name: 'Educación' },
    { id: 'tecnologia', name: 'Tecnología' },
    { id: 'servicios', name: 'Servicios' }
  ];

  // Filtrar testimonios según el sector activo
  const filteredTestimonials = activeFilter === 'todos'
    ? testimonials
    : testimonials.filter(testimonial => testimonial.sector === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <Navigation />

      <main className="pt-24">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center gap-4 mb-8">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Volver
            </button>
          </div>

          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Testimonios de Nuestros Clientes
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Descubre las experiencias reales de empresas que han confiado en
              nuestros servicios para transformar su infraestructura tecnológica
            </p>
          </div>

          {/* Filtros */}
          <div className="flex justify-center mb-12">
            <div className="flex flex-wrap gap-4 bg-slate-800/50 backdrop-blur-sm rounded-2xl p-4">
              <Filter className="w-5 h-5 text-gray-400 mt-2" />
              {sectors.map((sector) => (
                <button
                  key={sector.id}
                  onClick={() => setActiveFilter(sector.id)}
                  className={`px-6 py-2 rounded-full transition-all duration-300 ${
                    activeFilter === sector.id
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                      : 'text-gray-300 hover:text-white hover:bg-slate-700/50'
                  }`}
                >
                  {sector.name}
                </button>
              ))}
            </div>
          </div>

          {/* Grid de testimonios detallados */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-300"
              >
                {/* Header del testimonio */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center">
                      <span className="text-white font-bold text-xl">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {testimonial.name}
                      </h3>
                      <p className="text-cyan-400 font-semibold">
                        {testimonial.position || 'Cliente'}
                      </p>
                      <p className="text-gray-400">{testimonial.company}</p>
                    </div>
                  </div>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">
                        ★
                      </span>
                    ))}
                  </div>
                </div>

                {/* Testimonio */}
                <blockquote className="text-gray-300 mb-6 italic text-lg leading-relaxed">
                  "{testimonial.text}"
                </blockquote>

                {/* Detalles del proyecto */}
                <div className="border-t border-slate-600 pt-6">
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    {testimonial.project && (
                      <div>
                        <h4 className="text-sm font-semibold text-cyan-400 mb-2">
                          PROYECTO
                        </h4>
                        <p className="text-gray-300">{testimonial.project}</p>
                      </div>
                    )}
                    {testimonial.duration && (
                      <div>
                        <h4 className="text-sm font-semibold text-cyan-400 mb-2">
                          DURACIÓN
                        </h4>
                        <p className="text-gray-300">{testimonial.duration}</p>
                      </div>
                    )}
                  </div>

                  {testimonial.results && (
                    <div>
                      <h4 className="text-sm font-semibold text-cyan-400 mb-3">
                        RESULTADOS CLAVE
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {testimonial.results.map((result, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gradient-to-r from-green-500/20 to-cyan-600/20 rounded-full text-xs text-green-300 border border-green-500/30"
                          >
                            ✓ {result}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-12 border border-slate-700/50">
            <h3 className="text-3xl font-bold mb-4">
              ¿Listo para ser nuestro próximo caso de éxito?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Únete a empresas líderes que ya confían en SerTIC para sus
              necesidades tecnológicas
            </p>
            <button
              onClick={() => (window.location.href = '/')}
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
            >
              Solicitar Cotización
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TestimoniosPage;
