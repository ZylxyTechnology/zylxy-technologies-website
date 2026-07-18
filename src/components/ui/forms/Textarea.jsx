import { forwardRef } from "react";
import { cn } from "@/utils/cn";

const Textarea = forwardRef(function Textarea({ className, ...props }, ref) {
  return (
    <textarea
      ref={ref}
      className={cn(
        "min-h-[calc(var(--control-height-lg)*2)] w-full resize-y rounded-[var(--radius-md)] border border-[color:var(--color-border)] bg-[var(--color-surface)] px-3 py-3 font-inter text-sm text-[color:var(--color-text)] placeholder:text-[color:var(--color-text-muted)] transition-[border-color,background-color,box-shadow] duration-[var(--duration-fast)] ease-[var(--ease-standard)] hover:border-[color:var(--color-border)] focus:border-[color:var(--color-focus)] focus:bg-[var(--color-surface-raised)] focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] disabled:cursor-not-allowed disabled:opacity-[var(--opacity-disabled)]",
        className,
      )}
      {...props}
    />
  );
});

export default Textarea;
