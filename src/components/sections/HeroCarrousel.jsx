import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ChevronDown, ExternalLink, Award, Users, Sparkles } from 'lucide-react';
import { technologies } from '../../data/technologies';
import { memberships } from '../../data/memberships';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [scales, setScales] = useState([1, 1, 1]);
  const slideRefs = useRef([]);

  const slides = [
    {
      id: 'hero',
      title: 'La solución IT',
      subtitle: 'que tu empresa necesita',
      description: 'Soporte remoto, infraestructura, consultoría IT y staffing adaptados a tus necesidades.',
      type: 'hero'
    },
    {
      id: 'technologies',
      title: 'Tecnologías',
      subtitle: 'que Dominamos',
      description: 'Trabajamos con las mejores herramientas del mercado',
      type: 'technologies'
    },
    {
      id: 'memberships',
      title: 'Membresías',
      subtitle: 'y Certificaciones',
      description: 'Formamos parte de las principales organizaciones tecnológicas',
      type: 'memberships'
    }
  ];

  useEffect(() => {
    const calculateScales = () => {
      const newScales = slideRefs.current.map((ref) => {
        if (!ref) return 1;
        
        const containerHeight = window.innerHeight - 300; // Altura disponible
        const contentHeight = ref.scrollHeight;
        
        if (contentHeight > containerHeight) {
          return Math.min(containerHeight / contentHeight, 1);
        }
        return 1;
      });
      
      setScales(newScales);
    };

    // Calcular después de que el DOM esté listo
    setTimeout(calculateScales, 100);
    
    window.addEventListener('resize', calculateScales);
    return () => window.removeEventListener('resize', calculateScales);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const handleScrollToServices = () => {
    const servicesSection = document.querySelector('#servicios');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    const contactSection = document.querySelector('#contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCasosExitoClick = () => {
    window.location.href = '/casos-de-exito';
  };

  const handleConsultClick = () => {
    const modal = document.getElementById("modal-cotizacion");
    if (modal) {
      modal.classList.remove("hidden");
      modal.focus();
    }
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden pt-24 pb-20">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[600px] h-[600px] -top-48 -left-48 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute w-[600px] h-[600px] -bottom-48 -right-48 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute w-[400px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="absolute inset-0 bg-black/20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Carousel Container */}
        <div className="relative min-h-[calc(100vh-200px)] flex items-center justify-center">
          {/* Slides */}
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-all duration-700 flex items-center justify-center ${
                index === currentSlide
                  ? 'opacity-100 translate-x-0'
                  : index < currentSlide
                  ? 'opacity-0 -translate-x-full'
                  : 'opacity-0 translate-x-full'
              }`}
            >
              <div 
                ref={(el) => slideRefs.current[index] = el}
                className="w-full transition-transform duration-300 origin-center"
                style={{ transform: `scale(${scales[index]})` }}
              >
                {slide.type === 'hero' && (
                  <div className="text-center w-full max-w-5xl mx-auto">
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm px-4 py-2 rounded-full border border-cyan-500/30 mb-8">
                      <Sparkles className="w-4 h-4 text-cyan-400" />
                      <span className="text-sm text-cyan-300 font-medium">Soluciones IT de última generación</span>
                    </div>
                    
                    <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight tracking-tight">
                      {slide.title}
                      <br />
                      {slide.subtitle}
                    </h1>
                    
                    <p className="text-2xl md:text-3xl mb-12 text-gray-300 max-w-4xl mx-auto font-light leading-relaxed">
                      {slide.description}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                      <button 
                        onClick={handleContactClick}
                        className="group relative bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 px-10 py-5 rounded-2xl text-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-cyan-500/50 overflow-hidden"
                      >
                        <span className="relative z-10">Solicitar Asesoría</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </button>
                      <button 
                        onClick={handleCasosExitoClick}
                        className="bg-white/5 backdrop-blur-sm border-2 border-white/20 hover:border-cyan-400/50 hover:bg-white/10 px-10 py-5 rounded-2xl text-xl font-semibold transition-all duration-300 transform hover:scale-105"
                      >
                        Casos de Éxito
                      </button>
                    </div>
                  </div>
                )}

                {slide.type === 'technologies' && (
                  <div className="text-center w-full">
                    <div className="mb-16">
                      <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                        {slide.title}
                        <br />
                        {slide.subtitle}
                      </h2>
                      <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light">
                        {slide.description}
                      </p>
                    </div>
                    
                    {/* Grid de tecnologías */}
                    <div className="max-w-6xl mx-auto mb-12">
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                        {technologies.map((tech) => (
                          <div
                            key={tech.id}
                            className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 transition-all duration-300"
                          >
                            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                              <img
                                loading="lazy"
                                src={tech.logo}
                                alt={`Logo de ${tech.name}`}
                                className="max-w-full max-h-full object-contain opacity-90"
                              />
                            </div>
                            <h3 className="text-base font-semibold text-white/90">
                              {tech.name}
                            </h3>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="max-w-2xl mx-auto">
                      <p className="text-gray-400 mb-6 text-lg">
                        Dominamos un ecosistema amplio de tecnologías y seguimos sumando innovación
                      </p>
                      <button 
                        onClick={handleConsultClick}
                        className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 px-10 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl"
                      >
                        Consulta sobre tu tecnología
                      </button>
                    </div>
                  </div>
                )}

                {slide.type === 'memberships' && (
                  <div className="text-center w-full">
                    <div className="mb-16">
                      <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                        {slide.title}
                        <br />
                        {slide.subtitle}
                      </h2>
                      <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light">
                        {slide.description}
                      </p>
                    </div>
                    
                    {/* Membresías */}
                    <div className="max-w-5xl mx-auto mb-12">
                      <div className="grid md:grid-cols-3 gap-8">
                        {memberships.map((membership) => (
                          <div
                            key={membership.id}
                            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/20"
                          >
                            <div className="w-20 h-20 bg-white rounded-2xl p-4 mx-auto mb-6 shadow-2xl">
                              <img
                                src={membership.logo}
                                alt={`Logo de ${membership.name}`}
                                className="w-full h-full object-contain"
                              />
                            </div>
                            
                            <h3 className="text-2xl font-bold text-white mb-3">
                              {membership.name}
                            </h3>
                            
                            <p className="text-gray-300 mb-6 leading-relaxed">
                              {membership.description}
                            </p>
                            
                            <div className="flex items-center justify-center gap-3 mb-4">
                              {membership.type === "technology" ? (
                                <div className="flex items-center gap-2 bg-cyan-500/20 px-4 py-2 rounded-full">
                                  <Users className="w-4 h-4 text-cyan-400" />
                                  <span className="text-sm text-cyan-300 font-medium">Polo Tecnológico</span>
                                </div>
                              ) : membership.type === "chamber" ? (
                                <div className="flex items-center gap-2 bg-purple-500/20 px-4 py-2 rounded-full">
                                  <Award className="w-4 h-4 text-purple-400" />
                                  <span className="text-sm text-purple-300 font-medium">Cámara Empresarial</span>
                                </div>
                              ) : (
                                <div className="flex items-center gap-2 bg-green-500/20 px-4 py-2 rounded-full">
                                  <Award className="w-4 h-4 text-green-400" />
                                  <span className="text-sm text-green-300 font-medium">Certificación</span>
                                </div>
                              )}
                            </div>
                            
                            <a
                              href={membership.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                            >
                              Ver más información
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Beneficios */}
                    <div className="max-w-5xl mx-auto bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl p-10 border border-cyan-500/20 backdrop-blur-sm">
                      <h3 className="text-2xl font-bold text-white mb-10">¿Qué significa esto para ti?</h3>
                      <div className="grid md:grid-cols-3 gap-8">
                        <div className="space-y-4">
                          <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                            <Award className="w-8 h-8 text-white" />
                          </div>
                          <h4 className="text-xl font-bold text-white">Calidad Certificada</h4>
                          <p className="text-gray-300 leading-relaxed">Cumplimos con los más altos estándares de la industria tecnológica</p>
                        </div>
                        <div className="space-y-4">
                          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                            <Users className="w-8 h-8 text-white" />
                          </div>
                          <h4 className="text-xl font-bold text-white">Red de Contactos</h4>
                          <p className="text-gray-300 leading-relaxed">Acceso a la mejor red tecnológica y empresarial del país</p>
                        </div>
                        <div className="space-y-4">
                          <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                            <Sparkles className="w-8 h-8 text-white" />
                          </div>
                          <h4 className="text-xl font-bold text-white">Innovación Constante</h4>
                          <p className="text-gray-300 leading-relaxed">Siempre al día con las últimas tendencias y tecnologías</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-8 top-1/2 -translate-y-1/2 bg-white/5 backdrop-blur-md hover:bg-white/10 p-4 rounded-2xl transition-all duration-300 border border-white/10 hover:border-cyan-500/50 z-20 group"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-white/70 group-hover:text-cyan-400 transition-colors" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-8 top-1/2 -translate-y-1/2 bg-white/5 backdrop-blur-md hover:bg-white/10 p-4 rounded-2xl transition-all duration-300 border border-white/10 hover:border-cyan-500/50 z-20 group"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-white/70 group-hover:text-cyan-400 transition-colors" />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center gap-4 mt-12">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(index)}
              className={`transition-all duration-500 rounded-full ${
                index === currentSlide
                  ? 'w-16 h-4 bg-gradient-to-r from-cyan-400 to-purple-400 shadow-lg shadow-cyan-500/50'
                  : 'w-4 h-4 bg-white/20 hover:bg-white/40 border border-white/30'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Scroll Down Button */}
        <button
          onClick={handleScrollToServices}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:text-cyan-400 transition-colors duration-200 group"
          aria-label="Scroll to services"
        >
          <div className="flex flex-col items-center gap-2">
            <ChevronDown className="w-8 h-8 text-cyan-400 group-hover:text-cyan-300" />
            <span className="text-xs text-gray-400 group-hover:text-cyan-400 transition-colors">Explorar servicios</span>
          </div>
        </button>
      </div>
    </section>
  );
};

export default HeroCarousel;