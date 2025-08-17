import React from 'react'
import { BookOpen, MapPin, Phone, CreditCard, Home, Plane, FileText, AlertCircle, CheckCircle, Info } from 'lucide-react'

const Information = () => {
  const infoCategories = [
    {
      title: 'Visa & Immigration',
      icon: FileText,
      color: 'bg-ppmk-dark',
      items: [
        'Student visa (D-2) application process',
        'Alien registration card procedures',
        'Visa extension guidelines',
        'Work permit regulations for students'
      ]
    },
    {
      title: 'Accommodation',
      icon: Home,
      color: 'bg-ppmk-dark/80',
      items: [
        'University dormitory applications',
        'Off-campus housing options',
        'Rental contract guidelines',
        'Housing cost estimates by area'
      ]
    },
    {
      title: 'Banking & Finance',
      icon: CreditCard,
      color: 'bg-ppmk-dark/60',
      items: [
        'Opening Korean bank accounts',
        'International money transfers',
        'Student discounts and benefits',
        'Part-time job salary guidelines'
      ]
    },
    {
      title: 'Transportation',
      icon: Plane,
      color: 'bg-ppmk-dark/40',
      items: [
        'T-money card and public transport',
        'Student transportation discounts',
        'Airport to university routes',
        'Inter-city travel options'
      ]
    }
  ]

  const emergencyContacts = [
    {
      service: 'Emergency Services',
      number: '119',
      description: 'Fire, ambulance, and rescue services'
    },
    {
      service: 'Police',
      number: '112',
      description: 'General police emergency line'
    },
    {
      service: 'Tourist Hotline',
      number: '1330',
      description: '24/7 tourist assistance in multiple languages'
    },
    {
      service: 'Malaysian Embassy',
      number: '+82-2-2077-8600',
      description: 'Embassy of Malaysia in Seoul'
    }
  ]

  const universities = [
    {
      name: 'Seoul National University',
      location: 'Gwanak-gu, Seoul',
      students: 45,
      contact: 'snu@ppmk-korea.org'
    },
    {
      name: 'Yonsei University',
      location: 'Seodaemun-gu, Seoul',
      students: 38,
      contact: 'yonsei@ppmk-korea.org'
    },
    {
      name: 'Korea University',
      location: 'Seongbuk-gu, Seoul',
      students: 42,
      contact: 'korea@ppmk-korea.org'
    },
    {
      name: 'KAIST',
      location: 'Daejeon',
      students: 28,
      contact: 'kaist@ppmk-korea.org'
    },
    {
      name: 'Pohang University of Science and Technology',
      location: 'Pohang',
      students: 15,
      contact: 'postech@ppmk-korea.org'
    },
    {
      name: 'Hanyang University',
      location: 'Seongdong-gu, Seoul',
      students: 32,
      contact: 'hanyang@ppmk-korea.org'
    }
  ]

  const quickTips = [
    {
      title: 'Language Preparation',
      tip: 'Start learning basic Korean before arrival. TOPIK certification can help with scholarships.',
      icon: BookOpen
    },
    {
      title: 'Cultural Adaptation',
      tip: 'Respect for elders and hierarchy is important in Korean culture. Bow when greeting.',
      icon: Info
    },
    {
      title: 'Weather Preparation',
      tip: 'Korea has four distinct seasons. Prepare warm clothes for winter (-10°C to -20°C).',
      icon: AlertCircle
    },
    {
      title: 'Food & Dining',
      tip: 'Halal food options are available in major cities. Check HalalKorea app for restaurants.',
      icon: CheckCircle
    }
  ]

  return (
    <div className="pt-8 pb-12 bg-ppmk-light min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 mt-20">
          <div className="bg-white rounded-xl shadow-lg p-12 border border-ppmk-dark/10">
            <h1 className="text-5xl font-bold text-ppmk-dark mb-6">Student Information</h1>
            <p className="text-xl text-ppmk-dark/80 max-w-4xl mx-auto">
              Essential information and resources for Malaysian students studying in Korea. 
              From visa procedures to daily life tips, we've got you covered.
            </p>
          </div>
        </div>

        {/* Information Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-ppmk-dark mb-8 text-center">Essential Information</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {infoCategories.map((category, index) => {
              const Icon = category.icon
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-ppmk-dark/10">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className={`w-12 h-12 ${category.color} rounded-lg flex items-center justify-center`}>
                      <Icon className="w-7 h-7 text-ppmk-accent" />
                    </div>
                    <h3 className="text-2xl font-bold text-ppmk-dark">{category.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-ppmk-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-ppmk-dark/80">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>

        {/* University Network */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-ppmk-dark mb-8 text-center">PPMK University Network</h2>
          <div className="bg-white rounded-xl shadow-lg p-8 border border-ppmk-dark/10">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {universities.map((university, index) => (
                <div key={index} className="border border-ppmk-dark/10 rounded-lg p-4 hover:bg-ppmk-accent/10 transition-colors">
                  <h3 className="font-bold text-ppmk-dark mb-2">{university.name}</h3>
                  <div className="space-y-2 text-sm text-ppmk-dark/70">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{university.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <BookOpen className="w-4 h-4" />
                      <span>{university.students} Malaysian students</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="w-4 h-4" />
                      <span className="text-ppmk-dark hover:underline cursor-pointer">{university.contact}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Tips */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-ppmk-dark mb-8 text-center">Quick Tips for New Students</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {quickTips.map((tip, index) => {
              const Icon = tip.icon
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 border border-ppmk-dark/10">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-ppmk-accent/50 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-ppmk-dark" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-ppmk-dark mb-2">{tip.title}</h3>
                      <p className="text-ppmk-dark/80">{tip.tip}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Emergency Contacts */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-ppmk-dark mb-8 text-center">Emergency Contacts</h2>
          <div className="bg-white rounded-xl shadow-lg p-8 border border-ppmk-dark/10">
            <div className="grid md:grid-cols-2 gap-6">
              {emergencyContacts.map((contact, index) => (
                <div key={index} className="border border-ppmk-dark/10 rounded-lg p-4 bg-red-50/50">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-ppmk-dark">{contact.service}</h3>
                    <span className="text-2xl font-bold text-red-600">{contact.number}</span>
                  </div>
                  <p className="text-sm text-ppmk-dark/70">{contact.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-ppmk-dark rounded-xl shadow-lg p-12 border border-ppmk-dark/10">
            <Phone className="w-16 h-16 text-ppmk-accent mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-ppmk-accent mb-6">Need More Help?</h2>
            <p className="text-xl text-ppmk-accent/90 mb-8 max-w-3xl mx-auto">
              Our experienced members and alumni are here to help you navigate your Korean journey. 
              Don't hesitate to reach out for personalized guidance and support.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-ppmk-accent text-ppmk-dark px-8 py-3 rounded-lg font-semibold hover:bg-ppmk-accent/90 transition-colors">
                Contact Support
              </button>
              <button className="border-2 border-ppmk-accent text-ppmk-accent px-8 py-3 rounded-lg font-semibold hover:bg-ppmk-accent hover:text-ppmk-dark transition-colors">
                Join WhatsApp Group
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Information
