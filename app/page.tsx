"use client"

import { useState } from "react"
import { LandingPage } from "@/components/landing-page"
import { AssessmentPage } from "@/components/assessment-page"
import { ResultsPage } from "@/components/results-page"
import { CompletionPage } from "@/components/completion-page"
import { LanguageProvider } from "@/components/language-provider"
import { CompanyInfoPage } from "@/components/company-info-page"
import type { StageScore } from "@/types/stage-score"

export type PageType = "landing" | "company-info" | "assessment" | "completion" | "results"

export interface CompanyInfo {
  companySize: string
  annualRevenue: string
  industry: string
}

export interface AssessmentState {
  currentPage: PageType
  currentQuestionIndex: number
  answers: Record<number, number>
  stageScores: Record<string, StageScore>
  overallScore: number
  weakestStage: string
  companyInfo?: CompanyInfo
}

export default function Home() {
  const [assessmentState, setAssessmentState] = useState<AssessmentState>({
    currentPage: "landing",
    currentQuestionIndex: 0,
    answers: {},
    stageScores: {},
    overallScore: 0,
    weakestStage: "",
    companyInfo: undefined,
  })

  const updateAssessmentState = (updates: Partial<AssessmentState>) => {
    setAssessmentState((prev) => ({ ...prev, ...updates }))
  }

  const renderCurrentPage = () => {
    switch (assessmentState.currentPage) {
      case "landing":
        return <LandingPage onStart={() => updateAssessmentState({ currentPage: "company-info" })} />
      case "company-info":
        return (
          <CompanyInfoPage
            onComplete={(companyInfo) => updateAssessmentState({ companyInfo, currentPage: "assessment" })}
          />
        )
      case "assessment":
        return <AssessmentPage assessmentState={assessmentState} updateAssessmentState={updateAssessmentState} />
      case "completion":
        return <CompletionPage onViewResults={() => updateAssessmentState({ currentPage: "results" })} />
      case "results":
        return (
          <ResultsPage
            assessmentState={assessmentState}
            onRestart={() =>
              updateAssessmentState({
                currentPage: "landing",
                currentQuestionIndex: 0,
                answers: {},
                stageScores: {},
                overallScore: 0,
                weakestStage: "",
                companyInfo: undefined,
              })
            }
          />
        )
      default:
        return <LandingPage onStart={() => updateAssessmentState({ currentPage: "company-info" })} />
    }
  }

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">{renderCurrentPage()}</div>
    </LanguageProvider>
  )
}
