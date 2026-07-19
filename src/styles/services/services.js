export const servicesStyles = {
  section: "bg-[#F0F4FF] py-[64px] sm:py-[96px]",
  wrapper: "max-w-[1200px] mx-auto px-6 sm:px-8",
  headerRow:
    "flex flex-col items-start justify-start mb-[40px] sm:mb-[56px] gap-6 w-full",
  titleArea: "w-full max-w-3xl text-left",
  pillLine: "flex items-center gap-2.5 mb-3.5",
  pillLineBar: "w-5.5 h-0.5 bg-[#2563EB] rounded-sm",
  pillWrapper:
    "px-[12px] py-[4px] bg-[#EFF6FF] border border-[#DBEAFE] rounded-[100px]",
  pillText:
    "text-[11px] font-bold font-inter text-[#2563EB] tracking-[0.08em] uppercase",
  mainHeading:
    "font-syne font-extrabold text-[32px] sm:text-[clamp(28px,3.5vw,46px)] text-[#050E21] tracking-[-0.04em] leading-[1.1]",
  subHeading:
    "text-[14px] sm:text-[15px] text-[#475569] font-inter leading-[1.7] mt-[12px] max-w-2xl text-left",
  tabSection: "w-full mt-2",
  tabMobileGrid: "grid grid-cols-2 sm:grid-cols-4 gap-2.5 w-full",
  tabDesktopRow:
    "inline-flex flex-wrap items-center gap-2.5 p-2 bg-white border border-slate-200 rounded-xl shadow-sm transition-all duration-300",
  tabBtnMobile:
    "w-full min-w-0 px-3 py-2.5 rounded-lg text-[12px] font-semibold font-inter cursor-pointer text-center outline-none border-none transition-all duration-200",
  tabBtnDesktop:
    "px-4.5 py-[11px] rounded-lg text-[13.5px] font-bold font-inter cursor-pointer border-none transition-all duration-300 flex items-center gap-2 whitespace-nowrap outline-none shrink-0",
  tabBtnActive:
    "bg-[#2563EB] text-white shadow-[0_4px_12px_rgba(37,99,235,0.25)]",
  tabBtnInactive:
    "bg-transparent text-[#475569] hover:bg-[#EFF6FF] hover:text-[#2563EB]",
  tabCounter:
    "text-[10px] font-bold px-[6px] py-[1px] rounded-[4px] transition-all duration-200",
  tabCounterActive: "bg-white/20 text-white",
  tabCounterInactive:
    "bg-[#F1F5F9] text-[#94A3B8] group-hover:bg-[#DBEAFE] group-hover:text-[#2563EB]",
  pillarWrapper: "mb-16 last:mb-0 animate-fade-in-up",
  pillarHeader: "flex items-center gap-4 mb-8 pb-3 border-b border-slate-200",
  pillarTitle:
    "font-syne font-extrabold text-xl sm:text-2xl text-[#0F172A] tracking-tight",
  pillarBadge:
    "px-2.5 py-0.5 bg-[#EFF6FF] text-[#2563EB] text-[10px] font-bold rounded-full font-inter tracking-wider uppercase border border-[#DBEAFE]",
  grid: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 auto-rows-fr",
  card: "group relative flex flex-col bg-white rounded-xl p-5 border border-slate-200 shadow–sm transition-all duration-300 ease-out hover:-translate-y-1.5 hover:shadow-[0_20px_30px_-10px_rgba(37,99,235,0.12)] hover:border-[#BFDBFE] no-underline overflow-hidden h-full",
  cardHoverBg:
    "absolute inset-0 bg-gradient-to-br from-blue-50/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300",
  cardContent: "relative z-10 flex flex-col h-full w-full",
  cardTopRow: "flex items-start justify-between mb-4",
  iconBox:
    "w-10 h-10 rounded-lg flex items-center justify-center border transition-transform duration-300 group-hover:scale-105 shadow-sm shrink-0",
  cardArrow:
    "w-6 h-6 rounded-full flex items-center justify-center bg-slate-50 border border-slate-100 text-slate-400 opacity-0 transform -translate-y-0.5 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shrink-0",
  cardTitle:
    "font-syne font-bold text-base text-[#050E21] mb-1.5 leading-snug tracking-tight group-hover:text-[#2563EB] transition-colors duration-300",
  cardDesc: "text-[12.5px] text-[#475569] font-inter leading-relaxed mb-5",
  tagBox: "flex gap-1.5 flex-wrap mt-auto pt-3.5 border-t border-slate-100",
  tagItem:
    "text-[10px] font-semibold font-inter px-2.5 py-1 rounded-full border bg-slate-50 text-slate-600 border-slate-200 transition-colors duration-300 group-hover:border-[#BFDBFE] group-hover:bg-blue-50 group-hover:text-[#2563EB]",
  detailPageWrapper: "min-h-screen bg-[#F0F4FF]",
  detailTopNav:
    "flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4",
  detailShell:
    "bg-white rounded-[16px] shadow-[0_8px_30px_rgba(15,23,42,0.04)] border border-slate-200 overflow-hidden",
  detailGrid: "grid grid-cols-1 lg:grid-cols-[1.1fr_1fr]",
  detailMedia: "relative min-h-[300px] lg:h-auto w-full bg-slate-100",
  detailImg: "absolute inset-0 w-full h-full object-cover",
  detailOverlay:
    "absolute inset-0 bg-gradient-to-b from-[#050E21] via-[#050E21]/50 to-transparent",
  detailMetaBox: "absolute top-[-22px] left-0 p-8 lg:p-12 w-full mt-4",
  detailMetaBadge:
    "inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-4",
  detailMetaDot: "w-1.5 h-1.5 rounded-full bg-[#60A5FA]",
  detailMetaText:
    "text-[10px] font-bold font-inter text-white tracking-[0.1em] uppercase",
  detailMainTitle:
    "font-syne font-extrabold text-4xl lg:text-[44px] text-white tracking-[-0.03em] leading-[1.1]",
  detailContent: "p-8 lg:p-12 flex flex-col h-full bg-white relative",
  detailTopControl: "flex flex-wrap items-center justify-between gap-4 mb-8",
  detailTagWrapper: "flex flex-wrap gap-2.5",
  detailMiniTag:
    "text-[11px] font-bold font-inter px-3 py-1 rounded-[4px] border tracking-[0.05em] uppercase",
  backBtn:
    "px-4 py-2 bg-white text-slate-600 text-[13px] font-semibold font-inter rounded-[6px] border border-slate-200 hover:bg-slate-50 hover:text-[#2563EB] hover:border-[#BFDBFE] transition-all",
  detailParagraph: "text-[14px] font-inter text-slate-600 leading-[1.8] mb-10",
  detailBlockHeader: "flex items-center gap-2.5 mb-5",
  detailBlockDash: "w-5 h-0.5 bg-[#2563EB] rounded-sm",
  detailBlockTitle:
    "text-[11px] font-bold font-inter text-[#2563EB] tracking-[0.12em] uppercase",
  inclusionGrid: "grid grid-cols-1 sm:grid-cols-2 gap-3.5",
  inclusionCard:
    "bg-[#F8FAFC] border border-slate-200 rounded-[6px] p-4 text-[13px] font-inter text-slate-700 font-medium transition-all duration-300 ease-in-out hover:-translate-y-1.5 hover:scale-[1.02] hover:shadow-[0_12px_28px_rgba(37,99,235,0.12)] hover:border-[#BFDBFE] cursor-pointer",
  processStack: "flex flex-col border-t border-slate-100",
  processItem: "flex items-center gap-4 py-4 border-b border-slate-100",
  processBadge:
    "w-6 h-6 shrink-0 flex items-center justify-center rounded-[4px] text-[11px] font-bold font-inter",
  processText: "text-[13px] font-inter text-slate-600 font-medium",
  detailFooterActions:
    "mt-10 pt-8 border-t border-slate-100 flex flex-wrap items-center gap-4",
  portfolioSection: "mt-16 pt-12 border-t border-slate-200",
  portfolioHeader:
    "font-syne font-extrabold text-[28px] text-[#050E21] mb-8 leading-tight tracking-[-0.02em]",
  portfolioGrid: "grid grid-cols-1 md:grid-cols-2 gap-8",
  portfolioCard:
    "group flex flex-col bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden transition-all duration-700 ease-out transform translate-y-12 opacity-0",
  portfolioCardVisible:
    "translate-y-0 opacity-100 hover:-translate-y-2 hover:shadow-[0_20px_40px_-12px_rgba(37,99,235,0.12)] hover:border-[#BFDBFE]",
  browserHeader:
    "flex items-center gap-2 px-4 py-3 bg-[#F8FAFC] border-b border-slate-100",
  browserDot: "w-2.5 h-2.5 rounded-full opacity-80",
  iframeContainer: "relative w-full pt-[65%] bg-slate-50 overflow-hidden",
  iframe:
    "absolute top-0 left-0 w-full h-full object-cover pointer-events-none group-hover:pointer-events-auto transition-opacity",
  portfolioMeta:
    "p-5 flex items-center justify-between border-t border-slate-50 bg-white",
  portfolioTitle: "font-syne font-bold text-[16px] text-[#050E21]",
  portfolioLink:
    "text-[13px] font-semibold font-inter text-[#2563EB] flex items-center gap-1.5 transition-colors hover:text-[#1D4ED8]",
};
