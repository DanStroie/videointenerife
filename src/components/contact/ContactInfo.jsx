import React from 'react';
import { useTranslation } from 'react-i18next';

const ContactInfo = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-gradient-to-br from-primary-800 to-primary-700 text-white rounded-xl shadow-lg p-8 transform hover:scale-[1.02] transition-all duration-300">
      <h3 className="text-2xl font-bold mb-6 flex items-center">
        <span className="bg-white/10 p-2 rounded-lg mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </span>
        {t('contact.info.title')}
      </h3>
      
      <ul className="space-y-6">
        <li className="flex items-start transform hover:translate-x-2 transition-transform duration-300">
          <div className="bg-primary-700/50 p-3 rounded-lg mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div>
            <h4 className="font-bold text-secondary-400 mb-1">Phone</h4>
            <p className="text-white/80">+34 614 445 631</p>
          </div>
        </li>
        
        <li className="flex items-start transform hover:translate-x-2 transition-transform duration-300">
          <div className="bg-primary-700/50 p-3 rounded-lg mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <h4 className="font-bold text-secondary-400 mb-1">{t('contact.info.email')}</h4>
            <p className="text-white/80">danstroiefilm@gmail.com</p>
          </div>
        </li>
        
        <li className="flex items-start transform hover:translate-x-2 transition-transform duration-300">
          <div className="bg-primary-700/50 p-3 rounded-lg mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div>
            <h4 className="font-bold text-secondary-400 mb-1">{t('contact.info.whatsapp')}</h4>
            <p className="text-white/80">+40 764 010 555</p>
          </div>
        </li>
        
        <li className="flex items-start transform hover:translate-x-2 transition-transform duration-300">
          <div className="bg-primary-700/50 p-3 rounded-lg mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
          </div>
          <div>
            <h4 className="font-bold text-secondary-400 mb-1">{t('contact.info.instagram')}</h4>
            <a 
              href="https://www.instagram.com/dsfmediafilm/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white/80 hover:text-white transition-colors flex items-center"
            >
              @dsfmediafilm
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </li>
        
        <li className="flex items-start transform hover:translate-x-2 transition-transform duration-300">
          <div className="bg-primary-700/50 p-3 rounded-lg mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <div>
            <h4 className="font-bold text-secondary-400 mb-1">{t('contact.info.address')}</h4>
            <p className="text-white/80">La Orotava, Tenerife, Spain</p>
          </div>
        </li>
      </ul>
      
      <div className="mt-8 pt-8 border-t border-primary-700">
        <h4 className="font-bold mb-4 flex items-center">
          <span className="bg-secondary-500/20 p-1 rounded mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
          {t('contact.cta.title')}
        </h4>
        <p className="text-white/80 mb-4">{t('contact.cta.description')}</p>
        <a 
          href="https://calendly.com/dsfmedia/new-meeting" 
          target="_blank" 
          rel="noopener noreferrer"
          className="btn bg-accent-500 text-dark hover:bg-accent-600 focus:ring-accent-400 w-full flex items-center justify-center transform hover:scale-105 transition-all"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          {t('contact.cta.button')}
        </a>
      </div>
    </div>
  );
};

export default ContactInfo;
