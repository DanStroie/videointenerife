import React from 'react';
import { useTranslation } from 'react-i18next';
import AboutContent from '../components/about/AboutContent';
import TeamSection from '../components/about/TeamSection';
import ValuesSection from '../components/about/ValuesSection';
import CallToAction from '../components/home/CallToAction';

const AboutPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary-800 to-primary-700 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">
              {t('about.title')}
            </h1>
            <p className="text-xl text-white/80">
              {t('about.subtitle')}
            </p>
          </div>
        </div>
      </section>
      
      <AboutContent />
      <ValuesSection />
      <TeamSection />
      <CallToAction />
    </>
  );
};

export default AboutPage;
