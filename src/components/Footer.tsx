import React from 'react'
import { Users, Mail, Phone, MapPin, Instagram, Facebook, Twitter, Linkedin } from 'lucide-react'

const Footer = () => {
  const quickLinks = [
    { name: 'Universities', href: '#universities' },
    { name: 'Community', href: '#community' },
    { name: 'Events', href: '#events' },
    { name: 'Resources', href: '#resources' },
  ]

  const aboutLinks = [
    { name: 'Our Story', href: '#story' },
    { name: 'Leadership', href: '#leadership' },
    { name: 'Partners', href: '#partners' },
    { name: 'Contact', href: '#contact' },
  ]

  const supportLinks = [
    { name: 'Help Center', href: '#help' },
    { name: 'Student Services', href: '#services' },
    { name: 'Scholarship Info', href: '#scholarships' },
    { name: 'FAQ', href: '#faq' },
  ]

  return (
    <footer className="py-16 px-4 sm:px-6 lg:px-8 bg-ppmk-dark text-white">
      <div className="rounded-none p-0 border-none">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-ppmk-dark to-ppmk-dark/80 rounded-lg flex items-center justify-center">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-ppmk-dark">PPMK</h3>
                  <p className="text-xs text-ppmk-dark/70">Persatuan Pelajar Malaysia Korea</p>
                </div>
              </div>
              
              <p className="text-sm text-ppmk-dark/70 mb-6">
                Connecting Malaysian students across Korea's universities. Building friendships, sharing experiences, and supporting each other throughout our academic journey.
              </p>
            </div>

            {/* Contact Us */}
            <div>
              <h4 className="font-semibold text-ppmk-dark mb-4">Contact Us</h4>
              <ul className="space-y-2">
                             <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3 text-sm text-ppmk-dark/70">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>+82-2-1234-5678</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-ppmk-dark/70">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span>info@ppmkconnect.org</span>
                </div>
                <div className="flex items-center space-x-3 text-sm text-ppmk-dark/70">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  <span>Seoul, South Korea</span>
                </div>
              </div>

              <div className="flex space-x-2">
                <a href="#" className="w-8 h-8 bg-ppmk-dark/20 hover:bg-ppmk-dark/30 rounded-lg flex items-center justify-center transition-colors">
                  <Instagram className="w-4 h-4 text-ppmk-dark" />
                </a>
                <a href="#" className="w-8 h-8 bg-ppmk-dark/20 hover:bg-ppmk-dark/30 rounded-lg flex items-center justify-center transition-colors">
                  <Facebook className="w-4 h-4 text-ppmk-dark" />
                </a>
                <a href="#" className="w-8 h-8 bg-ppmk-dark/20 hover:bg-ppmk-dark/30 rounded-lg flex items-center justify-center transition-colors">
                  <Twitter className="w-4 h-4 text-ppmk-dark" />
                </a>
                <a href="#" className="w-8 h-8 bg-ppmk-dark/20 hover:bg-ppmk-dark/30 rounded-lg flex items-center justify-center transition-colors">
                  <Linkedin className="w-4 h-4 text-ppmk-dark" />
                </a>
              </div>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-ppmk-dark mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} className="text-sm text-ppmk-dark/70 hover:text-ppmk-dark transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support & Contact */}
        <div>
        <h4 className="font-semibold text-ppmk-dark mb-4">Find Us</h4>
        <ul className="space-y-4 mb-6">
            <li>
            <p className="font-medium text-ppmk-dark">Telephone: <span className="font-normal">+82-2-2077-8600</span></p>
            <p className="text-ppmk-dark">Emergency: <span className="font-normal">+82-10-1234-5678</span></p>
            </li>
            <li>
            <p className="font-medium text-ppmk-dark">Working Hours: <span className="font-normal">9:00 AM – 6:00 PM</span></p>
            <p className="text-ppmk-dark">Weekend: <span className="font-normal">10:00 AM – 4:00 PM</span></p>
            </li>
            <li>
            <address className="not-italic text-sm text-ppmk-dark/70 leading-relaxed">
                Malaysian Embassy<br />
                4-1 Hannam-dong<br />
                Yongsan-gu<br />
                Seoul 140-884<br />
                Republic of Korea
            </address>
            </li>
        </ul>
        </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-6 border-t border-white/20 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-ppmk-dark/60">
              © 2024 PPMK Connect. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 sm:mt-0">
              <a href="#" className="text-sm text-ppmk-dark/60 hover:text-ppmk-dark transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-ppmk-dark/60 hover:text-ppmk-dark transition-colors">Terms of Service</a>
              <a href="#" className="text-sm text-ppmk-dark/60 hover:text-ppmk-dark transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
    </footer>
  )
}

export default Footer