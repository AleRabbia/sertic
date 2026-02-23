import React, { useState, useEffect, useRef } from 'react';
import { X, CheckCircle, XCircle } from 'lucide-react';

const N8N_WEBHOOK_URL = 'https://your-n8n-instance.com/webhook/agendar-reunion';

const TIME_SLOTS = [
  '09:00', '09:30', '10:00', '10:30',
  '11:00', '11:30', '14:00', '14:30',
  '15:00', '15:30', '16:00', '16:30',
];

const getMinDate = () => {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  return d.toISOString().split('T')[0];
};

const CalendlyModal = ({ isOpen, onClose }) => {
  const overlayRef = useRef(null);
  const [status, setStatus] = useState('idle');
  const [modal, setModal] = useState({ isOpen: false, isSuccess: false, message: '' });
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState({
    name: '', email: '', phone: '', company: '',
    date: '', time: '', message: '',
  });

  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setStatus('idle');
        setModal({ isOpen: false, isSuccess: false, message: '' });
        setErrors({});
        setForm({ name: '', email: '', phone: '', company: '', date: '', time: '', message: '' });
      }, 300);
    }
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    if (isOpen) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'El nombre es requerido';
    if (!form.email.trim()) newErrors.email = 'El email es requerido';
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Email inválido';
    if (!form.date) newErrors.date = 'La fecha es requerida';
    if (!form.time) newErrors.time = 'El horario es requerido';
    if (!form.message.trim()) newErrors.message = 'El mensaje es requerido';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const isFormValid =
    form.name && form.email && form.date && form.time && form.message && status !== 'loading';

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus('loading');

    try {
      const res = await fetch(N8N_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          nombre: form.name,
          email: form.email,
          telefono: form.phone,
          empresa: form.company,
          fecha: form.date,
          hora: form.time,
          mensaje: form.message,
          origen: 'web-contacto',
          timestamp: new Date().toISOString(),
        }),
      });

      if (res.ok) {
        setModal({
          isOpen: true,
          isSuccess: true,
          message:
            '¡Solicitud enviada correctamente! Nuestro equipo se pondrá en contacto contigo en las próximas 24 horas.',
        });
        setForm({ name: '', email: '', phone: '', company: '', date: '', time: '', message: '' });
        setErrors({});
      } else {
        setModal({ isOpen: true, isSuccess: false, message: 'Error al enviar la solicitud' });
      }
    } catch {
      setModal({
        isOpen: true,
        isSuccess: false,
        message: 'Hubo un problema al enviar tu solicitud. Por favor, intenta nuevamente.',
      });
    } finally {
      setStatus('idle');
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <style>{`
        .time-chip { cursor: pointer; transition: all 0.15s; }
        .time-chip:hover { border-color: rgba(5,173,238,.6); background: rgba(5,173,238,.08); }
        .time-chip.selected { border-color: #05ADEE; background: rgba(5,173,238,.15); color: #05ADEE; }
      `}</style>

      <div
        ref={overlayRef}
        onClick={(e) => e.target === overlayRef.current && onClose()}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      >
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700/50 w-full max-w-lg md:max-w-2xl overflow-y-auto max-h-[85vh] md:max-h-[90vh]">
          <div className="p-6 md:p-8">

            <div className="flex justify-between items-start mb-5">
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-sertic-cyan to-sertic-blue bg-clip-text text-transparent">
                Agendar reunión
              </h2>
              <button onClick={onClose} className="text-gray-400 hover:text-white mt-1">
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">

              {/* Nombre + Empresa */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField label="Nombre completo *" name="name" value={form.name} onChange={handleChange} error={errors.name} placeholder="Juan García" />
                <InputField label="Empresa" name="company" value={form.company} onChange={handleChange} placeholder="Mi empresa S.A." />
              </div>

              {/* Email + Teléfono */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField label="Email *" name="email" type="email" value={form.email} onChange={handleChange} error={errors.email} placeholder="correo@empresa.com" />
                <InputField label="Teléfono" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+54 11 ..." />
              </div>

              {/* Fecha + Horario */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Fecha preferida *
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={form.date}
                    onChange={handleChange}
                    min={getMinDate()}
                    className="w-full px-4 py-2.5 bg-slate-700/50 border border-slate-600 rounded-lg focus:border-sertic-cyan focus:outline-none text-white text-sm"
                  />
                  {errors.date && <p className="mt-1 text-xs text-red-400">{errors.date}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    Horario preferido *
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
                    {TIME_SLOTS.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setForm((p) => ({ ...p, time: slot }))}
                        className={`time-chip text-xs py-1.5 rounded-md border border-slate-600 text-white/60 ${
                          form.time === slot ? 'selected' : ''
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                  {errors.time && <p className="mt-1 text-xs text-red-400">{errors.time}</p>}
                </div>
              </div>

              {/* Mensaje */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-1">
                  ¿De qué querés hablar? *
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-2.5 bg-slate-700/50 border border-slate-600 rounded-lg focus:border-sertic-cyan focus:outline-none text-white resize-none text-sm"
                  placeholder="Breve descripción del motivo de la reunión..."
                />
                {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
              </div>

              <div className="sticky bottom-0 pt-4 bg-gradient-to-t from-slate-900 via-slate-900 to-transparent">
  <button
    type="submit"
    disabled={!isFormValid}
    className={`w-full px-6 py-3 rounded-full transition-all duration-300 font-medium text-sm ${
      isFormValid
        ? 'bg-gradient-to-r from-sertic-cyan to-sertic-blue text-white'
        : 'bg-gray-600 text-gray-400 cursor-not-allowed'
    }`}
  >
    {status === 'loading' ? 'Enviando solicitud...' : 'Solicitar reunión'}
  </button>
</div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

const InputField = ({ label, error, ...props }) => (
  <div>
    <label className="block text-sm font-medium text-gray-300 mb-1">
      {label}
    </label>
    <input
      {...props}
      className={`w-full px-4 py-2.5 bg-slate-700/50 border rounded-lg focus:outline-none text-white text-sm ${
        error ? 'border-red-500' : 'border-slate-600 focus:border-sertic-cyan'
      }`}
    />
    {error && <p className="mt-1 text-xs text-red-400">{error}</p>}
  </div>
);

export default CalendlyModal;