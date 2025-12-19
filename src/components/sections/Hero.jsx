import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import Button from '../ui/Button';
import { heroSlides } from '../../data/sliceHero';
import serticLogo from '../../assets/brand/serticLogoWhite.png';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const navigate = useNavigate();

  const slide = heroSlides[currentSlide];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handleCTA = () => {
    if (slide.cta.action === 'contacto') {
      document
        .querySelector('#contacto')
        ?.scrollIntoView({ behavior: 'smooth' });
    }

    if (slide.cta.action === 'casos') {
      navigate('/casos-de-exito');
    }
  };

  return (
    <section id="inicio" className="relative min-h-screen overflow-hidden">

      {/* Imagen de fondo */}
      <div className="absolute inset-0">
        <img
          src={slide.image}
          alt={slide.title}
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/65" />
      </div>

      {/* Contenido */}
      <div className="relative z-10 min-h-screen flex items-center justify-center text-center px-4">
        <div className="max-w-5xl">

          {/* Logo SOLO en el slide 1 */}
          {currentSlide === 0 && (
            <div className="flex justify-center mb-8">
              <img
                src={serticLogo}
                alt="SerTIC Tech Solutions"
                className="w-20 md:w-28 h-auto opacity-90 animate-spin-slow"
              />
            </div>
          )}


          {/* Badge opcional */}
          {slide.badge && (
            <div className="inline-block mb-4 px-4 py-2 bg-green-500/20 border border-green-500/40 rounded-full text-green-400 font-semibold text-sm">
              {slide.badge}
            </div>
          )}

          {/* Título */}
          <h1
            className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r ${slide.gradient} bg-clip-text text-transparent`}
          >
            {slide.title}
          </h1>

          {/* Subtítulo */}
          <p className="text-lg md:text-xl text-sertic-light mb-8 max-w-3xl mx-auto">
            {slide.subtitle}
          </p>

          {/* CTA */}
          <Button size="lg" onClick={handleCTA}>
            {slide.cta.label}
          </Button>
        </div>
      </div>

      {/* Flechas */}
      <button
        onClick={() =>
          setCurrentSlide(
            (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
          )
        }
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 p-3 rounded-full"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="text-white" />
      </button>

      <button
        onClick={() =>
          setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
        }
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 p-3 rounded-full"
        aria-label="Slide siguiente"
      >
        <ChevronRight className="text-white" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-3 rounded-full transition-all ${
              currentSlide === i
                ? 'w-12 bg-sertic-cyan'
                : 'w-3 bg-white/40'
            }`}
            aria-label={`Ir al slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Animación */}
      <style>{`
        @keyframes slow-spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-spin-slow {
          animation: slow-spin 20s linear infinite;
        }
      `}</style>

    </section>
  );
};

export default Hero;
