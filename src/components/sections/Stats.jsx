import React, { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useAnimatedCounter } from '../../hooks/useAnimatedCounter';

const rawStats = [
  { number: "6000+", labelKey: "stats.tickets" },
  { number: "50+", labelKey: "stats.empresas" },
  { number: "15+", labelKey: "stats.experiencia" },
  { number: "24/7", labelKey: "stats.soporte" }
];

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

  const { t } = useTranslation();

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
      <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-sertic-cyan via-sertic-blue to-sertic-cyan bg-clip-text text-transparent mb-2">
        {displayValue}
      </div>
      <div className="text-gray-400">{t(stat.labelKey)}</div>
    </div>
  );
};

const Stats = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-sertic-cyan via-sertic-blue to-sertic-cyan bg-clip-text text-transparent">
            {t('stats.titulo')}
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            {t('stats.descripcion', 'Datos de nuestro desempeño')}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {rawStats.map((stat, index) => (
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