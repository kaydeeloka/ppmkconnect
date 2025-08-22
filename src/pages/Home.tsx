import React from 'react'
import { Trophy, Calendar, Newspaper, Phone, Users, MapPin, Heart, Star, TrendingUp, Instagram, Facebook, Award } from 'lucide-react'

const Home = () => {
  const studentDistribution = [
    { name: 'Seoul National University', students: 45, scholarships: 12, x: '45%', y: '35%' },
    { name: 'Yonsei University', students: 38, scholarships: 8, x: '44%', y: '36%' },
    { name: 'Korea University', students: 42, scholarships: 10, x: '46%', y: '37%' },
    { name: 'KAIST', students: 28, scholarships: 15, x: '48%', y: '55%' },
    { name: 'Busan National University', students: 22, scholarships: 6, x: '52%', y: '70%' },
    { name: 'Hanyang University', students: 35, scholarships: 9, x: '45%', y: '38%' },
  ]

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
    title: 'Hari Raya Aidilfitri Celebration 2024',
    description: 'Join us for a traditional Hari Raya celebration with authentic Malaysian cuisine and cultural...',
    date: '2024-04-15',
    time: '18:00',
    location: 'Seoul Community Center',
    attendees: 120,
    category: 'Cultural',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=200&fit=crop',
    recurring: false
  },
  {
    id: 2,
    title: 'Career Development Workshop',
    description: 'Professional development workshop featuring industry leaders and career guidance sessions.',
    date: '2024-03-20',
    time: '14:00',
    location: 'COEX Convention Center',
    attendees: 200,
    category: 'Professional',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=200&fit=crop',
    recurring: false
  },
  {
    id: 3,
    title: 'Korean Language Study Group',
    description: 'Weekly Korean language practice sessions with native speakers and advanced learners.',
    date: '2024-02-28',
    time: '19:00',
    location: 'Hongdae Study Cafe',
    attendees: 45,
    category: 'Academic',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=200&fit=crop',
    recurring: true
  }
]

  return (
    <div className="min-h-screen bg-ppmk-light">
      {/* Hero Section with Background */}
      <section className="mt-8 relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://media.licdn.com/dms/image/v2/D5622AQEgYKIN9sUEQA/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1731671105016?e=1758153600&v=beta&t=6ku9nIk5wsSFapl7VxMC3fItHZYbDjO1sfDTv6z-R_k)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-ppmk-dark/60 via-ppmk-dark/40 to-ppmk-dark/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          {/* Welcome Message */}
          <div className="backdrop-blur-md bg-white/10 rounded-2xl p-8 sm:p-12 border border-white/20 shadow-2xl mb-8 animate-float">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Welcome to <span className="text-ppmk-accent">PPMK</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Persatuan Pelajar Malaysia Korea - Connecting Malaysian students across 
              Korean universities, building bridges, sharing experiences, and creating lasting 
              professional networks.
            </p>
          </div>

          {/* Social Media */}
          <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="group backdrop-blur-md bg-white/10 hover:bg-white/20 rounded-full p-4 border border-white/20 transition-all duration-300 hover:scale-110"
            >
              <Instagram className="w-8 h-8 text-white group-hover:text-ppmk-accent transition-colors" />
              <div className="mt-2 text-white text-sm font-medium">@PPMKOFFICIAL</div>
              <div className="bg-ppmk-accent text-ppmk-dark text-xs px-3 py-1 rounded-full mt-1 font-semibold">Visit</div>
            </a>
            <a
              href="#"
              className="group backdrop-blur-md bg-white/10 hover:bg-white/20 rounded-full p-4 border border-white/20 transition-all duration-300 hover:scale-110"
            >
              <Facebook className="w-8 h-8 text-white group-hover:text-ppmk-accent transition-colors" />
              <div className="mt-2 text-white text-sm font-medium">PPMK</div>
              <div className="bg-ppmk-accent text-ppmk-dark text-xs px-3 py-1 rounded-full mt-1 font-semibold">Visit</div>
            </a>
          </div>

          {/* Data list */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <div className="bg-ppmk-accent rounded-lg px-6 py-4 border border-ppmk-dark/20">
              <div className="flex items-center space-x-3">
                <Users className="w-6 h-6 text-ppmk-dark" />
                <div className="text-left">
                  <div className="text-2xl font-bold text-ppmk-dark">500+</div>
                  <div className="text-sm text-ppmk-dark/70">Active Members</div>
                </div>
              </div>
            </div>
            <div className="bg-ppmk-accent rounded-lg px-6 py-4 border border-ppmk-dark/20">
              <div className="flex items-center space-x-3">
                <MapPin className="w-6 h-6 text-ppmk-dark" />
                <div className="text-left">
                  <div className="text-2xl font-bold text-ppmk-dark">15+</div>
                  <div className="text-sm text-ppmk-dark/70">Universities</div>
                </div>
              </div>
            </div>
            <div className="bg-ppmk-accent rounded-lg px-6 py-4 border border-ppmk-dark/20">
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
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-ppmk-dark mb-4">
              PPMK Distribution Across Korea
            </h2>
            <p className="text-lg text-ppmk-dark/70 max-w-2xl mx-auto">
              Our members are spread across major universities throughout South Korea, 
              creating a strong network of Malaysian students.
            </p>
          </div>

          <div className="backdrop-blur-md bg-white/10 rounded-3xl p-8 border border-white/20 shadow-2xl">
            {/* Map Container */}
            <div className="relative w-full h-96 bg-gradient-to-br from-ppmk-dark/10 to-ppmk-dark/5 rounded-2xl overflow-hidden">
              {/* Simplified Korea Map Background */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-48 bg-ppmk-dark/20 rounded-t-full rounded-b-lg backdrop-blur-sm border border-white/20"></div>
              </div>

              {/* University Markers */}
              {studentDistribution.map((uni, index) => (
                <div
                  key={index}
                  className="absolute group cursor-pointer"
                  style={{ left: uni.x, top: uni.y, transform: 'translate(-50%, -50%)' }}
                >
                  <div className="relative">
                    <div className="w-4 h-4 bg-gradient-to-br from-ppmk-accent to-yellow-400 rounded-full border-2 border-white shadow-lg animate-pulse"></div>
                    
                    {/* Tooltip */}
                    <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                      <div className="backdrop-blur-md bg-white/90 rounded-lg p-3 border border-white/20 shadow-xl min-w-48">
                        <h4 className="font-semibold text-ppmk-dark text-sm mb-2">{uni.name}</h4>
                        <div className="flex items-center space-x-4 text-xs text-ppmk-dark/70">
                          <div className="flex items-center space-x-1">
                            <Users className="w-3 h-3" />
                            <span>{uni.students} students</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Award className="w-3 h-3" />
                            <span>{uni.scholarships} scholarships</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Legend */}
            <div className="mt-8 flex flex-wrap justify-center gap-6">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-gradient-to-br from-ppmk-accent to-yellow-400 rounded-full"></div>
                <span className="text-sm text-ppmk-dark/70">University Location</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-4 h-4 text-ppmk-dark/70" />
                <span className="text-sm text-ppmk-dark/70">Student Count</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4 text-ppmk-dark/70" />
                <span className="text-sm text-ppmk-dark/70">Scholarships</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="pt-8 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Batch War Section */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6 h-full border border-ppmk-dark/10">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-ppmk-accent rounded-lg flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-ppmk-dark" />
                  </div>
                  <h2 className="text-2xl font-bold text-ppmk-dark">Batch War</h2>
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
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            {/* Upcoming Events */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-ppmk-dark/10">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-ppmk-dark">Upcoming Events</h2>
                </div>
                <a 
                  href="/events" 
                  className="text-blue-500 hover:text-blue-600 text-sm font-medium transition-colors"
                >
                  See More →
                </a>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="bg-white rounded-xl border border-ppmk-dark/10 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    {/* Event Image */}
                    <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200">
                      <img 
                        src={event.image || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=200&fit=crop'} 
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                      {/* Category Badge */}
                      <div className="absolute top-3 left-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          event.category === 'Cultural' ? 'bg-purple-100 text-purple-800' :
                          event.category === 'Professional' ? 'bg-green-100 text-green-800' :
                          event.category === 'Academic' ? 'bg-blue-100 text-blue-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {event.category || 'General'}
                        </span>
                      </div>
                      {/* Recurring Badge */}
                      {event.recurring && (
                        <div className="absolute top-3 right-3">
                          <span className="bg-black/70 text-white px-2 py-1 rounded text-xs font-medium">
                            Recurring
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Event Content */}
                    <div className="p-4">
                      <h3 className="font-bold text-ppmk-dark mb-2 text-lg leading-tight">
                        {event.title}
                      </h3>
                      <p className="text-ppmk-dark/70 text-sm mb-4 line-clamp-2">
                        {event.description}
                      </p>

                      {/* Event Details */}
                      <div className="space-y-2 text-sm text-ppmk-dark/70 mb-4">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(event.date).toLocaleDateString()} at {event.time || '18:00'}</span>
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

                      {/* Register Button */}
                      <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                        Register Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
