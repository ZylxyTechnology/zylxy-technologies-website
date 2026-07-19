export const clientsStyles = {
  section:
    "bg-background !py-8 md:!py-10 border-t border-border border-b",
  container: "mb-6 relative z-20",
  pillWrapper: "flex items-center gap-2.5 mb-2",
  pillLine: "w-[22px] h-0.5 bg-primary rounded-sm",
  pill: "text-[12px] font-bold font-inter text-primary tracking-widest uppercase",
  marqueeWrapper:
    "relative w-full overflow-hidden flex whitespace-nowrap mask-gradient",
  marqueeTrack: "flex items-center gap-16 animate-marquee min-w-full shrink-0 group-hover/marquee:pause",
  itemWrapper: "flex items-center gap-16 shrink-0 group/logo cursor-pointer",
  clientText:
    "font-syne font-bold text-xl text-foreground opacity-40 grayscale tracking-tight whitespace-nowrap transition-all duration-300 group-hover/logo:opacity-100 group-hover/logo:grayscale-0 select-none",
  separatorDot: "w-1.5 h-1.5 rounded-full bg-border shrink-0",
};
