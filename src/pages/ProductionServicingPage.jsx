import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import CallToAction from '../components/home/CallToAction';

const ProductionServicingPage = () => {
  const { t } = useTranslation();

  const landscapes = [
    {
      image: "https://imgur.com/dOCwLtc.jpg",
      alt: "Mount Teide National Park at sunset",
      title: "Teide National Park"
    },
    {
      image: "https://imgur.com/9FLbzT3.jpg",
      alt: "Anaga Rural Park with misty forests",
      title: "Anaga Forest"
    },
    {
      image: "https://imgur.com/fX5N63w.jpg",
      alt: "Beautiful town in Tenerife",
      title: "Beautiful Towns"
    },
    {
      image: "https://imgur.com/iIA0dya.jpg",
      alt: "Los Gigantes cliffs",
      title: "Los Gigantes"
    }
  ];

  const services = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: t('services.production.services.crew.title'),
      description: t('services.production.services.crew.description')
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      ),
      title: t('services.production.services.creative.title'),
      description: t('services.production.services.creative.description')
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: t('services.production.services.locations.title'),
      description: t('services.production.services.locations.description')
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
        </svg>
      ),
      title: t('services.production.services.equipment.title'),
      description: t('services.production.services.equipment.description')
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: t('services.production.services.management.title'),
      description: t('services.production.services.management.description')
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: t('services.production.services.transport.title'),
      description: t('services.production.services.transport.description')
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
        </svg>
      ),
      title: t('services.production.services.fixers.title'),
      description: t('services.production.services.fixers.description')
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      title: t('services.production.services.post.title'),
      description: t('services.production.services.post.description')
    }
  ];

  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary-800 to-primary-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://imgur.com/dOCwLtc.jpg" 
            alt="Teide National Park"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">
              {t('services.production.title')}
            </h1>
            <p className="text-xl text-white/80">
              {t('services.production.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="pt-16 pb-8">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-gray-600 mb-8">
              {t('services.production.description')}
            </p>
            <div className="flex justify-center gap-4">
              <Link to="/contact" className="btn btn-primary">
                {t('services.production.cta')}
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

      {/* Services Section */}
      <section className="pt-8 pb-16">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">{t('services.production.servicesTitle')}</h2>
            <p className="section-subtitle">{t('services.production.servicesDescription')}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`card p-6 flex flex-col items-center text-center hover:shadow-lg transition-all ${
                  service.title === t('services.production.services.post.title') ? 'border-2 border-primary-500' : ''
                }`}
              >
                <div className="mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-primary-700">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Landscape Photo Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {landscapes.map((landscape, index) => (
              <div 
                key={index}
                className="relative overflow-hidden rounded-lg aspect-[4/3] group hover:shadow-xl transition-all duration-300"
              >
                <img 
                  src={landscape.image} 
                  alt={landscape.alt}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-white font-bold text-lg">{landscape.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Tenerife & Why Us Section with Background Image */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://imgur.com/dOCwLtc.jpg" 
            alt="Teide National Park"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="container relative z-10">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Why Tenerife */}
            <div className="bg-white/90 p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold mb-8">{t('services.production.whyTenerife.title')}</h2>
              <div className="space-y-6">
                {t('services.production.whyTenerife.items', { returnObjects: true }).map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="h-6 w-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold mb-1">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-white/90 p-8 rounded-lg shadow-lg">
              <h2 className="text-3xl font-bold mb-8">{t('services.production.whyUs.title')}</h2>
              <p className="text-gray-600 mb-6">{t('services.production.whyUs.description')}</p>
              <div className="space-y-6">
                {t('services.production.whyUs.reasons', { returnObjects: true }).map((reason, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="h-6 w-6 text-primary-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-bold mb-1">{reason.title}</h3>
                      <p className="text-gray-600">{reason.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
};

export default ProductionServicingPage; 