import React from 'react'
import { Users, Target, Heart, Globe, Award, Handshake, GraduationCap } from 'lucide-react'

const About = () => {
  const stats = [
    { label: 'Active Members', value: '500+', icon: Users, color: 'bg-blue-600' },
    { label: 'Universities', value: '15+', icon: Globe, color: 'bg-green-600' },
    { label: 'Events Organized', value: '50+', icon: Award, color: 'bg-purple-600' },
    { label: 'Years Active', value: '8+', icon: Heart, color: 'bg-orange-600' },
  ]

  const values = [
    {
      icon: Heart,
      title: 'Unity',
      description: 'Building strong bonds among Malaysian students across different universities and backgrounds.'
    },
    {
      icon: Handshake,
      title: 'Support',
      description: 'Providing assistance and guidance to help fellow students succeed in their academic journey.'
    },
    {
      icon: Globe,
      title: 'Cultural Bridge',
      description: 'Connecting Malaysian and Korean cultures while preserving our Malaysian identity.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Encouraging academic and personal excellence among our community members.'
    }
  ]

  const timeline = [
    {
      year: '2016',
      title: 'Foundation',
      description: 'PPMK was established by a group of passionate Malaysian students in Seoul.'
    },
    {
      year: '2018',
      title: 'Expansion',
      description: 'Extended our reach to include students from universities across Korea.'
    },
    {
      year: '2020',
      title: 'Digital Transformation',
      description: 'Launched online platforms to maintain community connection during the pandemic.'
    },
    {
      year: '2022',
      title: 'Partnership Growth',
      description: 'Established partnerships with Korean universities and Malaysian organizations.'
    },
    {
      year: '2024',
      title: 'New Horizons',
      description: 'Launched comprehensive support programs and expanded community services.'
    }
  ]

  return (
    <div className="pt-8 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="bg-white rounded-xl shadow-lg p-12 border border-gray-200">
            <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-blue-600">PPMK</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Persatuan Pelajar Malaysia Korea (PPMK) is a professional association that brings together Malaysian students 
              studying across various universities in Korea. We are committed to fostering academic excellence, 
              cultural exchange, and professional development within our community.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <div className={`w-16 h-16 ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            )
          })}
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              To create a supportive and professional network for Malaysian students in Korea, fostering 
              academic excellence, cultural exchange, and career development while maintaining our 
              Malaysian identity and values in the global academic community.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
            <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-6">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              To be the leading professional association that connects, empowers, and supports Malaysian students in Korea, 
              creating a bridge between Malaysia and Korea while contributing to the global community of 
              international students and professionals.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These values guide our actions and shape the professional culture of our association.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                  <div className="w-16 h-16 bg-gray-900 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to a thriving professional association - here's how PPMK has evolved over the years.
            </p>
          </div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{item.year}</span>
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-lg p-6 flex-1 border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-white rounded-xl shadow-lg p-12 text-center border border-gray-200">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Join Our Association</h2>
            <p className="text-xl text-gray-600 mb-8">
              Whether you're a new student or have been in Korea for years, there's always a place for you in PPMK. 
              Connect with fellow Malaysians, access professional development opportunities, and build lasting networks.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Become a Member
              </button>
              <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
