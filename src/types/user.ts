export interface User {
  id: string
  email: string
  university?: string
  batch?: string
  fullName?: string
  createdAt: string
}

export interface Profile {
  id: string
  full_name: string | null
  university: string | null
  batch: string | null
  created_at: string
  updated_at: string
}

export interface EventAuthor {
  full_name: string | null
  university: string | null
  batch: string | null
}

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
  created_at: string
  updated_at: string
}

export interface EventWithAuthor extends Event {
  author?: EventAuthor
}
