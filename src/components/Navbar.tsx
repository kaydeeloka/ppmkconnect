import React from 'react'
import {
  Menu,
  X,
  Users,
  FileText,
  Calendar,
  Info,
  MessageCircle,
} from 'lucide-react'

interface NavbarProps {
  currentPage: string
  setCurrentPage: (page: string) => void
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const navItems = [
    { id: 'home', label: 'Home', icon: Users },
    { id: 'about', label: 'About Us', icon: Info },
    { id: 'activities', label: 'Activities', icon: Calendar },
    { id: 'information', label: 'Information', icon: FileText },
    { id: 'community', label: 'Community', icon: MessageCircle },
  ]

  return (
<header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/10 border-b border-ppmk-dark/20">      
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center backdrop-blur-sm">
              <Users className="w-6 h-6 text-black" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">PPMK</h1>
              <p className="text-xs text-primary/70">
                Persatuan Pelajar Malaysia Korea
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentPage(item.id)}
                  className={`flex items-center space-x-2 px-2 py-2 rounded-lg transition-all duration-200 backdrop-blur-sm ${
                    currentPage === item.id
                      ? 'bg-ppmk-dark/100 text-ppmk-accent'
                      : 'text-primary/80 hover:text-primary'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="font-medium">{item.label}</span>
                </button>
              )
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/20 backdrop-blur-sm text-primary hover:bg-white/30 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/20">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <button
                    key={item.id}
                    onClick={() => {
                      setCurrentPage(item.id)
                      setIsMenuOpen(false)
                    }}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 backdrop-blur-sm ${
                      currentPage === item.id
                      ? 'bg-ppmk-dark/100 text-ppmk-accent'
                        : 'text-primary/80 hover:text-primary'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </button>
                )
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar