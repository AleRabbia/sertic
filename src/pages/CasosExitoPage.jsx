import React, { useState, useEffect } from 'react';
import { Navigation, Footer } from '../components/layout';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Filter, Users, Clock, CheckCircle, TrendingUp } from 'lucide-react';
import { casosExito, getCasesByCategory, getCasesBySector } from '../data/casosExito';



const CasosExitoPage = () => {

    useEffect(() => {
  window.scrollTo(0, 0);
}, []);

  const [activeFilter, setActiveFilter] = useState('todos');
  const [filterType, setFilterType] = useState('category');
const navigate = useNavigate();
  const categoryFilters = [
    { id: 'todos', name: 'Todos los servicios' },
    { id: 'infraestructura', name: 'Infraestructura' },
    { id: 'soporte', name: 'Soporte Remoto' },
    { id: 'staffing', name: 'Staffing IT' }
  ];

  const sectorFilters = [
    { id: 'todos', name: 'Todos los sectores' },
    { id: 'agroindustria', name: 'Agroindustria' },
    { id: 'salud', name: 'Salud' },
    { id: 'educacion', name: 'Educación' },
    { id: 'tecnologia', name: 'Tecnología' },
    { id: 'servicios', name: 'Servicios' }
  ];

  const getFilteredCases = () => {
    if (activeFilter === 'todos') return casosExito;
    
    if (filterType === 'category') {
      return getCasesByCategory(activeFilter);
    } else {
      return getCasesBySector(activeFilter);
    }
  };

  const filteredCases = getFilteredCases();

  const getCategoryColor = (category) => {
    const colors = {
      infraestructura: 'from-blue-500/20 to-cyan-600/20 border-blue-500/30 text-blue-300',
      soporte: 'from-green-500/20 to-emerald-600/20 border-green-500/30 text-green-300',
      staffing: 'from-purple-500/20 to-violet-600/20 border-purple-500/30 text-purple-300'
    };
    return colors[category] || 'from-gray-500/20 to-gray-600/20 border-gray-500/30 text-gray-300';
  };

  const validCases = filteredCases.filter(
  (caso) => caso && caso.category && caso.sector
);


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
              Casos de Éxito
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Descubre cómo hemos ayudado a empresas de diferentes sectores a transformar su infraestructura tecnológica y optimizar sus operaciones
            </p>
          </div>

          {/* tipo de filtro */}
          <div className="flex justify-center mb-8">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-1">
              <button
                onClick={() => {setFilterType('category'); setActiveFilter('todos');}}
                className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                  filterType === 'category'
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Por Servicio
              </button>
              <button
                onClick={() => {setFilterType('sector'); setActiveFilter('todos');}}
                className={`px-6 py-2 rounded-lg transition-all duration-300 ${
                  filterType === 'sector'
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                Por Sector
              </button>
            </div>
          </div>

          {/* Filtros */}
          <div className="flex justify-center mb-12">
            <div className="flex flex-wrap gap-4 bg-slate-800/50 backdrop-blur-sm rounded-2xl p-4">
              <Filter className="w-5 h-5 text-gray-400 mt-2" />
              {(filterType === 'category' ? categoryFilters : sectorFilters).map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-6 py-2 rounded-full transition-all duration-300 ${
                    activeFilter === filter.id
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                      : 'text-gray-300 hover:text-white hover:bg-slate-700/50'
                  }`}
                >
                  {filter.name}
                </button>
              ))}
            </div>
          </div>

          {/* casos de éxito detallados */}
          <div className="grid lg:grid-cols-2 gap-12">
            {validCases.map((caso) => (
              <div key={caso.id} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/30 transition-all duration-500">
                {/* Header */}
                <div className="relative p-8 bg-gradient-to-r from-slate-800/80 to-slate-700/80">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl p-2 flex items-center justify-center">
                        <img
                          src={caso.logo}
                          alt={`Logo de ${caso.title}`}
                          className="max-w-full max-h-full object-contain"
                          style={{ filter: 'brightness(0) invert(1)' }}
                        />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-white">{caso.title}</h2>
                        <div className="flex gap-2 mt-2">
                          {Array.isArray(caso.category)
  ? caso.category.map((cat, i) => (
      <span
        key={i}
        className={`px-3 py-1 bg-gradient-to-r ${getCategoryColor(cat)} rounded-full text-xs font-semibold border`}
      >
        {cat.charAt(0).toUpperCase() + cat.slice(1)}
      </span>
    ))
  : (
      <span
        className={`px-3 py-1 bg-gradient-to-r ${getCategoryColor(caso.category)} rounded-full text-xs font-semibold border`}
      >
        {caso.category
          ? caso.category.charAt(0).toUpperCase() + caso.category.slice(1)
          : "Sin categoría"}
      </span>
    )}

                          <span className="px-3 py-1 bg-gradient-to-r from-slate-600/30 to-slate-500/30 rounded-full text-xs text-slate-300 border border-slate-500/30">
                            {caso.sector
  ? caso.sector.charAt(0).toUpperCase() + caso.sector.slice(1)
  : "Sin sector"}

                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Métricas destacadas */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {caso.metrics.uptime && (
                      <div className="text-center">
                        <TrendingUp className="w-5 h-5 text-green-400 mx-auto mb-1" />
                        <div className="text-lg font-bold text-green-400">{caso.metrics.uptime}</div>
                        <div className="text-xs text-gray-400">Uptime</div>
                      </div>
                    )}
                    {caso.metrics.responseTime && (
                      <div className="text-center">
                        <Clock className="w-5 h-5 text-cyan-400 mx-auto mb-1" />
                        <div className="text-lg font-bold text-cyan-400">{caso.metrics.responseTime}</div>
                        <div className="text-xs text-gray-400">Respuesta</div>
                      </div>
                    )}
                    {caso.metrics.professionals && (
                      <div className="text-center">
                        <Users className="w-5 h-5 text-purple-400 mx-auto mb-1" />
                        <div className="text-lg font-bold text-purple-400">{caso.metrics.professionals}</div>
                        <div className="text-xs text-gray-400">Profesionales</div>
                      </div>
                    )}
                    {caso.teamSize && (
                      <div className="text-center">
                        <Users className="w-5 h-5 text-purple-400 mx-auto mb-1" />
                        <div className="text-lg font-bold text-purple-400">{caso.teamSize}</div>
                        <div className="text-xs text-gray-400">Equipo</div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Contenido */}
                <div className="p-8">
                  {/* Descripción */}
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {caso.detailedDescription}
                  </p>

                  {/* Tecnologías */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">TECNOLOGÍAS UTILIZADAS</h4>
                    <div className="flex flex-wrap gap-2">
                      {caso.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gradient-to-r from-slate-700/50 to-slate-600/50 rounded-full text-xs text-gray-300 border border-slate-600/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Resultados */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-green-400 mb-3">RESULTADOS OBTENIDOS</h4>
                    <div className="space-y-2">
                      {caso.results.map((result, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quote del cliente */}
                  {caso.clientQuote && (
                    <div className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-xl p-4 border-l-4 border-cyan-500">
                      <blockquote className="text-gray-300 italic">
                        "{caso.clientQuote}"
                      </blockquote>
                    </div>
                  )}

                  {/* Detalles del proyecto */}
                  <div className="mt-6 pt-6 border-t border-slate-700">
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-400">Duración:</span>
                        <span className="text-white ml-2">{caso.duration}</span>
                      </div>
                      <div>
                        <span className="text-gray-400">Equipo:</span>
                        <span className="text-white ml-2">{caso.teamSize}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats generales */}
          <div className="mt-20 bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl p-12 border border-slate-700/50">
            <h3 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Nuestros Números
            </h3>
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">{casosExito.length}+</div>
                <div className="text-gray-300">Casos de Éxito</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-400 mb-2">99.8%</div>
                <div className="text-gray-300">Uptime Promedio</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
                <div className="text-gray-300">Soporte Disponible</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-yellow-400 mb-2">100%</div>
                <div className="text-gray-300">Clientes Satisfechos</div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-12 border border-slate-700/50">
            <h3 className="text-3xl font-bold mb-4">¿Tu empresa será nuestro próximo caso de éxito?</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Descubre cómo podemos ayudarte a optimizar tu infraestructura tecnológica y alcanzar tus objetivos empresariales
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.location.href = '/#contacto'}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Solicitar Consulta Gratuita
              </button>
              <button 
                onClick={() => window.location.href = '/'}
                className="border border-cyan-500/50 hover:border-cyan-400 px-8 py-4 rounded-full text-lg transition-all duration-300 hover:bg-cyan-500/10"
              >
                Ver Todos los Servicios
              </button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CasosExitoPage;
