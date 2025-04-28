import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { trackEvent } from '../../utils/analytics';

const ContactForm = () => {
  const { t, i18n } = useTranslation();
  const isSpanish = i18n.language === 'es';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Form intro translations
  const formIntro = {
    title: {
      en: "Let's Work Together",
      es: "Trabajemos Juntos"
    },
    subtitle: {
      en: "Fill out the form below and we'll get back to you within 24 hours",
      es: "Complete el formulario a continuación y nos pondremos en contacto con usted dentro de las 24 horas"
    },
    privacyNotice: {
      en: "By submitting this form, you agree to our privacy policy.",
      es: "Al enviar este formulario, acepta nuestra política de privacidad."
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // FormSpark submission
      const response = await fetch('https://submit-form.com/yfCeTvbHe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      if (!response.ok) {
        throw new Error('Form submission failed');
      }
      
      // Track form submission in Google Analytics
      trackEvent('form_submission', {
        form_name: 'contact_form',
        form_success: true
      });
      
      // NEW CODE: Track a GA4 event directly
if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
  window.gtag('event', 'send_message', {
    event_category: 'contact',
    event_label: 'Contact Form Submission',
    value: 1
  });
}
      // Show success message
      setFormStatus({
        submitted: true,
        success: true,
        message: t('contact.form.successMessage') || 'Thank you for your message! We will get back to you soon.'
      });
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      
      // Track form error in Google Analytics
      trackEvent('form_submission', {
        form_name: 'contact_form',
        form_success: false,
        error_message: error.message || 'Unknown error'
      });
      
      setFormStatus({
        submitted: true,
        success: false,
        message: t('contact.form.errorMessage') || 'There was an error sending your message. Please try again or contact us directly.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-primary-500 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-100 rounded-full opacity-50"></div>
      <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-secondary-100 rounded-full opacity-50"></div>
      
      {/* Form header */}
      <div className="relative mb-8 text-center">
        <h3 className="text-2xl font-bold text-primary-700 mb-2">
          {isSpanish ? formIntro.title.es : formIntro.title.en}
        </h3>
        <p className="text-gray-600">
          {isSpanish ? formIntro.subtitle.es : formIntro.subtitle.en}
        </p>
      </div>
      
      {formStatus.submitted && formStatus.success ? (
        <div className="text-center py-8 relative">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary-100 text-primary-600 mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold mb-4 text-primary-700">Message Sent!</h3>
          <p className="text-gray-600 mb-6">{formStatus.message}</p>
          <button 
            onClick={() => setFormStatus({ submitted: false, success: false, message: '' })}
            className="btn bg-secondary-600 text-white hover:bg-secondary-700 focus:ring-secondary-500 transform hover:scale-105 transition-all"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} action="https://submit-form.com/yfCeTvbHe" className="relative">
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              {t('contact.form.name')} *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
              placeholder={t('contact.form.name')}
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                {t('contact.form.email')} *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                placeholder={t('contact.form.email')}
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                {t('contact.form.phone')}
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                placeholder={t('contact.form.phone')}
              />
            </div>
          </div>
          
          <div className="mb-8">
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
              {t('contact.form.message')} *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
              placeholder={t('contact.form.message')}
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            className="btn bg-secondary-600 text-white hover:bg-secondary-700 focus:ring-secondary-500 w-full py-4 text-lg font-bold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </span>
            ) : t('contact.form.submit')}
          </button>
          
          <div className="mt-4 text-center text-sm text-gray-500">
            {isSpanish ? formIntro.privacyNotice.es : formIntro.privacyNotice.en}
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
