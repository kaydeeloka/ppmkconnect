import { supabase } from '../lib/supabase'
import { CreateEventRequest, Event, EventResponse, EventsListResponse } from '../types/event'
import { EventWithAuthor } from '../types/user'
import { ProfilesAPI } from './profiles'

export class EventsAPI {
  // Create a new event
  static async createEvent(eventData: CreateEventRequest): Promise<EventResponse> {
    try {
      // Check if user is authenticated
      const { data: { user }, error: authError } = await supabase.auth.getUser()
      
      if (authError || !user) {
        return {
          success: false,
          error: 'User must be authenticated to create events'
        }
      }

      // Insert event into database
      const { data, error } = await supabase
        .from('events')
        .insert([
          {
            ...eventData,
            organizer_id: user.id,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          }
        ])
        .select()
        .single()

      if (error) {
        console.error('Error creating event:', error)
        return {
          success: false,
          error: error.message
        }
      }

      return {
        success: true,
        data: data as Event
      }
    } catch (error: any) {
      console.error('Unexpected error creating event:', error)
      return {
        success: false,
        error: 'An unexpected error occurred while creating the event'
      }
    }
  }

  // Get all events with author information
  static async getEventsWithAuthors(): Promise<{ success: boolean; data?: EventWithAuthor[]; error?: string }> {
    try {
      // First get all events
      const { data: events, error: eventsError } = await supabase
        .from('events')
        .select('*')
        .order('datetime', { ascending: true })

      if (eventsError) {
        console.error('Error fetching events:', eventsError)
        return {
          success: false,
          error: eventsError.message
        }
      }

      if (!events || events.length === 0) {
        return {
          success: true,
          data: []
        }
      }

      // Get unique organizer IDs
      const organizerIds = [...new Set(events.map(event => event.organizer_id))]

      // Fetch profiles for all organizers
      const profilesResponse = await ProfilesAPI.getProfiles(organizerIds)
      
      if (!profilesResponse.success) {
        // If profiles fetch fails, return events without author info
        console.warn('Failed to fetch profiles, returning events without author info')
        return {
          success: true,
          data: events.map(event => ({ ...event, author: undefined }))
        }
      }

      // Create a map of profiles by user ID
      const profilesMap = new Map()
      if (profilesResponse.data) {
        profilesResponse.data.forEach(profile => {
          profilesMap.set(profile.id, profile)
        })
      }

      // Combine events with author information
      const eventsWithAuthors: EventWithAuthor[] = events.map(event => {
        const profile = profilesMap.get(event.organizer_id)
        return {
          ...event,
          author: profile ? {
            full_name: profile.full_name,
            university: profile.university,
            batch: profile.batch
          } : undefined
        }
      })

      return {
        success: true,
        data: eventsWithAuthors
      }
    } catch (error: any) {
      console.error('Unexpected error fetching events with authors:', error)
      return {
        success: false,
        error: 'An unexpected error occurred while fetching events'
      }
    }
  }

  // Get all events (without organizer join)
  static async getEvents(): Promise<EventsListResponse> {
    try {
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .order('datetime', { ascending: true })

      if (error) {
        console.error('Error fetching events:', error)
        return {
          success: false,
          error: error.message
        }
      }

      return {
        success: true,
        data: data as Event[]
      }
    } catch (error: any) {
      console.error('Unexpected error fetching events:', error)
      return {
        success: false,
        error: 'An unexpected error occurred while fetching events'
      }
    }
  }

  // Get events by organizer
  static async getEventsByOrganizer(organizerId: string): Promise<EventsListResponse> {
    try {
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .eq('organizer_id', organizerId)
        .order('datetime', { ascending: true })

      if (error) {
        console.error('Error fetching organizer events:', error)
        return {
          success: false,
          error: error.message
        }
      }

      return {
        success: true,
        data: data as Event[]
      }
    } catch (error: any) {
      console.error('Unexpected error fetching organizer events:', error)
      return {
        success: false,
        error: 'An unexpected error occurred while fetching organizer events'
      }
    }
  }

  // Get single event by ID
  static async getEventById(eventId: string): Promise<EventResponse> {
    try {
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .eq('id', eventId)
        .single()

      if (error) {
        console.error('Error fetching event:', error)
        return {
          success: false,
          error: error.message
        }
      }

      return {
        success: true,
        data: data as Event
      }
    } catch (error: any) {
      console.error('Unexpected error fetching event:', error)
      return {
        success: false,
        error: 'An unexpected error occurred while fetching the event'
      }
    }
  }

  // Update event (only by organizer)
  static async updateEvent(eventId: string, updates: Partial<CreateEventRequest>): Promise<EventResponse> {
    try {
      // Check if user is authenticated
      const { data: { user }, error: authError } = await supabase.auth.getUser()
      
      if (authError || !user) {
        return {
          success: false,
          error: 'User must be authenticated to update events'
        }
      }

      // Check if user is the organizer
      const { data: existingEvent, error: fetchError } = await supabase
        .from('events')
        .select('organizer_id')
        .eq('id', eventId)
        .single()

      if (fetchError) {
        return {
          success: false,
          error: 'Event not found'
        }
      }

      if (existingEvent.organizer_id !== user.id) {
        return {
          success: false,
          error: 'Only the event organizer can update this event'
        }
      }

      // Update the event
      const { data, error } = await supabase
        .from('events')
        .update({
          ...updates,
          updated_at: new Date().toISOString()
        })
        .eq('id', eventId)
        .select()
        .single()

      if (error) {
        console.error('Error updating event:', error)
        return {
          success: false,
          error: error.message
        }
      }

      return {
        success: true,
        data: data as Event
      }
    } catch (error: any) {
      console.error('Unexpected error updating event:', error)
      return {
        success: false,
        error: 'An unexpected error occurred while updating the event'
      }
    }
  }

  // Delete event (only by organizer)
  static async deleteEvent(eventId: string): Promise<{ success: boolean; error?: string }> {
    try {
      // Check if user is authenticated
      const { data: { user }, error: authError } = await supabase.auth.getUser()
      
      if (authError || !user) {
        return {
          success: false,
          error: 'User must be authenticated to delete events'
        }
      }

      // Check if user is the organizer
      const { data: existingEvent, error: fetchError } = await supabase
        .from('events')
        .select('organizer_id')
        .eq('id', eventId)
        .single()

      if (fetchError) {
        return {
          success: false,
          error: 'Event not found'
        }
      }

      if (existingEvent.organizer_id !== user.id) {
        return {
          success: false,
          error: 'Only the event organizer can delete this event'
        }
      }

      // Delete the event
      const { error } = await supabase
        .from('events')
        .delete()
        .eq('id', eventId)

      if (error) {
        console.error('Error deleting event:', error)
        return {
          success: false,
          error: error.message
        }
      }

      return {
        success: true
      }
    } catch (error: any) {
      console.error('Unexpected error deleting event:', error)
      return {
        success: false,
        error: 'An unexpected error occurred while deleting the event'
      }
    }
  }
}
