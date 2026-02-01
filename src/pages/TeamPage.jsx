import React, { useState, useRef, useEffect } from 'react';
import {
  Linkedin,
  Mail,
  Award,
  Briefcase,
  GraduationCap,
  X,
  ArrowLeft,
  Target,
  Lightbulb,
  Heart,
  TrendingUp,
  MessageSquare
} from 'lucide-react';
import { teamMembers } from '../data/equipo';
import { Navigation, Footer } from '../components/layout';
import { useNavigate } from 'react-router-dom';

const TeamPage = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [hoveredMember, setHoveredMember] = useState(null);
  const [nodePositions, setNodePositions] = useState({});
  const [isMobile, setIsMobile] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    linkedin: '',
    cv: null,
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modal, setModal] = useState({
    isOpen: false,
    isSuccess: false,
    message: ''
  });

  const containerRef = useRef(null);
  const navigate = useNavigate();

  /* -------------------- MOBILE DETECTION -------------------- */
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  /* -------------------- POSICIONES EXACTAS SEGÚN FIGMA (CENTRADAS) -------------------- */
  const offsetX = -8;

  const desktopPositions = {
    1: { x: 60.5 + offsetX, y: 37.6 },
    2: { x: 28.5 + offsetX, y: 24.9 },
    3: { x: 47.9 + offsetX, y: 82.9 },
    4: { x: 60.4 + offsetX, y: 64.2 },
    5: { x: 83.8 + offsetX, y: 24.7 },
    6: { x: 89.0 + offsetX, y: 50.1 },
    7: { x: 26.8 + offsetX, y: 59.3 },
    8: { x: 83.7 + offsetX, y: 82.4 }
  };

  /* -------------------- CONNECTIONS -------------------- */
  const connections = [
    { from: 1, to: 7, curve: 'left' },
    { from: 1, to: 5, curve: 'right' },
    { from: 1, to: 6, curve: 'right' },
    { from: 1, to: 3, curve: 'left' },
    { from: 1, to: 4, curve: 'down' },
    { from: 7, to: 2, curve: 'up' },
    { from: 7, to: 3, curve: 'down' },
    { from: 7, to: 8, curve: 'right' },
    { from: 3, to: 2, curve: 'right' },
    { from: 3, to: 6, curve: 'right' },
    { from: 6, to: 2, curve: 'left' },
    { from: 5, to: 8, curve: 'down' },
    { from: 5, to: 4, curve: 'left' },
    { from: 4, to: 7, curve: 'up' }
  ];

  /* -------------------- NODE POSITIONS (DESKTOP) -------------------- */
  useEffect(() => {
    if (isMobile) return;

    const updatePositions = () => {
      const positions = {};
      const container = containerRef.current?.getBoundingClientRect();
      if (!container) return;

      teamMembers.forEach(member => {
        const el = document.getElementById(`node-${member.id}`);
        if (!el) return;

        const rect = el.getBoundingClientRect();
        positions[member.id] = {
          x: rect.left + rect.width / 2 - container.left,
          y: rect.top + rect.height / 2 - container.top
        };
      });

      setNodePositions(positions);
    };

    const timeouts = [50, 150, 300, 500].map(delay =>
      setTimeout(updatePositions, delay)
    );

    window.addEventListener('resize', updatePositions);

    return () => {
      timeouts.forEach(clearTimeout);
      window.removeEventListener('resize', updatePositions);
    };
  }, [isMobile]);

  /* -------------------- CURVED PATH GENERATOR -------------------- */
  const getCurvedPath = (x1, y1, x2, y2, curveDir = 'auto') => {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const distance = Math.sqrt(dx * dx + dy * dy);

    const nodeRadius = 64;
    const angle = Math.atan2(dy, dx);

    const x1Adjusted = x1 + Math.cos(angle) * nodeRadius;
    const y1Adjusted = y1 + Math.sin(angle) * nodeRadius;
    const x2Adjusted = x2 - Math.cos(angle) * nodeRadius;
    const y2Adjusted = y2 - Math.sin(angle) * nodeRadius;

    const offset = distance * 0.00;

    let cpX, cpY;

    if (curveDir === 'left') {
      cpX = (x1Adjusted + x2Adjusted) / 2 - offset;
      cpY = (y1Adjusted + y2Adjusted) / 2;
    } else if (curveDir === 'right') {
      cpX = (x1Adjusted + x2Adjusted) / 2 + offset;
      cpY = (y1Adjusted + y2Adjusted) / 2;
    } else if (curveDir === 'up') {
      cpX = (x1Adjusted + x2Adjusted) / 2;
      cpY = (y1Adjusted + y2Adjusted) / 2 - offset;
    } else if (curveDir === 'down') {
      cpX = (x1Adjusted + x2Adjusted) / 2;
      cpY = (y1Adjusted + y2Adjusted) / 2 + offset;
    } else {
      cpX = (x1Adjusted + x2Adjusted) / 2 - dy * 0.2;
      cpY = (y1Adjusted + y2Adjusted) / 2 + dx * 0.2;
    }

    return `M ${x1Adjusted} ${y1Adjusted} Q ${cpX} ${cpY} ${x2Adjusted} ${y2Adjusted}`;
  };

  /* -------------------- HELPERS -------------------- */
  const getConnectedMembers = id =>
    connections
      .filter(c => c.from === id || c.to === id)
      .map(c => (c.from === id ? c.to : c.from));

  const activeId = selectedMember?.id || hoveredMember;
  const connectedIds = activeId ? getConnectedMembers(activeId) : [];

  /* -------------------- FORM HANDLERS -------------------- */
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = 'El nombre es requerido';
    if (!formData.email.trim()) {
      newErrors.email = 'El email es requerido';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    if (!formData.position.trim()) newErrors.position = 'La posición es requerida';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({ ...prev, cv: file }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      //por ahora solo envia el titulo del adjunto
      const response = await fetch(import.meta.env.VITE_N8N_CAREERS_WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          phone: formData.phone || 'No especificado',
          linkedin: formData.linkedin || 'No especificado',
          message: formData.message || 'Sin mensaje adicional',
          cv: formData.cv ? formData.cv.name : 'No adjuntado'
        })
      });

      if (response.ok) {
        setModal({
          isOpen: true,
          isSuccess: true,
          message: '¡Tu postulación ha sido enviada correctamente! Nos pondremos en contacto contigo pronto.'
        }); // <-- Faltaba cerrar esta llave y el punto y coma
      } else {
        // Es buena práctica lanzar un error si la respuesta no es 200 OK
        throw new Error('Error en la respuesta del servidor');
      }
    } catch (error) { // <-- El catch debe recibir el parámetro (error)
      setModal({
        isOpen: true,
        isSuccess: false,
        message: 'Hubo un problema al enviar tu postulación. Intenta nuevamente.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  //para que envie el adjunto debo modif n8n y este metodo
  {/*const handleSubmit = async (e) => {
  e.preventDefault();
  if (!validateForm()) return;

  setIsSubmitting(true);

  try {
    // Crear FormData en lugar de JSON
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('phone', formData.phone || 'No especificado');
    formDataToSend.append('position', formData.position);
    formDataToSend.append('linkedin', formData.linkedin || 'No especificado');
    formDataToSend.append('message', formData.message || 'Sin mensaje adicional');
    
    // Adjuntar el archivo CV si existe
    if (formData.cv) {
      formDataToSend.append('cv', formData.cv);
    }

    const response = await fetch(import.meta.env.VITE_N8N_CAREERS_WEBHOOK_URL, {
      method: 'POST',
      body: formDataToSend  // NO incluyas Content-Type, el navegador lo configura automáticamente
    });

    if (response.ok) {
      setModal({
        isOpen: true,
        isSuccess: true,
        message: '¡Tu postulación ha sido enviada correctamente! Nos pondremos en contacto contigo pronto.'
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        position: '',
        linkedin: '',
        cv: null,
        message: ''
      });
      setErrors({});
    } else {
      setModal({
        isOpen: true,
        isSuccess: false,
        message: 'Error al enviar la postulación'
      });
    }
  } catch {
    setModal({
      isOpen: true,
      isSuccess: false,
      message: 'Hubo un problema al enviar tu postulación. Intenta nuevamente.'
    });
  } finally {
    setIsSubmitting(false);
  }
}; */}

  /* ============================================================ */
  return (
    <div className="min-h-screen bg-gradient-to-br from-sertic-blue via-sertic-black to-sertic-blue text-white overflow-hidden">
      <Navigation />

      <main className="pt-24 relative">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-96 h-96 -top-48 -left-48 bg-sertic-cyan/10 blur-3xl rounded-full" />
          <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-sertic-blue/10 blur-3xl rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-sertic-cyan hover:text-sertic-light transition-colors mb-10 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Volver
          </button>

          {/* ================= TÍTULO Y SUBTÍTULO ================= */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-sertic-cyan to-sertic-blue bg-clip-text text-transparent">
              Formamos SerTIC
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Un equipo de expertos comprometidos con la excelencia tecnológica y el éxito de nuestros clientes
            </p>
          </div>

          {/* ================= TÍTULO DE LA SECCIÓN DE EQUIPO ================= */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-sertic-cyan to-sertic-blue bg-clip-text text-transparent">
              El Equipo
            </h2>
          </div>

          {/* ================= MOBILE ================= */}
          {isMobile ? (
            <div className="space-y-4 pb-24">
              {teamMembers.map(m => (
                <div
                  key={m.id}
                  onClick={() => setSelectedMember(m)}
                  className="bg-white/5 border border-white/10 rounded-2xl p-4 cursor-pointer hover:border-sertic-cyan/50 transition"
                >
                  <div className="flex gap-4">
                    <img
                      src={m.photo}
                      alt={m.name}
                      className="w-20 h-20 rounded-xl object-cover border-2 border-sertic-cyan"
                    />
                    <div>
                      <h3 className="font-bold">{m.name}</h3>
                      <span className="text-sm px-3 py-1 rounded-full bg-gradient-to-r from-sertic-blue to-sertic-cyan inline-block mt-1">
                        {m.role}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* ================= DESKTOP ================= */
            <div ref={containerRef} className="relative w-full h-[800px] mb-24">
              {/* SVG CURVED LINES */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
                <defs>
                  <linearGradient id="lineNormal" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#05ADEE" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#14739F" stopOpacity="0.25" />
                  </linearGradient>
                  <linearGradient id="lineActive" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#05ADEE" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#14739F" stopOpacity="0.8" />
                  </linearGradient>
                </defs>

                {connections.map((c, i) => {
                  const a = nodePositions[c.from];
                  const b = nodePositions[c.to];
                  if (!a || !b) return null;

                  const active = activeId && (c.from === activeId || c.to === activeId);
                  const pathD = getCurvedPath(a.x, a.y, b.x, b.y, c.curve);

                  return (
                    <path
                      key={i}
                      d={pathD}
                      stroke={active ? 'url(#lineActive)' : 'url(#lineNormal)'}
                      strokeWidth={active ? 2.5 : 1.5}
                      fill="none"
                      className="transition-all duration-300"
                    />
                  );
                })}
              </svg>

              {/* NODES - ABSOLUTE POSITIONING */}
              <div className="absolute inset-0" style={{ zIndex: 2 }}>
                {teamMembers.map(m => {
                  const pos = desktopPositions[m.id];
                  const isActive = activeId === m.id;
                  const isConnectedToActive = connectedIds.includes(m.id);
                  const dim = activeId && !isActive && !isConnectedToActive;

                  return (
                    <div
                      key={m.id}
                      id={`node-${m.id}`}
                      style={{
                        position: 'absolute',
                        left: `${pos.x}%`,
                        top: `${pos.y}%`,
                        transform: 'translate(-50%, -50%)'
                      }}
                      className={`flex flex-col items-center transition-all duration-300 ${dim ? 'opacity-30' : ''
                        }`}
                      onMouseEnter={() => setHoveredMember(m.id)}
                      onMouseLeave={() => setHoveredMember(null)}
                      onClick={() => setSelectedMember(m)}
                    >
                      <div className="relative group cursor-pointer">
                        {/* GLOW */}
                        <div
                          className={`absolute inset-0 rounded-full blur-2xl transition-all duration-300 ${isActive
                              ? 'bg-sertic-cyan/40 scale-150'
                              : 'bg-sertic-cyan/0 group-hover:bg-sertic-cyan/20 scale-125'
                            }`}
                        />

                        {/* AVATAR */}
                        <div
                          className={`relative w-32 h-32 rounded-full p-1 transition-all duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-105'
                            } bg-gradient-to-br from-sertic-cyan via-sertic-blue to-sertic-cyan`}
                        >
                          <img
                            src={m.photo}
                            alt={m.name}
                            className="w-full h-full rounded-full object-cover bg-sertic-dark"
                          />
                        </div>

                        <div className="mt-4 text-center">
                          <h3 className="font-bold text-white text-lg">{m.name}</h3>
                          <span className="inline-block mt-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-sertic-blue to-sertic-cyan text-sm font-semibold shadow-lg">
                            {m.role}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* ================= NUESTRA MISIÓN ================= */}
          <section className="mb-24">
            <div className="bg-gradient-to-br from-sertic-dark/80 to-black/50 backdrop-blur-sm border border-sertic-cyan/20 rounded-3xl p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <Target className="w-8 h-8 text-sertic-cyan" />
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-sertic-cyan to-sertic-blue bg-clip-text text-transparent">
                  Nuestra Misión
                </h2>
              </div>

              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                Transformar la tecnología en el motor del crecimiento de nuestros clientes, brindando soluciones IT innovadoras, seguras y confiables.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-gradient-to-br from-sertic-cyan/10 to-sertic-blue/10 rounded-2xl border border-sertic-cyan/20">
                  <div className="text-4xl font-bold bg-gradient-to-r from-sertic-cyan to-sertic-blue bg-clip-text text-transparent mb-2">
                    15+
                  </div>
                  <div className="text-gray-400">Años de experiencia</div>
                </div>

                <div className="text-center p-6 bg-gradient-to-br from-sertic-cyan/10 to-sertic-blue/10 rounded-2xl border border-sertic-cyan/20">
                  <div className="text-4xl font-bold bg-gradient-to-r from-sertic-cyan to-sertic-blue bg-clip-text text-transparent mb-2">
                    50+
                  </div>
                  <div className="text-gray-400">Clientes satisfechos</div>
                </div>

                <div className="text-center p-6 bg-gradient-to-br from-sertic-cyan/10 to-sertic-blue/10 rounded-2xl border border-sertic-cyan/20">
                  <div className="text-4xl font-bold bg-gradient-to-r from-sertic-cyan to-sertic-blue bg-clip-text text-transparent mb-2">
                    24/7
                  </div>
                  <div className="text-gray-400">Soporte disponible</div>
                </div>
              </div>
            </div>
          </section>

          {/* ================= NUESTROS VALORES ================= */}
          <section className="mb-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-sertic-cyan to-sertic-blue bg-clip-text text-transparent">
                Nuestros Valores
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Innovación */}
              <div className="bg-gradient-to-br from-sertic-dark/80 to-black/50 backdrop-blur-sm border border-sertic-cyan/20 rounded-2xl p-8 hover:border-sertic-cyan/50 transition-all duration-300 group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-sertic-cyan to-sertic-blue rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Lightbulb className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold">Innovación</h3>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Buscamos constantemente nuevas formas de mejorar y evolucionar
                </p>
              </div>

              {/* Compromiso */}
              <div className="bg-gradient-to-br from-sertic-dark/80 to-black/50 backdrop-blur-sm border border-sertic-cyan/20 rounded-2xl p-8 hover:border-sertic-cyan/50 transition-all duration-300 group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-sertic-cyan to-sertic-blue rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Heart className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold">Compromiso</h3>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Dedicación total al éxito de nuestros clientes
                </p>
              </div>

              {/* Excelencia */}
              <div className="bg-gradient-to-br from-sertic-dark/80 to-black/50 backdrop-blur-sm border border-sertic-cyan/20 rounded-2xl p-8 hover:border-sertic-cyan/50 transition-all duration-300 group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-sertic-cyan to-sertic-blue rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Award className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold">Excelencia</h3>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Calidad superior en cada proyecto que emprendemos
                </p>
              </div>

              {/* Transparencia */}
              <div className="bg-gradient-to-br from-sertic-dark/80 to-black/50 backdrop-blur-sm border border-sertic-cyan/20 rounded-2xl p-8 hover:border-sertic-cyan/50 transition-all duration-300 group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-sertic-cyan to-sertic-blue rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MessageSquare className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl font-bold">Transparencia</h3>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  Comunicación clara y honesta en todo momento
                </p>
              </div>
            </div>
          </section>

          {/* ================= TRABAJA CON NOSOTROS ================= */}
          <section className="mb-24">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-sertic-cyan to-sertic-blue bg-clip-text text-transparent mb-4">
                Trabajá con Nosotros
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                ¿Te apasiona la tecnología? Sumate a nuestro equipo y formá parte de la transformación digital
              </p>
            </div>

            <div className="max-w-3xl mx-auto bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700/50">
              <div className="p-8 md:p-12">
                <form onSubmit={handleSubmit} className="space-y-6">

                  {/* Nombre + Email */}
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
                        className={`w-full px-4 py-3 bg-slate-700/50 border rounded-lg text-white focus:outline-none transition-colors ${errors.name
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
                        className={`w-full px-4 py-3 bg-slate-700/50 border rounded-lg text-white focus:outline-none transition-colors ${errors.email
                            ? 'border-red-500 focus:border-red-400'
                            : 'border-slate-600 focus:border-cyan-500'
                          }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Teléfono + Posición */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Posición de interés *
                      </label>
                      <input
                        type="text"
                        name="position"
                        value={formData.position}
                        onChange={handleChange}
                        placeholder="Ej: DevOps Engineer"
                        className={`w-full px-4 py-3 bg-slate-700/50 border rounded-lg text-white focus:outline-none transition-colors ${errors.position
                            ? 'border-red-500 focus:border-red-400'
                            : 'border-slate-600 focus:border-cyan-500'
                          }`}
                      />
                      {errors.position && (
                        <p className="mt-1 text-sm text-red-400">{errors.position}</p>
                      )}
                    </div>
                  </div>

                  {/* LinkedIn */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      LinkedIn (opcional)
                    </label>
                    <input
                      type="url"
                      name="linkedin"
                      value={formData.linkedin}
                      onChange={handleChange}
                      placeholder="https://linkedin.com/in/tu-perfil"
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:border-cyan-500 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* CV */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      CV / Currículum
                    </label>
                    <input
                      type="file"
                      name="cv"
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx"
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:outline-none file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-gradient-to-r file:from-sertic-cyan file:to-sertic-blue file:text-white hover:file:opacity-90"
                    />
                  </div>

                  {/* Mensaje */}
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Mensaje (opcional)
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Contanos por qué te gustaría trabajar con nosotros..."
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white resize-none focus:border-cyan-500 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Botón */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full px-6 py-3 rounded-full font-medium transition-all ${isSubmitting
                        ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-sertic-cyan to-sertic-blue text-white hover:shadow-lg hover:shadow-cyan-500/30'
                      }`}
                  >
                    {isSubmitting ? 'Enviando…' : 'Enviar Postulación'}
                  </button>
                </form>
              </div>
            </div>
          </section>


          {/* ================= MODAL TEAM MEMBER ================= */}
          {selectedMember && (
            <div
              className="fixed inset-0 bg-black/60 backdrop-blur z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedMember(null)}
            >
              <div
                onClick={e => e.stopPropagation()}
                className="bg-gradient-to-br from-sertic-dark to-black max-w-2xl w-full rounded-3xl border border-sertic-cyan/30 p-8 relative max-h-[90vh] overflow-y-auto"
              >
                <button
                  onClick={() => setSelectedMember(null)}
                  className="absolute top-6 right-6 bg-white/10 p-2 rounded-full hover:bg-white/20 transition"
                >
                  <X />
                </button>

                <div className="flex gap-6 mb-6">
                  <img
                    src={selectedMember.photo}
                    alt={selectedMember.name}
                    className="w-32 h-32 rounded-2xl border-4 border-sertic-cyan object-cover"
                  />
                  <div>
                    <h2 className="text-3xl font-bold">{selectedMember.name}</h2>
                    <span className="inline-block mt-2 px-4 py-2 rounded-full bg-gradient-to-r from-sertic-cyan to-sertic-blue font-bold">
                      {selectedMember.role}
                    </span>
                    <p className="mt-4 text-gray-300">{selectedMember.bio}</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/5 p-4 rounded-xl">
                    <Briefcase className="text-sertic-cyan mb-2" />
                    <p className="font-bold">{selectedMember.experience}</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl">
                    <GraduationCap className="text-sertic-blue mb-2" />
                    <p className="font-bold">{selectedMember.education}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="font-bold mb-3 flex items-center gap-2">
                    <Award /> Logros
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedMember.achievements.map((a, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-full bg-sertic-cyan/20 border border-sertic-cyan/30 text-sm"
                      >
                        {a}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <a
                    href={selectedMember.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 p-4 rounded-xl bg-sertic-cyan/20 border border-sertic-cyan hover:bg-sertic-cyan/30 transition"
                  >
                    <Linkedin /> LinkedIn
                  </a>
                  <a
                    href={`mailto:${selectedMember.email}`}
                    className="flex-1 flex items-center justify-center gap-2 p-4 rounded-xl bg-sertic-blue/20 border border-sertic-blue hover:bg-sertic-blue/30 transition"
                  >
                    <Mail /> Email
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* ================= MODAL DE CONFIRMACIÓN ================= */}
          {modal.isOpen && (
            <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur flex items-center justify-center p-4">
              <div className="bg-gradient-to-br from-sertic-dark to-black border border-sertic-cyan/30 rounded-2xl max-w-md w-full p-8 text-center">
                {modal.isSuccess ? (
                  <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-green-500" />
                  </div>
                ) : (
                  <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <X className="w-8 h-8 text-red-500" />
                  </div>
                )}
                <h3 className="text-xl font-bold text-white mb-2">
                  {modal.isSuccess ? '¡Postulación Enviada!' : 'Error'}
                </h3>
                <p className="text-gray-300 mb-6">{modal.message}</p>
                <button
                  onClick={() => setModal({ ...modal, isOpen: false })}
                  className="px-6 py-2 rounded-full bg-gradient-to-r from-sertic-cyan to-sertic-blue text-white hover:shadow-lg hover:shadow-sertic-cyan/50 transition-all"
                >
                  Cerrar
                </button>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default TeamPage;