import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { initializeAnalytics, disableAnalytics, hasAnalyticsConsent } from '../../utils/analytics';

const CookieSettings = ({ isOpen, onClose }) => {
  const { t, i18n } = useTranslation();
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);
  
  // Load current settings when component mounts
  useEffect(() => {
    setAnalyticsEnabled(hasAnalyticsConsent());
  }, [isOpen]);
  
  // Save settings and close modal
  const saveSettings = () => {
    if (analyticsEnabled) {
      localStorage.setItem('cookieConsent', 'accepted');
      initializeAnalytics();
    } else {
      localStorage.setItem('cookieConsent', 'declined');
      disableAnalytics();
    }
    onClose();
  };
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 animate-fadeIn">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold text-gray-800">
              {i18n.language === 'es' ? 'Configuración de Cookies' : 'Cookie Settings'}
            </h2>
            <button 
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          <div className="mb-6">
            <p className="text-gray-600 mb-4">
              {i18n.language === 'es'
                ? 'Utilizamos cookies para mejorar su experiencia en nuestro sitio web. Puede elegir qué tipos de cookies desea aceptar.'
                : 'We use cookies to enhance your experience on our website. You can choose which types of cookies you want to accept.'}
            </p>
            
            <div className="mt-6 space-y-4">
              {/* Necessary cookies - always enabled */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-medium text-gray-800">
                    {i18n.language === 'es' ? 'Cookies Necesarias' : 'Necessary Cookies'}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {i18n.language === 'es'
                      ? 'Estas cookies son esenciales para el funcionamiento del sitio web.'
                      : 'These cookies are essential for the website to function.'}
                  </p>
                </div>
                <div className="relative">
                  <input 
                    type="checkbox" 
                    checked={true} 
                    disabled={true}
                    className="sr-only" 
                  />
                  <div className="block bg-primary-600 w-14 h-8 rounded-full"></div>
                  <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform translate-x-6"></div>
                </div>
              </div>
              
              {/* Analytics cookies - can be toggled */}
              <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-medium text-gray-800">
                    {i18n.language === 'es' ? 'Cookies Analíticas' : 'Analytics Cookies'}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {i18n.language === 'es'
                      ? 'Estas cookies nos ayudan a entender cómo interactúa con nuestro sitio.'
                      : 'These cookies help us understand how you interact with our site.'}
                  </p>
                </div>
                <div className="relative">
                  <input 
                    type="checkbox" 
                    checked={analyticsEnabled} 
                    onChange={() => setAnalyticsEnabled(!analyticsEnabled)}
                    className="sr-only" 
                    id="analytics-toggle"
                  />
                  <label htmlFor="analytics-toggle" className="cursor-pointer">
                    <div className={`block w-14 h-8 rounded-full transition-colors ${analyticsEnabled ? 'bg-primary-600' : 'bg-gray-300'}`}></div>
                    <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform ${analyticsEnabled ? 'translate-x-6' : ''}`}></div>
                  </label>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex justify-end space-x-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            >
              {i18n.language === 'es' ? 'Cancelar' : 'Cancel'}
            </button>
            <button
              onClick={saveSettings}
              className="px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors"
            >
              {i18n.language === 'es' ? 'Guardar Preferencias' : 'Save Preferences'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieSettings;
