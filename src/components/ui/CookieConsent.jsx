import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { initializeAnalytics, disableAnalytics } from '../../utils/analytics';
import CookieSettings from './CookieSettings';

const CookieConsent = () => {
  const { t, i18n } = useTranslation();
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  
  // Check if user has already made a choice
  useEffect(() => {
    const consentStatus = localStorage.getItem('cookieConsent');
    
    if (consentStatus === null) {
      // No decision has been made yet, show the banner
      setShowBanner(true);
    } else if (consentStatus === 'accepted') {
      // User has accepted cookies, initialize analytics
      initializeAnalytics();
    }
  }, []);

  // Handle accepting cookies
  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowBanner(false);
    initializeAnalytics();
  };

  // Handle declining cookies
  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowBanner(false);
    disableAnalytics();
  };
  
  // Open cookie settings modal
  const openSettings = () => {
    setShowSettings(true);
  };
  
  // Close cookie settings modal
  const closeSettings = () => {
    setShowSettings(false);
  };

  if (!showBanner) {
    return (
      <CookieSettings 
        isOpen={showSettings} 
        onClose={closeSettings} 
      />
    );
  }

  return (
    <>
      {/* Semi-transparent overlay */}
      <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center">
        {/* Cookie consent banner */}
        <div className="max-w-4xl w-full mx-4 bg-white rounded-xl shadow-2xl transform transition-all duration-300 animate-fadeIn">
          <div className="p-6">
            <div className="mb-4">
              <h2 className="text-xl font-bold text-primary-700 mb-2">
                {i18n.language === 'es' 
                  ? 'Utilizamos cookies para mejorar su experiencia' 
                  : 'We use cookies to enhance your experience'}
              </h2>
              <p className="text-gray-600">
                {i18n.language === 'es'
                  ? 'Utilizamos cookies analíticas para entender cómo interactúa con nuestro sitio y mejorar nuestros servicios.'
                  : 'We use analytics cookies to understand how you interact with our site and improve our services.'}
              </p>
            </div>
            
            <div className="flex flex-wrap justify-end items-center gap-3 mt-6">
              <a 
                href="/privacy" 
                className="px-4 py-2 text-sm font-medium text-gray-700 underline hover:text-primary-600 transition-colors"
              >
                {i18n.language === 'es' ? 'Política de Privacidad' : 'Privacy Policy'}
              </a>
              <button
                onClick={openSettings}
                className="px-4 py-2 text-sm font-medium text-gray-700 underline hover:text-primary-600 transition-colors"
              >
                {i18n.language === 'es' ? 'Configuración' : 'Settings'}
              </button>
              <span 
                onClick={declineCookies}
                className="px-4 py-2 text-sm font-medium text-gray-700 underline hover:text-primary-600 transition-colors cursor-pointer"
              >
                {i18n.language === 'es' ? 'Rechazar' : 'Decline'}
              </span>
              <button
                onClick={acceptCookies}
                className="px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors"
              >
                {i18n.language === 'es' ? 'Aceptar' : 'Accept'}
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <CookieSettings 
        isOpen={showSettings} 
        onClose={closeSettings} 
      />
    </>
  );
};

export default CookieConsent;
