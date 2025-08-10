import React from 'react'
import { Calendar, Users, MapPin, Clock, Star, Award, Camera, BookOpen } from 'lucide-react'

const Activities = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: 'Hari Raya Aidilfitri Celebration 2024',
      date: '2024-04-15',
      time: '18:00',
      location: 'Seoul Community Center',
      attendees: 120,
      category: 'Cultural',
      description: 'Join us for a traditional Hari Raya celebration with authentic Malaysian cuisine and cultural performances.',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop',
      status: 'upcoming'
    },
    {
      id: 2,
      title: 'Career Development Workshop',
      date: '2024-03-20',
      time: '14:00',
      location: 'COEX Convention Center',
      attendees: 200,
      category: 'Professional',
      description: 'Professional development workshop featuring industry leaders and career guidance sessions.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop',
      status: 'upcoming'
    },
    {
      id: 3,
      title: 'Korean Language Study Group',
      date: '2024-02-28',
      time: '19:00',
      location: 'Hongdae Study Cafe',
      attendees: 45,
      category: 'Academic',
      description: 'Weekly Korean language practice sessions with native speakers and advanced learners.',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=250&fit=crop',
      status: 'recurring'
    }
  ]

  const pastEvents = [
    {
      id: 4,
      title: 'Malaysia Day Celebration 2023',
      date: '2023-09-16',
      attendees: 180,
      category: 'Cultural',
      description: 'Celebrated Malaysia Day with traditional games, food, and cultural performances.',
      image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=400&h=250&fit=crop',
      rating: 4.8
    },
    {
      id: 5,
      title: 'Academic Excellence Awards 2023',
      date: '2023-12-10',
      attendees: 150,
      category: 'Academic',
      description: 'Annual awards ceremony recognizing outstanding academic achievements.',
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=250&fit=crop',
      rating: 4.9
    },
    {
      id: 6,
      title: 'Winter Networking Dinner',
      date: '2023-12-15',
      attendees: 90,
      category: 'Professional',
      description: 'Professional networking event with alumni and industry professionals.',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=250&fit=crop',
      rating: 4.7
    }
  ]

  const categories = [
    { name: 'Cultural', icon: Camera, color: 'bg-purple-600', count: 12 },
    { name: 'Academic', icon: BookOpen, color: 'bg-blue-600', count: 8 },
    { name: 'Professional', icon: Award, color: 'bg-green-600', count: 6 },
    { name: 'Social', icon: Users, color: 'bg-orange-600', count: 10 }
  ]

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Cultural': return 'bg-purple-100 text-purple-800 border-purple-200'
      case 'Academic': return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'Professional': return 'bg-green-100 text-green-800 border-green-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  return (
    <div className="pt-8 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Activities & Events</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover upcoming events, join our activities, and connect with the Malaysian student community in Korea.
          </p>
        </div>

        {/* Categories Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {categories.map((category, index) => {
            const Icon = category.icon
            return (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-gray-600 text-sm">{category.count} events this year</p>
              </div>
            )
          })}
        </div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
              <Calendar className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Upcoming Events</h2>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(event.category)}`}>
                      {event.category}
                    </span>
                    {event.status === 'recurring' && (
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 border border-gray-200">
                        Recurring
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{event.description}</p>
                  
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(event.date).toLocaleDateString()} at {event.time}</span>
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
                  
                  <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div className="mb-16">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-10 h-10 bg-gray-600 rounded-lg flex items-center justify-center">
              <Camera className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Past Events</h2>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {pastEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(event.category)}`}>
                      {event.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium text-gray-700">{event.rating}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{event.description}</p>
                  
                  <div className="space-y-2 text-sm text-gray-600 mb-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(event.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4" />
                      <span>{event.attendees} attendees</span>
                    </div>
                  </div>
                  
                  <button className="w-full border border-gray-300 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                    View Gallery
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-white rounded-xl shadow-lg p-12 text-center border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Want to Organize an Event?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Have an idea for an event or activity? We welcome member-led initiatives and provide support for organizing community events.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Propose an Event
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Event Guidelines
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Activities
