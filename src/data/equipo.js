import HAG from '../assets/equipo/HAG.jpg';
import Alexis from '../assets/equipo/Alexis.jpg';
import Melania from '../assets/equipo/MelaniaQuillici.jpg';
import Ramiro from '../assets/equipo/RamiroLemos.jpg';
import Nicolas from '../assets/equipo/nicolasRoman.jpg';



export const teamMembers = [
    {
      id: 1,
      name: "Héctor Garcia",
      role: "CEO",
      gridPosition: { row: 1, col: 2 }, // Centro superior
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
      achievements: ["Kubernetes CKA", "AWS DevOps Pro", "Docker Captain"]
    },
    {
      id: 3,
      name: "Ramiro Lemos",
      role: "Infraestructura",
      gridPosition: { row: 2, col: 3 },
      photo: Ramiro,
      bio: "Experto en arquitectura de redes y seguridad",
      experience: "15+ años",
      education: "Ingeniería en Redes",
      linkedin: "#",
      email: "ramiro.lemos@sertic.com.ar",
      achievements: ["CCNP Security", "CompTIA Security+", "CISSP"]
    },
    {
      id: 4,
      name: "Alexis Rabbia",
      role: "Comercial",
      gridPosition: { row: 3, col: 1 },
      photo: Alexis,
      bio: "Analista de sistemas y desarrollador de software con orientación comercial",
      experience: "15+ años",
      education: "Analisis de Sistemas | Programación",
      linkedin: "#",
      email: "alexis.rabbia@sertic.com.ar",
      achievements: ["Top Sales 2023", "Master en Negocios", "Certificación ODOO"]
    },
    {
      id: 5,
      name: "Melania Quillici",
      role: "Administración",
      gridPosition: { row: 3, col: 2 },
      photo: Melania,
      bio: "Gestión financiera y operaciones administrativas",
      experience: "9+ años",
      education: "Contador Público",
      linkedin: "#",
      email: "melania.quillici@sertic.com.ar",
      achievements: ["SAP Consultant"]
    },
    {
      id: 6,
      name: "Patricio Paez",
      role: "Cloud",
      gridPosition: { row: 3, col: 3 },
      photo: Nicolas,
      bio: "Arquitecto Cloud certificado en AWS y Azure",
      experience: "10+ años",
      education: "Ingeniería en Software",
      linkedin: "#",
      email: "patricio.paez@sertic.com.ar",
      achievements: ["AWS Solutions Architect", "Azure Expert", "GCP Professional"]
    }
  ];