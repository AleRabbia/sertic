import { TrendingUp, Shield, Users } from 'lucide-react';

export const heroSlides = [
  {
    id: 1,
    title: "La solución IT que tu empresa necesita",
    subtitle:
      "Infraestructura, ciberseguridad, desarrollo y talento especializado para acompañar tu crecimiento tecnológico.",
    cta: {
      label: "Solicitar asesoría",
      action: "contacto"
    },
    icon: TrendingUp,
    gradient: "from-sertic-light via-sertic-celeste to-sertic-white",
    // Use public URL paths instead of imports
    // This ensures <picture> element can serve AVIF/WebP without browser bundling the original
    image: '/hero/nodos.jpeg',
    avif: '/hero/nodos.avif',
    webp: '/hero/nodos.webp'
  },
  {
    id: 2,
    title: "Potencia tu seguridad con Prowler",
    subtitle:
      "Auditorías automatizadas de seguridad cloud para AWS, Azure y GCP. Identificá vulnerabilidades antes que los atacantes.",
    cta: {
      label: "Solicitar demo",
      action: "contacto"
    },
    icon: Shield,
    gradient: "from-sertic-orange via-sertic-light to-sertic-white",
    image: '/hero/nube.jpeg',
    avif: '/hero/nube.avif',
    webp: '/hero/nube.webp'
  },
  {
    id: 3,
    title: "Casos de éxito que inspiran",
    subtitle:
      "Conocé cómo empresas como INTA, LETIS y KONECTA transformaron su infraestructura junto a SerTIC.",
    cta: {
      label: "Ver casos de éxito",
      action: "casos"
    },
    icon: Users,
    gradient: "from-sertic-azul-claro via-sertic-celeste to-sertic-light",
    image: '/hero/escritorio.jpeg',
    avif: '/hero/escritorio.avif',
    webp: '/hero/escritorio.webp'
  }
];
