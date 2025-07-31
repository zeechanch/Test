import { MessageSquare, FileText, CheckCircle } from "lucide-react"

export default function RecentActivities() {
  const activities = [
    {
      icon: MessageSquare,
      text: "Added comment under main thread",
      time: "2h ago",
      color: "text-orange-400",
    },
    {
      icon: FileText,
      text: 'Added feedback on "UI Design Review"',
      time: "4h ago",
      color: "text-blue-400",
    },
    {
      icon: CheckCircle,
      text: "Project milestone completed ahead of schedule",
      time: "6h ago",
      color: "text-green-400",
    },
  ]

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-6">Recent Activities</h2>

      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className={`p-2 rounded-lg bg-gray-700 ${activity.color}`}>
              <activity.icon className="w-4 h-4" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-300">{activity.text}</p>
              <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
