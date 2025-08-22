import React, { useState, useEffect } from 'react'
import { Calendar, MapPin, Users, Clock, Plus, Search, Filter, Heart, MessageCircle, Share2, Phone, Instagram, ExternalLink, User } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'
import AuthModal from '../components/AuthModal'
import CreateEventModal from '../components/CreateEventModal'
import { EventsAPI } from '../api/events'
import { EventWithAuthor } from '../types/user'

const Meetup = () => {
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [events, setEvents] = useState<EventWithAuthor[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { user, setPendingAction } = useAuth()

  // Load events on component mount
  useEffect(() => {
    loadEvents()
  }, [])

  const loadEvents = async () => {
    setLoading(true)
    setError(null)
    
    try {
      const response = await EventsAPI.getEventsWithAuthors()
      if (response.success && response.data) {
        setEvents(response.data)
      } else {
        setError(response.error || 'Failed to load events')
      }
    } catch (error: any) {
      setError('An unexpected error occurred while loading events')
      console.error('Error loading events:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleHostGathering = () => {
    if (!user) {
      // Set pending action and show auth modal
      setPendingAction('create-event')
      setShowAuthModal(true)
    } else {
      // User is authenticated, show create modal directly
      setShowCreateModal(true)
    }
  }

  const handleAuthSuccess = () => {
    // Called when user successfully authenticates
    // Check if they were trying to create an event
    if (user) {
      setShowCreateModal(true)
      setPendingAction(null) // Clear pending action
    }
  }

  const handleEventCreated = () => {
    loadEvents() // Refresh events list
    setShowCreateModal(false)
  }

  const handleAuthModalClose = () => {
    setShowAuthModal(false)
    setPendingAction(null) // Clear pending action if user cancels
  }

  // Mock categories for filtering (you can enhance this based on your needs)
  const categories = [
    { value: 'all', label: 'All Events', count: events.length },
    { value: 'social', label: 'Social', count: events.filter(e => e.title.toLowerCase().includes('social') || e.description.toLowerCase().includes('social')).length },
    { value: 'academic', label: 'Academic', count: events.filter(e => e.title.toLowerCase().includes('study') || e.description.toLowerCase().includes('study')).length },
    { value: 'food', label: 'Food', count: events.filter(e => e.title.toLowerCase().includes('food') || e.title.toLowerCase().includes('bbq') || e.title.toLowerCase().includes('cooking')).length },
    { value: 'outdoor', label: 'Outdoor', count: events.filter(e => e.title.toLowerCase().includes('hiking') || e.description.toLowerCase().includes('outdoor')).length }
  ]

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.location.toLowerCase().includes(searchTerm.toLowerCase())
    
    let matchesFilter = true
    if (selectedFilter !== 'all') {
      const searchTerms = {
        social: ['social', 'bbq', 'night', 'party'],
        academic: ['study', 'language', 'workshop', 'career'],
        food: ['food', 'bbq', 'cooking', 'restaurant'],
        outdoor: ['hiking', 'outdoor', 'park', 'nature']
      }
      
      const terms = searchTerms[selectedFilter as keyof typeof searchTerms] || []
      matchesFilter = terms.some(term => 
        event.title.toLowerCase().includes(term) || 
        event.description.toLowerCase().includes(term)
      )
    }
    
    return matchesSearch && matchesFilter
  })

  const formatDateTime = (datetime: string) => {
    const date = new Date(datetime)
    return {
      date: date.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric', 
        year: 'numeric' 
      }),
      time: date.toLocaleTimeString('en-US', { 
        hour: '2-digit', 
        minute: '2-digit',
        hour12: false 
      })
    }
  }

  const isEventPast = (datetime: string) => {
    return new Date(datetime) < new Date()
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Loading events...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            PPMK Meetups
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Connect with fellow Malaysian students in Korea. Join exciting gatherings, 
            make new friends, and create unforgettable memories together.
          </p>
          
          {/* Single Host Gathering Button */}
          <div className="flex flex-col items-center space-y-4 mb-8">
            <button
              onClick={handleHostGathering}
              className="inline-flex items-center justify-center space-x-3 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 min-w-[250px]"
            >
              <Plus className="w-6 h-6" />
              <span>{user ? 'Host New Gathering' : 'Sign In to Host Event'}</span>
            </button>
            
            {/* User Status Indicator */}
            {user && (
              <p className="text-sm text-gray-600">
                Welcome back, {user.fullName || user.email}!
              </p>
            )}
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl mb-8">
            {error}
          </div>
        )}

        {/* Search and Filter Section */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search meetups, locations, or activities..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <select
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                className="px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 bg-white"
              >
                {categories.map(category => (
                  <option key={category.value} value={category.value}>
                    {category.label} ({category.count})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => {
            const { date, time } = formatDateTime(event.datetime)
            const isPast = isEventPast(event.datetime)
            
            return (
              <div key={event.id} className={`bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:scale-105 ${isPast ? 'opacity-75' : ''}`}>
                {/* Header with Status */}
                <div className="relative p-4 bg-gradient-to-r from-primary-600 to-primary-700">
                  <div className="flex items-center justify-between">
                    <div className="text-white">
                      <h3 className="font-bold text-lg mb-1">{event.title}</h3>
                      <div className="flex items-center space-x-4 text-sm opacity-90">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{date}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{time}</span>
                        </div>
                      </div>
                    </div>
                    {isPast && (
                      <span className="bg-gray-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                        Past Event
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {event.description}
                  </p>

                  {/* Event Details */}
                  <div className="space-y-3 text-sm text-gray-600 mb-4">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 flex-shrink-0" />
                      <span className="line-clamp-1">{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 flex-shrink-0" />
                      <span>Max {event.participant_amount} participants</span>
                    </div>
                    {event.fees && (
                      <div className="flex items-center space-x-2">
                        <span className="w-4 h-4 flex items-center justify-center text-xs">₩</span>
                        <span>{event.fees}</span>
                      </div>
                    )}
                  </div>

                  {/* Contact Information */}
                  {(event.inquiry_phone || event.inquiry_ig) && (
                    <div className="flex items-center space-x-4 mb-4 p-3 bg-gray-50 rounded-lg">
                      <span className="text-sm font-medium text-gray-900">Contact:</span>
                      {event.inquiry_phone && (
                        <a 
                          href={`tel:${event.inquiry_phone}`}
                          className="flex items-center space-x-1 text-primary-600 hover:text-primary-700 transition-colors"
                        >
                          <Phone className="w-4 h-4" />
                          <span className="text-sm">{event.inquiry_phone}</span>
                        </a>
                      )}
                      {event.inquiry_ig && (
                        <a 
                          href={`https://instagram.com/${event.inquiry_ig.replace('@', '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-1 text-primary-600 hover:text-primary-700 transition-colors"
                        >
                          <Instagram className="w-4 h-4" />
                          <span className="text-sm">{event.inquiry_ig}</span>
                        </a>
                      )}
                    </div>
                  )}

                  {/* Author Information */}
                  {event.author && (
                    <div className="flex items-center space-x-2 mb-4 p-3 bg-gray-50 rounded-lg">
                      <User className="w-4 h-4 text-primary-600 flex-shrink-0" />
                      <span className="text-sm text-gray-600">
                        Written by <span className="font-medium text-gray-900">{event.author.full_name || 'Anonymous'}</span>
                        {event.author.university && (
                          <span> from <span className="font-medium text-gray-900">{event.author.university}</span></span>
                        )}
                        {event.author.batch && (
                          <span className="text-xs text-gray-500 ml-1">(Batch {event.author.batch})</span>
                        )}
                      </span>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <button className="flex items-center space-x-1 text-gray-500 hover:text-primary-600 transition-colors">
                        <Heart className="w-4 h-4" />
                        <span className="text-sm">Like</span>
                      </button>
                      <button className="flex items-center space-x-1 text-gray-500 hover:text-primary-600 transition-colors">
                        <MessageCircle className="w-4 h-4" />
                        <span className="text-sm">Comment</span>
                      </button>
                      <button className="flex items-center space-x-1 text-gray-500 hover:text-primary-600 transition-colors">
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      {event.kakao_link && (
                        <a
                          href={event.kakao_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-1 px-3 py-2 bg-yellow-400 text-yellow-900 rounded-lg hover:bg-yellow-500 transition-colors text-sm font-medium"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>KakaoTalk</span>
                        </a>
                      )}
                      <button 
                        className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                          isPast 
                            ? 'bg-gray-100 text-gray-500 cursor-not-allowed' 
                            : 'bg-primary-600 text-white hover:bg-primary-700 shadow-md hover:shadow-lg'
                        }`}
                        disabled={isPast}
                      >
                        {isPast ? 'Event Ended' : 'Join Event'}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Empty State */}
        {filteredEvents.length === 0 && !loading && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
              <Search className="w-12 h-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No events found</h3>
            <p className="text-gray-600 mb-6">
              {events.length === 0 
                ? "No events have been created yet. Be the first to host a gathering!"
                : "Try adjusting your search terms or filters to find more events."
              }
            </p>
            <button
              onClick={() => {
                if (events.length === 0) {
                  handleHostGathering()
                } else {
                  setSearchTerm('')
                  setSelectedFilter('all')
                }
              }}
              className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors shadow-md hover:shadow-lg"
            >
              {events.length === 0 ? (user ? 'Host First Event' : 'Sign In to Host') : 'Clear Filters'}
            </button>
          </div>
        )}
      </div>

      {/* Modals */}
      <AuthModal 
        isOpen={showAuthModal} 
        onClose={handleAuthModalClose}
        onSuccess={handleAuthSuccess}
      />
      
      <CreateEventModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        onEventCreated={handleEventCreated}
      />
    </div>
  )
}

export default Meetup
