import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSEO } from '../utils/seo';

const PrivacyPage = () => {
  const { t, i18n } = useTranslation();
  const isSpanish = i18n.language === 'es';
  
  // Set SEO metadata
  useSEO({
    title: `${isSpanish ? 'Política de Privacidad' : 'Privacy Policy'} | DSF Media`,
    description: isSpanish ? 'Política de privacidad de DSF Media' : 'Privacy Policy for DSF Media',
    keywords: isSpanish ? 'política de privacidad, protección de datos, DSF Media' : 'privacy policy, data protection, DSF Media'
  });

  return (
    <>
      <section className="pt-32 pb-12 bg-gradient-to-b from-primary-800 to-primary-700 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">
              {isSpanish ? 'Política de Privacidad' : 'Privacy Policy'}
            </h1>
          </div>
        </div>
      </section>
      
      <section className="py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-8">
            {isSpanish ? (
              // Spanish version
              <>
                <p className="text-gray-600 mb-6">Fecha Efectiva: 26.04.2025</p>
                
                <p className="mb-6">Bienvenido a videointenerife.com ("Sitio Web"), operado por DSF Media Film SRL, una empresa registrada en Rumanía, Unión Europea ("nosotros," "nuestro," "nos").</p>
                
                <p className="mb-8">Estamos comprometidos con la protección de su privacidad y la seguridad de su información personal.</p>
                
                <h2 className="text-2xl font-bold mb-4 text-primary-700">1. Información que Recopilamos</h2>
                <p className="mb-2"><strong>Información Personal:</strong> Si completa un formulario de contacto, podemos recopilar su nombre, dirección de correo electrónico, número de teléfono y cualquier otra información que elija proporcionar.</p>
                <p className="mb-6"><strong>Datos de Uso:</strong> Recopilamos datos anonimizados sobre el uso del sitio web a través de herramientas como Google Analytics (por ejemplo, páginas visitadas, tiempo de permanencia, tipo de dispositivo).</p>
                
                <h2 className="text-2xl font-bold mb-4 text-primary-700">2. Cómo Utilizamos su Información</h2>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Para responder a sus consultas y proporcionarle la información solicitada sobre nuestros servicios de producción de video.</li>
                  <li>Para mejorar la funcionalidad y la experiencia del usuario de nuestro sitio web.</li>
                  <li>Para cumplir con las obligaciones legales.</li>
                </ul>
                
                <h2 className="text-2xl font-bold mb-4 text-primary-700">3. Compartición de Datos</h2>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>No vendemos, comerciamos ni alquilamos su información personal a terceros.</li>
                  <li>Podemos compartir datos con proveedores de servicios de confianza (por ejemplo, proveedores de alojamiento, servicios de análisis) únicamente para operar el sitio web.</li>
                </ul>
                
                <h2 className="text-2xl font-bold mb-4 text-primary-700">4. Seguridad de Datos</h2>
                <p className="mb-6">Implementamos medidas técnicas y organizativas apropiadas para proteger su información personal.</p>
                
                <h2 className="text-2xl font-bold mb-4 text-primary-700">5. Sus Derechos</h2>
                <p className="mb-2">Como residente de la Unión Europea, tiene derecho a:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Acceder, actualizar o eliminar sus datos personales.</li>
                  <li>Oponerse o restringir cierto procesamiento.</li>
                  <li>Retirar el consentimiento en cualquier momento.</li>
                </ul>
                <p className="mb-6">Las solicitudes relacionadas con sus datos pueden enviarse por correo electrónico a: danstroiefilm@gmail.com</p>
                
                <h2 className="text-2xl font-bold mb-4 text-primary-700">6. Cookies</h2>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Nuestro sitio web utiliza cookies para mejorar su experiencia de navegación.</li>
                  <li>Puede controlar la configuración de cookies a través de las preferencias de su navegador.</li>
                </ul>
                
                <h2 className="text-2xl font-bold mb-4 text-primary-700">7. Cambios en esta Política de Privacidad</h2>
                <p className="mb-6">Nos reservamos el derecho de actualizar esta Política de Privacidad en cualquier momento. Cualquier cambio se publicará en esta página con una "Fecha Efectiva" actualizada.</p>
              </>
            ) : (
              // English version
              <>
                <p className="text-gray-600 mb-6">Effective Date: 26.04.2025</p>
                
                <p className="mb-6">Welcome to videointenerife.com ("Website"), operated by DSF Media Film SRL, a company registered in Romania, European Union ("we," "our," "us").</p>
                
                <p className="mb-8">We are committed to protecting your privacy and ensuring the security of your personal information.</p>
                
                <h2 className="text-2xl font-bold mb-4 text-primary-700">1. Information We Collect</h2>
                <p className="mb-2"><strong>Personal Information:</strong> If you fill out a contact form, we may collect your name, email address, phone number, and any other information you choose to provide.</p>
                <p className="mb-6"><strong>Usage Data:</strong> We collect anonymized data on website usage through tools such as Google Analytics (e.g., pages visited, time spent, device type).</p>
                
                <h2 className="text-2xl font-bold mb-4 text-primary-700">2. How We Use Your Information</h2>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>To respond to your inquiries and provide you with requested information about our video production services.</li>
                  <li>To improve the functionality and user experience of our website.</li>
                  <li>To comply with legal obligations.</li>
                </ul>
                
                <h2 className="text-2xl font-bold mb-4 text-primary-700">3. Data Sharing</h2>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>We do not sell, trade, or rent your personal information to third parties.</li>
                  <li>We may share data with trusted service providers (e.g., hosting providers, analytics services) solely to operate the website.</li>
                </ul>
                
                <h2 className="text-2xl font-bold mb-4 text-primary-700">4. Data Security</h2>
                <p className="mb-6">We implement appropriate technical and organizational measures to protect your personal information.</p>
                
                <h2 className="text-2xl font-bold mb-4 text-primary-700">5. Your Rights</h2>
                <p className="mb-2">As a resident of the European Union, you have the right to:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                  <li>Access, update, or delete your personal data.</li>
                  <li>Object to or restrict certain processing.</li>
                  <li>Withdraw consent at any time.</li>
                </ul>
                <p className="mb-6">Requests regarding your data can be submitted via email to: danstroiefilm@gmail.com</p>
                
                <h2 className="text-2xl font-bold mb-4 text-primary-700">6. Cookies</h2>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Our website uses cookies to enhance your browsing experience.</li>
                  <li>You can control cookie settings through your browser preferences.</li>
                </ul>
                
                <h2 className="text-2xl font-bold mb-4 text-primary-700">7. Changes to this Privacy Policy</h2>
                <p className="mb-6">We reserve the right to update this Privacy Policy at any time. Any changes will be posted on this page with an updated "Effective Date."</p>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPage;
