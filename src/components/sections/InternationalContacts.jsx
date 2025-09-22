import React from 'react';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';
import { internationalContacts } from '../../data/contact';

const InternationalContacts = () => {
  return (
    <section className="py-20 bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Presencia global, atención cercana
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Oficinas en Argentina y presencia internacional en España para estar más cerca de nuestros clientes
          </p>
        </div>

        {/* Grid de contactos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {internationalContacts.map((contact) => (
            <div
              key={contact.id}
              className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300"
            >
              {/* Header con bandera y ciudad */}
              <div className="flex items-center gap-3 mb-4">
                <div className="text-2xl flex items-center justify-center w-8 h-8">
                  {contact.flag}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {contact.city}
                  </h3>
                  <p className="text-gray-400 text-sm">{contact.country}</p>
                </div>
                <Globe className="w-5 h-5 text-cyan-400" />
              </div>

              {/* Información de contacto */}
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <MapPin className="w-5 h-5 text-pink-400 mt-0.5 flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <p className="text-pink-400 font-medium text-sm">Ubicación</p>
                    <p className="text-gray-300 text-xs leading-relaxed">{contact.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Phone className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <p className="text-purple-400 font-medium text-sm">Teléfono</p>
                    <a 
                      href={`tel:${contact.phone}`}
                      className="text-gray-300 hover:text-white text-xs transition-colors block"
                    >
                      {contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Mail className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <div className="min-w-0 flex-1">
                    <p className="text-cyan-400 font-medium text-sm">Email</p>
                    <a 
                      href={`mailto:${contact.email}`}
                      className="text-gray-300 hover:text-white text-xs transition-colors block truncate"
                    >
                      {contact.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Call to action */}
              <div className="mt-4 pt-4 border-t border-slate-700">
                <div className="flex gap-2">
                  <a
                    href={`mailto:${contact.email}`}
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-center py-1.5 px-3 rounded-md text-xs font-medium transition-all duration-300 transform hover:scale-105"
                  >
                    Email
                  </a>
                  <a
                    href={`tel:${contact.phone}`}
                    className="flex-1 border border-slate-600 hover:border-slate-500 text-center py-1.5 px-3 rounded-md text-xs font-medium transition-colors"
                  >
                    Llamar
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternationalContacts;
