import React, { useEffect, useState, useRef } from 'react';
import { useAnimatedCounter } from '../../hooks/useAnimatedCounter';

// stats locales
const stats = [
  { number: "5000+", label: "Tickets Resueltos con Éxito" },
  { number: "50+", label: "Empresas Confían en Nosotros" },
  { number: "15+", label: "Años de Experiencia" },
  { number: "24/7", label: "Soporte Remoto y Monitoreo" }
];

// Hook personalizado para intersection observer
const useIntersectionObserver = () => {
  const [hasTriggered, setHasTriggered] = useState(false);
  const elementRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered) {
          setHasTriggered(true);
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [hasTriggered]);

  return { elementRef, hasTriggered };
};

const StatCard = ({ stat, index }) => {
  const { elementRef, hasTriggered } = useIntersectionObserver();
  const [hasStartedAnimation, setHasStartedAnimation] = useState(false);
  
  // numeric value for animation
  const numericValue = stat.number.includes('+') 
    ? parseInt(stat.number.replace('+', '')) 
    : stat.number === '24/7' 
      ? null 
      : parseInt(stat.number);

  const { count, startAnimation } = useAnimatedCounter(numericValue || 0, 1000, 0);
  
  useEffect(() => {
    if (hasTriggered && numericValue && !hasStartedAnimation) {
      setHasStartedAnimation(true);
      startAnimation();
    }
  }, [hasTriggered, numericValue, hasStartedAnimation, startAnimation, stat.number]);

  const displayValue = numericValue 
    ? `${count}${stat.number.includes('+') ? '+' : ''}`
    : stat.number;

  return (
    <div 
      ref={elementRef}
      className={`text-center transition-all duration-700 ${
        hasTriggered 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
        {displayValue}
      </div>
      <div className="text-gray-400">{stat.label}</div>
    </div>
  );
};

const Stats = () => {
  return (
    <section className="py-20 bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard 
              key={`${stat.number}-${index}`} 
              stat={stat} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;