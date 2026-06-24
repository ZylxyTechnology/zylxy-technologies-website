export const caseStudiesStyles = {
  section:
    "bg-[#050E21] py-24 scroll-mt-28 border-t border-white/[0.06] relative overflow-hidden",
  wrapper: "max-w-[1200px] mx-auto px-8 relative z-10",
  headerRow:
    "flex flex-col md:flex-row md:items-end justify-between mb-12 gap-5",
  titleArea: "max-w-2xl",
  pillLine: "flex items-center gap-2.5 mb-2",
  pillLineBar: "w-5.5 h-0.5 mb-5 bg-[#2563EB] rounded-sm",
  pillText:
    "text-[13px] relative top-[-10] font-bold font-inter text-[#60A5FA] tracking-widest uppercase",
  mainHeading:
    "font-syne font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tighter leading-[1.05]",
  subHeading:
    "text-sm text-slate-400 font-inter leading-relaxed mt-2.5 max-w-lg",
  carouselWrapper: "relative w-full overflow-hidden touch-pan-y",
  carouselTrack: "flex transition-transform duration-500 ease-out gap-4",
  carouselSlide:
    "w-full sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)] shrink-0 select-none",
  card: "group relative bg-[#0D1B3E] border border-white/[0.08] border-t-[3px] rounded-b-[6px] p-[32px_28px] flex flex-col text-left h-full w-full transition-all duration-500 ease-out hover:translate-y-[-4px] hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)] cursor-grab active:cursor-grabbing overflow-hidden opacity-0 translate-y-8",
  cardVisible: "opacity-100 translate-y-0",
  serviceText:
    "text-[10px] font-bold font-inter tracking-[0.1em] uppercase mb-5 transition-colors duration-300 relative z-10",
  metricText:
    "font-syne font-extrabold text-[clamp(40px,4vw,56px)] text-white tracking-[-0.05em] leading-none mb-1.5 transition-transform duration-300 group-hover:scale-105 origin-left relative z-10 pointer-events-none",
  metricLabelText:
    "text-[13px] font-semibold font-inter tracking-[0.01em] mb-5 transition-colors duration-300 relative z-10 pointer-events-none",
  divider:
    "h-px bg-white/[0.08] mb-5 transition-colors duration-300 group-hover:bg-white/[0.15] relative z-10",
  clientText:
    "text-[11px] font-bold font-inter text-slate-400 tracking-[0.08em] uppercase mb-2 relative z-10 pointer-events-none",
  projectDesc:
    "text-[13px] text-slate-300 font-inter leading-[1.7] relative z-10 pointer-events-none",
  glowBackground:
    "absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-b-[6px] pointer-events-none",
  navigationControls: "flex items-center justify-between mt-10 gap-4",
  dotsContainer: "flex items-center gap-2",
  dot: "h-1.5 rounded-full transition-all duration-300 cursor-pointer",
  dotActive: "w-6 bg-[#2563EB]",
  dotInactive: "w-1.5 bg-white/20 hover:bg-white/40",
  btnGroup: "flex items-center gap-3",
  navBtn:
    "w-10 h-10 rounded-full border border-white/[0.08] bg-[#0D1B3E] text-white flex items-center justify-center transition-all duration-200 hover:bg-[#2563EB] hover:border-[#2563EB] disabled:opacity-30 disabled:hover:bg-[#0D1B3E] disabled:hover:border-white/[0.08] disabled:cursor-not-allowed select-none",
};
