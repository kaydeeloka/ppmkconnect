import React, { useState } from 'react'
import { AuthProvider } from './contexts/AuthContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Activities from './pages/Activities'
import Information from './pages/Information'
import Community from './pages/Community'
import Meetup  from './pages/meetup'
import AuthModal from './components/AuthModal'

function AppContent() {
  const [currentPage, setCurrentPage] = useState('home')
  const [showAuthModal, setShowAuthModal] = useState(false)
  const [redirectToCommunity, setRedirectToCommunity] = useState(false)
  const [redirectToMeetup, setRedirectToMeetup] = useState(false)

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />
      case 'about':
        return <About />
      case 'activities':
        return <Activities />
      case 'meetup':
        return <Meetup />
      case 'community':
        return <Community />
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
      <Footer 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        setShowAuthModal={setShowAuthModal} 
        setRedirectToCommunity={
          function (redirect: boolean): void {
          throw new Error('Function not implemented.')
        } } 
        setRedirectToMeetup={function (redirect: boolean): void {
          throw new Error('Function not implemented.')
        } }      />

      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)} 
      />
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
