import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const PortfolioPreview = () => {
  const { t, i18n } = useTranslation();
  const isSpanish = i18n.language === 'es';

  // Category translations
  const categoryTranslations = {
    commercial: { en: "Commercial", es: "Comercial" },
    corporate: { en: "Corporate", es: "Corporativo" },
    interviews: { en: "Interviews & Podcasts", es: "Entrevistas y Podcasts" },
    social: { en: "Social Media Content", es: "Contenido para Redes Sociales" },
    product: { en: "Product Video", es: "Video de Producto" },
    events: { en: "Events", es: "Eventos" },
    realestate: { en: "Real Estate", es: "Bienes Raíces" }
  };

  // Portfolio items with translations - using the first 3 from the new projects
  const portfolioItems = [
    {
      id: 1,
      title: "TMC Campaign",
      category: "commercial",
      thumbnail: "https://imgur.com/2hLwK3Z.jpg",
      description: {
        en: "This commercial highlights the impact of learning coding on a man who goes from a life of stress and pressure to one of success and fulfillment.",
        es: "Este anuncio destaca el impacto del aprendizaje de programación en un hombre que pasa de una vida de estrés y presión a una de éxito y satisfacción."
      }
    },
    {
      id: 4,
      title: "Flip - EURO 2024",
      category: "commercial",
      thumbnail: "https://imgur.com/8dDoFMx.jpg",
      description: {
        en: "An energetic commercial created for Flip.ro, celebrating the excitement of EURO 2024. Through dynamic visuals and a spirited tone, the video promotes Flip's sustainable approach to smartphones.",
        es: "Un comercial energético creado para Flip.ro, celebrando la emoción de la EURO 2024. A través de visuales dinámicos y un tono animado, el video promueve el enfoque sostenible de Flip hacia los smartphones."
      }
    },
    {
      id: 9,
      title: "Montana Aerospace",
      category: "corporate",
      thumbnail: "https://imgur.com/whRlUip.jpg",
      description: {
        en: "Part of a documentary series showcasing how the aviation sector is working together, on an international scale, to forge a path to net zero.",
        es: "Parte de una serie documental que muestra cómo el sector de la aviación está trabajando en conjunto, a escala internacional, para forjar un camino hacia cero emisiones netas."
      }
    }
  ];

  return (
    <section className="py-20">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title text-primary-700">
            {t('home.portfolio.title')}
          </h2>
          <p className="section-subtitle">
            {t('home.portfolio.description')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item) => (
            <Link 
              key={item.id} 
              to={`/portfolio#item-${item.id}`}
              className="group"
            >
              <div className="card overflow-hidden h-full">
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={item.thumbnail} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6">
                      <span className="text-primary-300 text-sm font-medium block mb-1">
                        {categoryTranslations[item.category] ? categoryTranslations[item.category][isSpanish ? 'es' : 'en'] : item.category}
                      </span>
                      <h3 className="text-white text-xl font-bold">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-primary-600 text-sm font-medium block mb-1">
                    {categoryTranslations[item.category] ? categoryTranslations[item.category][isSpanish ? 'es' : 'en'] : item.category}
                  </span>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">
                    {isSpanish ? item.description.es : item.description.en}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/portfolio" className="btn bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500">
            {t('home.portfolio.cta')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPreview;
