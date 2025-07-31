export default function ProjectItem({ name, priority, progress, dueDate, status }) {
  const priorityColors = {
    High: "text-red-400",
    Medium: "text-yellow-400",
    Low: "text-green-400",
  }

  const statusColors = {
    Active: "bg-green-600 text-green-100",
    Planning: "bg-yellow-600 text-yellow-100",
    Completed: "bg-blue-600 text-blue-100",
  }

  return (
    <div className="bg-gray-700 rounded-lg p-4">
      <div className="flex justify-between items-start mb-2">
        <h3 className="font-medium">{name}</h3>
        <span className={`text-sm ${priorityColors[priority]}`}>{priority}</span>
      </div>

      <div className="mb-3">
        <div className="flex justify-between text-sm text-gray-300 mb-1">
          <span>Progress</span>
          <span>{progress}%</span>
        </div>
        <div className="w-full bg-gray-600 rounded-full h-2">
          <div
            className="bg-red-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <div className="flex justify-between items-center text-sm">
        <span className="text-gray-400">Due: {dueDate}</span>
        <span className={`px-2 py-1 rounded text-xs ${statusColors[status]}`}>{status}</span>
      </div>
    </div>
  )
}
