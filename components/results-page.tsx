"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  RotateCcw,
  Activity,
  TrendingDown,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  BarChart3,
  Clock,
  DollarSign,
  Download,
  Mail,
  Award,
  FileText,
  Zap,
  Settings,
  ArrowDown,
  Star,
  Users,
  Code,
  TestTube,
  Rocket,
  Wrench,
  ArrowRight,
} from "lucide-react"
import { useState } from "react"
import { Header } from "./header"
import { useLanguage } from "./language-provider"
import type { AssessmentState } from "@/app/page"
import { GanttChart } from "./gantt-chart"
import { questions } from "@/data/questions"
import { CostImpactAnalysis } from "./cost-impact-analysis"

interface ResultsPageProps {
  assessmentState: AssessmentState
  onRestart: () => void
}

export function ResultsPage({ assessmentState, onRestart }: ResultsPageProps) {
  const { language, t } = useLanguage()
  const { stageScores, overallScore, weakestStage, answers } = assessmentState
  const [selectedBudget, setSelectedBudget] = useState<string>("")

  // 企業ランキング定義
  const companyRanking = [
    {
      rank: "S",
      title: "Digital Transformation Leader",
      companies: ["Google", "Microsoft", "Amazon", "Meta"],
      scoreRange: "90-100 points",
      characteristics: "AI-DX fully integrated, industry standard setting",
      color: "from-yellow-400 via-yellow-500 to-amber-500",
      textColor: "text-yellow-800",
      bgColor: "bg-yellow-50",
    },
    {
      rank: "A",
      title: "Leading IT Company",
      companies: ["Facebook", "Netflix", "Uber", "Airbnb"],
      scoreRange: "80-89 points",
      characteristics: "Advanced agile development, advanced AI utilization",
      color: "from-green-500 via-emerald-600 to-green-600",
      textColor: "text-green-800",
      bgColor: "bg-green-50",
    },
    {
      rank: "B",
      title: "Mid-Sized IT Company",
      companies: ["Adobe", "Salesforce", "Oracle", "SAP"],
      scoreRange: "70-79 points",
      characteristics: "Standard development process, partial AI introduction",
      color: "from-blue-500 via-blue-600 to-indigo-600",
      textColor: "text-blue-800",
      bgColor: "bg-blue-50",
    },
    {
      rank: "C",
      title: "General IT Company",
      companies: ["Infosys", "TCS", "Wipro", "Cognizant"],
      scoreRange: "60-69 points",
      characteristics: "Traditional development methods, limited automation",
      color: "from-orange-500 via-orange-600 to-amber-600",
      textColor: "text-orange-800",
      bgColor: "bg-orange-50",
    },
    {
      rank: "D",
      title: "IT Company Requiring Improvement",
      companies: ["Legacy System Development", "Legacy-Centric Companies"],
      scoreRange: "50-59 points",
      characteristics: "Manual process-centric, delayed digitization",
      color: "from-red-500 via-red-600 to-rose-600",
      textColor: "text-red-800",
      bgColor: "bg-red-50",
    },
    {
      rank: "E",
      title: "Digital Transformation Required",
      companies: ["Companies Dependent on Legacy Systems"],
      scoreRange: "0-49 points",
      characteristics: "Completely manual, urgent digitization required",
      color: "from-red-700 via-red-800 to-red-900",
      textColor: "text-red-900",
      bgColor: "bg-red-100",
    },
  ]

  const getCurrentRank = (score: number) => {
    if (score >= 90) return companyRanking[0]
    if (score >= 80) return companyRanking[1]
    if (score >= 70) return companyRanking[2]
    if (score >= 60) return companyRanking[3]
    if (score >= 50) return companyRanking[4]
    return companyRanking[5]
  }

  const currentRank = getCurrentRank(overallScore)

  // レーダーチャート
  const RadarChart = ({ data }: { data: any }) => {
    const stages = ["planning", "analysis", "development", "testing", "deployment", "maintenance"]
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

    return (
      <div className="bg-white rounded-xl p-6 shadow-lg">
        <h5 className="text-lg font-bold mb-4 text-center">SDLC Maturity Radar</h5>
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

          {/* Data polygon */}
          <path d={pathData} fill="rgba(59, 130, 246, 0.2)" stroke="#3b82f6" strokeWidth="2" />

          {/* Data points */}
          {points.map((point, index) => (
            <g key={index}>
              <circle cx={point.x} cy={point.y} r="5" fill="#3b82f6" stroke="white" strokeWidth="2" />
              <text x={point.x} y={point.y - 12} textAnchor="middle" className="text-xs font-bold fill-gray-700">
                {point.score}
              </text>
            </g>
          ))}

          {/* Stage labels */}
          {stages.map((stage, index) => {
            const angle = (index * 2 * Math.PI) / stages.length - Math.PI / 2
            const labelDistance = radius + 35
            const x = centerX + labelDistance * Math.cos(angle)
            const y = centerY + labelDistance * Math.sin(angle)
            const stageNames = {
              planning: "Plan",
              analysis: "Analyze",
              development: "Develop",
              testing: "Test",
              deployment: "Deploy",
              maintenance: "Maintain",
            }
            return (
              <text
                key={stage}
                x={x}
                y={y}
                textAnchor="middle"
                dominantBaseline="middle"
                className="text-sm font-bold fill-gray-700"
              >
                {stageNames[stage as keyof typeof stageNames]}
              </text>
            )
          })}
        </svg>
      </div>
    )
  }

  // 最も低いスコアのステージの詳細分析を追加
  const getWorstStageDetailedAnalysis = () => {
    const questionsData = questions[language]
    const worstStageQuestions = questionsData.filter((q) => q.stage === weakestStage)

    // 最も低いスコアの回答を特定
    const worstAnswers = Object.entries(answers)
      .filter(([questionIndex]) => {
        const question = questionsData[Number.parseInt(questionIndex)]
        return question.stage === weakestStage
      })
      .map(([questionIndex, answerIndex]) => {
        const question = questionsData[Number.parseInt(questionIndex)]
        const selectedOption = question.options[answerIndex]
        return {
          questionIndex: Number.parseInt(questionIndex),
          painPoint: question.painPoint,
          question: question.question,
          currentSituation: selectedOption.text,
          timeImpact: selectedOption.timeImpact,
          description: selectedOption.description,
          score: selectedOption.score,
        }
      })
      .sort((a, b) => a.score - b.score) // スコアの低い順にソート

    return worstAnswers[0] // 最も低いスコアの回答
  }

  const worstStageAnalysis = getWorstStageDetailedAnalysis()

  // Budget-based AI solution recommendations
  const getAgenticSolutionByBudget = (budget: string) => {
    const solutions = {
      "1000-5000": {
        name: "AI Requirements Agentic Assistant",
        description:
          "Autonomous AI agent for intelligent requirements gathering, documentation, and basic test case generation with self-learning capabilities",
        overview:
          "Entry-level AI agentic solution that autonomously handles requirements analysis and generates fundamental test scenarios. The AI agent learns from interactions and continuously improves its understanding of your business domain.",
        systemFlow: {
          title: "AI Agentic Requirements System Flow",
          steps: [
            {
              actor: "Requirements AI Agent",
              action: "Autonomously analyze stakeholder inputs",
              tool: "NLP + Self-learning algorithms",
              output: "Structured requirements",
              icon: FileText,
              color: "from-blue-500 to-blue-600",
            },
            {
              actor: "Documentation AI Agent",
              action: "Auto-generate requirement docs",
              tool: "Intelligent template engine",
              output: "Formatted documentation",
              icon: Zap,
              color: "from-green-500 to-green-600",
            },
            {
              actor: "Test Generation Agent",
              action: "Create adaptive test cases",
              tool: "Rule-based + ML generation",
              output: "Smart test scenarios",
              icon: TestTube,
              color: "from-purple-500 to-purple-600",
            },
          ],
        },
      },
      "5000-10000": {
        name: "AI Development Agentic Optimization Suite",
        description:
          "Comprehensive AI agentic platform with autonomous code review, intelligent testing, and self-optimizing performance monitoring across the entire development lifecycle",
        overview:
          "Mid-tier AI agentic solution providing intelligent automation with autonomous decision-making across development, testing, and deployment phases. Features self-healing code analysis, autonomous test generation, and predictive performance optimization.",
        systemFlow: {
          title: "Integrated AI Agentic Development Platform Flow",
          steps: [
            {
              actor: "Code Analysis AI Agent",
              action: "Autonomously analyze & optimize code",
              tool: "ML-based self-improving analysis",
              output: "Quality metrics & auto-fixes",
              icon: Code,
              color: "from-blue-500 to-blue-600",
            },
            {
              actor: "Test Generation AI Agent",
              action: "Generate comprehensive tests autonomously",
              tool: "Advanced pattern recognition + learning",
              output: "Full adaptive test suite",
              icon: TestTube,
              color: "from-green-500 to-green-600",
            },
            {
              actor: "Performance AI Agent",
              action: "Monitor & auto-optimize performance",
              tool: "Predictive self-healing analysis",
              output: "Performance insights + auto-fixes",
              icon: Activity,
              color: "from-purple-500 to-purple-600",
            },
            {
              actor: "Deployment AI Agent",
              action: "Automate deployment with intelligence",
              tool: "Autonomous CI/CD orchestration",
              output: "Smart automated deployments",
              icon: Rocket,
              color: "from-orange-500 to-orange-600",
            },
          ],
        },
      },
      "10000+": {
        name: "Enterprise AI Agentic SDLC Orchestrator",
        description:
          "Full-scale autonomous AI ecosystem for complete SDLC automation with predictive analytics, self-healing systems, intelligent resource management, and continuous learning capabilities",
        overview:
          "Enterprise-grade AI agentic solution providing end-to-end SDLC automation with advanced autonomous decision-making capabilities. Features predictive failure detection, automated remediation, intelligent resource allocation, self-optimizing workflows, and comprehensive analytics with continuous learning.",
        systemFlow: {
          title: "Enterprise AI Agentic SDLC Ecosystem Flow",
          steps: [
            {
              actor: "Strategic AI Agent",
              action: "Autonomously analyze business requirements",
              tool: "Advanced NLP + Business intelligence + Learning",
              output: "Strategic roadmap + insights",
              icon: Users,
              color: "from-blue-500 to-blue-600",
            },
            {
              actor: "Architecture AI Agent",
              action: "Design optimal system architecture autonomously",
              tool: "ML-based self-optimizing architecture",
              output: "Optimized architecture + recommendations",
              icon: Settings,
              color: "from-green-500 to-green-600",
            },
            {
              actor: "Development AI Agent",
              action: "Autonomous code generation & review",
              tool: "Advanced self-improving code models",
              output: "High-quality code + optimizations",
              icon: Code,
              color: "from-purple-500 to-purple-600",
            },
            {
              actor: "Quality AI Agent",
              action: "Comprehensive autonomous QA",
              tool: "Predictive quality analytics + learning",
              output: "Quality reports + auto-improvements",
              icon: CheckCircle,
              color: "from-orange-500 to-orange-600",
            },
            {
              actor: "Operations AI Agent",
              action: "Self-healing autonomous system management",
              tool: "Autonomous operations platform + ML",
              output: "Optimized operations + predictions",
              icon: Wrench,
              color: "from-red-500 to-red-600",
            },
            {
              actor: "Analytics AI Agent",
              action: "Predictive insights & autonomous reporting",
              tool: "Advanced analytics engine + learning",
              output: "Strategic insights + recommendations",
              icon: BarChart3,
              color: "from-indigo-500 to-indigo-600",
            },
          ],
        },
      },
    }

    return solutions[budget as keyof typeof solutions] || solutions["1000-5000"]
  }

  // CSV保存機能を改善
  const saveResults = (format: "txt" | "csv") => {
    const timestamp = new Date().toISOString().split("T")[0]
    const filename = `SDLC_Assessment_Results_${timestamp}.${format}`

    let content = ""

    if (format === "txt") {
      content = `SDLC Maturity Assessment Results
Assessment Date: ${new Date().toLocaleString("en-US")}
Overall Score: ${overallScore}/100 (${currentRank.rank} Grade)
Rank: ${currentRank.title}

Stage Scores:
- Planning: ${stageScores.planning?.percentage || 0} points
- Analysis: ${stageScores.analysis?.percentage || 0} points  
- Development: ${stageScores.development?.percentage || 0} points
- Testing: ${stageScores.testing?.percentage || 0} points

Most Important Improvement Area: ${weakestStage}
Most Important Pain Point: ${worstStageAnalysis?.painPoint || "N/A"}
Current Issue: ${worstStageAnalysis?.currentSituation || "N/A"}
Time Impact: ${worstStageAnalysis?.timeImpact || "N/A"}

Recommended Solution: ${selectedBudget ? getAgenticSolutionByBudget(selectedBudget).name : "N/A"}
`
    } else {
      content = `Assessment Date,Overall Score,Rank,Planning,Analysis,Development,Testing,Most Important Improvement Area,Most Important Pain Point,Time Impact,Recommended Solution
${new Date().toLocaleString("en-US")},${overallScore},${currentRank.rank} Grade,${stageScores.planning?.percentage || 0},${stageScores.analysis?.percentage || 0},${stageScores.development?.percentage || 0},${stageScores.testing?.percentage || 0},${weakestStage},"${worstStageAnalysis?.painPoint || "N/A"}","${worstStageAnalysis?.timeImpact || "N/A"}","${selectedBudget ? getAgenticSolutionByBudget(selectedBudget).name : "N/A"}"`
    }

    const blob = new Blob([content], { type: "text/plain;charset=utf-8" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = filename
    a.click()
    URL.revokeObjectURL(url)
  }

  // PoC提案機能
  const requestPoC = () => {
    const agenticSolution = selectedBudget ? getAgenticSolutionByBudget(selectedBudget) : null
    const pocContent = `PoC Proposal Request

Company Information:
- Assessment Date: ${new Date().toLocaleString("en-US")}
- Overall Maturity: ${overallScore}/100 (${currentRank.rank} Grade)
- Most Important Improvement Area: ${weakestStage}

Issue Details:
- Pain Point: ${worstStageAnalysis?.painPoint || "N/A"}
- Current Problem: ${worstStageAnalysis?.currentSituation || "N/A"}
- Time Impact: ${worstStageAnalysis?.timeImpact || "N/A"}

Proposed Solution:
- Solution Name: ${agenticSolution?.name || "N/A"}
- Budget Range: ${selectedBudget || "Not selected"}

PoC Desired Content:
□ Basic Functionality Prototype Development
□ Existing System Integration Verification
□ ROI Estimation and Effect Measurement
□ Implementation Plan Formulation

Contact Information:
- Company Name: [Please Enter]
- Contact Person: [Please Enter]  
- Email: [Please Enter]
- Phone: [Please Enter]
`

    const blob = new Blob([pocContent], { type: "text/plain;charset=utf-8" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `PoC_Proposal_Request_${new Date().toISOString().split("T")[0]}.txt`
    a.click()
    URL.revokeObjectURL(url)
  }

  // 予算別実装プラン（デプロイ完了まで）
  const budgetPlans = {
    "1000-5000": {
      title: "$1,000 - $5,000 (POC Implementation)",
      duration: "2 weeks",
      scope: "POC-focused basic functionality implementation & production deployment",
      ganttData: [
        { task: "Requirements Definition & Design", start: 0, duration: 3, progress: 100 },
        { task: "Basic Functionality Development", start: 2, duration: 7, progress: 100 },
        { task: "Testing", start: 8, duration: 3, progress: 100 },
        { task: "Production Deployment", start: 11, duration: 2, progress: 100 },
        { task: "Operation Start", start: 13, duration: 1, progress: 100 },
      ],
    },
    "5000-10000": {
      title: "$5,000 - $10,000 (Standard Implementation)",
      duration: "1 month",
      scope: "Major functionality integrated implementation & production deployment",
      ganttData: [
        { task: "Requirements Definition & Design", start: 0, duration: 7, progress: 100 },
        { task: "Major Functionality Development", start: 5, duration: 14, progress: 100 },
        { task: "Integration Testing", start: 16, duration: 7, progress: 100 },
        { task: "CI/CD Construction", start: 20, duration: 5, progress: 100 },
        { task: "Production Deployment", start: 25, duration: 3, progress: 100 },
        { task: "Operational Support", start: 28, duration: 2, progress: 100 },
      ],
    },
    "10000+": {
      title: "$10,000+ (Enterprise Implementation)",
      duration: "2-3 months",
      scope: "Full functionality enterprise implementation & production deployment",
      ganttData: [
        { task: "Requirements Definition & Design", start: 0, duration: 14, progress: 100 },
        { task: "Full Functionality Development", start: 10, duration: 35, progress: 100 },
        { task: "Comprehensive Testing", start: 35, duration: 21, progress: 100 },
        { task: "Production Deployment", start: 56, duration: 7, progress: 100 },
        { task: "Continuous Operational Support", start: 63, duration: 21, progress: 100 },
      ],
    },
  }

  const selectedPlan = selectedBudget ? budgetPlans[selectedBudget as keyof typeof budgetPlans] : null
  const agenticSolution = selectedBudget ? getAgenticSolutionByBudget(selectedBudget) : null

  const stageNames = {
    planning: "Planning",
    analysis: "Analysis",
    development: "Development",
    testing: "Testing",
    deployment: "Deployment",
    maintenance: "Maintenance",
  }

  const stageIcons = {
    planning: Users,
    analysis: BarChart3,
    development: Code,
    testing: TestTube,
    deployment: Rocket,
    maintenance: Wrench,
  }

  // Stage scores data for bar chart
  const stageScoreData = [
    { stage: "Planning", score: stageScores.planning?.percentage || 0 },
    { stage: "Analysis", score: stageScores.analysis?.percentage || 0 },
    { stage: "Development", score: stageScores.development?.percentage || 0 },
    { stage: "Testing", score: stageScores.development?.percentage || 0 },
    { stage: "Deployment", score: stageScores.deployment?.percentage || 0 },
    { stage: "Maintenance", score: stageScores.maintenance?.percentage || 0 },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-100/20">
      <Header />

      <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        {/* ヘッダーセクション */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-orange-600 bg-clip-text text-transparent mb-4">
            SDLC Maturity Assessment Results
          </h1>
          <div className="flex justify-center gap-4">
            <Button onClick={() => saveResults("txt")} variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export TXT
            </Button>
            <Button onClick={() => saveResults("csv")} variant="outline" size="sm">
              <Download className="h-4 w-4 mr-2" />
              Export CSV
            </Button>
            <Button onClick={requestPoC} variant="outline" size="sm">
              <Mail className="h-4 w-4 mr-2" />
              Request PoC
            </Button>
          </div>
        </div>

        {/* メインダッシュボード */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* 左カラム: 総合スコア & レーダーチャート */}
          <div className="space-y-6">
            {/* 総合スコア */}
            <Card className={`bg-gradient-to-br ${currentRank.color} text-white border-0 shadow-2xl`}>
              <CardContent className="p-8 text-center">
                <div className="mb-4">
                  <Award className="h-12 w-12 mx-auto mb-3" />
                  <div className="text-6xl font-black mb-2">{currentRank.rank}</div>
                  <div className="text-xl font-bold">{overallScore}/100</div>
                </div>
                <div className="text-lg font-semibold mb-2">{currentRank.title}</div>
                <div className="text-sm opacity-90">{currentRank.characteristics}</div>
              </CardContent>
            </Card>

            {/* レーダーチャート */}
            <RadarChart data={stageScores} />
          </div>

          {/* 中央カラム: ランキング */}
          <div>
            <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0">
              <CardHeader>
                <CardTitle className="flex items-center text-xl font-bold">
                  <BarChart3 className="h-6 w-6 mr-3 text-orange-600" />
                  Company Ranking
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="space-y-3">
                  {companyRanking.map((rank, index) => {
                    const isCurrentRank = rank.rank === currentRank.rank
                    return (
                      <Card
                        key={rank.rank}
                        className={`${isCurrentRank ? `${rank.bgColor} border-2 border-current shadow-lg` : "bg-gray-50"} transition-all duration-300`}
                      >
                        <CardContent className="p-4">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              {isCurrentRank && <Star className="h-5 w-5 text-orange-500 mr-2 fill-current" />}
                              <div
                                className={`w-8 h-8 rounded-full bg-gradient-to-r ${rank.color} text-white flex items-center justify-center font-bold text-sm mr-3`}
                              >
                                {rank.rank}
                              </div>
                              <div>
                                <div
                                  className={`font-bold text-sm ${isCurrentRank ? rank.textColor : "text-gray-800"}`}
                                >
                                  {rank.title}
                                </div>
                                <div className="text-xs text-gray-600">{rank.scoreRange}</div>
                              </div>
                            </div>
                            {isCurrentRank && (
                              <div className="bg-orange-500 text-white px-2 py-1 rounded-full text-xs font-bold">
                                Current Level
                              </div>
                            )}
                          </div>
                          <div className="mt-2 text-xs text-gray-600">
                            <div className="font-medium mb-1">Representative Companies:</div>
                            <div>{rank.companies.join(", ")}</div>
                          </div>
                        </CardContent>
                      </Card>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 右カラム: ステージ別スコア - 革新的なデザイン */}
          <div>
            <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0">
              <CardHeader>
                <CardTitle className="flex items-center text-xl font-bold">
                  <Activity className="h-6 w-6 mr-3 text-blue-600" />
                  SDLC Stage Performance
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4">
                <div className="space-y-4">
                  {stageScoreData.map((stage) => {
                    const rank = getCurrentRank(stage.score)
                    const isWorst = stage.stage.toLowerCase() === weakestStage

                    return (
                      <div
                        key={stage.stage}
                        className={`relative p-4 rounded-xl ${isWorst ? "bg-red-50 border-2 border-red-200" : "bg-gradient-to-r from-gray-50 to-white"} shadow-sm`}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center">
                            {isWorst && <AlertCircle className="h-4 w-4 text-red-500 mr-2" />}
                            <span className="font-bold text-sm">{stage.stage}</span>
                          </div>
                          <div
                            className={`px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${rank.color}`}
                          >
                            {rank.rank}
                          </div>
                        </div>

                        <div className="flex items-center justify-between mb-2">
                          <span className="text-2xl font-bold text-gray-800">{stage.score}</span>
                          <span className="text-sm text-gray-500">/ 100 pts</span>
                        </div>

                        {/* Progress bar with gradient */}
                        <div className="relative w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all duration-1000 ${
                              isWorst
                                ? "bg-gradient-to-r from-red-400 to-red-600"
                                : "bg-gradient-to-r from-blue-400 to-blue-600"
                            }`}
                            style={{ width: `${stage.score}%` }}
                          >
                            <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                          </div>
                        </div>

                        {/* Performance indicator */}
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {worstStageAnalysis && (
          <div className="space-y-8">
            {/* Critical Pain Point Analysis - Unified Single Slide */}
            <Card className="bg-white/95 backdrop-blur-sm shadow-2xl border-0">
              <CardHeader className="bg-gradient-to-r from-slate-50 to-blue-50 border-b border-slate-200">
                <CardTitle className="text-3xl font-bold flex items-center text-slate-800">
                  <TrendingDown className="h-10 w-10 mr-4 text-orange-600" />
                  Critical Issue Detailed Analysis
                </CardTitle>
                <p className="text-lg text-slate-600 mt-2">Visualization of current issues and improvement effects</p>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  {/* Left: Current State Analysis with Bar Charts */}
                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-6 border border-slate-200">
                      <h4 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                        <Activity className="h-7 w-7 mr-3 text-slate-600" />
                        Current Pain Point Impact
                      </h4>

                      {/* Pain Point Impact Bar Chart */}
                      <div className="space-y-4">
                        <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-200">
                          <h5 className="font-semibold text-slate-700 mb-4">Impact Metrics</h5>

                          {/* Productivity Loss */}
                          <div className="mb-4">
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-sm font-medium text-slate-600">Productivity Loss</span>
                              <span className="text-sm font-bold text-red-600">
                                {Math.max(1, (100 - (stageScores[weakestStage]?.percentage || 0)) * 0.3).toFixed(1)}%
                              </span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-3">
                              <div
                                className="h-3 bg-gradient-to-r from-red-400 to-red-600 rounded-full"
                                style={{
                                  width: `${Math.max(1, (100 - (stageScores[weakestStage]?.percentage || 0)) * 0.3)}%`,
                                }}
                              ></div>
                            </div>
                          </div>

                          {/* Time Impact */}
                          <div className="mb-4">
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-sm font-medium text-slate-600">Time Impact</span>
                              <span className="text-sm font-bold text-orange-600">High</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-3">
                              <div
                                className="h-3 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"
                                style={{ width: "75%" }}
                              ></div>
                            </div>
                          </div>

                          {/* Maturity Score */}
                          <div>
                            <div className="flex justify-between items-center mb-2">
                              <span className="text-sm font-medium text-slate-600">Current Maturity</span>
                              <span className="text-sm font-bold text-blue-600">
                                {stageScores[weakestStage]?.percentage || 0}/100
                              </span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-3">
                              <div
                                className="h-3 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
                                style={{ width: `${stageScores[weakestStage]?.percentage || 0}%` }}
                              ></div>
                            </div>
                          </div>
                        </div>

                        {/* Pain Point Details */}
                        <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-200">
                          <div className="flex items-center mb-3">
                            <AlertCircle className="h-5 w-5 text-amber-600 mr-2" />
                            <span className="font-semibold text-slate-700">Identified Pain Point</span>
                          </div>
                          <div className="text-lg font-bold text-slate-800 mb-3">{worstStageAnalysis.painPoint}</div>
                          <div className="text-sm text-slate-600 leading-relaxed mb-3">
                            {worstStageAnalysis.currentSituation}
                          </div>
                          <div className="flex items-center text-sm">
                            <Clock className="h-4 w-4 text-orange-500 mr-2" />
                            <span className="font-medium text-orange-700">
                              Time Impact: {worstStageAnalysis.timeImpact}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right: Before/After Comparison Chart */}
                  <div className="space-y-6">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-200">
                      <h4 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                        <TrendingUp className="h-7 w-7 mr-3 text-orange-600" />
                        After AI Agentic Tool Implementation
                      </h4>

                      {/* Before/After Comparison */}
                      <div className="space-y-6">
                        <div className="text-center mb-4">
                          <h5 className="text-lg font-bold text-slate-700 mb-2">
                            Planning & Testing Improvement Prediction
                          </h5>
                        </div>

                        {/* Current State */}
                        <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-200">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center">
                              <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                              <span className="font-semibold text-slate-700">Current Situation</span>
                            </div>
                            <div className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                              Issue Exists
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="text-center">
                              <div className="text-2xl font-bold text-red-600 mb-1">
                                {stageScores.planning?.percentage || 0} pts
                              </div>
                              <div className="text-xs text-slate-500">Planning Score</div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-red-600 mb-1">
                                {stageScores.testing?.percentage || 0} pts
                              </div>
                              <div className="text-xs text-slate-500">Testing Score</div>
                            </div>
                          </div>
                        </div>

                        {/* Arrow */}
                        <div className="flex justify-center">
                          <ArrowDown className="h-8 w-8 text-blue-500" />
                        </div>

                        {/* After AI Implementation */}
                        <div className="bg-white rounded-xl p-5 shadow-sm border border-green-200">
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center">
                              <Zap className="h-5 w-5 text-green-500 mr-2" />
                              <span className="font-semibold text-slate-700">After AI Implementation</span>
                            </div>
                            <div className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                              Improved
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="text-center">
                              <div className="text-2xl font-bold text-green-600 mb-1">
                                {Math.min(95, (stageScores.planning?.percentage || 0) + 35)} pts
                              </div>
                              <div className="text-xs text-slate-500">Planning Score</div>
                            </div>
                            <div className="text-center">
                              <div className="text-2xl font-bold text-green-600 mb-1">
                                {Math.min(95, (stageScores.testing?.percentage || 0) + 40)} pts
                              </div>
                              <div className="text-xs text-slate-500">Testing Score</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Add Cost Impact Analysis */}
        <CostImpactAnalysis
          companyInfo={assessmentState.companyInfo}
          painPoint={worstStageAnalysis?.painPoint || "N/A"}
          timeImpact={worstStageAnalysis?.timeImpact || "N/A"}
          currentScore={stageScores[weakestStage]?.percentage || 0}
        />

        {/* Implementation Plan with integrated AI Solution */}
        <Card className="bg-white/90 backdrop-blur-sm shadow-xl border-0">
          <CardHeader>
            <CardTitle className="text-2xl font-bold flex items-center">
              <DollarSign className="h-8 w-8 mr-3 text-green-600" />
              Implementation Plan
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <Select value={selectedBudget} onValueChange={setSelectedBudget}>
                <SelectTrigger className="w-full p-4 text-lg">
                  <SelectValue placeholder="Select Budget Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1000-5000">$1,000 - $5,000 (Basic Implementation)</SelectItem>
                  <SelectItem value="5000-10000">$5,000 - $10,000 (Standard Implementation)</SelectItem>
                  <SelectItem value="10000+">$10,000+ (Full Implementation)</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {selectedPlan && agenticSolution && (
              <div className="space-y-8">
                {/* Cost and Duration */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex items-center bg-blue-50 rounded-xl p-4">
                    <Clock className="h-8 w-8 text-blue-600 mr-4" />
                    <div>
                      <span className="font-bold text-lg">Duration: {selectedPlan.duration}</span>
                      <p className="text-sm text-gray-600">Until Production Deployment</p>
                    </div>
                  </div>
                  <div className="flex items-center bg-purple-50 rounded-xl p-4">
                    <Activity className="h-8 w-8 text-purple-600 mr-4" />
                    <div>
                      <span className="font-bold text-lg">Scope</span>
                      <p className="text-sm text-gray-700">{selectedPlan.scope}</p>
                    </div>
                  </div>
                </div>

                {/* Master Schedule */}
                <div>
                  <h4 className="text-2xl font-bold mb-6">📅 Master Schedule</h4>
                  <GanttChart data={selectedPlan.ganttData} />
                </div>

                {/* AI Agentic Solution Overview */}
                <div className="bg-gradient-to-br from-orange-50 via-orange-50 to-orange-50 rounded-2xl p-6">
                  <div className="flex items-center mb-6">
                    <div className="p-4 bg-gradient-to-br from-orange-600 to-orange-600 rounded-2xl mr-6 shadow-lg">
                      <Zap className="h-10 w-10 text-white" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-gray-900 mb-2">{agenticSolution.name}</h4>
                      <p className="text-lg text-gray-600">{agenticSolution.description}</p>
                    </div>
                  </div>

                  {/* Solution Overview */}
                  <div className="mb-6">
                    <h5 className="text-xl font-bold mb-4">🎯 Solution Overview</h5>
                    <p className="text-gray-700 bg-white rounded-lg p-4">{agenticSolution.overview}</p>
                  </div>

                  {/* System Flow - Simplified visualization */}
                  {/* System Flow - 横レイアウト */}
                  {/* System Flow - 横レイアウト - コンパクト版 */}
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <h5 className="text-xl font-bold mb-6 text-center">{agenticSolution.systemFlow.title}</h5>

                    {/* 横の1列レイアウト - よりコンパクト */}
                    <div className="flex flex-wrap justify-center items-center gap-2 overflow-x-auto">
                      {agenticSolution.systemFlow.steps.map((step: any, index: number) => (
                        <div key={index} className="flex items-center flex-shrink-0">
                          <div
                            className={`bg-gradient-to-br ${step.color} text-white rounded-lg p-3 text-center min-w-[140px] max-w-[140px] shadow-md hover:scale-105 transition-transform duration-300`}
                          >
                            <step.icon className="h-5 w-5 mx-auto mb-1" />
                            <div className="text-xs font-bold mb-1 leading-tight">{step.actor}</div>
                            <div className="text-xs leading-tight mb-1 opacity-90">{step.action}</div>
                            <div className="text-xs bg-white/20 rounded-full px-1 py-0.5 leading-tight">
                              {step.output}
                            </div>
                          </div>

                          {/* 右向き矢印 */}
                          {index < agenticSolution.systemFlow.steps.length - 1 && (
                            <ArrowRight className="h-5 w-5 text-blue-500 mx-1 flex-shrink-0" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </CardContent>
        </Card>

        {/* アクションボタン */}
        <div className="text-center">
          <Button
            onClick={onRestart}
            size="lg"
            className="bg-gradient-to-r from-orange-600 to-orange-600 hover:from-orange-700 hover:to-orange-700 text-white px-12 py-4 text-lg font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <RotateCcw className="h-6 w-6 mr-3" />
            Re-diagnose
          </Button>
        </div>
      </div>
    </div>
  )
}
