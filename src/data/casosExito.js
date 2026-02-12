import konecta from '../assets/clientes/konecta_circle.png';
import letis from '../assets/clientes/letis.png';
import unicaba from '../assets/clientes/unicaba.png';
import polobn from '../assets/clientes/polobn.png';
import cimomet from '../assets/clientes/cimomet.png';
import inta from '../assets/clientes/inta.png';
import agrospray from '../assets/clientes/agrospray.svg';
import fc from '../assets/clientes/full control.png';
import swipro from '../assets/clientes/15 - SWIPRO.png';
import nocaut from '../assets/clientes/nocaut.png';
import barsante from '../assets/clientes/3 - Barsante.png';
import faro from '../assets/clientes/faro.png';
import Tdf from '../assets/clientes/3dF.svg';
import zona from '../assets/clientes/zona93.png';
import Enesimal from '../assets/clientes/enesimal.webp';
import Delta  from '../assets/clientes/Delta.png';
import Gamma from '../assets/clientes/20 - grupogamma.png';
import Llerena from '../assets/clientes/LLERENA.png';

export const casosExito = [
  {
    id: 1,
    post: "NO",
    title: "AGROSPRAY",
    category: ["soporte","infraestructura"],
    sector: "agroindustria",
    logo: agrospray,
    description: "AgroSpray es una empresa que ofrece soluciones integrales para el agro, como coadyuvantes, servicios de pulverización, asesoría y capacitación",
    detailedDescription: "AgroSpray necesitaba una infraestructura robusta para manejar sus operaciones críticas en el sector agroindustrial. Implementamos una solución completa que incluye modernización de servidores, backup automatizado, monitoreo 24/7 y soporte dedicado. El proyecto abarcó la migración de sistemas legacy y la implementación de mejores prácticas de seguridad para soportar sus servicios de pulverización y asesoría técnica.",
    technologies: ["VMware vSphere", "Windows Server", "Veeam Backup", "Monitoring Tools", "Active Directory"],
    duration: "4 meses implementación + soporte ongoing",
    teamSize: "2 especialistas",
    services: ["Infraestructura", "Soporte Técnico", "Monitoreo", "Backup"],
    metrics: [
      "Soporte técnico e infraestructura on site para la operación.",
      "Gestión de servidores, redes, backup y monitoreo.",
      "Incorporación de perfiles de Desarrollo Full-Stack, RPA, Chatbot y Análisis Funcional.",
      "99% client satisfaction"
    ],
    results: [
      "99.8% de uptime garantizado",
      "Reducción 35% en costos operativos IT",
      "Backup automatizado diario",
      "Tiempo de respuesta <30 minutos",
      "Soporte especializado 4hrs mensuales"
    ],
    clientQuote: "SerTIC transformó nuestra infraestructura de manera excepcional. Su equipo técnico resolvió problemas que arrastrábamos hace años.",
    featured: false
  },
  {
    id: 2,
    post: "SI",
    title: "LETIS",
    subtitle: "Certificadora de Calidad Orgánica",
    category: ["soporte","infraestructura"],
    sector: "servicios",
    logo: letis,
    description: "LETIS es una empresa dedicada a la certificación y auditoría de normas internacionales de calidad y sustentabilidad en productos y procesos.",
    detailedDescription: "Mantenimiento de activos informáticos e implementación de mejoras. Virtualización de procesos y migración completa a cloud para sus colaboradores de Argentina y de todos los países donde operan.",
    technologies: ["Windows/Linux" , "Virtualización", "AWS Cloud", "Google Workspace", "GLPI", "Monitoreo con Zabbix", "Cifrado en tránsito y en reposo", "Control de accesos", "Buenas prácticas de backup"],
    duration: "Desde 2005.",
    teamSize: "4 especialistas",
    services: ["Soporte Remoto", "Gestión de Incidencias", "Mantenimiento Preventivo", "Consultoría"],
    metrics: [
      "Soporte y gestión integral de parque y servicios.",
      "Virtualización de servidores y aplicaciones.",
      "Migración de aplicaciones a AWS.",
      "Migración a Google Workspace.",
      "Políticas y operación de backups con pruebas de restauración.",
      "Monitoreo y hardening de entornos."
    ],
    results: [
      "Continuidad operativa y menor tiempo de caída.",
      "Trabajo remoto y colaboración habilitados.",
      "Menor riesgo de pérdida de datos.",
      "Escalabilidad sin interrupciones.",
      "Cumplimiento normativo internacional."
    ],
    clientQuote: "En certificación no podemos permitirnos fallas. El equipo de SerTIC mantiene nuestros sistemas funcionando sin interrupciones.",
    featured: true
  },
  {
    id: 3,
    post: "NO",
    title: "FULLCONTROL",
    category: "infraestructura",
    sector: "tecnologia",
    logo: fc,
    description: "FULL CONTROL ofrece sistemas de control de acceso, alarma, video y monitoreo para edificios, hogares, countries, empresas y construcción.",
    detailedDescription: "FULLCONTROL necesitaba una infraestructura crítica robusta para soportar sus sistemas de control de acceso y monitoreo. Diseñamos e implementamos una arquitectura de alta disponibilidad con failover automático, escalabilidad bajo demanda y optimización de costos para garantizar la operación continua de sus servicios de seguridad.",
    technologies: ["High Availability Systems", "Load Balancers", "Auto Scaling", "Monitoring Infrastructure", "Backup Systems"],
    duration: "3 meses implementación + 20hrs/mes administración",
    teamSize: "4 especialistas",
    services: ["Infraestructura Crítica", "Alta Disponibilidad", "Monitoreo 24/7", "Optimización"],
    metrics: [
      "Soporte técnico e infraestructura on site para la operación.",
      "Gestión de servidores, redes, backup y monitoreo.",
      "Incorporación de perfiles de Desarrollo Full-Stack, RPA, Chatbot y Análisis Funcional.",
      "99% client satisfaction"
    ],
    results: [
      "99.9% de uptime conseguido",
      "Implementación sin downtime",
      "30% reducción en costos de infraestructura",
      "Escalabilidad automática implementada",
      "Recovery time <15 minutos"
    ],
    clientQuote: "La implementación fue impecable. Ahora tenemos una infraestructura moderna, escalable y confiable para nuestros sistemas críticos.",
    featured: false
  },
  {
    id: 4,
    post: "SI",
    title: "UNIVERSIDAD DE BUENOS AIRES",
    subtitle: "Institución Educativa",
    category: "infraestructura",
    sector: "educacion",
    logo: unicaba,
    detailedDescription: "Administración de VMs internas y la infraestructura de la web institucional.",
    technologies: ['Linux', 'Nginx/Apache', 'PostgreSQL/MySQL', 'Control de accesos','Hardening'],
    duration: "Desde 2023.",
    teamSize: "3 especialistas",
    services: ["Modernización IT", "Infraestructura Educativa", "Soporte Técnico", "Capacitación"],
    metrics: [
      "Gestión integral de VMs y servicios de plataforma.",
      "Configuración de web server y base de datos.",
      "Implementación de esquema de despliegue vía SFTP.",
      "Securización y testing de aplicaciones.",
      "Monitoreo de servidores y alertas.",
      "Implementación de sistema de backups y pruebas de restauración."

    ],
    results: [
      "Mayor disponibilidad del sitio.",
      "Despliegues controlados y trazables.",
      "Reducción de incidentes y tiempos de resolución.",
      "Resguardo de datos con RPO/RTO definidos."
    ],
    clientQuote: "SerTIC entiende las necesidades específicas del sector educativo. Su solución se adaptó perfectamente a nuestro presupuesto y objetivos académicos.",
    featured: true
  },
  {
    id: 5,
    post: "NO",
    title: "SWIPRO",
    category: ["soporte","infraestructura"],
    sector: "salud",
    logo: swipro,
    description: "Más de 20 años de trayectoria en la comercialización de prótesis ortopédicas importadas de cadera y de rodilla de la más alta calidad.",
    detailedDescription: "SWIPRO, con más de 20 años en el sector de prótesis ortopédicas, requería soporte técnico confiable y especializado para mantener sus operaciones críticas sin interrupciones. Implementamos un modelo de soporte híbrido con gestión proactiva y reactiva de incidencias, adaptado a las necesidades específicas del sector salud.",
    technologies: ["Remote Monitoring", "Medical Software Support", "Proactive Maintenance", "Performance Monitoring"],
    duration: "18 meses de soporte continuo",
    teamSize: "3 especialistas dedicados",
    services: ["Soporte Remoto Especializado", "SLA Garantizado", "Monitoreo Proactivo", "Infraestructura"],
    metrics: [
      "Soporte técnico e infraestructura on site para la operación.",
      "Gestión de servidores, redes, backup y monitoreo.",
      "Incorporación de perfiles de Desarrollo Full-Stack, RPA, Chatbot y Análisis Funcional.",
      "99% client satisfaction"
    ],
    results: [
      "21 horas mensuales de servicio dedicado",
      "98% cumplimiento de SLA",
      "Tiempo de respuesta <1 hora",
      "95% satisfacción del cliente",
      "Reducción 60% en incidencias recurrentes"
    ],
    clientQuote: "El soporte de SerTIC es excepcional. Su enfoque proactivo previene problemas antes de que impacten nuestro negocio crítico en salud.",
    featured: false
  },
  {
    id: 6,
    post: "SI",
    title: "INTA",
    subtitle: "Agencia Oliveros y dependencias (Santa Fe)",
    category: ["soporte","infraestructura"],
    sector: "servicios",
    logo: inta,
    detailedDescription: "Organismo público descentralizado bajo la Secretaría de Agricultura. Soporte integral para Agencia Oliveros y sus sedes",
    technologies: ["Windows", "Microsoft 365", "Virtualización", "Switching y Wi-Fi administrado", "VPN","Políticas de respaldo", "Control de accesos" ,"Cumplimiento de buenas prácticas"],
    duration: "Desde 2004.",
    teamSize: "4 especialistas",
    services: ["Soporte Gubernamental", "Infraestructura", "Gestión de Datos", "Editorial Support"],
    metrics: [
      "Actualización de infraestructura y estandarización de plataformas.",
      "Hardening y securización de servidores, redes y puestos.",
      "Mejora y ampliación de conectividad entre sedes.",
      "Gestión de activos y soporte operativo.",
      "Monitoreo y backups."
    ],
    results: [
      "Reducción de incidentes y tiempos de resolución.",
      "Continuidad operativa y mayor disponibilidad de servicios.",
      "Productividad mejorada en procesos técnicos y administrativos.",
      "Visibilidad del parque y trazabilidad de cambios."
    ],
    clientQuote: "SerTIC comprende las particularidades del sector público. Su servicio garantiza la continuidad de nuestras investigaciones críticas.",
    featured: false
  },
  {
    id: 7,
    post: "SI",
    title: "POLO TECNOLÓGICO ROSARIO",
    subtitle: "Parque Científico Tecnológico",
    category: ["soporte","infraestructura"],
    sector: "tecnologia",
    logo: polobn,
    description: "El Polo Tecnológico Rosario es, junto con el Gobierno de la Provincia de Santa Fe y la Municipalidad de Rosario, el promotor principal de Zona i, un parque científico tecnológico.",
    detailedDescription: "Modernización de infraestructura y optimización de la gestión de servicios IT.",
    technologies: ['Servidores Cloud', 'Linux/Windows', 'Zabbix', 'Kaspersky Antivirus', 'Google workspace', 'Control de accesos', 'Hardening', 'Gestión de cambios', 'Revisión periódica de controles'],
    duration: "Desde 2019.",
    teamSize: "5 especialistas",
    services: ["Infraestructura Compartida", "Soporte Multi-tenant", "Networking", "Seguridad"],
    metrics: [
      "Migración y adopción de servicios en la nube.",
      "Monitoreo proactivo y alertamiento 24×7.",
      "Controles y políticas de seguridad alineados a ISO 27002.",
      "Normalización de backups con pruebas de restauración.",
      "Gestión de infraestructura de sitios web.",
      "Capacitaciones y colaboraciones con empresas del sector."
    ],
    results: [
      "Mayor disponibilidad y continuidad del servicio.",
      "Reducción de incidentes y MTTR.",
      "Plataforma más segura, escalable y eficiente para el ecosistema.",
      "Visibilidad en tiempo real del estado de la infraestructura y de los servicios web."
    ],
    clientQuote: "SerTIC es clave para mantener operativo nuestro ecosistema tecnológico. Su experiencia permite que las empresas se enfoquen en innovar.",
    featured: false
  },
  {
    id: 8,
    post: "SI",
    title: "KONECTA",
    subtitle: "Call center en Argentina",
    category: "staffing",
    sector: "servicios",
    logo: konecta,    
    detailedDescription: "Operación de call center en Rosario y expansión de capacidades digitales a nivel cono sur.",
    technologies: ["Windows/Linux", "AWS/GCP", "GitLab CI/CD", "RPA", "ChatBot", "Análisis Funcional"],
    duration: "Desde 2018.",
    teamSize: "15 profesionales",
    services: ["Staffing IT", "Talent Acquisition", "Technical Consulting", "Project Support"],
    metrics: [
      "Soporte técnico e infraestructura on site para la operación.",
      "Gestión de servidores, redes, backup y monitoreo.",
      "Incorporación de perfiles de Desarrollo Full-Stack, RPA, Chatbot y Análisis Funcional.",
      "99% client satisfaction"
    ],
    results: [
      "Continuidad operativa 24×7.",
      "Tiempos de resolución reducidos.",
      "Escalado de capacidades de desarrollo y automatización a demanda."
    ],
    clientQuote: "SerTIC nos proporcionó exactamente los perfiles que necesitábamos para nuestros proyectos de experiencias híbridas. Su proceso de selección es muy efectivo.",
    featured: true
  },  
  {
    id: 9,
    post: "NO",
    title: "NOCAUT CREATIVE",
    category: "infraestructura",
    sector: "tecnologia",
    logo: nocaut,
    description: "Producimos y lideramos proyectos de comunicación audiovisual. Trabajamos en todas las etapas del proceso creativo con más de veinte años junto a clientes globales y locales.",
    detailedDescription: "Nocaut Creative necesitaba una infraestructura robusta para manejar proyectos audiovisuales de gran envergadura. Implementamos soluciones de almacenamiento masivo, render farms y workflows optimizados para producción audiovisual, garantizando tiempos de entrega sin comprometer la calidad creativa.",
    technologies: ["High-Performance Storage", "Render Farms", "Media Workflows", "Backup Systems", "Collaboration Platforms"],
    duration: "6 meses implementación + administración continua",
    teamSize: "3 especialistas media",
    services: ["Infraestructura Creativa", "Storage Solutions", "Render Optimization", "Workflow Design"],
    metrics: [
      "Soporte técnico e infraestructura on site para la operación.",
      "Gestión de servidores, redes, backup y monitoreo.",
      "Incorporación de perfiles de Desarrollo Full-Stack, RPA, Chatbot y Análisis Funcional.",
      "99% client satisfaction"
    ],
    results: [
      "8 horas mensuales de administración",
      "100TB+ de almacenamiento optimizado",
      "60% reducción en tiempos de render",
      "200+ proyectos anuales procesados",
      "Workflow creativo sin interrupciones"
    ],
    clientQuote: "SerTIC diseñó la infraestructura perfecta para nuestro flujo creativo. Ahora podemos enfocarnos 100% en la producción audiovisual.",
    featured: false
  },
  {
    id: 11,
    post: "NO",
    title: "BARSANTE",
    category: ["soporte","infraestructura"],
    sector: "servicios",
    logo: barsante,
    description: "La calidad y la artesanía de los muebles de BARSANTE® son simplemente incomparables. Cada pieza de mobiliario es una obra maestra de diseño y funcionalidad, fabricada con los más altos estándares.",
    detailedDescription: "BARSANTE, reconocida por su excelencia en manufactura de muebles artesanales, necesitaba modernizar sus sistemas de gestión y producción. Implementamos soluciones de soporte técnico especializado y mejoras de infraestructura para optimizar sus procesos de diseño y fabricación de alta gama.",
    technologies: ["ERP Manufacturing", "Design Software", "Production Management", "Quality Control Systems", "Backup Solutions"],
    duration: "12+ meses de soporte continuo",
    teamSize: "2 especialistas manufactura",
    services: ["Soporte Especializado", "Sistemas de Producción", "Infraestructura", "Gestión de Calidad"],
    metrics: [
      "Soporte técnico e infraestructura on site para la operación.",
      "Gestión de servidores, redes, backup y monitoreo.",
      "Incorporación de perfiles de Desarrollo Full-Stack, RPA, Chatbot y Análisis Funcional.",
      "99% client satisfaction"
    ],
    results: [
      "12 horas mensuales de servicio especializado",
      "25% mejora en workflows de producción",
      "Zero downtime en procesos críticos",
      "Backup seguro de todos los diseños",
      "Integración sistemas de calidad"
    ],
    clientQuote: "SerTIC entiende perfectamente las necesidades de manufactura artesanal. Su soporte mantiene nuestros sistemas de alta calidad funcionando sin fallas.",
    featured: false
  },
  {
    id: 12,
    post: "NO",
    title: "FARO ASOCIACIÓN MUTUAL",
    category: ["soporte","infraestructura"],
    sector: "servicios",
    logo: faro,
    description: "Descubre Mutual Faro, la mutual en Rosario que ofrece préstamos accesibles, loteos y convenios. Tu decisión inteligente para un futuro seguro e innovador.",
    detailedDescription: "Mutual Faro requería un soporte técnico confiable para sus sistemas financieros críticos y plataformas de gestión de socios. Implementamos soluciones especializadas para el sector mutual, garantizando seguridad, disponibilidad y cumplimiento normativo en todas sus operaciones financieras.",
    technologies: ["Financial Systems", "Security Protocols", "Regulatory Compliance", "Member Management", "Backup & Recovery"],
    duration: "2+ años de soporte continuo",
    teamSize: "3 especialistas sector financiero",
    services: ["Soporte Financiero", "Compliance", "Infraestructura Segura", "Gestión de Socios"],
    metrics: [
      "Soporte técnico e infraestructura on site para la operación.",
      "Gestión de servidores, redes, backup y monitoreo.",
      "Incorporación de perfiles de Desarrollo Full-Stack, RPA, Chatbot y Análisis Funcional.",
      "99% client satisfaction"
    ],
    results: [
      "12 horas mensuales de servicio especializado",
      "100% cumplimiento normativo financiero",
      "Zero brechas de seguridad reportadas",
      "99.8% disponibilidad sistemas críticos",
      "Gestión eficiente de 5000+ socios"
    ],
    clientQuote: "SerTIC nos brinda la tranquilidad que necesitamos en el sector financiero. Su expertise en compliance es fundamental para nuestras operaciones.",
    featured: false
  },
  {
    id: 13,
    post: "NO",
    title: "3dF DESARROLLOS",
    category: ["soporte","infraestructura"],
    sector: "servicios",
    logo: Tdf,
    description: "Somos un equipo de jóvenes profesionales enfocados en el diseño, el desarrollo, la dirección y ejecución de obras de arquitectura en múltiples escalas y tipologías.",
    detailedDescription: "3dF Desarrollos, especialistas en arquitectura y desarrollo de obras, necesitaba soporte técnico para sus herramientas de diseño arquitectónico y gestión de proyectos. Implementamos soluciones que garantizan la disponibilidad de software CAD, gestión de archivos de gran tamaño y colaboración con equipos multidisciplinarios.",
    technologies: ["AutoCAD", "BIM Software", "Project Management", "File Servers", "Cloud Collaboration"],
    duration: "14+ meses de soporte continuo",
    teamSize: "2 especialistas arquitectura",
    services: ["Soporte CAD/BIM", "Gestión de Proyectos", "Infraestructura", "Colaboración"],
    metrics: [
      "Soporte técnico e infraestructura on site para la operación.",
      "Gestión de servidores, redes, backup y monitoreo.",
      "Incorporación de perfiles de Desarrollo Full-Stack, RPA, Chatbot y Análisis Funcional.",
      "99% client satisfaction"
    ],
    results: [
      "14 horas mensuales de servicio especializado",
      "50+ proyectos arquitectónicos soportados",
      "99.5% disponibilidad herramientas críticas",
      "Colaboración fluida multidisciplinaria",
      "Backup seguro de todos los proyectos"
    ],
    clientQuote: "SerTIC mantiene nuestras herramientas de diseño funcionando perfectamente. Su soporte especializado es clave para entregar proyectos de calidad.",
    featured: false
  },
  {
    id: 14,
    post: "NO",
    title: "ZONA93SA",
    category: ["soporte","infraestructura"],
    sector: "servicios",
    logo: zona,
    description: "En Zona 93 S.A., creemos que comprar calzado no debería ser una tarea complicada ni costosa. Por eso, nos especializamos en ofrecer zapatillas de calidad internacional a precios increíbles.",
    detailedDescription: "Zona93SA necesitaba soporte técnico especializado para su plataforma e-commerce y sistemas de gestión de inventario. Implementamos soluciones que garantizan la disponibilidad de su tienda online, gestión eficiente de stock y procesos de venta optimizados para el sector retail de calzado.",
    technologies: ["E-commerce Platforms", "Inventory Management", "POS Systems", "Payment Gateways", "CRM Integration"],
    duration: "16+ meses de soporte continuo",
    teamSize: "2 especialistas retail",
    services: ["Soporte E-commerce", "Gestión de Inventario", "Infraestructura", "Sistemas POS"],
    metrics: [
      "Soporte técnico e infraestructura on site para la operación.",
      "Gestión de servidores, redes, backup y monitoreo.",
      "Incorporación de perfiles de Desarrollo Full-Stack, RPA, Chatbot y Análisis Funcional.",
      "99% client satisfaction"
    ],
    results: [
      "16 horas mensuales de servicio especializado",
      "1000+ pedidos mensuales procesados",
      "99.7% uptime de tienda online",
      "Sincronización en tiempo real de inventario",
      "Integración completa sistemas retail"
    ],
    clientQuote: "SerTIC mantiene nuestra tienda online funcionando sin problemas. Su soporte especializado en e-commerce es fundamental para nuestras ventas.",
    featured: false
  },
  {
    id: 15,
    post: "SI",
    title: "CIMOMET S.A.",
    subtitle: "Sector Industrial",
    category: ["soporte","infraestructura"],
    sector: "servicios",
    logo: cimomet,
    detailedDescription: "Necesidad de fortalecer seguridad y disponibilidad del entorno tecnológico.",
    technologies: ['Windows/Linux', 'Virtualización', 'ESET PROTECT', 'Políticas de acceso', 'Cifrado en tránsito y en reposo', 'GLPI', 'Zabbix', 'Gestión de cambios', 'Revisión periódica de controles'],
    duration: "Relación desde 2024.",
    teamSize: "4 especialistas de diferentes roles",
    services: ["Infraestructura Industrial", "Sistemas SCADA", "Redes Críticas", "Seguridad"],
    metrics: [
      "Arquitectura IT optimizada y segmentación de red.",
      "Hardening de servidores, endpoints y servicios críticos.",
      "Backups automatizados con pruebas de restauración.",
      "Monitoreo centralizado y alertas.",
      "Documentación operativa y procedimientos.",
      "Servidores para diseño industrial"
    ],
    results: [
      "Menor superficie de ataque y riesgos controlados.",
      "Mayor disponibilidad y continuidad de sistemas.",
      "MTTR reducido y visibilidad en tiempo real.",
      "Cumplimiento de buenas prácticas del sector."
    ],
    clientQuote: "Con 60 años en la industria, sabemos reconocer la calidad. SerTIC está modernizando nuestra infraestructura con la seriedad que requiere nuestro legado familiar.",
    featured: false
  },
  {
    id: 16,
    title: "DELTA ASCENSORES",
    logo: Delta
  },
  {
    id: 17,
    title: "GRUPO GAMMA",
    logo: Gamma
  },
  {
    id: 18,
    title: "ENESIMAL",
    logo: Enesimal
  },
  {
    id: 19,
    title: "LLERENA & ASOCIADOS",
    logo: Llerena
  }
];


