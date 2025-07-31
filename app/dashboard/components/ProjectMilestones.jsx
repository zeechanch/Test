import { Settings, Star } from "lucide-react"

export default function ProjectMilestones() {
  const milestones = [
    { id: 1, name: "Milestone 1" },
    { id: 3, name: "Milestone 3" },
    { id: 3, name: "Milestone 3" },
  ]

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Project Milestones</h2>
        <Settings className="w-5 h-5 text-gray-400" />
      </div>

      <div className="space-y-3">
        {milestones.map((milestone, index) => (
          <div key={index} className="flex items-center justify-between bg-gray-700 rounded-lg p-3">
            <div className="flex items-center gap-3">
              <Star className="w-4 h-4 text-purple-400" />
              <span className="text-sm">{milestone.name}</span>
            </div>
            <div className="flex gap-1">
              <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
              <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
              <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
