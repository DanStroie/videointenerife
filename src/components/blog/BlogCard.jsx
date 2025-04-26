import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { formatDate } from '../../data/blogPosts';

const BlogCard = ({ post, featured = false }) => {
  const { t, i18n } = useTranslation();
  const isSpanish = i18n.language === 'es';
  
  return (
    <Link 
      to={`/blog/${post.slug}`} 
      className={`card overflow-hidden flex flex-col h-full group ${featured ? 'md:col-span-2' : ''}`}
    >
      <div className={`relative overflow-hidden ${featured ? 'aspect-[16/9]' : 'aspect-video'}`}>
        <img 
          src={post.featuredImage} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
          <div className="p-6">
            <span className="text-primary-300 text-sm font-medium block mb-1">
              {t(`blog.categories.${post.categories[0]}`)}
            </span>
            <h3 className="text-white text-xl font-bold">
              {post.title}
            </h3>
          </div>
        </div>
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <div className="mb-2 flex items-center">
          <span className="text-primary-600 text-sm font-medium">
            {t(`blog.categories.${post.categories[0]}`)}
          </span>
          <span className="mx-2 text-gray-300">•</span>
          <span className="text-gray-500 text-sm">
            {formatDate(post.publishDate)}
          </span>
        </div>
        <h3 className="text-xl font-bold mb-3 group-hover:text-primary-600 transition-colors">
          {post.title}
        </h3>
        <p className="text-gray-600 mb-4 flex-grow">
          {isSpanish && post.excerptES ? post.excerptES : post.excerpt}
        </p>
        <div className="flex items-center mt-auto">
          <img 
            src={post.authorImage} 
            alt={post.author} 
            className="w-10 h-10 rounded-full object-cover mr-3 border-2 border-secondary-200"
          />
          <div>
            <span className="block text-gray-900 font-medium">{post.author}</span>
            <span className="block text-gray-500 text-sm">{post.authorRole}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
