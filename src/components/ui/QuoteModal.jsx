import React, { useState, useEffect } from 'react';
import { X, CheckCircle, XCircle } from 'lucide-react';
import { services } from '../../data/services';

const QuoteModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    description: ''
  });

  const [modal, setModal] = useState({
    isOpen: false,
    isSuccess: false,
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  // Resetear modal cuando se cierre
  useEffect(() => {
    if (!isOpen) {
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        description: ''
      });
      setModal({
        isOpen: false,
        isSuccess: false,
        message: ''
      });
      setErrors({});
    }
  }, [isOpen]);

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
    
    if (!formData.description.trim()) {
      newErrors.description = 'La descripción es requerida';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
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
          service: formData.service || 'Cotización general',
          message: `COTIZACIÓN SOLICITADA:\n\n${formData.description}`,
          type: 'quote' // Para identificar que viene del modal de cotización
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
          message: '¡Cotización enviada correctamente! Nuestro equipo se pondrá en contacto contigo en las próximas 24 horas.'
        });
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          description: ''
        });
        setErrors({});
      } else {
        setModal({
          isOpen: true,
          isSuccess: false,
          message: result?.message || 'Error al enviar la cotización'
        });
      }
    } catch (error) {
      console.error('Error al enviar cotización:', error);
      setModal({
        isOpen: true,
        isSuccess: false,
        message: 'Hubo un problema al enviar tu cotización. Por favor, intenta nuevamente o contáctanos directamente.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.name && formData.email && formData.description && !isSubmitting;

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
           role="dialog" aria-modal="true" aria-labelledby="quote-title">
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700/50 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-8">
            <div className="flex justify-between items-center mb-6">
              <h2 id="quote-title" className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Solicitar Cotización
              </h2>
              <button onClick={onClose} className="text-gray-400 hover:text-white"
                      aria-label="Cerrar modal">
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="q-name" className="block text-sm font-medium text-gray-300 mb-2">
                    Nombre completo *
                  </label>
                  <input
                    type="text" id="q-name" name="name" value={formData.name} onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-slate-700/50 border rounded-lg focus:outline-none transition-colors text-white ${
                      errors.name ? 'border-red-500 focus:border-red-400' : 'border-slate-600 focus:border-cyan-500'
                    }`}
                    placeholder="Tu nombre completo"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-400" role="alert">{errors.name}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="q-email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email" id="q-email" name="email" value={formData.email} onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-slate-700/50 border rounded-lg focus:outline-none transition-colors text-white ${
                      errors.email ? 'border-red-500 focus:border-red-400' : 'border-slate-600 focus:border-cyan-500'
                    }`}
                    placeholder="tu@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400" role="alert">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="q-phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel" id="q-phone" name="phone" value={formData.phone} onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors text-white"
                    placeholder="+54 341 123 4567"
                  />
                </div>
                <div>
                  <label htmlFor="q-company" className="block text-sm font-medium text-gray-300 mb-2">
                    Empresa
                  </label>
                  <input
                    type="text" id="q-company" name="company" value={formData.company} onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors text-white"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="q-service" className="block text-sm font-medium text-gray-300 mb-2">
                  Servicio de interés
                </label>
                <select
                  id="q-service" name="service" value={formData.service} onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors text-white"
                >
                  <option value="">Selecciona un servicio</option>
                  {services.map((service) => (
                    <option key={service.id} value={service.id}>
                      {service.title}
                    </option>
                  ))}
                  <option value="todos">Todos los servicios</option>
                </select>
              </div>

              <div>
                <label htmlFor="q-description" className="block text-sm font-medium text-gray-300 mb-2">
                  Descripción del proyecto *
                </label>
                <textarea
                  id="q-description" name="description" value={formData.description} onChange={handleInputChange}
                  rows={4}
                  className={`w-full px-4 py-3 bg-slate-700/50 border rounded-lg focus:outline-none transition-colors text-white resize-none ${
                    errors.description ? 'border-red-500 focus:border-red-400' : 'border-slate-600 focus:border-cyan-500'
                  }`}
                  placeholder="Cuéntanos sobre tu proyecto, objetivos, funcionalidades específicas, presupuesto estimado, plazo deseado, etc."
                />
                {errors.description && (
                  <p className="mt-1 text-sm text-red-400" role="alert">{errors.description}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={!isFormValid}
                className={`w-full px-6 py-3 rounded-full transition-all duration-300 font-medium ${
                  isFormValid
                    ? 'bg-gradient-to-r from-green-500 to-cyan-600 hover:from-green-600 hover:to-cyan-700 text-white'
                    : 'bg-gray-600 text-gray-400 cursor-not-allowed'
                }`}
              >
                {isSubmitting ? 'Enviando cotización...' : 'Enviar Cotización'}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Modal de confirmación */}
      {modal.isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
             role="dialog" aria-modal="true">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700/50 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  {modal.isSuccess ? '' : 'Error'}
                </h2>
                <button
                  onClick={() => setModal({ ...modal, isOpen: false })}
                  className="text-gray-400 hover:text-white"
                  aria-label="Cerrar"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="text-center py-8">
                {modal.isSuccess ? (
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                ) : (
                  <XCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
                )}
                <h3 className="text-xl font-semibold mb-4">
                  {modal.isSuccess ? '¡Cotización Enviada!' : 'Oops...'}
                </h3>
                <p className="text-gray-300 mb-6">{modal.message}</p>
                <button
                  onClick={() => setModal({ ...modal, isOpen: false })}
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-6 py-2 rounded-full transition-all duration-300"
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

export default QuoteModal;