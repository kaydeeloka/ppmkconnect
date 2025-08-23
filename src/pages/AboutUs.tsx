import React from 'react'
import { Users, Calendar, Award, Network,GraduationCap,Clock } from 'lucide-react'

const About = () => {
  const stats = [
    { number: '500+', label: 'Active Members', color: 'bg-blue-500', icon: Users },
    { number: '15+', label: 'Universities', color: 'bg-green-500', icon: GraduationCap },
    { number: '50+', label: 'Events Organized', color: 'bg-purple-500', icon: Calendar },
    { number: '40', label: 'Years Active', color: 'bg-orange-500', icon: Clock },
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
      year: '1984',
      title: 'PPMK Establishment',
      description: 'Founded to serve Malaysian students in Korea under the Look East Policy.',
    },
    {
      year: '2010',
      title: 'First Cultural Festival',
      description: 'Organized the inaugural Malaysia-Korea Cultural Exchange event.',
    },
    {
      year: '2020',
      title: 'Digital Transformation',
      description: 'Launched online platforms to maintain connections during the pandemic.',
    },
    {
      year: '2022',
      title: 'Career Symposium',
      description: 'Established SIKMA, a career program for graduating students.',
    },
    {
      year: '2024',
      title: '500+ Members',
      description: 'Reached a milestone of over 500 active members across South Korea.',
    },
  ]

  const embassy = [
    {
      name: 'En. Shahril Nizam Bin Idris',
      position: 'COUNSELLOR (EDUCATION AND TRAINING)',
      email: 'shahril.idris@jpa.gov.my',
      phone: '+82-10-3494-6738',
      location:'Embassy Malaysia',
      image: 'https://ppmkonline.com/wp-content/uploads/2025/01/en-shahril-4.png?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
      name: 'En. Mohd Zul Faisal Bin Mohamad Zin',
      position: 'COUNSELLOR (MARA STUDENTs’ AFFAIRS)',
      email: 'mzfaisal@mara.gov.my ',
      phone: '+82-10-4346-1401',
      location:'Embassy Malaysia',
      image: 'https://ppmkonline.com/wp-content/uploads/2025/01/en-zul-3.png?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
  ]

  const committee = [
    {
      name: 'Muhammad Aisy Iskandar Bin Zakaria',
      position: 'President',
      email: 'aisyzakaria31@gmail.com',
      phone: '+82-10-2850-1231',
      location:'Sunkyungkwan University',
      image: 'https://ppmkonline.com/wp-content/uploads/2025/01/AISY-819x1024.jpg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
      name: 'Nurul Namirah Binti Saiful Idzhar',
      position: 'Vice President',
      email: 'nurulnamirah02@gmail.comg',
      phone: '+82-10-2183-2679',
      location:'Sunkyungkwan University',
      image: 'https://ppmkonline.com/wp-content/uploads/2025/01/NAMI-819x1024.jpg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
      name: 'Farah Syazana Binti Mohd Khidzir',
      position: 'General Secretary',
      email: 'fsyazana02@gmail.com',
      phone: '+82-10-3347-2212',
      location:'Yonsei University',
      image: 'https://ppmkonline.com/wp-content/uploads/2025/01/FARAH-819x1024.jpg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
    {
      name: 'Ummi Aisyah Binti Somri',
      position: 'Honorary Treasurer',
      email: 'aisyahromzi22@gmail.com',
      phone: '+82-10-9833-5922',
      location:'Korea University',
      image: 'https://ppmkonline.com/wp-content/uploads/2025/01/AISYAH-819x1024.jpg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop'
    },
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
    <div className="pt-8 pb-12 bg-gray-50 min-h-screen">
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
        
        {/* --- OUR JOURNEY TIMELINE --- */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#003e58] mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">Key milestones in PPMK's history.</p>
          </div>

          <div className="bg-ppmk-light rounded-xl shadow-lg p-10 border border-gray-200/80">
            <div className="relative py-12 mb-10 py-20">
              {/* Timeline Bar */}
              <div className="mt-5 absolute top-1/2 left-0 w-full h-1 bg-ppmk-dark -translate-y-1/2"></div>

              {/* Centered Timeline Items */}
              <div className="relative flex flex-wrap justify-center mt-10">
                {journeyEvents.map((event, index) => (
                  <div key={event.year} className="relative flex flex-col items-center w-48">
                    {/* Event Label */}
                    <div className={`absolute w-48 text-center ${index % 2 === 0 ? 'bottom-20' : 'top-20'}`}>
                      <h3 className="text-lg font-bold text-ppmk-dark">{event.title}</h3>
                      <div
                        className="h-1 w-8 mx-auto my-1 rounded-full"
                        style={{ backgroundColor: index % 2 === 0 ? '#003e58' : '#fdf9b4' }}
                      ></div>
                      <p className="text-sm text-gray-600">{event.description}</p>
                    </div>

                    {/* Year Circle */}
                    <div
                      className="w-20 h-20 rounded-full flex items-center justify-center font-bold text-lg z-10 border-4 border-[#f0f2ef]"
                      style={{
                        backgroundColor: index % 2 === 0 ? '#003e58' : '#fdf9b4',
                        color: index % 2 === 0 ? '#fdf9b4' : '#003e58',
                      }}
                    >
                      {event.year}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>


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
                  className="w-28 h-28 rounded-full mx-auto mb-4 object-cover border-4 border-ppmk-accent/50"
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

        <div className="bg-white rounded-2xl shadow-xl p-8 border border-ppmk-dark/10">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center">
            {sponsors.map((sponsor, index) => (
              <div
                key={index}
                className="group text-center p-4 rounded-xl transition-all duration-300 hover:bg-white/50 hover:shadow-md"
              >
                <div className="relative w-20 h-20 mx-auto mb-4 flex items-center justify-center bg-white/40 rounded-xl border border-white/30 overflow-hidden">
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="max-w-full max-h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const fallback = e.currentTarget.nextElementSibling;
                      if (fallback) fallback.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden absolute inset-0 bg-gradient-to-br from-ppmk-dark to-ppmk-dark/80 rounded-xl flex items-center justify-center">
                    <span className="text-white text-xs font-semibold px-2 text-center">
                      {sponsor.name.split(' ').slice(0, 2).join(' ')}
                    </span>
                  </div>
                </div>
                <h4 className="text-sm font-semibold text-gray-800 mb-1">{sponsor.name}</h4>
                <p className="text-xs text-gray-500">{sponsor.category}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-sm text-gray-600 italic">
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
