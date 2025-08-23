import React ,{ useState } from 'react'
import { Trophy, Calendar,CalendarCheck, Newspaper, Users, MapPin, Heart, Star, TrendingUp, Instagram, Facebook, Award } from 'lucide-react'
import { Link } from 'react-router-dom';
import UniversityMap from '../components/UniversityMap';
import PieChart from '../components/PieChart'


interface SocialCardProps {
  icon: React.ComponentType<{ className?: string }>
  handle: string
  gradient: string
}

const SocialCard: React.FC<SocialCardProps> = ({ icon: Icon, handle, gradient }) => {
  return (
    <div className="flex items-center space-x-4 backdrop-blur-md bg-white/10 rounded-2xl border border-white/20 p-6 hover:bg-white/20 transition-all duration-300 cursor-pointer group">
      <div className={`p-3 rounded-xl bg-gradient-to-r ${gradient} text-white shadow-lg group-hover:scale-110 transition-transform duration-200`}>
        <Icon className="h-6 w-6" />
      </div>
      <div className="text-left">
        <p className="font-semibold text-white">{handle}</p>
      </div>
    </div>
  );
};
  const universityData = [
  { name: "Korea University", students: 156, location: "Seoul", coordinates: { x: 45, y: 35 } },
  { name: "Sungkyunkwan University", students: 70, location: "Seoul", coordinates: { x: 42, y: 38 } },
  { name: "Hanyang University", students: 65, location: "Seoul", coordinates: { x: 48, y: 36 } },
  { name: "Sejong University", students: 46, location: "Seoul", coordinates: { x: 44, y: 40 } },
  { name: "Seoul National University (LEI)", students: 43, location: "Seoul", coordinates: { x: 40, y: 42 } },
  { name: "Konkuk University", students: 26, location: "Seoul", coordinates: { x: 50, y: 38 } },
  { name: "Hanyang University (Erica Campus)", students: 19, location: "Ansan", coordinates: { x: 38, y: 45 } },
  { name: "Yonsei University", students: 19, location: "Seoul", coordinates: { x: 41, y: 35 } },
  { name: "Donggyang Mirae University", students: 18, location: "Seoul", coordinates: { x: 46, y: 44 } },
  { name: "Kyung Hee University (Global Campus)", students: 17, location: "Yongin", coordinates: { x: 52, y: 48 } },
  { name: "Yonsei University (Songdo Campus)", students: 12, location: "Incheon", coordinates: { x: 35, y: 40 } },
  { name: "Inha University", students: 11, location: "Incheon", coordinates: { x: 36, y: 42 } },
  { name: "Seoultech", students: 9, location: "Seoul", coordinates: { x: 43, y: 39 } },
  { name: "Ewha Womans University", students: 7, location: "Seoul", coordinates: { x: 39, y: 37 } },
  { name: "Seoul National University", students: 7, location: "Seoul", coordinates: { x: 41, y: 43 } },
  { name: "Ajou University", students: 1, location: "Suwon", coordinates: { x: 47, y: 50 } },
  { name: "Gachon University", students: 1, location: "Seongnam", coordinates: { x: 49, y: 46 } },
  { name: "Kangwon National University", students: 1, location: "Chuncheon", coordinates: { x: 55, y: 25 } },
  { name: "Kwangwoon University", students: 1, location: "Seoul", coordinates: { x: 45, y: 33 } },
  { name: "Kyung Hee University (Seoul Campus)", students: 1, location: "Seoul", coordinates: { x: 47, y: 41 } },
  { name: "Sogang University", students: 1, location: "Seoul", coordinates: { x: 40, y: 36 } }
]

