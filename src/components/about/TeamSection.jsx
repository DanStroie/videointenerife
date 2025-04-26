import React from 'react';
import { useTranslation } from 'react-i18next';

const TeamSection = () => {
  const { t, i18n } = useTranslation();
  const isSpanish = i18n.language === 'es';

  // Team members with both English and Spanish versions
  const teamMembers = [
    {
      name: "Dan Stroie",
      position: isSpanish ? "Productor y DOP" : "Producer & DOP",
      bio: isSpanish 
        ? "Con amplia experiencia en producción cinematográfica comercial en varios países, Dan aporta una visión cinematográfica única a cada proyecto."
        : "With extensive experience in commercial filmmaking across multiple countries, Dan brings a unique cinematic vision to every project.",
      image: "https://imgur.com/mIjduq9.jpg"
    },
    {
      name: "Ionut Sofia",
      position: isSpanish ? "Editor" : "Editor",
      bio: isSpanish 
        ? "La experiencia técnica y la edición creativa de Ionut transforman el material bruto en historias convincentes que cautivan a las audiencias."
        : "Ionut's technical expertise and creative editing transform raw footage into compelling stories that captivate audiences.",
      image: "https://rabbitstudio.ro/wp-content/uploads/2023/03/D-1204-84-2048x1380.jpg"
    },
    {
      name: "Yuliia Andrianova",
      position: isSpanish ? "Guionista" : "Scriptwriter",
      bio: isSpanish 
        ? "Yuliia crea narrativas atractivas que conectan con las audiencias y comunican eficazmente el mensaje de tu marca."
        : "Yuliia crafts engaging narratives that connect with audiences and effectively communicate your brand's message.",
      image: "https://imgur.com/XLNicES.jpg"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="section-title">{t('about.team.title')}</h2>
          <p className="section-subtitle">{t('about.team.description')}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="card overflow-hidden flex flex-col items-center text-center p-6">
              <div className="w-40 h-40 rounded-full overflow-hidden mb-6">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-primary-600 font-medium mb-4">{member.position}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
