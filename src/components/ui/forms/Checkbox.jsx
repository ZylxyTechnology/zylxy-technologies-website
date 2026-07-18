import { forwardRef } from "react";
import { cn } from "@/utils/cn";

const Checkbox = forwardRef(function Checkbox({ className, ...props }, ref) {
  return (
    <input
      ref={ref}
      type="checkbox"
      className={cn(
        "size-4 shrink-0 rounded-[var(--radius-sm)] border-[color:var(--color-border)] bg-[var(--color-surface)] text-[var(--color-blue-primary)] accent-[var(--color-blue-primary)] transition-[border-color,box-shadow] duration-[var(--duration-fast)] ease-[var(--ease-standard)] focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] disabled:cursor-not-allowed disabled:opacity-[var(--opacity-disabled)]",
        className,
      )}
      {...props}
    />
  );
});

export default Checkbox;
