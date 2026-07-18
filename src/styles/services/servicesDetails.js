export const servicesDetailsStyles = {
  pageWrapper:
    "w-full bg-[#111428] min-h-screen py-[clamp(4rem,8vw,6rem)] px-6 sm:px-8 text-white relative overflow-hidden block clearing-start",
  bgGrid:
    "absolute inset-0 opacity-[0.01] pointer-events-none bg-[radial-gradient(#FFF_1px,transparent_1px)] [background-size:32px_32px]",
  radialGlow:
    "absolute w-[min(500px,80vw)] h-[min(500px,80vw)] rounded-full bg-[#FF7A59]/5 blur-3xl -top-48 -left-48 pointer-events-none aspect-square",
  container: "max-w-7xl mx-auto w-full relative z-10",
  topHeader:
    "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-12 border-b border-white/5 pb-6",
  titleContainer: "flex flex-col gap-2",
  pillWrapper: "flex items-center gap-2",
  pillBar: "w-5 h-0.5 bg-[#FF7A59] rounded-full",
  pillText:
    "text-xs font-bold font-inter text-[#FF7A59] tracking-[0.15em] uppercase",
  mainTitle:
    "font-lexend font-extrabold text-3xl sm:text-4xl text-white tracking-tight",
  backLink:
    "group flex items-center gap-2 text-xs font-bold font-inter text-[#A3B1CC] hover:text-[#FF7A59] transition-all duration-300 bg-white/[0.02] border border border-white/10 rounded-full px-5 py-2.5 backdrop-blur-md hover:border-[#FF7A59]/30",
  backArrow: "transition-transform duration-300 group-hover:-translate-x-1",
  shellCard:
    "bg-white/[0.02] border border-white/10 rounded-3xl overflow-hidden backdrop-blur-md shadow-2xl relative z-20 transition-all duration-500 hover:border-white/15",
  mainGrid: "grid grid-cols-1 lg:grid-cols-12 gap-0",
  mediaColumn:
    "lg:col-span-5 relative min-h-[380px] lg:min-h-full overflow-hidden group",
  mediaImage:
    "absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 scale-100 group-hover:scale-105",
  mediaOverlay:
    "absolute inset-0 bg-gradient-to-t from-[#111428] via-[#111428]/40 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-[#111428]/20 lg:to-[#111428]/90 z-10",
  metaBadgeContainerMobile: "absolute bottom-8 left-8 right-8 z-20 lg:hidden",
  metaBadge:
    "inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF7A59]/10 border border-[#FF7A59]/20 text-xs font-semibold text-[#FF7A59] backdrop-blur-md mb-3",
  metaBadgeDot: "w-1.5 h-1.5 rounded-full bg-[#FF7A59] animate-pulse",
  contentColumn:
    "lg:col-span-7 p-8 sm:p-12 lg:p-16 flex flex-col justify-between bg-[#1B1F3A]/90 relative z-10",
  metaBadgeContainerWeb:
    "hidden lg:flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FF7A59]/10 border border-[#FF7A59]/20 text-xs font-semibold text-[#FF7A59] backdrop-blur-md mb-6 w-fit",
  tagsContainer: "flex flex-wrap gap-2 mb-8",
  tagItem:
    "text-[11px] font-bold font-inter tracking-wider uppercase px-3 py-1.5 rounded-md border backdrop-blur-sm transition-all duration-300",
  descriptionText:
    "text-sm sm:text-base text-[#A3B1CC] font-inter leading-relaxed mb-10 max-w-3xl font-medium",
  sectionBlock: "mb-10",
  blockHeader: "flex items-center gap-2 mb-5",
  blockDot: "w-2 h-2 rounded-full bg-[#FF7A59]",
  blockTitle:
    "text-xs font-bold font-inter text-white tracking-[0.1em] uppercase",
  featuresGrid: "grid grid-cols-1 sm:grid-cols-2 gap-3.5",
  featureCard:
    "flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5 transition-all duration-300 hover:border-[#FF7A59]/20 hover:bg-[#FF7A59]/5 hover:scale-[1.01] group/item",
  featureIcon:
    "w-4 h-4 mt-0.5 text-[#A3B1CC] group-hover/item:text-[#FF7A59] transition-colors shrink-0",
  featureText:
    "text-xs sm:text-sm font-inter text-[#A3B1CC] group-hover/item:text-white transition-colors leading-normal font-medium",
  processSection: "mb-6",
  processStack: "flex flex-col gap-3",
  processItem:
    "flex items-center gap-4 p-3.5 rounded-xl bg-white/[0.01] border border-white/5 transition-all duration-200 hover:bg-white/[0.03]",
  processBadge:
    "w-7 h-7 rounded-lg text-xs font-bold font-inter flex items-center justify-center backdrop-blur-md shrink-0 border",
  processText:
    "text-xs sm:text-sm font-inter text-[#A3B1CC] font-medium leading-none",
  ctaBlock:
    "mt-10 pt-8 border-t border-dashed border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 bg-gradient-to-r from-[#FF7A59]/5 to-transparent p-6 sm:p-8 rounded-2xl border border-[#FF7A59]/10 relative overflow-hidden group/cta",
  ctaGlow:
    "absolute top-0 right-0 w-32 h-32 bg-[#FF7A59]/5 rounded-full blur-2xl pointer-events-none group-hover/cta:bg-[#FF7A59]/10 transition-colors duration-500",
  ctaTextGroup: "flex flex-col gap-1.5 text-center sm:text-left",
  ctaLabel:
    "flex items-center justify-center sm:justify-start gap-1.5 text-xs font-bold text-[#FF7A59] tracking-wider uppercase",
  ctaSparkle: "w-3.5 h-3.5 animate-pulse",
  ctaHeading:
    "font-lexend font-bold text-lg sm:text-xl text-white tracking-tight",
  ctaButton:
    "w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 sm:px-7 sm:py-3.5 bg-[#FF7A59] text-white text-xs sm:text-[13px] font-extrabold font-inter tracking-wide uppercase rounded-xl transition-all duration-300 hover:bg-[#E66B4E] hover:-translate-y-0.5 shadow-md shadow-[#FF7A59]/10 hover:shadow-[#FF7A59]/20 active:translate-y-0 cursor-pointer border-none select-none",
  ctaBtnIcon:
    "w-4 h-4 transition-transform duration-300 group-hover/cta:translate-x-1",
  ctaBlockIcon:
    "w-4 h-4 transition-transform duration-300 group-hover/cta:translate-x-1",
  showcaseWrapper:
    "px-6 sm:px-10 lg:px-14 py-10 lg:py-14 bg-white border-t border-white/5 rounded-b-3xl",
};
