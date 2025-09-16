import { Headphones, Server, Shield, Users } from 'lucide-react';

export const services = [
  {
    id: 'soporte-remoto',
    icon: Headphones,
    title: "Soporte Remoto",
    description: "Atención rápida y eficiente para resolver incidencias de forma remota.",
    features: ["Mesa de ayuda", "Resolución de tickets", "Asistencia en tiempo real", "SLA garantizados"],
    color: "cyan"
  },
  {
    id: 'infraestructura',
    icon: Server,
    title: "Infraestructura",
    description: "Diseño, implementación y mantenimiento de la infraestructura tecnológica de tu empresa.",
    features: ["Servidores Windows & Linux", "Cloud (AWS, GCP)", "Redes y comunicaciones", "Gestión de backups"],
    color: "purple"
  },
  {
    id: 'consultoria',
    icon: Shield,
    title: "Consultoría",
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
