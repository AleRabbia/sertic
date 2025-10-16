import { Headphones, Server, Shield, Users } from 'lucide-react';

export const services = [
  
  {
    id: 'infraestructura',
    icon: Server,
    title: "Infraestructura IT",
    description: "Implementamos y administramos entornos tecnológicos confiables que aseguran el rendimiento y la continuidad de tu operación.",
    features: ["Servidores físicos y virtuales (Windows & Linux)", "Infraestructura Cloud (AWS, GCP)", "Gestión de Backups", "Monitoreo y soporte técnico especializado" ],
    color: "purple"
  },
  {
    id: 'consultoria',
    icon: Shield,
    title: "Ciberseguridad y Hardening",
    description: "Auditorías, seguridad informática y planes estratégicos para proteger tu negocio.",
    features: ["Ciberseguridad", "Auditorías IT", "Normas ISO 27001", "Planes de continuidad"],
    color: "pink"
  },
  {
    id: 'staffing',
    icon: Users,
    title: "Staffing",
    description: "Talento especializado para reforzar tu equipo de tecnología según tus necesidades.",
    features: ["Perfiles técnicos", "Asignación flexible", "Soporte a proyectos", "Recursos on-demand"],
    color: "green"
  }
];
