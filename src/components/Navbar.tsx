import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Home, 
  Info,
  Handshake,
  Calendar, 
  Users, 
  LogIn, 
  LogOut,
  User
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import AuthModal from './AuthModal';

// Simplified interface, we only need the path for routing
interface NavItem {
  label: string;
  path: string;
  icon: React.ReactNode;
  protected?: boolean;
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [redirectToPath, setRedirectToPath] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const { user, signOut, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const navItems: NavItem[] = [
    { label: 'Home', path: '/', icon: <Home size={18} /> },
    { label: 'About Us', path: '/about', icon: <Info size={18} /> },
    { label: 'Events', path: '/events', icon: <Calendar size={18} /> },
    { label: 'MeetUp', path: '/meetup', icon: <Handshake size={18} /> },
    { label: 'Community', path: '/community', icon: <Users size={18} />, protected: true },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowUserDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (user && redirectToPath) {
      navigate(redirectToPath);
      setRedirectToPath(null);
    }
  }, [user, redirectToPath, navigate]);

  const handleSignOut = async () => {
    try {
      await signOut();
      setShowUserDropdown(false);
      if (location.pathname === '/community') {
        navigate('/');
      }
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const handleNavClick = (item: NavItem) => {
    if (item.protected && !user) {
      setRedirectToPath(item.path);
      setShowAuthModal(true);
    } else {
      navigate(item.path);
      setIsOpen(false);
    }
  };

  return (
    <>
<nav className="fixed top-0 left-0 right-0 z-40 bg-white backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <div 
                className="flex-shrink-0 flex items-center cursor-pointer transition-transform duration-300 " 
                onClick={() => navigate('/')}
              >
                <div className="rounded-2xl shadow-neumorphism">
                  <img
                    src="https://scontent.fkul8-5.fna.fbcdn.net/v/t39.30808-6/432755197_429050673115871_3014554682847287965_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=74LJwlTTWAwQ7kNvwEKZsrd&_nc_oc=AdkoV2hqC85QEthdUg7YhqowCfT8uq208DGpkrEGEkL1s9G84pRW_gXDUnUIDFvwEC-1Hdex0b1u1tqAN6Uukzhn&_nc_zt=23&_nc_ht=scontent.fkul8-5.fna&_nc_gid=MUr8EjCP4yHmuQ6ceJH-mg&oh=00_AfUAMG1gXMX7JWJ4gGO5u-Aq4Nzq3gxpYcHjTGEIzzDIQg&oe=68AE9762"
                    alt="PPMK Logo"
                    className="h-20 w-20 object-contain"
                  />
                </div>
                <div className="ml-3">
                  <span className="text-xl font-bold text-neumorphism-text">PPMK</span>
                  <p className="text-xs text-neumorphism-text-light">Persatuan Pelajar Malaysia Korea</p>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-2 ">
                {navItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item)}
                    className={`group px-4 py-3 rounded-2xl transition-all duration-300 flex items-center space-x-2 ${
                      location.pathname === item.path
                        ? 'shadow-neumorphism-inset text-neumorphism-primary text-accent-600' 
                        : 'shadow-neumorphism hover:shadow-neumorphism-inset text-neumorphism-text hover:text-neumorphism-primary'
                    }`}
                  >
                    <span className="transition-transform duration-300 group-hover:scale-110">
                      {item.icon}
                    </span>
                    <span className="font-medium">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Auth Section */}
            <div className="hidden md:flex items-center space-x-4">
              {loading ? (
                <div className="px-6 py-3 rounded-2xl shadow-neumorphism-inset">
                  <div className="animate-pulse h-4 w-20 bg-neumorphism-dark rounded"></div>
                </div>
              ) : user ? (
                <div className="relative" ref={dropdownRef}>
                  <button
                    onClick={() => setShowUserDropdown(!showUserDropdown)}
                    className="flex items-center space-x-3 px-5 py-3 rounded-2xl shadow-neumorphism hover:shadow-neumorphism-inset hover:bg-gray-50 transition-all duration-300"
                  >
                    <div className="p-2 rounded-xl shadow-neumorphism-sm">
                      <User size={20} className="text-neumorphism-primary" />
                    </div>
                    <span className="font-medium text-neumorphism-text">
                      {user.fullName || user.email.split('@')[0]}
                    </span>
                  </button>
                  {showUserDropdown && (
                    <div className="absolute right-0 mt-3 w-64 rounded-2xl shadow-neumorphism-hover bg-white p-4 space-y-3 border border-[#003e58]">
                      <div className="p-3 rounded-xl shadow-neumorphism-inset bg-white">
                        <p className="text-sm font-semibold text-[#003e58] uppercase">
                          {/* BUG FIX: Added [0] to correctly display the username part of the email */}
                          {user.fullName || user.email.split('@')[0]}
                        </p>
                        {user.university && (
                          <p className="text-sm text-gray-600 uppercase mt-1">
                            {user.university}
                          </p>
                        )}
                        {user.batch && (
                          <p className="text-sm text-gray-600 uppercase">
                            {user.batch}
                          </p>
                        )}
                      </div>
                      <button
                        onClick={handleSignOut}
                        className="w-full py-2 px-4 rounded-xl font-semibold text-white bg-[#003e58] hover:opacity-90 transition-opacity duration-300"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <button
                  onClick={() => setShowAuthModal(true)}
                  className="flex items-center space-x-2 px-6 py-3 rounded-2xl shadow-neumorphism hover:shadow-neumorphism-hover hover:bg-blue-50 transition-all duration-300 text-neumorphism-primary"
                >
                  <LogIn size={20} />
                  <span className="font-semibold">Login</span>
                </button>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-3 rounded-2xl shadow-neumorphism hover:shadow-neumorphism-inset hover:bg-gray-50 transition-all duration-300 text-neumorphism-text"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-neumorphism-bg border-t border-neumorphism-dark/20">
            <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-2xl transition-all duration-300 ${
                    location.pathname === item.path
                      ? 'shadow-neumorphism-inset text-neumorphism-primary' 
                      : 'shadow-neumorphism hover:shadow-neumorphism-inset hover:text-neumorphism-primary'
                  }`}
                >
                  {item.icon}
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
              
              {/* Mobile Auth Section */}
              <div className="pt-3 border-t border-neumorphism-dark/20">
                {loading ? (
                  <div className="px-4 py-3 rounded-2xl shadow-neumorphism-inset">
                    <div className="animate-pulse h-4 w-full bg-neumorphism-dark rounded"></div>
                  </div>
                ) : user ? (
                  <div className="space-y-2">
                    <div className="px-4 py-3 rounded-2xl shadow-neumorphism-inset">
                      <p className="text-sm font-semibold text-neumorphism-text">
                        {user.fullName || user.email}
                      </p>
                      {user.university && (
                        <p className="text-xs text-neumorphism-text-light mt-1">
                          {user.university} • Batch {user.batch}
                        </p>
                      )}
                    </div>
                    <button
                      onClick={handleSignOut}
                      className="w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-2xl shadow-neumorphism hover:shadow-neumorphism-inset hover:bg-red-50 hover:text-red-600 transition-all duration-300 text-neumorphism-accent"
                    >
                      <LogOut size={18} />
                      <span className="font-medium">Logout</span>
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => {
                      setShowAuthModal(true);
                      setIsOpen(false);
                    }}
                    className="w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-2xl shadow-neumorphism hover:shadow-neumorphism-hover hover:text-neumorphism-primary hover:bg-blue-50 transition-all duration-300 text-neumorphism-primary"
                  >
                    <LogIn size={20} />
                    <span className="font-semibold">Login</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Auth Modal */}
      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => {
          setShowAuthModal(false);
          setRedirectToPath(null);
        }}
        onSuccess={() => {
          // Handled by useEffect
        }} 
      />
    </>
  );
}

export default Navbar;
