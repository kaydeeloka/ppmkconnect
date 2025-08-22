import React, { useState, useEffect } from 'react'
import { X, Mail, Lock, User, GraduationCap, Calendar } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
  onSuccess?: () => void
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [isSignUp, setIsSignUp] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: '',
    university: '',
    batch: ''
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { signIn, signUp, user, pendingAction } = useAuth()

  // Handle successful authentication
  useEffect(() => {
    if (user && isOpen) {
      // User is now authenticated, execute pending action if any
      if (onSuccess) {
        onSuccess()
      }
      onClose()
      setFormData({ email: '', password: '', fullName: '', university: '', batch: '' })
      setError('')
    }
  }, [user, isOpen, onSuccess, onClose])

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      if (isSignUp) {
        await signUp(formData.email, formData.password, {
          fullName: formData.fullName,
          university: formData.university,
          batch: formData.batch
        })
      } else {
        await signIn(formData.email, formData.password)
      }
      // Success handling is done in useEffect above
    } catch (err: any) {
      setError(err.message || 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-neumorphism-hover p-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl shadow-neumorphism hover:shadow-neumorphism-inset transition-all duration-300"
        >
          <X size={20} className="text-neumorphism-text" />
        </button>

        <h2 className="text-2xl font-bold text-[#003e58] mb-2 text-center">
          {isSignUp ? 'Create Account' : 'Welcome Back'}
        </h2>
        
        {pendingAction === 'create-event' && (
          <p className="text-sm text-neumorphism-text-light text-center mb-6">
            Please sign in to host a gathering
          </p>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {isSignUp && (
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-neumorphism-text-light" size={18} />
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleInputChange}
                className="w-full pl-12 pr-4 py-3 rounded-2xl shadow-neumorphism-inset bg-neumorphism-bg border-2 border-black text-neumorphism-text placeholder-neumorphism-text-light focus:outline-none focus:ring-2 focus:ring-neumorphism-primary/30"
                required={isSignUp}
                disabled={loading}
              />
            </div>
          )}

          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-neumorphism-text-light" size={18} />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full pl-12 pr-4 py-3 rounded-2xl shadow-neumorphism-inset bg-neumorphism-bg border-2 border-black text-neumorphism-text placeholder-neumorphism-text-light focus:outline-none focus:ring-2 focus:ring-neumorphism-primary/30"
              required
              disabled={loading}
            />
          </div>

          <div className="relative">
            <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-neumorphism-text-light" size={18} />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full pl-12 pr-4 py-3 rounded-2xl shadow-neumorphism-inset bg-neumorphism-bg border-2 border-black text-neumorphism-text placeholder-neumorphism-text-light focus:outline-none focus:ring-2 focus:ring-neumorphism-primary/30"
              required
              disabled={loading}
            />
          </div>

          {isSignUp && (
            <>
              <div className="relative">
                <GraduationCap className="absolute left-4 top-1/2 -translate-y-1/2 text-neumorphism-text-light" size={18} />
                <select
                  name="university"
                  value={formData.university}
                  onChange={handleInputChange}
                  className="w-full pl-12 pr-4 py-3 rounded-2xl shadow-neumorphism-inset bg-neumorphism-bg border-2 border-black text-neumorphism-text placeholder-neumorphism-text-light focus:outline-none focus:ring-2 focus:ring-neumorphism-primary/30"
                  required={isSignUp}
                  disabled={loading}
                >
                  <option value="" disabled>
                    Select your university
                  </option>
                  <option value="Ewha University">Ewha University</option>
                  <option value="Hanyang University">Hanyang University</option>
                  <option value="KAIST">KAIST</option>
                  <option value="Konkuk University">Konkuk University</option>
                  <option value="Korea University">Korea University</option>
                  <option value="Kwangwoon University">Kwangwoon University</option>
                  <option value="Kyung Hee University">Kyung Hee University</option>
                  <option value="POSTECH">POSTECH</option>
                  <option value="Sejong University">Sejong University</option>
                  <option value="Seoul National University">Seoul National University</option>
                  <option value="SeoulTech">SeoulTech University</option>
                  <option value="Sogang University">Sogang University</option>
                  <option value="Sungkyunkwan University">Sungkyunkwan University</option>
                  <option value="Yonsei University">Yonsei University</option>
                </select>
              </div>

              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-neumorphism-text-light" size={18} />
                <select
                  name="batch"
                  value={formData.batch}
                  onChange={handleInputChange}
                  className="w-full pl-12 pr-4 py-3 rounded-2xl shadow-neumorphism-inset bg-neumorphism-bg border-2 border-black text-neumorphism-text placeholder-neumorphism-text-light focus:outline-none focus:ring-2 focus:ring-neumorphism-primary/30"
                  required={isSignUp}
                  disabled={loading}
                >
                  <option value="" disabled>
                    Select your batch
                  </option>
                  <option value="Batch 18">Batch 18</option>
                  <option value="Batch 19">Batch 19</option>
                  <option value="Batch 20">Batch 20</option>
                  <option value="Batch 21">Batch 21</option>
                  <option value="Batch 22">Batch 22</option>
                  <option value="Batch 23">Batch 23</option>
                  <option value="Batch 24">Batch 24</option>
                  <option value="Batch 25">Batch 25</option>
                </select>
              </div>
            </>
          )}

          {error && (
            <div className="p-3 rounded-xl shadow-neumorphism-inset bg-red-50 border-2 border-red-200 text-red-700 text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-2xl shadow-neumorphism hover:shadow-neumorphism-hover transition-all duration-300 text-white border-2 border-black bg-[#003e58] font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>{isSignUp ? 'Creating Account...' : 'Signing In...'}</span>
              </div>
            ) : (
              isSignUp ? 'Sign Up' : 'Sign In'
            )}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-neumorphism-text-light">
            {isSignUp ? 'Already have an account?' : "Don't have an account?"}
            <button
              onClick={() => {
                setIsSignUp(!isSignUp)
                setError('')
                setFormData({ email: '', password: '', fullName: '', university: '', batch: '' })
              }}
              className="ml-2 text-neumorphism-primary font-semibold hover:underline"
              disabled={loading}
            >
              {isSignUp ? 'Sign In' : 'Sign Up'}
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}

export default AuthModal
