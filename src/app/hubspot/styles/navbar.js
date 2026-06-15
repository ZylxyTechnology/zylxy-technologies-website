export const navbarStyles = {
  nav: "sticky top-0 z-50 w-full h-20 bg-white border-b border-[#F0E8E3] shadow-xs",
  container:
    "max-w-[1280px] h-full mx-auto px-6 sm:px-8 flex items-center justify-between relative",
  logoLink: "flex items-center gap-3 group no-underline z-20",
  logoIconWrapper:
    "w-9 h-9 rounded-xl bg-[#FF7A59] flex items-center justify-center text-white shadow-md shadow-[#FF7A59]/20 relative group-hover:scale-105 transition-transform",
  logoNodePill:
    "absolute -top-0.5 -right-0.5 w-2.5 h-2.5 bg-white border-2 border-[#FF7A59] rounded-full",
  textWrapper: "flex flex-col",
  brandTitle:
    "font-lexend font-bold text-base sm:text-lg tracking-tight text-[#1B1F3A] group-hover:text-[#FF7A59] transition-colors leading-tight",
  brandSubtitle:
    "font-inter text-[9px] tracking-widest text-[#677489] uppercase font-bold",
  menuList: "hidden md:flex items-center gap-8 h-full static",
  menuItemWrapper: "h-full flex items-center group/item static",
  menuButton:
    "hover:text-[#FF7A59] text-[#1B1F3A] transition-colors cursor-pointer bg-transparent border-none p-0 font-semibold text-sm flex items-center gap-1 h-full",
  chevron:
    "w-3.5 h-3.5 opacity-70 group-hover/item:rotate-180 transition-transform duration-200",
  megaMenu:
    "absolute top-20 left-6 right-6 sm:left-8 sm:right-8 bg-white border border-[#F0E8E3] shadow-xl p-8 grid grid-cols-12 gap-8 opacity-0 pointer-events-none group-hover/item:opacity-100 group-hover/item:pointer-events-auto transition-all duration-200 z-50 rounded-b-xl max-w-[1280px]",
  megaLeftCol: "col-span-3 border-r border-[#F0E8E3] pr-6 flex flex-col gap-3",
  megaLeftTitle: "font-lexend font-bold text-base text-[#1B1F3A]",
  megaLeftDesc: "font-inter text-xs text-[#677489] leading-relaxed",
  megaGrid: "col-span-9 grid grid-cols-2 gap-6",
  megaCard:
    "flex items-start gap-3.5 p-3 rounded-lg hover:bg-[#FFF8F5] transition-colors group/card cursor-pointer",
  megaCardIcon:
    "w-9 h-9 rounded-lg bg-[#FFF0EB] border border-[#FEDDCC] flex items-center justify-center text-[#FF7A59] group-hover/card:bg-[#FF7A59] group-hover/card:text-white transition-all flex-shrink-0",
  megaCardContent: "flex flex-col gap-0.5",
  megaCardTitle:
    "font-inter font-bold text-sm text-[#2F3E4E] group-hover/card:text-[#FF7A59] transition-colors",
  megaCardDesc: "font-inter text-xs text-[#677489] leading-relaxed",
  actionWrapper: "flex items-center gap-4 z-20",
  primaryBtn:
    "bg-[#FF7A59] hover:bg-[#E8673F] text-white font-inter font-bold text-xs sm:text-sm px-5 py-3 rounded-[6px] transition-all hover:-translate-y-px active:translate-y-0 cursor-pointer border-none shadow-xs",
};
