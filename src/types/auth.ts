export interface User {
  id: string
  email: string
  username: string
  university: string
  batch_number: number
  created_at?: string
  updated_at?: string
}

export interface AuthState {
  user: User | null
  loading: boolean
  error: string | null
}

export interface LoginCredentials {
  email: string
  password: string
}

export interface SignupCredentials {
  email: string
  username: string
  password: string
  university: string
  batch_number: number
}
