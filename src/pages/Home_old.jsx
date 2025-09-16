import logo2a from "../assets/logo2a.png";

import React, { useState, useEffect } from 'react';
import {  Mail,  MapPin,
  ChevronDown, Code, Smartphone, Cloud, Shield, Users, CheckCircle, 
  Menu, X, ArrowRight, Zap, Globe, Database, Headphones, Server, 
  Phone
} from "lucide-react";


const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
  {
    icon: <Headphones className="w-8 h-8" />, // soporte
    title: "Soporte Remoto",
    description: "Atención rápida y eficiente para resolver incidencias de forma remota.",
    features: ["Mesa de ayuda", "Resolución de tickets", "Asistencia en tiempo real", "SLA garantizados"]
  },
  {
    icon: <Server className="w-8 h-8" />, // infraestructura
    title: "Infraestructura",
    description: "Diseño, implementación y mantenimiento de la infraestructura tecnológica de tu empresa.",
    features: ["Servidores Windows & Linux", "Cloud (AWS, GCP)", "Redes y comunicaciones", "Gestión de backups"]
  },
  {
    icon: <Shield className="w-8 h-8" />, // consultoría
    title: "Consultoría",
    description: "Auditorías, seguridad informática y planes estratégicos para proteger tu negocio.",
    features: ["Ciberseguridad", "Auditorías IT", "Normas ISO 27001", "Planes de continuidad"]
  },
  {
    icon: <Users className="w-8 h-8" />, // staffing
    title: "Staffing",
    description: "Talento especializado para reforzar tu equipo de tecnología según tus necesidades.",
    features: ["Perfiles técnicos", "Asignación flexible", "Soporte a proyectos", "Recursos on-demand"]
  }
];


  const stats = [
    { number: "5000+", label: "Tickets Resueltos con Éxito" },
    { number: "50+", label: "Empresas Confían en Nosotros" },
    { number: "15+", label: "Años de Experiencia" },
    { number: "24/7", label: "Soporte Remoto y Monitoreo" }
  ];

  const testimonials = [
    {
      name: "Alejandra Tetamante",
      company: "ARROWWS ARGENTINA SRL",
      text: "SerTIC transformó completamente nuestra infraestructura IT. Su equipo es excepcional.",
      rating: 5
    },
    {
      name: "Armando Bacolla",
      company: "LETIS",
      text: "SerTIC nos ayudó a migrar nuestra infraestructura a la nube sin interrupciones. La comunicación y seguimiento fueron excelentes en todo momento.",
      rating: 5
    },
    {
      name: "Alexander Grivarello",
      company: "POLO TECNOLÓGICO ROSARIO",
      text: "El equipo de SerTIC combina experiencia técnica con atención personalizada. Recomiendo sus servicios para cualquier empresa que busque eficiencia y confiabilidad en IT",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-black/80 backdrop-blur-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              {/*<div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>*/}
              <div className="w-10 h-10 flex items-center justify-center">
          <img 
            src="/src/assets/logo2a.png" 
            alt="SerTIC Tech Solutions" 
            className="w-full h-full object-contain rounded-xl"
          />
        </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                SerTIC Tech Solutions
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#inicio" className="hover:text-cyan-400 transition-colors">Inicio</a>
              <a href="#servicios" className="hover:text-cyan-400 transition-colors">Servicios</a>
              <a href="#nosotros" className="hover:text-cyan-400 transition-colors">Nosotros</a>
              <a href="#contacto" className="hover:text-cyan-400 transition-colors">Contacto</a>
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105">
                Cotización
              </button>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-lg">
            <div className="px-4 py-6 space-y-4">
              <a href="#inicio" className="block hover:text-cyan-400">Inicio</a>
              <a href="#servicios" className="block hover:text-cyan-400">Servicios</a>
              <a href="#nosotros" className="block hover:text-cyan-400">Nosotros</a>
              <a href="#contacto" className="block hover:text-cyan-400">Contacto</a>
              <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 py-2 rounded-full">
                Cotización
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="min-h-screen flex items-center justify-center relative">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent leading-tight">
              La solución IT
              <br />
              que tu empresa necesita
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
              Soporte remoto, infraestructura, consultoría IT y staffing adaptados a tus necesidades.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                Solicitar Asesoría
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-cyan-500/50 hover:border-cyan-400 px-8 py-4 rounded-full text-lg transition-all duration-300 hover:bg-cyan-500/10">
                Casos de Éxito
              </button>
            </div>
          </div>
          
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-cyan-400" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Nuestros Servicios
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ofrecemos soluciones tecnológicas completas para llevar tu negocio al siguiente nivel
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-20 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                ¿Por qué SerTIC?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Brindamos soluciones IT confiables para empresas, con soporte continuo, infraestructura segura y consultoría estratégica para proteger y potenciar tu negocio.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6" />
                    </div>
                    <div>
                    <h4 className="text-lg font-semibold mb-2">Equipo Especializado</h4>
                    <p className="text-gray-400">Contamos con profesionales expertos en IT para garantizar soluciones eficientes y confiables.</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6" />
                    </div>
                    <div>
                    <h4 className="text-lg font-semibold mb-2">Seguridad y Cumplimiento</h4>
                    <p className="text-gray-400">Protegemos tus datos y sistemas siguiendo estándares de seguridad y normativas como ISO 27001.</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Headphones className="w-6 h-6" />
                    </div>
                    <div>
                    <h4 className="text-lg font-semibold mb-2">Soporte Continuo</h4>
                    <p className="text-gray-400">Nuestro soporte remoto 24/7 garantiza que tu infraestructura y sistemas funcionen sin interrupciones.</p>
                    </div>
                </div>
                </div>

            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50">
                <div className="grid grid-cols-2 gap-6">                                  
                  <div className="text-center p-4 bg-gradient-to-br from-cyan-500/10 to-purple-600/10 rounded-2xl">
                    <Cloud className="w-12 h-12 text-green-400 mx-auto mb-4" />
                    <div className="text-2xl font-bold">24/7</div>
                    <div className="text-sm text-gray-400">Monitoreo</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-cyan-500/10 to-purple-600/10 rounded-2xl">
                    <Users className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                    <div className="text-2xl font-bold">20+</div>
                    <div className="text-sm text-gray-400">Especialistas</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-cyan-500/10 to-purple-600/10 rounded-2xl">
                    <Server className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                    <div className="text-2xl font-bold">15+</div>
                    <div className="text-sm text-gray-400">Tecnologías</div>
                  </div>
                  <div className="text-center p-4 bg-gradient-to-br from-cyan-500/10 to-purple-600/10 rounded-2xl">
                    <Shield className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                    <div className="text-2xl font-bold">99.9%</div>
                    <div className="text-sm text-gray-400">Uptime</div>
                  </div>  
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Lo que dicen nuestros clientes
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-gray-400">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              ¿Listo para comenzar?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Contactános y descubre cómo podemos mejorar tu infraestructura, seguridad y soporte tecnológico
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Solicitar Cotización
              </button>
              <button className="border border-cyan-500/50 hover:border-cyan-400 px-8 py-4 rounded-full text-lg transition-all duration-300 hover:bg-cyan-500/10">
                Agendar Reunión
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 flex flex-col items-center gap-4">
                <Mail className="w-8 h-8 text-cyan-400" />
                <h4 className="text-lg font-semibold text-cyan-400">Email</h4>
                <p className="text-gray-300">info@sertic.cloud</p>
            </div>
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 flex flex-col items-center gap-4">
                <Phone className="w-8 h-8 text-purple-400" />
                <h4 className="text-lg font-semibold text-purple-400">Teléfono</h4>
                <p className="text-gray-300">+54 9 3417 51-4628</p>
            </div>
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 flex flex-col items-center gap-4">
                <MapPin className="w-8 h-8 text-pink-400" />
                <h4 className="text-lg font-semibold text-pink-400">Ubicación</h4>
                <p className="text-gray-300">Rosario, Santa Fe, Argentina</p>
            </div>
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              {/*<div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>*/}
              <div className="w-10 h-10 flex items-center justify-center">
          <img 
            src="/src/assets/logo2a.png" 
            alt="SerTIC Tech Solutions" 
            className="w-full h-full object-contain rounded-xl"
          />
        </div>
              <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                SerTIC Tech Solutions
              </span>
            </div>
            <div className="text-gray-400 text-center md:text-right">
              <p>&copy; 2024 SerTIC Tech Solutions. Todos los derechos reservados.</p>
              <p className="mt-2">Soluciones IT confiables para tu empresa</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;