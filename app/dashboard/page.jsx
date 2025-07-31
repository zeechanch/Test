import ProjectsList from "./components/ProjectsList";
import RecentActivities from "./components/RecentActivities";
import ProjectMilestones from "./components/ProjectMilestones";
import ProjectTasks from "./components/ProjectTasks";

// Import your new components
import MainCard from "./components/MainCard/MainCard";
import Responsive from "./components/MainCard/MainCard-Responsive";
import BottomCard from "./components/BottomCard/page";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      {/* Outer full-width background container */}
      <div className="w-full flex justify-center">
        {/* Inner content container with limited width */}
        <div className="w-full max-w-[1400px] bg-[#0F0F10] rounded-2xl p-6 shadow-lg">
          
          {/* Replace StatsGrid with new design */}
          <div className="flex items-center justify-center">
            {/* Mobile Layout - show only on small screens */}
            <div className="block md:hidden w-full max-w-[359px] h-[414px]">
              <Responsive />
            </div>

            {/* Desktop Layout - show only on md and larger screens */}
            <div className="hidden md:block w-[1275px] h-[605px] mt-16">
              <MainCard />
            </div>
          </div>

          {/* Bottom card section */}
          <div className="mt-8 flex items-center justify-center">
            <BottomCard />
          </div>

        </div>
      </div>
    </div>
  );
}
