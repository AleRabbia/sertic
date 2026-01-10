import React from 'react';
import { Mail, Phone, MapPin, Calendar } from 'lucide-react';
import Button from '../ui/Button';
import { Card } from '../ui/Card';
import QuoteModal from '../ui/QuoteModal';
import { contactInfo } from '../../data/contact';
import ContactForm from './ContactForm'; // 👈 si lo tenés separado, sino ajustamos

import heroImage from '../../assets/hero/escritorio.jpeg';

const Contact = () => {
  const handleScheduleMeeting = () => {
    window.open(
      'https://calendly.com/alexis-rabbia-sertic/consulta-tecnica',
      '_blank'
    );
  };

  return (
    <>
      {/* =====================================================
          HERO (estilo ServiceDetail)
      ===================================================== */}
      <section className="relative min-h-[70vh] flex items-center">
        {/* Imagen */}
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Contacto SerTIC"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-sertic-black/80 via-sertic-black/70 to-sertic-black" />
        </div>

        {/* Contenido */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sertic-cyan to-sertic-blue bg-clip-text text-transparent">
              Contacto
            </h1>

            <p className="text-xl text-sertic-light mb-10">
              Contanos tus necesidades y coordinamos la mejor solución en
              infraestructura, seguridad y soporte IT.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg">
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
          CONTENIDO
      ===================================================== */}
      <section className="py-24 bg-sertic-black">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Info */}
          <div className="space-y-10">
            <h2 className="text-3xl font-bold text-sertic-white">
              Información de contacto
            </h2>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sertic-light">
                <Mail className="text-sertic-cyan" />
                {contactInfo.email}
              </div>

              <div className="flex items-center gap-3 text-sertic-light">
                <Phone className="text-sertic-cyan" />
                {contactInfo.phone}
              </div>

              <div className="flex items-center gap-3 text-sertic-light">
                <MapPin className="text-sertic-cyan" />
                {contactInfo.location}
              </div>
            </div>
          </div>

          {/* Form */}
          <Card className="bg-gradient-to-br from-sertic-dark/70 to-sertic-black/70 border border-sertic-gray/40">
            <ContactForm />
          </Card>
        </div>
      </section>

      <QuoteModal />
    </>
  );
};

export default Contact;
