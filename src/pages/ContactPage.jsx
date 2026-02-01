import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Globe, Mail, Phone, ArrowLeft } from 'lucide-react';
import { Navigation, Footer } from '../components/layout';
import Button from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import QuoteModal from '../components/ui/QuoteModal';
import { internationalContacts } from '../data/contact';
import ContactForm from '../components/sections/ContactForm';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

import heroImage from '../assets/hero/escritorio.jpeg';

// Componente para las cards de contacto internacional
const InternationalContactCard = ({ country, phone, email, index }) => {
  const { elementRef, hasBeenVisible } = useIntersectionObserver();
  
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
      <Card className="h-full bg-gradient-to-br from-sertic-dark/70 to-sertic-black/70 border border-sertic-gray/40 hover:border-sertic-cyan/50 transition-all duration-300">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Globe className="w-6 h-6 text-sertic-cyan" />
            <h3 className="text-xl font-semibold text-sertic-white">{country}</h3>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sertic-light">
              <Phone className="w-4 h-4 text-sertic-blue" />
              <span>{phone}</span>
            </div>
            
            <div className="flex items-center gap-2 text-sertic-light">
              <Mail className="w-4 h-4 text-sertic-blue" />
              <span className="break-all">{email}</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

const ContactPage = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { elementRef: titleRef, hasBeenVisible: titleVisible } = useIntersectionObserver();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleScheduleMeeting = () => {
    window.open(
      'https://calendly.com/alexis-rabbia-sertic/consulta-tecnica',
      '_blank'
    );
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sertic-blue via-sertic-black to-sertic-blue text-sertic-white overflow-hidden">
      {/* Navbar */}
      <Navigation />

      <main className="relative">
        {/* Efectos de fondo decorativos */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-96 h-96 -top-48 -left-48 bg-sertic-cyan/10 blur-3xl rounded-full" />
          <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-sertic-blue/10 blur-3xl rounded-full" />
        </div>

        {/* =====================================================
            HERO SECTION
        ===================================================== */}
        <section className="relative min-h-[70vh] flex items-center">
          {/* Imagen de fondo */}
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Contacto SerTIC"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-sertic-black/80 via-sertic-black/70 to-sertic-black" />
          </div>

          {/* Contenido del Hero */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24">
            {/* Botón Volver */}
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-sertic-cyan hover:text-sertic-light transition-colors mb-10 group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              Volver
            </button>

            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sertic-cyan to-sertic-blue bg-clip-text text-transparent">
                ¿Listo para comenzar?
              </h1>

              <p className="text-xl text-sertic-light mb-10">
                Estamos listos para transformar tu infraestructura tecnológica
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  onClick={handleOpenModal}
                >
                  Solicitar cotización
                </Button>

                <Button
                  variant="secondary"
                  size="lg"
                  onClick={handleScheduleMeeting}
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Agendar reunión
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            SECCIÓN DE CONTACTOS INTERNACIONALES (ARRIBA)
        ===================================================== */}
        <section className="py-24 bg-sertic-black relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Grid de contactos internacionales */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {internationalContacts.map((contact, index) => (
                <InternationalContactCard
                  key={contact.country}
                  country={contact.country}
                  phone={contact.phone}
                  email={contact.email}
                  index={index}
                />
              ))}
            </div>

            {/* =====================================================
                FORMULARIO DE CONTACTO (ABAJO - CENTRADO)
            ===================================================== */}
            <div 
              ref={titleRef}
              className={`transition-all duration-700 ${
                titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="max-w-2xl mx-auto">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Modal de Cotización */}
      <QuoteModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactPage;