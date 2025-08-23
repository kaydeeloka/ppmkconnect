// src/App.js
import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/AboutUs';
import Events from './pages/Events';
import Community from './pages/Community';
import Meetup from './pages/MeetUp';
import Information from './pages/Information';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
};

function App() {
  return (
    <AuthProvider>
      <Navbar />
      <main className="pt-10"> {/* Add padding to main content to avoid overlap with fixed navbar */}
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
      <Footer />
    </AuthProvider>
  );
}

export default App;
