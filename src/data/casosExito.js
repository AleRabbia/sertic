// src/data/casosExito.js

export const casosExito = [
  {
    id: 1,
    title: "AGROSPRAY",
    category: ["soporte","infraestructura"],
    sector: "agroindustria",
    logo: "https://agrospray.com.ar/wp-content/uploads/2021/11/logo-agrospray-w.png",
    description: "AgroSpray es una empresa que ofrece soluciones integrales para el agro, como coadyuvantes, servicios de pulverización, asesoría y capacitación",
    detailedDescription: "AgroSpray necesitaba una infraestructura robusta para manejar sus operaciones críticas en el sector agroindustrial. Implementamos una solución completa que incluye modernización de servidores, backup automatizado, monitoreo 24/7 y soporte dedicado. El proyecto abarcó la migración de sistemas legacy y la implementación de mejores prácticas de seguridad para soportar sus servicios de pulverización y asesoría técnica.",
    technologies: ["VMware vSphere", "Windows Server", "Veeam Backup", "Monitoring Tools", "Active Directory"],
    duration: "4 meses implementación + soporte ongoing",
    teamSize: "2 especialistas",
    services: ["Infraestructura", "Soporte Técnico", "Monitoreo", "Backup"],
    metrics: {
      uptime: "99.8%",
      responseTime: "<30min",
      costReduction: "35%",
      hoursPerMonth: "6hrs infraestructura + 4hrs soporte"
    },
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
    title: "LETIS",
    category: ["soporte","infraestructura"],
    sector: "servicios",
    logo: "https://letis.org/wp-content/uploads/2020/11/logo-header.png",
    description: "LETIS es una empresa dedicada a la certificación y auditoría de normas internacionales de calidad y sustentabilidad en productos y procesos.",
    detailedDescription: "LETIS requería soporte técnico especializado para sus sistemas críticos de certificación y auditoría. Proporcionamos un equipo dedicado para soporte remoto, gestión de incidencias y mantenimiento preventivo. La criticidad del sector de certificación demandó protocolos especiales y tiempos de respuesta ultra-rápidos para mantener la continuidad operativa.",
    technologies: ["Remote Support Tools", "ITIL Framework", "Incident Management", "System Monitoring", "Security Protocols"],
    duration: "2+ años de soporte continuo",
    teamSize: "3 especialistas en turnos",
    services: ["Soporte Remoto", "Gestión de Incidencias", "Mantenimiento Preventivo", "Consultoría"],
    metrics: {
      hoursPerMonth: "40hrs soporte + 12hrs infraestructura", 
      responseTime: "<2 horas",
      resolutionTime: "85% <4 horas",
      availability: "24/7/365"
    },
    results: [
      "52 horas mensuales de servicio dedicado",
      "Tiempo de respuesta <2 horas",
      "85% de incidencias resueltas <4hrs",
      "0 incidencias críticas sin resolver",
      "Disponibilidad 24/7/365"
    ],
    clientQuote: "En certificación no podemos permitirnos fallas. El equipo de SerTIC mantiene nuestros sistemas funcionando sin interrupciones.",
    featured: true
  },
  {
    id: 3,
    title: "FULLCONTROL",
    category: "infraestructura",
    sector: "tecnologia",
    logo: "https://www.fullcontrol.com.ar/images/logo.png",
    description: "FULL CONTROL ofrece sistemas de control de acceso, alarma, video y monitoreo para edificios, hogares, countries, empresas y construcción.",
    detailedDescription: "FULLCONTROL necesitaba una infraestructura crítica robusta para soportar sus sistemas de control de acceso y monitoreo. Diseñamos e implementamos una arquitectura de alta disponibilidad con failover automático, escalabilidad bajo demanda y optimización de costos para garantizar la operación continua de sus servicios de seguridad.",
    technologies: ["High Availability Systems", "Load Balancers", "Auto Scaling", "Monitoring Infrastructure", "Backup Systems"],
    duration: "3 meses implementación + 20hrs/mes administración",
    teamSize: "4 especialistas",
    services: ["Infraestructura Crítica", "Alta Disponibilidad", "Monitoreo 24/7", "Optimización"],
    metrics: {
      uptime: "99.9%",
      costReduction: "30%", 
      scalability: "Auto-scaling",
      hoursPerMonth: "20hrs infraestructura"
    },
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
    title: "UNIVERSIDAD DE LA CIUDAD",
    category: "infraestructura",
    sector: "educacion",
    logo: "https://udelaciudad.edu.ar/wp-content/uploads/2025/01/Logos-3-png_Logo-secundario-1-768x372.png",
    description: "Trabajamos para ampliar las oportunidades para el desarrollo de las personas, para contribuir en la generación y distribución social del conocimiento.",
    detailedDescription: "La Universidad de la Ciudad requería modernizar su infraestructura IT para soportar el crecimiento estudiantil y las nuevas modalidades educativas híbridas. Implementamos soluciones de virtualización, backup y soporte técnico especializado para entornos educativos, garantizando la continuidad académica.",
    technologies: ["Hyper-V", "Office 365 Education", "Backup Solutions", "Network Infrastructure", "Classroom Technology"],
    duration: "4 meses implementación + 15hrs/mes administración",
    teamSize: "3 especialistas educación",
    services: ["Modernización IT", "Infraestructura Educativa", "Soporte Técnico", "Capacitación"],
    metrics: {
      students: "5000+ estudiantes beneficiados",
      backup: "Backup diario automatizado",
      recovery: "RTO <4 horas",
      hoursPerMonth: "15hrs infraestructura"
    },
    results: [
      "5000+ estudiantes con mejor experiencia IT",
      "Backup automatizado diario",
      "RTO menor a 4 horas",
      "Cumplimiento normativo educativo",
      "15 horas mensuales de administración dedicada"
    ],
    clientQuote: "SerTIC entiende las necesidades específicas del sector educativo. Su solución se adaptó perfectamente a nuestro presupuesto y objetivos académicos.",
    featured: true
  },
  {
    id: 5,
    title: "SWIPRO",
    category: ["soporte","infraestructura"],
    sector: "salud",
    logo: "https://swipro.com.ar/wp-content/uploads/2022/05/Logo-Swipro-para-fondo-claro.png",
    description: "Más de 20 años de trayectoria en la comercialización de prótesis ortopédicas importadas de cadera y de rodilla de la más alta calidad.",
    detailedDescription: "SWIPRO, con más de 20 años en el sector de prótesis ortopédicas, requería soporte técnico confiable y especializado para mantener sus operaciones críticas sin interrupciones. Implementamos un modelo de soporte híbrido con gestión proactiva y reactiva de incidencias, adaptado a las necesidades específicas del sector salud.",
    technologies: ["Remote Monitoring", "Medical Software Support", "Proactive Maintenance", "Performance Monitoring"],
    duration: "18 meses de soporte continuo",
    teamSize: "3 especialistas dedicados",
    services: ["Soporte Remoto Especializado", "SLA Garantizado", "Monitoreo Proactivo", "Infraestructura"],
    metrics: {
      hoursPerMonth: "15hrs soporte + 6hrs infraestructura",
      slaCompliance: "98%",
      responseTime: "<1 hora",
      satisfaction: "95%"
    },
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
    title: "INTA",
    category: ["soporte","infraestructura"],
    sector: "servicios",
    logo: "https://www.argentina.gob.ar/sites/default/files/styles/isologo/public/imagenEncabezado/inta_isologo_izqcalado_150px.png?itok=WGLKHLdi",
    description: "Ediciones INTA Editorial especializada en publicaciones de investigación, desarrollo e innovación tecnológica aplicada al sector del agro",
    detailedDescription: "El Instituto Nacional de Tecnología Agropecuaria (INTA) requería soporte técnico especializado para mantener sus sistemas de investigación y publicación editorial. Implementamos un servicio integral de soporte con infraestructura dedicada para garantizar la continuidad de sus operaciones críticas en investigación agropecuaria.",
    technologies: ["Government IT Standards", "Research Systems", "Editorial Platforms", "Data Management", "Backup Solutions"],
    duration: "2+ años de soporte continuo",
    teamSize: "4 especialistas gobierno",
    services: ["Soporte Gubernamental", "Infraestructura", "Gestión de Datos", "Editorial Support"],
    metrics: {
      hoursPerMonth: "14hrs soporte + 4hrs infraestructura",
      responseTime: "<4 horas",
      compliance: "100% normativa gubernamental",
      availability: "99.5%"
    },
    results: [
      "18 horas mensuales de servicio especializado",
      "100% cumplimiento normativa gubernamental",
      "Tiempo de respuesta <4 horas",
      "99.5% disponibilidad de sistemas",
      "Soporte a investigación agropecuaria nacional"
    ],
    clientQuote: "SerTIC comprende las particularidades del sector público. Su servicio garantiza la continuidad de nuestras investigaciones críticas.",
    featured: false
  },
  {
    id: 7,
    title: "KONECTA",
    category: "staffing",
    sector: "servicios",
    logo: "https://talentokonecta.grupokonecta.com.ar/wp-content/uploads/2025/02/Konecta_Logo_RGB_Blue-2048x667.png",
    description: "Konecta crea experiencias híbridas para generar nuevo valor para ti, tus clientes y tus empleados. En salas de reuniones y en espacios vitales, convertimos conexiones en momentos significativos.",
    detailedDescription: "Konecta necesitaba ampliar rápidamente su equipo IT para varios proyectos críticos de transformación digital. Proporcionamos un servicio integral de staffing con profesionales pre-calificados en diferentes especialidades tecnológicas, adaptándonos a los requerimientos específicos de cada proyecto y las necesidades de experiencias híbridas.",
    technologies: ["Staff Augmentation", "Technical Assessment", "Project Management", "Digital Transformation", "Hybrid Work Solutions"],
    duration: "12 meses con opción de extensión",
    teamSize: "15 profesionales en diferentes roles",
    services: ["Staffing IT", "Talent Acquisition", "Technical Consulting", "Project Support"],
    metrics: {
      professionals: "15 profesionales asignados",
      projects: "5 proyectos completados",
      retention: "92% retention rate",
      satisfaction: "97% client satisfaction"
    },
    results: [
      "15 profesionales IT asignados exitosamente",
      "5 proyectos de transformación completados",
      "92% de retención de talento",
      "97% satisfacción del cliente",
      "Reducción 45% en tiempo de búsqueda"
    ],
    clientQuote: "SerTIC nos proporcionó exactamente los perfiles que necesitábamos para nuestros proyectos de experiencias híbridas. Su proceso de selección es muy efectivo.",
    featured: true
  },
  {
    id: 8,
    title: "POLO TECNOLÓGICO ROSARIO",
    category: ["soporte","infraestructura"],
    sector: "tecnologia",
    logo: "https://polotecnologico.net/wp-content/uploads/2021/09/Logo-Polo-nuevo-2021-01-removebg-preview.png",
    description: "El Polo Tecnológico Rosario es, junto con el Gobierno de la Provincia de Santa Fe y la Municipalidad de Rosario, el promotor principal de Zona i, un parque científico tecnológico.",
    detailedDescription: "El Polo Tecnológico Rosario requería servicios especializados de infraestructura y soporte para mantener operativo el ecosistema tecnológico de Zona i. Implementamos soluciones escalables que soportan múltiples empresas y startups, garantizando conectividad, seguridad y disponibilidad para todo el parque tecnológico.",
    technologies: ["Enterprise Networks", "Cloud Infrastructure", "Security Systems", "Collaboration Tools", "IoT Platforms"],
    duration: "2+ años de servicio continuo",
    teamSize: "3 especialistas ecosistema tech",
    services: ["Infraestructura Compartida", "Soporte Multi-tenant", "Networking", "Seguridad"],
    metrics: {
      hoursPerMonth: "10hrs soporte + 6hrs infraestructura",
      companies: "50+ empresas beneficiadas",
      uptime: "99.7%",
      response: "<2 horas"
    },
    results: [
      "16 horas mensuales de servicio especializado",
      "50+ empresas del ecosistema atendidas",
      "99.7% uptime del parque tecnológico",
      "Tiempo de respuesta <2 horas",
      "Infraestructura escalable para startups"
    ],
    clientQuote: "SerTIC es clave para mantener operativo nuestro ecosistema tecnológico. Su experiencia permite que las empresas se enfoquen en innovar.",
    featured: false
  },
  {
    id: 9,
    title: "NOCAUT CREATIVE",
    category: "infraestructura",
    sector: "tecnologia",
    logo: "https://nocaut.tv/images/logo-white.png",
    description: "Producimos y lideramos proyectos de comunicación audiovisual. Trabajamos en todas las etapas del proceso creativo con más de veinte años junto a clientes globales y locales.",
    detailedDescription: "Nocaut Creative necesitaba una infraestructura robusta para manejar proyectos audiovisuales de gran envergadura. Implementamos soluciones de almacenamiento masivo, render farms y workflows optimizados para producción audiovisual, garantizando tiempos de entrega sin comprometer la calidad creativa.",
    technologies: ["High-Performance Storage", "Render Farms", "Media Workflows", "Backup Systems", "Collaboration Platforms"],
    duration: "6 meses implementación + administración continua",
    teamSize: "3 especialistas media",
    services: ["Infraestructura Creativa", "Storage Solutions", "Render Optimization", "Workflow Design"],
    metrics: {
      hoursPerMonth: "8hrs infraestructura",
      storage: "100TB+ capacidad",
      renderTime: "60% reducción",
      projects: "200+ proyectos anuales"
    },
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
    id: 10,
    title: "GAMATEC",
    category: ["soporte","infraestructura"],
    sector: "servicios",
    logo: "https://www.gamatecoficinas.com/web/image/website/1/logo/Gamatec?unique=e3885d6",
    description: "En Gamatec diseñamos oficinas para un mundo centrado en las personas. Construimos y equipamos espacios de trabajo adaptados a las nuevas dinámicas corporativas.",
    detailedDescription: "GAMATEC, especialista en diseño de oficinas, requería soporte técnico especializado para sus herramientas de diseño y sistemas de gestión de proyectos. Implementamos soluciones que garantizan la disponibilidad de software CAD, gestión de archivos pesados y colaboración remota con clientes.",
    technologies: ["CAD Software Support", "File Management", "Cloud Collaboration", "Design Workflows", "Remote Support"],
    duration: "18+ meses de soporte continuo",
    teamSize: "2 especialistas diseño",
    services: ["Soporte CAD", "Gestión de Archivos", "Colaboración Remota", "Infraestructura Creativa"],
    metrics: {
      hoursPerMonth: "8hrs soporte + 4hrs infraestructura",
      projects: "100+ proyectos anuales",
      availability: "99.5% software crítico",
      collaboration: "Equipos remotos integrados"
    },
    results: [
      "12 horas mensuales de servicio especializado",
      "100+ proyectos de diseño soportados",
      "99.5% disponibilidad software crítico",
      "Colaboración fluida con equipos remotos",
      "Optimización workflows de diseño"
    ],
    clientQuote: "SerTIC mantiene nuestras herramientas de diseño funcionando perfectamente. Su soporte especializado es invaluable para nuestro trabajo creativo.",
    featured: false
  },
  {
    id: 11,
    title: "BARSANTE",
    category: ["soporte","infraestructura"],
    sector: "servicios",
    logo: "https://barsante.com.ar/wp-content/uploads/2023/07/LOGO-BARSANTE-blanco.svg",
    description: "La calidad y la artesanía de los muebles de BARSANTE® son simplemente incomparables. Cada pieza de mobiliario es una obra maestra de diseño y funcionalidad, fabricada con los más altos estándares.",
    detailedDescription: "BARSANTE, reconocida por su excelencia en manufactura de muebles artesanales, necesitaba modernizar sus sistemas de gestión y producción. Implementamos soluciones de soporte técnico especializado y mejoras de infraestructura para optimizar sus procesos de diseño y fabricación de alta gama.",
    technologies: ["ERP Manufacturing", "Design Software", "Production Management", "Quality Control Systems", "Backup Solutions"],
    duration: "12+ meses de soporte continuo",
    teamSize: "2 especialistas manufactura",
    services: ["Soporte Especializado", "Sistemas de Producción", "Infraestructura", "Gestión de Calidad"],
    metrics: {
      hoursPerMonth: "8hrs soporte + 4hrs infraestructura",
      productivity: "25% mejora en workflows",
      quality: "Zero downtime en producción",
      backup: "Backup diario de diseños"
    },
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
    title: "FARO ASOCIACIÓN MUTUAL",
    category: ["soporte","infraestructura"],
    sector: "servicios",
    logo: "https://ugc.production.linktr.ee/c46eee90-429c-489b-bc16-6825e226760f_Imagen-de-WhatsApp-2025-07-12-a-las-19.19.25-efd6b06a.jpeg?io=true&size=avatar-v3_0",
    description: "Descubre Mutual Faro, la mutual en Rosario que ofrece préstamos accesibles, loteos y convenios. Tu decisión inteligente para un futuro seguro e innovador.",
    detailedDescription: "Mutual Faro requería un soporte técnico confiable para sus sistemas financieros críticos y plataformas de gestión de socios. Implementamos soluciones especializadas para el sector mutual, garantizando seguridad, disponibilidad y cumplimiento normativo en todas sus operaciones financieras.",
    technologies: ["Financial Systems", "Security Protocols", "Regulatory Compliance", "Member Management", "Backup & Recovery"],
    duration: "2+ años de soporte continuo",
    teamSize: "3 especialistas sector financiero",
    services: ["Soporte Financiero", "Compliance", "Infraestructura Segura", "Gestión de Socios"],
    metrics: {
      hoursPerMonth: "8hrs soporte + 4hrs infraestructura",
      compliance: "100% normativo financiero",
      security: "Zero brechas de seguridad",
      availability: "99.8% sistemas críticos"
    },
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
    title: "3dF DESARROLLOS",
    category: ["soporte","infraestructura"],
    sector: "servicios",
    logo: "https://3dfdesarrollos.com/wp-content/uploads/2023/05/3df-logo-blanco.png",
    description: "Somos un equipo de jóvenes profesionales enfocados en el diseño, el desarrollo, la dirección y ejecución de obras de arquitectura en múltiples escalas y tipologías.",
    detailedDescription: "3dF Desarrollos, especialistas en arquitectura y desarrollo de obras, necesitaba soporte técnico para sus herramientas de diseño arquitectónico y gestión de proyectos. Implementamos soluciones que garantizan la disponibilidad de software CAD, gestión de archivos de gran tamaño y colaboración con equipos multidisciplinarios.",
    technologies: ["AutoCAD", "BIM Software", "Project Management", "File Servers", "Cloud Collaboration"],
    duration: "14+ meses de soporte continuo",
    teamSize: "2 especialistas arquitectura",
    services: ["Soporte CAD/BIM", "Gestión de Proyectos", "Infraestructura", "Colaboración"],
    metrics: {
      hoursPerMonth: "12hrs soporte + 2hrs infraestructura",
      projects: "50+ proyectos arquitectónicos",
      availability: "99.5% herramientas críticas",
      collaboration: "Equipos multidisciplinarios"
    },
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
    title: "ZONA93SA",
    category: ["soporte","infraestructura"],
    sector: "servicios",
    logo: "https://acdn-us.mitiendanube.com/stores/005/345/958/themes/common/logo-630362162-1758211560-547c0dc2b20347685e3d791f1dce798a1758211560-320-0.webp",
    description: "En Zona 93 S.A., creemos que comprar calzado no debería ser una tarea complicada ni costosa. Por eso, nos especializamos en ofrecer zapatillas de calidad internacional a precios increíbles.",
    detailedDescription: "Zona93SA necesitaba soporte técnico especializado para su plataforma e-commerce y sistemas de gestión de inventario. Implementamos soluciones que garantizan la disponibilidad de su tienda online, gestión eficiente de stock y procesos de venta optimizados para el sector retail de calzado.",
    technologies: ["E-commerce Platforms", "Inventory Management", "POS Systems", "Payment Gateways", "CRM Integration"],
    duration: "16+ meses de soporte continuo",
    teamSize: "2 especialistas retail",
    services: ["Soporte E-commerce", "Gestión de Inventario", "Infraestructura", "Sistemas POS"],
    metrics: {
      hoursPerMonth: "12hrs soporte + 4hrs infraestructura",
      orders: "1000+ pedidos mensuales",
      uptime: "99.7% tienda online",
      inventory: "Sincronización en tiempo real"
    },
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
    title: "CIMOMET S.A.",
    category: ["soporte","infraestructura"],
    sector: "servicios",
    logo: "https://www.cimomet.ar/images/logoweb.png",
    description: "CIMOMET S.A. es una empresa que transita ya por su 4ta generación. Con más de 60 años de trayectoria en fabricación de Acero, Caucho, Plásticos, Cemento, y generación de energía.",
    detailedDescription: "CIMOMET S.A., con más de 60 años en el sector industrial, requería modernización de su infraestructura IT para soportar procesos industriales críticos. Implementamos soluciones robustas de infraestructura que garantizan la continuidad operativa en sus múltiples líneas de producción y generación de energía.",
    technologies: ["Industrial Networks", "SCADA Systems", "Enterprise Servers", "Backup Systems", "Security Infrastructure"],
    duration: "Proyecto en desarrollo",
    teamSize: "4 especialistas sector industrial",
    services: ["Infraestructura Industrial", "Sistemas SCADA", "Redes Críticas", "Seguridad"],
    metrics: {
      hoursPerMonth: "Infraestructura en implementación",
      experience: "60+ años trayectoria cliente",
      sectors: "Múltiples líneas industriales",
      generation: "4ta generación familiar"
    },
    results: [
      "Modernización infraestructura industrial",
      "Soporte a 60+ años de experiencia",
      "Integración múltiples líneas productivas",
      "Continuidad operativa garantizada",
      "Preparación para Industria 4.0"
    ],
    clientQuote: "Con 60 años en la industria, sabemos reconocer la calidad. SerTIC está modernizando nuestra infraestructura con la seriedad que requiere nuestro legado familiar.",
    featured: false
  },
  // CASOS EVENTUALES - TRABAJOS PUNTUALES
  {/*
  {
    id: 16,
    title: "PROYECTO MIGRACIÓN CLOUD",
    category: "infraestructura",
    sector: "eventual",
    logo: null,
    description: "Migración completa de infraestructura local a AWS para empresa de servicios logísticos con operaciones 24/7.",
    detailedDescription: "Cliente eventual del sector logístico requería migración urgente de su infraestructura on-premise a la nube debido a crecimiento exponencial. Ejecutamos una migración completa en 3 meses sin downtime, incluyendo bases de datos críticas, aplicaciones web y sistemas de tracking en tiempo real.",
    technologies: ["AWS Migration", "Database Migration", "Load Balancers", "Auto Scaling", "Disaster Recovery"],
    duration: "3 meses - proyecto finalizado",
    teamSize: "5 especialistas cloud",
    services: ["Cloud Migration", "Architecture Design", "Performance Optimization", "Training"],
    metrics: {
      timeline: "3 meses sin downtime",
      costSaving: "40% reducción costos",
      performance: "300% mejora rendimiento",
      scalability: "Auto-scaling implementado"
    },
    results: [
      "Migración exitosa sin downtime",
      "40% reducción en costos operativos",
      "300% mejora en rendimiento",
      "Auto-scaling para picos de demanda",
      "Disaster recovery implementado"
    ],
    clientQuote: "La migración fue perfecta. SerTIC logró lo que creíamos imposible: migrar sin parar las operaciones.",
    featured: true
  },
  {
    id: 17,
    title: "RECUPERACIÓN DE DATOS CRÍTICOS",
    category: "soporte",
    sector: "eventual",
    logo: null,
    description: "Recuperación urgente de base de datos crítica para estudio contable con 500+ clientes tras falla de hardware.",
    detailedDescription: "Estudio contable sufrió falla catastrófica de su servidor principal en plena época de vencimientos fiscales. Ejecutamos recuperación de datos de emergencia en 48 horas, recuperando 100% de la información y implementando nuevo sistema de backup automatizado para prevenir futuras pérdidas.",
    technologies: ["Data Recovery", "Database Restoration", "Emergency Response", "Backup Automation", "RAID Recovery"],
    duration: "48 horas emergencia + 1 semana setup",
    teamSize: "3 especialistas recovery",
    services: ["Emergency Data Recovery", "Backup Implementation", "System Restoration", "Prevention"],
    metrics: {
      recovery: "100% datos recuperados",
      timeline: "48 horas emergencia",
      clients: "500+ clientes impactados",
      prevention: "Backup automatizado"
    },
    results: [
      "100% de datos críticos recuperados",
      "48 horas tiempo total de recovery",
      "500+ clientes sin pérdida información",
      "Sistema backup automatizado implementado",
      "Procedimientos emergencia documentados"
    ],
    clientQuote: "SerTIC nos salvó el estudio. Recuperaron TODO en 48 horas cuando pensábamos que habíamos perdido años de trabajo.",
    featured: false
  },
  {
    id: 18,
    title: "IMPLEMENTACIÓN ERP URGENTE",
    category: "staffing",
    sector: "eventual",
    logo: null,
    description: "Staffing de 8 desarrolladores para implementación urgente de ERP en empresa metalúrgica en crecimiento.",
    detailedDescription: "Empresa metalúrgica en proceso de adquisición necesitaba implementar ERP completo en 4 meses para cumplir requisitos del comprador. Proporcionamos equipo completo de 8 desarrolladores especializados que ejecutaron implementación completa de SAP con módulos financieros, inventario y producción.",
    technologies: ["SAP Implementation", "Custom Development", "Data Migration", "Integration", "Training"],
    duration: "4 meses - proyecto finalizado",
    teamSize: "8 desarrolladores especializados",
    services: ["Staff Augmentation", "ERP Implementation", "Custom Development", "User Training"],
    metrics: {
      timeline: "4 meses deadline cumplido",
      modules: "5 módulos SAP implementados",
      team: "8 desarrolladores especializados",
      success: "Adquisición exitosa"
    },
    results: [
      "ERP completo en 4 meses según deadline",
      "5 módulos SAP implementados exitosamente",
      "8 desarrolladores especializados asignados",
      "Adquisición empresarial completada",
      "100% usuarios capacitados"
    ],
    clientQuote: "Sin el equipo de SerTIC no hubiéramos logrado la implementación a tiempo. Su staffing fue clave para cerrar la adquisición.",
    featured: false
  },
  {
    id: 19,
    title: "AUDITORÍA DE SEGURIDAD EXPRESS",
    category: "soporte",
    sector: "eventual",
    logo: null,
    description: "Auditoría de seguridad IT y implementación de mejoras para empresa financiera antes de certificación ISO 27001.",
    detailedDescription: "Empresa de servicios financieros necesitaba auditoría completa de seguridad IT y remediación de vulnerabilidades para obtener certificación ISO 27001 en 6 semanas. Ejecutamos assessment completo, implementamos controles de seguridad y documentamos todos los procedimientos necesarios para la certificación.",
    technologies: ["Security Assessment", "ISO 27001", "Vulnerability Management", "Policy Documentation", "Compliance"],
    duration: "6 semanas - proyecto finalizado",
    teamSize: "4 especialistas seguridad",
    services: ["Security Audit", "Vulnerability Remediation", "Policy Creation", "Compliance Support"],
    metrics: {
      timeline: "6 semanas timeline cumplido",
      vulnerabilities: "25 vulnerabilidades resueltas",
      compliance: "ISO 27001 certificado",
      policies: "15 políticas documentadas"
    },
    results: [
      "Certificación ISO 27001 obtenida",
      "25 vulnerabilidades críticas resueltas",
      "15 políticas de seguridad documentadas",
      "100% compliance regulatorio",
      "Equipo interno capacitado en seguridad"
    ],
    clientQuote: "La auditoría de SerTIC fue fundamental para obtener nuestra certificación ISO. Su expertise en seguridad es excepcional.",
    featured: false
  },
  {
    id: 20,
    title: "DIGITALIZACIÓN DOCUMENTAL MASIVA",
    category: "infraestructura",
    sector: "eventual",
    logo: null,
    description: "Digitalización y organización de 50,000+ documentos físicos para bufete de abogados con implementación de sistema de gestión documental.",
    detailedDescription: "Importante bufete de abogados necesitaba digitalizar 50+ años de documentos físicos e implementar sistema de gestión documental moderno. Ejecutamos proyecto de digitalización masiva con OCR, indexación automática y sistema de búsqueda avanzada, permitiendo acceso instantáneo a décadas de información legal.",
    technologies: ["Document Scanning", "OCR Processing", "Document Management System", "Search Engine", "Cloud Storage"],
    duration: "3 meses digitalización + setup",
    teamSize: "6 especialistas digitalización",
    services: ["Mass Digitization", "OCR Processing", "System Implementation", "Data Organization"],
    metrics: {
      documents: "50,000+ documentos digitalizados",
      accuracy: "99.8% precisión OCR",
      searchTime: "5 segundos búsqueda promedio",
      storage: "80% reducción espacio físico"
    },
    results: [
      "50,000+ documentos digitalizados con OCR",
      "99.8% precisión en reconocimiento de texto",
      "Búsquedas en 5 segundos promedio",
      "80% reducción en espacio físico requerido",
      "Sistema de gestión documental moderno"
    ],
    clientQuote: "SerTIC digitalizó 50 años de historia de nuestro bufete. Ahora encontramos cualquier documento en segundos.",
    featured: false
  }*/}
];

