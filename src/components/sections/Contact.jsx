import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Calendar, X, CheckCircle, XCircle } from 'lucide-react';
import Button from '../ui/Button';
import { Card } from '../ui/Card';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { contactInfo, internationalContacts } from '../../data/contact';
import GoogleCalendarMeetingForm from './GoogleCalendarMeetingForm ';

const ContactCard = ({ icon: Icon, title, content, color, index }) => {
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
      <Card className="flex flex-col items-center gap-4 text-center h-full">
        <Icon className={`w-8 h-8 text-${color}-400`} aria-hidden="true" />        
        <h3 className={`text-lg font-semibold text-${color}-400`}>{title}</h3>
        <p className="text-gray-300">{content}</p>
      </Card>
    </div>
  );
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });
  const [modal, setModal] = useState({
    isOpen: false,
    isSuccess: false,
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'El nombre es requerido';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'El mensaje es requerido';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch(import.meta.env.VITE_N8N_CONTACT_WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || 'No especificado',
          company: formData.company || 'No especificada',
          service: formData.service || 'No especificado',
          message: formData.message
        })
      });

      let result;
      try {
        result = await response.json();
      } catch {
        result = null; 
      }
       
      if (response.ok) {
        setModal({
          isOpen: true,
          isSuccess: true,
          message: '¡Mensaje enviado correctamente! Nos pondremos en contacto contigo pronto.'
        });
        setFormData({ name: '', email: '', company: '', phone: '', service: '', message: '' });
        setErrors({});
      } else {
        setModal({
          isOpen: true,
          isSuccess: false,
          message: result?.message || 'Error al enviar el mensaje'
        });
      }
    } catch (error) {
      console.error('Error al enviar formulario:', error);
      setModal({
        isOpen: true,
        isSuccess: false,
        message: 'Hubo un problema al enviar tu mensaje. Por favor, intenta nuevamente o contáctanos directamente.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const isFormValid = formData.name && formData.email && formData.message && !isSubmitting;

  return (
    <>
    <Card className="w-full max-w-2xl mx-auto">
      
      <h2 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
        Solicita más información
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            
            <label htmlFor="contact-name" className="block text-sm font-medium text-gray-300 mb-2">
              Nombre completo *
            </label>
            <input
              type="text"
              id="contact-name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-slate-800/50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-900 transition-colors ${
                errors.name ? 'border-red-500 focus:border-red-400' : 'border-slate-600 focus:border-cyan-500'
              }`}
              placeholder="Tu nombre"
              aria-required="true"
              aria-invalid={errors.name ? 'true' : 'false'}
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            {errors.name && (
              <p id="name-error" className="mt-1 text-sm text-red-400" role="alert">{errors.name}</p>
            )}
          </div>
          <div>
            
            <label htmlFor="contact-email" className="block text-sm font-medium text-gray-300 mb-2">
              Email *
            </label>
            <input
              type="email"
              id="contact-email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-slate-800/50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-900 transition-colors ${
                errors.email ? 'border-red-500 focus:border-red-400' : 'border-slate-600 focus:border-cyan-500'
              }`}
              placeholder="tu@email.com"
              aria-required="true"
              aria-invalid={errors.email ? 'true' : 'false'}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
              <p id="email-error" className="mt-1 text-sm text-red-400" role="alert">{errors.email}</p>
            )}
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            
            <label htmlFor="contact-company" className="block text-sm font-medium text-gray-300 mb-2">
              Empresa
            </label>
            <input
              type="text"
              id="contact-company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-900 transition-colors"
              placeholder="Nombre de tu empresa"
            />
          </div>
          <div>
            
            <label htmlFor="contact-phone" className="block text-sm font-medium text-gray-300 mb-2">
              Teléfono
            </label>
            <input
              type="tel"
              id="contact-phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-900 transition-colors"
              placeholder="+54 341 123 4567"
            />
          </div>
        </div>

        <div>
          
          <label htmlFor="contact-service" className="block text-sm font-medium text-gray-300 mb-2">
            Servicio de interés
          </label>
          <select
            id="contact-service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-900 transition-colors"
            aria-label="Selecciona el servicio de tu interés"
          >
            <option value="">Selecciona un servicio</option>
            <option value="soporte-remoto">Soporte IT</option>
            <option value="infraestructura">Infraestructura IT</option>
            <option value="consultoria">Ciberseguridad y Hardening</option>
            <option value="staffing">Staffing</option>
            <option value="todos">Todos los servicios</option>
          </select>
        </div>

        <div>
          
          <label htmlFor="contact-message" className="block text-sm font-medium text-gray-300 mb-2">
            Mensaje *
          </label>
          <textarea
            rows={4}
            id="contact-message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-slate-800/50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-900 transition-colors resize-none ${
              errors.message ? 'border-red-500 focus:border-red-400' : 'border-slate-600 focus:border-cyan-500'
            }`}
            placeholder="Cuéntanos sobre tu proyecto o necesidades..."
            aria-required="true"
            aria-invalid={errors.message ? 'true' : 'false'}
            aria-describedby={errors.message ? 'message-error' : undefined}
          ></textarea>
          {errors.message && (
            <p id="message-error" className="mt-1 text-sm text-red-400" role="alert">{errors.message}</p>
          )}
        </div>

        <Button 
          type="submit"
          className="w-full"
          disabled={!isFormValid}
          icon={!isSubmitting}
          aria-describedby="submit-help"
        >
          {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
        </Button>
        <p id="submit-help" className="sr-only">
          {!isFormValid ? 'Complete los campos requeridos para enviar el formulario' : 'Presione para enviar el formulario'}
        </p>
      </form>
    </Card>
    
    {modal.isOpen && (
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700/50 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 id="modal-title" className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {modal.isSuccess ? 'Mensaje Enviado' : 'Error'}
              </h2>
              
              <button
                onClick={() => setModal({ ...modal, isOpen: false })}
                className="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded"
                aria-label="Cerrar modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="text-center py-8">
              {modal.isSuccess ? (
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" aria-hidden="true" />
              ) : (
                <XCircle className="w-16 h-16 text-red-500 mx-auto mb-4" aria-hidden="true" />
              )}
              <h3 className="text-xl font-semibold mb-4">
                {modal.isSuccess ? '¡Mensaje Enviado!' : 'Oops...'}
              </h3>
              <p id="modal-description" className="text-gray-300 mb-6">{modal.message}</p>
              <button
                onClick={() => setModal({ ...modal, isOpen: false })}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-900 px-6 py-2 rounded-full transition-all duration-300"
                aria-describedby="modal-description"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    )}
    </>
  );
};

const Contact = () => {
  const { elementRef: titleRef, hasBeenVisible: titleVisible } = useIntersectionObserver();
  const [showCalendarForm, setShowCalendarForm] = useState(false);
  

  /*const handleScheduleMeeting = () => {
  const calendlyUrl = 'https://calendly.com/alexis-rabbia-sertic/consulta-tecnica';
  window.open(calendlyUrl, '_blank');
};*/


  const contactCards = [
    {
      icon: Mail,
      title: "Email",
      content: contactInfo.email,
      color: "cyan"
    },
    {
      icon: Phone,
      title: "Teléfono",
      content: contactInfo.phone,
      color: "purple"
    },
    {
      icon: MapPin,
      title: "Ubicación",
      content: contactInfo.location,
      color: "pink"
    }
  ];

  return (
    <section id="contacto" className="py-20 bg-black/30" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          
          <h2 id="contact-heading" className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            ¿Listo para comenzar?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Contactános y descubre cómo podemos mejorar tu infraestructura, seguridad y soporte tecnológico
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            
            <Button size="lg" icon aria-label="Solicitar cotización de servicios">
              Solicitar Cotización
            </Button>
            <Button variant="secondary" size="lg" aria-label="Agendar una reunión" onClick={() => setShowCalendarForm(true)}>
              <Calendar className="w-5 h-5 mr-2" aria-hidden="true" />
              Agendar Reunión
            </Button>
          </div>
        </div>
        <GoogleCalendarMeetingForm 
  isOpen={showCalendarForm} 
  onClose={() => setShowCalendarForm(false)} 
/>
        <section aria-labelledby="offices-heading">
          <h2 id="offices-heading" className="sr-only">Nuestras oficinas internacionales</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {internationalContacts.map((c) => (
              <div
                key={c.id}
                className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300"
              >
                
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-2xl flex items-center justify-center w-8 h-8" aria-hidden="true">
                    {c.flag}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {c.city}
                    </h3>
                    <p className="text-gray-400 text-sm">{c.country}</p>
                  </div>
                </div>

                {/* Información de contacto */}
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-5 h-5 text-pink-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <div className="min-w-0 flex-1">
                      <p className="text-pink-400 font-medium text-sm">Ubicación</p>
                      {/* solo Argentina con link a Maps */}
                      {c.country === "Argentina" ? (
                        <a
                          href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                            c.address
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-300 hover:text-white text-xs transition-colors block focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded"
                          aria-label={`Ver ubicación en Google Maps: ${c.address}`}
                        >
                          {c.address}
                        </a>
                      ) : (
                        <p className="text-gray-300 text-xs">{c.address}</p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Phone className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <div className="min-w-0 flex-1">
                      <p className="text-purple-400 font-medium text-sm">Whatsapp</p>
                      <a
                        href={`https://wa.me/${c.phone.replace(/[^\d]/g, '')}`}
                        className="text-gray-300 hover:text-white text-xs transition-colors block focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded"
                        aria-label={`Enviar mensaje por WhatsApp al ${c.phone}`}
                      >
                        {c.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <Mail className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <div className="min-w-0 flex-1">
                      <p className="text-cyan-400 font-medium text-sm">Email</p>
                      <a
                        href={`mailto:${c.email}`}
                        className="text-gray-300 hover:text-white text-xs transition-colors block truncate focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-slate-900 rounded"
                        aria-label={`Enviar email a ${c.email}`}
                      >
                        {c.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Form */}
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;