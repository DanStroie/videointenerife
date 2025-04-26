import React from 'react';
import { useTranslation } from 'react-i18next';

const ProcessSteps = () => {
  const { t } = useTranslation();
  
  const steps = t('services.process.steps', { returnObjects: true });

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">{t('services.process.title')}</h2>
        </div>
        
        <div className="relative">
          {/* Process line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-primary-100 transform -translate-x-1/2"></div>
          
          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className={`md:flex items-center ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                  {/* Step number - visible on mobile only */}
                  <div className="md:hidden flex items-center justify-center w-12 h-12 rounded-full bg-primary-600 text-white font-bold text-xl mb-4">
                    {index + 1}
                  </div>
                  
                  {/* Content */}
                  <div className="md:w-1/2 p-6 md:p-8">
                    <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-end md:text-right' : 'md:items-start'}`}>
                      <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                      <p className="text-gray-600 max-w-md">{step.description}</p>
                    </div>
                  </div>
                  
                  {/* Center circle - desktop only */}
                  <div className="hidden md:flex absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 items-center justify-center w-16 h-16 rounded-full bg-primary-600 text-white font-bold text-xl z-10">
                    {index + 1}
                  </div>
                  
                  {/* Spacer for the other side */}
                  <div className="md:w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
