"use client"

import { Button } from "@/components/ui/button"
import { ClipboardCheck, Globe } from "lucide-react"
import { useLanguage } from "./language-provider"

export function Header() {
  const { toggleLanguage, t } = useLanguage()

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl">
              <ClipboardCheck className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              {t("main-title")}
            </h1>
          </div>
          <Button
            onClick={toggleLanguage}
            variant="outline"
            size="sm"
            className="bg-white/50 hover:bg-white/80 border-white/30"
          >
            <Globe className="h-4 w-4 mr-2" />
            {t("lang-text")}
          </Button>
        </div>
      </div>
    </header>
  )
}
