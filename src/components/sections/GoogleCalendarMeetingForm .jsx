import React, { useState } from 'react';
import { Calendar, Clock, User, Mail, Building, MessageSquare, X } from 'lucide-react';

const GoogleCalendarMeetingForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    date: '',
    time: '',
    duration: '60',
    topic: 'consulta-general',
    message: ''
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Nombre requerido';
    if (!formData.email.trim()) newErrors.email = 'Email requerido';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email inválido';
    if (!formData.date) newErrors.date = 'Fecha requerida';
    if (!formData.time) newErrors.time = 'Hora requerida';
    
    // Validar que la fecha no sea en el pasado
    const selectedDateTime = new Date(`${formData.date}T${formData.time}`);
    const now = new Date();
    if (selectedDateTime <= now) {
      newErrors.date = 'Selecciona una fecha y hora futura';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  const createGoogleCalendarEvent = () => {
    if (!validateForm()) return;

    // Crear fechas para el evento
    const startDateTime = new Date(`${formData.date}T${formData.time}`);
    const endDateTime = new Date(startDateTime.getTime() + (parseInt(formData.duration) * 60 * 1000));

    // Formatear fechas para Google Calendar (formato ISO sin milisegundos)
    const formatDate = (date) => date.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z';
    
    // Mapear temas
    const topicNames = {
      'consulta-general': 'Consulta General',
      'soporte-remoto': 'Soporte Remoto',
      'infraestructura': 'Infraestructura',
      'consultoria': 'Consultoría',
      'staffing': 'Staffing'
    };

    // Crear detalles del evento
    const eventTitle = `Reunión: ${topicNames[formData.topic]} - ${formData.name}`;
    
    const eventDetails = `📋 DETALLES DE LA REUNIÓN

👤 Participante: ${formData.name}
📧 Email: ${formData.email}
${formData.company ? `🏢 Empresa: ${formData.company}` : ''}
${formData.phone ? `📱 Teléfono: ${formData.phone}` : ''}

💼 Tema: ${topicNames[formData.topic]}

${formData.message ? `💬 Mensaje adicional:\n${formData.message}` : ''}

---
🎯 Esta reunión fue agendada desde el sitio web de Sertic.
📞 Se creará automáticamente un enlace de Google Meet.

Para cualquier consulta previa, contacta a:
📧 comercial@sertic.com.ar
📱 WhatsApp: +54 341 123 4567`;

    // Construir URL de Google Calendar
    const googleCalendarUrl = new URL('https://calendar.google.com/calendar/render');
    googleCalendarUrl.searchParams.append('action', 'TEMPLATE');
    googleCalendarUrl.searchParams.append('text', eventTitle);
    googleCalendarUrl.searchParams.append('dates', `${formatDate(startDateTime)}/${formatDate(endDateTime)}`);
    googleCalendarUrl.searchParams.append('details', eventDetails);
    googleCalendarUrl.searchParams.append('location', 'Google Meet (se añadirá automáticamente)');
    googleCalendarUrl.searchParams.append('add', formData.email); // Invitar al usuario automáticamente
    googleCalendarUrl.searchParams.append('src', 'Agendado desde Sertic.com.ar');

    // Abrir Google Calendar
    window.open(googleCalendarUrl.toString(), '_blank');
    
    // Cerrar modal y mostrar mensaje de éxito
    onClose();
    showSuccessMessage();
  };

  const showSuccessMessage = () => {
    const notification = document.createElement('div');
    notification.className = 'fixed top-4 right-4 bg-gradient-to-r from-green-500 to-green-600 text-white p-6 rounded-lg shadow-xl z-50 max-w-md';
    notification.innerHTML = `
      <div class="flex items-start gap-3">
        <div class="flex-shrink-0 text-2xl">🎉</div>
        <div>
          <h4 class="font-bold text-lg">¡Reunión creada!</h4>
          <p class="text-sm mt-2">Se abrió Google Calendar para que confirmes el evento. Una vez guardado:</p>
          <ul class="text-xs mt-2 space-y-1 opacity-90">
            <li>• Se enviará invitación automática</li>
            <li>• Se creará enlace de Google Meet</li>
            <li>• Recibirás recordatorios</li>
          </ul>
        </div>
      </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      if (notification.parentNode) {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => notification.remove(), 300);
      }
    }, 8000);
  };

  // Generar opciones de horario (9 AM a 6 PM cada 30 minutos)
  const generateTimeOptions = () => {
    const times = [];
    for (let hour = 9; hour <= 18; hour++) {
      for (let minute of [0, 30]) {
        if (hour === 18 && minute === 30) break; // No agregar 6:30 PM
        const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        const displayTime = new Date(`2000-01-01T${time}`).toLocaleTimeString('es-AR', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false
        });
        times.push({ value: time, display: displayTime });
      }
    }
    return times;
  };

  // Establecer fecha mínima (hoy)
  const today = new Date().toISOString().split('T')[0];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-slate-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white z-10"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-6">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Agendar Reunión
            </h2>
            <p className="text-gray-300 mt-2 text-sm">
              Completa el formulario y te ayudamos a crear el evento en tu Google Calendar
            </p>
          </div>

          <div className="space-y-4">
            {/* Información personal */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  <User className="w-4 h-4 inline mr-2" />
                  Nombre completo *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-slate-700/50 border rounded-lg focus:outline-none transition-colors ${
                    errors.name ? 'border-red-500' : 'border-slate-600 focus:border-cyan-500'
                  }`}
                  placeholder="Tu nombre"
                />
                {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  <Mail className="w-4 h-4 inline mr-2" />
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-slate-700/50 border rounded-lg focus:outline-none transition-colors ${
                    errors.email ? 'border-red-500' : 'border-slate-600 focus:border-cyan-500'
                  }`}
                  placeholder="tu@email.com"
                />
                {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  <Building className="w-4 h-4 inline mr-2" />
                  Empresa
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
                  placeholder="Nombre de tu empresa"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  📱 Teléfono
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
                  placeholder="+54 341 123 4567"
                />
              </div>
            </div>

            {/* Fecha y hora */}
            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  <Calendar className="w-4 h-4 inline mr-2" />
                  Fecha *
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  min={today}
                  className={`w-full px-4 py-3 bg-slate-700/50 border rounded-lg focus:outline-none transition-colors ${
                    errors.date ? 'border-red-500' : 'border-slate-600 focus:border-cyan-500'
                  }`}
                />
                {errors.date && <p className="mt-1 text-sm text-red-400">{errors.date}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  <Clock className="w-4 h-4 inline mr-2" />
                  Hora *
                </label>
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-slate-700/50 border rounded-lg focus:outline-none transition-colors ${
                    errors.time ? 'border-red-500' : 'border-slate-600 focus:border-cyan-500'
                  }`}
                >
                  <option value="">Seleccionar hora</option>
                  {generateTimeOptions().map((time) => (
                    <option key={time.value} value={time.value}>
                      {time.display}
                    </option>
                  ))}
                </select>
                {errors.time && <p className="mt-1 text-sm text-red-400">{errors.time}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  ⏱️ Duración
                </label>
                <select
                  name="duration"
                  value={formData.duration}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
                >
                  <option value="30">30 minutos</option>
                  <option value="60">1 hora</option>
                  <option value="90">1.5 horas</option>
                  <option value="120">2 horas</option>
                </select>
              </div>
            </div>

            {/* Tema */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                💼 Tema de la reunión
              </label>
              <select
                name="topic"
                value={formData.topic}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
              >
                <option value="consulta-general">Consulta General</option>
                <option value="soporte-remoto">Soporte Remoto</option>
                <option value="infraestructura">Infraestructura</option>
                <option value="consultoria">Consultoría</option>
                <option value="staffing">Staffing</option>
              </select>
            </div>

            {/* Mensaje adicional */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                <MessageSquare className="w-4 h-4 inline mr-2" />
                Mensaje adicional
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors resize-none"
                placeholder="Cuéntanos más sobre lo que te gustaría discutir..."
              />
            </div>

            {/* Botones */}
            <div className="flex gap-4 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-6 py-3 border border-slate-600 text-gray-300 rounded-lg hover:border-slate-500 transition-colors"
              >
                Cancelar
              </button>
              <button
                type="button"
                onClick={createGoogleCalendarEvent}
                className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 disabled:opacity-50"
                disabled={!formData.name || !formData.email || !formData.date || !formData.time}
              >
                <Calendar className="w-5 h-5 inline mr-2" />
                Crear en Google Calendar
              </button>
            </div>
          </div>

          <div className="mt-4 p-3 bg-slate-700/30 rounded-lg">
            <p className="text-xs text-gray-400 text-center">
              💡 Al hacer clic se abrirá Google Calendar con el evento pre-configurado. 
              Solo tendrás que guardarlo para enviarnos la invitación automáticamente.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoogleCalendarMeetingForm;