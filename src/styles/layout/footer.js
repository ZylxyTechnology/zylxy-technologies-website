export const footerStyles = {
  footer:
    "bg-[#050E21] pt-[80px] pb-[32px] relative transition-colors duration-300 before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-[#60A5FA]/30 before:to-transparent",
  wrapper: "max-w-[1200px] mx-auto px-8 relative z-10",

  topSection:
    "flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/[0.05] pb-12 mb-12",
  logoContainer: "flex flex-col",
  logoText:
    "font-syne font-extrabold text-[clamp(40px,6vw,72px)] text-white/10 tracking-[-0.05em] leading-none select-none",
  legalText: "text-[12px] font-inter text-white/40 mt-2 tracking-[0.04em]",
  descText:
    "text-[13px] font-inter text-white/60 leading-[1.7] max-w-[280px] md:text-right",

  grid: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 xl:grid-cols-8 gap-x-6 gap-y-12 mb-12 pb-10 border-b border-white/[0.05]",
  colContainer: "flex flex-col",
  colTitle:
    "text-[10px] font-inter font-bold text-white/40 tracking-[0.12em] uppercase mb-5",
  linkItem:
    "text-[12.5px] font-inter text-white/70 mb-3 cursor-pointer transition-colors duration-200 hover:text-[#60A5FA]",
  contactItem: "text-[12.5px] font-inter text-white/60 mb-3 leading-[1.6]",

  bottomSection:
    "flex flex-col sm:flex-row justify-between items-center gap-4 flex-wrap",
  copyright: "text-[11.5px] font-inter text-white/40",
  bottomLinks: "flex gap-5",
  bottomLinkItem:
    "text-[11px] font-inter text-white/80 cursor-pointer transition-colors hover:text-white/70",
};
