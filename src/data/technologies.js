import aws from '../assets/tecnologias/aws.jpg';
import azure from '../assets/tecnologias/azure.png';
import docker from '../assets/tecnologias/docker.png';
import gws from '../assets/tecnologias/gws.png';
import m365 from '../assets/tecnologias/m365.png';
import odoo from '../assets/tecnologias/odoo.jpg';
import vmware from '../assets/tecnologias/vmware.png';
import zabbix from '../assets/tecnologias/zabbix.jpg';


export const technologies = [
  {
    id: 1,
    name: "Google Workspace",
    logo: gws,
    category: "productivity",
    description: "Suite de productividad y colaboración"
  },
  {
    id: 2,
    name: "Odoo",
    logo: odoo,
    category: "erp",
    description: "Sistema ERP integral"
  },
  {
    id: 3,
    name: "Zabbix",
    logo: zabbix,
    category: "monitoring",
    description: "Monitoreo de infraestructura"
  },
  {
    id: 4,
    name: "Amazon Web Services",
    logo: aws,
    category: "cloud",
    description: "Servicios de cloud computing"
  },
  {
    id: 5,
    name: "Microsoft Azure",
    logo: azure,
    category: "cloud",
    description: "Plataforma cloud de Microsoft"
  },
  {
    id: 6,
    name: "VMware",
    logo: vmware,
    category: "virtualization",
    description: "Virtualización de servidores"
  },
  {
    id: 7,
    name: "Office 365",
    logo: m365,
    category: "productivity",
    description: "Suite de oficina Microsoft"
  },
  {
    id: 8,
    name: "Docker",
    logo: docker,
    category: "containerization",
    description: "Contenedores y microservicios"
  }
];

