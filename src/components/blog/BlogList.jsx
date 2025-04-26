import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import BlogCard from './BlogCard';
import blogPosts from '../../data/blogPosts';

const BlogList = () => {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  
  // Filter posts when category or search query changes
  useEffect(() => {
    let result = blogPosts;
    
    // Apply category filter
    if (activeCategory !== 'all') {
      result = result.filter(post => post.categories.includes(activeCategory));
    }
    
    // Apply search filter
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      result = result.filter(post => 
        post.title.toLowerCase().includes(query) || 
        post.excerpt.toLowerCase().includes(query) ||
        post.content.toLowerCase().includes(query) ||
        post.author.toLowerCase().includes(query)
      );
    }
    
    setFilteredPosts(result);
  }, [activeCategory, searchQuery]);
  
  return (
    <div>
      {/* Search and Filter */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeCategory === 'all'
                  ? 'bg-secondary-600 text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {t('blog.categories.all')}
            </button>
            <button
              onClick={() => setActiveCategory('videoProduction')}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeCategory === 'videoProduction'
                  ? 'bg-secondary-600 text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {t('blog.categories.videoProduction')}
            </button>
            <button
              onClick={() => setActiveCategory('socialMedia')}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeCategory === 'socialMedia'
                  ? 'bg-secondary-600 text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {t('blog.categories.socialMedia')}
            </button>
            <button
              onClick={() => setActiveCategory('marketing')}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeCategory === 'marketing'
                  ? 'bg-secondary-600 text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {t('blog.categories.marketing')}
            </button>
            <button
              onClick={() => setActiveCategory('tenerife')}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeCategory === 'tenerife'
                  ? 'bg-secondary-600 text-white'
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              {t('blog.categories.tenerife')}
            </button>
          </div>
          
          {/* Search */}
          <div className="relative">
            <input
              type="text"
              placeholder={t('blog.searchPlaceholder')}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full md:w-64 px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
            />
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Blog Posts Grid */}
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <BlogCard 
              key={post.id} 
              post={post} 
              featured={index === 0 && filteredPosts.length > 3} 
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-16 w-16 text-gray-300 mx-auto mb-4" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="text-xl font-bold text-gray-700 mb-2">{t('blog.noResults')}</h3>
          <p className="text-gray-500">
            Try adjusting your search or filter to find what you're looking for.
          </p>
          <button 
            onClick={() => {
              setActiveCategory('all');
              setSearchQuery('');
            }}
            className="mt-4 px-4 py-2 bg-secondary-600 text-white rounded-lg hover:bg-secondary-700 transition-colors"
          >
            {t('blog.categories.all')}
          </button>
        </div>
      )}
    </div>
  );
};

export default BlogList;
