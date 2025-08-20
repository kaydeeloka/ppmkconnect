import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import Background from '../components/Background'
import { useAuth } from '../contexts/AuthContext'

const AuthLayout: React.FC = () => {
  const { isAuthenticated } = useAuth()

  // If already authenticated, redirect to dashboard
  if (isAuthenticated) {
    return <Navigate to="/" replace />
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <Background />
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <Outlet />
      </div>
    </div>
  )
}

export default AuthLayout
