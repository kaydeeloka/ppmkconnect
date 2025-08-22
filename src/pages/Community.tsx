import React, { useState } from 'react'
import { Search, Instagram, ChevronLeft, ChevronRight, Filter, Users, Calendar, MapPin, ExternalLink, Building, GraduationCap } from 'lucide-react'
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"

const Community = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [filterType, setFilterType] = useState('all')


  // Stats data
  const stats = [
    {
      icon: Users,
      label: 'Active Clubs',
      value: '7',
      description: 'Registered student organizations',
      gradient: 'from-blue-900 to-cyan-700'
    },
    {
      icon: Building,
      label: 'Total Members',
      value: '250',
      description: 'Malaysian students connected',
      gradient: 'from-cyan-700 to-teal-600'
    },
    {
      icon: Calendar,
      label: 'Years Established',
      value: '10',
      description: 'Years of building connections',
      gradient: 'from-teal-600 to-blue-800'
    }
  ]

  // Clubs data
  const clubs = [
    {
      id: 1,
      name: 'Ikatan Muslimin Malaysia Korea (ISMA)',
      image: 'data:image/png;base64,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',
      description: 'ISMA Korea is a Malaysian Muslim association in South Korea that brings together students and professionals to strengthen brotherhood, nurture Islamic values, and build a knowledgeable, holistic community.',
      members: 345,
      category: 'spiritual',
      instagram: 'https://www.instagram.com/ismakorea/'
    },
    {
      id: 2,
      name: 'Generasi Mahasiswa Islam Korea (GMIK)',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJAjWrhEqnfQevODv2nLNYwPZ1ZnAhSYVoQg&s',
      description: 'GMIK is a vibrant and inclusive student-led Muslim organization in South Korea that unites Malaysian and Islamic students through fellowship, community engagement, and shared spiritual values.',
      members: 238,
      category: 'spiritual',
      instagram: 'https://www.instagram.com/gmikofficial/'
    },
    {
      id: 3,
      name: 'IKRAM Muda Antarabangsa Korea (IMAN)',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm5M_fTFelWayF_R1VOAKZ46R5aD3LyMQ4fg&s',
      description: 'IMAN Korea is the overseas branch of IKRAM’s youth initiative, serving as a supportive community for Malaysian youth including students and young professionals based in South Korea.',
      members: 250,
      category: 'spiritual',
      instgram: 'https://www.instagram.com/imankoreaofficial/'
    },
    {
      id: 4,
      name: 'Malaysian Students Dance Crew (MSDC)',
      image: 'https://www.shutterstock.com/image-vector/couple-dancing-night-club-party-600nw-2502128457.jpg',
      description: 'Malaysian student-led dance group in South Korea that promotes cultural exchange and community through dynamic performances blending modern and traditional Malaysian dance.',
      members: 200,
      category: 'cultural',
      instagram: 'https://www.instagram.com/official.msdc/'
    },
    {
      id: 5,
      name: 'Malaysian Students Football Club (MSFC)',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWYf5IMmgVS0OFoTZfrZwDjIsf3orTinmOzw&s',
      description: 'Malaysian student-run football team based in South Korea, uniting Malaysian students from various universities to engage in friendly matches and competitive leagues.',
      members: 100,
      category: 'sports',
      instagram: 'https://www.instagram.com/msfc_korea/'
    },
    {
      id: 6,
      name: 'Malaysian Students Recreational Club (MSRC)',
      image: 'https://static.vecteezy.com/system/resources/previews/035/333/389/non_2x/outdoor-activity-illustration-with-relaxing-on-a-picnic-leisure-activities-at-weekend-and-active-recreation-in-flat-cartoon-background-design-vector.jpg',
      description: 'Malaysian student-led community in South Korea that embraces an active and vibrant lifestyle. Their motto, “We run, we hike, we vibe,” reflects their commitment to physical fitness, outdoor adventures, and fostering a positive, inclusive atmosphere.',
      members: 65,
      category: 'sports',
      instagram: 'https://www.instagram.com/msrc.kr/'
    },
    {
      id: 7,
      name: 'Malaysia Korea Badminton Association (MKBA)',
      image: 'https://www.racquetpoint.com/cdn/shop/articles/badminton-the-ultimate-guide-to-the-racquet-sport-460186.jpg?v=1741601376&width=2048',
      description: 'A dynamic sports organization that brings together Malaysian students and badminton enthusiasts in South Korea. Dedicated to promoting the sport of badminton, MKBA organizes regular training sessions, friendly matches among its members.',
      members: 60,
      category: 'sports',
      instagram: 'https://www.instagram.com/mkba.kr/'
    }
  ]

  // Universities data
  const universities = [
    {
      id: 1,
      name: 'Ajou University',
      image: 'https://i.namu.wiki/i/oc88hdko9WYXsVw5LgQA_MRJr0pVju50oGCqc-Lq2PfKyBr9dDr00Ft52pwvGJsAdvsMQWP8F0gKgC6BtkYZp7Yb_gpAcgM70IAuBW40PcD6C4qarh5A7eRNPSXn41w-Mw5CTLy9MXNU1msh851AbQ.webp',
      description: 'Ajou University is a dynamic, research-driven university with strengths in engineering, medicine, and international programs, offering students a balance of innovation, global exposure, and professional opportunities—especially in Korea’s tech and business hubs.',    
      location: 'Suwon, Gyeonggi',
      malaysianStudents: 1,
      established: '1973',
      programs: ['Engineering', 'Medical Science', 'Business', 'IT and Computing', 'Biotechnology(BT)', 'Nanotechnology(NT)', 'International Studies'],
      ranking: '#16 in South Korea ',
      communityLink: "https://docs.google.com/forms/d/e/1FAIpQLSeUEpx4JiUr-LtlL14Gjahl7mQl4qqplnQoQPuf-_zBfmVpmg/viewform"
    },
    {
      id: 2,
      name: 'Dongyang Mirae University',
      image: 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nr6Uo5nDwyahMWzQgp6_3BIKbkYi8rJIA1kikQmAleS7aqnSnbPXws-oD_5zcqOfqiKvPMW6YCTToFzA6Gbf10zWgR3wT-ivf9Yt_3AATY-wUl3gVcmKjK8f_FdtmXDTMMKf57h=s1360-w1360-h1020-rw',
      description: 'The institution offers a broad range of programs from engineering and robotics to computer science, business, and creative technologies designed to prepare students for industry success.',
      location: 'Guro-gu, Seoul',
      malaysianStudents: 18,
      established: '1965',
      programs: ['Mechanical Engineering', 'Electrical & Electronic Communication Engineering', 'Computer Engeneering', 'Life & Enviromental Engineering', 'Business'],
      ranking:'',
      communityLink: "https://docs.google.com/forms/d/e/1FAIpQLSeUEpx4JiUr-LtlL14Gjahl7mQl4qqplnQoQPuf-_zBfmVpmg/viewform"
    },
    {
      id: 3,
      name: 'Ewha Woman University',
      image: 'https://cascadingkorea.wordpress.com/wp-content/uploads/2019/03/ewh_3363-1-1.jpg',
      description: 'Established in 1886 by American missionary Mary F. Scranton, Ewha was the first institution dedicated to women higher education in Asia. Located in Seodaemun-gu, Seoul, it is one of South Korea most prestigious universities and a globally recognized leader in women education',
      location: 'Seodaemun, Seoul',
      malaysianStudents: 7,
      established: '1886',
      programs: ['Engineering', 'Business', 'Liberal Arts', 'Social Sciences', 'Natural Sciences', 'Medicine'],
      ranking: '#9 in South Korea',
      communityLink: "https://docs.google.com/forms/d/e/1FAIpQLSeUEpx4JiUr-LtlL14Gjahl7mQl4qqplnQoQPuf-_zBfmVpmg/viewform"
    },
    {
      id: 4,
      name: 'Gachon University',
      image: 'https://www.gachon.ac.kr/CrossEditor/binary/images/000113/C_%EA%B0%80%EC%B2%9C%EB%8C%80%ED%95%99%EA%B5%90_%EC%A0%84%EA%B2%BD%EC%82%AC%EC%A7%84_240524.jpg',
      description: 'Global university with strong ties to Malaysia, offering diverse programs and extensive student support services.',
      location: 'Seongnam, Gyeonggi',
      malaysianStudents: 1,
      established: '1939',
      programs: ['Medicine', 'Engineering', 'Business', 'BioNano Technology'],
      ranking: '',
      communityLink: "https://docs.google.com/forms/d/e/1FAIpQLSeUEpx4JiUr-LtlL14Gjahl7mQl4qqplnQoQPuf-_zBfmVpmg/viewform"
    },
    {
      id: 5,
      name: 'Hanyang University (Erica)',
      image: 'https://i.namu.wiki/i/I4Soxv8DJYvS7H0HhqBxHzef6o9lfQNsKZ30dJtZqqXy6Cb0yO0x9cd1Q6SfAr0Ztd3GAtH3g7WbFNEnd00CBg.webp',
      description: 'A leading campus in Ansan, South Korea, known for practical education in engineering, business, computing, and pharmacy.',
      location: 'Ansan, Seoul',
      malaysianStudents: 19,
      established: '1979',
      programs: ['Computing', 'Engineering', 'Pharmacy', 'Business'],
      ranking: '',
      communityLink: "https://docs.google.com/forms/d/e/1FAIpQLSeUEpx4JiUr-LtlL14Gjahl7mQl4qqplnQoQPuf-_zBfmVpmg/viewform"
      
    },
    {
      id: 6,
      name: 'Hanyang University',
      image: 'https://www.hanyang.ac.kr/image/journal/article?img_id=13383129&t=1749688674017',
      description: 'A prestigious private research university in Seoul, South Korea, known for its strong engineering, applied sciences, and entrepreneurial programs.',
      location: 'Seongdong, Seoul',
      malaysianStudents: 65,
      established: '1939',
      programs: ['Engineering Sciences', 'Dssign', 'Business & Economics', 'Computing'],
      ranking: '#6 in South Korea',
      communityLink: "https://docs.google.com/forms/d/e/1FAIpQLSeUEpx4JiUr-LtlL14Gjahl7mQl4qqplnQoQPuf-_zBfmVpmg/viewform"
    },
    {
      id: 7,
      name: 'Inha University',
      image: 'https://duhocsunny.edu.vn/wp-content/uploads/2020/05/inha-2.jpg',
      description: 'A private research institution in Incheon, South Korea, founded in 1954 with a strong emphasis on engineering and applied sciences.',
      location: 'Incheon, Korea',
      malaysianStudents: 11,
      established: '1954',
      programs: ['Egineering', 'Business Administration', 'Natural Sciences', 'Medicine'],
      ranking: '#14 in South Korea',
      communityLink: "https://docs.google.com/forms/d/e/1FAIpQLSeUEpx4JiUr-LtlL14Gjahl7mQl4qqplnQoQPuf-_zBfmVpmg/viewform"
    },
    {
      id: 8,
      name: 'Kangwon National University',
      image: 'https://wwwk.kangwon.ac.kr/DATA/bbs/342/202304071538215706ev.jpg',
      description: 'A comprehensive public university in Chuncheon, South Korea, established in 1947, recognized for its strong programs in agriculture, veterinary medicine, engineering, and business administration.',
      location: 'Chuncheon, Gangwon',
      malaysianStudents: 1,
      established: '1947',
      programs: ['BUsiness Administration', 'Engineering', 'Agriculture and Life Sciences', 'Veterinary Medicine'],
      ranking: '',
      communityLink: "https://docs.google.com/forms/d/e/1FAIpQLSeUEpx4JiUr-LtlL14Gjahl7mQl4qqplnQoQPuf-_zBfmVpmg/viewform"
    },
    {
      id: 9,
      name: 'Konkuk University',
      image: 'https://d2kihw5e8drjh5.cloudfront.net/eyJidWNrZXQiOiJ1dGEtaW1hZ2VzIiwia2V5IjoicGxhY2VfaW1nLzAwYzNkZDI5YTk5YzQxMGFiNmFkZDRkNGM5YzI3NmRiIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjo2NDAsImhlaWdodCI6NjQwLCJmaXQiOiJpbnNpZGUifSwicm90YXRlIjpudWxsLCJ0b0Zvcm1hdCI6ICJ3ZWJwIn19',
      description: 'A comprehensive private institution in Seoul, South Korea, founded in 1946, offering a diverse range of undergraduate and graduate programs across various disciplines.',
      location: 'Seoul, Korea',
      malaysianStudents: 26,
      established: '1946',
      programs: ['Real Estate', 'Business Admin', 'Veterinary Medicine', 'Aerospace Engineering'],
      ranking: '#17 in South Korea',
      communityLink: "https://docs.google.com/forms/d/e/1FAIpQLSeUEpx4JiUr-LtlL14Gjahl7mQl4qqplnQoQPuf-_zBfmVpmg/viewform"
    },
    {
      id: 10,
      name: 'Korea University',
      image: 'https://www.kth.se/polopoly_fs/1.1361374.1728043263!/image/koreauniversity.png',
      description: 'A prestigious private institution in Seoul, South Korea, established in 1905. It is renowned for its rigorous academic programs and vibrant campus life.',
      location: 'Anam, Seoul',
      malaysianStudents: 156,
      established: '1905',
      programs: ['Business Admin', 'Law', 'Computer Science', 'International Studies'],
      ranking: '#5 in South Korea',
      communityLink: "https://docs.google.com/forms/d/e/1FAIpQLSeUEpx4JiUr-LtlL14Gjahl7mQl4qqplnQoQPuf-_zBfmVpmg/viewform"
    },
    {
      id: 11,
      name: 'Kwangwoon University',
      image: 'https://i.namu.wiki/i/jtQY_huxsn1H8wmyKHnWX8wmnZwm3SzsFEcsepBIH2FXLrIOx3lrrvDPuO3BvZFx7lmtG6OlR_q1-6nQ_Tztp3st4RKZwSz_vzrAaxvMbx5Qi4BOOn-cXtYAOvjrkOZZqCx6mbNhkR94jxiN6MYsHw.webp',
      description: 'A private research university in Seoul, South Korea, established in 1934, renowned for its strong emphasis on engineering and IT disciplines.',
      location: 'Nowon, Seoul',
      malaysianStudents: 1,
      established: '1934',
      programs: ['Electronics and Information Engineering', 'Computer Engineering', 'Business Admin', 'Law'],
      ranking: '',
      communityLink: "https://docs.google.com/forms/d/e/1FAIpQLSeUEpx4JiUr-LtlL14Gjahl7mQl4qqplnQoQPuf-_zBfmVpmg/viewform"
    },
    {
      id: 12,
      name: 'Kyunghee University (Suwon)',
      image: 'https://duhocicc.edu.vn/wp-content/uploads/2024/04/dai-hoc-kyunghee5-e1713939709947-780x468.jpg',
      description: 'A prestigious private institution in South Korea, renowned for its commitment to academic excellence, global engagement, and a strong emphasis on peace and cultural understanding.',
      location: 'Suwon, Gyeonggi',
      malaysianStudents: 17,
      established: '1949',
      programs: ['Korean Medicine', 'International Studies', 'Hospitality and Leisure Management', 'Business Admin'],
      ranking: '#10 in South Korea',
      communityLink: "https://docs.google.com/forms/d/e/1FAIpQLSeUEpx4JiUr-LtlL14Gjahl7mQl4qqplnQoQPuf-_zBfmVpmg/viewform"
    },
    {
      id: 13,
      name: 'Kyunghee University (Seoul)',
      image: 'https://cf.creatrip.com/original/blog/4854/%E6%85%B6%E7%86%99%E5%A4%A7%E5%AD%B8%20(7)0.jpg?d=1200&q=80&f=webp',
      description: 'A prestigious private institution in Seoul, South Korea, founded in 1949 with the mission of "Creating a Civilized World."',
      location: 'Dongdaemun, Seoul',
      malaysianStudents: 1,
      established: '1949',
      programs: ['Korean Medicine', 'International Studies', 'Hospitality and Leisure Management', 'Business Admin'],
      ranking: '',
      communityLink: "https://docs.google.com/forms/d/e/1FAIpQLSeUEpx4JiUr-LtlL14Gjahl7mQl4qqplnQoQPuf-_zBfmVpmg/viewform"
    },
    {
      id: 14,
      name: 'Language Education Institute',
      image: 'https://lei.snu.ac.kr/img/mobile/kr/lei/content/main_img2.jpg',
      description: 'A premier institution in South Korea, offering comprehensive Korean language programs to international students and foreigners residing in Korea.',
      location: 'Gwanak, Seoul',
      malaysianStudents: 43,
      established: '1969',
      programs: ['Regular Program', 'Evening Class', '3-Week Intensive Program', '13-Week Program'],
      ranking: '',
      communityLink: "https://docs.google.com/forms/d/e/1FAIpQLSeUEpx4JiUr-LtlL14Gjahl7mQl4qqplnQoQPuf-_zBfmVpmg/viewform"
    },
    {
      id: 15,
      name: 'Sejong University',
      image: 'https://koreajoongangdaily.joins.com/data/photo/2023/03/28/cfcbda6c-517c-4306-8872-0b7f770f58e6.jpg',
      description: 'A prominent private institution in Seoul, South Korea, established in 1940. Named after King Sejong the Great, it is renowned for its commitment to academic excellence and global engagement.',
      location: 'Gwangjin, Seoul',
      malaysianStudents: 46,
      established: '1940',
      programs: ['Hotel Management', 'Computer Science and Engineering', 'Hospitality', 'Film Art'],
      ranking: '#15 in South Korea',
      communityLink: "https://docs.google.com/forms/d/e/1FAIpQLSeUEpx4JiUr-LtlL14Gjahl7mQl4qqplnQoQPuf-_zBfmVpmg/viewform"
    },
    {
      id: 16,
      name: 'Seoul National University',
      image: 'https://oia.snu.ac.kr/sites/default/files/inline-images/SNU_002_ed1.jpg',
      description: 'South Korea’s premier public research university, founded in 1946 by merging multiple institutions to modernize higher education. Often regarded as the "Harvard of Korea," it is the most prestigious university in the country.',
      location: 'Gwanak, Seoul',
      malaysianStudents: 7,
      established: '1946',
      programs: ['Engineering', 'Business Admin', 'Medicine', 'Humanities'],
      ranking: '#1 in South Korea',
      communityLink: "https://docs.google.com/forms/d/e/1FAIpQLSeUEpx4JiUr-LtlL14Gjahl7mQl4qqplnQoQPuf-_zBfmVpmg/viewform"
    },
    {
      id: 17,
      name: 'Sogang University',
      image: 'https://studyabroad.temple.edu/sites/studyabroad/files/styles/tu_image_style_open_graph/public/media/image/Sogang-Main%20Gate.jpg?h=350cc808&itok=8-NPPzEd',
      description: 'A prestigious private research university located in Seoul, South Korea. Established in 1960 by the Society of Jesus, it is renowned for its strong liberal arts education and commitment to academic excellence.',
      location: 'Mapo, Seoul',
      malaysianStudents: 1,
      established: '1960',
      programs: ['Business Admin', 'Economics', 'Communications', 'Computer Science and Engineering'],
      ranking: '#19 in South Korea',
      communityLink: "https://docs.google.com/forms/d/e/1FAIpQLSeUEpx4JiUr-LtlL14Gjahl7mQl4qqplnQoQPuf-_zBfmVpmg/viewform"
    },
    {
      id: 18,
      name: 'SEOULTECH',
      image: 'https://koreajoongangdaily.joins.com/data/photo/2023/03/04/6370fba3-314e-4201-aff3-f9ae9655f40c.jpg',
      description: 'A leading public research university in Seoul, South Korea, established in 1910. Renowned for its focus on engineering, technology, and applied sciences, it offers a comprehensive range of programs designed to foster innovation and practical skills.',
      location: 'Nowon, Seoul',
      malaysianStudents: 9,
      established: '1910',
      programs: ['Chemical and Biomolecular Engineering', 'Environmental Engineering', 'Food Science and Tech', 'Optometry'],
      ranking: '',
      communityLink: "https://docs.google.com/forms/d/e/1FAIpQLSeUEpx4JiUr-LtlL14Gjahl7mQl4qqplnQoQPuf-_zBfmVpmg/viewform"
    },
    {
      id: 19,
      name: 'Sungkyunkwan University',
      image: 'https://hakbu.skku.edu/_res/editor_image/2021/11/RsFPrHnAvXThNakQjQmk0.PNG',
      description: 'This campus focuses on engineering, technology, and applied sciences. SKKU is renowned for its strong academic programs and global partnerships.',
      location: 'Suwon, Gyeonggi',
      malaysianStudents: 70,
      established: '1978',
      programs: ['Electronic and Electrical', 'Semiconductor Systems', 'Energy System', 'Photovoltaic System'],
      ranking: '#3 in South Korea',
      communityLink: "https://docs.google.com/forms/d/e/1FAIpQLSeUEpx4JiUr-LtlL14Gjahl7mQl4qqplnQoQPuf-_zBfmVpmg/viewform"
    },
    {
      id: 20,
      name: 'Yonsei University',
      image: 'https://brocku.ca/international/learning/wp-content/uploads/sites/266/yonsei-main.jpg?x63201',
      description: 'a prestigious private research university in Seoul, South Korea, founded in 1885. It is one of the country\'s oldest and most respected institutions, known for its rigorous academic programs and vibrant campus life.',
      location: 'Sinchon, Seoul',
      malaysianStudents: 19,
      established: '1885',
      programs: ['Medicine', 'Chemical and Biomolecular', 'Business Admin', 'International Studies'],
      ranking: '#4 in South Korea',
      communityLink: "https://docs.google.com/forms/d/e/1FAIpQLSeUEpx4JiUr-LtlL14Gjahl7mQl4qqplnQoQPuf-_zBfmVpmg/viewform"
    },
    {
      id: 21,
      name: 'Yonsei University (International Campus)',
      image: 'https://i.namu.wiki/i/xyIvAo1RjZoOSVDEyoOPzJvCs5Ixk4iBAXu_Q59-S36s-Z9FcOvQJR3Y6FMfJV2-dq6wgqJQTxQ1edqWuW9ItB4aLCYgCgCNDOGmGStFKGqQ2xoT7CKgnMskhUFG0GIieNvBkov2rH905Xq6OVMYWw.webp',
      description: 'Established in March 2010 to commemorate the university\'s 125th anniversary, serves as a hub for global education and research.',
      location: 'Songdo, Incheon',
      malaysianStudents: 12,
      established: '2010',
      programs: ['Underwood International College', 'Global Business Administration ', 'Life Science and Biotechnology', 'Creative Technology Management'],
      ranking: '',
      communityLink: "https://docs.google.com/forms/d/e/1FAIpQLSeUEpx4JiUr-LtlL14Gjahl7mQl4qqplnQoQPuf-_zBfmVpmg/viewform"
    }


  ]

  // Filter functions
  const filteredClubs = clubs.filter(club => {
    const matchesSearch = club.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         club.description.toLowerCase().includes(searchTerm.toLowerCase()) 
                         
    
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

        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1 space-y-16">
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
          <section className="bg-white/50 backdrop-blur-sm rounded-2xl border border-secondary-100 p-5 shadow-xl">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Search Bar */}
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-primary-600 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search clubs, universities, or communities..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-2 bg-secondary border-1 border-secondary-10 rounded-2xl text-primary-700 placeholder-primary-700 focus:outline-none focus:ring-2 focus:ring-secondary-1500 focus:border-secondary-200 transition-all duration-100 text-lg font-small shadow-inner"
                />
              </div>

              {/* Filter Dropdown */}
              <div className="relative">
                <Filter className="absolute left-5 top-1/2 transform -translate-y-1/2 text-primary-600 w-4 h-4" />
                <select
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="pl-10 pr-2 py-2 bg-secondary-10 border-1 border-secondary-100 rounded-3xl text-primary-600 focus:outline-none focus:ring-2 focus:ring-secondary-150 focus:border-secondary-200 transition-all duration-100 appearance-none cursor-pointer min-w-[150px] text-lg font-small shadow-inner"
                >
                  <option value="all">All Categories</option>
                  <option value="clubs">Clubs </option>
                  <option value="universities">Universities </option>
                  <option value="cultural">Cultural Clubs</option>
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
                See how our community has grown and the connections we've fostered across South Korea.
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
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Clubs</h2>
              <p className="text-xl text-primary-600 max-w-3xl mx-auto font-medium leading-relaxed">
                Discover vibrant communities where Malaysian students come together to pursue shared interests and build lasting friendships.
              </p>
            </div>
            
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={24}
              slidesPerView={3}
              navigation
              pagination={{ clickable: true }}
              loop={true}   // 🔥 Infinite loop enabled
              allowTouchMove={true}   // 👈 enables swipe
              simulateTouch={true}    // 👈 ensures trackpad gestures are recognized as touch
              touchEventsTarget="container"
              cssMode={false}         // 👈 important: disable CSS mode so swipe works
              breakpoints={{
                640: { slidesPerView: 1 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="px-6"
            >
            
              {filteredClubs.map((club) => (
                <SwiperSlide key={club.id}>
                  <div className="group bg-white/90 backdrop-blur-sm rounded-3xl border border-secondary-200 p-8 shadow-xl hover:shadow-2xl hover:bg-white transition-all duration-500 hover:-translate-y-2 h-[380px] flex flex-col justify-between">
                  <div>
                    {/* Club Header with Icon-sized Image */}
                    <div className="flex items-start space-x-4 mb-4">
                      <div className="relative flex-shrink-0">
                        <img
                          src={club.image}
                          alt={club.name}
                          className="w-14 h-14  rounded-2xl object-cover shadow-lg group-hover:scale-105 transition-transform duration-300"
                        />
                    
                  </div>
                  
                  <div className="p-1 flex-1 min-w-0">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold text-primary-600 group-hover:text-primary-600 transition-colors leading-tight">
                        {club.name}
                      </h3>
                      
                    </div>
                  </div>
                </div>
                  
                 
                  <p className="text-gray-800 text-sm mb-4 leading-relaxed ">
                    {club.description}
                  </p>

                  </div>


                  <div className="flex items-center justify-between pt-4 border-t border-white/20">
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-700 font-medium">{club.members.toLocaleString()} members</span>
                    </div>
                    <a
                      href={club.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-pink-300 hover:text-pink-500 transition-colors duration-300 group/link"
                    >
                      <Instagram className="w-4 h-4 mr-2 group-hover/link:scale-110 transition-transform duration-300" />
                      <span className="text-sm-200 font-medium">Follow</span>
                   </a>
                  </div>
                </div>
                
              </SwiperSlide>
            
                ))}
            
            </Swiper>
            

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
                Explore Korean universities where Malaysian students thrive, with strong support networks and vibrant communities.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredUniversities.map((university) => (
                <div
                  key={university.id}
                  className="group backdrop-blur-md bg-white/10 rounded-2xl border border-white/20 overflow-hidden shadow-xl hover:shadow-2xl hover:bg-white/15 transition-all duration-300 hover:-translate-y-1 flex flex-col"
                >
                <div className="flex-1 flex flex-col">
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

                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                        {university.name}
                      </h3>
                    </div>

                    <div className="flex items-center space-x-2 mb-3">
                      <MapPin className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-600 text-sm">{university.location}</span>
                    </div>

                    <p className="text-gray-600 mb-4 text-sm ">
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

                    <div className="mb-2">
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
                      </div>
                    </div>

                    <div className="p-6 pt-4 border-t border-white/20 flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-gray-500" />
                        <span className="text-gray-700 font-medium text-sm">
                          {university.malaysianStudents.toLocaleString()} students
                        </span>
                      </div>
                      <a
                        href={university.communityLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-primary-900 text-white rounded-xl transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
                      >
                        Join Community
                     </a>
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

      </div>
    
  )
}


export default Community
