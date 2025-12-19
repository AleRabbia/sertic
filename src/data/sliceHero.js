import { TrendingUp, Shield, Users } from 'lucide-react';
import NodosImg from '../assets/hero/nodos.jpeg';
import ChipImg from '../assets/hero/chip.jpeg';
import NubeImg from '../assets/hero/nube.jpeg';
import DeskImg from '../assets/hero/escritorio.jpeg';

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
    image: NodosImg
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
    image: NubeImg
  },
  {
    id: 3,
    title: "Casos de éxito que inspiran",
    subtitle:
      "Conocé cómo empresas como AGROSPRAY, LETIS y FULLCONTROL transformaron su infraestructura junto a SerTIC.",
    cta: {
      label: "Ver casos de éxito",
      action: "casos"
    },
    icon: Users,
    gradient: "from-sertic-azul-claro via-sertic-celeste to-sertic-light",
    image: DeskImg
  }
];
