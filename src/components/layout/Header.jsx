import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../ui/LanguageSwitcher';

const Header = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const location = useLocation();

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setShowServicesDropdown(false);
  }, [location]);

  // Handle scroll event to change header style
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setShowServicesDropdown(false);
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-sm py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center" onClick={closeMenu}>
          <span className="text-xl font-bold font-display tracking-wide">
            {isScrolled ? (
              <span className="text-primary-600">DSF Media</span>
            ) : (
              <span className="text-white">DSF Media</span>
            )}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `font-medium transition-colors ${
                isActive 
                  ? 'text-secondary-600' 
                  : isScrolled 
                    ? 'text-dark hover:text-primary-600' 
                    : 'text-white hover:text-primary-200'
              }`
            }
          >
            {t('navigation.home')}
          </NavLink>
          
          {/* Services with Dropdown */}
          <div 
            className="relative group"
          >
            <NavLink 
              to="/services" 
              className={({ isActive }) => 
                `font-medium transition-colors flex items-center ${
                  isActive 
                    ? 'text-secondary-600' 
                    : isScrolled 
                      ? 'text-dark hover:text-primary-600' 
                      : 'text-white hover:text-primary-200'
                }`
              }
            >
              <span>{t('navigation.services')}</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 ml-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </NavLink>
            
            {/* Dropdown Menu */}
            <div className="absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="py-1" role="menu" aria-orientation="vertical">
                <Link
                  to="/services/business"
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                  role="menuitem"
                >
                  {t('services.business.title')}
                </Link>
                <Link
                  to="/services/production"
                  className="block px-4 py-3 text-sm text-gray-700 hover:bg-primary-50 hover:text-primary-600 transition-colors"
                  role="menuitem"
                >
                  {t('services.production.title')}
                </Link>
              </div>
            </div>
          </div>

          <NavLink 
            to="/portfolio" 
            className={({ isActive }) => 
              `font-medium transition-colors ${
                isActive 
                  ? 'text-secondary-600' 
                  : isScrolled 
                    ? 'text-dark hover:text-primary-600' 
                    : 'text-white hover:text-primary-200'
              }`
            }
          >
            {t('navigation.portfolio')}
          </NavLink>
          <NavLink 
            to="/blog" 
            className={({ isActive }) => 
              `font-medium transition-colors ${
                isActive 
                  ? 'text-secondary-600' 
                  : isScrolled 
                    ? 'text-dark hover:text-primary-600' 
                    : 'text-white hover:text-primary-200'
              }`
            }
          >
            {t('navigation.blog')}
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              `font-medium transition-colors ${
                isActive 
                  ? 'text-secondary-600' 
                  : isScrolled 
                    ? 'text-dark hover:text-primary-600' 
                    : 'text-white hover:text-primary-200'
              }`
            }
          >
            {t('navigation.about')}
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              `font-medium transition-colors ${
                isActive 
                  ? 'text-secondary-600' 
                  : isScrolled 
                    ? 'text-dark hover:text-primary-600' 
                    : 'text-white hover:text-primary-200'
              }`
            }
          >
            {t('navigation.contact')}
          </NavLink>
          
          <LanguageSwitcher isScrolled={isScrolled} />
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <LanguageSwitcher isScrolled={isScrolled} />
          
          <button 
            onClick={toggleMenu}
            className="ml-4 p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className={`h-6 w-6 transition-colors ${
                isScrolled ? 'text-dark' : 'text-white'
              }`} 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`fixed inset-0 bg-dark z-40 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden`}
        >
          <div className="flex flex-col h-full p-6">
            <div className="flex justify-between items-center mb-8">
              <Link to="/" className="flex items-center" onClick={closeMenu}>
                <span className="text-xl font-bold font-display tracking-wide text-white">
                  DSF Media
                </span>
              </Link>
              <button 
                onClick={closeMenu}
                className="p-2 focus:outline-none"
                aria-label="Close menu"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-6 w-6 text-white" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <nav className="flex flex-col space-y-6 text-xl">
              <NavLink 
                to="/" 
                className={({ isActive }) => 
                  `font-medium transition-colors ${
                    isActive ? 'text-secondary-500' : 'text-white hover:text-primary-300'
                  }`
                }
                onClick={closeMenu}
              >
                {t('navigation.home')}
              </NavLink>
              <NavLink 
                to="/services" 
                className={({ isActive }) => 
                  `font-medium transition-colors ${
                    isActive ? 'text-secondary-500' : 'text-white hover:text-primary-300'
                  }`
                }
                onClick={closeMenu}
              >
                {t('navigation.services')}
              </NavLink>
              <NavLink 
                to="/portfolio" 
                className={({ isActive }) => 
                  `font-medium transition-colors ${
                    isActive ? 'text-secondary-500' : 'text-white hover:text-primary-300'
                  }`
                }
                onClick={closeMenu}
              >
                {t('navigation.portfolio')}
              </NavLink>
              <NavLink 
                to="/blog" 
                className={({ isActive }) => 
                  `font-medium transition-colors ${
                    isActive ? 'text-secondary-500' : 'text-white hover:text-primary-300'
                  }`
                }
                onClick={closeMenu}
              >
                {t('navigation.blog')}
              </NavLink>
              <NavLink 
                to="/about" 
                className={({ isActive }) => 
                  `font-medium transition-colors ${
                    isActive ? 'text-secondary-500' : 'text-white hover:text-primary-300'
                  }`
                }
                onClick={closeMenu}
              >
                {t('navigation.about')}
              </NavLink>
              <NavLink 
                to="/contact" 
                className={({ isActive }) => 
                  `font-medium transition-colors ${
                    isActive ? 'text-secondary-500' : 'text-white hover:text-primary-300'
                  }`
                }
                onClick={closeMenu}
              >
                {t('navigation.contact')}
              </NavLink>
            </nav>
            
            <div className="mt-auto">
              <Link 
                to="/contact" 
                className="btn bg-secondary-600 text-white hover:bg-secondary-700 focus:ring-secondary-500 w-full"
                onClick={closeMenu}
              >
                {t('cta.quote')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
