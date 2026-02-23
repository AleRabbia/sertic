import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Card } from '../ui/Card';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { services } from '../../data/services';

const ServiceCard = ({ service, index }) => {
  const navigate = useNavigate();
  const { elementRef, hasBeenVisible } = useIntersectionObserver();
  const IconComponent = service.icon;

  const handleClick = () => {
    navigate(`/servicios/${service.slug}`);
  };

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
      <Card 
        className="group h-full flex flex-col cursor-pointer hover:border-sertic-cyan/50 transition-all duration-300 transform hover:scale-105"
        onClick={handleClick}
      >
        <div className={`text-${service.color}-400 mb-6 group-hover:scale-110 transition-transform duration-300`}>
          <IconComponent className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold mb-4 text-white group-hover:text-sertic-cyan transition-colors">
          {service.title}
        </h3>
        <p className="text-sm text-gray-400 mb-6 flex-grow">{service.description}</p>
        <ul className="space-y-2 mb-6">
          {service.features.slice(0, 3).map((feature, idx) => (
            <li key={idx} className="flex items-center text-sm text-gray-300">
              <CheckCircle className={`w-4 h-4 text-${service.color}-400 mr-2 flex-shrink-0`} />
              {feature}
            </li>
          ))}
        </ul>
        <div className="mt-auto">
          <span className="inline-flex items-center gap-2 text-sertic-cyan font-semibold group-hover:gap-4 transition-all">
            Ver más detalles
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </Card>
    </div>
  );
};

const Services = () => {
  return (
    <section id="servicios" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-sertic-cyan via-sertic-blue to-sertic-cyan bg-clip-text text-transparent">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ofrecemos soluciones tecnológicas completas para llevar tu negocio al siguiente nivel
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {services.map((service, index) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;