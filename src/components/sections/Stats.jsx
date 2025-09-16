import React, { useEffect } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { useAnimatedCounter } from '../../hooks/useAnimatedCounter';
import { stats } from '../../data/stats';

const StatCard = ({ stat, index }) => {
  const { elementRef, isVisible, hasBeenVisible } = useIntersectionObserver();
  
  // Extract numeric value for animation (if it's a number)
  const numericValue = stat.number.includes('+') 
    ? parseInt(stat.number.replace('+', '')) 
    : stat.number === '24/7' 
      ? null 
      : parseInt(stat.number);

  const { count, startAnimation } = useAnimatedCounter(numericValue || 0, 2000);
  
  useEffect(() => {
    if (isVisible && numericValue && !hasBeenVisible) {
      startAnimation();
    }
  }, [isVisible, numericValue, hasBeenVisible, startAnimation]);

  const displayValue = numericValue 
    ? `${count}${stat.number.includes('+') ? '+' : ''}`
    : stat.number;

  return (
    <div 
      ref={elementRef}
      className={`text-center transition-all duration-700 ${
        hasBeenVisible 
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
