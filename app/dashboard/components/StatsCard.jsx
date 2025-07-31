export default function StatsCard({ title, percentage, active, total, color, label }) {
  const colorClasses = {
    blue: "text-blue-400 stroke-blue-400",
    red: "text-red-400 stroke-red-400",
    green: "text-green-400 stroke-green-400",
    purple: "text-purple-400 stroke-purple-400",
  }

  const circumference = 2 * Math.PI * 45
  const strokeDasharray = circumference
  const strokeDashoffset = circumference - (percentage / 100) * circumference

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
      <h3 className="text-lg font-semibold mb-4 text-center">{title}</h3>

      <div className="flex items-center justify-center mb-4">
        <div className="relative w-24 h-24">
          <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="currentColor"
              strokeWidth="8"
              fill="transparent"
              className="text-gray-700"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="currentColor"
              strokeWidth="8"
              fill="transparent"
              strokeDasharray={strokeDasharray}
              strokeDashoffset={strokeDashoffset}
              className={colorClasses[color]}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xl font-bold">{percentage}%</span>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-300">
        <div>
          {label}: {active}
        </div>
        <div>Total: {total}</div>
      </div>
    </div>
  )
}
