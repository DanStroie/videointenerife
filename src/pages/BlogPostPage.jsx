import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { getPostBySlug } from '../data/blogPosts';
import { useSEO } from '../utils/seo';
import BlogPostContent from '../components/blog/BlogPostContent';
import CallToAction from '../components/home/CallToAction';

const BlogPostPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();
  
  // Get the post data
  const post = getPostBySlug(slug);
  
  // Redirect to blog list if post not found
  useEffect(() => {
    if (!post) {
      navigate('/blog');
    }
  }, [post, navigate]);
  
  // Set SEO metadata
  useSEO({
    title: post?.metaTitle || `${post?.title} | DSF Media`,
    description: post?.metaDescription || post?.excerpt,
    keywords: post?.metaKeywords,
    image: post?.featuredImage,
    url: window.location.href
  });
  
  if (!post) return null;

  return (
    <>
      <section className="pt-32 pb-12 bg-gradient-to-b from-primary-800 to-primary-700 text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-6">
              {t('blog.title')}
            </h1>
          </div>
        </div>
      </section>
      
      <section className="py-12">
        <div className="container">
          <BlogPostContent post={post} />
        </div>
      </section>
      
      <CallToAction />
    </>
  );
};

export default BlogPostPage;
