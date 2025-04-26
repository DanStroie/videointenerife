import React from 'react';
import { useTranslation } from 'react-i18next';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../components/contact/ContactInfo';
import { useSEO } from '../utils/seo';

const ContactPage = () => {
  const { t } = useTranslation();
  
  // Set SEO metadata
  useSEO({
    title: `${t('contact.title')} | DSF Media`,
    description: t('contact.subtitle'),
    keywords: 'video production contact, Tenerife videographer, professional video services'
  });

  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary-800 to-primary-700 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">
              {t('contact.title')}
            </h1>
            <p className="text-xl text-white/80">
              {t('contact.subtitle')}
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 transform hover:translate-y-[-5px] transition-all duration-300">
              <ContactForm />
            </div>
            <div className="transform hover:translate-y-[-5px] transition-all duration-300">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 transform hover:shadow-xl transition-all duration-300">
              <div className="aspect-[16/9] w-full">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28015.00456534762!2d-16.54126233022461!3d28.389722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc6a7f2fb2e56c77%3A0x9a6dd50d4a4be8e0!2sLa%20Orotava%2C%20Santa%20Cruz%20de%20Tenerife%2C%20Spain!5e0!3m2!1sen!2ses!4v1714302845830!5m2!1sen!2ses" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="DSF Media location map"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
