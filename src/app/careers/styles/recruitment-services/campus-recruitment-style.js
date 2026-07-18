export const formStyles = {
  container:
    "w-full bg-[#0D1B3E]/40 backdrop-blur-xl border border-white/[0.08] rounded-3xl p-8 sm:p-12 relative overflow-hidden",
  header:
    "font-syne font-extrabold text-3xl sm:text-4xl text-white tracking-tight mb-2",
  subHeader:
    "text-sm sm:text-base text-slate-400 font-inter leading-relaxed mb-10",
  sectionTitle:
    "font-syne font-bold text-xl text-[#60A5FA] mb-6 mt-10 border-b border-white/[0.06] pb-3",
  gridRow: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-6",
  fullRow: "mb-6",
  label: "block text-[13px] font-semibold font-inter text-white/80 mb-2",
  required: "text-red-400 ml-1",
  input:
    "w-full bg-[#050E21] border border-white/[0.1] rounded-xl px-4 py-3.5 text-[14px] text-white font-inter transition-all duration-300 focus:outline-none focus:border-[#60A5FA] focus:bg-white/[0.04] placeholder:text-white/30 shadow-inner",
  select:
    "w-full bg-[#050E21] border border-white/[0.1] rounded-xl px-4 py-3.5 text-[14px] text-white font-inter transition-all duration-300 focus:outline-none focus:border-[#60A5FA] appearance-none cursor-pointer shadow-inner",
  textarea:
    "w-full bg-[#050E21] border border-white/[0.1] rounded-xl px-4 py-3.5 text-[14px] text-white font-inter transition-all duration-300 focus:outline-none focus:border-[#60A5FA] focus:bg-white/[0.04] placeholder:text-white/30 min-h-[120px] resize-y shadow-inner",
  fileUploadWrapper:
    "relative w-full bg-[#050E21] border border-white/[0.1] border-dashed rounded-xl px-4 py-6 flex flex-col items-center justify-center cursor-pointer hover:border-[#60A5FA]/50 hover:bg-white/[0.02] transition-all duration-300 shadow-inner",
  fileInput: "absolute inset-0 w-full h-full opacity-0 cursor-pointer",
  fileText: "text-[13px] text-white/60 font-inter text-center mt-2",
  fileHighlight: "text-[#60A5FA] font-semibold",
  checkboxGroup: "flex items-start gap-3 mb-4 cursor-pointer group",
  checkbox:
    "mt-1 w-5 h-5 rounded-[6px] border border-white/[0.2] bg-[#050E21] checked:bg-[#60A5FA] checked:border-[#60A5FA] appearance-none flex items-center justify-center transition-all duration-300 cursor-pointer group-hover:border-[#60A5FA]/50 relative before:content-[''] before:w-2.5 before:h-2.5 before:bg-[#050E21] before:rounded-sm before:opacity-0 checked:before:opacity-100",
  checkboxLabel:
    "text-[13px] text-white/70 font-inter leading-relaxed select-none group-hover:text-white/90 transition-colors",
  submitBtn:
    "mt-8 w-full bg-[#60A5FA] text-[#050E21] font-inter font-bold text-[15px] tracking-wide py-4 rounded-xl hover:bg-[#93C5FD] hover:-translate-y-0.5 transition-all duration-300 shadow-[0_4px_14px_rgba(96,165,250,0.4)] flex items-center justify-center gap-2",
  submitBtnDisabled: "opacity-50 cursor-not-allowed hover:translate-y-0",
  successBox:
    "p-12 text-center bg-white/[0.02] border border-[#60A5FA]/30 rounded-3xl backdrop-blur-md relative overflow-hidden",
  successTitle:
    "font-syne font-extrabold text-3xl text-white mb-4 relative z-10",
  successDesc:
    "text-[16px] font-inter text-white/70 leading-relaxed max-w-lg mx-auto relative z-10",
  glowEffect:
    "absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_50%,transparent_75%)] bg-size-[250%_250%] animate-shimmer pointer-events-none",
};
