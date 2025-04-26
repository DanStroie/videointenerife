import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSEO } from '../utils/seo';
import BlogList from '../components/blog/BlogList';
import CallToAction from '../components/home/CallToAction';

const BlogPage = () => {
  const { t } = useTranslation();
  
  // Set SEO metadata
  useSEO({
    title: `${t('blog.title')} | DSF Media`,
    description: t('blog.subtitle'),
    keywords: 'video production blog, social media tips, Tenerife marketing, video content creation'
  });

  return (
    <>
      <section className="pt-32 pb-20 bg-gradient-to-b from-primary-800 to-primary-700 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">
              {t('blog.title')}
            </h1>
            <p className="text-xl text-white/80">
              {t('blog.subtitle')}
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-20">
        <div className="container">
          <BlogList />
        </div>
      </section>
      
      <CallToAction />
    </>
  );
};

export default BlogPage;
