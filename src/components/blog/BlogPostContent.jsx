import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { formatDate, getRelatedPosts } from '../../data/blogPosts';
import BlogCard from './BlogCard';

const BlogPostContent = ({ post }) => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const isSpanish = i18n.language === 'es';
  
  // Get related posts based on the first category
  const relatedPosts = getRelatedPosts(post.id, post.categories[0], 3);
  
  return (
    <div className="max-w-4xl mx-auto">
      {/* Back to blog link */}
      <div className="mb-8">
        <button 
          onClick={() => navigate('/blog')}
          className="flex items-center text-primary-600 hover:text-primary-700 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          {t('blog.backToList')}
        </button>
      </div>
      
      {/* Post header */}
      <header className="mb-8">
        <div className="flex items-center mb-4">
          <span className="bg-primary-100 text-primary-800 text-sm font-medium px-3 py-1 rounded-full">
            {t(`blog.categories.${post.categories[0]}`)}
          </span>
          <span className="mx-2 text-gray-300">•</span>
          <span className="text-gray-500">
            {formatDate(post.publishDate)}
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold font-display mb-6 text-primary-800">
          {post.title}
        </h1>
        <div className="flex items-center">
          <img 
            src={post.authorImage} 
            alt={post.author} 
            className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-secondary-400"
          />
          <div>
            <span className="block text-gray-900 font-medium">{post.author}</span>
            <span className="block text-gray-500">{post.authorRole}</span>
          </div>
        </div>
      </header>
      
      {/* Featured image */}
      <div className="mb-8 rounded-xl overflow-hidden">
        <img 
          src={post.featuredImage} 
          alt={post.title} 
          className="w-full h-auto"
        />
      </div>
      
      {/* Post content */}
      <article className="prose prose-lg max-w-none mb-12">
        <div dangerouslySetInnerHTML={{ __html: isSpanish && post.contentES ? post.contentES : post.content }} />
      </article>
      
      {/* Share links */}
      <div className="border-t border-gray-200 pt-8 mb-12">
        <h3 className="text-lg font-bold mb-4 text-primary-700">{t('blog.shareArticle')}</h3>
        <div className="flex space-x-4">
          <a 
            href={`https://twitter.com/intent/tweet?text=${post.title}&url=${window.location.href}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-secondary-600 transition-colors"
            aria-label="Share on Twitter"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
            </svg>
          </a>
          <a 
            href={`https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-secondary-600 transition-colors"
            aria-label="Share on Facebook"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
            </svg>
          </a>
          <a 
            href={`https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}&title=${post.title}&summary=${post.excerpt}&source=DSF Media`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-secondary-600 transition-colors"
            aria-label="Share on LinkedIn"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
            </svg>
          </a>
          <a 
            href={`mailto:?subject=${post.title}&body=Check out this article: ${window.location.href}`}
            className="text-gray-500 hover:text-secondary-600 transition-colors"
            aria-label="Share via Email"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </a>
        </div>
      </div>
      
      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <div className="border-t border-gray-200 pt-12">
          <h2 className="text-2xl font-bold mb-8 text-primary-700">{t('blog.relatedArticles')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map(relatedPost => (
              <BlogCard key={relatedPost.id} post={relatedPost} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogPostContent;
