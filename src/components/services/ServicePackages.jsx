import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const ServicePackages = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">{t('services.title')}</h2>
          <p className="section-subtitle">{t('services.description')}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Starter Reel Package */}
          <div className="card flex flex-col h-full">
            <div className="p-6 border-b border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {t('services.packages.starter.name')}
              </h3>
              <p className="text-gray-600 mb-4">
                {t('services.packages.starter.description')}
              </p>
              <div className="text-3xl font-bold text-primary-600 mb-1">
                {t('services.packages.starter.price')}
              </div>
              <div className="text-sm text-gray-500">
                €200/video
              </div>
            </div>
            <div className="p-6 flex-grow">
              <ul className="space-y-3 mb-6">
                {t('services.packages.starter.includes', { returnObjects: true }).map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-5 w-5 text-primary-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 pt-0 mt-auto">
              <Link to="/contact" className="btn btn-primary w-full">
                {t('services.packages.starter.cta')}
              </Link>
            </div>
          </div>
          
          {/* Growth Pack */}
          <div className="card flex flex-col h-full relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-primary-600 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">
              Popular
            </div>
            <div className="p-6 border-b border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {t('services.packages.growth.name')}
              </h3>
              <p className="text-gray-600 mb-4">
                {t('services.packages.growth.description')}
              </p>
              <div className="text-3xl font-bold text-primary-600 mb-1">
                {t('services.packages.growth.price')}
              </div>
              <div className="text-sm text-gray-500">
                €166.67/video
              </div>
            </div>
            <div className="p-6 flex-grow">
              <ul className="space-y-3 mb-6">
                {t('services.packages.growth.includes', { returnObjects: true }).map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-5 w-5 text-primary-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 pt-0 mt-auto">
              <Link to="/contact" className="btn btn-primary w-full">
                {t('services.packages.growth.cta')}
              </Link>
            </div>
          </div>
          
          {/* Visibility Bundle */}
          <div className="card flex flex-col h-full">
            <div className="p-6 border-b border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {t('services.packages.visibility.name')}
              </h3>
              <p className="text-gray-600 mb-4">
                {t('services.packages.visibility.description')}
              </p>
              <div className="text-3xl font-bold text-primary-600 mb-1">
                {t('services.packages.visibility.price')}
              </div>
              <div className="text-sm text-gray-500">
                €100/video
              </div>
            </div>
            <div className="p-6 flex-grow">
              <ul className="space-y-3 mb-6">
                {t('services.packages.visibility.includes', { returnObjects: true }).map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-5 w-5 text-primary-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 pt-0 mt-auto">
              <Link to="/contact" className="btn btn-primary w-full">
                {t('services.packages.visibility.cta')}
              </Link>
            </div>
          </div>
          
          {/* Custom Monthly Retainer */}
          <div className="card flex flex-col h-full bg-gradient-to-br from-primary-50 to-white">
            <div className="p-6 border-b border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {t('services.packages.custom.name')}
              </h3>
              <p className="text-gray-600 mb-4">
                {t('services.packages.custom.description')}
              </p>
              <div className="text-3xl font-bold text-primary-600 mb-1">
                {t('services.packages.custom.price')}
              </div>
              <div className="text-sm text-gray-500">
                Custom pricing based on needs
              </div>
            </div>
            <div className="p-6 flex-grow">
              <ul className="space-y-3 mb-6">
                {t('services.packages.custom.includes', { returnObjects: true }).map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-5 w-5 text-primary-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 pt-0 mt-auto">
              <Link to="/contact" className="btn btn-primary w-full">
                {t('services.packages.custom.cta')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicePackages;
