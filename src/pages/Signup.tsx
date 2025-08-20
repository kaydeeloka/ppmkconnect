import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Mail, Lock, User, School, Calendar } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'
import { NeumorphicInput } from '../components/NeumorphicInput'
import { NeumorphicButton } from '../components/NeumorphicButton'
import { NeumorphicSelect } from '../components/NeumorphicSelect'

const universities = [
  { value: 'Seoul National University', label: 'Seoul National University' },
  { value: 'Yonsei University', label: 'Yonsei University' },
  { value: 'Korea University', label: 'Korea University' },
  { value: 'KAIST', label: 'KAIST' },
  { value: 'Sungkyunkwan University', label: 'Sungkyunkwan University' },
  { value: 'Hanyang University', label: 'Hanyang University' },
  { value: 'Kyung Hee University', label: 'Kyung Hee University' },
  { value: 'Sogang University', label: 'Sogang University' },
  { value: 'Ewha Womans University', label: 'Ewha Womans University' },
  { value: 'Chung-Ang University', label: 'Chung-Ang University' },
  { value: 'Other', label: 'Other' },
]

const batchYears = Array.from({ length: 10 }, (_, i) => {
  const year = new Date().getFullYear() - i
  return { value: year % 100, label: `Batch ${year % 100} (${year})` }
})

export const Signup: React.FC = () => {
  const navigate = useNavigate()
  const { signup, error, clearError } = useAuth()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    university: '',
    batch_number: 0,
  })
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const errors: Record<string, string> = {}
    
    if (!formData.email.includes('@')) {
      errors.email = 'Please enter a valid email address'
    }
    
    if (formData.username.length < 3) {
      errors.username = 'Username must be at least 3 characters'
    }
    
    if (formData.password.length < 6) {
      errors.password = 'Password must be at least 6 characters'
    }
    
    if (formData.password !== formData.confirmPassword) {
      errors.confirmPassword = 'Passwords do not match'
    }
    
    if (!formData.university) {
      errors.university = 'Please select your university'
    }
    
    if (!formData.batch_number) {
      errors.batch_number = 'Please select your batch year'
    }
    
    setValidationErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    clearError()
    
    if (!validateForm()) {
      return
    }
    
    setLoading(true)
    
    try {
      await signup({
        email: formData.email,
        username: formData.username,
        password: formData.password,
        university: formData.university,
        batch_number: formData.batch_number,
      })
      navigate('/dashboard')
    } catch (error) {
      console.error('Signup error:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: name === 'batch_number' ? parseInt(value) : value
    }))
    
    // Clear validation error for this field
    if (validationErrors[name]) {
      setValidationErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  return (
    <div className="min-h-screen bg-neu-base flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Logo and Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-neu-base shadow-neu-outset mb-6">
            <School className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-3xl font-bold text-primary mb-2">Join PPMK</h1>
          <p className="text-neu-dark">Create your student account</p>
        </div>

        {/* Signup Form Card */}
        <div className="bg-neu-base rounded-3xl shadow-neu-outset p-8">
          <form onSubmit={handleSubmit}>
            <div className="relative mb-6">
              <Mail className="absolute left-4 top-[38px] w-5 h-5 text-neu-dark" />
              <NeumorphicInput
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="student@example.com"
                required
                className="pl-12"
                error={validationErrors.email}
              />
            </div>

            <div className="relative mb-6">
              <User className="absolute left-4 top-[38px] w-5 h-5 text-neu-dark" />
              <NeumorphicInput
                label="Username"
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Choose a username"
                required
                className="pl-12"
                error={validationErrors.username}
              />
            </div>

            <div className="relative mb-6">
              <Lock className="absolute left-4 top-[38px] w-5 h-5 text-neu-dark" />
              <NeumorphicInput
                label="Password"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a password"
                required
                className="pl-12"
                error={validationErrors.password}
              />
            </div>

            <div className="relative mb-6">
              <Lock className="absolute left-4 top-[38px] w-5 h-5 text-neu-dark" />
              <NeumorphicInput
                label="Confirm Password"
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
                required
                className="pl-12"
                error={validationErrors.confirmPassword}
              />
            </div>

            <div className="relative mb-6">
              <School className="absolute left-4 top-[38px] w-5 h-5 text-neu-dark z-10 pointer-events-none" />
              <NeumorphicSelect
                label="University"
                name="university"
                value={formData.university}
                onChange={handleChange}
                options={universities}
                required
                className="pl-12"
                error={validationErrors.university}
              />
            </div>

            <div className="relative mb-6">
              <Calendar className="absolute left-4 top-[38px] w-5 h-5 text-neu-dark z-10 pointer-events-none" />
              <NeumorphicSelect
                label="Batch Year"
                name="batch_number"
                value={formData.batch_number}
                onChange={handleChange}
                options={batchYears}
                required
                className="pl-12"
                error={validationErrors.batch_number}
              />
            </div>

            {error && (
              <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm">
                {error}
              </div>
            )}

            <NeumorphicButton
              type="submit"
              variant="primary"
              loading={loading}
              className="w-full mb-4"
            >
              Create Account
            </NeumorphicButton>

            <div className="text-center">
              <p className="text-neu-dark text-sm">
                Already have an account?{' '}
                <Link to="/login" className="text-primary font-medium hover:underline">
                  Sign in here
                </Link>
              </p>
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-xs text-neu-dark">
            By signing up, you agree to PPMK's Terms of Service
          </p>
        </div>
      </div>
    </div>
  )
}