// Utilidades para filtrar y obtener datos
export const getFeaturedCases = () => casosExito.filter(caso => caso.featured);

export const getCasesByCategory = (category) => {
  if (category === "todos") return casosExito;
  return casosExito.filter((caso) =>
    Array.isArray(caso.category)
      ? caso.category.includes(category)
      : caso.category === category
  );
};


export const getCasesBySector = (sector) => {
  if (sector === 'todos') return casosExito;
  return casosExito.filter(caso => caso.sector === sector);
};

export const getCaseById = (id) => casosExito.find(caso => caso.id === parseInt(id));

// Estadísticas generales
export const getStats = () => {
  return {
    totalCases: casosExito.length,
    totalClients: casosExito.length,
    infraHours: casosExito.reduce((sum, caso) => {
      const infraMatch = caso.metrics.hoursPerMonth?.match(/(\d+)hrs?\s+infraestructura/);
      return sum + (infraMatch ? parseInt(infraMatch[1]) : 0);
    }, 0),
    supportHours: casosExito.reduce((sum, caso) => {
      const supportMatch = caso.metrics.hoursPerMonth?.match(/(\d+)hrs?\s+soporte/);
      return sum + (supportMatch ? parseInt(supportMatch[1]) : 0);
    }, 0),
    staffingProjects: casosExito.filter(caso => caso.category === 'staffing').length,
    sectors: [...new Set(casosExito.map(caso => caso.sector))].length,
    averageUptime: "99.7%"
  };
};