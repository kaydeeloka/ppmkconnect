import React from 'react'
import { Users, Mail, Phone, MapPin, Instagram, Facebook, Youtube, Linkedin } from 'lucide-react'
import { Link } from 'react-router-dom';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Events', href: '/events' },
    { name: 'MeetUp', href: '/meetup' },
    { name: 'Community', href: '/community' },

  ]

  const supportLinks = [
    { name: 'Downloadable Guide', href: '/information#downloadableGuide', external: false },
    { name: 'FAQ', href: '/information#faq', external: false },
    // Mark this as an external link
    { 
      name: 'Information booklet', 
      href: 'https://ppmkonline.com/wp-content/uploads/2025/03/Booklet-Kebajikan-2025.pdf', 
      external: true 
    },
  ];


  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-ppmk-dark text-white">
      <div className="rounded-none p-0 border-none">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-12 gap-y-8">            {/* Logo and Description */}
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-ppmk-dark to-ppmk-dark/80 rounded-lg flex items-center justify-center">
                  <Users className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">PPMK</h3>
                  <p className="text-xs ">Persatuan Pelajar Malaysia Korea</p>
                </div>
              </div>
              
              <p className="text-sm  mb-6">
                Connecting Malaysian students across Korea's universities. <br />
                Building friendships, sharing experiences, and supporting<br />
                each other throughout our academic journey.
              </p>

              <div className="flex space-x-2">
                <a
                  href="https://www.instagram.com/ppmkofficial/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-ppmk-dark/20 hover:bg-ppmk-dark/30 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="https://www.facebook.com/ppmkofficial/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-ppmk-dark/20 hover:bg-ppmk-dark/30 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="https://www.youtube.com/@ppmkofficial"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-ppmk-dark/20 hover:bg-ppmk-dark/30 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/company/persatuan-pelajar-malaysia-korea-ppmk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 bg-ppmk-dark/20 hover:bg-ppmk-dark/30 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Contact Us */}
            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2">
                <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3 text-sm ">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>+82-2-1234-5678</span>
                </div>
                <div className="flex items-center space-x-3 text-sm ">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span>info@ppmkconnect.org</span>
                </div>
                <div className="flex items-start space-x-3 text-sm text-white">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-1" />
                <address className="not-italic leading-relaxed">
                  Malaysian Embassy<br />
                  4-1 Hannam-dong<br />
                  Yongsan-gu<br />
                  Seoul 140-884<br />
                  Republic of Korea
                </address>
              </div>
              </div>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link to={link.href} className="text-sm hover:underline transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support & Contact */}

        <div>
        <h4 className="font-semibold mb-4">Information</h4>
        <ul className="space-y-4 mb-6">
          {supportLinks.map((link, index) => (
            <li key={index}>
              <a
                href={link.href}
                className="text-sm text-white/80 hover:text-white transition-colors duration-200"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        </div>

        <div>
        <h4 className="font-semibold mb-4">Find Us</h4>
        <ul className="space-y-4 mb-6">
            <li>
            <p className="font-medium ">Telephone: <span className="font-normal">+82-2-2077-8600</span></p>
            <p className="">Emergency: <span className="font-normal">+82-10-1234-5678</span></p>
            </li>
            <li>
            <p className="font-medium ">Working Hours: <span className="font-normal">9:00 AM – 6:00 PM</span></p>
            <p className="">Weekend: <span className="font-normal">10:00 AM – 4:00 PM</span></p>
            </li>
            <li>

            </li>
        </ul>
        </div>
          </div>

          {/* Copyright */}
         <div className="mt-8 mb-0 pt-6 border-t border-white/20 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-white/60">
              © 2024 PPMK Connect. All rights reserved.
            </p>
          </div>
        </div>
    </footer>
  )
}

export default Footer