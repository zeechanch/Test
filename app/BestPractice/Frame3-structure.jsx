import svgPaths from "./svg-zzfrval0bw";
import { imgGroup, imgGroup1, imgGroup2, imgGroup3 } from "./svg-os3ie";

function BackgroundCard() {
  return (
    <div className="absolute bg-[#0f0f10] h-[939px] left-0 top-0 w-[1276px] rounded-[15px] border border-[#686868] border-solid pointer-events-none" />
  );
}

function HeaderInfo() {
  return (
    <>
      <div className="absolute left-[478.72px] top-[38.05px] text-white text-[14px] font-light w-[81.76px] text-right transform -translate-x-full -translate-y-1/2">
        6 projects
      </div>
      <div className="absolute left-[29.62px] top-[37.42px] text-white text-[20px] font-semibold w-[258.32px] text-left transform -translate-y-1/2">
        Projects
      </div>
    </>
  );
}

function ProjectBlock({ top, bottom, left, right }) {
  return (
    <div className="absolute" style={{ top, bottom, left, right }}>
      <div className="absolute bg-[#202124] opacity-25 rounded-[10px] inset-0 border border-[#686868] border-solid pointer-events-none" />
    </div>
  );
}

const PROJECT_BLOCKS = [
  { top: "7.35%", bottom: "76.57%", left: "4.16%", right: "48.29%" },
  { top: "25.67%", bottom: "58.25%", left: "3.73%", right: "48.72%" },
  { top: "43.98%", bottom: "39.94%", left: "3.73%", right: "48.72%" },
  { top: "61.77%", bottom: "22.15%", left: "3.73%", right: "48.72%" },
  { top: "80.08%", bottom: "3.83%", left: "3.84%", right: "48.61%" },
];

export default function Frame2() {
  return (
    <div className="relative w-full h-full">
      <BackgroundCard />
      <HeaderInfo />
      {PROJECT_BLOCKS.map((block, i) => (
        <ProjectBlock key={i} {...block} />
      ))}
    </div>
  );
}
