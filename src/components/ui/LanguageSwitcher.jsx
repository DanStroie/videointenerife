import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = ({ isScrolled }) => {
  const { i18n, t } = useTranslation();
  
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="relative inline-block text-left">
      <div className="flex items-center space-x-2">
        <button
          type="button"
          onClick={() => changeLanguage('en')}
          className={`px-2 py-1 text-sm font-medium rounded transition-colors ${
            i18n.language === 'en'
              ? 'bg-secondary-600 text-white'
              : isScrolled
                ? 'text-dark hover:bg-gray-100'
                : 'text-white hover:bg-white/10'
          }`}
        >
          EN
        </button>
        <button
          type="button"
          onClick={() => changeLanguage('es')}
          className={`px-2 py-1 text-sm font-medium rounded transition-colors ${
            i18n.language === 'es'
              ? 'bg-secondary-600 text-white'
              : isScrolled
                ? 'text-dark hover:bg-gray-100'
                : 'text-white hover:bg-white/10'
          }`}
        >
          ES
        </button>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
