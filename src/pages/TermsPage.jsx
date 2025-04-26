import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSEO } from '../utils/seo';

const TermsPage = () => {
  const { t, i18n } = useTranslation();
  const isSpanish = i18n.language === 'es';
  
  // Set SEO metadata
  useSEO({
    title: `${isSpanish ? 'Términos de Servicio' : 'Terms of Service'} | DSF Media`,
    description: isSpanish ? 'Términos de servicio de DSF Media' : 'Terms of Service for DSF Media',
    keywords: isSpanish ? 'términos de servicio, condiciones, DSF Media' : 'terms of service, conditions, DSF Media'
  });

  return (
    <>
      <section className="pt-32 pb-12 bg-gradient-to-b from-primary-800 to-primary-700 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">
              {isSpanish ? 'Términos de Servicio' : 'Terms of Service'}
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
                
                <p className="mb-6">Por favor, lea estos Términos de Servicio ("Términos") cuidadosamente antes de usar videointenerife.com ("Sitio Web"), operado por DSF Media Film SRL ("nosotros," "nuestro," "nos").</p>
                
                <p className="mb-8">Al acceder o utilizar el Sitio Web, acepta estar sujeto a estos Términos.</p>
                
                <h2 className="text-2xl font-bold mb-4 text-primary-700">1. Uso del Sitio Web</h2>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>El Sitio Web proporciona información sobre nuestros servicios de producción de video.</li>
                  <li>Usted acepta utilizar el Sitio Web de manera legal y no participar en ninguna actividad que pueda dañar el Sitio Web o interferir con su funcionamiento.</li>
                </ul>
                
                <h2 className="text-2xl font-bold mb-4 text-primary-700">2. Propiedad Intelectual</h2>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Todo el contenido, incluidos textos, imágenes, videos, gráficos y logotipos, es propiedad de DSF Media Film SRL o sus licenciantes y está protegido por las leyes de derechos de autor y propiedad intelectual.</li>
                  <li>No puede copiar, reproducir, distribuir o crear trabajos derivados sin nuestro consentimiento previo por escrito.</li>
                </ul>
                
                <h2 className="text-2xl font-bold mb-4 text-primary-700">3. Enlaces a Otros Sitios Web</h2>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Nuestro Sitio Web puede contener enlaces a sitios web de terceros.</li>
                  <li>No somos responsables del contenido, políticas o prácticas de ningún sitio de terceros.</li>
                </ul>
                
                <h2 className="text-2xl font-bold mb-4 text-primary-700">4. Limitación de Responsabilidad</h2>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Hacemos esfuerzos razonables para mantener información precisa y actualizada.</li>
                  <li>Sin embargo, no garantizamos la integridad, fiabilidad o disponibilidad del Sitio Web.</li>
                  <li>En la máxima medida permitida por la ley, renunciamos a toda responsabilidad por cualquier daño resultante de su uso del Sitio Web.</li>
                </ul>
                
                <h2 className="text-2xl font-bold mb-4 text-primary-700">5. Ley Aplicable</h2>
                <p className="mb-6">Estos Términos se regirán e interpretarán de acuerdo con las leyes de Rumanía y la Unión Europea.</p>
                
                <h2 className="text-2xl font-bold mb-4 text-primary-700">6. Cambios en los Términos</h2>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Nos reservamos el derecho de modificar estos Términos en cualquier momento.</li>
                  <li>Los cambios se publicarán en esta página con una "Fecha Efectiva" actualizada.</li>
                </ul>
              </>
            ) : (
              // English version
              <>
                <p className="text-gray-600 mb-6">Effective Date: 26.04.2025</p>
                
                <p className="mb-6">Please read these Terms of Service ("Terms") carefully before using videointenerife.com ("Website"), operated by DSF Media Film SRL ("we," "our," "us").</p>
                
                <p className="mb-8">By accessing or using the Website, you agree to be bound by these Terms.</p>
                
                <h2 className="text-2xl font-bold mb-4 text-primary-700">1. Use of Website</h2>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>The Website provides information about our video production services.</li>
                  <li>You agree to use the Website lawfully and not to engage in any activity that may harm the Website or interfere with its operation.</li>
                </ul>
                
                <h2 className="text-2xl font-bold mb-4 text-primary-700">2. Intellectual Property</h2>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>All content, including text, images, videos, graphics, and logos, is the property of DSF Media Film SRL or its licensors and is protected by copyright and intellectual property laws.</li>
                  <li>You may not copy, reproduce, distribute, or create derivative works without our prior written consent.</li>
                </ul>
                
                <h2 className="text-2xl font-bold mb-4 text-primary-700">3. Links to Other Websites</h2>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>Our Website may contain links to third-party websites.</li>
                  <li>We are not responsible for the content, policies, or practices of any third-party sites.</li>
                </ul>
                
                <h2 className="text-2xl font-bold mb-4 text-primary-700">4. Limitation of Liability</h2>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>We make reasonable efforts to maintain accurate and up-to-date information.</li>
                  <li>However, we do not warrant the completeness, reliability, or availability of the Website.</li>
                  <li>To the maximum extent permitted by law, we disclaim all liability for any damages resulting from your use of the Website.</li>
                </ul>
                
                <h2 className="text-2xl font-bold mb-4 text-primary-700">5. Governing Law</h2>
                <p className="mb-6">These Terms shall be governed by and construed in accordance with the laws of Romania and the European Union.</p>
                
                <h2 className="text-2xl font-bold mb-4 text-primary-700">6. Changes to Terms</h2>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                  <li>We reserve the right to modify these Terms at any time.</li>
                  <li>Changes will be posted on this page with an updated "Effective Date."</li>
                </ul>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsPage;
