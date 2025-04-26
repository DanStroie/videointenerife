import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <div className="relative w-full h-full overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/jn6ZbT4XYhA?autoplay=1&mute=1&loop=1&playlist=jn6ZbT4XYhA&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&version=3&allowfullscreen=true"
            title="Background Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="absolute w-full h-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 min-w-[100%] min-h-[100%] object-cover pointer-events-none"
            style={{ 
              width: "177.77777778vh", /* 16:9 aspect ratio */
              height: "56.25vw", /* 16:9 aspect ratio */
              minWidth: "100%",
              minHeight: "100%"
            }}
          ></iframe>
        </div>
        <div className="absolute inset-0 bg-dark/20"></div>
      </div>
      
      <div className="container relative z-10 text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight mb-6">
            {t('home.hero.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            {t('home.hero.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact" className="btn bg-secondary-600 text-white hover:bg-secondary-700 focus:ring-secondary-500">
              {t('home.hero.cta')}
            </Link>
            <Link to="/portfolio" className="btn btn-outline-white">
              {t('portfolio.title')}
            </Link>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center z-10">
        <span className="text-white/70 text-sm mb-2">Scroll</span>
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
