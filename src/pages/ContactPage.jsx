import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Calendar, Globe, Mail, Phone, ArrowLeft, MapPin } from 'lucide-react';
import { Navigation, Footer } from '../components/layout';
import Button from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import QuoteModal from '../components/ui/QuoteModal';
import CalendlyModal from '../components/ui/Calendlymodal';
import { internationalContacts } from '../data/contact';
import ContactForm from '../components/sections/ContactForm';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import heroImage from '../assets/hero/escritorio.jpeg';

/* CARD CONTACTO INTERNACIONAL*/
const InternationalContactCard = ({ country, flag, city, address, phone, email }) => {
  return (
    <div
      className="
        relative h-full rounded-2xl p-6
        bg-gradient-to-br from-[#0B1220] to-[#060B16]
        border border-white/10
        shadow-[0_0_0_1px_rgba(0,255,255,0.05)]
        hover:shadow-[0_0_25px_rgba(0,255,255,0.15)]
        transition-all duration-300
      "
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-4">
        <Globe className="w-5 h-5 text-sertic-cyan" />
        <div>
          <h3 className="text-lg font-semibold text-white">
            {city}
          </h3>
          <p className="text-sm text-gray-400">
            {flag} {country}
          </p>
        </div>
      </div>

      {/* Info */}
      <div className="space-y-3 text-sm text-gray-300">
        <div className="flex items-start gap-2">
          <MapPin className="w-4 h-4 text-sertic-cyan mt-0.5" />
          <span>{address}</span>
        </div>

        <div className="flex items-center gap-2">
          <Phone className="w-4 h-4 text-sertic-cyan" />
          <span>{phone}</span>
        </div>

        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4 text-sertic-cyan" />
          <span className="break-all">{email}</span>
        </div>
      </div>

      {/* Glow decorativo */}
      <div className="absolute inset-0 rounded-2xl pointer-events-none 
        bg-gradient-to-r from-transparent via-sertic-cyan/5 to-transparent opacity-0 hover:opacity-100 transition" />
    </div>
  );
};



const ContactPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCalendlyModalOpen, setIsCalendlyModalOpen] = useState(false); 
  const { elementRef: titleRef, hasBeenVisible: titleVisible } = useIntersectionObserver();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  

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
        
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-96 h-96 -top-48 -left-48 bg-sertic-cyan/10 blur-3xl rounded-full" />
          <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-sertic-blue/10 blur-3xl rounded-full" />
        </div>

        {/* HERO SECTION */}
        <section className="relative min-h-screen overflow-hidden flex items-center">
          {/* Imagen de fondo */}
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Contacto SerTIC"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/65" />
          </div>

          {/* Contenido del Hero */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24">
            {/* Botón Volver */}
            <div className="absolute top-0 left-0 right-0 z-20">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <button
                  onClick={() => navigate('/')}
                  className="flex items-center gap-2 text-sertic-cyan hover:text-sertic-light transition group"
                >
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                  {t('nav.inicio')}
                </button>
              </div>
            </div>

            {/* Contenido del Hero */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24">
              <div className="max-w-4xl">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sertic-cyan to-sertic-blue bg-clip-text text-transparent">
                  {t('contacto.titulo')}
                </h1>

                <p className="text-xl text-sertic-light mb-10">
                  {t('contacto.subtitulo')}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    onClick={handleOpenModal}
                  >
                    {t('nav.cotizacion')}
                  </Button>

                  <Button
                    variant="secondary"
                    size="lg"
                    onClick={() => setIsCalendlyModalOpen(true)}
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    {t('contacto.agendarReunion')}
                  </Button>
                </div>
              </div>
            </div> </div>
        </section>

        {/* SECCIÓN DE CONTACTOS INTERNACIONALES */}
        <section className="py-24 bg-sertic-black relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Grid de contactos internacionales */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {internationalContacts.map((contact, index) => (
                <InternationalContactCard
                  key={index} {...contact} 
                />
              ))}
            </div>

            {/* FORMULARIO DE CONTACTO */}
            <div
              ref={titleRef}
              className={`transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
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

      <CalendlyModal
        isOpen={isCalendlyModalOpen}
        onClose={() => setIsCalendlyModalOpen(false)}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ContactPage;