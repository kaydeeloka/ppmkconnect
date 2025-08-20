import React, { useState } from 'react'
import { Search, Filter, Users, Calendar, MapPin, ExternalLink, Heart, Star, Globe, Building, Music, BookOpen, Trophy, Camera, GraduationCap } from 'lucide-react'

const Community = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterType, setFilterType] = useState('all')

  // Stats data
  const stats = [
    {
      icon: Users,
      label: 'Active Clubs',
      value: '6',
      description: 'Registered student organizations',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Building,
      label: 'Total Members',
      value: '250',
      description: 'Malaysian students connected',
      gradient: 'from-cyan-500 to-teal-500'
    },
    {
      icon: Calendar,
      label: 'Years Established',
      value: '10',
      description: 'Years of building connections',
      gradient: 'from-teal-500 to-blue-500'
    }
  ]

  // Clubs data
  const clubs = [
    {
      id: 1,
      name: 'Ikatan Muslimin Malaysia Korea (ISMA)',
      icon: Heart,
      description: 'Preserving and celebrating Malaysian heritage through cultural events, traditional performances, and community gatherings.',
      members: 1250,
      category: 'spiritual',
      university: 'University of Melbourne',
      established: '2010',
      socialLink: '#'
    },
    {
      id: 2,
      name: 'Generasi Mahasiswa Islam Korea (GMIK)',
      icon: BookOpen,
      description: 'Supporting academic achievement through study groups, mentorship programs, and scholarship opportunities.',
      members: 890,
      category: 'spiritual',
      university: 'University of Sydney',
      established: '2015',
      socialLink: '#'
    },
    {
      id: 3,
      name: 'Malaysian Students Dance Crew (MSDC)',
      icon: Trophy,
      description: 'Bringing together Malaysian athletes and sports enthusiasts for competitions and recreational activities.',
      members: 650,
      category: 'cultural',
      university: 'UNSW Sydney',
      established: '2012',
      socialLink: '#'
    },
    {
      id: 4,
      name: 'Malaysian Students Football Club (MSFC)',
      icon: Music,
      description: 'A platform for Malaysian musicians to collaborate, perform, and share their passion for music.',
      members: 420,
      category: 'sport',
      university: 'Monash University',
      established: '2018',
      socialLink: '#'
    },
    {
      id: 5,
      name: 'Malaysian Students Recreational Club (MSRC)',
      icon: Camera,
      description: 'Capturing memories and showcasing Malaysian culture through the lens of talented photographers.',
      members: 380,
      category: 'sport',
      university: 'University of Queensland',
      established: '2019',
      socialLink: '#'
    },
    {
      id: 6,
      name: 'Malaysia Korea Badminton Association (MKBA)',
      icon: Star,
      description: 'Developing leadership skills and creating opportunities for Malaysian students to excel in their careers.',
      members: 720,
      category: 'sport',
      university: 'Australian National University',
      established: '2014',
      socialLink: '#'
    }
  ]

  // Universities data
  const universities = [
    {
      id: 1,
      name: 'Ajou University',
      image: 'https://i.namu.wiki/i/oc88hdko9WYXsVw5LgQA_MRJr0pVju50oGCqc-Lq2PfKyBr9dDr00Ft52pwvGJsAdvsMQWP8F0gKgC6BtkYZp7Yb_gpAcgM70IAuBW40PcD6C4qarh5A7eRNPSXn41w-Mw5CTLy9MXNU1msh851AbQ.webp',
      description: 'Ajou University is a dynamic, research-driven university with strengths in engineering, medicine, and international programs, offering students a balance of innovation, global exposure, and professional opportunities—especially in Korea’s tech and business hubs.',    
      location: 'Suwon, Gyeonggi-do',
      malaysianStudents: 1,
      established: '1973',
      programs: ['Engineering', 'Medical Science', 'Business', 'IT and Computing', 'Biotechnology(BT)', 'Nanotechnology(NT)', 'International Studies'],
      ranking: '#9 in Korea '
    },
    {
      id: 2,
      name: 'Dongyang Mirae University',
      image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nr6Uo5nDwyahMWzQgp6_3BIKbkYi8rJIA1kikQmAleS7aqnSnbPXws-oD_5zcqOfqiKvPMW6YCTToFzA6Gbf10zWgR3wT-ivf9Yt_3AATY-wUl3gVcmKjK8f_FdtmXDTMMKf57h=s1360-w1360-h1020-rw',
      description: 'Historic university offering world-class education with vibrant Malaysian student societies and cultural programs.',
      location: 'Sydney, Australia',
      malaysianStudents: 18,
      established: '1850',
      programs: ['Law', 'Engineering', 'Medicine', 'Architecture'],
      ranking: '#2 in Australia'
    },
    {
      id: 3,
      name: 'Ewha Woman University',
      image: 'https://cascadingkorea.wordpress.com/wp-content/uploads/2019/03/ewh_3363-1-1.jpg',
      description: 'Innovation-focused university known for its strong engineering and business programs with active Malaysian community.',
      location: 'Sydney, Australia',
      malaysianStudents: 7,
      established: '1949',
      programs: ['Engineering', 'Business', 'Computer Science', 'Design'],
      ranking: '#3 in Australia'
    },
    {
      id: 4,
      name: 'Gachon University',
      image: 'https://lh3.googleusercontent.com/proxy/NJe9RIbmU1nufEsnBpCQG_Xwc_irJodE0VB-tgt1_g_fsNd3Ik_c1rW8dP2srT30NcQ20v3_369IyU0247PTlXvacsDyhswe34NCOISb9PYmfIPhMTxjgUO1aIdVv2GtgmidXkr_HEgPbdbaJBV9acOdVQ',
      description: 'Global university with strong ties to Malaysia, offering diverse programs and extensive student support services.',
      location: 'Melbourne, Australia',
      malaysianStudents: 1,
      established: '1958',
      programs: ['Medicine', 'Engineering', 'Business', 'Pharmacy'],
      ranking: '#4 in Australia'
    },
    {
      id: 5,
      name: 'Hanyang University (Erica)',
      image: 'https://i.namu.wiki/i/I4Soxv8DJYvS7H0HhqBxHzef6o9lfQNsKZ30dJtZqqXy6Cb0yO0x9cd1Q6SfAr0Ztd3GAtH3g7WbFNEnd00CBg.webp',
      description: 'Research-intensive university with beautiful campus and strong Malaysian student representation across all faculties.',
      location: 'Brisbane, Australia',
      malaysianStudents: 19,
      established: '1909',
      programs: ['Medicine', 'Engineering', 'Business', 'Science'],
      ranking: '#5 in Australia'
    },
    {
      id: 6,
      name: 'Hanyang University',
      image: 'https://www.hanyang.ac.kr/image/journal/article?img_id=13383129&t=1749688674017',
      description: 'Premier research university in the nation\'s capital with strong Malaysian alumni network and cultural societies.',
      location: 'Canberra, Australia',
      malaysianStudents: 65,
      established: '1946',
      programs: ['Politics', 'Economics', 'Science', 'Arts'],
      ranking: '#1 Research University'
    },
    {
      id: 7,
      name: 'Inha University',
      image: 'https://duhocsunny.edu.vn/wp-content/uploads/2020/05/inha-2.jpg',
      description: 'Premier research university in the nation\'s capital with strong Malaysian alumni network and cultural societies.',
      location: 'Canberra, Australia',
      malaysianStudents: 11,
      established: '1946',
      programs: ['Politics', 'Economics', 'Science', 'Arts'],
      ranking: '#1 Research University'
    },
    {
      id: 8,
      name: 'Kangwon National University',
      image: 'https://wwwk.kangwon.ac.kr/DATA/bbs/342/202304071538215706ev.jpg',
      description: 'Premier research university in the nation\'s capital with strong Malaysian alumni network and cultural societies.',
      location: 'Canberra, Australia',
      malaysianStudents: 1,
      established: '1946',
      programs: ['Politics', 'Economics', 'Science', 'Arts'],
      ranking: '#1 Research University'
    },
    {
      id: 9,
      name: 'Konkuk University',
      image: 'https://d2kihw5e8drjh5.cloudfront.net/eyJidWNrZXQiOiJ1dGEtaW1hZ2VzIiwia2V5IjoicGxhY2VfaW1nLzAwYzNkZDI5YTk5YzQxMGFiNmFkZDRkNGM5YzI3NmRiIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo2NDAsImhlaWdodCI6NjQwLCJmaXQiOiJpbnNpZGUifSwicm90YXRlIjpudWxsLCJ0b0Zvcm1hdCI6ICJ3ZWJwIn19',
      description: 'Premier research university in the nation\'s capital with strong Malaysian alumni network and cultural societies.',
      location: 'Canberra, Australia',
      malaysianStudents: 26,
      established: '1946',
      programs: ['Politics', 'Economics', 'Science', 'Arts'],
      ranking: '#1 Research University'
    },
    {
      id: 10,
      name: 'Korea University',
      image: 'https://www.kth.se/polopoly_fs/1.1361374.1728043263!/image/koreauniversity.png',
      description: 'Premier research university in the nation\'s capital with strong Malaysian alumni network and cultural societies.',
      location: 'Canberra, Australia',
      malaysianStudents: 156,
      established: '1946',
      programs: ['Politics', 'Economics', 'Science', 'Arts'],
      ranking: '#1 Research University'
    },
    {
      id: 11,
      name: 'Kwangwoon University',
      image: 'https://i.namu.wiki/i/jtQY_huxsn1H8wmyKHnWX8wmnZwm3SzsFEcsepBIH2FXLrIOx3lrrvDPuO3BvZFx7lmtG6OlR_q1-6nQ_Tztp3st4RKZwSz_vzrAaxvMbx5Qi4BOOn-cXtYAOvjrkOZZqCx6mbNhkR94jxiN6MYsHw.webp',
      description: 'Premier research university in the nation\'s capital with strong Malaysian alumni network and cultural societies.',
      location: 'Canberra, Australia',
      malaysianStudents: 1,
      established: '1946',
      programs: ['Politics', 'Economics', 'Science', 'Arts'],
      ranking: '#1 Research University'
    },
    {
      id: 12,
      name: 'Kyunghee University (Suwon)',
      image: 'https://duhocicc.edu.vn/wp-content/uploads/2024/04/dai-hoc-kyunghee5-e1713939709947-780x468.jpg',
      description: 'Premier research university in the nation\'s capital with strong Malaysian alumni network and cultural societies.',
      location: 'Canberra, Australia',
      malaysianStudents: 17,
      established: '1946',
      programs: ['Politics', 'Economics', 'Science', 'Arts'],
      ranking: '#1 Research University'
    },
    {
      id: 13,
      name: 'Kyunghee University (Seoul)',
      image: 'https://cf.creatrip.com/original/blog/4854/%E6%85%B6%E7%86%99%E5%A4%A7%E5%AD%B8%20(7)0.jpg?d=1200&q=80&f=webp',
      description: 'Premier research university in the nation\'s capital with strong Malaysian alumni network and cultural societies.',
      location: 'Canberra, Australia',
      malaysianStudents: 1,
      established: '1946',
      programs: ['Politics', 'Economics', 'Science', 'Arts'],
      ranking: '#1 Research University'
    },
    {
      id: 14,
      name: 'Language Education Institute',
      image: 'https://lei.snu.ac.kr/img/mobile/kr/lei/content/main_img2.jpg',
      description: 'Premier research university in the nation\'s capital with strong Malaysian alumni network and cultural societies.',
      location: 'Canberra, Australia',
      malaysianStudents: 43,
      established: '1946',
      programs: ['Politics', 'Economics', 'Science', 'Arts'],
      ranking: '#1 Research University'
    },
    {
      id: 15,
      name: 'Sejong University',
      image: 'https://koreajoongangdaily.joins.com/data/photo/2023/03/28/cfcbda6c-517c-4306-8872-0b7f770f58e6.jpg',
      description: 'Premier research university in the nation\'s capital with strong Malaysian alumni network and cultural societies.',
      location: 'Canberra, Australia',
      malaysianStudents: 46,
      established: '1946',
      programs: ['Politics', 'Economics', 'Science', 'Arts'],
      ranking: '#1 Research University'
    },
    {
      id: 16,
      name: 'Seoul National University',
      image: 'https://oia.snu.ac.kr/sites/default/files/inline-images/SNU_002_ed1.jpg',
      description: 'Premier research university in the nation\'s capital with strong Malaysian alumni network and cultural societies.',
      location: 'Canberra, Australia',
      malaysianStudents: 7,
      established: '1946',
      programs: ['Politics', 'Economics', 'Science', 'Arts'],
      ranking: '#1 Research University'
    },
    {
      id: 17,
      name: 'Sogang University',
      image: 'https://studyabroad.temple.edu/sites/studyabroad/files/styles/tu_image_style_open_graph/public/media/image/Sogang-Main%20Gate.jpg?h=350cc808&itok=8-NPPzEd',
      description: 'Premier research university in the nation\'s capital with strong Malaysian alumni network and cultural societies.',
      location: 'Canberra, Australia',
      malaysianStudents: 1,
      established: '1946',
      programs: ['Politics', 'Economics', 'Science', 'Arts'],
      ranking: '#1 Research University'
    },
    {
      id: 18,
      name: 'SEOULTECH',
      image: 'https://koreajoongangdaily.joins.com/data/photo/2023/03/04/6370fba3-314e-4201-aff3-f9ae9655f40c.jpg',
      description: 'Premier research university in the nation\'s capital with strong Malaysian alumni network and cultural societies.',
      location: 'Canberra, Australia',
      malaysianStudents: 9,
      established: '1946',
      programs: ['Politics', 'Economics', 'Science', 'Arts'],
      ranking: '#1 Research University'
    },
    {
      id: 19,
      name: 'Sungkyunkwan University',
      image: 'https://hakbu.skku.edu/_res/editor_image/2021/11/RsFPrHnAvXThNakQjQmk0.PNG',
      description: 'Premier research university in the nation\'s capital with strong Malaysian alumni network and cultural societies.',
      location: 'Canberra, Australia',
      malaysianStudents: 70,
      established: '1946',
      programs: ['Politics', 'Economics', 'Science', 'Arts'],
      ranking: '#1 Research University'
    },
    {
      id: 20,
      name: 'Yonsei University',
      image: 'https://brocku.ca/international/learning/wp-content/uploads/sites/266/yonsei-main.jpg?x63201',
      description: 'Premier research university in the nation\'s capital with strong Malaysian alumni network and cultural societies.',
      location: 'Canberra, Australia',
      malaysianStudents: 19,
      established: '1946',
      programs: ['Politics', 'Economics', 'Science', 'Arts'],
      ranking: '#1 Research University'
    },
    {
      id: 21,
      name: 'Yonsei University (Songdo Campus)',
      image: 'https://i.namu.wiki/i/xyIvAo1RjZoOSVDEyoOPzJvCs5Ixk4iBAXu_Q59-S36s-Z9FcOvQJR3Y6FMfJV2-dq6wgqJQTxQ1edqWuW9ItB4aLCYgCgCNDOGmGStFKGqQ2xoT7CKgnMskhUFG0GIieNvBkov2rH905Xq6OVMYWw.webp',
      description: 'Premier research university in the nation\'s capital with strong Malaysian alumni network and cultural societies.',
      location: 'Canberra, Australia',
      malaysianStudents: 12,
      established: '1946',
      programs: ['Politics', 'Economics', 'Science', 'Arts'],
      ranking: '#1 Research University'
    }


  ]

  // Filter functions
  const filteredClubs = clubs.filter(club => {
    const matchesSearch = club.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         club.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         club.university.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesFilter = filterType === 'all' || 
                         filterType === 'clubs' || 
                         club.category === filterType

    return matchesSearch && matchesFilter
  })

  const filteredUniversities = universities.filter(university => {
    const matchesSearch = university.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         university.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         university.location.toLowerCase().includes(searchTerm.toLowerCase())
    
    const matchesFilter = filterType === 'all' || filterType === 'universities'

    return matchesSearch && matchesFilter
  })

  return (
    <div className="pt-8 pb-12 bg-ppmk-light min-h-screen">
      {/* Background Pattern */}
      <div className="fixed inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary-100/30 via-white/20 to-secondary-200/30"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-secondary-300/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-300/20 rounded-full blur-3xl"></div>
      </div>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
          {/* Hero Section */}
          <section className="text-center mb-16 mt-20">
            <div className="bg-white rounded-xl shadow-lg p-12 border border-ppmk-dark/10">
              <h2 className="text-5xl font-bold text-ppmk-dark mb-6">
                PPMK Community
              </h2>
              <p className="text-xl text-ppmk-dark/80 max-w-4xl mx-auto">
                Our vibrant community consists of various clubs and organizations that cater to 
            different interests, academic pursuits, and regional connections across South Korea.

              </p>
            </div>
          </section>

          {/* Search and Filter Section */}
          <section className="bg-white/50 backdrop-blur-sm rounded-2xl border border-secondary-100 p-6 shadow-xl">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search Bar */}
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary-500 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search clubs, universities, or communities..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-2 bg-secondary-25 border-1 border-secondary-100 rounded-2xl text-primary-600 placeholder-primary-400 focus:outline-none focus:ring-2 focus:ring-secondary-1500 focus:border-secondary-200 transition-all duration-100 text-lg font-medium shadow-inner"
                />
              </div>

              {/* Filter Dropdown */}
              <div className="relative">
                <Filter className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="pl-10 pr-5 py-2 bg-secondary-25 border-1 border-secondary-100 rounded-2xl text-primary-400 focus:outline-none focus:ring-2 focus:ring-secondary-150 focus:border-secondary-200 transition-all duration-100 appearance-none cursor-pointer min-w-[150px] text-lg font-medium shadow-inner"
                >
                  <option value="all">All Categories</option>
                  <option value="clubs">Clubs Only</option>
                  <option value="universities">Universities Only</option>
                  <option value="cultural">Cultural Groups</option>
                  <option value="academic">Academic Societies</option>
                  <option value="sports">Sports Clubs</option>
                  <option value="spiritual">Spiritual Clubs</option>
                </select>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Community Impact</h2>
              <p className="text-xl text-primary-600 max-w-3xl mx-auto font-medium leading-relaxed">
                See how our community has grown and the connections we've fostered across the globe.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group backdrop-blur-md bg-white/10 rounded-2xl border border-white/20 p-8 shadow-xl hover:shadow-2xl hover:bg-white/15 transition-all duration-300 text-center"
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gray-800 mb-2">{stat.value}</div>
                  <div className="text-xl font-semibold text-gray-700 mb-2">{stat.label}</div>
                  <div className="text-gray-600">{stat.description}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Clubs Section */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Clubs</h2>
              <p className="text-xl text-primary-600 max-w-3xl mx-auto font-medium leading-relaxed">
                Discover vibrant communities where Malaysian students come together to pursue shared interests and build lasting friendships.
              </p>
            </div>
            
            <div className="grid grid-cols-1 mx-6 py-3 text-white rounded-xl md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredClubs.map((club) => (
                <div
                  key={club.id}
                  className="group bg-white/90 backdrop-blur-sm rounded-3xl border border-secondary-200 p-8 shadow-xl hover:shadow-2xl hover:bg-white transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <club.icon className="w-8 h-8 text-white" />
                    </div>
                    <button className="p-2 backdrop-blur-md bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
                      <ExternalLink className="w-4 h-4 text-primary-700" />
                    </button>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {club.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {club.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">University:</span>
                      <span className="text-gray-700 font-medium">{club.university}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Established:</span>
                      <span className="text-gray-700 font-medium">{club.established}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-white/20">
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-700 font-medium">{club.members.toLocaleString()} members</span>
                    </div>
                    <button className="px-4 py-2 bg-primary-700 text-white rounded-xl hover:bg-primary-800 duration-300 font-semibold shadow-lg hover:shadow-xl">
                      Join Club
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredClubs.length === 0 && (
              <div className="text-center py-12">
                <div className="backdrop-blur-md bg-white/10 rounded-2xl border border-white/20 p-8">
                  <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">No clubs found</h3>
                  <p className="text-gray-600">Try adjusting your search terms or filters to find more clubs.</p>
                </div>
              </div>
            )}
          </section>

          {/* Universities Section */}
          <section>
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Universities & Communities</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Explore top universities where Malaysian students thrive, with strong support networks and vibrant communities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredUniversities.map((university) => (
                <div
                  key={university.id}
                  className="group backdrop-blur-md bg-white/10 rounded-2xl border border-white/20 overflow-hidden shadow-xl hover:shadow-2xl hover:bg-white/15 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={university.image}
                      alt={university.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <div className="backdrop-blur-md bg-white/20 rounded-lg px-3 py-1">
                        <span className="text-sm font-medium text-gray-800">{university.ranking}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                        {university.name}
                      </h3>
                      <button className="p-2 backdrop-blur-md bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
                        <ExternalLink className="w-4 h-4 text-gray-700" />
                      </button>
                    </div>

                    <div className="flex items-center space-x-2 mb-3">
                      <MapPin className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-600 text-sm">{university.location}</span>
                    </div>

                    <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                      {university.description}
                    </p>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">Established:</span>
                        <span className="text-gray-700 font-medium">{university.established}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-500">PPMK Students:</span>
                        <span className="text-gray-700 font-medium">{university.malaysianStudents.toLocaleString()}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="text-sm text-gray-500 mb-2">Popular Programs:</div>
                      <div className="flex flex-wrap gap-1">
                        {university.programs.slice(0, 3).map((program, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 backdrop-blur-md bg-white/20 rounded-md text-xs text-gray-700"
                          >
                            {program}
                          </span>
                        ))}
                        {university.programs.length > 3 && (
                          <span className="px-2 py-1 backdrop-blur-md bg-white/20 rounded-md text-xs text-gray-700">
                            +{university.programs.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-white/20">
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-700 font-medium text-sm">
                          {university.malaysianStudents.toLocaleString()} students
                        </span>
                      </div>
                      <button className="px-4 py-2 bg-primary-700 text-white rounded-xl hover:bg-primary-800 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl">
                        Join Community
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredUniversities.length === 0 && (
              <div className="text-center py-12">
                <div className="backdrop-blur-md bg-white/10 rounded-2xl border border-white/20 p-8">
                  <GraduationCap className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-700 mb-2">No universities found</h3>
                  <p className="text-gray-600">Try adjusting your search terms or filters to find more universities.</p>
                </div>
              </div>
            )}
          </section>
        </main>

        {/* Footer */}
        <footer className="backdrop-blur-md bg-white/10 border-t border-white/20 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-1 md:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                    <Globe className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800">PPMKConnect</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Connecting Malaysian students and communities worldwide through shared experiences and cultural heritage.
                </p>
                <div className="flex space-x-4">
                  <div className="w-10 h-10 backdrop-blur-md bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                    <Heart className="w-5 h-5 text-gray-700" />
                  </div>
                  <div className="w-10 h-10 backdrop-blur-md bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                    <Star className="w-5 h-5 text-gray-700" />
                  </div>
                  <div className="w-10 h-10 backdrop-blur-md bg-white/20 rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                    <Globe className="w-5 h-5 text-gray-700" />
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-4">Quick Links</h4>
                <ul className="space-y-2 text-gray-600">
                  <li><a href="#" className="hover:text-blue-600 transition-colors">About Us</a></li>
                  <li><a href="#" className="hover:text-blue-600 transition-colors">Join Community</a></li>
                  <li><a href="#" className="hover:text-blue-600 transition-colors">Events</a></li>
                  <li><a href="#" className="hover:text-blue-600 transition-colors">Support</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-4">Contact</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>hello@ppmkconnect.com</li>
                  <li>+60 12-345 6789</li>
                  <li>Kuala Lumpur, Malaysia</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-white/20 mt-8 pt-8 text-center text-gray-600">
              <p>&copy; 2024 PPMKConnect. All rights reserved. Built with ❤️ for Malaysian students worldwide.</p>
            </div>
          </div>
        </footer>
      </div>
    
  )
}


export default Community
