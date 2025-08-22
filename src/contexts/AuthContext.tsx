import React, { createContext, useContext, useEffect, useState } from 'react'
import { supabase } from '../lib/supabase'
import { User, AuthState } from '../types/auth'

interface AuthContextType extends AuthState {
  signIn: (email: string, password: string) => Promise<void>
  signUp: (email: string, password: string, metadata: any) => Promise<void>
  signOut: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    loading: true,
    error: null
  })

  useEffect(() => {
    checkUser()
    
    const { data: authListener } = supabase.auth.onAuthStateChange(async (event, session) => {
      if (session?.user) {
        const userData: User = {
          id: session.user.id,
          email: session.user.email || '',
          university: session.user.user_metadata?.university,
          batch: session.user.user_metadata?.batch,
          fullName: session.user.user_metadata?.fullName,
          createdAt: session.user.created_at
        }
        setAuthState({ user: userData, loading: false, error: null })
      } else {
        setAuthState({ user: null, loading: false, error: null })
      }
    })

    return () => {
      authListener?.subscription.unsubscribe()
    }
  }, [])

  const checkUser = async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession()
      if (session?.user) {
        const userData: User = {
          id: session.user.id,
          email: session.user.email || '',
          university: session.user.user_metadata?.university,
          batch: session.user.user_metadata?.batch,
          fullName: session.user.user_metadata?.fullName,
          createdAt: session.user.created_at
        }
        setAuthState({ user: userData, loading: false, error: null })
      } else {
        setAuthState({ user: null, loading: false, error: null })
      }
    } catch (error) {
      setAuthState({ user: null, loading: false, error: 'Failed to check authentication' })
    }
  }

const signIn = async (email: string, password: string) => {
  try {
    setAuthState(prev => ({ ...prev, loading: true, error: null }))

    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
      let errorMessage = "An unexpected error occurred"

      if (error.message.includes("Invalid login credentials")) {
        errorMessage = "The email or password is incorrect"
      } else if (error.message.includes("Email not confirmed")) {
        errorMessage = "Please confirm your email before logging in"
      }

      throw new Error(errorMessage)

    }
  } catch (error: any) {
    setAuthState(prev => ({ ...prev, loading: false, error: error.message }))
    throw error
  }
}


  const signUp = async (email: string, password: string, metadata: any) => {
    try {
      setAuthState(prev => ({ ...prev, loading: true, error: null }))
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: metadata
        }
      })
      if (error) throw error
    } catch (error: any) {
      setAuthState(prev => ({ ...prev, loading: false, error: error.message }))
      throw error
    }
  }

  const signOut = async () => {
    try {
      setAuthState(prev => ({ ...prev, loading: true, error: null }))
      const { error } = await supabase.auth.signOut()
      if (error) throw error
      setAuthState({ user: null, loading: false, error: null })
    } catch (error: any) {
      setAuthState(prev => ({ ...prev, loading: false, error: error.message }))
      throw error
    }
  }

  return (
    <AuthContext.Provider value={{ ...authState, signIn, signUp, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}
