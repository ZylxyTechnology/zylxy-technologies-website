export const navbarStyles = {
  nav: "sticky top-0 z-50 w-full h-20 bg-white/95 backdrop-blur-md border-b border-[#F0E8E3] shadow-xs transition-all duration-300",
  container:
    "max-w-[1280px] h-full mx-auto px-6 sm:px-8 flex items-center justify-between relative",
  logoLink: "flex items-center gap-3 group no-underline z-20",
  logoIconWrapper:
    "w-9 h-9 rounded-lg overflow-hidden bg-[#0F2251] flex items-center justify-center shadow-[0_0_12px_rgba(37,99,235,0.25)] shrink-0 transition-transform duration-300 group-hover:scale-105",
  textWrapper: "flex flex-col justify-center",
  brandTitle:
    "font-sans font-bold text-lg sm:text-[20px] tracking-tight text-[#1B1F3A] group-hover:text-[#FF7A59] transition-colors leading-none",
  brandSubtitle:
    "font-sans text-[10px] font-medium text-[#677489] tracking-wider uppercase mt-0.5",
  menuList: "hidden md:flex items-center gap-8 h-full static",
  menuItemWrapper: "h-full flex items-center group/item static",
  menuButton:
    "hover:text-[#FF7A59] text-[#1B1F3A] transition-colors cursor-pointer bg-transparent border-none p-0 font-semibold text-sm flex items-center gap-1 h-full",
  simpleLink:
    "font-inter text-sm font-semibold text-[#1B1F3A] hover:text-[#FF7A59] transition-colors no-underline relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-[#FF7A59] hover:after:w-full after:transition-all after:duration-300",
  chevron:
    "w-3.5 h-3.5 opacity-70 group-hover/item:rotate-180 transition-transform duration-300",
  megaMenu:
    "absolute top-20 left-6 right-6 sm:left-8 sm:right-8 bg-white/95 backdrop-blur-xl border border-[#F0E8E3] shadow-[0_20px_40px_rgba(0,0,0,0.08)] p-8 grid grid-cols-12 gap-8 opacity-0 pointer-events-none group-hover/item:opacity-100 group-hover/item:pointer-events-auto transition-all duration-300 z-50 rounded-b-xl max-w-[1280px] translate-y-2 group-hover/item:translate-y-0",
  megaLeftCol: "col-span-3 border-r border-[#F0E8E3] pr-6 flex flex-col gap-3",
  megaLeftTitle: "font-lexend font-bold text-base text-[#1B1F3A]",
  megaLeftDesc: "font-inter text-xs text-[#677489] leading-relaxed",
  megaGrid: "col-span-9 grid grid-cols-2 gap-6",
  megaCard:
    "flex items-start gap-3.5 p-3 rounded-lg hover:bg-[#FFF8F5] transition-all duration-300 group/card cursor-pointer no-underline hover:-translate-y-1",
  megaCardIcon:
    "w-9 h-9 rounded-lg bg-[#FFF0EB] border border-[#FEDDCC] flex items-center justify-center text-[#FF7A59] group-hover/card:bg-[#FF7A59] group-hover/card:text-white group-hover/card:scale-110 transition-all duration-300 flex-shrink-0",
  megaCardIconInner: "w-5 h-5",
  megaCardContent: "flex flex-col gap-0.5",
  megaCardTitle:
    "font-inter font-bold text-sm text-[#2F3E4E] group-hover/card:text-[#FF7A59] transition-colors",
  megaCardDesc: "font-inter text-xs text-[#677489] leading-relaxed",
  desktopActionGroup: "flex items-center gap-4 z-20",
  actionWrapper: "hidden md:flex items-center gap-4 z-20",
  primaryBtn:
    "bg-[#FF7A59] hover:bg-[#E8673F] text-white font-inter font-bold text-xs sm:text-sm px-5 py-3 rounded-[6px] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(255,122,89,0.3)] active:translate-y-0 cursor-pointer border-none no-underline",
  mobileMenuBtn:
    "md:hidden flex flex-col justify-center items-center gap-1 w-8 h-8 bg-transparent border-none cursor-pointer focus:outline-none z-20 hover:scale-110 transition-transform",
  mobileMenuIcon: "w-6 h-6 text-[#1B1F3A]",
  mobileMenuOverlay:
    "absolute top-20 left-0 right-0 bg-white border-b border-[#F0E8E3] shadow-xl p-6 z-50 flex flex-col gap-4 max-h-[calc(100vh-5rem)] overflow-y-auto md:hidden animate-[fadeIn_0.2s_ease-out]",
  mobileMenuContainer: "flex flex-col gap-4",
  mobileNavLink:
    "text-sm font-bold text-[#1B1F3A] hover:text-[#FF7A59] py-2.5 border-b border-[#F0E8E3] no-underline font-inter tracking-wide block",
  mobileDropdownWrapper: "flex flex-col border-b border-[#F0E8E3]",
  mobileDropdownBtn:
    "w-full flex items-center justify-between text-sm font-bold text-[#1B1F3A] hover:text-[#FF7A59] py-2.5 bg-transparent border-none text-left font-inter tracking-wide",
  mobileChevron: "w-4 h-4 opacity-70 transition-transform duration-200",
  mobileSubmenuContainer:
    "flex flex-col gap-3.5 pl-4 pt-2 pb-4 bg-[#FFF8F5]/60 rounded-lg mt-1 mb-2 animate-[fadeIn_0.2s_ease-out]",
  mobileSubLink:
    "text-xs font-semibold text-[#677489] hover:text-[#FF7A59] no-underline font-inter",
  mobileCtaBtn:
    "w-full bg-[#FF7A59] hover:bg-[#E8673F] text-white font-inter font-bold text-sm py-3.5 rounded-[6px] text-center mt-2 no-underline shadow-xs",
};
