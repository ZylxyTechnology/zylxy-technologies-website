import { cn } from "@/utils/cn";

const variants = {
  feature: "bg-[var(--color-surface)]",
  service: "bg-[var(--color-surface-raised)]",
  glass: "border-[var(--border-glass)] bg-[var(--color-surface-glass)] backdrop-blur-[var(--blur-glass)] shadow-[var(--shadow-glass)]",
  stat: "bg-[var(--color-background-elevated)]",
  testimonial: "bg-[var(--color-surface)]",
};

export default function Card({
  as: Component = "article",
  variant = "feature",
  interactive = false,
  className,
  children,
  ...props
}) {
  return (
    <Component
      className={cn(
        "rounded-[var(--radius-lg)] border border-[color:var(--color-border-subtle)] p-[var(--spacing-grid)] shadow-[var(--shadow-sm)] transition-[border-color,background-color,box-shadow,transform] duration-[var(--duration-normal)] ease-[var(--ease-standard)]",
        variants[variant] || variants.feature,
        interactive && "hover:-translate-y-px hover:border-[color:var(--color-border)] hover:shadow-[var(--shadow-md)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-focus)]",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
