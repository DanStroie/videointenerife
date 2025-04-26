import React from 'react';
import { useTranslation } from 'react-i18next';
import PortfolioGrid from '../components/portfolio/PortfolioGrid';
import CallToAction from '../components/home/CallToAction';

const PortfolioPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary-800 to-primary-700 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">
              {t('portfolio.title')}
            </h1>
            <p className="text-xl text-white/80">
              {t('portfolio.subtitle')}
            </p>
          </div>
        </div>
      </section>
      
      <PortfolioGrid />
      
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="section-title text-primary-700">
              {t('portfolio.cta.title')}
            </h2>
            <p className="section-subtitle">
              {t('portfolio.cta.description')}
            </p>
            <a href="/contact" className="btn bg-secondary-600 text-white hover:bg-secondary-700 focus:ring-secondary-500">
              {t('portfolio.cta.button')}
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default PortfolioPage;
