import svgPaths from "./MainCard-svg0";
import { imgGroup, imgGroup1, imgGroup2 } from "./MainCard-svg1";

function BlueCard() {
  return (
    <div
      className="absolute h-[230px] left-[442px] top-[50px] w-[367px]"
      data-name="BlueCard"
    >
      <div className="absolute bg-gradient-to-b from-[#20212433] inset-0 rounded-[7px] to-[#498bdd33]">
        <div className="absolute border border-[#686868] border-solid inset-0 pointer-events-none rounded-[7px]" />
      </div>
    </div>
  );
}

function GreenCard() {
  return (
    <div
      className="absolute h-[230px] left-[442px] top-[318px] w-[367px]"
      data-name="GreenCard"
    >
      <div className="absolute bg-gradient-to-b from-[#20212433] inset-0 rounded-[7px] to-[#0ac16533]">
        <div className="absolute border border-[#686868] border-solid inset-0 pointer-events-none rounded-[7px]" />
      </div>
    </div>
  );
}

function PurpleCard() {
  return (
    <div
      className="absolute h-[230px] left-[853px] top-[318px] w-[367px]"
      data-name="PurpleCard"
    >
      <div className="absolute bg-gradient-to-b from-[#20212433] inset-0 rounded-[7px] to-[#8a38f533]">
        <div className="absolute border border-[#686868] border-solid inset-0 pointer-events-none rounded-[7px]" />
      </div>
    </div>
  );
}

function RedCard() {
  return (
    <div
      className="absolute h-[230px] left-[853px] top-[50px] w-[367px]"
      data-name="RedCard"
    >
      <div className="absolute bg-gradient-to-b from-[#20212433] inset-0 rounded-[7px] to-[#9a202733]">
        <div className="absolute border border-[#686868] border-solid inset-0 pointer-events-none rounded-[7px]" />
      </div>
    </div>
  );
}

