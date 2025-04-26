// Google Analytics utility functions

/**
 * Initialize Google Analytics
 */
export const initializeAnalytics = () => {
  // Only load GA script if it hasn't been loaded already
  if (!window.gtag) {
    // Create script element
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-881SST4TXT';
    script.async = true;
    document.head.appendChild(script);
    
    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', 'G-881SST4TXT', {
      anonymize_ip: true, // Anonymize IP for GDPR compliance
    });
    
    window.gtag = gtag;
    
    // Track initial page view
    trackPageView(window.location.pathname, document.title);
  }
};

/**
 * Disable Google Analytics tracking
 */
export const disableAnalytics = () => {
  // Set a flag to prevent tracking
  window.doNotTrack = true;
  
  // Disable existing gtag if it exists
  if (window.gtag) {
    window.gtag = function() {
      // This is a no-op function that prevents tracking
      return;
    };
  }
  
  // Optionally, you could also remove the GA cookies
  document.cookie.split(';').forEach(function(c) {
    if (c.trim().startsWith('_ga=') || c.trim().startsWith('_gid=') || c.trim().startsWith('_gat=')) {
      document.cookie = c.replace(/^ +/, '').replace(/=.*/, '=;expires=' + new Date().toUTCString() + ';path=/');
    }
  });
};

/**
 * Track a page view in Google Analytics
 * @param {string} path - The page path to track
 * @param {string} title - The page title
 */
export const trackPageView = (path, title) => {
  // Check if tracking is allowed
  if (window.doNotTrack || localStorage.getItem('cookieConsent') === 'declined') {
    return;
  }
  
  if (window.gtag) {
    window.gtag('config', 'G-881SST4TXT', {
      page_path: path,
      page_title: title
    });
  }
};

/**
 * Track an event in Google Analytics
 * @param {string} action - The event action
 * @param {Object} params - Additional event parameters
 */
export const trackEvent = (action, params = {}) => {
  // Check if tracking is allowed
  if (window.doNotTrack || localStorage.getItem('cookieConsent') === 'declined') {
    return;
  }
  
  if (window.gtag) {
    window.gtag('event', action, params);
  }
};

/**
 * Check if user has given consent for cookies
 * @returns {boolean} - Whether user has accepted cookies
 */
export const hasAnalyticsConsent = () => {
  return localStorage.getItem('cookieConsent') === 'accepted';
};

/**
 * Reset cookie consent (for testing purposes)
 */
export const resetCookieConsent = () => {
  localStorage.removeItem('cookieConsent');
  window.location.reload();
};
