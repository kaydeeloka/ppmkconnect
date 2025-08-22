export interface User {
  id: string
  email: string
  university?: string
  batch?: string
  fullname?: string
  createdAt?: string
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

export interface SignUpCredentials extends LoginCredentials {
  fullname: string
  university: string
  batch: string
}
