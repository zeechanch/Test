import { useState } from 'react';
import Frame2 from './Frame2';
import Frame3 from './Frame3';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (projectName) => {
    setSelectedProject(projectName);
  };

  const handleCloseProject = () => {
    setSelectedProject(null);
  };

  return (
    <div className="w-full bg-transparent">
      <div 
        className="origin-top-left"
        style={{ 
          transform: 'scale(1.0)',
          width: '100%',
          height: 'auto'
        }}
      >
        {selectedProject ? (
          <ProjectDetailView 
            onClose={handleCloseProject}
            projectName={selectedProject}
          />
        ) : (
          <div className="flex justify-center"><ProjectListView onProjectClick={handleProjectClick} /></div>
        )}
      </div>
    </div>
  );
}

function ProjectListView({ onProjectClick }) {
  return (
    <div className="relative w-[938px] h-[939px] mx-auto">
      <Frame2 />
      {/* Add click handlers to project areas */}
      <div 
        className="absolute left-[19px] top-[88px] w-[243px] h-[152px] cursor-pointer z-10"
        onClick={() => onProjectClick('Website Redesign')}
      />
      <div 
        className="absolute left-[19px] top-[253px] w-[243px] h-[152px] cursor-pointer z-10"
        onClick={() => onProjectClick('Mobile App Development')}
      />
      <div 
        className="absolute left-[19px] top-[418px] w-[243px] h-[152px] cursor-pointer z-10"
        onClick={() => onProjectClick('Website Redesign')}
      />
      <div 
        className="absolute left-[19px] top-[583px] w-[243px] h-[152px] cursor-pointer z-10"
        onClick={() => onProjectClick('Mobile App Development')}
      />
      <div 
        className="absolute left-[19px] top-[748px] w-[243px] h-[152px] cursor-pointer z-10"
        onClick={() => onProjectClick('Website Redesign')}
      />
    </div>
  );
}

function ProjectDetailView({ onClose, projectName }) {
  return (
    <div className="relative w-[936px] h-[1117px] mx-auto">
      <Frame3 />
      {/* Close button */}
      <button 
        className="absolute left-[888px] top-[22px] w-6 h-6 z-20 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors"
        onClick={onClose}
      >
        <svg
          className="w-4 h-4 text-[#666666]"
          fill="none"
          preserveAspectRatio="none"
          viewBox="0 0 24 24"
        >
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d="M15 9L9 15"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d="M9 9L15 15"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      </button>
      
      {/* Add click handlers to project areas in the detail view */}
      <div 
        className="absolute left-[11px] top-[88px] w-[231px] h-[128px] cursor-pointer z-10"
        onClick={() => onClose()}
      />
      <div 
        className="absolute left-[11px] top-[228px] w-[231px] h-[128px] cursor-pointer z-10"
        onClick={() => onClose()}
      />
      <div 
        className="absolute left-[11px] top-[368px] w-[231px] h-[128px] cursor-pointer z-10"
        onClick={() => onClose()}
      />
      <div 
        className="absolute left-[11px] top-[508px] w-[231px] h-[128px] cursor-pointer z-10"
        onClick={() => onClose()}
      />
      <div 
        className="absolute left-[11px] top-[648px] w-[231px] h-[128px] cursor-pointer z-10"
        onClick={() => onClose()}
      />
      <div 
        className="absolute left-[11px] top-[788px] w-[231px] h-[128px] cursor-pointer z-10"
        onClick={() => onClose()}
      />
    </div>
  );
}