import React from 'react'
import { Trophy, Calendar, Newspaper, Phone, Users, MapPin, Heart, Star, TrendingUp } from 'lucide-react'

const Home = () => {
  const batchWarData = [
    { batch: '2024', students: 145, color: 'bg-blue-600' },
    { batch: '2023', students: 132, color: 'bg-purple-600' },
    { batch: '2022', students: 98, color: 'bg-green-600' },
    { batch: '2021', students: 87, color: 'bg-orange-600' },
  ]

  const newsArticles = [
    {
      id: 1,
      title: 'Korean Language Proficiency Workshop Success',
      excerpt: 'Over 80 Malaysian students participated in the intensive Korean language workshop...',
      date: '2024-01-15',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop'
    },
    {
      id: 2,
      title: 'Cultural Exchange Festival 2024',
      excerpt: 'Annual cultural exchange festival brings together students from various universities...',
      date: '2024-01-10',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop'
    },
    {
      id: 3,
      title: 'Scholarship Opportunities for 2024',
      excerpt: 'New scholarship programs available for Malaysian students in Korean universities...',
      date: '2024-01-08',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=250&fit=crop'
    }
  ]

  const upcomingEvents = [
    {
      id: 1,
      title: 'Hari Raya Celebration',
      date: '2024-04-15',
      location: 'Seoul Community Center',
      attendees: 120
    },
    {
      id: 2,
      title: 'Career Fair 2024',
      date: '2024-03-20',
      location: 'COEX Convention Center',
      attendees: 200
    },
    {
      id: 3,
      title: 'Study Group Meetup',
      date: '2024-02-28',
      location: 'Hongdae Study Cafe',
      attendees: 45
    }
  ]

  return (
    <div className="pt-8 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="bg-white rounded-xl shadow-lg p-12 mb-8 border border-gray-200">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Welcome to <span className="text-blue-600">PPMK</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Persatuan Pelajar Malaysia Korea - Connecting Malaysian students across Korean universities. 
              Building bridges, sharing experiences, and creating lasting professional networks.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="bg-gray-50 rounded-lg px-6 py-4 border border-gray-200">
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-blue-600" />
                  <div className="text-left">
                    <div className="text-2xl font-bold text-gray-900">500+</div>
                    <div className="text-sm text-gray-600">Active Members</div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg px-6 py-4 border border-gray-200">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-6 h-6 text-green-600" />
                  <div className="text-left">
                    <div className="text-2xl font-bold text-gray-900">15+</div>
                    <div className="text-sm text-gray-600">Universities</div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg px-6 py-4 border border-gray-200">
                <div className="flex items-center space-x-3">
                  <Heart className="w-6 h-6 text-red-600" />
                  <div className="text-left">
                    <div className="text-2xl font-bold text-gray-900">8+</div>
                    <div className="text-sm text-gray-600">Years Strong</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Batch Performance Section */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 h-full border border-gray-200">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Batch Performance</h2>
              </div>
              
              <div className="space-y-6">
                {batchWarData.map((batch, index) => (
                  <div key={batch.batch} className="relative">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <span className="font-semibold text-gray-900">Batch {batch.batch}</span>
                        {index === 0 && <Star className="w-4 h-4 text-yellow-500 fill-current" />}
                      </div>
                      <span className="text-sm text-gray-600 font-medium">{batch.students} students</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className={`h-3 rounded-full ${batch.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${(batch.students / 150) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <div className="flex items-start space-x-2">
                  <TrendingUp className="w-5 h-5 text-yellow-600 mt-0.5" />
                  <div>
                    <p className="text-sm text-yellow-800 font-medium">
                      Batch 2024 Leading Performance
                    </p>
                    <p className="text-xs text-yellow-700 mt-1">
                      Highest participation in academic and cultural activities
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Latest News Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6 h-full border border-gray-200">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Newspaper className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Latest News</h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
                {newsArticles.map((article) => (
                  <div key={article.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">{article.title}</h3>
                      <p className="text-gray-600 text-sm mb-3 line-clamp-2">{article.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">{new Date(article.date).toLocaleDateString()}</span>
                        <button className="text-blue-600 text-sm font-medium hover:text-blue-700">
                          Read More →
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid md:grid-cols-2 gap-8 mt-8">
          {/* Upcoming Events */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Upcoming Events</h2>
            </div>

            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <h3 className="font-semibold text-gray-900 mb-2">{event.title}</h3>
                  <div className="space-y-1 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(event.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4" />
                      <span>{event.attendees} expected attendees</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Contact Information</h2>
            </div>

            <div className="space-y-4">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-3">Get in Touch</h3>
                <p className="text-gray-600 text-sm mb-4">
                  For inquiries, membership, or collaboration opportunities, please reach out to us.
                </p>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                      <span className="text-gray-600">📧</span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Email</div>
                      <div className="text-gray-600">info@ppmk-korea.org</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                      <span className="text-gray-600">📱</span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Phone</div>
                      <div className="text-gray-600">+82-10-1234-5678</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                      <span className="text-gray-600">💬</span>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Social Media</div>
                      <div className="text-gray-600">@PPMKKorea</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
