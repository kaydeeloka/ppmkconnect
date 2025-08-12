import React from 'react'
import { Menu, X, GraduationCap, Home, Info, Calendar, Users, BookOpen } from 'lucide-react'

interface NavbarProps {
  currentPage: string
  setCurrentPage: (page: string) => void
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About Us', icon: Info },
    { id: 'activities', label: 'Activities', icon: Calendar },
    { id: 'information', label: 'Information', icon: BookOpen },
    { id: 'community', label: 'Community', icon: Users },
  ]

  return (
    <nav className="bg-ppmk-light shadow-lg border-b border-ppmk-dark/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-ppmk-dark rounded-lg flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-ppmk-accent" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-ppmk-dark">PPMK</h1>
              <p className="text-xs text-ppmk-dark/70">Persatuan Pelajar Malaysia Korea</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                    currentPage === item.id
                      ? 'bg-ppmk-dark text-ppmk-accent shadow-md'
                      : 'text-ppmk-dark hover:bg-ppmk-accent/30 hover:text-ppmk-dark'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium">{item.label}</span>
                </button>
              )
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-ppmk-accent/30 text-ppmk-dark"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-ppmk-dark/20">
            <div className="space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setCurrentPage(item.id)
                      setIsMenuOpen(false)
                    }}
                    className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                      currentPage === item.id
                        ? 'bg-ppmk-dark text-ppmk-accent'
                        : 'text-ppmk-dark hover:bg-ppmk-accent/30 hover:text-ppmk-dark'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
