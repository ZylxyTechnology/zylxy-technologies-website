export const leadershipStyles = {
  section:
    "bg-background border-t border-border",
  wrapper: "relative z-10",
  headerRow:
    "flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4",
  titleArea: "text-left",
  pillLine: "inline-flex items-center gap-2.5 mb-2",
  pillLineBar: "w-[22px] h-0.5 bg-[#60A5FA] rounded-sm",
  pillText:
    "text-[13px] font-bold font-inter text-[#60A5FA] tracking-widest uppercase",
  mainHeading:
    "font-syne font-extrabold text-3xl md:text-4xl lg:text-[44px] text-white tracking-[-0.02em] leading-[1.05] mt-2",
  subHeading:
    "text-sm text-white/50 font-inter leading-relaxed max-w-[340px] text-left md:text-right lg:mb-1",
  grid: "grid grid-cols-1 md:grid-cols-12 gap-6 w-full relative z-10",
  gridGlow: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[radial-gradient(circle,rgba(37,99,235,0.06)_0%,transparent_70%)] pointer-events-none z-0",
  
  // Card Types
  cardBase: "group relative bg-[#070D1E]/40 backdrop-blur-2xl border border-white/[0.05] rounded-3xl overflow-hidden flex flex-col transition-all duration-700 ease-enterprise hover:border-white/[0.12] hover:bg-[#070D1E]/60 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.05)]",
  cardFeatured: "md:col-span-12 lg:col-span-8 min-h-[380px] p-10 flex-col sm:flex-row gap-10",
  cardStandard: "md:col-span-6 lg:col-span-4 p-8 gap-6",
  cardWide: "md:col-span-6 lg:col-span-6 p-8 gap-6",
  cardGlow: "absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.03),transparent_60%)] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700",
  profileRow: "flex items-start sm:items-center gap-5 relative z-10 shrink-0",
  avatarWrapperFeatured: "relative w-[96px] h-[96px] shrink-0",
  avatarWrapperStandard: "relative w-[64px] h-[64px] shrink-0",
  avatarRing: "absolute inset-[-6px] rounded-[20px] border border-white/5 opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-enterprise",
  avatarBox:
    "w-full h-full rounded-2xl flex items-center justify-center relative z-10 transition-transform duration-700 ease-enterprise group-hover:scale-[1.02] shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]",
  avatarTextFeatured:
    "font-syne font-extrabold text-[28px] text-white tracking-tight leading-none drop-shadow-md",
  avatarTextStandard:
    "font-syne font-extrabold text-[20px] text-white tracking-tight leading-none drop-shadow-md",
  metaDetails: "flex flex-col relative z-10 gap-0.5",
  leaderName:
    "font-syne font-bold text-[18px] md:text-[22px] text-white tracking-tight leading-tight group-hover:text-[#60A5FA] transition-colors duration-500",
  leaderRole: "text-[12px] font-bold font-inter text-[#60A5FA] tracking-wide uppercase",
  leaderSince: "text-[11px] text-white/40 font-inter mt-1",
  
  contentColFeatured: "flex flex-col gap-6 flex-grow justify-center relative z-10",
  contentColStandard: "flex flex-col gap-6 flex-grow relative z-10",
  
  leaderDescFeatured: "text-[14px] md:text-[15px] text-white/70 font-inter leading-[1.7] max-w-[500px]",
  leaderDescStandard: "text-[13px] text-white/60 font-inter leading-[1.7]",
  
  tagBox: "flex gap-2.5 flex-wrap mt-auto pt-5 border-t border-white/[0.04]",
  tagItem:
    "text-[10px] font-bold font-inter tracking-wide px-3.5 py-1.5 rounded-full border border-white/[0.05] bg-white/[0.02] text-white/50 transition-colors duration-500 group-hover:border-[#60A5FA]/20 group-hover:bg-[#60A5FA]/5 group-hover:text-[#60A5FA]",
};
