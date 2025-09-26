import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const ConsentBanner = () => {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    const consent = Cookies.get("cookieConsent");
    if (!consent) setVisible(true);
  }, []);

  const handleConsent = (choice) => {
    Cookies.set("cookieConsent", choice, { expires: 365 });
    setVisible(false);

    if (choice === "accepted") {
      enableAnalytics();
    }
    
    window.dispatchEvent(new Event("cookieConsentChanged"));
  };

  const enableAnalytics = () => {
    if (document.getElementById("ga-script")) return;

    try {
      const script = document.createElement("script");
      script.src = "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX";
      script.async = true;
      script.id = "ga-script";

      script.onerror = () => {
        console.info("Google Analytics bloqueado por el navegador o extensión.");
      };

      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag() { window.dataLayer.push(arguments); }
      window.gtag = gtag;
      gtag("js", new Date());
      gtag("config", "G-XXXXXXXXXX");
    } catch (err) {
      console.info("No se pudo cargar Google Analytics:", err);
    }
  };
  
  useEffect(() => {
    const consent = Cookies.get("cookieConsent");
    if (consent === "accepted") {
      enableAnalytics();
    }
  }, []);

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Consentimiento de cookies"
      className={`fixed bottom-0 left-0 w-full bg-gray-900 text-white p-4 flex flex-col md:flex-row justify-between items-center shadow-lg z-50 transition-transform duration-300 transform ${visible ? "translate-y-0" : "translate-y-full"}`}
    >
      <p className="text-sm max-w-[70%] mb-2 md:mb-0">
        Usamos cookies para mejorar tu experiencia y analizar el uso del sitio.{" "}
        <button
          onClick={() => navigate("/politica-cookies")}
          className="underline text-blue-300 hover:text-blue-400"
          aria-label="Más información sobre política de cookies"
        >
          Más info
        </button>
      </p>
      <div className="flex space-x-2">
        <button
          onClick={() => handleConsent("rejected")}
          className="bg-red-500 px-3 py-1 rounded hover:bg-red-600 text-sm"
          aria-label="Rechazar cookies"
        >
          Rechazar
        </button>
        <button
          onClick={() => handleConsent("accepted")}
          className="bg-green-500 px-3 py-1 rounded hover:bg-green-600 text-sm"
          aria-label="Aceptar cookies"
        >
          Aceptar
        </button>
        <button
          onClick={() => navigate("/politica-cookies?configurar=true")}
          className="bg-gray-500 px-3 py-1 rounded hover:bg-gray-600 text-sm"
          aria-label="Configurar cookies"
        >
          Configurar
        </button>
      </div>
    </div>
  );
};

export default ConsentBanner;
