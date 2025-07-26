"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Building2, DollarSign, Factory, ArrowRight } from "lucide-react"
import { useState } from "react"
import { Header } from "./header"
import { useLanguage } from "./language-provider"

interface CompanyInfo {
  companySize: string
  annualRevenue: string
  industry: string
}

interface CompanyInfoPageProps {
  onComplete: (companyInfo: CompanyInfo) => void
}

export function CompanyInfoPage({ onComplete }: CompanyInfoPageProps) {
  const { t } = useLanguage()
  const [companyInfo, setCompanyInfo] = useState<CompanyInfo>({
    companySize: "",
    annualRevenue: "",
    industry: "",
  })

  const handleSubmit = () => {
    if (companyInfo.companySize && companyInfo.annualRevenue && companyInfo.industry) {
      onComplete(companyInfo)
    }
  }

  const isComplete = companyInfo.companySize && companyInfo.annualRevenue && companyInfo.industry

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-100/20">
      <Header />

      <div className="max-w-4xl mx-auto px-4 py-16">
        <Card className="bg-white/90 backdrop-blur-sm shadow-2xl border-0">
          <CardHeader className="text-center pb-8">
            <div className="inline-flex p-4 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl mb-6 mx-auto shadow-lg">
              <Building2 className="h-12 w-12 text-white" />
            </div>
            <CardTitle className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-4">
              {t("company-info-title")}
            </CardTitle>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Please provide your company information to customize the assessment and recommendations.
            </p>
          </CardHeader>

          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Company Size */}
              <div className="space-y-3">
                <Label htmlFor="companySize" className="text-lg font-semibold text-gray-800 flex items-center">
                  <Building2 className="h-5 w-5 mr-2 text-orange-500" />
                  {t("company-size")}
                </Label>
                <Select
                  value={companyInfo.companySize}
                  onValueChange={(value) => setCompanyInfo({ ...companyInfo, companySize: value })}
                >
                  <SelectTrigger className="h-12 text-lg border-2 border-gray-200 focus:border-orange-500">
                    <SelectValue placeholder="Select company size" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="startup">Startup (1-10 employees)</SelectItem>
                    <SelectItem value="small">Small Business (11-50 employees)</SelectItem>
                    <SelectItem value="medium">Medium Enterprise (51-250 employees)</SelectItem>
                    <SelectItem value="large">Large Enterprise (251-1000 employees)</SelectItem>
                    <SelectItem value="enterprise">Enterprise (1000+ employees)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Annual Revenue */}
              <div className="space-y-3">
                <Label htmlFor="annualRevenue" className="text-lg font-semibold text-gray-800 flex items-center">
                  <DollarSign className="h-5 w-5 mr-2 text-orange-500" />
                  {t("annual-revenue")}
                </Label>
                <Select
                  value={companyInfo.annualRevenue}
                  onValueChange={(value) => setCompanyInfo({ ...companyInfo, annualRevenue: value })}
                >
                  <SelectTrigger className="h-12 text-lg border-2 border-gray-200 focus:border-orange-500">
                    <SelectValue placeholder="Select annual revenue" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under-1m">Under $1M</SelectItem>
                    <SelectItem value="1m-10m">$1M - $10M</SelectItem>
                    <SelectItem value="10m-50m">$10M - $50M</SelectItem>
                    <SelectItem value="50m-100m">$50M - $100M</SelectItem>
                    <SelectItem value="100m-500m">$100M - $500M</SelectItem>
                    <SelectItem value="500m-1b">$500M - $1B</SelectItem>
                    <SelectItem value="over-1b">Over $1B</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Industry - spans full width */}
              <div className="space-y-3 md:col-span-2">
                <Label htmlFor="industry" className="text-lg font-semibold text-gray-800 flex items-center">
                  <Factory className="h-5 w-5 mr-2 text-orange-500" />
                  {t("industry")}
                </Label>
                <Select
                  value={companyInfo.industry}
                  onValueChange={(value) => setCompanyInfo({ ...companyInfo, industry: value })}
                >
                  <SelectTrigger className="h-12 text-lg border-2 border-gray-200 focus:border-orange-500">
                    <SelectValue placeholder="Select software development domain" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="enterprise-software">Enterprise Software Development</SelectItem>
                    <SelectItem value="web-development">Web Application Development</SelectItem>
                    <SelectItem value="mobile-development">Mobile App Development</SelectItem>
                    <SelectItem value="saas-platform">SaaS Platform Development</SelectItem>
                    <SelectItem value="fintech">FinTech Software Development</SelectItem>
                    <SelectItem value="healthtech">HealthTech Software Development</SelectItem>
                    <SelectItem value="ecommerce">E-commerce Platform Development</SelectItem>
                    <SelectItem value="gaming">Game Development</SelectItem>
                    <SelectItem value="ai-ml">AI/ML Software Development</SelectItem>
                    <SelectItem value="devtools">Developer Tools & Infrastructure</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button
                onClick={handleSubmit}
                disabled={!isComplete}
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-16 py-6 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {t("continue-text")}
                <ArrowRight className="h-6 w-6 ml-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
