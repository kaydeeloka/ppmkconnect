import React from 'react'
import { BookOpen, GraduationCap, Home, Briefcase, Heart, Phone, MapPin, Clock } from 'lucide-react'

const Information = () => {
  const infoCategories = [
    {
      icon: GraduationCap,
      title: 'Academic Support',
      color: 'bg-blue-600',
      items: [
        'University application guidance',
        'Scholarship information',
        'Academic calendar and deadlines',
        'Study group coordination',
        'Research opportunities'
      ]
    },
    {
      icon: Home,
      title: 'Living in Korea',
      color: 'bg-green-600',
      items: [
        'Housing and accommodation',
        'Banking and financial services',
        'Healthcare and insurance',
        'Transportation guide',
        'Cultural adaptation tips'
      ]
    },
    {
      icon: Briefcase,
      title: 'Career Development',
      color: 'bg-purple-600',
      items: [
        'Internship opportunities',
        'Job search strategies',
        'Resume and interview preparation',
        'Networking events',
        'Alumni mentorship program'
      ]
    },
    {
      icon: Heart,
      title: 'Wellness & Support',
      color: 'bg-red-600',
      items: [
        'Mental health resources',
        'Emergency contacts',
        'Counseling services',
        'Peer support groups',
        'Crisis intervention'
      ]
    }
  ]

  const quickLinks = [
    {
      title: 'Embassy Services',
      description: 'Malaysian Embassy in Seoul contact information and services',
      icon: MapPin,
      link: '#'
    },
    {
      title: 'Emergency Hotlines',
      description: '24/7 emergency contacts and crisis support numbers',
      icon: Phone,
      link: '#'
    },
    {
      title: 'Academic Calendar',
      description: 'Important dates and deadlines for Korean universities',
      icon: Clock,
      link: '#'
    },
    {
      title: 'Student Resources',
      description: 'Comprehensive guide for Malaysian students in Korea',
      icon: BookOpen,
      link: '#'
    }
  ]

  const faqs = [
    {
      question: 'How do I apply for a student visa to Korea?',
      answer: 'You need to obtain a Certificate of Admission from a Korean university first, then apply for a D-2 student visa at the Korean embassy or consulate in Malaysia.'
    },
    {
      question: 'What documents do I need for university application?',
      answer: 'Typically required documents include academic transcripts, language proficiency certificates (TOPIK/IELTS), personal statement, recommendation letters, and passport copy.'
    },
    {
      question: 'How can I find accommodation in Korea?',
      answer: 'Options include university dormitories, goshiwon (study rooms), hasukjib (boarding houses), and regular apartments. University housing is often the most convenient for new students.'
    },
    {
      question: 'What healthcare options are available for international students?',
      answer: 'International students are required to enroll in National Health Insurance (NHI). This provides coverage for most medical services at a reasonable cost.'
    },
    {
      question: 'How do I open a bank account in Korea?',
      answer: 'You can open a bank account with your passport, Alien Registration Card (ARC), and proof of enrollment. Major banks include KB, Shinhan, and Woori Bank.'
    }
  ]

  return (
    <div className="pt-8 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Information Hub</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Essential information and resources for Malaysian students studying in Korea. 
            Find everything you need to succeed academically and personally.
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {quickLinks.map((link, index) => {
            const Icon = link.icon
            return (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{link.title}</h3>
                <p className="text-gray-600 text-sm">{link.description}</p>
              </div>
            )
          })}
        </div>

        {/* Information Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Information Categories</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {infoCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Frequently Asked Questions</h2>
          <div className="bg-white rounded-xl shadow-lg border border-gray-200">
            <div className="divide-y divide-gray-200">
              {faqs.map((faq, index) => (
                <div key={index} className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Emergency Information */}
        <div className="bg-red-50 rounded-xl border border-red-200 p-8 mb-16">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
              <Phone className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-red-900">Emergency Information</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-4 border border-red-200">
              <h3 className="font-semibold text-red-900 mb-2">Emergency Services</h3>
              <div className="space-y-1 text-sm">
                <div>Police: <span className="font-mono font-bold">112</span></div>
                <div>Fire/Ambulance: <span className="font-mono font-bold">119</span></div>
                <div>Tourist Hotline: <span className="font-mono font-bold">1330</span></div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-4 border border-red-200">
              <h3 className="font-semibold text-red-900 mb-2">Malaysian Embassy</h3>
              <div className="space-y-1 text-sm">
                <div>Emergency: <span className="font-mono font-bold">+82-2-2077-8600</span></div>
                <div>Consular: <span className="font-mono font-bold">+82-2-2077-8610</span></div>
                <div>Address: Jung-gu, Seoul</div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg p-4 border border-red-200">
              <h3 className="font-semibold text-red-900 mb-2">PPMK Emergency</h3>
              <div className="space-y-1 text-sm">
                <div>24/7 Hotline: <span className="font-mono font-bold">+82-10-1234-5678</span></div>
                <div>Email: <span className="font-mono">emergency@ppmk-korea.org</span></div>
                <div>WeChat: PPMKEmergency</div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact for More Information */}
        <div className="bg-white rounded-xl shadow-lg p-12 text-center border border-gray-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Need More Information?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Can't find what you're looking for? Our information team is here to help you with any questions about studying and living in Korea.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Contact Information Team
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Submit a Question
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Information
