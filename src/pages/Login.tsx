import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Mail, Lock, GraduationCap } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'
import { NeumorphicInput } from '../components/NeumorphicInput'
import { NeumorphicButton } from '../components/NeumorphicButton'

export const Login: React.FC = () => {
  const navigate = useNavigate()
  const { login, error, clearError } = useAuth()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    clearError()
    setLoading(true)
    
    try {
      await login(formData)
      navigate('/dashboard')
    } catch (error) {
      console.error('Login error:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="min-h-screen bg-neu-base flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Logo and Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-neu-base shadow-neu-outset mb-6">
            <GraduationCap className="w-10 h-10 text-primary" />
          </div>
          <h1 className="text-3xl font-bold text-primary mb-2">Welcome Back</h1>
          <p className="text-neu-dark">PPMK - Malaysian Student Association Korea</p>
        </div>

        {/* Login Form Card */}
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
                placeholder="Enter your password"
                required
                className="pl-12"
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
              Sign In
            </NeumorphicButton>

            <div className="text-center">
              <p className="text-neu-dark text-sm">
                Don't have an account?{' '}
                <Link to="/signup" className="text-primary font-medium hover:underline">
                  Sign up here
                </Link>
              </p>
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-xs text-neu-dark">
            © 2024 PPMK - Persatuan Pelajar Malaysia Korea
          </p>
        </div>
      </div>
    </div>
  )
}
