import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import CallToAction from '../components/home/CallToAction';

const ServicesPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary-800 to-primary-700 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">
              {t('services.title')}
            </h1>
            <p className="text-xl text-white/80">
              {t('services.subtitle')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Business Video Content */}
            <div className="card p-8 flex flex-col h-full transform hover:scale-105 transition-all duration-300">
              <div className="mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-4 text-primary-700">{t('services.business.title')}</h2>
              <p className="text-gray-600 mb-8 flex-grow">{t('services.business.description')}</p>
              <Link to="/services/business" className="btn btn-primary w-full">
                {t('services.business.cta')}
              </Link>
            </div>

            {/* Production Servicing */}
            <div className="card p-8 flex flex-col h-full transform hover:scale-105 transition-all duration-300">
              <div className="mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-4 text-primary-700">{t('services.production.title')}</h2>
              <p className="text-gray-600 mb-8 flex-grow">{t('services.production.description')}</p>
              <Link to="/services/production" className="btn btn-primary w-full">
                {t('services.production.cta')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
};

export default ServicesPage;
