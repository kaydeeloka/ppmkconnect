import React, { useState } from 'react'
import { MessageCircle, Users, Heart, Reply, MoreHorizontal, Search, Plus, TrendingUp, Clock, Pin } from 'lucide-react'

const Community = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = [
    { id: 'all', name: 'All Posts', count: 156 },
    { id: 'general', name: 'General', count: 45 },
    { id: 'academic', name: 'Academic Help', count: 32 },
    { id: 'housing', name: 'Housing', count: 28 },
    { id: 'social', name: 'Social Events', count: 25 },
    { id: 'marketplace', name: 'Marketplace', count: 18 },
    { id: 'jobs', name: 'Jobs & Internships', count: 8 }
  ]

  const pinnedPosts = [
    {
      id: 'pinned-1',
      title: 'Welcome to MSKY Community Forum! 📢',
      author: 'Admin Team',
      content: 'Welcome to our community forum! Please read the community guidelines before posting. Let\'s keep this space positive and helpful for everyone.',
      timestamp: '2024-01-01',
      likes: 89,
      replies: 12,
      category: 'general',
      pinned: true,
      avatar: '👨‍💼'
    }
  ]

  const posts = [
    {
      id: 1,
      title: 'Looking for roommate in Hongdae area 🏠',
      author: 'Sarah Kim',
      content: 'Hi everyone! I\'m looking for a female roommate to share a 2-bedroom apartment in Hongdae. Rent is 600,000 KRW per month per person. The place is fully furnished and very close to Hongik University. DM me if interested!',
      timestamp: '2024-01-20T10:30:00',
      likes: 15,
      replies: 8,
      category: 'housing',
      avatar: '👩‍🎓',
      trending: true
    },
    {
      id: 2,
      title: 'Korean Language Exchange Partner Needed 🇰🇷',
      author: 'Ahmad Rahman',
      content: 'Looking for a Korean native speaker who wants to practice English or Malay. I\'m intermediate level in Korean and would love to improve through conversation practice. We can meet at cafes in Gangnam area.',
      timestamp: '2024-01-20T09:15:00',
      likes: 23,
      replies: 12,
      category: 'academic',
      avatar: '👨‍🎓'
    },
    {
      id: 3,
      title: 'Selling iPhone 14 Pro - Great Condition! 📱',
      author: 'Michelle Wong',
      content: 'Moving back to Malaysia soon and selling my iPhone 14 Pro (256GB, Space Black). Bought it 8 months ago, still under warranty. Asking for 900,000 KRW. Comes with original box and accessories.',
      timestamp: '2024-01-20T08:45:00',
      likes: 7,
      replies: 5,
      category: 'marketplace',
      avatar: '👩‍💻'
    },
    {
      id: 4,
      title: 'Hari Raya Celebration Planning Committee 🌙',
      author: 'Fatimah Zahra',
      content: 'We\'re forming a committee to organize this year\'s Hari Raya celebration! We need volunteers for decoration, food coordination, and entertainment. The event will be held at Seoul Community Center. Who\'s interested in helping?',
      timestamp: '2024-01-19T16:20:00',
      likes: 34,
      replies: 18,
      category: 'social',
      avatar: '👩‍🍳'
    },
    {
      id: 5,
      title: 'Part-time Job Opportunity at Korean Startup 💼',
      author: 'Kevin Tan',
      content: 'My company is looking for a part-time content creator who can speak English, Malay, and Korean. Perfect for students! Flexible hours, good pay. Experience with social media marketing is a plus. PM me for details.',
      timestamp: '2024-01-19T14:10:00',
      likes: 28,
      replies: 15,
      category: 'jobs',
      avatar: '👨‍💼'
    },
    {
      id: 6,
      title: 'Study Group for TOPIK Level 5 📚',
      author: 'Lisa Chen',
      content: 'Starting a study group for TOPIK Level 5 preparation. We\'ll meet twice a week at Gangnam Library. Looking for serious students who are committed to regular attendance. Current group has 3 members.',
      timestamp: '2024-01-19T11:30:00',
      likes: 19,
      replies: 9,
      category: 'academic',
      avatar: '👩‍📚'
    },
    {
      id: 7,
      title: 'Weekend Hiking Trip to Seoraksan 🏔️',
      author: 'Raj Kumar',
      content: 'Planning a weekend hiking trip to Seoraksan National Park next month. Looking for 4-6 people to join. We\'ll take the bus from Seoul early Saturday morning and return Sunday evening. Cost estimate: 150,000 KRW per person.',
      timestamp: '2024-01-18T20:45:00',
      likes: 25,
      replies: 11,
      category: 'social',
      avatar: '🧗‍♂️'
    },
    {
      id: 8,
      title: 'Free Korean Textbooks - Pick up in Sinchon 📖',
      author: 'David Park',
      content: 'I have several Korean language textbooks that I no longer need. All are in good condition. Includes levels 1-4 of "Korean Grammar in Use" series. First come, first served! Available for pickup in Sinchon area.',
      timestamp: '2024-01-18T15:20:00',
      likes: 12,
      replies: 6,
      category: 'academic',
      avatar: '👨‍🏫'
    }
  ]

  const filteredPosts = posts.filter(post => {
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const formatTimeAgo = (timestamp: string) => {
    const now = new Date()
    const postTime = new Date(timestamp)
    const diffInHours = Math.floor((now.getTime() - postTime.getTime()) / (1000 * 60 * 60))
    
    if (diffInHours < 1) return 'Just now'
    if (diffInHours < 24) return `${diffInHours}h ago`
    const diffInDays = Math.floor(diffInHours / 24)
    if (diffInDays < 7) return `${diffInDays}d ago`
    return postTime.toLocaleDateString()
  }

  return (
    <div className="pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="glass-card rounded-3xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-blue-600/10"></div>
            <div className="relative z-10">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
                Community <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">Forum</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Connect with fellow Malaysian students, ask questions, share experiences, and build lasting friendships. 
                Our community forum is your space to engage and support each other.
              </p>
            </div>
          </div>
        </div>

        {/* Search and Actions */}
        <div className="glass-card rounded-2xl p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search discussions..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-white/30 backdrop-blur-sm border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500/50 text-gray-800 placeholder-gray-500"
                />
              </div>
            </div>

            {/* New Post Button */}
            <button className="glass-card px-6 py-3 rounded-xl font-semibold text-green-700 hover:bg-white/40 transition-colors flex items-center space-x-2">
              <Plus className="w-5 h-5" />
              <span>New Post</span>
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="glass-card rounded-2xl p-6 sticky top-24">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Categories</h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-colors flex items-center justify-between ${
                      selectedCategory === category.id
                        ? 'bg-green-500 text-white shadow-lg'
                        : 'text-gray-700 hover:bg-white/30'
                    }`}
                  >
                    <span className="font-medium">{category.name}</span>
                    <span className="text-sm opacity-75">{category.count}</span>
                  </button>
                ))}
              </div>

              <div className="mt-8">
                <h4 className="text-md font-bold text-gray-800 mb-4">Community Stats</h4>
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Total Posts</span>
                    <span className="font-semibold text-gray-800">156</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Active Members</span>
                    <span className="font-semibold text-gray-800">89</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">This Week</span>
                    <span className="font-semibold text-gray-800">23</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* Pinned Posts */}
            {selectedCategory === 'all' && (
              <div className="mb-8">
                {pinnedPosts.map((post) => (
                  <div key={post.id} className="glass-card rounded-2xl p-6 border-2 border-yellow-200/50 bg-yellow-50/20">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center text-white text-xl">
                        <Pin className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full font-medium">
                            Pinned
                          </span>
                          <span className="text-xs text-gray-500">by {post.author}</span>
                        </div>
                        <h3 className="text-lg font-bold text-gray-800 mb-2">{post.title}</h3>
                        <p className="text-gray-600 text-sm mb-4">{post.content}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <div className="flex items-center space-x-1">
                            <Heart className="w-4 h-4" />
                            <span>{post.likes}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MessageCircle className="w-4 h-4" />
                            <span>{post.replies}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Posts */}
            <div className="space-y-6">
              {filteredPosts.map((post) => (
                <div key={post.id} className="glass-card rounded-2xl p-6 hover:bg-white/30 transition-colors">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white text-xl">
                      {post.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center space-x-2">
                          <span className="font-semibold text-gray-800">{post.author}</span>
                          <span className="text-xs text-gray-500">•</span>
                          <span className="text-xs text-gray-500">{formatTimeAgo(post.timestamp)}</span>
                          {post.trending && (
                            <div className="flex items-center space-x-1 text-xs text-orange-600">
                              <TrendingUp className="w-3 h-3" />
                              <span>Trending</span>
                            </div>
                          )}
                        </div>
                        <button className="p-2 hover:bg-white/20 rounded-lg transition-colors">
                          <MoreHorizontal className="w-4 h-4 text-gray-600" />
                        </button>
                      </div>

                      <div className="flex items-center space-x-2 mb-3">
                        <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full font-medium capitalize">
                          {post.category.replace('-', ' ')}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-gray-800 mb-3">{post.title}</h3>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.content}</p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-6">
                          <button className="flex items-center space-x-2 text-sm text-gray-500 hover:text-red-500 transition-colors">
                            <Heart className="w-4 h-4" />
                            <span>{post.likes}</span>
                          </button>
                          <button className="flex items-center space-x-2 text-sm text-gray-500 hover:text-blue-500 transition-colors">
                            <MessageCircle className="w-4 h-4" />
                            <span>{post.replies}</span>
                          </button>
                          <button className="flex items-center space-x-2 text-sm text-gray-500 hover:text-green-500 transition-colors">
                            <Reply className="w-4 h-4" />
                            <span>Reply</span>
                          </button>
                        </div>
                        <button className="text-blue-600 text-sm font-medium hover:text-blue-700">
                          View Discussion →
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {filteredPosts.length === 0 && (
                <div className="text-center py-12">
                  <div className="glass-card rounded-2xl p-8 max-w-md mx-auto">
                    <MessageCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-800 mb-2">No Posts Found</h3>
                    <p className="text-gray-600