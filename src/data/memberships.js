import polo from '../assets/clientes/polo.png';
import cessi from '../assets/clientes/cessi.png';
import iso from '../assets/clientes/iso.svg';
import kubernetes from '../assets/tecnologias/kubernetes.jpg';
import aws from '../assets/tecnologias/aws.jpg';
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
  {
    id: 3,
    name: "Certified Kubernetes Administrator (CKA)",
    logo: kubernetes,
    description: "Certificación internacional otorgada por The Linux Foundation y CNCF para profesionales especializados en administración de Kubernetes.",
    website: "https://training.linuxfoundation.org/certification/certified-kubernetes-administrator-cka/",
    type: "certification"
  },
  {
    id: 4,
    name: "AWS Certified Solutions Architect – Associate",
    logo: aws,
    description: "Certificación oficial de Amazon Web Services que acredita experiencia en diseño y gestión de infraestructuras en la nube.",
    website: "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
    type: "certification"
  },
  {
    id: 5,
    name: "ISO 27002",
    logo: iso,
    description: "Aplicamos las buenas prácticas de seguridad definidas en la norma ISO 27002.",
    website: "https://www.iso.org/standard/75652.html",
    type: "standard"
  }
];

