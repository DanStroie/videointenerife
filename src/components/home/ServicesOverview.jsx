import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ServicesOverview = () => {
  const { t } = useTranslation();

  const services = [
    {
      title: t('services.business.title'),
      description: t('services.business.description'),
      image: "https://imgur.com/hU2v4aM.jpg",
      link: "/services/business"
    },
    {
      title: t('services.production.title'),
      description: t('services.production.description'),
      image: "https://imgur.com/bk8OlxG.jpg",
      link: "/services/production"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title text-primary-700">{t('home.services.title')}</h2>
          <p className="section-subtitle">{t('home.services.description')}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Link 
              key={index}
              to={service.link}
              className="group"
            >
              <div className="card overflow-hidden h-full hover:shadow-lg transition-all duration-300">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-primary-700 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center text-primary-600 font-medium">
                    {t('home.services.learnMore')}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
