import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ServicesOverview = () => {
  const { t, i18n } = useTranslation();
  const isSpanish = i18n.language === 'es';

  const services = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      title: "Social Media Reels",
      titleES: "Reels para Redes Sociales",
      description: "Engaging short-form videos optimized for Instagram, TikTok, and Facebook.",
      descriptionES: "Videos cortos y atractivos optimizados para Instagram, TikTok y Facebook."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      ),
      title: "Brand Storytelling",
      titleES: "Narrativa de Marca",
      description: "Narrative-driven content that connects your audience to your brand's values and mission.",
      descriptionES: "Contenido basado en narrativas que conecta a tu audiencia con los valores y la misión de tu marca."
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: "Content Strategy",
      titleES: "Estrategia de Contenido",
      description: "Comprehensive planning for consistent, effective video content that achieves your business goals.",
      descriptionES: "Planificación integral para contenido de video consistente y efectivo que logre los objetivos de tu negocio."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title text-primary-700">
            {t('home.services.title')}
          </h2>
          <p className="section-subtitle">
            {t('home.services.description')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="card p-6 flex flex-col items-center text-center hover:border-l-4 hover:border-l-primary-500 transition-all">
              <div className="mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-primary-700">
                {isSpanish ? service.titleES : service.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {isSpanish ? service.descriptionES : service.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/services" className="btn bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500">
            {t('home.services.cta')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
