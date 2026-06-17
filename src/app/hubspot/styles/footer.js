export const footerStyles = {
  // Switched to deep ink black to maximize layout separation contrast
  footer: "w-full bg-[#0E1020] pt-16 text-white border-t border-white/5",
  container:
    "max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 px-6 sm:px-8 border-b border-white/10",
  leftCol: "md:col-span-5 flex flex-col items-start gap-4",
  logoLink: "flex items-center gap-2.5 group no-underline text-white",
  logoIconWrapper:
    "relative w-9 h-9 rounded-xl bg-[#FF7A59] flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-105 shadow-md shadow-[#FF7A59]/20",
  logoNodePill:
    "absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-white border-2 border-[#FF7A59]",
  textWrapper: "flex flex-col text-left",
  brandTitle: "font-lexend font-bold text-lg tracking-tight text-white",
  brandSubtitle:
    "font-inter text-[9px] tracking-widest text-[#FF7A59] uppercase font-bold -mt-0.5",
  tagline:
    "font-inter text-sm text-[#A3B1CC] leading-relaxed max-w-[320px] text-left",
  centerCol: "md:col-span-3 flex flex-col items-start md:items-center",
  linksTitle:
    "font-lexend font-bold text-xs uppercase tracking-widest text-[#FF7A59] mb-5",
  linksList: "flex flex-col gap-3 items-start md:items-center",
  linkItem:
    "font-inter text-sm text-[#A3B1CC] hover:text-white transition-colors no-underline",
  rightCol:
    "md:col-span-4 flex flex-col items-start lg:items-end gap-5 text-left lg:text-right",
  ctaTitle:
    "font-lexend font-bold text-lg sm:text-xl text-white leading-snug w-full",
  ctaButton:
    "bg-[#FF7A59] hover:bg-[#E66B4E] text-white font-inter font-bold text-sm px-6 py-3.5 rounded-lg transition-all border-none cursor-pointer shadow-lg shadow-[#FF7A59]/10 hover:-translate-y-px active:translate-y-0",
  bottomBar: "w-full bg-[#090A14] py-6 px-6 sm:px-8",
  bottomContainer:
    "max-w-[1280px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-[#677489]",
  copyText: "opacity-90 font-inter",
  trademarkText: "opacity-70 font-inter italic text-center sm:text-right",
};
