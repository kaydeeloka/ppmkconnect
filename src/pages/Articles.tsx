import React from 'react'
import { FileText, Calendar, User, Eye, Heart, Share2, Search, Filter } from 'lucide-react'

const Articles = () => {
  const featuredArticle = {
    id: 1,
    title: 'Complete Guide to Korean University Applications for Malaysian Students',
    excerpt: 'Everything you need to know about applying to Korean universities, from choosing the right program to securing scholarships and preparing for life in Korea.',
    author: 'Dr. Ahmad Rahman',
    date: '2024-01-20',
    readTime: '12 min read',
    views: 2450,
    likes: 89,
    category: 'Academic',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=400&fit=crop',
    featured: true
  }

  const articles = [
    {
      id: 2,
      title: 'Navigating Korean Healthcare System as an International Student',
      excerpt: 'A comprehensive guide to understanding health insurance, finding doctors, and accessing medical services in Korea.',
      author: 'Sarah Lim',
      date: '2024-01-18',
      readTime: '8 min read',
      views: 1820,
      likes: 67,
      category: 'Living',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=400&h=250&fit=crop'
    },
    {
      id: 3,
      title: 'Top 10 Korean Language Learning Resources for Beginners',
      excerpt: 'Discover the best apps, websites, and study methods to master Korean language effectively.',
      author: 'Muhammad Faiz',
      date: '2024-01-15',
      readTime: '6 min read',
      views: 3200,
      likes: 124,
      category: 'Language',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop'
    },
    {
      id: 4,
      title: 'Building Professional Networks in Korea: A Student\'s Guide',
      excerpt: 'Learn how to build meaningful professional relationships and expand your network while studying in Korea.',
      author: 'Lisa Wong',
      date: '2024-01-12',
      readTime: '10 min read',
      views: 1650,
      likes: 78,
      category: 'Career',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop'
    },
    {
      id: 5,
      title: 'Korean Cultural Etiquette: Do\'s and Don\'ts for Malaysian Students',
      excerpt: 'Understanding Korean social norms and cultural practices to help you integrate better into Korean society.',
      author: 'Aminah Hassan',
      date: '2024-01-10',
      readTime: '7 min read',
      views: 2100,
      likes: 95,
      category: 'Culture',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop'
    },
    {
      id: 6,
      title: 'Scholarship Opportunities for Malaysian Students in Korea 2024',
      excerpt: 'Complete list of available scholarships, application requirements, and tips for successful applications.',
      author: 'Dr. Raj Kumar',
      date: '2024-01-08',
      readTime: '15 min read',
      views: 4500,
      likes: 189,
      category: 'Academic',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop'
    }
  ]

  const categories = [
    { name: 'All', count: 25, active: true },
    { name: 'Academic', count: 8, active: false },
    { name: 'Living', count: 6, active: false },
    { name: 'Career', count: 4, active: false },
    { name: 'Culture', count: 5, active: false },
    { name: 'Language', count: 2, active: false }
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Academic': return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'Living': return 'bg-green-100 text-green-800 border-green-200'
      case 'Career': return 'bg-purple-100 text-purple-800 border-purple-200'
      case 'Culture': return 'bg-orange-100 text-orange-800 border-orange-200'
      case 'Language': return 'bg-pink-100 text-pink-800 border-pink-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  return (
    <div className="pt-8 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Articles & Resources</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover helpful articles, guides, and resources written by and for Malaysian students in Korea.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-12 border border-gray-200">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Filter className="w-5 h-5" />
              <span>Filter</span>
            </button>
          </div>
          
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mt-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  category.active
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Featured Article */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Article</h2>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={featuredArticle.image} 
                  alt={featuredArticle.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(featuredArticle.category)}`}>
                    {featuredArticle.category}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 border border-yellow-200">
                    Featured
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{featuredArticle.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{featuredArticle.excerpt}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{featuredArticle.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(featuredArticle.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <span>{featuredArticle.readTime}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>{featuredArticle.views.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Heart className="w-4 h-4" />
                      <span>{featuredArticle.likes}</span>
                    </div>
                  </div>
                  <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    Read Article
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Recent Articles</h2>
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {articles.map((article) => (
              <div key={article.id} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(article.category)}`}>
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-500">{article.readTime}</span>
                  </div>
                  
                  <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">{article.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <User className="w-3 h-3" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(article.date).toLocaleDateString()}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 text-xs text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-3 h-3" />
                        <span>{article.views.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Heart className="w-3 h-3" />
                        <span>{article.likes}</span>
                      </div>
                    </div>
                    <button className="text-blue-600 text-sm font-medium hover:text-blue-700">
                      Read More →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-white rounded-xl shadow-lg p-12 text-center border border-gray-200">
          <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6">
            <FileText className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Share Your Experience</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Have valuable insights or experiences to share with fellow Malaysian students? 
            We welcome contributions from our community members.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Submit an Article
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Writing Guidelines
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Articles
