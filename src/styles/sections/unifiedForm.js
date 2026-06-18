export const unifiedFormStyles = {
  section:
    "w-full bg-[#1B1F3A] py-24 px-6 sm:px-8 text-white relative overflow-hidden scroll-mt-24 border-b border-white/5",
  backgroundEffects:
    "absolute inset-0 opacity-[0.02] pointer-events-none bg-[radial-gradient(#FFF_1px,transparent_1px)] [background-size:24px_24px]",
  radialGlow:
    "absolute w-[600px] h-[600px] rounded-full bg-[#FF7A59]/10 blur-3xl -bottom-48 -right-48 pointer-events-none",
  wrapper: "max-w-[880px] mx-auto relative z-10",
  headerContainer: "text-center mb-14 flex flex-col items-center gap-3.5",
  pillLine: "flex items-center justify-center gap-2.5",
  pillLineBar: "w-6 h-0.5 bg-[#FF7A59] rounded-full",
  pillText:
    "text-xs font-bold font-inter text-[#FF7A59] tracking-[0.15em] uppercase",
  mainHeading:
    "font-lexend font-extrabold text-3xl sm:text-4xl lg:text-[44px] text-white tracking-tight leading-tight",
  subHeading:
    "text-sm sm:text-base text-[#A3B1CC] font-inter leading-relaxed max-w-[540px] mx-auto",
  formCard:
    "bg-white/[0.03] border border-white/10 rounded-2xl p-6 sm:p-10 backdrop-blur-md shadow-2xl relative overflow-hidden",
  formAccentBar:
    "absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FF7A59] via-[#FF9A73] to-[#FF7A59]",
  grid: "grid grid-cols-1 sm:grid-cols-2 gap-5 w-full",
  fullWidthField: "mt-5 w-full",
  inputGroup: "flex flex-col gap-2 w-full group/field",
  label:
    "text-[11px] font-bold font-inter text-[#A3B1CC] tracking-[0.08em] uppercase transition-colors duration-200 group-focus-within/field:text-[#FF7A59]",
  labelError:
    "text-[11px] font-bold font-inter text-[#FF6B6B] tracking-[0.08em] uppercase",
  inputWrapper: "relative w-full flex items-center",
  inputIcon:
    "absolute left-4 w-4 h-4 text-[#A3B1CC] z-10 pointer-events-none transition-colors duration-200 group-focus-within/field:text-[#FF7A59]",
  inputIconError: "text-[#FF6B6B]",
  input:
    "w-full bg-white/[0.04] border border-white/10 rounded-lg pl-11 pr-4 py-3.5 text-sm font-inter text-white placeholder:text-white/20 outline-none transition-all duration-200 focus:border-[#FF7A59] focus:bg-[#1B1F3A] focus:ring-4 focus:ring-[#FF7A59]/10",
  inputErrorClass:
    "border-[#FF6B6B] bg-[#FF6B6B]/5 focus:border-[#FF6B6B] focus:ring-[#FF6B6B]/10",
  select:
    "w-full bg-white/[0.04] border border-white/10 rounded-lg pl-11 pr-10 py-3.5 text-sm font-inter text-white outline-none transition-all duration-200 focus:border-[#FF7A59] focus:bg-[#1B1F3A] focus:ring-4 focus:ring-[#FF7A59]/10 appearance-none cursor-pointer",
  selectWrapper:
    "relative w-full flex items-center after:content-['▼'] after:text-[10px] after:text-white/30 after:absolute after:right-4 after:pointer-events-none group-focus-within/field:after:text-[#FF7A59]",
  textarea:
    "w-full bg-white/[0.04] border border-white/10 rounded-lg p-[14px_16px] text-sm font-inter text-white placeholder:text-white/20 outline-none transition-all duration-200 focus:border-[#FF7A59] focus:bg-[#1B1F3A] focus:ring-4 focus:ring-[#FF7A59]/10 resize-y min-h-[120px]",
  disclosureContainer:
    "w-full mt-5 pt-5 border-t border-dashed border-white/10 flex flex-col gap-5 animate-[fadeIn_0.3s_ease-out]",
  errorText:
    "text-[#FF6B6B] text-xs font-inter mt-1.5 flex items-center gap-1.5",
  footerRow:
    "mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6 w-full",
  checkmarksRow: "flex gap-5 flex-wrap items-center",
  checkItem: "flex items-center gap-2",
  checkIcon:
    "text-[#FF7A59] text-xs font-bold bg-[#FF7A59]/10 rounded-full p-1 w-5 h-5 flex items-center justify-center shrink-0",
  checkText: "text-xs font-inter text-[#A3B1CC] font-medium",
  submitBtn:
    "px-7 py-3.5 bg-[#FF7A59] text-white text-sm font-bold font-inter rounded-lg transition-all duration-200 hover:bg-[#E66B4E] hover:-translate-y-px active:translate-y-0 shadow-lg shadow-[#FF7A59]/10 hover:shadow-[#FF7A59]/20 cursor-pointer border-none flex items-center gap-2 shrink-0 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none",
  successCard:
    "bg-white/[0.03] border border-white/10 rounded-2xl p-12 text-center backdrop-blur-md shadow-2xl relative overflow-hidden flex flex-col items-center justify-center gap-4 min-h-[440px]",
  successIconBox:
    "w-16 h-16 rounded-full bg-[#FFF0EB] border border-[#FEDDCC] flex items-center justify-center text-[#FF7A59] mb-2 shadow-sm animate-bounce",
  successTitle: "font-lexend font-bold text-2xl text-white tracking-tight",
  successText:
    "text-sm font-inter text-[#A3B1CC] leading-relaxed max-w-[420px] mx-auto font-medium",
  contactRow:
    "mt-16 flex justify-center gap-12 flex-wrap w-full border-t border-white/5 pt-8",
  contactItem: "flex items-center gap-3.5 text-left",
  contactIcon:
    "text-xl bg-white/5 w-10 h-10 rounded-xl flex items-center justify-center border border-white/10",
  contactLabel:
    "text-[10px] font-bold font-inter text-[#A3B1CC] tracking-[0.08em] uppercase mb-0.5",
  contactValue: "text-sm font-inter font-semibold text-white opacity-80",
};
