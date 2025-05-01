import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const CallToAction = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const isSpanish = i18n.language === 'es';
  const isBusinessServicesPage = location.pathname === '/services/business';
  const isProductionServicingPage = location.pathname === '/services/production';

  // Custom text for English and Spanish versions
  const ctaDescription = {
    en: "Let us help you create cinematic content that captures attention and drives bookings for your Tenerife business.",
    es: "Permítanos ayudarle a crear contenido cinematográfico que capte la atención y aumente las ventas para su negocio en Tenerife."
  };

  return (
    <section className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6">
            {isProductionServicingPage
              ? t('services.production.readyToStart.title')
              : isBusinessServicesPage
              ? t('services.cta.title')
              : t('services.cta.title')}
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            {isProductionServicingPage
              ? t('services.production.readyToStart.description')
              : isSpanish ? ctaDescription.es : ctaDescription.en}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn bg-secondary-600 text-white hover:bg-secondary-700 focus:ring-secondary-500">
              {t('cta.contact')}
            </Link>
            <a 
              href="https://calendly.com/dsfmedia/new-meeting" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn bg-yellow-400 hover:bg-yellow-500 text-gray-900 border-none"
            >
              {t('services.production.bookCall')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
