import React, { useState } from 'react';
import { X, CheckCircle, XCircle } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modal, setModal] = useState({
    isOpen: false,
    isSuccess: false,
    message: ''
  });

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'El nombre es requerido';

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch(import.meta.env.VITE_N8N_CONTACT_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          phone: formData.phone || 'No especificado',
          company: formData.company || 'No especificada',
          service: formData.service || 'No especificado'
        })
      });

      if (response.ok) {
        setModal({
          isOpen: true,
          isSuccess: true,
          message: '¡Mensaje enviado correctamente! Nos pondremos en contacto contigo pronto.'
        });
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          service: '',
          message: ''
        });
        setErrors({});
      } else {
        setModal({
          isOpen: true,
          isSuccess: false,
          message: 'Error al enviar el mensaje'
        });
      }
    } catch {
      setModal({
        isOpen: true,
        isSuccess: false,
        message: 'Hubo un problema al enviar el mensaje. Intenta nuevamente.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid =
    formData.name &&
    formData.email &&
    formData.message &&
    !isSubmitting;

  return (
    <>
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700/50 max-w-2xl mx-auto">
        <div className="p-8">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-sertic-cyan to-sertic-blue bg-clip-text text-transparent mb-4">
            Solicitar información
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Nombre completo *
                </label>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-slate-700/50 border rounded-lg text-white focus:outline-none transition-colors ${
                    errors.name
                      ? 'border-red-500 focus:border-red-400'
                      : 'border-slate-600 focus:border-cyan-500'
                  }`}
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
                  className={`w-full px-4 py-3 bg-slate-700/50 border rounded-lg text-white focus:outline-none transition-colors ${
                    errors.email
                      ? 'border-red-500 focus:border-red-400'
                      : 'border-slate-600 focus:border-cyan-500'
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Teléfono
                </label>
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Empresa
                </label>
                <input
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Servicio de interés
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition-colors"
              >
                <option value="">Selecciona un servicio</option>
                <option value="soporte-remoto">Soporte IT</option>
                <option value="infraestructura">Infraestructura IT</option>
                <option value="consultoria">Ciberseguridad</option>
                <option value="staffing">Staffing</option>
                <option value="todos">Todos</option>
              </select>
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
                className={`w-full px-4 py-3 bg-slate-700/50 border rounded-lg text-white resize-none focus:outline-none transition-colors ${
                  errors.message
                    ? 'border-red-500 focus:border-red-400'
                    : 'border-slate-600 focus:border-cyan-500'
                }`}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-400">{errors.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={!isFormValid}
              className={`w-full px-6 py-3 rounded-full font-medium transition-all ${
                isFormValid
                  ? 'bg-gradient-to-r from-sertic-cyan to-sertic-blue text-white'
                  : 'bg-gray-600 text-gray-400 cursor-not-allowed'
              }`}
            >
              {isSubmitting ? 'Enviando…' : 'Enviar mensaje'}
            </button>
          </form>
        </div>
      </div>

      {modal.isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700/50 max-w-md w-full p-8 text-center">
            {modal.isSuccess ? (
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
            ) : (
              <XCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            )}
            <h3 className="text-xl font-semibold mb-4 text-white">
              {modal.isSuccess ? 'Mensaje enviado' : 'Error'}
            </h3>
            <p className="text-gray-300 mb-6">{modal.message}</p>
            <button
              onClick={() => setModal({ ...modal, isOpen: false })}
              className="bg-gradient-to-r from-cyan-500 to-purple-600 px-6 py-2 rounded-full text-white"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactForm;
