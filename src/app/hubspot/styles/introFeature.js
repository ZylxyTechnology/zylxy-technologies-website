export const introFeatureStyles = {
  section:
    "w-full bg-[#FFF8F5] py-24 px-6 sm:px-8 border-b border-[#F0E8E3] overflow-hidden",
  container:
    "max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center",

  leftCol:
    "lg:col-span-5 flex justify-center items-center relative min-h-[460px] bg-white rounded-2xl border border-[#F0E8E3] p-8 shadow-sm overflow-hidden",
  bgGridDecor:
    "absolute inset-0 opacity-[0.03] pointer-events-none select-none bg-[radial-gradient(#1B1F3A_1px,transparent_1px)] [background-size:16px_16px]",
  radialGlowAccent:
    "absolute w-[300px] h-[300px] rounded-full bg-[#FF7A59]/5 blur-3xl pointer-events-none -top-12 -left-12",

  // Upgraded layout container with active transformation listeners
  workflowWheelWrapper:
    "relative w-[340px] h-[340px] flex items-center justify-center select-none z-10 transition-all duration-700 ease-in-out",
  wheelSvg:
    "w-full h-full transform transition-transform duration-700 ease-in-out drop-shadow-[0_4px_12px_rgba(27,31,58,0.02)]",
  wheelTrack: "stroke-[#FFF0EB] fill-none stroke-[3]",

  nodeBase:
    "cursor-pointer transition-all duration-500 ease-in-out fill-white stroke-[3]",
  nodeNormal: "stroke-[#FF9A73] r-[6] hover:r-[8] hover:fill-[#FFF0EB]",
  nodeActive:
    "stroke-[#FF7A59] fill-[#FF7A59] r-[10] drop-shadow-[0_0_8px_rgba(255,122,89,0.5)]",

  wheelCoreContent:
    "absolute w-44 h-44 rounded-full bg-white border border-[#F0E8E3] shadow-xl flex flex-col items-center justify-center text-center p-4 z-10 transition-all duration-500 transform hover:scale-102",
  stepNum:
    "font-lexend font-extrabold text-5xl text-[#FF7A59] tracking-tight leading-none mb-1.5",
  stepLabel:
    "font-inter text-xs font-bold uppercase tracking-widest text-[#1B1F3A]",
  stepIndicatorDots: "flex gap-1 mt-2",
  dotBase: "w-1.5 h-1.5 rounded-full transition-all duration-300",
  dotNormal: "bg-[#FFF0EB]",
  dotActive: "bg-[#FF7A59] w-3.5",

  rightCol: "lg:col-span-7 flex flex-col items-start text-left",
  heading:
    "font-lexend font-bold text-3xl sm:text-4xl lg:text-[40px] text-[#1B1F3A] tracking-tight mb-4 leading-tight",
  subtext:
    "font-inter text-base text-[#516F8D] leading-relaxed mb-8 font-medium max-w-[680px]",
  phasesWrapper: "flex flex-col gap-4 w-full mb-8",
  phaseCard:
    "w-full p-5 rounded-xl border border-[#F0E8E3] transition-all duration-300 cursor-pointer text-left bg-white shadow-xs hover:border-[#FEDDCC] group/card",
  phaseCardActive: "border-[#FF7A59] bg-[#FFF9F6] shadow-md translate-x-1",
  phaseHeader: "flex flex-wrap items-center gap-3 mb-3.5",
  phaseTagBase:
    "font-inter text-[10px] font-extrabold tracking-widest uppercase px-2.5 py-1 rounded-md transition-colors duration-300 shrink-0",
  phaseTagNormal:
    "bg-[#FFF0EB] text-[#FF7A59] group-hover/card:bg-[#FF7A59] group-hover/card:text-white",
  phaseTagActive: "bg-[#FF7A59] text-white",
  phaseTitleBase:
    "font-lexend font-bold text-base transition-colors duration-200 tracking-tight",
  phaseTitleNormal: "text-[#1B1F3A] group-hover/card:text-[#FF7A59]",
  phaseTitleActive: "text-[#FF7A59]",
  contentGrid:
    "flex flex-col gap-3.5 border-l-2 border-[#F0E8E3] pl-4 ml-1 transition-all duration-300",
  textBlock: "flex flex-col gap-1 transition-opacity duration-300",
  label: "font-inter text-[11px] font-bold uppercase tracking-widest",
  challengeLabel: "text-[#D97706]",
  solutionLabel: "text-[#FF7A59]",
  bodyText: "font-inter text-sm leading-relaxed text-[#677489] font-medium",
  btnRow: "flex flex-row items-center gap-4 w-full sm:w-auto flex-wrap mt-2",
  primaryBtn:
    "bg-[#FF7A59] hover:bg-[#E8673F] text-white font-inter font-bold text-sm px-6 py-3.5 rounded-lg shadow-sm hover:shadow transition-all cursor-pointer border-none no-underline text-center",
  secondaryBtn:
    "border border-[#FF7A59] hover:bg-[#FFF6F3] text-[#FF7A59] font-inter font-bold text-sm px-6 py-3.5 rounded-lg transition-all bg-white cursor-pointer no-underline text-center",
};