function ProjIcon() {
  return (
    <div
      className="absolute h-[102px] top-[186px] translate-x-[-50%] w-[128px]"
      data-name="ProjIcon"
      style={{ left: "calc(50% - 424px)" }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 94 75"
      >
        <g id="ProjIcon">
          <path
            d={svgPaths.p373f9480}
            id="Vector"
            stroke="var(--stroke-0, #9A2027)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d={svgPaths.p19f0b100}
            id="Vector_2"
            stroke="var(--stroke-0, #9A2027)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d={svgPaths.p3688b980}
            id="Vector_3"
            stroke="var(--stroke-0, #9A2027)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d={svgPaths.p4459840}
            id="Vector_4"
            stroke="var(--stroke-0, #9A2027)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d={svgPaths.pe121e60}
            id="Vector_5"
            stroke="var(--stroke-0, #9A2027)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d={svgPaths.p3e580300}
            id="Vector_6"
            stroke="var(--stroke-0, #9A2027)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d={svgPaths.p25cd37c0}
            id="Vector_7"
            stroke="var(--stroke-0, #9A2027)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d={svgPaths.p342fdd40}
            id="Vector_8"
            stroke="var(--stroke-0, #9A2027)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d={svgPaths.p178ec800}
            id="Vector_9"
            stroke="var(--stroke-0, #9A2027)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <path
            d={svgPaths.p3a771070}
            id="Vector_10"
            stroke="var(--stroke-0, #9A2027)"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </g>
      </svg>
    </div>
  );
}

function Group() {
  return (
    <div
      className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[90px_90px]"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup}')` }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 90 90"
      >
        <g id="Group">
          <path
            d="M90 0H0V90H90V0Z"
            fill="var(--fill-0, #040606)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group />
    </div>
  );
}

function Group1() {
  return (
    <div
      className="[mask-clip:no-clip,_no-clip] [mask-composite:intersect,_intersect] [mask-mode:alpha,_alpha] [mask-repeat:no-repeat,_no-repeat] absolute inset-0 mask-position-[7.031px,_7.192px_0px,_0.201px] mask-size-[82.969px_90px,_82.81px_89.804px]"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup1}'), url('${imgGroup2}')` }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 90 90"
      >
        <g id="Group">
          <path
            d="M90 0H0V90H90V0Z"
            fill="var(--fill-0, #498BDD)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup1() {
  return (
    <div
      className="absolute bottom-[-0.005%] contents left-[7.991%] right-[-0.003%] top-[0.223%]"
      data-name="Clip path group"
    >
      <Group1 />
    </div>
  );
}

function Group2() {
  return (
    <div
      className="absolute bottom-[-0.005%] contents left-[7.991%] right-[-0.003%] top-[0.223%]"
      data-name="Group"
    >
      <ClipPathGroup1 />
    </div>
  );
}

function ClipPathGroup2() {
  return (
    <div
      className="absolute bottom-0 contents left-[7.812%] right-0 top-0"
      data-name="Clip path group"
    >
      <Group2 />
    </div>
  );
}

function C78F532Ed5() {
  return (
    <div className="absolute contents inset-0" data-name="c78f532ed5">
      <ClipPathGroup />
      <ClipPathGroup2 />
    </div>
  );
}

function ChrioIcons155() {
  return (
    <div
      className="absolute left-[353px] overflow-clip size-[90px] top-[94px]"
      data-name="Chrio Icons (15) 5"
    >
      <C78F532Ed5 />
    </div>
  );
}

function Group3() {
  return (
    <div
      className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[90px_90px]"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup}')` }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 90 90"
      >
        <g id="Group">
          <path
            d="M90 0H0V90H90V0Z"
            fill="var(--fill-0, #040606)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup3() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group3 />
    </div>
  );
}

function Group4() {
  return (
    <div
      className="[mask-clip:no-clip,_no-clip] [mask-composite:intersect,_intersect] [mask-mode:alpha,_alpha] [mask-repeat:no-repeat,_no-repeat] absolute inset-0 mask-position-[7.031px,_7.192px_0px,_0.201px] mask-size-[82.969px_90px,_82.81px_89.804px]"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup1}'), url('${imgGroup2}')` }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 90 90"
      >
        <g id="Group">
          <path
            d="M90 0H0V90H90V0Z"
            fill="var(--fill-0, #0AC165)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup4() {
  return (
    <div
      className="absolute bottom-[-0.005%] contents left-[7.991%] right-[-0.003%] top-[0.223%]"
      data-name="Clip path group"
    >
      <Group4 />
    </div>
  );
}

function Group5() {
  return (
    <div
      className="absolute bottom-[-0.005%] contents left-[7.991%] right-[-0.003%] top-[0.223%]"
      data-name="Group"
    >
      <ClipPathGroup4 />
    </div>
  );
}

function ClipPathGroup5() {
  return (
    <div
      className="absolute bottom-0 contents left-[7.812%] right-0 top-0"
      data-name="Clip path group"
    >
      <Group5 />
    </div>
  );
}

function C78F532Ed6() {
  return (
    <div className="absolute contents inset-0" data-name="c78f532ed5">
      <ClipPathGroup3 />
      <ClipPathGroup5 />
    </div>
  );
}

function ChrioIcons157() {
  return (
    <div
      className="absolute left-[353px] overflow-clip size-[90px] top-[286px]"
      data-name="Chrio Icons (15) 7"
    >
      <C78F532Ed6 />
    </div>
  );
}

function Group6() {
  return (
    <div
      className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[90px_90px]"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup}')` }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 90 90"
      >
        <g id="Group">
          <path
            d="M90 0H0V90H90V0Z"
            fill="var(--fill-0, #040606)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup6() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group6 />
    </div>
  );
}

function Group7() {
  return (
    <div
      className="[mask-clip:no-clip,_no-clip] [mask-composite:intersect,_intersect] [mask-mode:alpha,_alpha] [mask-repeat:no-repeat,_no-repeat] absolute inset-0 mask-position-[7.031px,_7.192px_0px,_0.201px] mask-size-[82.969px_90px,_82.81px_89.804px]"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup1}'), url('${imgGroup2}')` }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 90 90"
      >
        <g id="Group">
          <path
            d="M90 0H0V90H90V0Z"
            fill="var(--fill-0, #8A38F5)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup7() {
  return (
    <div
      className="absolute bottom-[-0.005%] contents left-[7.991%] right-[-0.003%] top-[0.223%]"
      data-name="Clip path group"
    >
      <Group7 />
    </div>
  );
}

function Group8() {
  return (
    <div
      className="absolute bottom-[-0.005%] contents left-[7.991%] right-[-0.003%] top-[0.223%]"
      data-name="Group"
    >
      <ClipPathGroup7 />
    </div>
  );
}

function ClipPathGroup8() {
  return (
    <div
      className="absolute bottom-0 contents left-[7.812%] right-0 top-0"
      data-name="Clip path group"
    >
      <Group8 />
    </div>
  );
}

function C78F532Ed7() {
  return (
    <div className="absolute contents inset-0" data-name="c78f532ed5">
      <ClipPathGroup6 />
      <ClipPathGroup8 />
    </div>
  );
}

function ChrioIcons158() {
  return (
    <div
      className="absolute left-[656px] overflow-clip size-[90px] top-[286px]"
      data-name="Chrio Icons (15) 8"
    >
      <C78F532Ed7 />
    </div>
  );
}

function Group9() {
  return (
    <div
      className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px] mask-size-[90px_90px]"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup}')` }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 90 90"
      >
        <g id="Group">
          <path
            d="M90 0H0V90H90V0Z"
            fill="var(--fill-0, #040606)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup9() {
  return (
    <div className="absolute contents inset-0" data-name="Clip path group">
      <Group9 />
    </div>
  );
}

function Group10() {
  return (
    <div
      className="[mask-clip:no-clip,_no-clip] [mask-composite:intersect,_intersect] [mask-mode:alpha,_alpha] [mask-repeat:no-repeat,_no-repeat] absolute inset-0 mask-position-[7.031px,_7.192px_0px,_0.201px] mask-size-[82.969px_90px,_82.81px_89.804px]"
      data-name="Group"
      style={{ maskImage: `url('${imgGroup1}'), url('${imgGroup2}')` }}
    >
      <svg
        className="block size-full"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 90 90"
      >
        <g id="Group">
          <path
            d="M90 0H0V90H90V0Z"
            fill="var(--fill-0, #9A2027)"
            id="Vector"
          />
        </g>
      </svg>
    </div>
  );
}

function ClipPathGroup10() {
  return (
    <div
      className="absolute bottom-[-0.005%] contents left-[7.991%] right-[-0.003%] top-[0.223%]"
      data-name="Clip path group"
    >
      <Group10 />
    </div>
  );
}

function Group11() {
  return (
    <div
      className="absolute bottom-[-0.005%] contents left-[7.991%] right-[-0.003%] top-[0.223%]"
      data-name="Group"
    >
      <ClipPathGroup10 />
    </div>
  );
}

function ClipPathGroup11() {
  return (
    <div
      className="absolute bottom-0 contents left-[7.812%] right-0 top-0"
      data-name="Clip path group"
    >
      <Group11 />
    </div>
  );
}

function C78F532Ed8() {
  return (
    <div className="absolute contents inset-0" data-name="c78f532ed5">
      <ClipPathGroup9 />
      <ClipPathGroup11 />
    </div>
  );
}

function ChrioIcons156() {
  return (
    <div
      className="absolute left-[654px] overflow-clip size-[90px] top-[94px]"
      data-name="Chrio Icons (15) 6"
    >
      <C78F532Ed8 />
    </div>
  );
}

export default function Group38() {
  // ✅ Move the Card component here
  const Card = ({ title, color, label1, label2, percentage }) => {
    const colors = {
      blue: "#498BDD",
      red: "#9A2027",
      green: "#0AC165",
      purple: "#8A38F5"
    };

    const gradientClasses = {
      blue: "bg-gradient-to-b from-[#20212433] to-[#498bdd33]",
      red: "bg-gradient-to-b from-[#20212433] to-[#9a202733]",
      green: "bg-gradient-to-b from-[#20212433] to-[#0ac16533]",
      purple: "bg-gradient-to-b from-[#20212433] to-[#8a38f533]"
    };

    return (
      <div
        className={`relative ${gradientClasses[color]} rounded-lg border border-[#686868] h-[230px] flex flex-col py-4`}
      >
        {/* Title - centered at top */}
        <div className="flex justify-center">
          <p className="text-white text-3xl font-poppins">{title}</p>
        </div>

        {/* Middle section with progress bar and labels */}
        <div className="flex-1 flex items-center justify-between px-6 mt-5">
          {/* Progress bar - aligned left */}
          <div className="relative">
          <svg width="140" height="140" viewBox="0 0 110 110">
  <circle
    cx="55"
    cy="55"
    r="46"
    stroke="#000"
    strokeWidth="9"
    fill="none"
  />
  <circle
    cx="55"
    cy="55"
    r="46"
    stroke={colors[color]}
    strokeWidth="9"
    fill="none"
    strokeDasharray={2 * Math.PI * 46}
    strokeDashoffset={(1 - percentage / 100) * 2 * Math.PI * 46}
    strokeLinecap="round"
    style={{
      transition: "stroke-dashoffset 0.5s",
      transform: "rotate(-90deg)",
      transformOrigin: "50% 50%"
    }}
  />
              <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="white"
                fontSize="23"
                fontWeight="thin"
              >
                {percentage}%
              </text>
            </svg>
          </div>

          {/* Labels - aligned right */}
          <div className="text-white text-xl text-right leading-snug mr-10">
            <p>{label1}</p>
            <p>{label2}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="relative size-full">
      {/* Main dashboard container */}
      <div className="relative w-[1276px] h-[605px] bg-[#0f0f10] rounded-[14px] border border-[#686868] flex">
        {/* Left Section */}
        <div className="relative w-[450px] h-full flex flex-col items-center justify-center">
          {/* Icon */}
          <div className="relative h-[102px] w-[128px] mb-8">
            <svg
              className="block size-full"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 94 75"
            >
              <g id="ProjIcon">
                <path
                  d={svgPaths.p373f9480}
                  id="Vector"
                  stroke="var(--stroke-0, #9A2027)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
                <path
                  d={svgPaths.p19f0b100}
                  id="Vector_2"
                  stroke="var(--stroke-0, #9A2027)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
                <path
                  d={svgPaths.p3688b980}
                  id="Vector_3"
                  stroke="var(--stroke-0, #9A2027)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
                <path
                  d={svgPaths.p4459840}
                  id="Vector_4"
                  stroke="var(--stroke-0, #9A2027)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
                <path
                  d={svgPaths.pe121e60}
                  id="Vector_5"
                  stroke="var(--stroke-0, #9A2027)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
                <path
                  d={svgPaths.p3e580300}
                  id="Vector_6"
                  stroke="var(--stroke-0, #9A2027)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
                <path
                  d={svgPaths.p25cd37c0}
                  id="Vector_7"
                  stroke="var(--stroke-0, #9A2027)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
                <path
                  d={svgPaths.p342fdd40}
                  id="Vector_8"
                  stroke="var(--stroke-0, #9A2027)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
                <path
                  d={svgPaths.p178ec800}
                  id="Vector_9"
                  stroke="var(--stroke-0, #9A2027)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
                <path
                  d={svgPaths.p3a771070}
                  id="Vector_10"
                  stroke="var(--stroke-0, #9A2027)"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </g>
            </svg>
          </div>
          {/* Title */}
          <div className="flex flex-col font-['Poppins:SemiBold',_sans-serif] h-[94px] justify-center not-italic text-[#ffffff] text-[34px] text-center w-[286px]">
            <p className="block leading-[normal]">PROJECT DASHBOARD</p>
          </div>
        </div>

        {/* ✅ Right Section - Grid of Cards */}
        <div className="relative flex-1 h-full p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8 mr-5">
            <Card title="Projects" color="blue" label1="Active: 8" label2="Total: 12" percentage={67} />
            <Card title="Deadlines" color="red" label1="Met: 8" label2="Total: 12" percentage={67} />
            <Card title="Milestones" color="green" label1="Achieved: 8" label2="Total: 12" percentage={67} />
            <Card title="Tasks" color="purple" label1="Completed: 8" label2="Total: 12" percentage={67} />
          </div>
        </div>
      </div>
    </div>
  );
}