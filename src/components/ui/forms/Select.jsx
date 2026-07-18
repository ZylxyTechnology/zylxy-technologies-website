import { forwardRef } from "react";
import { cn } from "@/utils/cn";

const Select = forwardRef(function Select({ className, children, ...props }, ref) {
  return (
    <select
      ref={ref}
      className={cn(
        "min-h-[var(--control-height-md)] w-full rounded-[var(--radius-md)] border border-[color:var(--color-border)] bg-[var(--color-surface)] px-3 font-inter text-sm text-[color:var(--color-text)] transition-[border-color,background-color,box-shadow] duration-[var(--duration-fast)] ease-[var(--ease-standard)] hover:border-[color:var(--color-border)] focus:border-[color:var(--color-focus)] focus:bg-[var(--color-surface-raised)] focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] disabled:cursor-not-allowed disabled:opacity-[var(--opacity-disabled)]",
        className,
      )}
      {...props}
    >
      {children}
    </select>
  );
});

export default Select;
