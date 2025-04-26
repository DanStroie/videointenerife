import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

/**
 * Updates document metadata for SEO
 * 
 * @param {Object} options - SEO options
 * @param {string} options.title - Page title
 * @param {string} options.description - Page description
 * @param {string} options.keywords - Page keywords
 * @param {string} options.image - Page image URL
 * @param {string} options.url - Page canonical URL
 */
export const useSEO = ({ 
  title, 
  description, 
  keywords, 
  image = '/images/og-image.jpg',
  url
}) => {
  const { t, i18n } = useTranslation();
  
  useEffect(() => {
    // Set defaults if not provided
    const pageTitle = title || t('seo.defaultTitle');
    const pageDescription = description || t('seo.defaultDescription');
    const pageKeywords = keywords || t('seo.defaultKeywords');
    const pageUrl = url || window.location.href;
    
    // Update document title
    document.title = pageTitle;
    
    // Update meta tags
    const metaTags = {
      description: pageDescription,
      keywords: pageKeywords,
      
      // Open Graph tags
      'og:title': pageTitle,
      'og:description': pageDescription,
      'og:image': new URL(image, window.location.origin).href,
      'og:url': pageUrl,
      'og:type': 'website',
      'og:site_name': 'Clipaya',
      
      // Twitter Card tags
      'twitter:card': 'summary_large_image',
      'twitter:title': pageTitle,
      'twitter:description': pageDescription,
      'twitter:image': new URL(image, window.location.origin).href,
      
      // Language and locale
      'og:locale': i18n.language === 'es' ? 'es_ES' : 'en_US',
      'og:locale:alternate': i18n.language === 'es' ? 'en_US' : 'es_ES'
    };
    
    // Update or create meta tags
    Object.entries(metaTags).forEach(([name, content]) => {
      let meta;
      if (name.startsWith('og:')) {
        meta = document.querySelector(`meta[property="${name}"]`);
        if (!meta) {
          meta = document.createElement('meta');
          meta.setAttribute('property', name);
          document.head.appendChild(meta);
        }
      } else {
        meta = document.querySelector(`meta[name="${name}"]`);
        if (!meta) {
          meta = document.createElement('meta');
          meta.setAttribute('name', name);
          document.head.appendChild(meta);
        }
      }
      meta.setAttribute('content', content);
    });
    
    // Set canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', pageUrl);
    
    // Set alternate language links
    const alternateLinks = document.querySelectorAll('link[rel="alternate"][hreflang]');
    alternateLinks.forEach(link => link.remove());
    
    const languages = ['en', 'es'];
    languages.forEach(lang => {
      if (lang !== i18n.language) {
        const alternateLink = document.createElement('link');
        alternateLink.setAttribute('rel', 'alternate');
        alternateLink.setAttribute('hreflang', lang === 'en' ? 'en-US' : 'es-ES');
        
        // Create URL with alternate language
        const url = new URL(window.location.href);
        // This assumes you're using URL parameters or path segments for language
        // Adjust according to your actual implementation
        alternateLink.setAttribute('href', url.href);
        
        document.head.appendChild(alternateLink);
      }
    });
    
  }, [title, description, keywords, image, url, t, i18n.language]);
};