export const casosPublicados = casosExito.filter(caso => caso.post === "SI");

export const getFeaturedCases = () => casosPublicados.filter(caso => caso.featured);

export const getCasesByCategory = (category) => {
  if (category === "todos") return casosPublicados;
  return casosPublicados.filter((caso) =>
    Array.isArray(caso.category)
      ? caso.category.includes(category)
      : caso.category === category
  );
};


export const getCasesBySector = (sector) => {
  if (sector === 'todos') return casosPublicados;
  return casosPublicados.filter(caso => caso.sector === sector);
};

export const getCaseById = (id) => casosPublicados.find(caso => caso.id === parseInt(id));

// Estadísticas generales
export const getStats = () => {
  return {
    totalCases: casosPublicados.length,
    totalClients: casosPublicados.length,
    infraHours: casosPublicados.reduce((sum, caso) => {
      const infraMatch = caso.metrics.hoursPerMonth?.match(/(\d+)hrs?\s+infraestructura/);
      return sum + (infraMatch ? parseInt(infraMatch[1]) : 0);
    }, 0),
    supportHours: casosPublicados.reduce((sum, caso) => {
      const supportMatch = caso.metrics.hoursPerMonth?.match(/(\d+)hrs?\s+soporte/);
      return sum + (supportMatch ? parseInt(supportMatch[1]) : 0);
    }, 0),
    staffingProjects: casosPublicados.filter(caso => caso.category === 'staffing').length,
    sectors: [...new Set(casosPublicados.map(caso => caso.sector))].length,
    averageUptime: "99.7%"
  };
};