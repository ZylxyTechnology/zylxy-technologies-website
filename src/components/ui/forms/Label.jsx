import { cn } from "@/utils/cn";

export default function Label({ className, children, required = false, ...props }) {
  return (
    <label
      className={cn("font-inter text-sm font-semibold text-[color:var(--color-text)]", className)}
      {...props}
    >
      {children}
      {required && <span aria-hidden="true"> *</span>}
      {required && <span className="sr-only"> required</span>}
    </label>
  );
}
