import StatsCard from "./StatsCard";
import ProjIcon from "./ProjIcon"; // If in the same folder as StatsGrid.jsx

export default function StatsGrid() {
  const stats = [
    {
      title: "Projects",
      percentage: 67,
      active: 8,
      total: 12,
      color: "blue",
      label: "Active",
    },
    {
      title: "Deadlines",
      percentage: 67,
      active: 8,
      total: 12,
      color: "red",
      label: "Met",
    },
    {
      title: "Milestones",
      percentage: 67,
      active: 8,
      total: 12,
      color: "green",
      label: "Achieved",
    },
    {
      title: "Tasks",
      percentage: 67,
      active: 8,
      total: 12,
      color: "purple",
      label: "Completed",
    },
  ];

  return (
    <div className="flex items-center justify-between bg-gray-800 border border-gray-700 rounded-lg p-8">
      {/* Left side - Project Dashboard title and logo */}
      <div className="flex items-center gap-4 mr-8">
        <div className="w-16 h-16 rounded-lg flex items-center justify-center">
          <ProjIcon className="w-8 h-8" />
        </div>
        <div>
          <h1 className="text-3xl font-bold">PROJECT</h1>
          <h1 className="text-3xl font-bold">DASHBOARD</h1>
        </div>
      </div>

      {/* Right side - Stats in square box */}
      <div className="grid grid-cols-2 gap-4 flex-1 max-w-2xl">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>
    </div>
  );
}
