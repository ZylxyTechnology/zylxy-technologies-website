export const exploreOpportunitiesStyles = {
  section: "bg-[#050E21] py-24 scroll-mt-28 border-t border-white/[0.06]",
  wrapper: "max-w-[1200px] mx-auto px-8",

  // Hero Section
  heroContainer:
    "pt-32 pb-20 text-center relative overflow-hidden bg-[#050E21]",
  heroBadge:
    "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2563EB]/15 border border-[#2563EB]/30 text-[12px] font-bold font-inter text-[#60A5FA] tracking-wide uppercase mb-6 select-none",
  heroHeading:
    "font-syne font-extrabold text-4xl sm:text-5xl md:text-6xl text-white tracking-tighter leading-[1.05] max-w-4xl mx-auto",
  heroGradient:
    "bg-gradient-to-r from-[#60A5FA] to-[#2563EB] bg-clip-text text-transparent",
  heroDesc:
    "text-base sm:text-lg text-slate-400 font-inter leading-relaxed max-w-2xl mx-auto mt-6",
  heroSubDesc:
    "text-[11px] text-slate-500 font-inter tracking-widest mt-4 uppercase font-semibold",
  heroBtn:
    "mt-8 inline-flex items-center justify-center px-6 py-3 rounded-md bg-[#2563EB] text-white font-bold font-inter text-sm tracking-wide uppercase hover:bg-[#1D4ED8] transition-all duration-200 shadow-[0_4px_20px_rgba(37,99,235,0.15)] cursor-pointer",

  // Core Layout Headers
  headerRow:
    "flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6",
  titleArea: "text-left max-w-2xl",
  pillLine: "flex items-center gap-2.5 mb-2",
  pillLineBar: "w-5.5 h-0.5 bg-[#2563EB] rounded-sm",
  pillText:
    "text-[13px] font-bold font-inter text-[#60A5FA] tracking-widest uppercase",
  mainHeading:
    "font-syne font-extrabold text-3xl sm:text-4xl md:text-5xl text-white tracking-tighter leading-[1.05] mt-2",
  subHeading:
    "text-sm text-slate-400 font-inter leading-relaxed max-w-md text-left",

  // Benefits Grid
  benefitsGrid: "grid grid-cols-1 md:grid-cols-3 gap-6 w-full",
  benefitCard:
    "bg-[#0D1B3E] border border-white/[0.08] border-t-[3px] border-t-[#2563EB]/30 rounded-b-[6px] p-8 flex flex-col text-left transition-all duration-300 hover:border-white/[0.15] hover:border-t-[#2563EB] hover:translate-y-[-2px] hover:shadow-[0_8px_32px_rgba(37,99,235,0.05)]",
  benefitIcon: "text-3xl mb-4 select-none",
  benefitTitle: "font-syne font-bold text-xl text-white tracking-tight mb-2",
  benefitDesc: "text-sm text-slate-400 font-inter leading-relaxed",

  // Dynamic Job Board Listings Section
  jobBoardWrapper: "mt-16 flex flex-col gap-4 w-full",
  jobCard:
    "bg-[#0D1B3E] border border-white/[0.08] rounded-[6px] p-6 sm:p-8 flex flex-col lg:flex-row lg:items-center justify-between gap-6 text-left transition-all duration-200 hover:border-white/[0.15]",
  jobMetaMain: "flex-1 flex flex-col gap-2",
  jobTitle:
    "font-syne font-bold text-xl sm:text-2xl text-white tracking-tight group-hover:text-[#60A5FA] transition-colors duration-200",
  companyRow:
    "flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-medium text-slate-300 font-inter",
  metaBadgeRow: "flex flex-wrap items-center gap-2 mt-2",
  metaBadge:
    "inline-flex items-center text-[11px] font-semibold font-inter text-slate-400 bg-[#050E21] border border-white/[0.06] px-2.5 py-1 rounded",
  skillsBadge:
    "inline-flex items-center text-[11px] font-bold font-inter text-[#60A5FA] bg-[#2563EB]/10 border border-[#2563EB]/20 px-2.5 py-1 rounded",
  jobDescriptionText:
    "text-sm text-slate-400 font-inter leading-relaxed mt-3 line-clamp-2 max-w-3xl",
  actionArea: "flex items-center lg:justify-end shrink-0",
  applyBtn:
    "px-5 py-2.5 rounded-[4px] bg-[#2563EB] text-white font-bold font-inter text-xs tracking-wider uppercase hover:bg-[#1D4ED8] transition-all duration-200 cursor-pointer select-none",

  // Candidate Submission Form Module
  formContainer:
    "max-w-3xl mx-auto bg-[#0D1B3E] border border-white/[0.08] p-8 sm:p-12 rounded-[8px] shadow-xl mt-24 relative z-20 scroll-mt-24",
  formHeading:
    "font-syne font-extrabold text-2xl sm:text-3xl text-white tracking-tight text-center mb-2",
  formSubheading:
    "text-sm text-slate-400 font-inter leading-relaxed text-center max-w-xl mx-auto mb-10",
  formGrid: "grid grid-cols-1 sm:grid-cols-2 gap-5",
  fullWidthField: "sm:col-span-2 flex flex-col gap-2",
  halfWidthField: "flex flex-col gap-2",
  label:
    "text-[12px] font-bold font-inter text-slate-300 tracking-wide uppercase",
  input:
    "w-full bg-[#050E21] border border-white/[0.1] rounded-[4px] px-4 py-3 text-sm text-white font-inter placeholder-slate-600 focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all duration-200",
  textarea:
    "w-full bg-[#050E21] border border-white/[0.1] rounded-[4px] px-4 py-3 text-sm text-white font-inter placeholder-slate-600 focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all duration-200 min-h-[120px] resize-y",
  submitBtn:
    "w-full sm:w-auto px-8 py-3.5 mt-4 rounded-[4px] bg-[#2563EB] text-white font-bold font-inter text-xs tracking-widest uppercase hover:bg-[#1D4ED8] transition-all duration-200 cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed text-center select-none",

  // Form Process Banner Feedback
  messageSuccess:
    "sm:col-span-2 p-4 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-inter text-center",
  messageError:
    "sm:col-span-2 p-4 rounded bg-rose-500/10 border border-rose-500/30 text-rose-400 text-sm font-inter text-center",

  // CTA Block Layout
  ctaBox:
    "bg-gradient-to-br from-[#0D1B3E] to-[#050E21] border border-white/[0.08] rounded-[12px] p-8 sm:p-16 text-center max-w-4xl mx-auto mt-24 relative overflow-hidden",
  ctaHeading:
    "font-syne font-extrabold text-2xl sm:text-4xl text-white tracking-tighter leading-tight max-w-2xl mx-auto mb-4",
  ctaSubheading:
    "text-sm sm:text-base text-slate-400 font-inter leading-relaxed max-w-xl mx-auto mb-8",
  ctaBtn:
    "inline-flex items-center justify-center px-6 py-3 rounded-md bg-white text-[#050E21] font-bold font-inter text-sm tracking-wide hover:bg-slate-100 transition-all duration-200 pointer-events-auto cursor-pointer select-none",
};
