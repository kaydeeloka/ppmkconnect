import React from 'react'
import { Trophy, Calendar, Newspaper, Phone, Users, MapPin, Heart, Star, TrendingUp } from 'lucide-react'

const Home = () => {
  const batchWarData = [
    { batch: '2024', students: 145, color: 'bg-ppmk-dark' },
    { batch: '2023', students: 132, color: 'bg-ppmk-dark/80' },
    { batch: '2022', students: 98, color: 'bg-ppmk-dark/60' },
    { batch: '2021', students: 87, color: 'bg-ppmk-dark/40' },
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
    <div className="pt-8 pb-12 bg-ppmk-light min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="bg-white rounded-xl shadow-lg p-12 mb-8 border border-ppmk-dark/10">
            <h1 className="text-5xl md:text-6xl font-bold text-ppmk-dark mb-6">
              Welcome to <span className="text-ppmk-dark bg-ppmk-accent px-2 rounded">PPMK</span>
            </h1>
            <p className="text-xl text-ppmk-dark/80 mb-8 max-w-3xl mx-auto">
              Persatuan Pelajar Malaysia Korea - Connecting Malaysian students across Korean universities. 
              Building bridges, sharing experiences, and creating lasting professional networks.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <div className="bg-ppmk-accent/50 rounded-lg px-6 py-4 border border-ppmk-dark/20">
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-ppmk-dark" />
                  <div className="text-left">
                    <div className="text-2xl font-bold text-ppmk-dark">500+</div>
                    <div className="text-sm text-ppmk-dark/70">Active Members</div>
                  </div>
                </div>
              </div>
              <div className="bg-ppmk-accent/50 rounded-lg px-6 py-4 border border-ppmk-dark/20">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-6 h-6 text-ppmk-dark" />
                  <div className="text-left">
                    <div className="text-2xl font-bold text-ppmk-dark">15+</div>
                    <div className="text-sm text-ppmk-dark/70">Universities</div>
                  </div>
                </div>
              </div>
              <div className="bg-ppmk-accent/50 rounded-lg px-6 py-4 border border-ppmk-dark/20">
                <div className="flex items-center space-x-3">
                  <Heart className="w-6 h-6 text-ppmk-dark" />
                  <div className="text-left">
                    <div className="text-2xl font-bold text-ppmk-dark">8+</div>
                    <div className="text-sm text-ppmk-dark/70">Years Strong</div>
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
            <div className="bg-white rounded-xl shadow-lg p-6 h-full border border-ppmk-dark/10">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-ppmk-accent rounded-lg flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-ppmk-dark" />
                </div>
                <h2 className="text-2xl font-bold text-ppmk-dark">Batch Performance</h2>
              </div>
              
              <div className="space-y-6">
                {batchWarData.map((batch, index) => (
                  <div key={batch.batch} className="relative">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2">
                        <span className="font-semibold text-ppmk-dark">Batch {batch.batch}</span>
                        {index === 0 && <Star className="w-4 h-4 text-ppmk-accent fill-current" />}
                      </div>
                      <span className="text-sm text-ppmk-dark/70 font-medium">{batch.students} students</span>
                    </div>
                    <div className="w-full bg-ppmk-light rounded-full h-3">
                      <div 
                        className={`h-3 rounded-full ${batch.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${(batch.students / 150) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-ppmk-accent/30 rounded-lg border border-ppmk-dark/20">
                <div className="flex items-start space-x-2">
                  <TrendingUp className="w-5 h-5 text-ppmk-dark mt-0.5" />
                  <div>
                    <p className="text-sm text-ppmk-dark font-medium">
                      Batch 2024 Leading Performance
                    </p>
                    <p className="text-xs text-ppmk-dark/70 mt-1">
                      Highest participation in academic and cultural activities
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Latest News Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6 h-full border border-ppmk-dark/10">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-ppmk-dark rounded-lg flex items-center justify-center">
                  <Newspaper className="w-6 h-6 text-ppmk-accent" />
                </div>
                <h2 className="text-2xl font-bold text-ppmk-dark">Latest News</h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
                {newsArticles.map((article) => (
                  <div key={article.id} className="border border-ppmk-dark/10 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-bold text-ppmk-dark mb-2 line-clamp-2">{article.title}</h3>
                      <p className="text-ppmk-dark/70 text-sm mb-3 line-clamp-2">{article.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-ppmk-dark/50">{new Date(article.date).toLocaleDateString()}</span>
                        <button className="text-ppmk-dark text-sm font-medium hover:text-ppmk-dark/80 bg-ppmk-accent/30 px-2 py-1 rounded">
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
          <div className="bg-white rounded-xl shadow-lg p-6 border border-ppmk-dark/10">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-ppmk-accent rounded-lg flex items-center justify-center">
                <Calendar className="w-6 h-6 text-ppmk-dark" />
              </div>
              <h2 className="text-2xl font-bold text-ppmk-dark">Upcoming Events</h2>
            </div>

            <div className="space-y-4">
              {upcomingEvents.map((event) => (
                <div key={event.id} className="border border-ppmk-dark/10 rounded-lg p-4 hover:bg-ppmk-accent/20 transition-colors">
                  <h3 className="font-semibold text-ppmk-dark mb-2">{event.title}</h3>
                  <div className="space-y-1 text-sm text-ppmk-dark/70">
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
          <div className="bg-white rounded-xl shadow-lg p-6 border border-ppmk-dark/10">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-ppmk-dark rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6 text-ppmk-accent" />
              </div>
              <h2 className="text-2xl font-bold text-ppmk-dark">Contact Information</h2>
            </div>

            <div className="space-y-4">
              <div className="border border-ppmk-dark/10 rounded-lg p-4">
                <h3 className="font-semibold text-ppmk-dark mb-3">Get in Touch</h3>
                <p className="text-ppmk-dark/70 text-sm mb-4">
                  For inquiries, membership, or collaboration opportunities, please reach out to us.
                </p>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-ppmk-accent/50 rounded-lg flex items-center justify-center">
                      <span className="text-ppmk-dark">📧</span>
                    </div>
                    <div>
                      <div className="font-medium text-ppmk-dark">Email</div>
                      <div className="text-ppmk-dark/70">info@ppmk-korea.org</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-ppmk-accent/50 rounded-lg flex items-center justify-center">
                      <span className="text-ppmk-dark">📱</span>
                    </div>
                    <div>
                      <div className="font-medium text-ppmk-dark">Phone</div>
                      <div className="text-ppmk-dark/70">+82-10-1234-5678</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-ppmk-accent/50 rounded-lg flex items-center justify-center">
                      <span className="text-ppmk-dark">💬</span>
                    </div>
                    <div>
                      <div className="font-medium text-ppmk-dark">Social Media</div>
                      <div className="text-ppmk-dark/70">@PPMKKorea</div>
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
