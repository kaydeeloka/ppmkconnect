import React, { useState } from 'react'
import { X, Calendar, MapPin, Users, DollarSign, Phone, MessageCircle, Link } from 'lucide-react'
import { EventsAPI } from '../api/events'
import { CreateEventRequest } from '../types/event'

interface CreateEventModalProps {
  isOpen: boolean
  onClose: () => void
  onEventCreated?: () => void
}

const CreateEventModal: React.FC<CreateEventModalProps> = ({ isOpen, onClose, onEventCreated }) => {
  const [formData, setFormData] = useState<CreateEventRequest>({
    title: '',
    datetime: '',
    location: '',
    participant_amount: 1,
    description: '',
    inquiry_phone: '',
    inquiry_ig: '',
    fees: '',
    kakao_link: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: name === 'participant_amount' ? parseInt(value) || 1 : value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      // Validate required fields
      if (!formData.title || !formData.datetime || !formData.location || !formData.description) {
        setError('Please fill in all required fields')
        return
      }

      // Validate datetime is in the future
      const eventDate = new Date(formData.datetime)
      if (eventDate <= new Date()) {
        setError('Event date must be in the future')
        return
      }

      const response = await EventsAPI.createEvent(formData)

      if (response.success) {
        // Reset form
        setFormData({
          title: '',
          datetime: '',
          location: '',
          participant_amount: 1,
          description: '',
          inquiry_phone: '',
          inquiry_ig: '',
          fees: '',
          kakao_link: ''
        })
        onEventCreated?.()
        onClose()
      } else {
        setError(response.error || 'Failed to create event')
      }
    } catch (error: any) {
      setError('An unexpected error occurred')
      console.error('Error creating event:', error)
    } finally {
      setLoading(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-ppmk-dark">Host New Gathering</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-gray-500" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}

          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-ppmk-dark mb-2">
              Event Title *
            </label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="e.g., Korean BBQ Night"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ppmk-dark/30 focus:border-ppmk-dark"
              required
            />
          </div>

          {/* Date and Time */}
          <div>
            <label className="block text-sm font-medium text-ppmk-dark mb-2">
              <Calendar className="w-4 h-4 inline mr-1" />
              Date & Time *
            </label>
            <input
              type="datetime-local"
              name="datetime"
              value={formData.datetime}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ppmk-dark/30 focus:border-ppmk-dark"
              required
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-ppmk-dark mb-2">
              <MapPin className="w-4 h-4 inline mr-1" />
              Location *
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleInputChange}
              placeholder="e.g., Gangnam BBQ House, Seoul"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ppmk-dark/30 focus:border-ppmk-dark"
              required
            />
          </div>

          {/* Participant Amount */}
          <div>
            <label className="block text-sm font-medium text-ppmk-dark mb-2">
              <Users className="w-4 h-4 inline mr-1" />
              Maximum Participants
            </label>
            <input
              type="number"
              name="participant_amount"
              value={formData.participant_amount}
              onChange={handleInputChange}
              min="1"
              max="100"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ppmk-dark/30 focus:border-ppmk-dark"
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-ppmk-dark mb-2">
              Description *
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows={4}
              placeholder="Describe your event, what to expect, what to bring, etc."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ppmk-dark/30 focus:border-ppmk-dark resize-none"
              required
            />
          </div>

          {/* Fees */}
          <div>
            <label className="block text-sm font-medium text-ppmk-dark mb-2">
              <DollarSign className="w-4 h-4 inline mr-1" />
              Fees
            </label>
            <input
              type="text"
              name="fees"
              value={formData.fees}
              onChange={handleInputChange}
              placeholder="e.g., Free, ₩10,000, ₩5,000 per person"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ppmk-dark/30 focus:border-ppmk-dark"
            />
          </div>

          {/* Contact Information */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-ppmk-dark mb-2">
                <Phone className="w-4 h-4 inline mr-1" />
                Phone Number
              </label>
              <input
                type="tel"
                name="inquiry_phone"
                value={formData.inquiry_phone}
                onChange={handleInputChange}
                placeholder="e.g., +82 10-1234-5678"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ppmk-dark/30 focus:border-ppmk-dark"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-ppmk-dark mb-2">
                <MessageCircle className="w-4 h-4 inline mr-1" />
                Instagram Handle
              </label>
              <input
                type="text"
                name="inquiry_ig"
                value={formData.inquiry_ig}
                onChange={handleInputChange}
                placeholder="e.g., @username"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ppmk-dark/30 focus:border-ppmk-dark"
              />
            </div>
          </div>

          {/* Kakao Link */}
          <div>
            <label className="block text-sm font-medium text-ppmk-dark mb-2">
              <Link className="w-4 h-4 inline mr-1" />
              KakaoTalk Group Link
            </label>
            <input
              type="url"
              name="kakao_link"
              value={formData.kakao_link}
              onChange={handleInputChange}
              placeholder="https://open.kakao.com/o/..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ppmk-dark/30 focus:border-ppmk-dark"
            />
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-end space-x-4 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-3 text-ppmk-dark border border-ppmk-dark/20 rounded-lg hover:bg-ppmk-light transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 bg-ppmk-dark text-white rounded-lg hover:bg-ppmk-dark/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Creating...' : 'Create Event'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CreateEventModal
