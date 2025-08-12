import React from 'react'
import { Calendar, User, Clock, BookOpen, TrendingUp, Award, Globe, Heart } from 'lucide-react'

const Articles = () => {
  const featuredArticles = [
    {
      id: 1,
      title: 'Navigating Korean University Life: A Malaysian Student\'s Guide',
      excerpt: 'From classroom etiquette to making Korean friends, discover essential tips for thriving in Korean academic culture...',
      author: 'Ahmad Rahman',
      date: '2024-01-20',
      readTime: '8 min read',
      category: 'Student Life',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=300&fit=crop',
      featured: true
    },
    {
      id: 2,
      title: 'Scholarship Success Stories: How I Secured Full Funding',
      excerpt: 'Learn from successful scholarship recipients about application strategies, interview tips, and maintaining academic excellence...',
      author: 'Siti Nurhaliza',
      date: '2024-01-18',
      readTime: '12 min read',
      category: 'Scholarships',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=300&fit=crop',
      featured: true
    }
  ]

  const recentArticles = [
    {
      id: 3,
      title: 'Korean Language Learning: From Zero to TOPIK Level 6',
      excerpt: 'A comprehensive roadmap to mastering Korean language with practical study methods and resources...',
      author: 'Lim Wei Ming',
      date: '2024-01-15',
      readTime: '10 min read',
      category: 'Language',
      image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=250&fit=crop'
    },
    {
      id: 4,
      title: 'Finding Halal Food in Korea: A Complete Guide',
      excerpt: 'Discover the best halal restaurants, grocery stores, and cooking tips for Muslim students in Korea...',
      author: 'Fatimah Zahra',
      date: '2024-01-12',
      readTime: '6 min read',
      category: 'Lifestyle',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=250&fit=crop'
    },
    {
      id: 5,
      title: 'Internship Opportunities for International Students',
      excerpt: 'Navigate the Korean job market and secure valuable internship experiences during your studies...',
      author: 'Raj Kumar',
      date: '2024-01-10',
      readTime: '9 min read',
      category: 'Career',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop'
    },
    {
      id: 6,
      title: 'Mental Health and Wellness: Staying Strong Abroad',
      excerpt: 'Essential tips for maintaining mental health and finding support systems while studying in Korea...',
      author: 'Dr. Sarah Lee',
      date: '2024-01-08',
      readTime: '7 min read',
      category: 'Wellness',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=250&fit=crop'
    },
    {
      id: 7,
      title: 'Cultural Adaptation: Embracing Korean Traditions',
      excerpt: 'Learn about Korean customs, festivals, and social norms to better integrate into local culture...',
      author: 'Kim Min-jun',
      date: '2024-01-05',
      readTime: '8 min read',
      category: 'Culture',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop'
    },
    {
      id: 8,
      title: 'Budget-Friendly Living: Student Money Management',
      excerpt: 'Practical tips for managing finances, finding affordable accommodation, and saving money as a student...',
      author: 'Chen Wei Ling',
      date: '2024-01-03',
      readTime: '11 min read',
      category: 'Finance',
      image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop'
    }
  ]

  const categories = [
    { name: 'Student Life', count: 12, icon: BookOpen, color: 'bg-ppmk-dark' },
    { name: 'Academic', count: 8, icon: Award, color: 'bg-ppmk-dark/80' },
    { name: 'Career', count: 6, icon: TrendingUp, color: 'bg-ppmk-dark/60' },
    { name: 'Culture', count: 10, icon: Globe, color: 'bg-ppmk-dark/40' },
    { name: 'Lifestyle', count: 9, icon: Heart, color: 'bg-ppmk-dark/30' }
  ]

  return (
    <div className="pt-8 pb-12 bg-ppmk-light min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="bg-white rounded-xl shadow-lg p-12 border border-ppmk-dark/10">
            <h1 className="text-5xl font-bold text-ppmk-dark mb-6">Articles & Resources</h1>
            <p className="text-xl text-ppmk-dark/80 max-w-4xl mx-auto">
              Discover insights, tips, and experiences shared by Malaysian students in Korea. 
              From academic success to cultural adaptation, find the guidance you need.
            </p>
          </div>
        </div>

        {/* Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-ppmk-dark mb-8 text-center">Article Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((category, index) => {
              const Icon = category.icon
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-4 text-center border border-ppmk-dark/10 hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                  <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                    <Icon className="w-6 h-6 text-ppmk-accent" />
                  </div>
                  <h3 className="font-bold text-ppmk-dark text-sm mb-1">{category.name}</h3>
                  <p className="text-xs text-ppmk-dark/60">{category.count} articles</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Featured Articles */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-ppmk-dark mb-8 text-center">Featured Articles</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredArticles.map((article) => (
              <div key={article.id} className="bg-white rounded-xl shadow-lg overflow-hidden border border-ppmk-dark/10 hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-ppmk-accent/30 text-ppmk-dark px-3 py-1 rounded-full text-sm font-medium">
                      {article.category}
                    </span>
                    <span className="bg-ppmk-dark text-ppmk-accent px-3 py-1 rounded-full text-xs font-medium">
                      FEATURED
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-ppmk-dark mb-3 line-clamp-2">{article.title}</h3>
                  <p className="text-ppmk-dark/70 mb-4 line-clamp-3">{article.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-sm text-ppmk-dark/60 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(article.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-ppmk-dark text-ppmk-accent py-2 rounded-lg font-medium hover:bg-ppmk-dark/90 transition-colors">
                    Read Full Article
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Articles */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-ppmk-dark mb-8 text-center">Recent Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentArticles.map((article) => (
              <div key={article.id} className="bg-white rounded-xl shadow-lg overflow-hidden border border-ppmk-dark/10 hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <span className="bg-ppmk-accent/30 text-ppmk-dark px-3 py-1 rounded-full text-sm font-medium mb-3 inline-block">
                    {article.category}
                  </span>
                  
                  <h3 className="text-xl font-bold text-ppmk-dark mb-3 line-clamp-2">{article.title}</h3>
                  <p className="text-ppmk-dark/70 text-sm mb-4 line-clamp-2">{article.excerpt}</p>
                  
                  <div className="flex items-center justify-between text-xs text-ppmk-dark/60 mb-4">
                    <div className="flex items-center space-x-1">
                      <User className="w-3 h-3" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(article.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  
                  <button className="w-full bg-ppmk-accent/30 text-ppmk-dark py-2 rounded-lg font-medium hover:bg-ppmk-accent/50 transition-colors">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-ppmk-dark rounded-xl shadow-lg p-12 border border-ppmk-dark/10">
            <BookOpen className="w-16 h-16 text-ppmk-accent mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-ppmk-accent mb-6">Share Your Story</h2>
            <p className="text-xl text-ppmk-accent/90 mb-8 max-w-3xl mx-auto">
              Have an experience, tip, or insight to share with fellow Malaysian students? 
              We'd love to feature your story and help others on their Korean journey.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-ppmk-accent text-ppmk-dark px-8 py-3 rounded-lg font-semibold hover:bg-ppmk-accent/90 transition-colors">
                Submit Article
              </button>
              <button className="border-2 border-ppmk-accent text-ppmk-accent px-8 py-3 rounded-lg font-semibold hover:bg-ppmk-accent hover:text-ppmk-dark transition-colors">
                Writing Guidelines
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Articles
