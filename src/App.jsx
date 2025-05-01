import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import BusinessServicesPage from './pages/BusinessServicesPage';
import ProductionServicingPage from './pages/ProductionServicingPage';
import PortfolioPage from './pages/PortfolioPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import PrivacyPage from './pages/PrivacyPage';
import TermsPage from './pages/TermsPage';
import CookieConsent from './components/ui/CookieConsent';
import { trackPageView } from './utils/analytics';

function App() {
  const location = useLocation();
  
  // Scroll to top on route change and track page view
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Track page view in Google Analytics
    const pageTitle = document.title;
    trackPageView(location.pathname, pageTitle);
  }, [location.pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/business" element={<BusinessServicesPage />} />
          <Route path="/services/production" element={<ProductionServicingPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
        </Routes>
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
}

export default App;
