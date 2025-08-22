import { supabase } from '../lib/supabase'
import { UserProfile } from '../types/user'

export class ProfilesAPI {
  // Get user profile by ID
  static async getProfile(userId: string): Promise<{ success: boolean; data?: UserProfile; error?: string }> {
    try {
      const { data, error } = await supabase
        .from('user_profiles')
        .select('*')
        .eq('id', userId)
        .single()

      if (error) {
        console.error('Error fetching profile:', error)
        return {
          success: false,
          error: error.message
        }
      }

      return {
        success: true,
        data: data as UserProfile
      }
    } catch (error: any) {
      console.error('Unexpected error fetching profile:', error)
      return {
        success: false,
        error: 'An unexpected error occurred while fetching the profile'
      }
    }
  }

  // Update user profile
  static async updateProfile(userId: string, updates: Partial<UserProfile>): Promise<{ success: boolean; data?: UserProfile; error?: string }> {
    try {
      const { data, error } = await supabase
        .from('user_profiles')
        .update({
          ...updates,
          updated_at: new Date().toISOString()
        })
        .eq('id', userId)
        .select()
        .single()

      if (error) {
        console.error('Error updating profile:', error)
        return {
          success: false,
          error: error.message
        }
      }

      return {
        success: true,
        data: data as UserProfile
      }
    } catch (error: any) {
      console.error('Unexpected error updating profile:', error)
      return {
        success: false,
        error: 'An unexpected error occurred while updating the profile'
      }
    }
  }

  // Create user profile
  static async createProfile(userId: string, profileData: Partial<UserProfile>): Promise<{ success: boolean; data?: UserProfile; error?: string }> {
    try {
      const { data, error } = await supabase
        .from('user_profiles')
        .insert([
          {
            id: userId,
            ...profileData,
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
          }
        ])
        .select()
        .single()

      if (error) {
        console.error('Error creating profile:', error)
        return {
          success: false,
          error: error.message
        }
      }

      return {
        success: true,
        data: data as UserProfile
      }
    } catch (error: any) {
      console.error('Unexpected error creating profile:', error)
      return {
        success: false,
        error: 'An unexpected error occurred while creating the profile'
      }
    }
  }

  // Get multiple profiles by IDs
  static async getProfiles(userIds: string[]): Promise<{ success: boolean; data?: UserProfile[]; error?: string }> {
    try {
      const { data, error } = await supabase
        .from('user_profiles')
        .select('*')
        .in('id', userIds)

      if (error) {
        console.error('Error fetching profiles:', error)
        return {
          success: false,
          error: error.message
        }
      }

      return {
        success: true,
        data: data as UserProfile[]
      }
    } catch (error: any) {
      console.error('Unexpected error fetching profiles:', error)
      return {
        success: false,
        error: 'An unexpected error occurred while fetching profiles'
      }
    }
  }
}
