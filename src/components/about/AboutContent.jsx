import React from 'react';
import { useTranslation } from 'react-i18next';

const AboutContent = () => {
  const { t, i18n } = useTranslation();
  const isSpanish = i18n.language === 'es';

  // Custom text for English and Spanish versions
  const storyContent = {
    en: "Founded with a passion for storytelling and visual excellence, DSF Media brings international filmmaking experience to Tenerife's businesses. With a background in commercial production across multiple continents, we understand how to create content that resonates with audiences and drives real business results.",
    es: "Fundada con pasión por la narración y la excelencia visual, DSF Media trae experiencia internacional en producción cinematográfica a las empresas de Tenerife. Con experiencia en producción comercial en múltiples continentes, entendemos cómo crear contenido que resuene con las audiencias y genere resultados comerciales reales."
  };

  return (
    <section className="py-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">{t('about.story.title')}</h2>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed">
              {isSpanish ? storyContent.es : storyContent.en}
            </p>
            
            <h2 className="text-3xl font-bold mb-6">{t('about.approach.title')}</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              {t('about.approach.content')}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
              <img 
                src="https://imgur.com/PXkawfU.jpg" 
                alt="DSF Media filming" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 md:mt-12">
              <img 
                src="https://imgur.com/SwvZvnR.jpg" 
                alt="Camera equipment" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
