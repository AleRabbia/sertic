import HAG from '../assets/equipo/1.png';
import Alexis from '../assets/equipo/2.png';
import Melania from '../assets/equipo/5.png';
import Ramiro from '../assets/equipo/8.png';
import Nicolas from '../assets/equipo/6.png';
import Patricio from '../assets/equipo/7.png';
import Digna from '../assets/equipo/3.png';
import Francisco from '../assets/equipo/4.png';

export const teamMembers = [
  {
    id: 1,
    name: "Héctor Garcia",
    role: "CEO",
    gridPosition: { row: 1, col: 2 },
    photo: HAG,
    bio: "Más de 25 años liderando proyectos tecnológicos",
    experience: "25+ años",
    education: "MBA UBA, Analista de Sistemas UTN",
    linkedin: "https://www.linkedin.com/in/hag74/",
    email: "hector.garcia@sertic.com.ar",
    achievements: ["Certificación ISO 27002", "Ciberseguridad"]
  },
  {
    id: 7,
    name: "Digna Martinez",
    role: "Project Manager",
    gridPosition: { row: 2, col: 1 },
    photo: Digna,
    bio: "Analista Funcional",
    experience: "9+ años",
    education: "Analista de Sistemas",
    linkedin: "https://www.linkedin.com/in/digna-m-b5352a1b5/",
    email: "digna.martinez@sertic.com.ar",
    achievements: ["Atlassian","Base de datos"]
  },
  {
    id: 4,
    name: "Alexis Rabbia",
    role: "Comercial",
    gridPosition: { row: 4, col: 2 },
    photo: Alexis,
    bio: "Analista de sistemas con orientación comercial",
    experience: "15+ años",
    education: "Análisis de Sistemas",
    linkedin: "https://www.linkedin.com/in/alexis-rabbia-4456b2122/",
    email: "alexis.rabbia@sertic.com.ar",
    achievements: ["Master en Negocios"]
  },
  {
    id: 5,
    name: "Melania Quillici",
    role: "Administración",
    gridPosition: { row: 2, col: 2 },
    photo: Melania,
    bio: "Gestión financiera y operaciones administrativas",
    experience: "9+ años",
    education: "Administración de Empresas",
    linkedin: "https://www.linkedin.com/in/melania-quilici-037a8185/",
    email: "melania.quillici@sertic.com.ar",
    achievements: ["SAP Consultant", "Odoo Expert"]
  },
  {
    id: 3,
    name: "Ramiro Lemos",
    role: "Infraestructura",
    gridPosition: { row: 3, col: 2 },
    photo: Ramiro,
    bio: "Experto en arquitectura de redes y seguridad",
    experience: "15+ años",
    education: "Ciencia de la Computación UNR",
    linkedin: "https://www.linkedin.com/in/ramiro-lemos-b1392418/",
    email: "ramiro.lemos@sertic.com.ar",
    achievements: ["Adm Redes", "CCNP Security", "CISSP"]
  },
  {
    id: 2,
    name: "Nicolás Román",
    role: "DevOps",
    gridPosition: { row: 3, col: 1 },
    photo: Nicolas,
    bio: "Especialista en CI/CD y automatización de infraestructura",
    experience: "15+ años",
    education: "Ingeniería en Sistemas UTN",
    linkedin: "https://www.linkedin.com/in/nicolaseroman/",
    email: "nicolas.romar@sertic.cloud",
    achievements: ["Kubernetes CKA", "AWS DevOps Pro"]
  },
  {
    id: 6,
    name: "Patricio Saez de Arregui",
    role: "Cloud",
    gridPosition: { row: 2, col: 3 },
    photo: Patricio,
    bio: "Arquitecto Cloud certificado en AWS y Azure",
    experience: "15+ años",
    education: "Ingeniero Ambiental",
    linkedin: "https://www.linkedin.com/in/patricio-ramiro-saez-de-arregui-24025a64/",
    email: "patricio.saez@sertic.com.ar",
    achievements: ["AWS Solutions Architect", "Azure Expert"]
  },
  {
    id: 8,
    name: "Francisco Mizzau",
    role: "HR",
    gridPosition: { row: 3, col: 3 },
    photo: Francisco,
    bio: "Recursos Humanos",
    experience: "12+ años",
    education: "Recursos Humanos",
    linkedin: "https://www.linkedin.com/in/franciscomizzau/",
    email: "francisco.mizzau@sertic.com.ar",
    achievements: ["Experto en Reclutamiento 2.0", "Selección por competencias"]
  }
];
