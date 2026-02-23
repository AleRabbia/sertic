import { Code, Headphones, Server, Shield, Users, CheckCircle, Zap, Award, TrendingUp } from 'lucide-react';
import Infra from '../assets/hero/infraestructura.png';
import ciberseguridad from '../assets/hero/ciberseguridad.png';
import devops from '../assets/hero/devops.png';
import staffing from '../assets/hero/staffing.png';


export const services = [
  {
    id: 'infraestructura',
    slug: 'infraestructura-it',
    icon: Server,
    title: "Infraestructura IT",
    heroImage: Infra,
    description: "Rendimiento, escalabilidad y continuidad.",
    
    // Información extendida para la página de detalle
    fullDescription: "Transformamos tu infraestructura tecnológica en una ventaja competitiva. Nuestro equipo especializado diseña, implementa y gestiona soluciones robustas que garantizan la continuidad operativa de tu negocio 24/7.",
    
    features: [
      "Servidores & Virtualización",
      "Cloud (AWS/GCP)",
      "Backups & DR",
    ],
    
    // Detalles expandidos
    detailedFeatures: [
      {
        title: "Servidores Físicos y Virtuales",
        description: "Diseño e implementación de infraestructura on-premise con Windows Server y Linux, virtualización con VMware y Hyper-V.",
        icon: Server
      },
      {
        title: "Cloud Infrastructure",
        description: "Migración y gestión de infraestructura en AWS, Azure y Google Cloud Platform con arquitecturas escalables y seguras.",
        icon: Server
      },
      {
        title: "Backup y Disaster Recovery",
        description: "Implementación de soluciones de respaldo automatizado con Veeam, replicación y planes de recuperación ante desastres.",
        icon: Shield
      },
      {
        title: "Monitoreo 24/7",
        description: "Supervisión proactiva con Zabbix, Prometheus y Grafana para detectar y resolver problemas antes que impacten tu operación.",
        icon: TrendingUp
      }
    ],
    
    benefits: [
      "Alta disponibilidad garantizada (99.9% uptime)",
      "Escalabilidad bajo demanda",
      "Reducción de costos operativos hasta 40%",
      "Soporte técnico especializado 24/7",
      "Actualizaciones y parches de seguridad"
    ],
    
    technologies: [
      "VMware vSphere",
      "Windows Server",
      "Linux (Ubuntu, CentOS, RHEL)",
      "AWS / Azure / GCP",
      "Veeam Backup",
      "Zabbix",
      "Terraform",
      "Ansible"
    ],
    
    useCases: [
      {
        title: "Modernización de Data Center",
        description: "Migración de infraestructura legacy a entornos virtualizados modernos con alta disponibilidad."
      },
      {
        title: "Cloud Migration",
        description: "Traslado seguro de aplicaciones críticas a la nube con cero downtime."
      },
      {
        title: "Disaster Recovery",
        description: "Implementación de sitios de respaldo y planes de continuidad operativa."
      }
    ],
    
    pricing: {
      starter: "Desde USD 500/mes",
      professional: "Consultar",
      enterprise: "Consultar"
    },
    
    color: "cyan",
    gradient: "from-sertic-orange via-sertic-light to-sertic-white",
  },
  
  {
    id: 'ciberseguridad',
    slug: 'ciberseguridad',
    icon: Shield,
    heroImage : ciberseguridad,
    title: "Ciberseguridad & Hardening",
    description: "Reducimos riesgos y fortalecemos tus activos.",
    
    fullDescription: "En un mundo digital donde las amenazas evolucionan constantemente, protegemos tu empresa con soluciones de ciberseguridad robustas basadas en estándares internacionales y mejores prácticas de la industria.",
    
    features: [
      "Preventiva & correctiva",
      "Auditorías IT",
      "Controles ISO 27002"
    ],
    
    detailedFeatures: [
      {
        title: "Auditorías de Seguridad",
        description: "Evaluación integral de vulnerabilidades con Prowler, Nessus y herramientas especializadas para identificar brechas de seguridad.",
        icon: Shield
      },
      {
        title: "Hardening de Sistemas",
        description: "Fortificación de servidores, aplicaciones y redes siguiendo frameworks CIS y estándares ISO 27002.",
        icon: Server
      },
      {
        title: "Gestión de Incidentes",
        description: "Respuesta rápida ante incidentes de seguridad con planes de contención, erradicación y recuperación.",
        icon: Zap
      },
      {
        title: "Compliance y Normativas",
        description: "Implementación de controles para cumplimiento de ISO 27001, SOC 2, GDPR y regulaciones locales.",
        icon: Award
      }
    ],
    
    benefits: [
      "Reducción de superficie de ataque",
      "Cumplimiento normativo garantizado",
      "Detección temprana de amenazas",
      "Protección de datos críticos",
      "Auditorías automatizadas con Prowler"
    ],
    
    technologies: [
      "Prowler (AWS Security)",
      "Nessus",
      "Wazuh",
      "Cloudflare",
      "FortiGate",
      "CIS Benchmarks",
      "OWASP Top 10",
      "ISO 27002"
    ],
    
    useCases: [
      {
        title: "Security Assessment",
        description: "Evaluación completa de la postura de seguridad actual con recomendaciones priorizadas."
      },
      {
        title: "Cloud Security",
        description: "Auditorías automatizadas de AWS, Azure y GCP con Prowler para identificar configuraciones inseguras."
      },
      {
        title: "Incident Response",
        description: "Plan de respuesta a incidentes con equipo especializado disponible 24/7."
      }
    ],
    
    pricing: {
      starter: "Desde USD 800/mes",
      professional: "Consultar",
      enterprise: "Consultar"
    },
    
    color: "cyan",
    gradient: "from-sertic-orange via-sertic-light to-sertic-white",
  },
  
  {
    id: 'development',
    slug: 'development-devops',
    icon: Code,
    heroImage : devops,
    title: "Development & DevOps",
    description: "Automatización para despliegues confiables.",
    
    fullDescription: "Aceleramos tu ciclo de desarrollo con prácticas DevOps modernas, automatización de infraestructura y pipelines CI/CD robustos que reducen el time-to-market y mejoran la calidad del software.",
    
    features: [
      "IaC (Terraform/Ansible)",
      "Kubernetes (EKS/OKD)",
      "CI/CD (GitLab/Jenkins)"
    ],
    
    detailedFeatures: [
      {
        title: "Infrastructure as Code",
        description: "Automatización completa de infraestructura con Terraform y Ansible para entornos reproducibles y versionados.",
        icon: Code
      },
      {
        title: "Kubernetes & Containers",
        description: "Orquestación de contenedores con Kubernetes, EKS, AKS y administración con Rancher o OpenShift.",
        icon: Server
      },
      {
        title: "CI/CD Pipelines",
        description: "Implementación de pipelines automatizados con GitLab CI, Jenkins, GitHub Actions y Azure DevOps.",
        icon: Zap
      },
      {
        title: "Monitoring & Observability",
        description: "Stack completo de observabilidad con Prometheus, Grafana, ELK y herramientas de APM.",
        icon: TrendingUp
      }
    ],
    
    benefits: [
      "Reducción de 70% en tiempo de despliegue",
      "Automatización de tareas repetitivas",
      "Mejor visibilidad y trazabilidad",
      "Entornos consistentes y reproducibles",
      "Detección temprana de problemas"
    ],
    
    technologies: [
      "Terraform",
      "Ansible",
      "Kubernetes",
      "Docker",
      "GitLab CI/CD",
      "Jenkins",
      "Prometheus",
      "Grafana",
      "ELK Stack",
      "ArgoCD"
    ],
    
    useCases: [
      {
        title: "DevOps Transformation",
        description: "Migración de procesos manuales a pipelines automatizados con cultura DevOps."
      },
      {
        title: "Microservices Architecture",
        description: "Modernización de aplicaciones monolíticas a microservicios en Kubernetes."
      },
      {
        title: "GitOps Implementation",
        description: "Implementación de GitOps con ArgoCD para despliegues declarativos."
      }
    ],
    
    pricing: {
      starter: "Desde USD 1,000/mes",
      professional: "Consultar",
      enterprise: "Consultar"
    },
    
    color: "cyan",
    gradient: "from-sertic-orange via-sertic-light to-sertic-white",
  },
  
  {
    id: 'staffing',
    slug: 'staffing-it',
    icon: Users,
    heroImage : staffing,
    title: "Staffing IT",
    description: "Talento técnico para escalar con flexibilidad.",
    
    fullDescription: "Potenciamos tu equipo con profesionales IT altamente calificados. Nuestro modelo flexible te permite escalar recursos según las necesidades de tus proyectos sin los costos de contratación permanente.",
    
    features: [
      "Perfiles calificados",
      "Asignación flexible",
      "Soporte técnico"
    ],
    
    detailedFeatures: [
      {
        title: "Talent Matching",
        description: "Selección rigurosa de profesionales con las skills exactas que tu proyecto necesita.",
        icon: Users
      },
      {
        title: "Flexibilidad Total",
        description: "Contratación por proyecto, tiempo completo o parcial según tus necesidades cambiantes.",
        icon: Zap
      },
      {
        title: "Gestión Integrada",
        description: "Nuestro equipo se integra perfectamente con tu cultura y procesos existentes.",
        icon: CheckCircle
      },
      {
        title: "Expertise Diverso",
        description: "Perfiles especializados en infraestructura, desarrollo, seguridad, DevOps y más.",
        icon: Award
      }
    ],
    
    benefits: [
      "Reducción de 50% en costos vs contratación directa",
      "Acceso inmediato a talento especializado",
      "Sin costos de reclutamiento ni onboarding",
      "Flexibilidad para escalar equipo",
      "Expertise en múltiples tecnologías"
    ],
    
    technologies: [
      "Full Stack Developers",
      "DevOps Engineers",
      "Cloud Architects",
      "Security Specialists",
      "Database Administrators",
      "SysAdmins",
      "QA Engineers",
      "Project Managers"
    ],
    
    useCases: [
      {
        title: "Staff Augmentation",
        description: "Refuerzo temporal de equipos para proyectos de alta demanda o períodos críticos."
      },
      {
        title: "Project-Based Teams",
        description: "Equipos completos dedicados para proyectos específicos con skills especializadas."
      },
      {
        title: "Managed Services",
        description: "Gestión completa de áreas IT con nuestros profesionales integrados a tu operación."
      }
    ],
    
    pricing: {
      starter: "Desde USD 30/hora por recurso",
      professional: "Consultar",
      enterprise: "Consultar"
    },
    
    color: "cyan",
    gradient: "from-sertic-orange via-sertic-light to-sertic-white",
  }
];

// Utilidad para obtener servicio por slug
export const getServiceBySlug = (slug) => {
  return services.find(service => service.slug === slug);
};

// Utilidad para obtener servicios relacionados
export const getRelatedServices = (currentSlug, limit = 3) => {
  return services
    .filter(service => service.slug !== currentSlug)
    .slice(0, limit);
};