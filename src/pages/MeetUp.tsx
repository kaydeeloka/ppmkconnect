import React, { useState, useEffect } from 'react'
import { Calendar, MapPin, Users, Clock, Plus, Search, Filter, Phone, Instagram, ExternalLink, User, Edit, Trash2, Settings, Building } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'
import AuthModal from '../components/AuthModal'
import CreateEventModal from '../components/CreateEventModal'
import EditEventModal from '../components/EditEventModal'
import DeleteConfirmModal from '../components/DeleteConfirmModal'
import { EventsAPI } from '../api/events'
import { EventWithAuthor, Event } from '../types/user'

const Meetup = () => {
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [showCreateModal, setShowCreateModal] = useState(false)
  const [showEditModal, setShowEditModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [events, setEvents] = useState<EventWithAuthor[]>([])
  const [myEvents, setMyEvents] = useState<Event[]>([])
  const [loading, setLoading] = useState(true)
  const [myEventsLoading, setMyEventsLoading] = useState(false)
  const [deleteLoading, setDeleteLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [showMyEvents, setShowMyEvents] = useState(false)
  const { user, setPendingAction } = useAuth()

  // Load events on component mount
  useEffect(() => {
    loadEvents()
  }, [])

  // Load user's events when user changes or when showMyEvents is toggled
  useEffect(() => {
    if (user && showMyEvents) {
      loadMyEvents()
    }
  }, [user, showMyEvents])

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

  const loadMyEvents = async () => {
    if (!user) return

    setMyEventsLoading(true)
    
    try {
      const response = await EventsAPI.getEventsByOrganizer(user.id)
      if (response.success && response.data) {
        setMyEvents(response.data)
      } else {
        console.error('Failed to load my events:', response.error)
      }
    } catch (error: any) {
      console.error('Error loading my events:', error)
    } finally {
      setMyEventsLoading(false)
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
    if (showMyEvents) {
      loadMyEvents() // Refresh my events if showing
    }
    setShowCreateModal(false)
  }

  const handleEventUpdated = () => {
    loadEvents() // Refresh events list
    loadMyEvents() // Refresh my events
    setShowEditModal(false)
    setSelectedEvent(null)
  }

  const handleEditEvent = (event: Event) => {
    setSelectedEvent(event)
    setShowEditModal(true)
  }

  const handleDeleteEvent = (event: Event) => {
    setSelectedEvent(event)
    setShowDeleteModal(true)
  }

  const confirmDeleteEvent = async () => {
    if (!selectedEvent) return

    setDeleteLoading(true)
    
    try {
      const response = await EventsAPI.deleteEvent(selectedEvent.id)
      if (response.success) {
        loadEvents() // Refresh events list
        loadMyEvents() // Refresh my events
        setShowDeleteModal(false)
        setSelectedEvent(null)
      } else {
        console.error('Failed to delete event:', response.error)
        // You might want to show an error message to the user here
      }
    } catch (error: any) {
      console.error('Error deleting event:', error)
    } finally {
      setDeleteLoading(false)
    }
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
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-8">
            <button
              onClick={handleHostGathering}
              className="inline-flex items-center justify-center space-x-3 bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 min-w-[250px]"
            >
              <Plus className="w-6 h-6" />
              <span>{user ? 'Host New Gathering' : 'Host Event'}</span>
            </button>
            
            {user && (
              <button
                onClick={() => setShowMyEvents(!showMyEvents)}
                className={`inline-flex items-center justify-center space-x-3 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 min-w-[200px] ${
                  showMyEvents 
                    ? 'bg-gray-600 hover:bg-gray-700 text-white' 
                    : 'bg-white hover:bg-gray-50 text-gray-700 border border-gray-300'
                }`}
              >
                <Calendar className="w-6 h-6" />
                <span>{showMyEvents ? 'Show All Events' : 'My Events'}</span>
              </button>
            )}
          </div>
          
          {/* User Status Indicator */}
          {user && (
            <p className="text-sm text-gray-600">
              Welcome back, {user.fullName || user.email}!
            </p>
          )}
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl mb-8">
            {error}
          </div>
        )}

        {/* My Events Section */}
        {user && showMyEvents && (
          <div className="mb-12">
            <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">My Events</h2>
                <span className="text-sm text-gray-500">
                  {myEvents.length} event{myEvents.length !== 1 ? 's' : ''}
                </span>
              </div>

              {myEventsLoading ? (
                <div className="text-center py-8">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600 mx-auto mb-4"></div>
                  <p className="text-gray-600">Loading your events...</p>
                </div>
              ) : myEvents.length === 0 ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No events yet</h3>
                  <p className="text-gray-600 mb-4">You haven't created any events yet.</p>
                  <button
                    onClick={() => setShowCreateModal(true)}
                    className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
                  >
                    Create Your First Event
                  </button>
                </div>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {myEvents.map((event) => {
                    const { date, time } = formatDateTime(event.datetime)
                    const isPast = isEventPast(event.datetime)
                    
                    return (
                      <div key={event.id} className={`bg-gray-50 rounded-xl border-2 border-dashed border-gray-200 overflow-hidden hover:border-primary-300 transition-all duration-300 ${isPast ? 'opacity-75' : ''}`}>
                        {/* Header with Status */}
                        <div className="relative p-4 bg-gradient-to-r from-gray-600 to-gray-700">
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

                          {/* Organisation Information */}
                          {(event as any).organiser_name && (
                            <div className="flex items-center space-x-2 mb-4 p-3 bg-blue-50 rounded-lg">
                              <Building className="w-4 h-4 text-blue-600 flex-shrink-0" />
                              <span className="text-sm text-gray-600">
                                Organised by <span className="font-medium text-gray-900">{(event as any).organiser_name}</span>
                              </span>
                            </div>
                          )}

                          {/* Action Buttons */}
                          <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                            <div className="text-xs text-gray-500">
                              Created {new Date(event.created_at).toLocaleDateString()}
                            </div>
                            
                            <div className="flex items-center space-x-2">
                              <button
                                onClick={() => handleEditEvent(event)}
                                className="flex items-center space-x-1 px-3 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                              >
                                <Edit className="w-4 h-4" />
                                <span>Edit</span>
                              </button>
                              <button
                                onClick={() => handleDeleteEvent(event)}
                                className="flex items-center space-x-1 px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm font-medium"
                              >
                                <Trash2 className="w-4 h-4" />
                                <span>Delete</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Search and Filter Section - Only show when not in My Events mode */}
        {!showMyEvents && (
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
        )}

        {/* Events Grid - Only show when not in My Events mode */}
        {!showMyEvents && (
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

                    {/* Organisation Information */}
                    {(event as any).organiser_name && (
                      <div className="flex items-center space-x-2 mb-4 p-3 bg-blue-50 rounded-lg">
                        <Building className="w-4 h-4 text-blue-600 flex-shrink-0" />
                        <span className="text-sm text-gray-600">
                          Organised by <span className="font-medium text-gray-900">{(event as any).organiser_name}</span>
                        </span>
                      </div>
                    )}

                    {/* KakaoTalk Link */}
                    {event.kakao_link && (
                      <div className="flex justify-center">
                        <a
                          href={event.kakao_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 px-4 py-2 bg-yellow-400 text-yellow-900 rounded-lg hover:bg-yellow-500 transition-colors text-sm font-medium"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Join KakaoTalk Group</span>
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {/* Empty State - Only show when not in My Events mode */}
        {!showMyEvents && filteredEvents.length === 0 && !loading && (
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

      <EditEventModal
        isOpen={showEditModal}
        onClose={() => {
          setShowEditModal(false)
          setSelectedEvent(null)
        }}
        onEventUpdated={handleEventUpdated}
        event={selectedEvent}
      />

      <DeleteConfirmModal
        isOpen={showDeleteModal}
        onClose={() => {
          setShowDeleteModal(false)
          setSelectedEvent(null)
        }}
        onConfirm={confirmDeleteEvent}
        eventTitle={selectedEvent?.title || ''}
        loading={deleteLoading}
      />
    </div>
  )
}

export default Meetup
