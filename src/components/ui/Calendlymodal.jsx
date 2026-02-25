import React, { useState, useEffect, useRef } from "react";
import { X, CheckCircle, XCircle, Loader2, Calendar, Clock, ExternalLink } from "lucide-react";

const AVAILABLE_URL = import.meta.env.VITE_N8N_SCHEDULE_WEBHOOK_URL;
const MEETING_URL = import.meta.env.VITE_N8N_SCHEDULE_MEETING_WEBHOOK_URL;
const ORGANIZER_EMAIL = import.meta.env.VITE_N8N_ORGANIZER_EMAIL || "alexis.rabbia@sertic.com.ar";

const getMinDate = () => {
  const d = new Date();
  d.setDate(d.getDate() + 1);
  while (d.getDay() === 0 || d.getDay() === 6) d.setDate(d.getDate() + 1);
  return d.toISOString().split("T")[0];
};

const formatDateLabel = (dateStr) => {
  if (!dateStr) return "";
  const [y, m, d] = dateStr.split("-");
  return new Date(+y, +m - 1, +d).toLocaleDateString("es-AR", {
    weekday: "long", day: "numeric", month: "long",
  });
};

const InputField = ({ label, error, ...props }) => (
  <div>
    <label className="block text-sm font-medium text-gray-300 mb-2">{label}</label>
    <input
      {...props}
      className={`w-full px-4 py-3 bg-slate-700/50 border rounded-lg text-white focus:outline-none transition-colors ${
        error ? "border-red-500 focus:border-red-400" : "border-slate-600 focus:border-cyan-500"
      }`}
    />
    {error && <p className="mt-1 text-sm text-red-400">{error}</p>}
  </div>
);

