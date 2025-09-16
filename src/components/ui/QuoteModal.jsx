// src/components/ui/QuoteModal.jsx
import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Code, Smartphone, Cloud, Shield } from 'lucide-react';

const QuoteModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    services: [],
    budget: '',
    description: '',
    timeline: ''
  });

  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Resetear modal cuando se cierre
  useEffect(() => {
    if (!isOpen) {
      setStep(1);
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        services: [],
        budget: '',
        description: '',
        timeline: ''
      });
    }
  }, [isOpen]);

  const services = [
    { id: 'web', name: 'Desarrollo Web', icon: <Code className="w-6 h-6" /> },
    { id: 'mobile', name: 'Apps Móviles', icon: <Smartphone className="w-6 h-6" /> },
    { id: 'cloud', name: 'Cloud Solutions', icon: <Cloud className="w-6 h-6" /> },
    { id: 'security', name: 'Ciberseguridad', icon: <Shield className="w-6 h-6" /> }
  ];

  const budgetRanges = [
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000 - $100,000',
    '+$100,000'
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleServiceChange = (serviceId) => {
    const updatedServices = formData.services.includes(serviceId)
      ? formData.services.filter(id => id !== serviceId)
      : [...formData.services, serviceId];
    
    setFormData({
      ...formData,
      services: updatedServices
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    console.log('Form submitted:', formData);
    const subject = `Nueva cotización de ${formData.name}`;
  const body = `
    Nombre: ${formData.name}
    Email: ${formData.email}
    Teléfono: ${formData.phone}
    Empresa: ${formData.company}
    Servicios: ${formData.services.join(', ')}
    Presupuesto: ${formData.budget}
    Plazo: ${formData.timeline}
    Descripción: ${formData.description}
  `;

  window.location.href = `mailto:alexis.rabbia@sertic.com.ar?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700/50 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {isSubmitted ? '¡Gracias!' : 'Solicitar Cotización'}
            </h2>
            <button onClick={onClose} className="text-gray-400 hover:text-white">
              <X className="w-6 h-6" />
            </button>
          </div>

          {isSubmitted ? (
            <div className="text-center py-8">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-4">¡Cotización Enviada!</h3>
              <p className="text-gray-300 mb-6">
                Hemos recibido tu solicitud. Nuestro equipo se pondrá en contacto contigo en las próximas 24 horas.
              </p>
              <button
                onClick={onClose}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-6 py-2 rounded-full transition-all duration-300"
              >
                Cerrar
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {step === 1 && (
                <>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Nombre *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg focus:border-cyan-500 focus:outline-none text-white"
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg focus:border-cyan-500 focus:outline-none text-white"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Teléfono</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg focus:border-cyan-500 focus:outline-none text-white"
                        placeholder="+54 341 123 4567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Empresa</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg focus:border-cyan-500 focus:outline-none text-white"
                        placeholder="Nombre de tu empresa"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-6 py-2 rounded-full transition-all duration-300"
                    >
                      Siguiente
                    </button>
                  </div>
                </>
              )}

              {step === 2 && (
                <>
                  <div>
                    <label className="block text-sm font-medium mb-4">¿Qué servicios necesitas? *</label>
                    <div className="grid md:grid-cols-2 gap-3">
                      {services.map((service) => (
                        <label key={service.id} className="flex items-center space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.services.includes(service.id)}
                            onChange={() => handleServiceChange(service.id)}
                            className="hidden"
                          />
                          <div
                            className={`flex items-center space-x-3 p-3 rounded-lg border transition-all ${
                              formData.services.includes(service.id)
                                ? 'border-cyan-500 bg-cyan-500/10'
                                : 'border-slate-600 hover:border-slate-500'
                            }`}
                          >
                            <div className="text-cyan-400">{service.icon}</div>
                            <span>{service.name}</span>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Presupuesto estimado</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg focus:border-cyan-500 focus:outline-none text-white"
                    >
                      <option value="">Selecciona un rango</option>
                      {budgetRanges.map((range, index) => (
                        <option key={index} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Plazo deseado</label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg focus:border-cyan-500 focus:outline-none text-white"
                    >
                      <option value="">Selecciona un plazo</option>
                      <option value="1-2 meses">1-2 meses</option>
                      <option value="3-4 meses">3-4 meses</option>
                      <option value="5-6 meses">5-6 meses</option>
                      <option value="+6 meses">Más de 6 meses</option>
                    </select>
                  </div>

                  <div className="flex justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="border border-slate-600 hover:border-slate-500 px-6 py-2 rounded-full transition-all duration-300"
                    >
                      Anterior
                    </button>
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-6 py-2 rounded-full transition-all duration-300"
                    >
                      Siguiente
                    </button>
                  </div>
                </>
              )}

              {step === 3 && (
                <>
                  <div>
                    <label className="block text-sm font-medium mb-2">Descripción del proyecto *</label>
                    <textarea
                      name="description"
                      required
                      value={formData.description}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-2 bg-slate-700/50 border border-slate-600 rounded-lg focus:border-cyan-500 focus:outline-none text-white"
                      placeholder="Cuéntanos más sobre tu proyecto, objetivos, funcionalidades específicas, etc."
                    />
                  </div>

                  <div className="bg-slate-700/30 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Resumen de tu solicitud:</h4>
                    <div className="text-sm text-gray-300 space-y-1">
                      <p>
                        <strong>Servicios:</strong>{' '}
                        {formData.services.map((id) => services.find((s) => s.id === id)?.name).join(', ')}
                      </p>
                      {formData.budget && (
                        <p>
                          <strong>Presupuesto:</strong> {formData.budget}
                        </p>
                      )}
                      {formData.timeline && (
                        <p>
                          <strong>Plazo:</strong> {formData.timeline}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="border border-slate-600 hover:border-slate-500 px-6 py-2 rounded-full transition-all duration-300"
                    >
                      Anterior
                    </button>
                    <button
                      type="submit"
                      className="bg-gradient-to-r from-green-500 to-cyan-600 hover:from-green-600 hover:to-cyan-700 px-6 py-2 rounded-full transition-all duration-300"
                    >
                      Enviar Cotización
                    </button>
                  </div>
                </>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuoteModal;
