export const faqStyles = {
  section: "bg-[#050E21] scroll-mt-28 relative overflow-hidden",
  wrapper: "max-w-[760px] mx-auto relative z-10",
  headerContainer: "text-center mb-14 flex flex-col items-center",
  pillWrapper: "inline-flex items-center gap-2.5 mb-3.5",
  pillLineBar: "w-5.5 h-0.5 bg-[#2563EB] rounded-sm",
  pillText:
    "text-[10px] font-bold font-inter text-[#60A5FA] tracking-widest uppercase",
  mainHeading:
    "font-syne font-extrabold text-3xl sm:text-4xl md:text-[44px] text-white tracking-tight leading-[1.05] mb-3.5",
  subHeading: "text-[15px] text-white/50 font-inter leading-[1.7]",

  listContainer: "flex flex-col gap-3 pt-4",

  itemContainer:
    "group rounded-2xl border transition-all duration-500 ease-enterprise overflow-hidden relative",
  itemContainerOpen: "bg-white/5 border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.4)]",
  itemContainerClosed:
    "bg-transparent border-transparent hover:bg-white/[0.02] hover:border-white/5",

  questionBtn:
    "w-full py-[22px] px-6 flex items-center justify-between gap-5 bg-transparent border-none cursor-pointer text-left focus:outline-none",

  questionText:
    "font-sans font-bold text-[16px] tracking-tight leading-[1.3] transition-colors duration-500",
  questionTextOpen: "text-white",
  questionTextClosed: "text-white/80 group-hover:text-white",

  iconBox:
    "w-7 h-7 rounded-full flex items-center justify-center text-[18px] shrink-0 transition-transform duration-500 ease-enterprise font-light",
  iconBoxOpen: "bg-[#2563EB] text-white rotate-45 shadow-[0_0_15px_rgba(37,99,235,0.4)]",
  iconBoxClosed: "bg-white/5 text-white/50 rotate-0 group-hover:text-white group-hover:bg-white/10",

  answerContainer: "overflow-hidden transition-all duration-500 ease-enterprise",
  answerText:
    "text-[14.5px] font-inter leading-relaxed pb-[24px] px-6 transition-colors duration-500",
  answerTextOpen: "text-white/60",
  answerTextClosed: "text-white/30",
};
