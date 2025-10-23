import { Code, Headphones, Server, Shield, Users } from 'lucide-react';

export const services = 

[
  {
    id: 'infraestructura',
    icon: Server,
    title: "Infraestructura IT",
    description:
      "Diseñamos, implementamos y administramos entornos tecnológicos confiables que aseguran el rendimiento, la escalabilidad y la continuidad operativa de tu negocio.",
    features: [
      "Servidores físicos y virtuales (Windows & Linux)",
      "Infraestructura Cloud (AWS, GCP)",
      "Gestión de Backups",
      "Monitoreo y soporte técnico especializado"
    ],
    color: "purple"
  },
  {
    id: 'consultoria',
    icon: Shield,
    title: "Ciberseguridad & Hardening",
    description:
      "Protegemos tus activos digitales con auditorías, controles y estrategias integrales de seguridad alineadas con los estándares internacionales.",
    features: [
      "Ciberseguridad preventiva y correctiva",
      "Auditorías IT",
      "Implementación de controles ISO 27002",
      "Planes de continuidad y recuperación"
    ],
    color: "pink"
  },
  {
    id: 'development',
    icon: Code,
    title: "Development & DevOps",
    description:
      "Automatizamos y optimizamos entornos de desarrollo y despliegue, mejorando la eficiencia, estabilidad y trazabilidad de tus aplicaciones.",
    features: [
      "Infraestructura como Código (Terraform, Ansible)",
      "Administración de Kubernetes (EKS, OKD, Rancher)",
      "CI/CD (GitLab, Jenkins, Azure DevOps)",
      "Observabilidad (Grafana, Prometheus)"
    ],
    color: "cyan"
  },
  {
    id: 'staffing',
    icon: Users,
    title: "Staffing",
    description:
      "Sumamos talento especializado a tu equipo para acompañar el crecimiento tecnológico de tu empresa con flexibilidad y experiencia.",
    features: [
      "Perfiles técnicos calificados",
      "Asignación flexible por proyecto o demanda",
      "Soporte operativo y técnico",
      "Recursos on-demand"
    ],
    color: "green"
  }
];

