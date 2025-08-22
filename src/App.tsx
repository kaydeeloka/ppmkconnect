import React, { useState } from 'react'
import { AuthProvider } from './contexts/AuthContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Activities from './pages/Activities'
import Information from './pages/Information'
import Community from './pages/Community'
import Meetup from './pages/Meetup'

function AppContent() {
  const [currentPage, setCurrentPage] = useState('home')

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />
      case 'about':
        return <About />
      case 'activities':
        return <Activities />
      case 'information':
        return <Information />
      case 'community':
        return <Community />
      case 'meetup':
        return <Meetup />
      default:
        return <Home />
    }
  }

  return (
    <div className="min-h-screen bg-neumorphism-bg">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  )
}

export default App
