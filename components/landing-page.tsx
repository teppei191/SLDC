"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ClipboardList, Search, Code, TestTube, Rocket, Settings, ClipboardCheck, Play } from "lucide-react"
import { Header } from "./header"
import { useLanguage } from "./language-provider"

interface LandingPageProps {
  onStart: () => void
}

export function LandingPage({ onStart }: LandingPageProps) {
  const { t } = useLanguage()

  const features = [
    {
      icon: ClipboardList,
      title: t("feature-1"),
      description: t("feature-1-desc"),
      color: "from-orange-500 via-orange-600 to-red-600",
      shadowColor: "shadow-orange-500/25",
    },
    {
      icon: Search,
      title: t("feature-2"),
      description: t("feature-2-desc"),
      color: "from-emerald-500 via-green-600 to-teal-600",
      shadowColor: "shadow-emerald-500/25",
    },
    {
      icon: Code,
      title: t("feature-3"),
      description: t("feature-3-desc"),
      color: "from-purple-500 via-violet-600 to-purple-700",
      shadowColor: "shadow-purple-500/25",
    },
    {
      icon: TestTube,
      title: t("feature-4"),
      description: t("feature-4-desc"),
      color: "from-blue-500 via-blue-600 to-indigo-600",
      shadowColor: "shadow-blue-500/25",
    },
    {
      icon: Rocket,
      title: t("feature-5"),
      description: t("feature-5-desc"),
      color: "from-indigo-500 via-purple-600 to-pink-600",
      shadowColor: "shadow-indigo-500/25",
    },
    {
      icon: Settings,
      title: t("feature-6"),
      description: t("feature-6-desc"),
      color: "from-gray-500 via-slate-600 to-gray-700",
      shadowColor: "shadow-gray-500/25",
    },
  ]

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-100/30">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <Header />

      <div className="relative max-w-7xl mx-auto px-4 py-16">
        <Card className="bg-white/80 backdrop-blur-xl shadow-2xl border-0 overflow-hidden relative">
          <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-white/30"></div>
          <CardContent className="relative p-16">
            <div className="text-center mb-16">
              <div className="inline-flex p-6 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 rounded-3xl mb-8 shadow-2xl shadow-blue-500/25 transform hover:scale-105 transition-transform duration-300">
                <ClipboardCheck className="h-16 w-16 text-white" />
              </div>

              <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-8 leading-tight">
                {t("landing-title")}
              </h2>

              <p className="text-xl md:text-2xl text-gray-600 max-w-5xl mx-auto leading-relaxed mb-16 font-light">
                {t("landing-subtitle")}
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {features.map((feature, index) => (
                <Card
                  key={index}
                  className={`group hover:shadow-2xl ${feature.shadowColor} transition-all duration-500 hover:-translate-y-2 border-0 bg-white/60 backdrop-blur-sm overflow-hidden relative`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10"></div>
                  <CardContent className="relative p-8 text-center">
                    <div
                      className={`inline-flex p-4 bg-gradient-to-br ${feature.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg ${feature.shadowColor}`}
                    >
                      <feature.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-3 text-lg">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button
                onClick={onStart}
                size="lg"
                className="bg-gradient-to-r from-orange-500 via-orange-600 to-red-600 hover:from-orange-600 hover:via-orange-700 hover:to-red-700 text-white px-16 py-6 text-xl font-bold rounded-2xl shadow-2xl shadow-orange-500/25 hover:shadow-orange-500/40 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
              >
                <Play className="h-6 w-6 mr-4" />
                {t("start-text")}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  )
}

function TrendingUp({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  )
}
