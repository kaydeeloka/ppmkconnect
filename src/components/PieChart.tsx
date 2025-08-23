import React, { useState } from 'react'

interface PieChartData {
  name: string
  value: number
  color: string
}

interface PieChartProps {
  data: PieChartData[]
  title: string
}

const PieChart: React.FC<PieChartProps> = ({ data, title }) => {
  const [hoveredSlice, setHoveredSlice] = useState<string | null>(null)
  const total = data.reduce((sum, item) => sum + item.value, 0)
  
  let cumulativePercentage = 0
  const slices = data.map((item) => {
    const percentage = (item.value / total) * 100
    const startAngle = cumulativePercentage * 3.6 // Convert to degrees
    const endAngle = (cumulativePercentage + percentage) * 3.6
    
    cumulativePercentage += percentage
    
    // Calculate path for pie slice - larger radius
    const startAngleRad = (startAngle - 90) * (Math.PI / 180)
    const endAngleRad = (endAngle - 90) * (Math.PI / 180)
    
    const largeArcFlag = percentage > 50 ? 1 : 0
    const radius = 140 // Increased from 80
    const centerX = 180 // Increased from 120
    const centerY = 180 // Increased from 120
    
    const x1 = centerX + radius * Math.cos(startAngleRad)
    const y1 = centerY + radius * Math.sin(startAngleRad)
    const x2 = centerX + radius * Math.cos(endAngleRad)
    const y2 = centerY + radius * Math.sin(endAngleRad)
    
    const pathData = [
      `M ${centerX} ${centerY}`,
      `L ${x1} ${y1}`,
      `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${x2} ${y2}`,
      'Z'
    ].join(' ')
    
    // Calculate label position
    const labelAngle = ((startAngle + endAngle) / 2 - 90) * (Math.PI / 180)
    const labelX = centerX + 90 * Math.cos(labelAngle)
    const labelY = centerY + 90 * Math.sin(labelAngle)
    
    return {
      ...item,
      percentage,
      pathData,
      startAngle,
      endAngle,
      labelX,
      labelY
    }
  })

  return (
    <div className=" mt-10">
      <h3 className="text-2xl font-semibold text-ppmk-dark text-center">{title}</h3>
      
      <div className="flex flex-col items-center">
        {/* Larger Pie Chart SVG */}
        <div className="relative">
          <svg width="360" height="360" viewBox="0 0 360 360" className="drop-shadow-lg">
            {slices.map((slice, index) => (
              <g key={slice.name}>
                <path
                  d={slice.pathData}
                  fill={slice.color}
                  stroke="#fff"
                  strokeWidth="3"
                  className={`transition-all duration-200 cursor-pointer ${
                    hoveredSlice === slice.name 
                      ? 'opacity-90 drop-shadow-lg transform scale-105' 
                      : 'opacity-100 hover:opacity-80'
                  }`}
                  onMouseEnter={() => setHoveredSlice(slice.name)}
                  onMouseLeave={() => setHoveredSlice(null)}
                />
                {/* Add percentage labels for larger slices */}
                {slice.percentage > 3 && (
                  <text
                    x={slice.labelX}
                    y={slice.labelY}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="fill-white text-sm font-bold drop-shadow-md pointer-events-none"
                    fontSize="14"
                  >
                    {slice.percentage.toFixed(1)}%
                  </text>
                )}
              </g>
            ))}
          </svg>

          {/* Hover Tooltip */}
          {hoveredSlice && (
            <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-gray-900/90 text-white px-4 py-3 rounded-xl shadow-xl backdrop-blur-sm border border-white/20 z-10">
              <div className="text-center">
                <div className="font-semibold text-lg">
                  {slices.find(s => s.name === hoveredSlice)?.name}
                </div>
                <div className="text-2xl font-bold text-blue-300 mt-1">
                  {slices.find(s => s.name === hoveredSlice)?.value}
                </div>
                <div className="text-sm text-gray-300">
                  {slices.find(s => s.name === hoveredSlice)?.percentage.toFixed(1)}% of total
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default PieChart
