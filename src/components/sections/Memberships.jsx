import React from "react";
import { ExternalLink, Award, Users, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { memberships } from "../../data/memberships";

const Memberships = () => {
  return (
    <section className="py-12 relative overflow-hidden">
      {/* Fondo degradado sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/5 via-slate-900/40 to-purple-900/10 blur-3xl opacity-30"></div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Membresías y Certificaciones
          </h2>
          <p className="text-base text-gray-400">
            Formamos parte de los principales ecosistemas tecnológicos
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {memberships.map((membership, index) => (
            <motion.article
              key={membership.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="relative bg-slate-800/40 backdrop-blur-lg border border-slate-700/40 hover:border-cyan-500/30 rounded-2xl p-6 shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 mb-5 bg-white/10 rounded-2xl flex items-center justify-center p-3">
                  <img
                    src={membership.logo}
                    alt={membership.name}
                    className="max-h-12 max-w-full object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {membership.name}
                </h3>
                <p className="text-gray-400 text-sm mb-3">
                  {membership.description}
                </p>
                <a
                  href={membership.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-cyan-400 hover:text-cyan-300 text-sm transition-colors font-medium"
                >
                  <ExternalLink className="w-4 h-4" />
                  Sitio oficial
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Impact Section */}
        <div className="mt-14 text-center">
          <h3 className="text-xl font-bold text-white mb-8">
            ¿Qué representa esto para ti?
          </h3>

          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <motion.div
              whileHover={{ scale: 1.04 }}
              className="p-5 bg-slate-800/40 rounded-2xl border border-cyan-500/20 backdrop-blur-sm"
            >
              <ShieldCheck className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
              <p className="text-white font-semibold mb-1">Confianza</p>
              <p className="text-sm text-gray-400">Procesos seguros y auditados</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.04 }}
              className="p-5 bg-slate-800/40 rounded-2xl border border-purple-500/20 backdrop-blur-sm"
            >
              <Users className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <p className="text-white font-semibold mb-1">Comunidad</p>
              <p className="text-sm text-gray-400">Vinculación con líderes tech</p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.04 }}
              className="p-5 bg-slate-800/40 rounded-2xl border border-pink-500/20 backdrop-blur-sm"
            >
              <Award className="w-8 h-8 text-pink-400 mx-auto mb-2" />
              <p className="text-white font-semibold mb-1">Excelencia</p>
              <p className="text-sm text-gray-400">Compromiso con la mejora continua</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Memberships;
