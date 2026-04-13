import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Navigation, Footer } from '../components/layout';
import { useNavigate } from 'react-router-dom';
import { Award, ArrowLeft, Filter, Users, Clock, CheckCircle, TrendingUp } from 'lucide-react';
import { casosPublicados, getCasesByCategory, getCasesBySector } from '../data/casosExito';
import QuoteModal from '../components/ui/QuoteModal';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const CasosExitoPage = () => {
  const { t } = useTranslation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [expandedMetrics, setExpandedMetrics] = useState({});
  const [expandedTechs, setExpandedTechs] = useState({});
  const [expandedResults, setExpandedResults] = useState({});
  const [activeFilter, setActiveFilter] = useState('todos');
  const [filterType, setFilterType] = useState('category');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMetrics = (casoId) => {
    setExpandedMetrics(prev => ({
      ...prev,
      [casoId]: !prev[casoId]
    }));
  };

  const toggleTechs = (casoId) => {
    setExpandedTechs(prev => ({
      ...prev,
      [casoId]: !prev[casoId]
    }));
  };

  const toggleResults = (casoId) => {
    setExpandedResults(prev => ({
      ...prev,
      [casoId]: !prev[casoId]
    }));
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const getCategoryLabel = (cat) => {
    if (!cat) return t('casosExito.sinCategoria');
    return t(`casosExito.${cat}`, cat);
  };

  const getSectorLabel = (sector) => {
    if (!sector) return t('casosExito.sinSector');
    return t(`casosExito.${sector}`, sector);
  };

  const categoryFilters = [
    { id: 'todos', name: t('casosExito.todos') },
    { id: 'infraestructura', name: t('casosExito.infraestructura') },
    { id: 'soporte', name: t('casosExito.soporte') },
    { id: 'staffing', name: t('casosExito.staffing') }
  ];

  const sectorFilters = [
    { id: 'todos', name: t('casosExito.todosSectores') },
    { id: 'servicios', name: t('casosExito.servicios') },
    { id: 'educacion', name: t('casosExito.educacion') },
    { id: 'tecnologia', name: t('casosExito.tecnologia') }
  ];
  
  const CaseCard = ({ caso, index }) => {
    const { elementRef, hasBeenVisible } = useIntersectionObserver();

    return (
      <div
        ref={elementRef}
        className={`transition-all duration-700 ${
          hasBeenVisible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-8'
        }`}
        style={{ transitionDelay: `${index * 150}ms` }}
      >
        <div className="group h-full bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/30 hover:border-sertic-cyan/50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/20">
          {/* Header con logo */}
          <div className="relative p-8 bg-gradient-to-r from-slate-800/80 to-slate-700/80 border-b border-slate-700/50">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-sertic-cyan/20 to-sertic-blue/20 backdrop-blur-sm rounded-lg p-2 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <img
                  loading="lazy"
                  src={caso.logo}
                  alt={caso.title}
                  className="max-w-full max-h-full object-contain"
                  style={{ filter: 'brightness(0) invert(1)' }}
                />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white group-hover:text-sertic-cyan transition-colors">{caso.title}</h3>
                <p className="text-sm text-gray-400 mt-1">{caso.subtitle}</p>
              </div>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 mt-4">
              {Array.isArray(caso.category)
                ? caso.category.map((cat, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gradient-to-r from-sertic-cyan/20 to-sertic-blue/20 border border-sertic-cyan/50 rounded-full text-xs font-semibold text-sertic-light hover:from-sertic-cyan/30 hover:to-sertic-blue/30 transition-all"
                  >
                    {getCategoryLabel(cat)}
                  </span>
                ))
                : (
                  <span className="px-3 py-1 bg-gradient-to-r from-sertic-cyan/20 to-sertic-blue/20 border border-sertic-cyan/50 rounded-full text-xs font-semibold text-sertic-light">
                    {caso.category ? getCategoryLabel(caso.category) : t('casosExito.sinCategoria')}
                  </span>
                )}
              <span className="px-3 py-1 bg-slate-700/50 border border-slate-600/50 rounded-full text-xs text-gray-300">
                {caso.sector ? getSectorLabel(caso.sector) : t('casosExito.sinSector')}
              </span>
            </div>

            {/* Info rápida */}
            <div className="grid grid-cols-2 gap-3 mt-4 text-sm">
              <div className="flex items-center gap-2 text-gray-400 group-hover:text-gray-300 transition-colors">
                <Clock className="w-4 h-4 text-sertic-cyan" />
                {caso.duration}
              </div>
              <div className="flex items-center gap-2 text-gray-400 group-hover:text-gray-300 transition-colors">
                <Users className="w-4 h-4 text-sertic-blue" />
                {caso.teamSize}
              </div>
            </div>
          </div>

          {/* Contenido */}
          <div className="p-8">
            {/* Descripción */}
            <p className="text-gray-300 mb-6 leading-relaxed text-sm">
              {caso.detailedDescription}
            </p>

            {/* Solución */}
            <div className="mb-6">
              <h4 className="text-xs font-bold text-sertic-cyan mb-3 uppercase tracking-wider flex items-center gap-2">
                <span className="w-1 h-4 bg-gradient-to-b from-sertic-cyan to-sertic-blue rounded"></span>
                {t('casosExito.solucionImplementada')}
              </h4>
              <div className="space-y-2">
                {(expandedMetrics[caso.id] ? caso.metrics : caso.metrics.slice(0, 3)).map((metric, index) => (
                  <div key={index} className="flex items-start gap-2 group/item">
                    <CheckCircle className="w-4 h-4 text-sertic-cyan flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                    <span className="text-gray-300 text-sm">{metric}</span>
                  </div>
                ))}
                {caso.metrics.length > 3 && (
                  <button
                    onClick={() => toggleMetrics(caso.id)}
                    className="mt-2 px-3 py-1 bg-slate-700/30 hover:bg-slate-700/50 rounded-lg text-xs text-gray-400 hover:text-gray-300 transition-all"
                  >
                    {expandedMetrics[caso.id]
                      ? t('casosExito.verMenos')
                      : t('casosExito.mas', { count: caso.metrics.length - 3 })
                    }
                  </button>
                )}
              </div>
            </div>

            {/* Resultados */}
            <div className="mb-6">
              <h4 className="text-xs font-bold text-sertic-cyan mb-3 uppercase tracking-wider flex items-center gap-2">
                <span className="w-1 h-4 bg-gradient-to-b from-sertic-cyan to-sertic-blue rounded"></span>
                {t('casosExito.resultadosClave')}
              </h4>
              <div className="space-y-2">
                {(expandedResults[caso.id] ? caso.results : caso.results.slice(0, 3)).map((result, index) => (
                  <div key={index} className="flex items-start gap-2 group/item">
                    <TrendingUp className="w-4 h-4 text-sertic-cyan flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform" />
                    <span className="text-gray-300 text-sm">{result}</span>
                  </div>
                ))}
                {caso.results.length > 3 && (
                  <button
                    onClick={() => toggleResults(caso.id)}
                    className="mt-2 px-3 py-1 bg-slate-700/30 hover:bg-slate-700/50 rounded-lg text-xs text-gray-400 hover:text-gray-300 transition-all"
                  >
                    {expandedResults[caso.id]
                      ? t('casosExito.verMenos')
                      : t('casosExito.mas', { count: caso.results.length - 3 })
                    }
                  </button>
                )}
              </div>
            </div>

            {/* Tecnologías */}
            <div className="mb-6">
              <h4 className="text-xs font-bold text-sertic-blue mb-3 uppercase tracking-wider flex items-center gap-2">
                <span className="w-1 h-4 bg-gradient-to-b from-sertic-blue to-sertic-cyan rounded"></span>
                {t('casosExito.stackTecnologico')}
              </h4>
              <div className="flex flex-wrap gap-2">
                {(expandedTechs[caso.id] ? caso.technologies : caso.technologies.slice(0, 5)).map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gradient-to-r from-sertic-blue/10 to-sertic-cyan/10 border border-sertic-blue/30 rounded-full text-xs text-sertic-light hover:border-sertic-blue/60 hover:bg-gradient-to-r hover:from-sertic-blue/20 hover:to-sertic-cyan/20 transition-all"
                  >
                    {tech}
                  </span>
                ))}
                {caso.technologies.length > 5 && (
                  <button
                    onClick={() => toggleTechs(caso.id)}
                    className="px-3 py-1 bg-slate-700/30 rounded-full text-xs text-gray-400 hover:text-gray-300 hover:bg-slate-700/50 transition-all"
                  >
                    {expandedTechs[caso.id]
                      ? t('casosExito.verMenos')
                      : t('casosExito.mas', { count: caso.technologies.length - 5 })
                    }
                  </button>
                )}
              </div>
            </div>

            {/* Testimonio del cliente */}
            {/*{caso.clientQuote && (
              <div className="bg-gradient-to-r from-sertic-cyan/10 via-sertic-blue/10 to-purple-500/10 hover:from-sertic-cyan/15 hover:via-sertic-blue/15 hover:to-purple-500/15 rounded-xl p-4 border-l-4 border-sertic-cyan transition-all">
                <blockquote className="text-gray-300 italic text-sm">
                  "{caso.clientQuote}"
                </blockquote>
              </div>
            )}*/}
          </div>
        </div>
      </div>
    );
  };

  const getFilteredCases = () => {
    if (activeFilter === 'todos') return casosPublicados;

    if (filterType === 'category') {
      return getCasesByCategory(activeFilter);
    } else {
      return getCasesBySector(activeFilter);
    }
  };

  const validCases = getFilteredCases().filter(
    (caso) => caso && caso.category && caso.sector
  );


  return (
    <div className="min-h-screen bg-gradient-to-br from-sertic-blue via-sertic-black to-sertic-blue text-sertic-white overflow-hidden">
      <Navigation />

      <main className="pt-20">
        {/* Header */}
        <section className="relative py-16 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Botón Volver */}
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-sertic-cyan hover:text-sertic-light transition-colors mb-10 group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              {t('common.back')}
            </button>

            {/* Título */}
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sertic-cyan via-sertic-blue to-sertic-cyan bg-clip-text text-transparent">
                {t('casosExito.titulo')}
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                {t('casosExito.subtitulo')}
              </p>
            </div>

            {/* Filtros - Tipo */}
            <div className="flex justify-center mb-8">
              <div className="bg-gradient-to-r from-sertic-cyan/10 to-sertic-blue/10 backdrop-blur-sm rounded-full p-1 border border-sertic-cyan/30 inline-flex">
                <button
                  onClick={() => { setFilterType('category'); setActiveFilter('todos'); }}
                  className={`px-8 py-3 rounded-full transition-all duration-300 font-semibold ${filterType === 'category'
                      ? 'bg-gradient-to-r from-sertic-cyan to-sertic-blue text-white shadow-lg shadow-sertic-cyan/30'
                      : 'text-sertic-light hover:text-white'
                    }`}
                >
                  {t('casosExito.porServicio')}
                </button>
                <button
                  onClick={() => { setFilterType('sector'); setActiveFilter('todos'); }}
                  className={`px-8 py-3 rounded-full transition-all duration-300 font-semibold ${filterType === 'sector'
                      ? 'bg-gradient-to-r from-sertic-cyan to-sertic-blue text-white shadow-lg shadow-sertic-cyan/30'
                      : 'text-sertic-light hover:text-white'
                    }`}
                >
                  {t('casosExito.porSector')}
                </button>
              </div>
            </div>

            {/* Botones de filtro */}
            <div className="flex justify-center mb-16">
              <div className="flex flex-wrap gap-3 justify-center">
                {(filterType === 'category' ? categoryFilters : sectorFilters).map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`px-6 py-3 rounded-full transition-all duration-300 font-medium transform hover:scale-105 ${activeFilter === filter.id
                        ? 'bg-gradient-to-r from-sertic-cyan to-sertic-blue text-white shadow-lg shadow-sertic-cyan/30'
                        : 'bg-gradient-to-r from-sertic-cyan/10 to-sertic-blue/10 text-sertic-light border border-sertic-cyan/30 hover:border-sertic-cyan/60 hover:bg-gradient-to-r hover:from-sertic-cyan/20 hover:to-sertic-blue/20'
                      }`}
                  >
                    {filter.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Casos Grid */}
        <section className="py-20 bg-gradient-to-b from-transparent via-slate-900/20 to-transparent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {validCases.length > 0 ? (
                validCases.map((caso, index) => (
                  <CaseCard key={caso.id} caso={caso} index={index} />
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-gray-400 text-lg">{t('casosExito.noCases')}</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-black/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <Award className="w-14 h-14 text-sertic-cyan mx-auto mb-4" />
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-sertic-cyan via-sertic-blue to-sertic-cyan bg-clip-text text-transparent">
                {t('casosExito.resultadosQueHablan')}
              </h2>
              <p className="text-gray-400">{t('casosExito.metricasCompromiso')}</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { value: `${casosPublicados.length}+`, label: t('casosExito.stats.cases') },
                { value: '99.8%', label: t('casosExito.stats.uptime') },
                { value: '24/7', label: t('casosExito.stats.support') },
                { value: '100%', label: t('casosExito.stats.clients') }
              ].map((stat, index) => {
                const { elementRef, hasBeenVisible } = useIntersectionObserver();
                return (
                  <div
                    key={index}
                    ref={elementRef}
                    className={`transition-all duration-700 ${
                      hasBeenVisible
                        ? 'opacity-100 translate-y-0'
                        : 'opacity-0 translate-y-8'
                    }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div className="bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/30 hover:border-sertic-cyan/50 text-center transition-all duration-300 hover:scale-105">
                      <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-sertic-cyan to-sertic-blue bg-clip-text text-transparent mb-2">
                        {stat.value}
                      </div>
                      <div className="text-gray-400 font-medium">{stat.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-slate-800/60 to-slate-900/60 backdrop-blur-sm rounded-3xl p-12 border border-slate-700/30 hover:border-sertic-cyan/50 transition-all duration-300">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center bg-gradient-to-r from-sertic-cyan to-sertic-blue bg-clip-text text-transparent">
                {t('casosExito.ctaTitle')}
              </h2>
              <p className="text-xl text-gray-300 mb-10 text-center max-w-2xl mx-auto">
                {t('casosExito.ctaSubtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleOpenModal}
                  className="bg-gradient-to-r from-sertic-cyan to-sertic-blue hover:from-sertic-blue hover:to-sertic-cyan text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/30"
                >
                  {t('testimonios.ctaButton')}
                </button>
                <button
                  onClick={() => navigate('/servicios/infraestructura-it')}
                  className="border-2 border-sertic-cyan/50 hover:border-sertic-cyan text-sertic-cyan hover:text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-sertic-cyan/10"
                >
                  {t('casosExito.verServicios')}
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Modal de Cotización */}
      <QuoteModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />

      <Footer />
    </div>
  );
};

export default CasosExitoPage;
