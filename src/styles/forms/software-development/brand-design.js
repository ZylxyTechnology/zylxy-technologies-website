export const brandDesignFormStyles = {
  section:
    "w-full bg-[#1B1F3A] pt-[clamp(4rem,8vw,8rem)] pb-[clamp(4rem,6vw,6rem)] px-6 sm:px-8 text-white relative z-30 clear-both isolate overflow-hidden scroll-mt-28 border-b border-white/5",
  backgroundEffects:
    "absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#FFF_1px,transparent_1px)] [background-size:24px_24px]",
  radialGlow:
    "absolute w-[min(600px,90vw)] h-[min(600px,90vw)] rounded-full bg-[#2563EB]/10 blur-3xl -bottom-48 -right-48 pointer-events-none aspect-square",
  wrapper: "max-w-[880px] mx-auto relative z-10",
  headerContainer: "text-center mb-14 flex flex-col items-center gap-3.5",
  pillLine: "flex items-center justify-center gap-2.5",
  pillLineBar: "w-6 h-0.5 bg-[#2563EB] rounded-full",
  pillText:
    "text-xs font-bold font-inter text-[#2563EB] tracking-[0.15em] uppercase",
  mainHeading:
    "font-lexend font-extrabold text-3xl sm:text-4xl lg:text-[44px] text-white tracking-tight leading-[1.2] py-1 relative z-20",
  subHeading:
    "text-sm sm:text-base text-[#A3B1CC] font-inter leading-relaxed max-w-3xl mx-auto block mt-2",
  formCard:
    "bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-10 backdrop-blur-md shadow-2xl relative overflow-hidden",
  formAccentBar:
    "absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#2563EB] via-[#60A5FA] to-[#2563EB]",
  grid: "grid grid-cols-1 sm:grid-cols-2 gap-5 w-full",
  fullWidthField: "mt-5 w-full",
  inputGroup: "flex flex-col gap-2 w-full group/field",
  label:
    "text-[11px] font-bold font-inter text-[#A3B1CC] tracking-[0.08em] uppercase transition-colors duration-200 group-focus-within/field:text-[#2563EB]",
  labelError:
    "text-[11px] font-bold font-inter text-[#FF6B6B] tracking-[0.08em] uppercase",
  inputWrapper: "relative w-full flex items-center",
  inputIcon:
    "absolute left-4 w-4 h-4 text-[#A3B1CC] z-10 pointer-events-none transition-colors duration-200 group-focus-within/field:text-[#2563EB]",
  inputIconError: "text-[#FF6B6B]",
  input:
    "w-full bg-white/[0.04] border border-white/10 rounded-lg pl-11 pr-4 py-3.5 text-sm font-inter text-white placeholder:text-white/20 outline-none transition-all duration-200 focus:border-[#2563EB] focus:bg-[#1B1F3A] focus:ring-4 focus:ring-[#2563EB]/10",
  inputErrorClass:
    "border-[#FF6B6B] bg-[#FF6B6B]/5 focus:border-[#FF6B6B] focus:ring-[#FF6B6B]/10",
  select:
    "w-full bg-white/[0.04] border border-white/10 rounded-lg pl-5 pr-10 py-3.5 text-sm font-inter text-white outline-none transition-all duration-200 focus:border-[#2563EB] focus:bg-[#1B1F3A] focus:ring-4 focus:ring-[#2563EB]/10 appearance-none cursor-pointer",
  selectWrapper:
    "relative w-full flex items-center after:content-['▼'] after:text-[10px] after:text-white/30 after:absolute after:right-4 after:pointer-events-none group-focus-within/field:after:text-[#2563EB]",
  phoneContainer:
    "relative w-full flex items-center bg-white/[0.04] border border-white/10 rounded-lg transition-all duration-200 focus-within:border-[#2563EB] focus-within:bg-[#1B1F3A] focus-within:ring-4 focus-within:ring-[#2563EB]/10",
  phoneContainerError:
    "border-[#FF6B6B] bg-[#FF6B6B]/5 focus-within:border-[#FF6B6B] focus-within:ring-[#FF6B6B]/10",
  countrySelectorBtn:
    "flex items-center gap-1.5 h-full px-4 border-r border-white/10 hover:bg-white/5 transition-colors cursor-pointer text-sm font-inter text-white select-none shrink-0",
  countryDropdown:
    "absolute top-full left-0 mt-1.5 w-64 bg-[#1B1F3A] border border-white/10 rounded-lg shadow-2xl z-50 max-h-60 overflow-y-auto p-1.5 scrollbar-thin",
  countryOption:
    "flex items-center justify-between w-full px-3 py-2.5 rounded-md text-left text-xs font-inter text-[#A3B1CC] hover:bg-white/5 hover:text-white transition-colors cursor-pointer",
  countryOptionActive: "bg-[#2563EB]/10 text-[#2563EB] font-semibold",
  phoneInput:
    "w-full bg-transparent border-none p-3.5 pl-4 text-sm font-inter text-white placeholder:text-white/20 outline-none",
  textarea:
    "w-full bg-white/[0.04] border border-white/10 rounded-lg p-[14px_16px] text-sm font-inter text-white placeholder:text-white/20 outline-none transition-all duration-200 focus:border-[#2563EB] focus:bg-[#1B1F3A] focus:ring-4 focus:ring-[#2563EB]/10 resize-y min-h-[120px]",
  disclosureContainer:
    "w-full mt-5 pt-5 border-t border-dashed border-white/10 flex flex-col gap-5",
  challengesContainer:
    "w-full grid grid-cols-1 sm:grid-cols-2 gap-3 mt-1 text-left",
  challengeRow:
    "flex items-start gap-3 p-3.5 rounded-lg bg-white/[0.02] border border-white/5 hover:border-[#2563EB]/30 hover:bg-[#2563EB]/5 transition-all duration-300 cursor-pointer select-none group/row hover:scale-[1.01]",
  challengeRowActive:
    "bg-[#2563EB]/5 border-[#2563EB]/20 hover:border-[#2563EB]/40",
  challengeCheckbox:
    "w-4 h-4 rounded border-white/20 bg-white/5 text-[#2563EB] focus:ring-[#2563EB]/20 transition-all cursor-pointer mt-0.5 shrink-0 accent-[#2563EB]",
  challengeLabel:
    "text-xs font-inter text-[#A3B1CC] leading-normal transition-colors group-hover/row:text-white",
  challengeLabelActive: "text-white font-medium",
  complianceBlock:
    "w-full flex flex-col gap-3.5 mt-6 pt-5 border-t border-white/5 text-left",
  complianceRow:
    "flex items-start gap-3 group/comp cursor-pointer select-none transition-all duration-200 hover:translate-x-px",
  complianceInput:
    "w-4 h-4 rounded border-white/20 bg-white/5 text-[#2563EB] focus:ring-[#2563EB]/20 transition-all cursor-pointer mt-0.5 shrink-0 accent-[#2563EB]",
  complianceLabel:
    "text-xs font-inter text-[#A3B1CC] leading-relaxed transition-colors duration-200 group-hover/comp:text-white/90",
  errorText:
    "text-[#FF6B6B] text-xs font-inter mt-1.5 flex items-center gap-1.5",
  footerRow:
    "mt-4 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-8 w-full text-left sm:text-right",
  privacyFooter:
    "text-xs font-inter text-[#677489] max-w-sm sm:max-w-md tracking-wide leading-relaxed text-left font-medium",
  submitBtnWrapper:
    "flex flex-col items-center sm:items-end gap-1 shrink-0 w-full sm:w-auto",
  submitBtn:
    "w-full sm:w-auto px-8 py-3.5 bg-[#2563EB] text-white text-sm font-bold font-inter rounded-lg transition-all duration-200 hover:bg-[#1D4ED8] hover:-translate-y-px active:translate-y-0 shadow-lg shadow-[#2563EB]/10 hover:shadow-[#2563EB]/20 cursor-pointer border-none flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed",
  successCard:
    "bg-white/[0.03] border border-white/10 rounded-2xl p-12 text-center backdrop-blur-md shadow-2xl relative overflow-hidden flex flex-col items-center justify-center gap-4 min-h-[440px]",
  successIconBox:
    "w-16 h-16 rounded-full bg-[#E0F2FE] border border-[#BAE6FD] flex items-center justify-center text-[#2563EB] mb-2 shadow-sm",
  successTitle: "font-lexend font-bold text-2xl text-white tracking-tight",
  successText:
    "text-sm font-inter text-[#A3B1CC] leading-relaxed max-w-[420px] mx-auto font-medium",
  contactRow:
    "mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 w-full border-t border-white/5 pt-12",
  contactCard:
    "flex flex-col p-4 bg-white/[0.02] border border-white/5 rounded-xl hover:border-[#FF7A59]/20 hover:bg-white/[0.04] transition-all duration-300 text-left group/card text-white no-underline outline-none",
  contactIconWrapper:
    "w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center text-[#A3B1CC] transition-colors duration-300 group-hover/card:bg-[#FF7A59]/10 group-hover/card:text-[#FF7A59] mb-3",
  contactLabel:
    "text-[10px] font-bold font-inter text-[#677489] tracking-[0.08em] uppercase mb-1 transition-colors duration-300 group-hover/card:text-[#A3B1CC]",
  contactValue:
    "text-xs font-inter font-medium text-[#A3B1CC] group-hover/card:text-white transition-colors duration-300 truncate",
};
