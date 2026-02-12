import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SuccessBadge from '../ui/SuccessBadge';
import Button from '../ui/Button';
import { heroSlides } from '../../data/sliceHero';
import serticLogo from '../../assets/brand/serticLogoWhite.png';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const navigate = useNavigate();

  const slide = heroSlides[currentSlide];

  /* =========================
     PRELOAD HERO IMAGES
     ========================= */
  useEffect(() => {
    // Preload current and next slide image
    heroSlides.forEach((s) => {
      const img = new Image();
      img.src = s.image;
    });
  }, []);

  /* =========================
     AUTOPLAY
     ========================= */
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

      {/* =========================
          IMÁGENES DE FONDO (CROSSFADE)
         ========================= */}
      <div className="absolute inset-0">
        {heroSlides.map((s, index) => {
          // Generate responsive srcsets for AVIF and WebP
          // Assumes files exist as: /hero/nodos.avif, /hero/nodos-480.avif, etc.
          const baseName = (s.image || '').split('/').pop()?.replace(/\.[^.]+$/, '');
          const sizes = [480, 768, 1280, 1920];
          
          const avifSrcSet = baseName
            ? sizes.map((w) => `/hero/${baseName}-${w}.avif ${w}w`).join(', ')
            : '';
          const webpSrcSet = baseName
            ? sizes.map((w) => `/hero/${baseName}-${w}.webp ${w}w`).join(', ')
            : '';

          return (
            <picture key={s.id} className={`absolute inset-0 block ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}>
              {avifSrcSet && <source type="image/avif" srcSet={avifSrcSet} sizes="100vw" />}
              {webpSrcSet && <source type="image/webp" srcSet={webpSrcSet} sizes="100vw" />}
              <img
                src={s.image}
                alt={s.title}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                width={1920}
                height={1080}
                className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ease-in-out"
              />
            </picture>
          );
        })}
        <div className="absolute inset-0 bg-black/65" />
      </div>

      {/* =========================
          CONTENIDO
         ========================= */}
      <div className="relative z-10 min-h-screen flex items-center justify-center text-center px-4">
        <div className="max-w-5xl">
          
          {/* Logo SOLO en slide 1 */}
          {currentSlide === 0 ? (
            <div className="flex justify-center mb-8">
              <img
                src={serticLogo}
                alt="SerTIC Tech Solutions"
                width={112}
                height={112}
                decoding="async"
                className="w-20 md:w-28 h-auto opacity-90 animate-spin-slow"
              />
            </div>
          ) : (
            <div className="flex justify-center mb-6">
              <div
                className={`bg-gradient-to-r ${slide.gradient} bg-clip-text`}
              >
                {slide.icon && (
                  <slide.icon
                    className="w-12 h-12 md:w-16 md:h-16"
                  />
                )}
              </div>
            </div>
          )}


          {/* Badge */}
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
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {slide.cta.action === 'casos' ? (
            // Si es casos de éxito → SuccessBadge
            <div onClick={() => handleCTA(slide.cta.action)} className="cursor-pointer">
              <SuccessBadge />
            </div>
          ) : (
            // Otros slides → Button normal
            <Button size="lg" icon onClick={() => handleCTA(slide.cta.action)}>
              {slide.cta.label}
            </Button>
          )}
          </div>
        </div>
      </div>

      {/* =========================
          FLECHAS
         ========================= */}
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

      {/* =========================
          DOTS
         ========================= */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`h-1.5 rounded-full transition-all duration-300 focus:outline-none ${
              currentSlide === i
                ? 'w-10 bg-sertic-cyan'
                : 'w-2.5 bg-sertic-white/40'
            }`}
            aria-label={`Ir al slide ${i + 1}`}
          />
        ))}
      </div>

      {/* =========================
          ANIMACIÓN LOGO
         ========================= */}
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
