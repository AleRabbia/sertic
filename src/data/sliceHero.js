import { TrendingUp, Shield, Users } from 'lucide-react';

export const heroSlides = [
  {
    id: 1,
    titleKey: "hero.title1",
    subtitleKey: "hero.subtitle1",
    cta: {
      labelKey: "hero.cta1",
      action: "contacto"
    },
    icon: TrendingUp,
    gradient: "from-sertic-light via-sertic-celeste to-sertic-white",
    image: '/hero/nodos.jpeg',
    avif: '/hero/nodos.avif',
    webp: '/hero/nodos.webp'
  },
  {
    id: 2,
    titleKey: "hero.title2",
    subtitleKey: "hero.subtitle2",
    cta: {
      labelKey: "hero.cta2",
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
    titleKey: "hero.title3",
    subtitleKey: "hero.subtitle3",
    cta: {
      labelKey: "hero.cta3",
      action: "casos"
    },
    icon: Users,
    gradient: "from-sertic-azul-claro via-sertic-celeste to-sertic-light",
    image: '/hero/escritorio.jpeg',
    avif: '/hero/escritorio.avif',
    webp: '/hero/escritorio.webp'
  }
];
