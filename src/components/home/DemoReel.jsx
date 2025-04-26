import React from 'react';
import { useTranslation } from 'react-i18next';

const DemoReel = () => {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Column */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-6 text-primary-700">
              {t('home.intro.title')}
            </h2>
            <p className="text-gray-700 text-lg mb-8">
              {t('home.intro.description')}
            </p>
            <div className="flex space-x-4">
              <a 
                href="/services" 
                className="btn btn-primary"
              >
                {t('home.services.cta')}
              </a>
            </div>
          </div>
          
          {/* Video Column - Vertical 9:16 Aspect Ratio */}
          <div className="flex justify-center">
            <div className="w-full max-w-[350px] aspect-[9/16] rounded-xl overflow-hidden shadow-xl">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/hjVbf9sWupA?autoplay=1&mute=1&loop=1&playlist=hjVbf9sWupA&controls=0&rel=0"
                title="Professional Video Production"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoReel;
