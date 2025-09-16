// src/components/sections/Contact.jsx
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Calendar } from 'lucide-react';
import Button from '../ui/Button';
import { Card } from '../ui/Card';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { contactInfo } from '../../data/contact';

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
        <Icon className={`w-8 h-8 text-${color}-400`} />
        <h4 className={`text-lg font-semibold text-${color}-400`}>{title}</h4>
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
    service: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  // Función para validar el formulario
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
    
    // Simular envío del formulario
    setTimeout(() => {
      alert('¡Mensaje enviado correctamente! Nos pondremos en contacto contigo pronto.');
      setFormData({ name: '', email: '', company: '', service: '', message: '' });
      setErrors({});
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Limpiar error del campo al escribir
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const isFormValid = formData.name && formData.email && formData.message && !isSubmitting;

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <h3 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
        Solicita tu consultoría gratuita
      </h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Nombre completo *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-slate-800/50 border rounded-lg focus:outline-none transition-colors ${
                errors.name ? 'border-red-500 focus:border-red-400' : 'border-slate-600 focus:border-cyan-500'
              }`}
              placeholder="Tu nombre"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-400">{errors.name}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Email *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 bg-slate-800/50 border rounded-lg focus:outline-none transition-colors ${
                errors.email ? 'border-red-500 focus:border-red-400' : 'border-slate-600 focus:border-cyan-500'
              }`}
              placeholder="tu@email.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-400">{errors.email}</p>
            )}
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Empresa
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
              placeholder="Nombre de tu empresa"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Servicio de interés
            </label>
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-slate-800/50 border border-slate-600 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
            >
              <option value="">Selecciona un servicio</option>
              <option value="soporte-remoto">Soporte Remoto</option>
              <option value="infraestructura">Infraestructura</option>
              <option value="consultoria">Consultoría</option>
              <option value="staffing">Staffing</option>
              <option value="todos">Todos los servicios</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Mensaje *
          </label>
          <textarea
            rows={4}
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={`w-full px-4 py-3 bg-slate-800/50 border rounded-lg focus:outline-none transition-colors resize-none ${
              errors.message ? 'border-red-500 focus:border-red-400' : 'border-slate-600 focus:border-cyan-500'
            }`}
            placeholder="Cuéntanos sobre tu proyecto o necesidades..."
          ></textarea>
          {errors.message && (
            <p className="mt-1 text-sm text-red-400">{errors.message}</p>
          )}
        </div>

        <Button 
          type="submit"
          className="w-full"
          disabled={!isFormValid}
          icon={!isSubmitting}
        >
          {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
        </Button>
      </form>
    </Card>
  );
};

const Contact = () => {
  const { elementRef: titleRef, hasBeenVisible: titleVisible } = useIntersectionObserver();

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
    <section id="contacto" className="py-20 bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            ¿Listo para comenzar?
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Contactános y descubre cómo podemos mejorar tu infraestructura, seguridad y soporte tecnológico
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" icon>
              Solicitar Cotización
            </Button>
            <Button variant="secondary" size="lg">
              <Calendar className="w-5 h-5 mr-2" />
              Agendar Reunión
            </Button>
          </div>
        </div>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactCards.map((card, index) => (
            <ContactCard 
              key={card.title}
              icon={card.icon}
              title={card.title}
              content={card.content}
              color={card.color}
              index={index}
            />
          ))}
        </div>

        {/* Contact Form */}
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;