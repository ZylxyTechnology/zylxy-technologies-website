export const introFeatureStyles = {
  section: "w-full bg-[#FFF8F5] py-24 px-6 sm:px-8 border-b border-[#F0E8E3]",
  container:
    "max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center",
  leftCol: "lg:col-span-5 flex justify-center items-center relative",
  workflowWheelWrapper:
    "relative w-[320px] h-[340px] flex items-center justify-center select-none",
  wheelSvg:
    "w-full h-full transform transition-transform duration-700 ease-out",
  wheelTrack: "stroke-[#FFF0EB] fill-none stroke-2",
  nodeBase: "cursor-pointer transition-all duration-300 fill-white stroke-2",
  nodeNormal: "stroke-[#FF9A73] r-2.5 hover:r-3.5 hover:fill-[#FFF0EB]",
  nodeActive: "stroke-[#FF7A59] fill-[#FF7A59] r-4 shadow-lg",
  wheelCoreContent:
    "absolute w-40 h-40 rounded-full bg-white border border-[#F0E8E3] shadow-xl flex flex-col items-center justify-center text-center p-4 z-10 transition-all duration-300",
  stepNum:
    "font-lexend font-extrabold text-4xl text-[#FF7A59] leading-none mb-1",
  stepLabel:
    "font-inter text-xs font-bold uppercase tracking-widest text-[#1B1F3A]",
  rightCol: "lg:col-span-7 flex flex-col items-start text-left",
  heading:
    "font-lexend font-bold text-3xl sm:text-4xl text-[#1B1F3A] tracking-tight mb-4",
  subtext:
    "font-inter text-base text-[#516F8D] leading-relaxed mb-8 font-medium",
  phasesWrapper: "flex flex-col gap-5 w-full mb-8",
  phaseCard:
    "w-full p-5 rounded-xl border border-[#F0E8E3] transition-all duration-300 cursor-pointer text-left bg-white shadow-xs hover:border-[#FEDDCC]",
  phaseCardActive: "border-[#FF7A59] bg-[#FFF9F6] shadow-md translate-x-1",
  phaseHeader: "flex flex-wrap items-center gap-3 mb-4",
  phaseTagBase:
    "font-inter text-[10px] font-extrabold tracking-widest uppercase px-2.5 py-1 rounded-md transition-colors duration-200 shrink-0",
  phaseTagNormal: "bg-[#FFF0EB] text-[#FF7A59]",
  phaseTagActive: "bg-[#FF7A59] text-white",
  phaseTitleBase:
    "font-lexend font-bold text-base transition-colors duration-200",
  phaseTitleNormal: "text-[#1B1F3A]",
  phaseTitleActive: "text-[#FF7A59]",
  contentGrid: "flex flex-col gap-3 border-l border-[#F0E8E3] pl-4 ml-1",
  textBlock: "flex flex-col gap-0.5",
  label: "font-inter text-[11px] font-bold uppercase tracking-wider",
  challengeLabel: "text-[#D97706]",
  solutionLabel: "text-[#FF7A59]",
  bodyText: "font-inter text-sm leading-relaxed text-[#677489]",
  btnRow: "flex flex-row items-center gap-4 w-full sm:w-auto flex-wrap",
  primaryBtn:
    "bg-[#FF7A59] hover:bg-[#E8673F] text-white font-inter font-bold text-sm px-6 py-3.5 rounded-[6px] shadow-sm hover:shadow transition-all cursor-pointer border-none",
  secondaryBtn:
    "border border-[#FF7A59] hover:bg-[#FFF6F3] text-[#FF7A59] font-inter font-bold text-sm px-6 py-3.5 rounded-[6px] transition-all bg-white cursor-pointer",
};
