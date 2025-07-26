"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Calendar } from "lucide-react"

interface GanttTask {
  task: string
  start: number
  duration: number
  progress: number
}

interface GanttChartProps {
  data: GanttTask[]
}

export function GanttChart({ data }: GanttChartProps) {
  const maxDuration = Math.max(...data.map((task) => task.start + task.duration))
  const totalWeeks = Math.ceil(maxDuration / 7)

  const getProgressColor = (progress: number) => {
    if (progress === 100) return "bg-green-500"
    if (progress > 50) return "bg-blue-500"
    if (progress > 0) return "bg-yellow-500"
    return "bg-gray-300"
  }

  return (
    <Card className="bg-white shadow-lg border-2 border-gray-200">
      <CardContent className="p-6">
        {/* Header with timeline */}
        <div className="mb-6">
          <div className="flex items-center mb-4">
            <Calendar className="h-5 w-5 text-indigo-600 mr-2" />
            <span className="font-semibold text-gray-700">Weekly Timeline</span>
          </div>

          {/* Dynamic week headers based on actual data */}
          <div className="relative mb-4">
            <div className="flex" style={{ width: "100%" }}>
              {Array.from({ length: totalWeeks }, (_, i) => (
                <div
                  key={i}
                  className="text-xs text-center text-gray-500 font-medium border-r border-gray-200 last:border-r-0 py-2"
                  style={{ width: `${100 / totalWeeks}%` }}
                >
                  W{i + 1}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tasks */}
        <div className="space-y-4">
          {data.map((task, index) => {
            const startWeek = Math.floor(task.start / 7)
            const durationWeeks = Math.ceil(task.duration / 7)

            return (
              <div key={index} className="relative">
                <div className="flex items-center mb-2">
                  <span className="font-medium text-gray-800 text-sm">{task.task}</span>
                </div>

                <div className="relative h-8">
                  {/* Timeline grid background */}
                  <div className="absolute inset-0 flex">
                    {Array.from({ length: totalWeeks }, (_, i) => (
                      <div
                        key={i}
                        className="border-r border-gray-100 last:border-r-0 h-full"
                        style={{ width: `${100 / totalWeeks}%` }}
                      ></div>
                    ))}
                  </div>

                  {/* Task bar */}
                  <div
                    className="absolute top-1 h-6 bg-gray-200 rounded-md shadow-sm"
                    style={{
                      left: `${(startWeek / totalWeeks) * 100}%`,
                      width: `${(durationWeeks / totalWeeks) * 100}%`,
                    }}
                  >
                    {/* Progress bar */}
                    <div
                      className={`h-full rounded-md transition-all duration-500 ${getProgressColor(task.progress)}`}
                      style={{
                        width: `${task.progress}%`,
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
