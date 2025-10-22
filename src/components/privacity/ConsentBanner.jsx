import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Cookies from "js-cookie";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  const navigate = useNavigate(); 

  useEffect(() => {
    const consent = Cookies.get("cookieConsent");
    if (!consent) setVisible(true);
  }, []);

  const handleConsent = (choice) => {
    Cookies.set("cookieConsent", choice, { expires: 365 }); // 1 año
    setVisible(false);

    if (choice === "accepted") {
      enableAnalytics();
    }
  };

  const handleCookiesClick = (e) => {
    e.preventDefault();
    navigate('/politica-cookies');
  };

  const enableAnalytics = () => {
  if (document.getElementById("ga-script")) return; // evitar duplicados

  try {
    const script = document.createElement("script");
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX";
    script.async = true;
    script.id = "ga-script";
    

    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() { window.dataLayer.push(arguments); }
    window.gtag = gtag;
    gtag("js", new Date());
    gtag("config", "G-XXXXXXXXXX");
  } catch (err) {
    console.info("ℹ️ No se pudo cargar Google Analytics:", err);
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
    <div className="fixed bottom-0 left-0 w-full bg-gray-900 text-white p-4 flex justify-between items-center shadow-lg z-50">
      <p className="text-sm max-w-[70%]">
        Usamos cookies para mejorar tu experiencia y analizar el uso del sitio.{" "}
        <a href="/politica-cookies" className="underline"
        onClick={handleCookiesClick}>
          Más info
        </a>
      </p>
      <div className="flex space-x-2">
        <button
          onClick={() => handleConsent("rejected")}
          className="bg-red-500 px-3 py-1 rounded hover:bg-red-600 text-sm"
        >
          Rechazar
        </button>
        <button
          onClick={() => handleConsent("accepted")}
          className="bg-green-500 px-3 py-1 rounded hover:bg-green-600 text-sm"
        >
          Aceptar
        </button>
      </div>
    </div>
  );
};

export default CookieBanner;
