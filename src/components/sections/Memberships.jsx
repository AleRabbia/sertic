import React from 'react';
import { ExternalLink, Award, Users } from 'lucide-react';
import { memberships } from '../../data/technologies';

const Memberships = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Nuestras Membresías y Certificaciones
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Formamos parte de las principales organizaciones tecnológicas del país
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {memberships.map((membership) => (
            <div
              key={membership.id}
              className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl p-3 flex items-center justify-center flex-shrink-0">
                  <img
                    src={membership.logo}
                    alt={`Logo de ${membership.name}`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {membership.name}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                    {membership.description}
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      {membership.type === 'technology' ? (
                        <Users className="w-4 h-4 text-cyan-400" />
                      ) : (
                        <Award className="w-4 h-4 text-purple-400" />
                      )}
                      <span className="text-sm text-gray-400">
                        {membership.type === 'technology' ? 'Polo Tecnológico' : 'Cámara Empresarial'}
                      </span>
                    </div>
                    <a
                      href={membership.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 text-sm transition-colors"
                    >
                      Ver más
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Beneficios */}
        <div className="mt-12 bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-2xl p-8 border border-cyan-500/20">
          <div className="text-center">
            <h3 className="text-xl font-bold text-white mb-4">¿Qué significa esto para nuestros clientes?</h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <Award className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h4 className="font-semibold text-white mb-2">Calidad Certificada</h4>
                <p className="text-gray-300 text-sm">Cumplimos con los más altos estándares de la industria</p>
              </div>
              <div>
                <Users className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <h4 className="font-semibold text-white mb-2">Red de Contactos</h4>
                <p className="text-gray-300 text-sm">Acceso a la mejor red tecnológica del país</p>
              </div>
              <div>
                <ExternalLink className="w-8 h-8 text-pink-400 mx-auto mb-3" />
                <h4 className="font-semibold text-white mb-2">Actualización Constante</h4>
                <p className="text-gray-300 text-sm">Siempre al día con las últimas tendencias tecnológicas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Memberships;