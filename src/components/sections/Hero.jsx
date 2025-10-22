import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import Button from '../ui/Button';
import { GradientBackground } from '../ui/GradientBackground';

const Hero = () => {

  const navigate = useNavigate(); 
  
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
    navigate('/casos-de-exito');
  };

  return (
    <section id="inicio" className="min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <GradientBackground>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
              La solución IT
              <br />
              que tu empresa necesita
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
              Soporte, infraestructura, consultoría IT y staffing adaptados a tus necesidades.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                icon
                onClick={handleContactClick}
              >
                Solicitar Asesoría
              </Button>
              <Button 
                variant="secondary" 
                size="lg"
                onClick={handleCasosExitoClick}
              >
                Casos de Éxito
              </Button>
            </div>
          </div>
          
          <button 
            onClick={handleScrollToServices}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hover:text-cyan-400 transition-colors duration-200"
            aria-label="Scroll to services"
          >
            <ChevronDown className="w-8 h-8 text-cyan-400" />
          </button>
        </div>
      </GradientBackground>
    </section>
  );
};

export default Hero;