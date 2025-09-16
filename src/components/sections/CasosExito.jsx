// src/components/sections/Portfolio.jsx
import React, { useState } from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';

const CasosExito = ({ onOpenModal }) => {
  const [activeFilter, setActiveFilter] = useState('todos');

  const projects = [
    {
      id: 1,
      title: "E-commerce TechStore",
      category: "web",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      description: "Plataforma de comercio electrónico con gestión de inventario y pagos integrados",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "App FitTracker",
      category: "mobile",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop",
      description: "Aplicación móvil para seguimiento de ejercicios y nutrición",
      technologies: ["React Native", "Firebase", "Redux"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Sistema ERP CloudBusiness",
      category: "cloud",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
      description: "Sistema empresarial completo en la nube con módulos integrados",
      technologies: ["Vue.js", "AWS", "PostgreSQL", "Docker"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Dashboard Analytics Pro",
      category: "web",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      description: "Dashboard avanzado para análisis de datos empresariales",
      technologies: ["React", "D3.js", "Python", "FastAPI"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "App Delivery Express",
      category: "mobile",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop",
      description: "Aplicación de delivery con tracking en tiempo real",
      technologies: ["Flutter", "Google Maps", "Node.js"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "Infraestructura SecureCloud",
      category: "cloud",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop",
      description: "Infraestructura segura y escalable en múltiples regiones",
      technologies: ["AWS", "Terraform", "Kubernetes", "Monitoring"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const filters = [
    { id: 'todos', name: 'Todos' },
    { id: 'web', name: 'Web' },
    { id: 'mobile', name: 'Móvil' },
    { id: 'cloud', name: 'Cloud' }
  ];

  const filteredProjects = activeFilter === 'todos' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const handleOpenModal = () => {
    if (onOpenModal) {
      onOpenModal();
    } else {
      console.warn('onOpenModal prop not provided');
    }
  };

  return (
    <section id="portfolio-section" className="py-20 bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Nuestro Portfolio
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Descubre algunos de los proyectos que hemos desarrollado para nuestros clientes
          </p>
        </div>

        {/* Filtros */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-4 bg-slate-800/50 backdrop-blur-sm rounded-full p-2">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-2 rounded-full transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-slate-700/50'
                }`}
                aria-pressed={activeFilter === filter.id}
                role="tab"
              >
                {filter.name}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de Proyectos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={`Captura de pantalla del proyecto ${project.title}`}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a 
                    href={project.liveUrl}
                    className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors"
                    title="Ver proyecto"
                    aria-label={`Ver proyecto ${project.title}`}
                  >
                    <Eye className="w-5 h-5" />
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors"
                    title="Ver código"
                    aria-label={`Ver código fuente de ${project.title}`}
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a 
                    href={project.liveUrl}
                    className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-colors"
                    title="Sitio web"
                    aria-label={`Abrir sitio web de ${project.title}`}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-full text-xs text-cyan-300 border border-cyan-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <a 
                    href={project.liveUrl}
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-center py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105"
                  >
                    Ver Proyecto
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="px-4 py-2 border border-slate-600 hover:border-slate-500 rounded-lg text-sm transition-colors"
                    aria-label={`Ver código de ${project.title} en GitHub`}
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-xl text-gray-300 mb-6">
            ¿Te gusta lo que ves? Hablemos sobre tu próximo proyecto
          </p>
          <button 
            onClick={handleOpenModal}
            className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105"
          >
            Iniciar Mi Proyecto
          </button>
        </div>
      </div>
    </section>
  );
};

export default CasosExito;