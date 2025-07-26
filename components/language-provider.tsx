"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type Language = "ja" | "en"

interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

const translations = {
  en: {
    "main-title": "SDLC Strategic Assessment Platform",
    "lang-text": "日本語",
    "landing-title": "SDLC Maturity Assessment",
    "landing-subtitle":
      "Enterprise-level assessment to identify your organization's SDLC challenges and propose optimal AI-powered solutions",
    "feature-1": "Planning",
    "feature-1-desc": "Strategy & Requirements Analysis",
    "feature-2": "Analysis",
    "feature-2-desc": "System Analysis & Architecture Design",
    "feature-3": "Development",
    "feature-3-desc": "Development & Implementation",
    "feature-4": "Testing",
    "feature-4-desc": "Testing & Quality Assurance",
    "feature-5": "Deployment",
    "feature-5-desc": "Release & Deployment",
    "feature-6": "Maintenance",
    "feature-6-desc": "Operations & Maintenance",
    "start-text": "Start Assessment",
    "assessment-title": "SDLC Maturity Assessment",
    "prev-text": "Previous",
    "next-text": "Next",
    "complete-text": "Complete Assessment",
    "completion-title": "Assessment Completed",
    "completion-subtitle":
      "Thank you for completing the assessment. Review your results and AI-powered recommendations.",
    "view-results-text": "View Results & AI Solutions",
    "company-info-title": "Company Information",
    "company-size": "Company Size",
    "annual-revenue": "Annual Revenue (USD)",
    industry: "Software Development Domain",
    "continue-text": "Continue to Assessment",
  },
  ja: {
    "main-title": "SDLC戦略診断プラットフォーム",
    "lang-text": "English",
    "landing-title": "SDLC成熟度本質診断",
    "landing-subtitle":
      "大手ITコンサルレベルの高品質診断で、あなたの組織のSDLC課題を特定し、最適なソリューションを提案します",
    "feature-1": "Planning",
    "feature-1-desc": "戦略策定・要件定義",
    "feature-2": "Analysis",
    "feature-2-desc": "システム分析・設計",
    "feature-3": "Development",
    "feature-3-desc": "開発・実装",
    "feature-4": "Testing",
    "feature-4-desc": "テスト・品質保証",
    "feature-5": "Deployment",
    "feature-5-desc": "リリース・デプロイ",
    "feature-6": "Maintenance",
    "feature-6-desc": "運用・保守",
    "start-text": "診断を開始する",
    "assessment-title": "SDLC成熟度診断",
    "prev-text": "前の質問",
    "next-text": "次の質問",
    "complete-text": "診断完了",
    "completion-title": "診断が完了しました",
    "completion-subtitle": "お疲れ様でした。診断結果と推奨ソリューションをご確認ください。",
    "view-results-text": "結果を確認する",
    "company-info-title": "会社情報",
    "company-size": "会社規模",
    "annual-revenue": "年商 (USD)",
    industry: "業界",
    "continue-text": "診断に進む",
  },
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "ja" ? "en" : "ja"))
  }

  const t = (key: string): string => {
    return translations[language][key as keyof (typeof translations)["ja"]] || key
  }

  return <LanguageContext.Provider value={{ language, toggleLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
