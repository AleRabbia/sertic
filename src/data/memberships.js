import polo from '../assets/clientes/polo.png';
import cessi from '../assets/clientes/cessi.png';
import iso from '../assets/clientes/iso.svg';

export const memberships = [
  {
    id: 1,
    name: "Polo Tecnológico Rosario",
    logo: polo,
    description: "Miembro del Polo Tecnológico de Rosario",
    website: "https://polotecnologico.net/",
    type: "technology"
  },
  {
    id: 2,
    name: "CESSI",
    logo: cessi,
    description: "Cámara de Empresas de Software y Servicios Informáticos",
    website: "https://cessi.org.ar/",
    type: "chamber"
  },
  /*{
    id: 3,
    name: "ISO 27001",
    logo: iso,
    description: "Certificación en Sistemas de Gestión de Seguridad de la Información",
    website: "https://www.iso.org/standard/27001",
    type: "certification"
  },*/
  {
    id: 4,
    name: "ISO 27002",
    logo: iso,
    description: "Aplicamos las buenas prácticas de seguridad definidas en la norma ISO 27002.",
    website: "https://www.iso.org/standard/75652.html",
    type: "standard"
  }
];