const CalendlyModal = ({ isOpen, onClose }) => {
  const overlayRef = useRef(null);

  const [form, setForm] = useState({
    name: "", email: "", phone: "", company: "", date: "", time: "", message: "",
  });
  const [errors, setErrors] = useState({});
  const [slots, setSlots] = useState([]);
  const [loadingSlots, setLoadingSlots] = useState(false);
  const [slotsError, setSlotsError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [modal, setModal] = useState({
    isOpen: false,
    isSuccess: false,
    message: "",
    meetLink: "",
  });

  // Reset al cerrar
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setForm({ name: "", email: "", phone: "", company: "", date: "", time: "", message: "" });
        setErrors({});
        setSlots([]);
        setSlotsError("");
        setModal({ isOpen: false, isSuccess: false, message: "", meetLink: "" });
      }, 300);
    }
  }, [isOpen]);

  // Cerrar con Escape
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    if (isOpen) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, onClose]);

  // Consultar slots al cambiar fecha
  useEffect(() => {
  if (!form.date) return;
  
  setSlotsError("");
  setSlots([]);
  setForm((prev) => ({ ...prev, time: "" }));

  const controller = new AbortController();

  const fetchSlots = async () => {
    // Esperar 400ms antes de mostrar loading, evita el flash
    await new Promise((resolve) => setTimeout(resolve, 400));
    if (controller.signal.aborted) return;

    setLoadingSlots(true);
    try {
      const res = await fetch(`${AVAILABLE_URL}?date=${form.date}`, {
        signal: controller.signal,
      });
      if (!res.ok) throw new Error();
      const data = await res.json();
      setSlotsError(""); // limpiar error previo si ahora hay slots
      if (!data.available_slots?.length) {
        setSlotsError("No hay horarios disponibles para este día. Probá con otra fecha.");
      } else {
        setSlots(data.available_slots);
      }
    } catch (err) {
      if (err.name === "AbortError") return; // cambió la fecha, ignorar
      setSlotsError("No se pudo consultar la disponibilidad. Verificá tu conexión e intentá de nuevo.");
    } finally {
      setLoadingSlots(false);
    }
  };

  fetchSlots();
  return () => controller.abort(); // cancelar si cambia la fecha antes de terminar
}, [form.date]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "El nombre es requerido";
    if (!form.email.trim()) e.email = "El email es requerido";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Email inválido";
    if (!form.date) e.date = "La fecha es requerida";
    if (!form.time) e.time = "Seleccioná un horario";
    if (!form.message.trim()) e.message = "El mensaje es requerido";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    try {
      const res = await fetch(MEETING_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          date: form.date,
          start_time: form.time,
          client_name: form.name,
          client_email: form.email,
          meeting_title: form.message.slice(0, 60) || "Reunión",
          organizer_email: ORGANIZER_EMAIL,
          phone: form.phone || "No especificado",
          company: form.company || "No especificada",
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setModal({
          isOpen: true,
          isSuccess: true,
          message: `¡Reunión confirmada para el ${formatDateLabel(form.date)} a las ${form.time}! Revisá tu casilla, te enviamos un email con todos los detalles.`,
          meetLink: data.meet_link || "",
        });
        setForm({ name: "", email: "", phone: "", company: "", date: "", time: "", message: "" });
        setSlots([]);
        setErrors({});
      } else if (res.status === 409) {
        setModal({
          isOpen: true,
          isSuccess: false,
          message: "Ese horario ya fue tomado por otra persona. Por favor elegí otro horario disponible.",
          meetLink: "",
        });
      } else {
        setModal({
          isOpen: true,
          isSuccess: false,
          message: data.message || "Hubo un problema al agendar la reunión. Intenta nuevamente.",
          meetLink: "",
        });
      }
    } catch {
      setModal({
        isOpen: true,
        isSuccess: false,
        message: "Hubo un problema al agendar la reunión. Intenta nuevamente.",
        meetLink: "",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = form.name && form.email && form.date && form.time && form.message && !isSubmitting;

  if (!isOpen) return null;

  return (
    <>
      <style>{`
        .slot-chip { cursor: pointer; transition: all 0.15s; user-select: none; }
        .slot-chip:hover { border-color: rgba(6,182,212,0.5); background: rgba(6,182,212,0.08); color: #e2e8f0; }
        .slot-chip.selected { border-color: #06b6d4; background: rgba(6,182,212,0.15); color: #06b6d4; font-weight: 600; }
      `}</style>

      {/* Modal de resultado — mismo patrón que ContactForm */}
      {modal.isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] flex items-center justify-center p-4">
          <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700/50 max-w-md w-full p-8 text-center">
            {modal.isSuccess ? (
              <CheckCircle className="w-16 h-16 text-sertic-cyan mx-auto mb-4" />
            ) : (
              <XCircle className="w-16 h-16 text-sertic-orange mx-auto mb-4" />
            )}
            <h3 className="text-xl font-semibold mb-4 text-white">
              {modal.isSuccess ? "¡Reunión agendada!" : "No se pudo agendar"}
            </h3>
            <p className="text-gray-300 mb-6">{modal.message}</p>

            {/* Botón de Meet si hay link */}
            {modal.isSuccess && modal.meetLink && (
              <a
                href={modal.meetLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full mb-4 px-4 py-2.5 rounded-full border border-sertic-cyan/40 text-sertic-cyan text-sm hover:bg-sertic-cyan/10 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Abrir Google Meet
              </a>
            )}

            <button
              onClick={() => {
                setModal((m) => ({ ...m, isOpen: false }));
                if (modal.isSuccess) onClose();
              }}
              className="bg-gradient-to-r from-sertic-cyan to-sertic-blue hover:opacity-90 px-6 py-2 rounded-full transition-all duration-300 text-white font-medium"
            >
              {modal.isSuccess ? "Perfecto" : "Cerrar"}
            </button>
          </div>
        </div>
      )}

      {/* Overlay principal */}
      <div
        ref={overlayRef}
        onClick={(e) => e.target === overlayRef.current && onClose()}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      >
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700/50 w-full max-w-2xl overflow-y-auto max-h-[90vh]">
          <div className="p-6 md:p-8">

            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-3xl font-bold bg-gradient-to-r from-sertic-cyan to-sertic-blue bg-clip-text text-transparent">
                  Agendar reunión
                </h2>
                <p className="text-sm text-slate-400 mt-1">Lunes a viernes · 08:00 a 17:00 · 30 minutos</p>
              </div>
              <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors mt-1">
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">

              <div className="grid md:grid-cols-2 gap-4">
                <InputField label="Nombre completo *" name="name" value={form.name} onChange={handleChange} error={errors.name} placeholder="Juan García" />
                <InputField label="Empresa" name="company" value={form.company} onChange={handleChange} placeholder="Mi empresa S.A." />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <InputField label="Email *" name="email" type="email" value={form.email} onChange={handleChange} error={errors.email} placeholder="correo@empresa.com" />
                <InputField label="Teléfono" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="+54 341 ..." />
              </div>

              {/* Fecha */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  <span className="inline-flex items-center gap-1.5"><Calendar className="w-4 h-4" /> Fecha preferida *</span>
                </label>
                <input
                  type="date"
                  name="date"
                  value={form.date}
                  onChange={handleChange}
                  min={getMinDate()}
                  className={`w-full px-4 py-3 bg-slate-700/50 border rounded-lg text-white focus:outline-none transition-colors ${
                    errors.date ? "border-red-500" : "border-slate-600 focus:border-cyan-500"
                  }`}
                />
                {errors.date && <p className="mt-1 text-sm text-red-400">{errors.date}</p>}
              </div>

              {/* Slots */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  <span className="inline-flex items-center gap-1.5"><Clock className="w-4 h-4" /> Horario disponible *</span>
                </label>

                {!form.date && (
                  <p className="text-sm text-slate-500 italic py-2">Seleccioná una fecha para ver los horarios disponibles.</p>
                )}

                {loadingSlots && (
                  <div className="flex items-center gap-2 text-sm text-slate-400 py-2">
                    <Loader2 className="w-4 h-4 animate-spin text-sertic-cyan" />
                    Consultando disponibilidad...
                  </div>
                )}

                {slotsError && (
                  <div className="flex items-start gap-2 text-sm text-red-400 py-2">
                    <XCircle className="w-4 h-4 mt-0.5 shrink-0" />
                    {slotsError}
                  </div>
                )}

                {slots.length > 0 && (
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
                    {slots.map((slot) => {
                      const slotTime = slot.label.split(" - ")[0];
                      return (
                        <button
                          key={slot.start}
                          type="button"
                          onClick={() => {
                            setForm((p) => ({ ...p, time: slotTime }));
                            if (errors.time) setErrors((e) => ({ ...e, time: "" }));
                          }}
                          className={`slot-chip text-xs py-2 rounded-lg border border-slate-600 text-slate-400 ${form.time === slotTime ? "selected" : ""}`}
                        >
                          {slotTime}
                        </button>
                      );
                    })}
                  </div>
                )}

                {errors.time && <p className="mt-1 text-sm text-red-400">{errors.time}</p>}
              </div>

              {/* Mensaje */}
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">¿De qué querés hablar? *</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={3}
                  className={`w-full px-4 py-3 bg-slate-700/50 border rounded-lg text-white resize-none focus:outline-none transition-colors ${
                    errors.message ? "border-red-500 focus:border-red-400" : "border-slate-600 focus:border-cyan-500"
                  }`}
                  placeholder="Breve descripción del motivo de la reunión..."
                />
                {errors.message && <p className="mt-1 text-sm text-red-400">{errors.message}</p>}
              </div>

              <button
                type="submit"
                disabled={!isFormValid}
                className={`w-full px-6 py-3 rounded-full font-medium transition-all flex items-center justify-center gap-2 ${
                  isFormValid
                    ? "bg-gradient-to-r from-sertic-cyan to-sertic-blue text-white"
                    : "bg-gray-600 text-gray-400 cursor-not-allowed"
                }`}
              >
                {isSubmitting ? (
                  <><Loader2 className="w-4 h-4 animate-spin" /> Agendando...</>
                ) : (
                  "Confirmar reunión"
                )}
              </button>

            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CalendlyModal;