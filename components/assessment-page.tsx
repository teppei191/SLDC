"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ChevronLeft, ChevronRight, Check, ClipboardList, Search, Code, TestTube, Rocket, Settings } from "lucide-react"
import { Header } from "./header"
import { useLanguage } from "./language-provider"
import type { AssessmentState } from "@/app/page"
import { questions } from "@/data/questions"

interface AssessmentPageProps {
  assessmentState: AssessmentState
  updateAssessmentState: (updates: Partial<AssessmentState>) => void
}

export function AssessmentPage({ assessmentState, updateAssessmentState }: AssessmentPageProps) {
  const { language, t } = useLanguage()
  const { currentQuestionIndex, answers } = assessmentState

  const questionsData = questions[language]

  // Add error handling for missing questions data
  if (!questionsData || questionsData.length === 0) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-8">
          <Card className="bg-white/70 backdrop-blur-sm shadow-xl border-0">
            <CardContent className="p-8 text-center">
              <p className="text-xl text-gray-600">Loading questions...</p>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  const currentQuestion = questionsData[currentQuestionIndex]
  const totalQuestions = questionsData.length

  // Add error handling for invalid question index
  if (!currentQuestion) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-8">
          <Card className="bg-white/70 backdrop-blur-sm shadow-xl border-0">
            <CardContent className="p-8 text-center">
              <p className="text-xl text-gray-600">Question not found. Please restart the assessment.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  const selectAnswer = (optionIndex: number) => {
    const newAnswers = { ...answers, [currentQuestionIndex]: optionIndex }
    updateAssessmentState({ answers: newAnswers })
  }

  const previousQuestion = () => {
    if (currentQuestionIndex > 0) {
      updateAssessmentState({ currentQuestionIndex: currentQuestionIndex - 1 })
    }
  }

  const nextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1 && answers[currentQuestionIndex] !== undefined) {
      updateAssessmentState({ currentQuestionIndex: currentQuestionIndex + 1 })
    }
  }

  const completeAssessment = () => {
    if (answers[currentQuestionIndex] !== undefined) {
      calculateResults()
      updateAssessmentState({ currentPage: "completion" })
    }
  }

  const calculateResults = () => {
    const stageScores: Record<string, any> = {
      planning: { total: 0, count: 0 },
      analysis: { total: 0, count: 0 },
      development: { total: 0, count: 0 },
      testing: { total: 0, count: 0 },
      deployment: { total: 0, count: 0 },
      maintenance: { total: 0, count: 0 },
    }

    Object.keys(answers).forEach((questionIndex) => {
      const question = questionsData[Number.parseInt(questionIndex)]
      const answerIndex = answers[Number.parseInt(questionIndex)]

      // Add null checks
      if (question && question.stage && question.options && question.options[answerIndex]) {
        const score = question.options[answerIndex].score

        // Initialize stage if it doesn't exist
        if (!stageScores[question.stage]) {
          stageScores[question.stage] = { total: 0, count: 0 }
        }

        stageScores[question.stage].total += score
        stageScores[question.stage].count++
      }
    })

    // Calculate percentages for all stages
    Object.keys(stageScores).forEach((stage) => {
      const stageData = stageScores[stage]
      stageData.percentage = stageData.count > 0 ? Math.round((stageData.total / (stageData.count * 4)) * 100) : 0
    })

    // Calculate overall score from all 6 stages
    const allStages = ["planning", "analysis", "development", "testing", "deployment", "maintenance"]
    const overallScore = Math.round(
      allStages.reduce((sum, stage) => sum + (stageScores[stage]?.percentage || 0), 0) / allStages.length,
    )

    // Find the weakest stage
    const weakestStage = allStages.reduce((weakest, current) =>
      (stageScores[current]?.percentage || 0) < (stageScores[weakest]?.percentage || 0) ? current : weakest,
    )

    updateAssessmentState({ stageScores, overallScore, weakestStage })
  }

  const getStageColor = (stage: string) => {
    const colors = {
      planning: "from-orange-500 to-orange-600",
      analysis: "from-green-500 to-green-600",
      development: "from-purple-500 to-purple-600",
      testing: "from-blue-500 to-blue-600",
      deployment: "from-indigo-500 to-indigo-600",
      maintenance: "from-gray-500 to-gray-600",
    }
    return colors[stage as keyof typeof colors] || "from-gray-500 to-gray-600"
  }

  const getStageIcon = (stage: string) => {
    const icons = {
      planning: ClipboardList,
      analysis: Search,
      development: Code,
      testing: TestTube,
      deployment: Rocket,
      maintenance: Settings,
    }
    return icons[stage as keyof typeof icons] || ClipboardList
  }

  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100

  return (
    <div className="min-h-screen">
      <Header />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <Card className="bg-white/70 backdrop-blur-sm shadow-xl border-0">
          <CardContent className="p-8">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{t("assessment-title")}</h2>

              <div className="space-y-3">
                <Progress value={progress} className="h-3" />
                <p className="text-gray-600 text-sm">
                  Question {currentQuestionIndex + 1} / {totalQuestions}
                </p>
              </div>
            </div>

            <div className="mb-8">
              <Card className="bg-gradient-to-br from-gray-50 to-white border-0 shadow-sm">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div
                      className={`bg-gradient-to-r ${getStageColor(currentQuestion.stage)} text-white px-4 py-2 rounded-full text-sm font-medium mr-4 flex items-center`}
                    >
                      {currentQuestion.stage.toUpperCase()}
                      {(() => {
                        const StageIcon = getStageIcon(currentQuestion.stage)
                        return <StageIcon className="h-4 w-4 ml-2" />
                      })()}
                    </div>
                    <span className="text-gray-500 text-sm">
                      Question {currentQuestionIndex + 1} / {totalQuestions}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-8 leading-relaxed">
                    {currentQuestion.question}
                  </h3>

                  <div className="space-y-4">
                    {currentQuestion.options.map((option, index) => (
                      <Card
                        key={index}
                        className={`cursor-pointer transition-all duration-200 hover:shadow-md border-2 ${
                          answers[currentQuestionIndex] === index
                            ? "border-blue-500 bg-blue-50 shadow-md"
                            : "border-gray-200 hover:border-blue-300 bg-white"
                        }`}
                        onClick={() => selectAnswer(index)}
                      >
                        <CardContent className="p-6">
                          <div className="flex items-center">
                            <div
                              className={`w-5 h-5 rounded-full border-2 mr-4 flex items-center justify-center ${
                                answers[currentQuestionIndex] === index
                                  ? "border-blue-500 bg-blue-500"
                                  : "border-gray-300"
                              }`}
                            >
                              {answers[currentQuestionIndex] === index && (
                                <div className="w-2 h-2 bg-white rounded-full" />
                              )}
                            </div>
                            <span className="text-gray-900 leading-relaxed">{option.text}</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="flex justify-between">
              <Button
                onClick={previousQuestion}
                disabled={currentQuestionIndex === 0}
                variant="outline"
                className="bg-white/50"
              >
                <ChevronLeft className="h-4 w-4 mr-2" />
                {t("prev-text")}
              </Button>

              {currentQuestionIndex === totalQuestions - 1 ? (
                <Button
                  onClick={completeAssessment}
                  disabled={answers[currentQuestionIndex] === undefined}
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
                >
                  {t("complete-text")}
                  <Check className="h-4 w-4 ml-2" />
                </Button>
              ) : (
                <Button
                  onClick={nextQuestion}
                  disabled={answers[currentQuestionIndex] === undefined}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                >
                  {t("next-text")}
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
