import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingInfoModal from './components/FloatingInfoModal';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/AboutUs';
import Events from './pages/Events';
import Community from './pages/Community';
import Meetup from './pages/MeetUp';
import Information from './pages/Information';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // If there's a hash, scroll to that element after a short delay
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    } else {
      // If no hash, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname, hash]);

  return null;
};

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <main className="pt-10">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/meetup" element={<Meetup />} />
          <Route path="/community" element={<Community />} />
          <Route path="/information" element={<Information />} />
        </Routes>
      </main>
      <FloatingInfoModal />
      <Footer />
    </AuthProvider>
  );
}

export default App;
