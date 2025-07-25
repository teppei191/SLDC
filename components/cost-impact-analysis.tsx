"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, Area, ComposedChart, ReferenceLine } from "recharts"
import { TrendingDown, TrendingUp, Building2, DollarSign, Factory } from "lucide-react"
import type { CompanyInfo } from "@/app/page"

interface CostImpactAnalysisProps {
  companyInfo?: CompanyInfo
  painPoint: string
  timeImpact: string
  currentScore: number
}

export function CostImpactAnalysis({ companyInfo, painPoint, timeImpact, currentScore }: CostImpactAnalysisProps) {
  // Calculate base revenue impact based on company size
  const getBaseRevenue = () => {
    if (!companyInfo?.annualRevenue) return 10000000 // Default $10M

    const revenueMap: Record<string, number> = {
      "under-1m": 1000000,
      "1m-10m": 5000000,
      "10m-50m": 25000000,
      "50m-100m": 75000000,
      "100m-500m": 250000000,
      "500m-1b": 750000000,
      "over-1b": 2000000000,
    }

    return revenueMap[companyInfo.annualRevenue] || 10000000
  }

  const baseRevenue = getBaseRevenue()
  const productivityLossPercentage = Math.max(10, (100 - currentScore) * 0.5) // 最小10%の損失
  const annualProductivityLoss = baseRevenue * (productivityLossPercentage / 100)

  // Generate 2-year projection data (Year 0 to Year 2)
  const generateProjectionData = () => {
    const data = []

    // Year 0 (baseline)
    data.push({
      year: 0,
      period: "Year 0",
      withoutAI: 0,
      withAI: 0,
      savings: 0,
    })

    let cumulativeWithoutAI = 0
    let cumulativeWithAI = 0

    for (let year = 1; year <= 2; year++) {
      // Without AI: pain point impact compounds at 20% annually
      const yearlyLossWithoutAI = annualProductivityLoss * Math.pow(1.2, year - 1)
      cumulativeWithoutAI += yearlyLossWithoutAI

      // With AI Agentic Tools: 80% improvement in year 1, then 10% additional improvement
      const improvementFactor = year === 1 ? 0.8 : 0.9
      const yearlyLossWithAI = yearlyLossWithoutAI * (1 - improvementFactor)
      cumulativeWithAI += yearlyLossWithAI

      const withoutAIMillion = Math.round(cumulativeWithoutAI / 1000000)
      const withAIMillion = Math.round(cumulativeWithAI / 1000000)
      const savingsMillion = withoutAIMillion - withAIMillion

      data.push({
        year,
        period: `Year ${year}`,
        withoutAI: withoutAIMillion,
        withAI: withAIMillion,
        savings: savingsMillion,
      })
    }

    return data
  }

  const projectionData = generateProjectionData()
  console.log("Cost Impact Data:", projectionData) // デバッグ用

  const totalSavings = projectionData[2]?.savings || 0 // 2-year total

  // Get company size display name
  const getCompanySizeDisplay = () => {
    const sizeMap: Record<string, string> = {
      startup: "Startup (1-10 employees)",
      small: "Small Business (11-50 employees)",
      medium: "Medium Enterprise (51-250 employees)",
      large: "Large Enterprise (251-1000 employees)",
      enterprise: "Enterprise (1000+ employees)",
    }
    return companyInfo?.companySize ? sizeMap[companyInfo.companySize] || companyInfo.companySize : "N/A"
  }

  const getRevenueDisplay = () => {
    const revenueMap: Record<string, string> = {
      "under-1m": "Under $1M",
      "1m-10m": "$1M - $10M",
      "10m-50m": "$10M - $50M",
      "50m-100m": "$50M - $100M",
      "100m-500m": "$100M - $500M",
      "500m-1b": "$500M - $1B",
      "over-1b": "Over $1B",
    }
    return companyInfo?.annualRevenue ? revenueMap[companyInfo.annualRevenue] || companyInfo.annualRevenue : "N/A"
  }

  // Custom tooltip for better data display
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-lg">
          <p className="font-semibold text-gray-800 mb-2">{`${label}`}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} style={{ color: entry.color }} className="text-sm font-medium">
              {`${entry.name}: $${entry.value}M`}
            </p>
          ))}
        </div>
      )
    }
    return null
  }

  // データが正しく生成されているかチェック
  if (!projectionData || projectionData.length === 0) {
    return (
      <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0">
        <CardContent className="p-8 text-center">
          <p className="text-lg text-gray-600">Loading cost impact analysis...</p>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0">
      <CardHeader className="bg-gradient-to-r from-red-50 to-orange-50 border-b border-red-200">
        <CardTitle className="text-3xl font-bold flex items-center text-slate-800">
          <TrendingDown className="h-10 w-10 mr-4 text-red-600" />
          Financial Impact Analysis
        </CardTitle>
        <p className="text-lg text-slate-600 mt-2">2-Year Revenue Impact: Current State vs AI-Optimized SDLC</p>
      </CardHeader>
      <CardContent className="p-8">
        {/* Line Chart showing progression over time */}
        <div className="mb-8">
          <div className="h-96 mb-6 bg-gradient-to-br from-slate-50 to-white rounded-xl p-8 border border-slate-200 shadow-sm">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={projectionData} margin={{ top: 30, right: 40, left: 80, bottom: 40 }}>
                <defs>
                  <linearGradient id="gapGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#9ca3af" stopOpacity={0.3}/>
                    <stop offset="100%" stopColor="#6b7280" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="2 2" stroke="#e2e8f0" strokeWidth={0.8} />
                <XAxis
                  dataKey="period"
                  tick={{ fontSize: 13, fill: "#64748b", fontWeight: "500" }}
                  axisLine={{ stroke: "#94a3b8", strokeWidth: 1.5 }}
                  tickLine={{ stroke: "#94a3b8" }}
                />
                <YAxis
                  domain={[0, "dataMax + 5"]}
                  label={{
                    value: "Annual Revenue Impact ($M)",
                    angle: -90,
                    position: "insideLeft",
                    style: { textAnchor: "middle", fill: "#64748b", fontSize: "14px", fontWeight: "600" },
                  }}
                  tick={{ fontSize: 13, fill: "#64748b", fontWeight: "500" }}
                  axisLine={{ stroke: "#94a3b8", strokeWidth: 1.5 }}
                  tickLine={{ stroke: "#94a3b8" }}
                  tickFormatter={(value) => `$${value}M`}
                />
                <Tooltip content={<CustomTooltip />} />
                <Legend 
                  wrapperStyle={{ 
                    paddingTop: "24px", 
                    fontSize: "13px", 
                    fontWeight: "600",
                    color: "#374151"
                  }} 
                  iconType="line" 
                />

                {/* Without AI Tools Line - Red */}
                <Line
                  type="monotone"
                  dataKey="withoutAI"
                  stroke="#dc2626"
                  strokeWidth={3.5}
                  dot={{ fill: "#dc2626", strokeWidth: 2, r: 5, stroke: "#ffffff" }}
                  activeDot={{ r: 7, stroke: "#dc2626", strokeWidth: 3, fill: "#ffffff" }}
                  name="Current State"
                />

                {/* With AI Tools Line - Green */}
                <Line
                  type="monotone"
                  dataKey="withAI"
                  stroke="#059669"
                  strokeWidth={3.5}
                  dot={{ fill: "#059669", strokeWidth: 2, r: 5, stroke: "#ffffff" }}
                  activeDot={{ r: 7, stroke: "#059669", strokeWidth: 3, fill: "#ffffff" }}
                  name="AI-Optimized"
                />

                {/* Grey area representing the gap between lines */}
                <Area
                  type="monotone"
                  dataKey="withoutAI"
                  stroke="none"
                  fill="url(#gapGradient)"
                  fillOpacity={0.4}
                />
                <Area
                  type="monotone"
                  dataKey="withAI"
                  stroke="none"
                  fill="#ffffff"
                  fillOpacity={1}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>

          {/* Key Metrics Cards */}
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-6 text-center border-2 border-red-200 shadow-lg">
              <div className="flex items-center justify-center mb-3">
                <TrendingDown className="h-6 w-6 text-red-600 mr-2" />
                <div className="text-sm font-bold text-red-700">Current State</div>
              </div>
              <div className="text-4xl font-black text-red-600 mb-2">${projectionData[2]?.withoutAI || 0}M</div>
              <div className="text-xs text-red-600 font-medium">2-Year Revenue Impact</div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center border-2 border-green-200 shadow-lg">
              <div className="flex items-center justify-center mb-3">
                <TrendingUp className="h-6 w-6 text-green-600 mr-2" />
                <div className="text-sm font-bold text-green-700">AI-Optimized</div>
              </div>
              <div className="text-4xl font-black text-green-600 mb-2">${projectionData[2]?.withAI || 0}M</div>
              <div className="text-xs text-green-600 font-medium">2-Year Revenue Impact</div>
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 text-center border-2 border-gray-300 shadow-lg">
              <div className="flex items-center justify-center mb-3">
                <TrendingUp className="h-6 w-6 text-gray-700 mr-2" />
                <div className="text-sm font-bold text-gray-700">Efficiency Gap</div>
              </div>
              <div className="text-4xl font-black text-gray-700 mb-2">${totalSavings}M</div>
              <div className="text-xs text-gray-700 font-medium">Shown as grey area in chart</div>
            </div>
          </div>

          {/* ROI Highlight */}
          <div className="bg-gradient-to-r from-emerald-500 to-green-600 rounded-xl p-6 text-white text-center shadow-xl">
            <div className="flex items-center justify-center mb-3">
              <TrendingUp className="h-8 w-8 mr-3" />
              <span className="text-2xl font-bold">ROI Analysis</span>
            </div>
            <div className="text-5xl font-black mb-2">
              {totalSavings > 0 ? Math.round((totalSavings * 1000000) / 50000) : 0}%
            </div>
            <div className="text-lg opacity-90">Return on $50K AI implementation over 2 years</div>
          </div>
        </div>

        {/* Company Profile Only */}
        <div className="max-w-2xl mx-auto">
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-6 border border-slate-200">
            <h4 className="text-xl font-bold text-slate-800 mb-6 flex items-center justify-center">
              <Building2 className="h-6 w-6 mr-3 text-slate-600" />
              Company Profile
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-4 shadow-sm text-center">
                <Building2 className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-sm font-medium text-slate-600 mb-1">Company Size</div>
                <div className="text-sm font-bold text-slate-800">{getCompanySizeDisplay()}</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm text-center">
                <DollarSign className="h-8 w-8 text-green-600 mx-auto mb-2" />
                <div className="text-sm font-medium text-slate-600 mb-1">Annual Revenue</div>
                <div className="text-sm font-bold text-slate-800">{getRevenueDisplay()}</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm text-center">
                <Factory className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                <div className="text-sm font-medium text-slate-600 mb-1">Industry</div>
                <div className="text-sm font-bold text-slate-800">{companyInfo?.industry || "N/A"}</div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
