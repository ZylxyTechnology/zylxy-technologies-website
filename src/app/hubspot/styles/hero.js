export const heroStyles = {
  section: "w-full bg-[#FFF8F5] py-20 border-b border-[#F0E8E3]",
  container:
    "max-w-[1280px] mx-auto px-6 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative",
  leftCol: "lg:col-span-6 flex flex-col items-start text-left",
  badge:
    "inline-flex items-center gap-2 font-inter text-xs font-bold text-[#FF7A59] tracking-widest uppercase mb-4 bg-[#FFF0EB] px-3 py-1.5 rounded-full border border-[#FEDDCC]",
  badgeDot: "w-1.5 h-1.5 rounded-full bg-[#FF7A59]",
  h1: "font-lexend font-bold text-3xl sm:text-4xl lg:text-[44px] text-[#1B1F3A] tracking-tight leading-[1.15] mb-2",
  h2Sub:
    "font-lexend font-bold text-2xl sm:text-3xl lg:text-[36px] text-[#FF7A59] tracking-tight mb-6 leading-tight",
  description:
    "font-inter text-base sm:text-lg text-[#677489] leading-relaxed mb-8 max-w-[540px]",
  btnRow: "flex flex-row items-center gap-3 mb-6 flex-wrap",
  primaryBtn:
    "bg-[#FF7A59] hover:bg-[#E8673F] text-white font-inter font-bold text-sm px-7 py-3.5 rounded-[10px] shadow-sm hover:shadow-md transition-all duration-200 active:translate-y-0 cursor-pointer border-none",
  secondaryBtn:
    "border border-[#FF7A59] hover:bg-[#FFF0EB] text-[#FF7A59] font-inter font-bold text-sm px-7 py-3.5 rounded-[10px] transition-all duration-200 active:translate-y-0 bg-white cursor-pointer",
  trustRow: "flex flex-wrap items-center gap-3",
  trustItem:
    "font-inter text-xs font-semibold text-[#677489] flex items-center gap-1.5",
  trustDot: "w-1 h-1 rounded-full bg-[#FEDDCC]",
  trustCheck: "text-[#FF7A59]",
  rightCol: "lg:col-span-6 w-full flex justify-center lg:justify-end relative",
  mockupWrapper:
    "relative w-full max-w-[560px] flex flex-col gap-4 items-center px-2 pt-12 pb-2 group/mockup",
  circleBg:
    "absolute inset-x-0 top-10 mx-auto w-[440px] h-[440px] bg-[#FEDCD0] rounded-full opacity-40 blur-[48px] pointer-events-none",
  floatingBadges:
    "absolute top-0 left-1/2 -translate-x-1/2 z-20 flex flex-row gap-2 items-center justify-center flex-wrap w-full px-4",
  badge1:
    "inline-flex items-center gap-1.5 rounded-full bg-[#E3F2FD] border border-[#BBDEFB] px-3 py-1 text-[10px] font-bold text-[#0D47A1] shadow-xs",
  badge2:
    "inline-flex items-center gap-1.5 rounded-full bg-[#EDE7F6] border border-[#D1C4E9] px-3 py-1 text-[10px] font-bold text-[#4A148C] shadow-xs",
  badge3:
    "inline-flex items-center gap-1.5 rounded-full bg-[#E8F5E9] border border-[#C8E6C9] px-3 py-1 text-[10px] font-bold text-[#1B5E20] shadow-xs",
  cardGrid: "relative z-10 w-full grid grid-cols-1 sm:grid-cols-2 gap-4",
  contactCard:
    "w-full rounded-[16px] border border-[#F0E8E3] bg-white p-5 shadow-[0_12px_32px_rgba(15,23,42,0.06)] transition-all duration-200 hover:shadow-[0_16px_40px_rgba(15,23,42,0.1)]",
  cardHeader:
    "flex items-center justify-between text-[11px] font-semibold text-[#677489] mb-4",
  backLink: "text-[#0F4F72] font-bold text-[11px]",
  actions: "text-[#677489] text-[11px]",
  contactRow: "flex items-center gap-3",
  contactAvatar:
    "relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border border-[#F0E8E3] bg-[#FFF8F5]",
  avatarImage: "w-full h-full object-cover",
  contactInfo: "flex flex-col gap-0.5 flex-grow",
  contactName: "font-lexend font-bold text-sm text-[#1B1F3A]",
  contactOrg: "font-inter text-xs font-semibold text-[#0F4F72]",
  contactRole: "font-inter text-[11px] text-[#677489]",
  contactDivider: "my-3.5 border-t border-[#F0E8E3]",
  subListTitle:
    "text-[10px] font-bold text-[#677489] uppercase tracking-wider mb-2 block text-left",
  subList: "flex flex-col gap-2 w-full",
  subContactRow:
    "flex items-center gap-2 py-1 border-b border-dashed border-[#F4F6F8] last:border-none text-left",
  subContactAvatar:
    "w-5 h-5 rounded-full bg-[#FFF0EB] text-[9px] font-bold text-[#FF7A59] flex items-center justify-center flex-shrink-0",
  subContactName: "text-xs font-medium text-[#1B1F3A] flex-1 truncate",
  subContactMeta: "text-[10px] text-[#677489]",
  automationCard:
    "w-full rounded-[16px] border border-[#F0E8E3] bg-white shadow-[0_12px_32px_rgba(15,23,42,0.06)] transition-all duration-200 hover:shadow-[0_16px_40px_rgba(15,23,42,0.1)] overflow-hidden",
  automationHeader: "bg-[#1B1F3A] px-4 py-3 flex items-center gap-2",
  automationIcon: "text-xs text-[#FF7A59]",
  automationTitle: "font-lexend font-bold text-[11px] text-white leading-tight",
  automationBody: "p-4 flex flex-col gap-2.5",
  userMsg:
    "bg-[#7C3AED] text-white text-[10px] font-medium p-2.5 rounded-[12px] rounded-tr-none self-end max-w-[90%] leading-relaxed",
  triggerLabel:
    "text-center text-[9px] font-semibold tracking-wide uppercase text-[#FF7A59] bg-[#FFF0EB] border border-[#FFE5DC] py-1 rounded-md my-0.5",
  systemMsg:
    "bg-[#F4F6F8] border border-[#E4E8ED] text-[#1B1F3A] text-[10px] p-2.5 rounded-[12px] rounded-tl-none self-start max-w-[90%] font-medium leading-relaxed",
  metricsRow: "relative z-10 w-full grid grid-cols-3 gap-3",
  metricBox:
    "rounded-[14px] border border-[#F0E8E3] bg-white p-3 shadow-[0_8px_24px_rgba(15,23,42,0.04)] text-center transition-all duration-200 hover:shadow-[0_12px_32px_rgba(15,23,42,0.06)]",
  metricLabel:
    "font-inter text-[9px] font-bold text-[#677489] uppercase tracking-wider block mb-3 leading-tight",
  metricViz: "h-14 flex items-center justify-center",
  funnelChart: "flex flex-col gap-1.5 w-full items-center px-1",
  funnelBar1:
    "h-1.5 bg-[#FF7A59] rounded-full transition-all duration-[800ms] ease-out w-0 group-[.loaded]/mockup:w-full",
  funnelBar2:
    "h-1.5 bg-[#FF9A73] rounded-full transition-all duration-[800ms] ease-out w-0 group-[.loaded]/mockup:w-[75%]",
  funnelBar3:
    "h-1.5 bg-[#FFCDBC] rounded-full transition-all duration-[800ms] ease-out w-0 group-[.loaded]/mockup:w-[50%]",
  chartBars: "flex items-end justify-center gap-2 h-11 w-full",
  chartBar1:
    "w-2 bg-[#E4E8ED] rounded-t-xs origin-bottom transition-all duration-500 ease-out scale-y-0 group-[.loaded]/mockup:scale-y-100 h-5",
  chartBar2:
    "w-2 bg-[#FF9A73] rounded-t-xs origin-bottom transition-all duration-500 ease-out scale-y-0 group-[.loaded]/mockup:scale-y-100 h-8 delay-150",
  chartBar3:
    "w-2 bg-[#FF7A59] rounded-t-xs origin-bottom transition-all duration-500 ease-out scale-y-0 group-[.loaded]/mockup:scale-y-100 h-11 delay-300",
  starsWrapper:
    "absolute top-12 right-4 flex flex-col items-center gap-1 pointer-events-none opacity-40",
  starBig: "text-[#FF3366] text-xl leading-none",
  starSmall: "text-[#FF7A59] text-xs leading-none",
};
