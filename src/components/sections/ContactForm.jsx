import React, { useState } from 'react';
import { X, CheckCircle, XCircle } from 'lucide-react';
import Button from '../ui/Button';
import { Card } from '../ui/Card';

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
    if (!formData.message.trim()) newErrors.message = 'El mensaje es requerido';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
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
      <Card className="p-8 bg-transparent shadow-none border-none">
        <h3 className="text-2xl font-bold mb-6 text-sertic-white">
          Solicitar información
        </h3>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="grid md:grid-cols-2 gap-4">
            <Input
              label="Nombre completo *"
              name="name"
              value={formData.name}
              error={errors.name}
              onChange={handleChange}
            />
            <Input
              label="Email *"
              name="email"
              type="email"
              value={formData.email}
              error={errors.email}
              onChange={handleChange}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <Input
              label="Empresa"
              name="company"
              value={formData.company}
              onChange={handleChange}
            />
            <Input
              label="Teléfono"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <Select
            label="Servicio de interés"
            name="service"
            value={formData.service}
            onChange={handleChange}
          />

          <Textarea
            label="Mensaje *"
            name="message"
            value={formData.message}
            error={errors.message}
            onChange={handleChange}
          />

          <Button
            type="submit"
            className="w-full"
            disabled={!isFormValid}
          >
            {isSubmitting ? 'Enviando…' : 'Enviar mensaje'}
          </Button>
        </form>
      </Card>

      {modal.isOpen && (
        <Modal modal={modal} onClose={() => setModal({ ...modal, isOpen: false })} />
      )}
    </>
  );
};

export default ContactForm;

/* =========================
   Subcomponentes
========================= */

const baseInput =
  'w-full px-4 py-3 bg-sertic-dark/50 border rounded-lg text-sertic-white ' +
  'focus:outline-none focus:ring-2 focus:ring-sertic-cyan';

const Input = ({ label, error, ...props }) => (
  <div>
    <label className="block text-sm text-sertic-light mb-2">{label}</label>
    <input
      {...props}
      className={`${baseInput} ${error ? 'border-red-500' : 'border-sertic-gray'}`}
    />
    {error && <p className="mt-1 text-sm text-red-400">{error}</p>}
  </div>
);

const Textarea = ({ label, error, ...props }) => (
  <div>
    <label className="block text-sm text-sertic-light mb-2">{label}</label>
    <textarea
      rows={4}
      {...props}
      className={`${baseInput} resize-none ${error ? 'border-red-500' : 'border-sertic-gray'}`}
    />
    {error && <p className="mt-1 text-sm text-red-400">{error}</p>}
  </div>
);

const Select = ({ label, ...props }) => (
  <div>
    <label className="block text-sm text-sertic-light mb-2">{label}</label>
    <select
      {...props}
      className={`${baseInput} border-sertic-gray`}
    >
      <option value="">Selecciona un servicio</option>
      <option value="soporte-remoto">Soporte IT</option>
      <option value="infraestructura">Infraestructura IT</option>
      <option value="consultoria">Ciberseguridad y Hardening</option>
      <option value="staffing">Staffing</option>
      <option value="todos">Todos los servicios</option>
    </select>
  </div>
);

const Modal = ({ modal, onClose }) => (
  <div className="fixed inset-0 z-50 bg-sertic-black/60 backdrop-blur flex items-center justify-center p-4">
    <div className="bg-sertic-black border border-sertic-gray rounded-2xl max-w-md w-full p-8 text-center">
      {modal.isSuccess ? (
        <CheckCircle className="w-14 h-14 text-green-500 mx-auto mb-4" />
      ) : (
        <XCircle className="w-14 h-14 text-red-500 mx-auto mb-4" />
      )}
      <h3 className="text-xl font-bold text-sertic-white mb-2">
        {modal.isSuccess ? 'Mensaje enviado' : 'Error'}
      </h3>
      <p className="text-sertic-light mb-6">{modal.message}</p>
      <button
        onClick={onClose}
        className="px-6 py-2 rounded-full bg-gradient-to-r from-sertic-cyan to-sertic-blue text-white"
      >
        Cerrar
      </button>
    </div>
  </div>
);
