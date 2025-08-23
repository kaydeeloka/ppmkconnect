import React from 'react'

interface University {
  name: string
  students: number
  location: string
  coordinates: { x: number; y: number }
}

interface UniversityMapProps {
  universities: University[]
  selectedUniversity: University | null
  onUniversitySelect: (university: University) => void
}

const UniversityMap: React.FC<UniversityMapProps> = ({
  universities,
  selectedUniversity,
  onUniversitySelect
}) => {
  return (
    <div className="relative bg-white rounded-2xl p-8">
      {/* Title Section */}
    <div className="absolute top-8 left-8">
    <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-2">
        PPMK Distributions
    </div>
    <div className="text-base sm:text-lg lg:text-3xl text-gray-600 font-medium mb-2">
        Across South Korea
    </div>
    </div>


      {/* Map Container */}
      <div className="relative w-full h-96 mt-24">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid meet"
        >
          {/* South Korea outline with provinces */}
          <g>
            {/* Gangwon Province (Northeast) */}
            <path
              d="M55 15 L70 18 L75 25 L70 35 L60 32 L55 25 Z"
              fill="#90EE90"
              stroke="#333"
              strokeWidth="0.5"
            />
            
            {/* Gyeonggi Province (Central, around Seoul) */}
            <path
              d="M45 25 L60 28 L58 38 L50 40 L42 35 L45 30 Z"
              fill="#FFB6C1"
              stroke="#333"
              strokeWidth="0.5"
            />
            
            {/* Seoul (Capital) */}
            <circle
              cx="50"
              cy="32"
              r="2"
              fill="#FF69B4"
              stroke="#333"
              strokeWidth="0.3"
            />
            
            {/* Incheon */}
            <circle
              cx="45"
              cy="33"
              r="1.5"
              fill="#DDA0DD"
              stroke="#333"
              strokeWidth="0.3"
            />
            
            {/* North Chungcheong */}
            <path
              d="M42 40 L55 42 L52 50 L45 48 L40 45 Z"
              fill="#DDA0DD"
              stroke="#333"
              strokeWidth="0.5"
            />
            
            {/* South Chungcheong */}
            <path
              d="M40 48 L52 50 L50 58 L42 56 L38 52 Z"
              fill="#FFFF00"
              stroke="#333"
              strokeWidth="0.5"
            />
            
            {/* North Gyeongsang */}
            <path
              d="M55 42 L70 45 L68 60 L58 58 L52 50 Z"
              fill="#FF69B4"
              stroke="#333"
              strokeWidth="0.5"
            />
            
            {/* South Gyeongsang */}
            <path
              d="M52 58 L68 60 L65 75 L55 72 L50 65 Z"
              fill="#FFB6C1"
              stroke="#333"
              strokeWidth="0.5"
            />
            
            {/* North Jeolla */}
            <path
              d="M38 58 L50 60 L48 68 L40 66 L35 62 Z"
              fill="#98FB98"
              stroke="#333"
              strokeWidth="0.5"
            />
            
            {/* South Jeolla */}
            <path
              d="M35 66 L48 68 L45 78 L38 76 L30 72 Z"
              fill="#FFB6C1"
              stroke="#333"
              strokeWidth="0.5"
            />
            
            {/* Jeju Island */}
            <ellipse
              cx="42"
              cy="85"
              rx="4"
              ry="2"
              fill="#90EE90"
              stroke="#333"
              strokeWidth="0.5"
            />
          </g>

          {/* Connecting lines from regions to labels */}
          <g stroke="#666" strokeWidth="0.3" fill="none">
            {/* Seoul area lines */}
            <line x1="50" y1="32" x2="75" y2="25" />
            <line x1="45" y1="33" x2="25" y2="28" />
            <line x1="52" y1="35" x2="80" y2="35" />
            
            {/* Central region lines */}
            <line x1="48" y1="45" x2="25" y2="45" />
            <line x1="46" y1="52" x2="20" y2="52" />
            
            {/* Eastern region lines */}
            <line x1="62" y1="50" x2="85" y2="50" />
            <line x1="60" y1="65" x2="85" y2="65" />
            
            {/* Southern region lines */}
            <line x1="44" y1="72" x2="20" y2="75" />
            <line x1="42" y1="85" x2="20" y2="88" />
          </g>
        </svg>

        {/* University labels positioned around the map */}
        
        {/* Seoul Area - Top Right */}
        <div className="absolute top-4 right-4 text-right">
          <div className="font-bold text-gray-800 text-sm">Korea University</div>
          <div className="text-blue-600 font-semibold text-xs">156 students</div>
        </div>

        <div className="absolute top-12 right-8 text-right">
          <div className="font-bold text-gray-800 text-sm">Hanyang University</div>
          <div className="text-blue-600 font-semibold text-xs">65 students</div>
        </div>

        <div className="absolute top-20 right-4 text-right">
          <div className="font-bold text-gray-800 text-sm">Yonsei University</div>
          <div className="text-blue-600 font-semibold text-xs">19 students</div>
        </div>

        {/* Seoul Area - Top Left */}
        <div className="absolute top-8 left-4 text-left">
          <div className="font-bold text-gray-800 text-sm">Sungkyunkwan University</div>
          <div className="text-blue-600 font-semibold text-xs">70 students</div>
        </div>

        <div className="absolute top-16 left-8 text-left">
          <div className="font-bold text-gray-800 text-sm">Sejong University</div>
          <div className="text-blue-600 font-semibold text-xs">46 students</div>
        </div>

        {/* Central Region - Left */}
        <div className="absolute top-32 left-2 text-left">
          <div className="font-bold text-gray-800 text-sm">Seoul National University</div>
          <div className="text-blue-600 font-semibold text-xs">43 students</div>
        </div>

        <div className="absolute top-40 left-0 text-left">
          <div className="font-bold text-gray-800 text-sm">Konkuk University</div>
          <div className="text-blue-600 font-semibold text-xs">26 students</div>
        </div>

        <div className="absolute top-48 left-2 text-left">
          <div className="font-bold text-gray-800 text-sm">Ewha Womans University</div>
          <div className="text-blue-600 font-semibold text-xs">7 students</div>
        </div>

        {/* Eastern Region - Right */}
        <div className="absolute top-36 right-0 text-right">
          <div className="font-bold text-gray-800 text-sm">Kangwon National University</div>
          <div className="text-blue-600 font-semibold text-xs">1 student</div>
        </div>

        <div className="absolute top-52 right-2 text-right">
          <div className="font-bold text-gray-800 text-sm">Kyung Hee University</div>
          <div className="text-blue-600 font-semibold text-xs">17 students</div>
        </div>

        <div className="absolute top-60 right-0 text-right">
          <div className="font-bold text-gray-800 text-sm">Ajou University</div>
          <div className="text-blue-600 font-semibold text-xs">1 student</div>
        </div>

        {/* Southern Region - Left */}
        <div className="absolute bottom-20 left-0 text-left">
          <div className="font-bold text-gray-800 text-sm">Hanyang University (Erica)</div>
          <div className="text-blue-600 font-semibold text-xs">19 students</div>
        </div>

        <div className="absolute bottom-12 left-2 text-left">
          <div className="font-bold text-gray-800 text-sm">Inha University</div>
          <div className="text-blue-600 font-semibold text-xs">11 students</div>
        </div>

        <div className="absolute bottom-4 left-0 text-left">
          <div className="font-bold text-gray-800 text-sm">Yonsei University (Songdo)</div>
          <div className="text-blue-600 font-semibold text-xs">12 students</div>
        </div>

        {/* Central Bottom */}
        <div className="absolute bottom-16 left-1/3 text-left">
          <div className="font-bold text-gray-800 text-sm">Donggyang Mirae University</div>
          <div className="text-blue-600 font-semibold text-xs">18 students</div>
        </div>

        <div className="absolute bottom-8 left-1/2 text-left">
          <div className="font-bold text-gray-800 text-sm">Seoultech</div>
          <div className="text-blue-600 font-semibold text-xs">9 students</div>
        </div>

        {/* Right Side */}
        <div className="absolute bottom-24 right-4 text-right">
          <div className="font-bold text-gray-800 text-sm">Gachon University</div>
          <div className="text-blue-600 font-semibold text-xs">1 student</div>
        </div>

        <div className="absolute bottom-16 right-8 text-right">
          <div className="font-bold text-gray-800 text-sm">Kwangwoon University</div>
          <div className="text-blue-600 font-semibold text-xs">1 student</div>
        </div>

        <div className="absolute bottom-8 right-4 text-right">
          <div className="font-bold text-gray-800 text-sm">Sogang University</div>
          <div className="text-blue-600 font-semibold text-xs">1 student</div>
        </div>
      </div>
    </div>
  )
}

export default UniversityMap
