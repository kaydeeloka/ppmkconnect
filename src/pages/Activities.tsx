import React from 'react'
import { Calendar, MapPin, Users, Clock, Trophy, Camera, Music, Utensils, GraduationCap, Heart } from 'lucide-react'

const Activities = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: 'Hari Raya Aidilfitri Celebration 2024',
      date: '2024-04-15',
      time: '18:00 - 22:00',
      location: 'Seoul Community Center, Gangnam',
      attendees: 120,
      category: 'Cultural',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop',
      description: 'Join us for a traditional Hari Raya celebration with authentic Malaysian cuisine, cultural performances, and community bonding.',
      icon: Heart
    },
    {
      id: 2,
      title: 'Career Development Workshop',
      date: '2024-03-20',
      time: '14:00 - 17:00',
      location: 'COEX Convention Center',
      attendees: 200,
      category: 'Professional',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop',
      description: 'Professional development workshop featuring industry experts and networking opportunities with Korean companies.',
      icon: GraduationCap
    },
    {
      id: 3,
      title: 'Korean Language Exchange',
      date: '2024-02-28',
      time: '19:00 - 21:00',
      location: 'Hongdae Study Cafe',
      attendees: 45,
      category: 'Educational',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop',
      description: 'Practice Korean with native speakers while helping them learn English or Malay in a friendly environment.',
      icon: Users
    }
  ]

  const pastEvents = [
    {
      id: 1,
      title: 'Malaysia Night 2023',
      date: '2023-11-25',
      attendees: 300,
      category: 'Cultural',
      image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&h=250&fit=crop',
      highlights: ['Traditional dance performances', 'Malaysian food festival', 'Cultural exhibition']
    },
    {
      id: 2,
      title: 'Academic Excellence Awards',
      date: '2023-10-15',
      attendees: 150,
      category: 'Academic',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=250&fit=crop',
      highlights: ['Dean\'s list recognition', 'Scholarship presentations', 'Academic networking']
    },
    {
      id: 3,
      title: 'Seoul City Tour',
      date: '2023-09-20',
      attendees: 80,
      category: 'Social',
      image: 'https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=400&h=250&fit=crop',
      highlights: ['Gyeongbokgung Palace visit', 'Bukchon Hanok Village', 'Traditional Korean lunch']
    }
  ]

  const activityCategories = [
    {
      name: 'Cultural Events',
      icon: Music,
      count: 12,
      color: 'bg-ppmk-dark',
      description: 'Celebrating Malaysian heritage and traditions'
    },
    {
      name: 'Academic Support',
      icon: GraduationCap,
      count: 8,
      color: 'bg-ppmk-dark/80',
      description: 'Study groups and academic workshops'
    },
    {
      name: 'Professional Development',
      icon: Trophy,
      count: 6,
      color: 'bg-ppmk-dark/60',
      description: 'Career guidance and networking events'
    },
    {
      name: 'Social Gatherings',
      icon: Users,
      count: 15,
      color: 'bg-ppmk-dark/40',
      description: 'Community building and friendship activities'
    }
  ]

  return (
    <div className="pt-8 pb-12 bg-ppmk-light min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="bg-white rounded-xl shadow-lg p-12 border border-ppmk-dark/10">
            <h1 className="text-5xl font-bold text-ppmk-dark mb-6">Activities & Events</h1>
            <p className="text-xl text-ppmk-dark/80 max-w-4xl mx-auto">
              Discover the vibrant community life at PPMK through our diverse range of cultural, 
              academic, and social activities designed to enrich your Korean experience.
            </p>
          </div>
        </div>

        {/* Activity Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-ppmk-dark mb-8 text-center">Activity Categories</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {activityCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-ppmk-dark/10 hover:shadow-xl transition-shadow duration-300">
                  <div className={`w-16 h-16 ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                    <Icon className="w-8 h-8 text-ppmk-accent" />
                  </div>
                  <h3 className="text-xl font-bold text-ppmk-dark mb-2">{category.name}</h3>
                  <p className="text-ppmk-dark/70 text-sm mb-3">{category.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-ppmk-dark">{category.count}</span>
                    <span className="text-sm text-ppmk-dark/60">events/year</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-ppmk-dark mb-8 text-center">Upcoming Events</h2>
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => {
              const Icon = event.icon
              return (
                <div key={event.id} className="bg-white rounded-xl shadow-lg overflow-hidden border border-ppmk-dark/10 hover:shadow-xl transition-shadow duration-300">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-ppmk-accent/30 text-ppmk-dark px-3 py-1 rounded-full text-sm font-medium">
                        {event.category}
                      </span>
                      <Icon className="w-5 h-5 text-ppmk-dark" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-ppmk-dark mb-3">{event.title}</h3>
                    <p className="text-ppmk-dark/70 text-sm mb-4 line-clamp-2">{event.description}</p>
                    
                    <div className="space-y-2 text-sm text-ppmk-dark/70 mb-4">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(event.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{event.time}</span>
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
                    
                    <button className="w-full bg-ppmk-dark text-ppmk-accent py-2 rounded-lg font-medium hover:bg-ppmk-dark/90 transition-colors">
                      Register Now
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Past Events */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-ppmk-dark mb-8 text-center">Past Events Highlights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-xl shadow-lg overflow-hidden border border-ppmk-dark/10">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-ppmk-accent/30 text-ppmk-dark px-3 py-1 rounded-full text-sm font-medium">
                      {event.category}
                    </span>
                    <Camera className="w-5 h-5 text-ppmk-dark" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-ppmk-dark mb-2">{event.title}</h3>
                  
                  <div className="flex items-center space-x-4 text-sm text-ppmk-dark/70 mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(event.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{event.attendees} attendees</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-ppmk-dark text-sm">Event Highlights:</h4>
                    <ul className="space-y-1">
                      {event.highlights.map((highlight, index) => (
                        <li key={index} className="text-sm text-ppmk-dark/70 flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-ppmk-accent rounded-full"></div>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-ppmk-dark rounded-xl shadow-lg p-12 border border-ppmk-dark/10">
            <Utensils className="w-16 h-16 text-ppmk-accent mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-ppmk-accent mb-6">Join Our Next Event</h2>
            <p className="text-xl text-ppmk-accent/90 mb-8 max-w-3xl mx-auto">
              Don't miss out on the opportunity to connect with fellow Malaysian students, 
              experience Korean culture, and build lasting friendships. Your PPMK journey starts here!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-ppmk-accent text-ppmk-dark px-8 py-3 rounded-lg font-semibold hover:bg-ppmk-accent/90 transition-colors">
                View Event Calendar
              </button>
              <button className="border-2 border-ppmk-accent text-ppmk-accent px-8 py-3 rounded-lg font-semibold hover:bg-ppmk-accent hover:text-ppmk-dark transition-colors">
                Suggest an Event
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Activities
