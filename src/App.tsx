import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Activities from './pages/Activities'
import Information from './pages/Information'
import Articles from './pages/Articles'

function App() {
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
      case 'articles':
        return <Articles />
      default:
        return <Home />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 font-inter">
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>
        {renderPage()}
      </main>
    </div>
  )
}

export default App
