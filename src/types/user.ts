export interface UserProfile {
  id: string
  full_name?: string
  university?: string
  batch?: string
  created_at: string
  updated_at: string
}

export interface EventWithAuthor {
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
  author?: {
    full_name?: string
    university?: string
    batch?: string
  }
}
