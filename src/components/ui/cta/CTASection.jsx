import { cn } from "@/utils/cn";

export default function CTASection({ as: Component = "section", className, children, ...props }) {
  return (
    <Component
      className={cn(
        "rounded-[var(--radius-xl)] border border-[color:var(--color-border)] bg-[var(--color-surface)] p-[var(--spacing-grid)] shadow-[var(--shadow-md)]",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
