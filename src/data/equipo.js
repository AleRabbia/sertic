import HAG from '../assets/equipo/HAG.png';
import Alexis from '../assets/equipo/Alexis.jpg';
import Melania from '../assets/equipo/MelaniaQuillici.jpg';
import Ramiro from '../assets/equipo/RamiroLemos.jpg';
import Nicolas from '../assets/equipo/nicolasRoman.jpg';
import Patricio from '../assets/equipo/PatricioSaenz.jpg';

export const teamMembers = [
  {
    id: 1,
    name: "Héctor Garcia",
    role: "CEO",
    gridPosition: { row: 1, col: 2 },
    photo: HAG,
    bio: "Más de 25 años liderando proyectos tecnológicos",
    experience: "25+ años",
    education: "MBA, Ingeniería en Sistemas",
    linkedin: "#",
    email: "hector.garcia@sertic.com.ar",
    achievements: ["Certificación ISO 27002", "Ciberseguridad"]
  },
  {
    id: 2,
    name: "Nicolás Román",
    role: "DevOps",
    gridPosition: { row: 2, col: 1 },
    photo: Nicolas,
    bio: "Especialista en CI/CD y automatización de infraestructura",
    experience: "15+ años",
    education: "Ingeniería en Sistemas",
    linkedin: "#",
    email: "nicolas.romar@sertic.cloud",
    achievements: ["Kubernetes CKA", "AWS DevOps Pro"]
  },
  {
    id: 3,
    name: "Ramiro Lemos",
    role: "Infraestructura",
    gridPosition: { row: 2, col: 2 },
    photo: Ramiro,
    bio: "Experto en arquitectura de redes y seguridad",
    experience: "15+ años",
    education: "Ingeniería en Redes",
    linkedin: "#",
    email: "ramiro.lemos@sertic.com.ar",
    achievements: ["CCNP Security", "CISSP"]
  },
  {
    id: 6,
    name: "Patricio Paez",
    role: "Cloud",
    gridPosition: { row: 2, col: 3 },
    photo: Patricio,
    bio: "Arquitecto Cloud certificado en AWS y Azure",
    experience: "10+ años",
    education: "Ingeniería en Software",
    linkedin: "#",
    email: "patricio.paez@sertic.com.ar",
    achievements: ["AWS Solutions Architect", "Azure Expert"]
  },
  {
    id: 4,
    name: "Alexis Rabbia",
    role: "Comercial",
    gridPosition: { row: 3, col: 2 },
    photo: Alexis,
    bio: "Analista de sistemas con orientación comercial",
    experience: "15+ años",
    education: "Análisis de Sistemas",
    linkedin: "#",
    email: "alexis.rabbia@sertic.com.ar",
    achievements: ["Master en Negocios"]
  },
  {
    id: 5,
    name: "Melania Quillici",
    role: "Administración",
    gridPosition: { row: 3, col: 1 },
    photo: Melania,
    bio: "Gestión financiera y operaciones administrativas",
    experience: "9+ años",
    education: "Contador Público",
    linkedin: "#",
    email: "melania.quillici@sertic.com.ar",
    achievements: ["SAP Consultant"]
  },
  {
    id: 7,
    name: "Digna Martinez",
    role: "Analista de Sistemas",
    gridPosition: { row: 3, col: 3 },
    photo: Melania,
    bio: "Analista Funcional",
    experience: "9+ años",
    education: "Analista de Sistemas",
    linkedin: "#",
    email: "digna.martinez@sertic.com.ar",
    achievements: ["Atlassian"]
  }
];
