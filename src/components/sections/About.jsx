import React from 'react';
import { Users, Shield, Headphones, Cloud, Server } from 'lucide-react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const FeatureItem = ({ icon: Icon, title, description, index }) => {
  const { elementRef, hasBeenVisible } = useIntersectionObserver();
  
  return (
    <div 
      ref={elementRef}
      className={`flex items-start gap-4 transition-all duration-700 ${
        hasBeenVisible 
          ? 'opacity-100 translate-x-0' 
          : 'opacity-0 translate-x-8'
      }`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <h4 className="text-lg font-semibold mb-2">{title}</h4>
        <p className="text-gray-400">{description}</p>
      </div>
    </div>
  );
};

const MetricCard = ({ icon: Icon, value, label, color }) => (
  <div className="text-center p-4 bg-gradient-to-br from-cyan-500/10 to-purple-600/10 rounded-2xl">
    <Icon className={`w-12 h-12 text-${color}-400 mx-auto mb-4`} />
    <div className="text-2xl font-bold">{value}</div>
    <div className="text-sm text-gray-400">{label}</div>
  </div>
);

const About = () => {
  const { elementRef: titleRef, hasBeenVisible: titleVisible } = useIntersectionObserver();
  const { elementRef: contentRef, hasBeenVisible: contentVisible } = useIntersectionObserver();

  const features = [
    {
      icon: Users,
      title: "Equipo Especializado",
      description: "Contamos con profesionales expertos en IT para garantizar soluciones eficientes y confiables."
    },
    {
      icon: Shield,
      title: "Seguridad y Cumplimiento",
      description: "Protegemos tus datos y sistemas siguiendo estándares de seguridad y normativas como ISO 27001 y NIST."
    },
    {
      icon: Headphones,
      title: "Soporte Continuo",
      description: "Nuestro soporte remoto 24/7 garantiza que tu infraestructura y sistemas funcionen sin interrupciones."
    }
  ];

  const metrics = [
    { icon: Cloud, value: "24/7", label: "Monitoreo", color: "green" },
    { icon: Users, value: "20+", label: "Especialistas", color: "pink" },
    { icon: Server, value: "15+", label: "Tecnologías", color: "cyan" },
    { icon: Shield, value: "99.9%", label: "Uptime", color: "purple" }
  ];

  return (
    <section id="nosotros" className="py-20 bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div 
              ref={titleRef}
              className={`transition-all duration-700 ${
                titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                ¿Por qué SerTIC?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Brindamos soluciones IT confiables para empresas, con soporte continuo y monitoreado, infraestructura segura y consultoría estratégica para proteger y potenciar tu negocio.
              </p>
            </div>
            
            <div className="space-y-6">
              {features.map((feature, index) => (
                <FeatureItem 
                  key={feature.title}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  index={index}
                />
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-3xl blur-3xl"></div>
            <div 
              ref={contentRef}
              className={`relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50 transition-all duration-700 ${
                contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="grid grid-cols-2 gap-6">
                {metrics.map((metric, index) => (
                  <MetricCard 
                    key={metric.label}
                    icon={metric.icon}
                    value={metric.value}
                    label={metric.label}
                    color={metric.color}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
