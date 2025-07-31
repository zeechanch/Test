import { Settings } from "lucide-react"

export default function ProjectTasks() {
  const tasks = [
    { id: 1, name: "Task 1", completed: true },
    { id: 2, name: "Task 2", completed: true },
    { id: 3, name: "Task 3", completed: false },
  ]

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Project Tasks</h2>
        <Settings className="w-5 h-5 text-gray-400" />
      </div>

      <div className="space-y-3">
        {tasks.map((task, index) => (
          <div key={index} className="flex items-center justify-between bg-gray-700 rounded-lg p-3">
            <div className="flex items-center gap-3">
              <div
                className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                  task.completed ? "bg-green-500 border-green-500" : "border-red-500"
                }`}
              >
                {task.completed && <div className="w-2 h-2 bg-white rounded-full"></div>}
              </div>
              <span className="text-sm">{task.name}</span>
            </div>
            <div
              className={`w-10 h-6 rounded-full p-1 transition-colors ${
                task.completed ? "bg-green-500" : "bg-gray-600"
              }`}
            >
              <div
                className={`w-4 h-4 bg-white rounded-full transition-transform ${
                  task.completed ? "translate-x-4" : "translate-x-0"
                }`}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
