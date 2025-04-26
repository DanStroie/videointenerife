import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Testimonials = () => {
  const { t, i18n } = useTranslation();
  const isSpanish = i18n.language === 'es';

  // Testimonials with both English and Spanish versions
  const testimonials = [
    {
      id: 1,
      name: "Ariel Constantinof",
      position: isSpanish ? "Propietario, Pasul.ro" : "Owner, Pasul.ro",
      quote: isSpanish 
        ? "He estado trabajando con ellos durante varios años, en diversos proyectos diferentes - desde pequeñas producciones para redes sociales hasta videos de formato largo más grandes. Son tan versátiles como se puede ser, siempre aportando nuevas ideas y siempre yendo más allá para obtener mejores resultados. Los videos en los que hemos trabajado son un placer visual, tienen un toque especial y aumentan nuestras conversaciones cada vez."
        : "I've been working with them for a few years now, on various diferent projects - from small social media productions to bigger long-format videos. They are as versatile as one can be, always coming up with new ideas and always walking the extra mile for better results. The videos we've worked on are eye-candy, having a special touch, growing our conversations every time.",
      image: "https://imgur.com/F7SPwbC.jpg"
    },
    {
      id: 2,
      name: "Octavian Chiru",
      position: isSpanish ? "Propietario, Webglue Agency" : "Owner, Webglue Agency",
      quote: isSpanish 
        ? "Tuve la suerte de trabajar con ellos en varios proyectos. Uno de los socios más seguros, pero humildes que podrías tener, poniendo alma en todo su trabajo."
        : "I was lucky enough to work with them on several projects. One of the most confident, yet humble partners you could ever have, putting soul in all their work.",
      image: "https://imgur.com/K9tdg0K.jpg"
    },
    {
      id: 3,
      name: "Alexandru Bodrug",
      position: isSpanish ? "Propietario, Camera Lucida Lab" : "Owner, Camera Lucida Lab",
      quote: isSpanish 
        ? "He trabajado con ellos en todos nuestros proyectos comerciales para el laboratorio, desde lanzamientos de productos hasta temporadas especiales como Navidad. ¡Cada vez, hemos creado videos verticales súper profesionales que destacan como reels cinematográficos en el feed!"
        : "I've worked with them on all our commercial projects for the lab, from product launches to special seasons like Christmas. Every time, we've created super professional vertical videos that stand out as cinematic reels in the feed!",
      image: "https://imgur.com/rci8ttI.jpg"
    }
  ];

  return (
    <section className="py-20 bg-primary-900 text-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title text-white">
            {t('home.testimonials.title')}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-primary-800/50 rounded-xl p-8 backdrop-blur-sm border-b-4 border-secondary-600">
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-accent-500"
                />
                <div>
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-primary-300">{testimonial.position}</p>
                </div>
              </div>
              <blockquote className="text-gray-300 italic">
                "{testimonial.quote}"
              </blockquote>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/contact" className="btn bg-secondary-600 text-white hover:bg-secondary-700 focus:ring-secondary-500">
            {t('home.testimonials.cta')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