const Home = () => {

  const [selectedUniversity, setSelectedUniversity] = useState<typeof universityData[0] | null>(null)
  const topUniversity = universityData.reduce((max, uni) => uni.students > max.students ? uni : max)

  const batchWarData = [
    { batch: '21', students: 141, color: 'bg-ppmk-dark' },
    { batch: '22', students: 137, color: 'bg-ppmk-dark/80' },
    { batch: '23', students: 153, color: 'bg-ppmk-dark/60' },
    { batch: '20', students: 58, color: 'bg-ppmk-dark/40' },
    { batch: '24', students: 42, color: 'bg-ppmk-dark/30' },
  ]

  // Scholarship data based on the image
  const scholarshipData = [
    { name: "MARA", value: 272, color: "#3b82f6" },
    { name: "JPA", value: 199, color: "#06b6d4" },
    { name: "PERSENDIRIAN", value: 33, color: "#8b5cf6" },
    { name: "YTM-MARA", value: 15, color: "#f97316" },
    { name: "YAYASAN TERENGGANU", value: 4, color: "#ef4444" },
    { name: "GKS", value: 3, color: "#06b6d4" },
    { name: "PETRONAS", value: 2, color: "#8b5cf6" },
    { name: "YAYASAN TELEKOM MALAYSIA", value: 2, color: "#ec4899" },
    { name: "SKKU (STEM)", value: 1, color: "#6366f1" }
  ]

  const newsArticles = [
    {
      id: 1,
      title: 'PPMK Hackathon: Winners Announced!',
      excerpt: 'Huge congratulations to Team Hacks2Holiday, the champions of this year’s PPMK Hackathon! Their innovative project stood out among fierce competition and earned them a well-deserved victory.',
      date: '2025-08-25', // Date from Instagram post
      image: 'https://kidteachkid.org/wp-content/uploads/2020/08/Hackathon-contest-flier-reduced-cleaned-09-2022-scaled.jpg',
      link: 'https://www.instagram.com/p/DMrONzhTVxP/'
    },
    {
      id: 2,
      title: 'Winner of July IGERSPPMK',
      excerpt: 'Congrats to @muhdfaiz_24 for wining the last month JULY IGERSPPMK by showcasing his/her amazing night rain photography. ',
      date: '2025-08-13', // Date from Instagram post
      image: 'https://scontent.fkul8-5.fna.fbcdn.net/v/t51.82787-15/526607064_18535513549015056_9201979534375188313_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=f4yGoJLyf-0Q7kNvwHkjBxD&_nc_oc=AdnlUDN3WOY-SjqsbXYqRxW06iZMlvxkaJ9SQJPsxmo70ZEyIQDTtFLJWY6fvDsfSWfMG084jJsCq2OUAz_nhgLC&_nc_zt=23&_nc_ht=scontent.fkul8-5.fna&_nc_gid=zT06NZ5xz6wUoxaQI699aw&oh=00_AfWfzdQUUWI21RCWjBa3FeJvRHslEVFfcJy52RrGGJ3FCg&oe=68AEC173',
      link: 'https://www.instagram.com/p/DMzCIxST7Et/'
    },
    {
      id: 3,
      title: 'Happy 58th ASEAN Day',
      excerpt: 'Towards an Inclusive and Sustainable ASEAN Future, reflects and reinforces Malaysia’s Chairmanship theme of Inclusivity and Sustainability.',
      date: '2025-08-08', // Date from Instagram post
      image: 'https://www.kln.gov.my/documents/34410/10017239/ASEAN+DAY+58.jpeg/24927ae8-661d-4256-a91b-4e0b4efde0f7?t=1754649389064',
      link: 'https://www.instagram.com/p/DNFBg5nuOmT/?utm_source=ig_web_copy_link&igsh=MXRhenR0eHluZTU2cA=='
    },
    {
      id: 4,
      title: 'MAD SPONSOR REVEAL : COSRX',
      excerpt: 'Ready to bounce back more glowier than ever? For this year’s MAD we’re embracing eternal beauty with a ',
      date: '2025-07-14', // Date from Instagram post
      image: 'https://scontent.fkul8-3.fna.fbcdn.net/v/t51.82787-15/518625568_18532171003015056_5133324382678549627_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=kWUrjDLjLAoQ7kNvwHfgmE5&_nc_oc=AdkjRpHDFz-zlRH1mRcgxac5KXyOWcUphCkN6n1wyf-AmH9bWKCv4cdKXOrZQM9SLfNUDhKOfZBhIFQAylq44zSp&_nc_zt=23&_nc_ht=scontent.fkul8-3.fna&_nc_gid=VS7YbPWqoe_Cz1s5NcWdug&oh=00_AfXvhDlEHLkz43Ov23RTffHlPce5PUMsYeSCQoHHDJ95CQ&oe=68AEB51D',
      link: 'https://www.instagram.com/p/DMEs8fcTAZ5/?utm_source=ig_web_copy_link&igsh=MTRpODV1aXFoeXAyZg=='
    },
     
  ];


  const events = [
  {
    id: 1,
    title: 'Hack PPMK25',
    description: 'Ever wanted to join a hackathon but didn’t know where to start? Join us for two week beginner friendly hackathon organized by PPMK in collaboration with ChatAndBuild',
    date: '2025-07-29',
    time: '18:00',
    location: 'Online',
    attendees: 90,
    category: 'Academic',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=200&fit=crop',
    recurring: false
  },
  {
    id: 2,
    title: 'Career Fair SIKMA',
    description: 'SIKMA (Simposium Kerjaya Mahasiswa) merupakan program tahunan PPMK yang memberi peluang kepada pelajar tahun akhir',
    date: '2024-10-20',
    time: '10:00',
    location: 'COEX Convention Center',
    attendees: 200,
    category: 'Professional',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=200&fit=crop',
    recurring: true
  },
  {
    id: 3,
    title: 'ASEAN Symposium',
    description: 'PPMK, in collaboration with the Embassy of Malaysia, ASEAN-Korea Centre (AKC), and ASEAN Youth Network in Korea (AYNK), proudly organized ✨️ the first-ever student-led ASEAN SEAmposium 2025 ✨️',
    date: '2025-05-11',
    time: '08:00',
    location: 'Mugung Hall, SeoulTech',
    attendees: 160,
    category: 'Academic',
    image: 'https://asean.org/wp-content/uploads/2025/01/Web-Banner-2025.jpg?w=200&h=200&fit=crop',
    recurring: false
  }
]

  return (
    <div className="min-h-screen bg-gray-50 ">
      {/* Hero Section with Background */}
      <section className=" relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://media.licdn.com/dms/image/v2/D5622AQEgYKIN9sUEQA/feedshare-shrink_2048_1536/feedshare-shrink_2048_1536/0/1731671105016?e=1758153600&v=beta&t=6ku9nIk5wsSFapl7VxMC3fItHZYbDjO1sfDTv6z-R_k)'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-ppmk-dark/60 via-ppmk-dark/40 to-ppmk-dark/60"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          {/* Welcome Message */}
          <div className="backdrop-blur-md bg-white/10 rounded-2xl p-8 sm:p-12 border border-white/20 shadow-2xl mb-8 animate-float">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              Welcome to <span className="text-ppmk-accent">PPMK</span>
            </h1>
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Persatuan Pelajar Malaysia Korea - Connecting Malaysian students across 
              Korean universities, building bridges, sharing experiences, and creating lasting 
              professional networks.
            </p>
          </div>

          {/* Social Media */}
          <div className="flex justify-center space-x-6">
            {/* Social Media Links */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-6">
            <a href="https://www.instagram.com/ppmkofficial" target="_blank" rel="noopener noreferrer">
            <SocialCard 
              icon={Instagram}
              handle="@ppmkofficial"
              gradient="from-pink-500 to-purple-600"
            /> </a>
            <a href="https://www.facebook.com/ppmkofficial/" target="_blank" rel="noopener noreferrer">
            <SocialCard 
              icon={Facebook}
              handle="PPMK"
              gradient="from-blue-500 to-blue-700"
            /></a>
          </div>
          </div>

          {/* Data list */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Active Members */}
              <div className="backdrop-blur-md bg-white/20 rounded-3xl border border-white/30 shadow-xl p-6 hover:bg-white/30 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/50 rounded-2xl border border-white/20">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-white mb-1">Active Members</h3>
                    <div className="text-2xl font-bold text-accent-300 mb-1">531</div>
                    <p className="text-xs text-secondary-300">PPMK-wide engagement across South Korea</p>
                  </div>
                </div>
              </div>

              {/* Universities */}
              <div className="backdrop-blur-md bg-white/20 rounded-3xl border border-white/30 shadow-xl p-6 hover:bg-white/30 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/50 rounded-2xl border border-white/20">
                    <MapPin className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-white mb-1">Universities</h3>
                    <div className="text-2xl font-bold text-accent-300 mb-1">21</div>
                    <p className="text-xs text-secondary-300">Institutions hosting Malaysian students</p>
                  </div>
                </div>
              </div>

              {/* Events Organized */}
              <div className="backdrop-blur-md bg-white/20 rounded-3xl border border-white/30 shadow-xl p-6 hover:bg-white/30 transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-white/50 rounded-2xl border border-white/20">
                    <CalendarCheck className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-medium text-white mb-1">Events Organized</h3>
                    <div className="text-2xl font-bold text-accent-300 mb-1">50+</div>
                    <p className="text-xs text-secondary-300">Organized across years of PPMK history</p>                  
                    </div>
                </div>
              </div>
            </div>
        </div>
      </section>

  <section className="py-16 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto">
    {/* Map + University List */}
    <div className="backdrop-blur-md bg-primary-800 rounded-3xl p-8 border border-white/20 shadow-2xl">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Map Section */}
        <div className="lg:col-span-2">
            <UniversityMap
              universities={universityData}
              selectedUniversity={selectedUniversity}
              onUniversitySelect={setSelectedUniversity}
            />
        </div>

        {/* University List + Popup */}
        <div className="lg:col-span-1 space-y-6">
          {/* Selected University Details */}
          {selectedUniversity && (
            <div className="backdrop-blur-md bg-white/70 rounded-3xl border border-white/30 shadow-xl p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {selectedUniversity.name}
                </h3>
                <button
                  onClick={() => setSelectedUniversity(null)}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  ✕
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-white/20 rounded-xl border border-white/20">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {selectedUniversity.students}
                </div>
                <div className="text-sm text-gray-600">Malaysian Students</div>
              </div>
              <div className="text-center p-4 bg-white/20 rounded-xl border border-white/20">
                <div className="text-lg font-semibold text-gray-800 mb-2">
                  {selectedUniversity.location}
                </div>
                <div className="text-sm text-gray-600">Location</div>
              </div>
              <div className="text-center p-4 bg-white/20 rounded-xl border border-white/20">
                <div className="text-lg font-semibold text-gray-800 mb-2">
                  #{universityData
                    .sort((a, b) => b.students - a.students)
                    .findIndex(u => u.name === selectedUniversity.name) + 1}
                </div>
                <div className="text-sm text-gray-600">Ranking by Students</div>
              </div>
            </div>
            </div>
          )}

          {/* University List */}
          <div className="backdrop-blur-md bg-white/90 rounded-3xl border border-white/30 shadow-xl p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              Universities & Student Count
            </h3>
            <div className="space-y-3 max-h-96 overflow-y-auto custom-scrollbar">
              {universityData
                .sort((a, b) => b.students - a.students)
                .map((university) => (
                  <div
                    key={university.name}
                    className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                      selectedUniversity?.name === university.name
                        ? 'bg-blue-500/20 border-blue-400/50 shadow-lg'
                        : 'bg-white/30 border-white/20 hover:bg-white/40 hover:border-white/30'
                    }`}
                    onClick={() => setSelectedUniversity(university)}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-800 text-sm leading-tight mb-1">
                          {university.name}
                        </h4>
                        <p className="text-xs text-gray-600">{university.location}</p>
                      </div>
                      <div className="text-right ml-3">
                        <div className="text-lg font-bold text-ppmk-dark">
                          {university.students}
                        </div>
                        <div className="text-xs text-gray-500">students</div>
                      </div>
                    </div>
                    <div className="mt-3">
                      <div className="w-full bg-white/30 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-ppmk-dark to-cyan-500 h-2 rounded-full transition-all duration-500"
                          style={{
                            width: `${(university.students / topUniversity.students) * 100}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Main Content */}
      <div className="pt-8 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Batch War Section */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6 h-full border border-ppmk-dark/10">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-ppmk-accent rounded-lg flex items-center justify-center">
                    <Trophy className="w-6 h-6 text-ppmk-dark" />
                  </div>
                  <h2 className="text-2xl font-bold text-ppmk-dark">Batch War</h2>
                </div>
                
                <div className="space-y-6">
                  {batchWarData.map((batch, index) => (
                    <div key={batch.batch} className="relative">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <span className="font-semibold text-ppmk-dark">Batch {batch.batch}</span>
                          {index === 0 && <Star className="w-4 h-4 text-ppmk-accent fill-current" />}
                        </div>
                        <span className="text-sm text-ppmk-dark/70 font-medium">{batch.students} students</span>
                      </div>
                      <div className="w-full bg-ppmk-light rounded-full h-3">
                        <div 
                          className={`h-3 rounded-full ${batch.color} transition-all duration-1000 ease-out`}
                          style={{ width: `${(batch.students / 150) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-ppmk-accent/30 rounded-lg border border-ppmk-dark/20">
                  <div className="flex items-start space-x-2">
                    <TrendingUp className="w-5 h-5 text-ppmk-dark mt-0.5" />
                    <div>
                      <p className="text-sm text-ppmk-dark font-medium">
                        Batch 21 Leading Performance
                      </p>
                      <p className="text-xs text-ppmk-dark/70 mt-1">
                        Highest participation in academic and sport activities
                      </p>
                    </div>
                  </div>
                </div>
                  {/* SPONSORSHIP BREAKDOWN SECTION (NEW) */}
                  {/* Scholarship Distribution Pie Chart */}
                <div className="mt-2">
                  <PieChart 
                    data={scholarshipData}
                    title="Scholarship Distribution"
                  />
                </div>
              </div>
            </div>

           {/* Latest News Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6 h-full border border-ppmk-dark/10">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-10 h-10 bg-ppmk-dark rounded-lg flex items-center justify-center">
                  <Newspaper className="w-6 h-6 text-ppmk-accent" />
                </div>
                <h2 className="text-2xl font-bold text-ppmk-dark">Latest News</h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-6">
                {newsArticles.map((article) => (
                  <div key={article.id} className="border border-ppmk-dark/10 rounded-lg overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col mb-8">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4 flex flex-col flex-grow">
                      <h3 className="font-bold text-ppmk-dark mb-2 line-clamp-2">{article.title}</h3>
                      <p className="text-ppmk-dark/70 text-sm mb-3 line-clamp-2 flex-grow">{article.excerpt}</p>
                      <div className="flex items-center justify-between mt-auto">
                        <span className="text-xs text-ppmk-dark/50">{new Date(article.date).toLocaleDateString()}</span>
                        {/* This is now an anchor tag linking to the post */}
                        <a 
                          href={article.link}
                          target="_blank" // Opens in a new tab
                          rel="noopener noreferrer" // Security best practice for external links
                          className="text-ppmk-dark text-sm font-medium hover:text-ppmk-dark/80 bg-ppmk-accent/30 px-2 py-1 rounded transition-colors"
                        >
                          Read More →
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            {/* Events */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-ppmk-dark/10">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-ppmk-dark rounded-lg flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-ppmk-dark">Events</h2>
                </div>
              <Link 
                to="/events" 
                className="text-ppmk-dark hover:text-accent-500 text-sm font-medium transition-colors"
              >
                See More →
              </Link>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {events.map((event) => (
                  <div key={event.id} className="bg-white rounded-xl border border-ppmk-dark/10 overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    {/* Event Image */}
                    <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200">
                      <img 
                        src={event.image || 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=200&fit=crop'} 
                        alt={event.title}
                        className="w-full h-full object-cover"
                      />
                      {/* Category Badge */}
                      <div className="absolute top-3 left-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          event.category === 'Cultural' ? 'bg-purple-100 text-purple-800' :
                          event.category === 'Professional' ? 'bg-green-100 text-green-800' :
                          event.category === 'Academic' ? 'bg-blue-100 text-blue-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {event.category || 'General'}
                        </span>
                      </div>
                      {/* Recurring Badge */}
                      {event.recurring && (
                        <div className="absolute top-3 right-3">
                          <span className="bg-black/70 text-white px-2 py-1 rounded text-xs font-medium">
                            Recurring
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Event Content */}
                    <div className="p-4">
                      <h3 className="font-bold text-ppmk-dark mb-2 text-lg leading-tight">
                        {event.title}
                      </h3>
                      <p className="text-ppmk-dark/70 text-sm mb-4 line-clamp-2">
                        {event.description}
                      </p>

                      {/* Event Details */}
                      <div className="space-y-2 text-sm text-ppmk-dark/70 mb-4">
                        <div className="flex items-center space-x-2">
                          <Calendar className="w-4 h-4" />
                          <span>{new Date(event.date).toLocaleDateString()} at {event.time || '18:00'}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Users className="w-4 h-4" />
                          <span>{event.attendees} expected attendees</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
