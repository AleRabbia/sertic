// src/components/sections/CasosExito.jsx
import React, { useState } from 'react';

const CasosExito = () => {
  const [activeFilter, setActiveFilter] = useState('todos');

  const cases = [
    {
      id: 1,
      title: "AGROSPRAY",
      category: "infraestructura",
      image: "https://agrospray.com.ar/wp-content/uploads/2021/11/logo-agrospray-w.png",
      description: "Soporte en infraestructura y optimización de sistemas, con dedicación mensual de 6 hs en Infra y 4 hs en Soporte.",
      technologies: ["Infraestructura", "Soporte Remoto", "Monitoreo"],
    },
    {
      id: 2,
      title: "LETIS",
      category: "soporte",
      image: "https://letis.org/wp-content/uploads/2020/11/logo-header.png",
      description: "Soporte remoto intensivo: 40 hs/mes en soporte y 12 hs/mes en infraestructura para garantizar continuidad operativa.",
      technologies: ["Soporte Remoto", "Gestión de Incidencias", "Backups"],
    },
    {
      id: 3,
      title: "FULLCONTROL",
      category: "infraestructura",
      image: "https://www.fullcontrol.com.ar/images/logo.png",
      description: "Administración de infraestructura crítica con 20 hs/mes en infraestructura para asegurar disponibilidad 24/7.",
      technologies: ["VMware", "AWS", "Alta Disponibilidad"],
    },
    {
      id: 4,
      title: "UNICABA",
      category: "infraestructura",
      image: "https://udelaciudad.edu.ar/wp-content/uploads/2025/01/Logos-3-png_Logo-secundario-1-768x372.png",
      description: "Soporte y mantenimiento de infraestructura educativa con 15 hs/mes en Infraestructura.",
      technologies: ["Infraestructura Educativa", "Cloud", "Redes"],
    },
    {
      id: 5,
      title: "SWIPRO",
      category: "soporte",
      image: "https://swipro.com.ar/wp-content/uploads/2022/05/Logo-Swipro-para-fondo-claro.png",
      description: "Soporte remoto dedicado con 15 hs/mes en Soporte y 6 hs/mes en Infraestructura.",
      technologies: ["Soporte Remoto", "SLA", "Atención Incidentes"],
    },
    {
      id: 6,
      title: "Konecta",
      category: "staffing",
      image: "https://talentokonecta.grupokonecta.com.ar/wp-content/uploads/2025/02/Konecta_Logo_RGB_Blue-2048x667.png",
      description: "Servicio de Staffing IT: provisión de perfiles especializados para proyectos clave, adaptados a las necesidades del cliente.",
      technologies: ["Staffing", "Recursos IT", "Consultoría"],
    },
  ];

  const filters = [
    { id: 'todos', name: 'Todos' },
    { id: 'infraestructura', name: 'Infraestructura' },
    { id: 'soporte', name: 'Soporte Remoto' },
    { id: 'staffing', name: 'Staffing' },
  ];

  const filteredCases =
    activeFilter === 'todos'
      ? cases
      : cases.filter((c) => c.category === activeFilter);

  return (
    <section id="casos-exito-section" className="py-20 bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Casos de Éxito
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Algunos ejemplos reales de cómo apoyamos a nuestros clientes en sectores como agroindustria, salud, educación y tecnología.
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

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCases.map((c) => (
            <div
              key={c.id}
              className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={c.image}
                  alt={`Imagen ilustrativa de ${c.title}`}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                  {c.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm">{c.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {c.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-full text-xs text-cyan-300 border border-cyan-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CasosExito;
