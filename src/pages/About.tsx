import React from 'react'
import { Users, Target, Award, Globe, Heart, BookOpen, Handshake, Star } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: Users,
      title: 'Unity',
      description: 'Bringing Malaysian students together across all Korean universities'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Supporting academic and personal growth of our members'
    },
    {
      icon: Globe,
      title: 'Cultural Bridge',
      description: 'Connecting Malaysian and Korean cultures through education'
    },
    {
      icon: Heart,
      title: 'Community',
      description: 'Creating a supportive network for students away from home'
    }
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

  const leadership = [
    {
      name: 'Ahmad Rahman',
      position: 'President',
      university: 'Seoul National University',
      field: 'International Relations',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Siti Nurhaliza',
      position: 'Vice President',
      university: 'Yonsei University',
      field: 'Business Administration',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Lim Wei Ming',
      position: 'Secretary',
      university: 'Korea University',
      field: 'Computer Science',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: 'Fatimah Zahra',
      position: 'Treasurer',
      university: 'KAIST',
      field: 'Engineering',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
    }
  ]

  return (
    <div className="pt-8 pb-12 bg-ppmk-light min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="bg-white rounded-xl shadow-lg p-12 border border-ppmk-dark/10">
            <h1 className="text-5xl font-bold text-ppmk-dark mb-6">About PPMK</h1>
            <p className="text-xl text-ppmk-dark/80 max-w-4xl mx-auto leading-relaxed">
              Persatuan Pelajar Malaysia Korea (PPMK) is a vibrant community of Malaysian students 
              pursuing their academic dreams in South Korea. Since 2016, we have been the bridge 
              connecting Malaysian students across Korean universities, fostering unity, academic excellence, 
              and cultural exchange.
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-ppmk-dark/10">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-ppmk-dark rounded-lg flex items-center justify-center">
                <Target className="w-7 h-7 text-ppmk-accent" />
              </div>
              <h2 className="text-3xl font-bold text-ppmk-dark">Our Mission</h2>
            </div>
            <p className="text-ppmk-dark/80 text-lg leading-relaxed">
              To create a supportive and inclusive community for Malaysian students in Korea, 
              facilitating academic success, cultural integration, and lifelong professional networks 
              while preserving our Malaysian identity and values.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 border border-ppmk-dark/10">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-ppmk-accent rounded-lg flex items-center justify-center">
                <BookOpen className="w-7 h-7 text-ppmk-dark" />
              </div>
              <h2 className="text-3xl font-bold text-ppmk-dark">Our Vision</h2>
            </div>
            <p className="text-ppmk-dark/80 text-lg leading-relaxed">
              To be the premier organization representing Malaysian students in Korea, 
              recognized for excellence in education, cultural diplomacy, and community building, 
              contributing to stronger Malaysia-Korea relations.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-ppmk-dark mb-4">Our Core Values</h2>
            <p className="text-xl text-ppmk-dark/70">The principles that guide everything we do</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center border border-ppmk-dark/10 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-ppmk-accent/50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-ppmk-dark" />
                  </div>
                  <h3 className="text-xl font-bold text-ppmk-dark mb-3">{value.title}</h3>
                  <p className="text-ppmk-dark/70">{value.description}</p>
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

        {/* Leadership Team */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-ppmk-dark mb-4">Leadership Team</h2>
            <p className="text-xl text-ppmk-dark/70">Meet the dedicated leaders driving our mission forward</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center border border-ppmk-dark/10 hover:shadow-xl transition-shadow duration-300">
                <img 
                  src={leader.image} 
                  alt={leader.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-ppmk-accent/50"
                />
                <h3 className="text-xl font-bold text-ppmk-dark mb-1">{leader.name}</h3>
                <p className="text-ppmk-dark font-medium mb-2">{leader.position}</p>
                <p className="text-sm text-ppmk-dark/70 mb-1">{leader.university}</p>
                <p className="text-sm text-ppmk-dark/60">{leader.field}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-ppmk-dark rounded-xl shadow-lg p-12 border border-ppmk-dark/10">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Handshake className="w-12 h-12 text-ppmk-accent" />
              <h2 className="text-4xl font-bold text-ppmk-accent">Join Our Community</h2>
            </div>
            <p className="text-xl text-ppmk-accent/90 mb-8 max-w-3xl mx-auto">
              Whether you're a current student, prospective student, or alumni, 
              PPMK welcomes you to be part of our growing family. Together, we can achieve more.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-ppmk-accent text-ppmk-dark px-8 py-3 rounded-lg font-semibold hover:bg-ppmk-accent/90 transition-colors">
                Become a Member
              </button>
              <button className="border-2 border-ppmk-accent text-ppmk-accent px-8 py-3 rounded-lg font-semibold hover:bg-ppmk-accent hover:text-ppmk-dark transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
