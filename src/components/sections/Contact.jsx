import React, { useState } from 'react';
import { Mail, Phone, MapPin, Calendar, Globe } from 'lucide-react';
import Button from '../ui/Button';
import { Card } from '../ui/Card';
import QuoteModal from '../ui/QuoteModal';
import { contactInfo, internationalContacts } from '../../data/contact';
import ContactForm from './ContactForm';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

import heroImage from '../../assets/hero/escritorio.jpeg';

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

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { elementRef: titleRef, hasBeenVisible: titleVisible } = useIntersectionObserver();

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
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-24">
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
          SECCIÓN DE CONTACTO PRINCIPAL
      ===================================================== */}
      <section className="py-24 bg-sertic-black">
        <div className="max-w-7xl mx-auto px-6">
          {/* Título de la sección */}
          <div 
            ref={titleRef}
            className={`text-center mb-16 transition-all duration-700 ${
              titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-sertic-cyan to-sertic-blue bg-clip-text text-transparent">
              Contactános
            </h2>
            <p className="text-xl text-sertic-light max-w-2xl mx-auto">
              Completa el formulario y nos pondremos en contacto a la brevedad
            </p>
          </div>

          {/* Grid principal: Info + Formulario */}
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
            
            {/* Información de contacto local */}
            <div className="space-y-10">
              <h3 className="text-2xl font-bold text-sertic-white">
                Información de contacto
              </h3>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sertic-light">
                  <Mail className="text-sertic-cyan w-5 h-5" />
                  <span>{contactInfo.email}</span>
                </div>

                <div className="flex items-center gap-3 text-sertic-light">
                  <Phone className="text-sertic-cyan w-5 h-5" />
                  <span>{contactInfo.phone}</span>
                </div>

                <div className="flex items-center gap-3 text-sertic-light">
                  <MapPin className="text-sertic-cyan w-5 h-5" />
                  <span>{contactInfo.location}</span>
                </div>
              </div>
            </div>

            {/* Formulario de contacto */}
            <Card className="bg-gradient-to-br from-sertic-dark/70 to-sertic-black/70 border border-sertic-gray/40">
              <ContactForm />
            </Card>
          </div>

          {/* =====================================================
              SECCIÓN DE CONTACTOS INTERNACIONALES
          ===================================================== */}
          <div className="mt-24">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-sertic-cyan to-sertic-blue bg-clip-text text-transparent">
                Contactos Internacionales
              </h3>
              <p className="text-xl text-sertic-light max-w-2xl mx-auto">
                Estamos presentes en múltiples países para brindarte un mejor servicio
              </p>
            </div>

            {/* Grid de contactos internacionales */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
          </div>
        </div>
      </section>

      {/* Modal de Cotización */}
      <QuoteModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
      />
    </div>
  );
};

export default Contact;