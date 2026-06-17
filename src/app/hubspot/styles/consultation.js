export const consultationStyles = {
  section:
    "w-full bg-[#1B1F3A] py-24 px-6 sm:px-8 text-white relative overflow-hidden scroll-mt-24 border-b border-white/5",
  bgBgDecor:
    "absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#FFF_1px,transparent_1px)] [background-size:24px_24px]",
  radialGlow:
    "absolute w-[500px] h-[500px] rounded-full bg-[#FF7A59]/10 blur-3xl -bottom-44 -right-44 pointer-events-none",
  container:
    "max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10",

  // Left side copywriting typography maps
  leftCol: "lg:col-span-5 flex flex-col items-start text-left gap-6",
  badge:
    "inline-flex bg-[#FF7A59]/10 text-[#FF7A59] border border-[#FF7A59]/20 text-[10px] font-extrabold tracking-widest uppercase px-3 py-1 rounded-md",
  heading:
    "font-lexend font-bold text-3xl sm:text-4xl lg:text-[42px] text-white tracking-tight leading-tight",
  subtext: "font-inter text-base text-[#A3B1CC] leading-relaxed font-medium",
  bulletList: "flex flex-col gap-3.5 mt-2 w-full",
  bulletRow: "flex items-center gap-3 text-sm text-[#E2E8F0] font-medium",
  bulletIcon: "w-4 h-4 text-[#FF7A59] shrink-0",

  // Right Side Form Wrapper Core Matrix
  rightCol: "lg:col-span-7 w-full",
  formCard:
    "w-full bg-white rounded-2xl p-6 sm:p-8 shadow-2xl text-left flex flex-col gap-5 text-[#1B1F3A]",
  formGrid: "grid grid-cols-1 sm:grid-cols-2 gap-4 w-full",
  inputGroup: "flex flex-col gap-1.5 w-full group/field",
  label:
    "font-inter text-xs font-bold uppercase tracking-wider text-[#516F8D] group-focus-within/field:text-[#FF7A59] transition-colors duration-200",

  // CRITICAL FIX: Establishes relative coordinate mapping for inline positioning
  inputWrapper: "relative w-full flex items-center",
  inputIcon:
    "absolute left-4 w-4 h-4 text-[#A3B1CC] z-10 pointer-events-none group-focus-within/field:text-[#FF7A59] transition-colors duration-200",

  // Added pl-11 to push the typed text safely past the absolute icon area
  input:
    "w-full bg-[#FFF8F5] border border-[#F0E8E3] rounded-lg pl-11 pr-4 py-3 text-sm font-inter text-[#1B1F3A] placeholder-[#A3B1CC] transition-all duration-200 focus:outline-none focus:border-[#FF7A59] focus:bg-white focus:ring-2 focus:ring-[#FF7A59]/10",
  select:
    "w-full bg-[#FFF8F5] border border-[#F0E8E3] rounded-lg pl-11 pr-10 py-3 text-sm font-inter text-[#1B1F3A] transition-all duration-200 focus:outline-none focus:border-[#FF7A59] focus:bg-white focus:ring-2 focus:ring-[#FF7A59]/10 cursor-pointer appearance-none",
  selectWrapper:
    "relative w-full flex items-center after:content-['▼'] after:text-[10px] after:text-[#677489] after:absolute after:right-4 after:pointer-events-none group-focus-within/field:after:text-[#FF7A59]",

  submitBtn:
    "w-full bg-[#FF7A59] hover:bg-[#E66B4E] text-white font-inter font-bold text-sm py-4 rounded-xl transition-all duration-200 border-none cursor-pointer shadow-lg shadow-[#FF7A59]/10 hover:shadow-[#FF7A59]/20 flex items-center justify-center gap-2 mt-2 hover:-translate-y-px active:translate-y-0",

  // Confirmation feedback styling elements
  successCard:
    "w-full bg-white rounded-2xl p-8 shadow-2xl flex flex-col items-center justify-center text-center gap-4 min-h-[420px]",
  successIconBox:
    "w-14 h-14 rounded-full bg-[#FFF0EB] border border-[#FEDDCC] flex items-center justify-center text-[#FF7A59] mb-2 animate-bounce",
  successTitle: "font-lexend font-bold text-2xl text-[#1B1F3A] tracking-tight",
  successDesc:
    "font-inter text-sm text-[#677489] leading-relaxed max-w-[360px] font-medium",
};
