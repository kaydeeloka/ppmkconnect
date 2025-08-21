import React from 'react'
import { Users, Target, Award, Network, Mail, Phone, BookOpen, Handshake, Star } from 'lucide-react'

const About = () => {
  const stats = [
    { number: '500+', label: 'Active Members', color: 'bg-blue-500', icon: Users },
    { number: '15+', label: 'Universities', color: 'bg-green-500', icon: Users },
    { number: '50+', label: 'Events Organized', color: 'bg-purple-500', icon: Users },
    { number: '8+', label: 'Years Active', color: 'bg-orange-500', icon: Users },
  ]

  const aims = [
    {
      title: 'PPMK',
      description: 'Persatuan Pelajar Malaysia Korea is a non-profit, non-political, non-religious organization that serves Malaysian students in the Republic of Korea.',
      icon: Users,
    },
    {
      title: 'BUILDING NETWORK',
      description: 'Connecting Malaysian students with the local and foreign students in Korea through various activities.',
      icon: Network,
    },
    {
      title: 'UNITY AMONG STUDENTS',
      description: 'To foster the spirit of unity among Malaysian students residing in Korea.',
      icon: Award,
    },
  ]

  const journeyEvents = [
    {
      year: '2016',
      title: 'PPMK Establishment',
      description: 'Founded with 50 pioneer members across 5 universities',
    },
    {
      year: '2018',
      title: 'First Cultural Festival',
      description: 'Organized the inaugural Malaysia-Korea Cultural Exchange',
    },
    {
      year: '2020',
      title: 'Digital Transformation',
      description: 'Launched online platforms during pandemic to maintain connections',
    },
    {
      year: '2022',
      title: 'Scholarship Program',
      description: 'Established partnership for Malaysian student scholarships',
    },
    {
      year: '2024',
      title: '500+ Members',
      description: 'Reached milestone of 500+ active members across 15+ universities',
    },
  ]

  const embassy = [
    {
      name: 'En. Shahril Nizam Bin Idris',
      position: 'President',
      email: 'president@ppmkconnect.org',
      phone: '+82-10-1234-5678',
      location:'Embassy Malaysia',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
      name: 'En. Mohd Zul Faisal Bin Mohamad Zin',
      position: 'Vice President',
      email: 'vicepresident@ppmkconnect.org',
      phone: '+82-10-2345-6789',
      location:'Embassy Malaysia',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
  ]

  const committee = [
    {
      name: 'Muhammad Azdy Shaharudin Bin Zakaria',
      position: 'Secretary',
      email: 'secretary@ppmkconnect.org',
      phone: '+82-10-3456-7890',
      location:'Sunkyungkwan University',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
      name: 'Nurul Hamimah Binti Sapri Iskandar',
      position: 'Treasurer',
      email: 'treasurer@ppmkconnect.org',
      location:'Sunkyungkwan University',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
      name: 'Farah Syazana Binti Mohd Khidzir',
      position: 'General Secretary',
      email: 'general@ppmkconnect.org',
      phone: '+82-10-5678-9012',
      location:'Yonsei University',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
      name: 'Ummi Aisyah Binti Somri',
      position: 'Communications Director',
      email: 'communications@ppmkconnect.org',
      phone: '+82-10-6789-0123',
      location:'Korea University',
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
  ]

  const achievements = [
    {
      year: '2016',
      title: 'PPMK Establishment',
      description: 'Founded with 50 pioneer members across 5 universities'
    },
    {
      year: '2018',
      title: 'First Cultural Festival',
      description: 'Organized the inaugural Malaysia-Korea Cultural Exchange'
    },
    {
      year: '2020',
      title: 'Digital Transformation',
      description: 'Launched online platforms during pandemic to maintain connections'
    },
    {
      year: '2022',
      title: 'Scholarship Program',
      description: 'Established partnership for Malaysian student scholarships'
    },
    {
      year: '2024',
      title: '500+ Members',
      description: 'Reached milestone of 500+ active members across 15+ universities'
    }
  ]

  const sponsors = [
    {
      name: 'Jabatan Perdana Menteri - Jabatan Perkehidmatan Awam',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Coat_of_arms_of_Malaysia.svg/200px-Coat_of_arms_of_Malaysia.svg.png',
      category: 'Government Agency'
    },
    {
      name: 'JPA - Jabatan Perkhidmatan Awam Malaysia',
      logo: 'https://jpa.gov.my/wp-content/uploads/2019/11/logo-jpa-1.png',
      category: 'Scholarship Provider'
    },
    {
      name: 'MARA - Majlis Amanah Rakyat',
      logo: 'https://www.mara.gov.my/images/logo-mara.png',
      category: 'Educational Institution'
    },
    {
      name: 'Johor State Government',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Coat_of_arms_of_Johor.svg/200px-Coat_of_arms_of_Johor.svg.png',
      category: 'State Government'
    },
    {
      name: 'OCi Holdings',
      logo: 'https://www.oci.co.kr/en/images/common/logo.png',
      category: 'Corporate Partner'
    },
    {
      name: 'Dongyang Mirae University',
      logo: 'https://www.dongyang.ac.kr/images/common/logo.png',
      category: 'Educational Partner'
    },
    {
      name: 'Hanyang University',
      logo: 'https://www.hanyang.ac.kr/images/common/logo.png',
      category: 'Educational Partner'
    }
  ]

  return (
    <div className="pt-8 pb-12 bg-ppmk-light min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="backdrop-blur-md bg-white/10 rounded-3xl p-8 sm:p-12 border border-white/20 shadow-2xl mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Logo */}
            <div className="flex justify-center lg:justify-start">
              <div className="w-50 h-50 overflow-hidden border-4 border-primary/20 shadow-2xl">
                <a
                  href="https://ppmkonline.com/wp-content/uploads/2025/01/PPMK-Organization-Chart.png"
                  className="block w-full h-full"
                >
                  <img
                    src="https://ppmkonline.com/wp-content/uploads/2025/01/PPMK-Organization-Chart.png"
                    alt="PPMK Chart"
                    className="w-full h-full object-cover"
                  />
                </a>
              </div>
            </div>

            {/* Information */}
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
                Persatuan Pelajar Malaysia Korea
              </h1>
              <p className="text-lg text-primary/70 mb-8 leading-relaxed">
                Connecting Malaysian students across Korean universities, fostering community, academic excellence, and cultural exchange.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="backdrop-blur-sm bg-white/20 rounded-xl p-4 text-center border border-white/20">
                    <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center mx-auto mb-2`}>
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-2xl font-bold text-primary">{stat.number}</div>
                    <div className="text-xs text-primary/70">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Aim & Focus Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-ppmk-dark mb-4">Aim & Focus</h2>
            <p className="text-xl text-ppmk-dark/70">The principles that guide everything we do</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aims.map((aim, index) => {
              const Icon = aim.icon
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center border border-ppmk-dark/10 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-ppmk-accent/50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-ppmk-dark" />
                  </div>
                  <h3 className="text-xl font-bold text-ppmk-dark mb-3">{aim.title}</h3>
                  <p className="text-ppmk-dark/70">{aim.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-ppmk-dark mb-4">Our Journey</h2>
            <p className="text-xl text-ppmk-dark/70">Key milestones in PPMK's history</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 border border-ppmk-dark/10">
            <div className="space-y-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-ppmk-dark rounded-full flex items-center justify-center">
                      <span className="text-ppmk-accent font-bold text-sm">{achievement.year}</span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-ppmk-dark mb-2">{achievement.title}</h3>
                    <p className="text-ppmk-dark/70">{achievement.description}</p>
                  </div>
                  {index === 0 && (
                    <div className="flex-shrink-0">
                      <Star className="w-6 h-6 text-ppmk-accent fill-current" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Embassy Team */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-ppmk-dark mb-4">Contact Us</h2>
            <p className="text-xl text-ppmk-dark/70">Meet the dedicated leaders driving our mission forward</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {embassy.map((leader, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center border border-ppmk-dark/10 hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={leader.image} 
                  alt={leader.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-ppmk-accent/50"
                />
                <h3 className="text-xl font-bold text-ppmk-dark mb-1">{leader.name}</h3>
                <p className="text-ppmk-dark font-medium mb-2">{leader.position}</p>
                <p className="text-sm text-ppmk-dark/70 mb-1">{leader.email}</p>
                <p className="text-sm text-ppmk-dark/60">{leader.phone}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Committee Team */}
        <div className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {committee.map((leader, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center border border-ppmk-dark/10 hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={leader.image} 
                  alt={leader.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-ppmk-accent/50"
                />
                <h3 className="text-xl font-bold text-ppmk-dark mb-1">{leader.name}</h3>
                <p className="text-ppmk-dark font-medium mb-2">{leader.position}</p>
                <p className="text-sm text-ppmk-dark/70 mb-1">{leader.email}</p>
                <p className="text-sm text-ppmk-dark/60">{leader.phone}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Special Thanks To Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-ppmk-dark mb-4">SPECIAL THANKS TO</h2>
            <p className="text-xl text-ppmk-dark/70">Our valued partners and supporters who make our mission possible</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 border border-ppmk-dark/10">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center">
              {sponsors.map((sponsor, index) => (
                <div key={index} className="group text-center p-4 hover:bg-gray-50 rounded-lg transition-colors duration-300">
                  <div className="w-20 h-20 mx-auto mb-4 flex items-center justify-center bg-gray-50 rounded-lg group-hover:bg-white transition-colors duration-300">
                    <img
                      src={sponsor.logo}
                      alt={sponsor.name}
                      className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="hidden w-full h-full bg-gradient-to-br from-ppmk-dark to-ppmk-dark/80 rounded-lg items-center justify-center">
                      <span className="text-white text-xs font-semibold text-center px-2">
                        {sponsor.name.split(' ').slice(0, 2).join(' ')}
                      </span>
                    </div>
                  </div>
                  <h4 className="text-xs font-medium text-ppmk-dark text-center leading-tight mb-1">
                    {sponsor.name}
                  </h4>
                  <p className="text-xs text-ppmk-dark/60 text-center">
                    {sponsor.category}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-sm text-ppmk-dark/70 italic">
                We extend our heartfelt gratitude to all our partners, sponsors, and supporters who continue to believe in our mission and contribute to the success of Malaysian students in Korea.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
