import React, { useState } from 'react'
import { Users, MapPin, Calendar, Clock, Mail, User, Target } from 'lucide-react'

const Community = () => {
  const [activeTab, setActiveTab] = useState('clubs')

  const stats = [
    { number: '8', label: 'Active Clubs', color: 'text-blue-600' },
    { number: '343', label: 'Total Members', color: 'text-green-600' },
    { number: '9', label: 'Years Established', color: 'text-purple-600' }
  ]

  const clubs = [
    {
      name: 'PPMK Seoul Chapter',
      type: 'Regional',
      description: 'Main chapter serving Malaysian students in Seoul area universities including SNU, Yonsei, and Korea University',
      members: 85,
      established: 'Est. 2015',
      location: 'Seoul Metropolitan Area',
      email: 'seoul@ppmk.org',
      president: {
        name: 'Ahmad Rahman',
        university: 'Seoul National University'
      },
      activities: ['Monthly gatherings', 'Academic support', 'Cultural events', 'New student orientation'],
      contactLabel: 'Contact PPMK Seoul Chapter'
    },
    {
      name: 'PPMK Busan Chapter',
      type: 'Regional',
      description: 'Supporting Malaysian students at Pusan National University and other Busan institutions',
      members: 32,
      established: 'Est. 2018',
      location: 'Busan',
      email: 'busan@ppmk.org',
      president: {
        name: 'Lim Soo Hwa',
        university: 'Pusan National University'
      },
      activities: ['Beach cleanups', 'Study groups', 'Food festivals', 'City tours'],
      contactLabel: 'Contact PPMK Busan Chapter'
    },
    {
      name: 'PPMK Daejeon Chapter',
      type: 'Regional',
      description: 'Connecting Malaysian students at KAIST, Chungnam National University, and other Daejeon institutions',
      members: 28,
      established: 'Est. 2017',
      location: 'Daejeon',
      email: 'daejeon@ppmk.org',
      president: {
        name: 'Fatimah Zahra',
        university: 'KAIST'
      },
      activities: ['Research symposiums', 'Tech meetups', 'Cultural exchange', 'Academic workshops'],
      contactLabel: 'Contact PPMK Daejeon Chapter'
    },
    {
      name: 'PPMK Medical Society',
      type: 'Academic',
      description: 'Supporting Malaysian medical students across Korean medical schools and hospitals',
      members: 45,
      established: 'Est. 2019',
      location: 'Nationwide',
      email: 'medical@ppmk.org',
      president: {
        name: 'Dr. Sarah Lee',
        university: 'Yonsei University College of Medicine'
      },
      activities: ['Medical conferences', 'Clinical rotations', 'Research collaboration', 'Mentorship programs'],
      contactLabel: 'Contact PPMK Medical Society'
    }
  ]

  const events = [
    {
      title: 'Traditional Malaysian Cooking Workshop',
      date: '18/02/2024',
      time: '2:00 PM - 5:00 PM',
      location: 'Seoul Community Kitchen',
      description: 'Learn to cook authentic Malaysian dishes including rendang, nasi lemak, and onde-onde',
      price: 'Free',
      organizer: 'Cultural Arts Society',
      host: 'Siti Nurhaliza Rahman',
      tags: ['Cooking', 'Culture', 'Food'],
      attendees: '18/20',
      buttonText: 'Register'
    },
    {
      title: 'Korean-Malaysian Language Exchange',
      date: '22/02/2024',
      time: '7:00 PM - 9:00 PM',
      location: 'Hongdae Language Cafe',
      description: 'Practice Korean and Malay/English in a friendly, relaxed environment with native speakers',
      price: '₩10,000',
      organizer: 'Individual',
      host: 'Kim Min-jun & Ahmad Faiz',
      tags: ['Language', 'Exchange', 'Social'],
      attendees: '12/15',
      buttonText: 'Register'
    },
    {
      title: 'AI Research Symposium',
      date: '25/02/2024',
      time: '10:00 AM - 4:00 PM',
      location: 'KAIST Campus',
      description: 'Presentations on cutting-edge AI research by Malaysian students and industry professionals',
      price: 'Free',
      organizer: 'STEM Research Collective',
      host: 'Dr. Nurul Huda',
      tags: ['Research', 'AI', 'Technology', 'Academic'],
      attendees: '65/80',
      buttonText: 'Register'
    },
    {
      title: 'Badminton Tournament',
      date: '02/03/2024',
      time: '9:00 AM - 6:00 PM',
      location: 'Olympic Park Sports Complex',
      description: 'Annual inter-university badminton championship for Malaysian students',
      price: '₩15,000',
      organizer: 'PPMK Sports Committee',
      host: 'Sports Committee',
      tags: ['Sports', 'Tournament', 'Competition'],
      attendees: '45/60',
      buttonText: 'Register'
    },
    {
      title: 'Photography Walk: Seoul in Spring',
      date: '10/03/2024',
      time: '8:00 AM - 12:00 PM',
      location: 'Namsan Tower & Surroundings',
      description: 'Capture the beauty of Seoul\'s cherry blossoms with fellow photography enthusiasts',
      price: 'Free',
      organizer: 'Photography Club',
      host: 'Photography Club',
      tags: ['Photography', 'Nature', 'Seoul', 'Spring'],
      attendees: '25/30',
      buttonText: 'Register'
    },
    {
      title: 'Startup Pitch Night',
      date: '15/03/2024',
      time: '6:30 PM - 9:30 PM',
      location: 'Gangnam Startup Hub',
      description: 'Present your startup ideas to a panel of investors and entrepreneurs',
      price: '₩20,000',
      organizer: 'Entrepreneurship Society',
      host: 'Entrepreneurship Society',
      tags: ['Startup', 'Business', 'Networking', 'Innovation'],
      attendees: '40/50',
      buttonText: 'Register'
    }
  ]

  return (
    <div className="pt-8 pb-12 bg-ppmk-light min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-ppmk-dark mb-6">PPMK Community</h1>
          <p className="text-xl text-ppmk-dark/80 max-w-4xl mx-auto mb-8">
            Our vibrant community consists of various clubs and organizations that cater to 
            different interests, academic pursuits, and regional connections across South Korea.
          </p>
          
          {/* Stats */}
          <div className="flex justify-center gap-8 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-ppmk-dark/10 min-w-[140px]">
                <div className={`text-4xl font-bold ${stat.color} mb-2`}>{stat.number}</div>
                <div className="text-ppmk-dark/70 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-xl shadow-lg p-2 border border-ppmk-dark/10">
            <button
              onClick={() => setActiveTab('clubs')}
              className={`px-8 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeTab === 'clubs'
                  ? 'bg-ppmk-dark text-ppmk-accent shadow-md'
                  : 'text-ppmk-dark hover:bg-ppmk-accent/30'
              }`}
            >
              Clubs & Organizations
            </button>
            <button
              onClick={() => setActiveTab('events')}
              className={`px-8 py-3 rounded-lg font-medium transition-all duration-200 ${
                activeTab === 'events'
                  ? 'bg-ppmk-dark text-ppmk-accent shadow-md'
                  : 'text-ppmk-dark hover:bg-ppmk-accent/30'
              }`}
            >
              Community Events
            </button>
          </div>
        </div>

        {/* Clubs & Organizations Tab */}
        {activeTab === 'clubs' && (
          <div className="grid md:grid-cols-2 gap-8">
            {clubs.map((club, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-ppmk-dark/10">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-ppmk-dark">{club.name}</h3>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {club.type}
                  </span>
                </div>
                
                <p className="text-ppmk-dark/80 mb-4">{club.description}</p>
                
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-ppmk-dark/70">
                  <div className="flex items-center space-x-2">
                    <Users className="w-4 h-4" />
                    <span>{club.members} members</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4" />
                    <span>{club.established}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4" />
                    <span>{club.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4" />
                    <span>{club.email}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-ppmk-dark mb-2">Club President</h4>
                  <div className="text-sm text-ppmk-dark/80">
                    <div className="font-medium">{club.president.name}</div>
                    <div className="text-ppmk-dark/60">{club.president.university}</div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-ppmk-dark mb-2 flex items-center">
                    <Target className="w-4 h-4 mr-2" />
                    Key Activities
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {club.activities.map((activity, actIndex) => (
                      <span key={actIndex} className="bg-ppmk-accent/30 text-ppmk-dark px-3 py-1 rounded-full text-sm">
                        {activity}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="w-full bg-ppmk-light border border-ppmk-dark/20 text-ppmk-dark py-3 rounded-lg font-medium hover:bg-ppmk-accent/30 transition-colors flex items-center justify-center space-x-2">
                  <Mail className="w-4 h-4" />
                  <span>{club.contactLabel}</span>
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Community Events Tab */}
        {activeTab === 'events' && (
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-ppmk-dark mb-4">Community Events</h2>
              <p className="text-ppmk-dark/70">Events organized by our clubs and individual community members</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {events.map((event, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-ppmk-dark/10">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-ppmk-dark line-clamp-2">{event.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      event.price === 'Free' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {event.price}
                    </span>
                  </div>

                  <div className="space-y-2 text-sm text-ppmk-dark/70 mb-4">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                  </div>

                  <p className="text-ppmk-dark/80 text-sm mb-4 line-clamp-3">{event.description}</p>

                  <div className="mb-4">
                    <div className="flex items-center space-x-2 text-sm text-ppmk-dark/70 mb-2">
                      <Users className="w-4 h-4" />
                      <span>Organized by</span>
                    </div>
                    <div className="text-sm">
                      <div className="font-medium text-ppmk-dark">{event.organizer}</div>
                      <div className="text-ppmk-dark/60">Host: {event.host}</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {event.tags.map((tag, tagIndex) => (
                      <span key={tagIndex} className="bg-ppmk-accent/30 text-ppmk-dark px-2 py-1 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-ppmk-dark/70">
                      <Users className="w-4 h-4" />
                      <span>{event.attendees}</span>
                    </div>
                    <button className="bg-ppmk-dark text-ppmk-accent px-6 py-2 rounded-lg font-medium hover:bg-ppmk-dark/90 transition-colors">
                      {event.buttonText}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Community
