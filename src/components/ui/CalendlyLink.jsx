import React, { useEffect } from 'react';

const CalendlyLink = ({ text, className }) => {
  useEffect(() => {
    // Load Calendly script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    // Initialize Calendly when script is loaded
    script.onload = () => {
      if (window.Calendly) {
        window.Calendly.initPopupWidget({
          url: 'https://calendly.com/dsfmedia/new-meeting'
        });
      }
    };

    return () => {
      // Clean up if script exists in the DOM
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript && document.body.contains(existingScript)) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  const openCalendly = (e) => {
    e.preventDefault();
    if (window.Calendly) {
      window.Calendly.showPopupWidget('https://calendly.com/dsfmedia/new-meeting');
    }
  };

  return (
    <a 
      href="#" 
      onClick={openCalendly}
      className={className}
    >
      {text}
    </a>
  );
};

export default CalendlyLink;
