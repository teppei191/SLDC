"use client"

interface RadarChartProps {
  data: Record<string, { percentage: number }>
}

export function RadarChart({ data }: RadarChartProps) {
  const stages = ["planning", "analysis", "development", "testing"]
  const maxScore = 100
  const centerX = 150
  const centerY = 150
  const radius = 100

  const points = stages.map((stage, index) => {
    const angle = (index * 2 * Math.PI) / stages.length - Math.PI / 2
    const score = data[stage]?.percentage || 0
    const distance = (score / maxScore) * radius
    const x = centerX + distance * Math.cos(angle)
    const y = centerY + distance * Math.sin(angle)
    return { x, y, score, stage }
  })

  const pathData = points.map((point, index) => `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`).join(" ") + " Z"

  const getStageColor = (stage: string) => {
    const colors = {
      planning: "#3b82f6",
      analysis: "#10b981",
      development: "#8b5cf6",
      testing: "#ef4444",
    }
    return colors[stage as keyof typeof colors] || "#6b7280"
  }

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <h5 className="text-lg font-bold mb-4 text-center">SDLC成熟度レーダーチャート</h5>
      <svg width="300" height="300" className="mx-auto">
        {/* Grid circles */}
        {[20, 40, 60, 80, 100].map((percent) => (
          <circle
            key={percent}
            cx={centerX}
            cy={centerY}
            r={(percent / 100) * radius}
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="1"
          />
        ))}

        {/* Grid lines */}
        {stages.map((_, index) => {
          const angle = (index * 2 * Math.PI) / stages.length - Math.PI / 2
          const endX = centerX + radius * Math.cos(angle)
          const endY = centerY + radius * Math.sin(angle)
          return <line key={index} x1={centerX} y1={centerY} x2={endX} y2={endY} stroke="#e5e7eb" strokeWidth="1" />
        })}

        {/* Score labels on grid */}
        {[20, 40, 60, 80, 100].map((percent) => (
          <text
            key={percent}
            x={centerX + 5}
            y={centerY - (percent / 100) * radius}
            className="text-xs fill-gray-500"
            textAnchor="start"
          >
            {percent}
          </text>
        ))}

        {/* Data polygon */}
        <path d={pathData} fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" strokeWidth="2" />

        {/* Data points */}
        {points.map((point, index) => (
          <g key={index}>
            <circle cx={point.x} cy={point.y} r="5" fill={getStageColor(point.stage)} stroke="white" strokeWidth="2" />
            <text x={point.x} y={point.y - 15} textAnchor="middle" className="text-xs font-bold fill-gray-700 bg-white">
              {point.score}
            </text>
          </g>
        ))}

        {/* Stage labels */}
        {stages.map((stage, index) => {
          const angle = (index * 2 * Math.PI) / stages.length - Math.PI / 2
          const labelDistance = radius + 25
          const x = centerX + labelDistance * Math.cos(angle)
          const y = centerY + labelDistance * Math.sin(angle)
          return (
            <text
              key={stage}
              x={x}
              y={y}
              textAnchor="middle"
              dominantBaseline="middle"
              className="text-sm font-bold"
              fill={getStageColor(stage)}
            >
              {stage.toUpperCase()}
            </text>
          )
        })}
      </svg>

      {/* Legend */}
      <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
        {stages.map((stage) => (
          <div key={stage} className="flex items-center">
            <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: getStageColor(stage) }}></div>
            <span className="capitalize">
              {stage}: {data[stage]?.percentage || 0}点
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
