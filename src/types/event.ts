export interface Event {
  id: string
  title: string
  datetime: string
  location: string
  organizer_id: string
  participant_amount: number
  description: string
  inquiry_phone?: string
  inquiry_ig?: string
  fees: string
  kakao_link?: string
  organiser_name?: string
  created_at: string
  updated_at: string
}

export interface CreateEventRequest {
  title: string
  datetime: string
  location: string
  participant_amount: number
  description: string
  inquiry_phone?: string
  inquiry_ig?: string
  fees: string
  kakao_link?: string
  organiser_name?: string
}

export interface EventResponse {
  success: boolean
  data?: Event
  error?: string
}

export interface EventsListResponse {
  success: boolean
  data?: Event[]
  error?: string
}
