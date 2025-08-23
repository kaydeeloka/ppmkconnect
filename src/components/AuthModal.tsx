import React, { useState } from 'react'
import { X, Mail, Lock, User, GraduationCap, Calendar } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
  onSuccess: () => void
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const [isSignUp, setIsSignUp] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: '',
    university: '',
    batch: ''
  })
  const [error, setError] = useState('')
  const { signIn, signUp } = useAuth()

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

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
      onClose()
      setFormData({ email: '', password: '', fullName: '', university: '', batch: '' })
    } catch (err: any) {
      setError(err.message || 'An error occurred')
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-pink backdrop-blur-sm">
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-neumorphism-hover p-8">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl shadow-neumorphism hover:shadow-neumorphism-inset transition-all duration-300"
        >
          <X size={20} className="text-neumorphism-text" />
        </button>

        <h2 className="text-2xl font-bold text-[#003e58] mb-6 text-center">
          {isSignUp ? 'Create Account' : 'Welcome Back'}
        </h2>

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
            />
          </div>

          {isSignUp && (
            <>
              <div className="relative">
                <GraduationCap className="absolute left-4 top-1/2 -translate-y-1/2 border-2 border-black text-neumorphism-text-light" size={18} />
                <select
                  name="university"
                  value={formData.university}
                  onChange={handleInputChange}
                  className="w-full pl-12 pr-4 py-3 rounded-2xl shadow-neumorphism-inset bg-neumorphism-bg border-2 border-black text-neumorphism-text placeholder-neumorphism-text-light focus:outline-none focus:ring-2 focus:ring-neumorphism-primary/30"
                  required={isSignUp}
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
            <div className="p-3 rounded-xl shadow-neumorphism-inset bg-neumorphism-accent/10 border-2 border-black text-neumorphism-accent text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3 rounded-2xl shadow-neumorphism hover:shadow-neumorphism-hover transition-all duration-300 text-white border-2 border-black bg-[#003e58] font-semibold"
          >
            {isSignUp ? 'Sign Up' : 'Sign In'}
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
