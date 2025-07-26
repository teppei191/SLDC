"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, ArrowRight } from "lucide-react"
import { Header } from "./header"
import { useLanguage } from "./language-provider"

interface CompletionPageProps {
  onViewResults: () => void
}

export function CompletionPage({ onViewResults }: CompletionPageProps) {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen">
      <Header />

      <div className="max-w-4xl mx-auto px-4 py-16">
        <Card className="bg-white/70 backdrop-blur-sm shadow-xl border-0">
          <CardContent className="p-12 text-center">
            <div className="mb-8">
              <div className="inline-flex p-4 bg-gradient-to-br from-green-500 to-green-600 rounded-full mb-6">
                <CheckCircle className="h-12 w-12 text-white" />
              </div>

              <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-6">
                {t("completion-title")}
              </h2>

              <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-12">
                {t("completion-subtitle")}
              </p>
            </div>

            <Button
              onClick={onViewResults}
              size="lg"
              className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-12 py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              {t("view-results-text")}
              <ArrowRight className="h-5 w-5 ml-3" />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
