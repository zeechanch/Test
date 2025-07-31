import ProjectItem from "./ProjectItem"

export default function ProjectsList() {
  const projects = [
    {
      name: "Website Redesign",
      priority: "High",
      progress: 75,
      dueDate: "04/07/2025",
      status: "Active",
    },
    {
      name: "Mobile App Development",
      priority: "Medium",
      progress: 75,
      dueDate: "04/07/2025",
      status: "Planning",
    },
    {
      name: "Website Redesign",
      priority: "High",
      progress: 75,
      dueDate: "04/07/2025",
      status: "Active",
    },
    {
      name: "Mobile App Development",
      priority: "Medium",
      progress: 75,
      dueDate: "04/07/2025",
      status: "Planning",
    },
    {
      name: "Website Redesign",
      priority: "High",
      progress: 75,
      dueDate: "04/07/2025",
      status: "Active",
    },
  ]

  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">Projects</h2>
        <span className="text-sm text-gray-400">5 projects</span>
      </div>

      <div className="space-y-4">
        {projects.map((project, index) => (
          <ProjectItem key={index} {...project} />
        ))}
      </div>
    </div>
  )
}
