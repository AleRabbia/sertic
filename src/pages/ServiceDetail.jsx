import React, { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, TrendingUp, Calendar, Mail } from 'lucide-react';
import { Navigation, Footer } from '../components/layout';
import { Card } from '../components/ui/Card';
import { getServiceBySlug, getRelatedServices } from '../data/services';

const ServiceDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const service = getServiceBySlug(slug);
  const relatedServices = getRelatedServices(slug, 3);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-sertic-blue via-sertic-black to-sertic-blue flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Servicio no encontrado
          </h1>
          <button
            onClick={() => navigate('/')}
            className="bg-gradient-to-r from-sertic-cyan to-sertic-blue px-6 py-3 rounded-full hover:scale-105 transition-transform"
          >
            Volver al inicio
          </button>
        </div>
      </div>
    );
  }

  const IconComponent = service.icon;

  const handleContactClick = () => {
    navigate('/#contacto');
  };

  const handleScheduleMeeting = () => {
    window.open(
      'https://calendly.com/alexis-rabbia-sertic/consulta-tecnica',
      '_blank'
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sertic-blue via-sertic-black to-sertic-blue text-sertic-white">
      <Navigation />

      <main className="pt-24">

        {/* =========================
            HERO CON IMAGEN DEL SERVICIO
           ========================= */}
        <section className="relative min-h-[90vh] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={service.heroImage}
              alt={service.title}
              loading="eager"
              fetchPriority="high"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/65" />
          </div>

          <div className="relative z-10 min-h-[90vh] flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

              <button
                onClick={() => navigate('/')}
                className="flex items-center gap-2 text-sertic-cyan hover:text-sertic-light transition-colors mb-10 group"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                Volver a servicios
              </button>

              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`bg-gradient-to-br from-sertic-cyan to-sertic-blue p-4 rounded-2xl`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <span className="text-sertic-cyan font-semibold text-lg">
                      Servicio Profesional
                    </span>
                  </div>

                  <h1 className={`text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                    {service.title}
                  </h1>

                  <p className="text-xl text-sertic-light mb-8 leading-relaxed">
                    {service.fullDescription}
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <button
                      onClick={handleContactClick}
                      className="bg-gradient-to-r from-sertic-cyan to-sertic-blue px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-2"
                    >
                      <Mail className="w-5 h-5" />
                      Solicitar Cotización
                    </button>

                    <button
                      onClick={handleScheduleMeeting}
                      className="bg-sertic-dark/60 border border-sertic-cyan/50 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                    >
                      <Calendar className="w-5 h-5" />
                      Agendar Reunión
                    </button>
                  </div>
                </div>

                <Card hover={false} className="bg-black/60 backdrop-blur-md">
                  <h3 className="text-2xl font-bold mb-6 text-sertic-cyan">
                    Características Principales
                  </h3>
                  <ul className="space-y-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-6 h-6 text-sertic-cyan mt-1" />
                        <span className="text-sertic-light text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* =========================
            FEATURES DETALLADOS
           ========================= */}
        <section className="py-20 bg-sertic-black/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              {service.detailedFeatures.map((feature, idx) => {
                const FeatureIcon = feature.icon;
                return (
                  <Card key={idx}>
                    <div className="flex items-start gap-4">
                      <div className={`bg-gradient-to-br from-sertic-cyan to-sertic-blue p-3 rounded-xl`}>
                        <FeatureIcon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-white">
                          {feature.title}
                        </h3>
                        <p className="text-sertic-light">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* =========================
            BENEFICIOS
           ========================= */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-sertic-cyan to-sertic-blue bg-clip-text text-transparent">
                  Beneficios Clave
                </h2>

                <div className="space-y-4">
                  {service.benefits.map((benefit, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-4 bg-sertic-dark/30 p-4 rounded-xl border border-sertic-gray/20"
                    >
                      <div className="bg-gradient-to-br from-sertic-cyan to-sertic-blue p-2 rounded-lg">
                        <TrendingUp className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-sertic-light font-medium">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <Card hover={false}>
                <h3 className="text-2xl font-bold mb-6 text-sertic-cyan">
                  Stack Tecnológico
                </h3>
                <div className="flex flex-wrap gap-3">
                  {service.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="bg-sertic-dark/50 border border-sertic-cyan/30 px-4 py-2 rounded-full text-sm font-medium text-sertic-light"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* =========================
            SERVICIOS RELACIONADOS
           ========================= */}
        {relatedServices.length > 0 && (
          <section className="py-20 bg-sertic-black/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-3 gap-8">
                {relatedServices.map((related) => {
                  const RelatedIcon = related.icon;
                  return (
                    <Link
                      key={related.id}
                      to={`/servicios/${related.slug}`}
                      className="group"
                    >
                      <Card className="h-full cursor-pointer">
                        <div className={`text-${related.color}-400 mb-6`}>
                          <RelatedIcon className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-white">
                          {related.title}
                        </h3>
                        <p className="text-sertic-light">
                          {related.description}
                        </p>
                      </Card>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        )}

      </main>

      <Footer />
    </div>
  );
};

export default ServiceDetail;
