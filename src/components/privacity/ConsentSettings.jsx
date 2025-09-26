import { useState, useEffect, useRef } from "react";
import Cookies from "js-cookie";

const ConsentSettings = ({ isOpen, onClose }) => {
  const [analytics, setAnalytics] = useState(false);
  const [ads, setAds] = useState(false);
  const firstCheckboxRef = useRef(null);
  const modalRef = useRef(null);
  
  useEffect(() => {
    if (!isOpen) return;

    const consent = Cookies.get("cookieConsentSettings");
    if (consent) {
      try {
        const parsed = JSON.parse(consent);
        setAnalytics(parsed.analytics);
        setAds(parsed.ads);
      } catch {
        console.error("Error al leer cookieConsentSettings");
      }
    }
    
    setTimeout(() => firstCheckboxRef.current?.focus(), 50);
    
    const handleEscape = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);

    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  const handleSave = () => {
    const settings = { analytics, ads };
    Cookies.set("cookieConsentSettings", JSON.stringify(settings), { expires: 365 });

    // Guardar flag general
    if (analytics || ads) {
      Cookies.set("cookieConsent", "accepted", { expires: 365 });
    } else {
      Cookies.set("cookieConsent", "rejected", { expires: 365 });
    }

    onClose();
    
    window.dispatchEvent(new Event("cookieConsentChanged"));
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={(e) => e.target === e.currentTarget && onClose()}
      aria-modal="true"
      role="dialog"
      aria-labelledby="consent-modal-title"
    >
      <div
        ref={modalRef}
        className="bg-white rounded-xl shadow-lg w-full max-w-md p-6"
      >
        <h2 id="consent-modal-title" className="text-2xl font-bold mb-4 text-gray-800">
          Configuración de cookies
        </h2>

        <div className="space-y-4 bg-white text-gray-900 p-4 rounded-xl">
          <label className="flex items-center space-x-2">
            <input
              ref={firstCheckboxRef}
              type="checkbox"
              checked={analytics}
              onChange={() => setAnalytics(!analytics)}
              className="w-4 h-4"
            />
            <span>Cookies analíticas (ej. Google Analytics)</span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={ads}
              onChange={() => setAds(!ads)}
              className="w-4 h-4"
            />
            <span>Cookies de publicidad personalizada</span>
          </label>
        </div>

        <div className="flex justify-end space-x-2 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
            aria-label="Cancelar cambios"
          >
            Cancelar
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            aria-label="Guardar configuración de cookies"
          >
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConsentSettings;
