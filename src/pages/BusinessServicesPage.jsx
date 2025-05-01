import React from 'react';
import { useTranslation } from 'react-i18next';
import ServicePackages from '../components/services/ServicePackages';
import ProcessSteps from '../components/services/ProcessSteps';
import CallToAction from '../components/home/CallToAction';

const BusinessServicesPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary-800 to-primary-700 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">
              {t('services.business.title')}
            </h1>
            <p className="text-xl text-white/80">
              {t('services.business.subtitle')}
            </p>
          </div>
        </div>
      </section>
      
      <ServicePackages />
      <ProcessSteps />
      <CallToAction />
    </>
  );
};

export default BusinessServicesPage; 