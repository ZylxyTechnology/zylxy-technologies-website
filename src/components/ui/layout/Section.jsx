import { cn } from "@/utils/cn";

const spacing = {
  compact: "py-[var(--spacing-section-compact)]",
  default: "py-[var(--spacing-section)]",
};

export default function Section({
  as: Component = "section",
  spacing: spacingVariant = "default",
  className,
  children,
  ...props
}) {
  return (
    <Component
      className={cn("w-full", spacing[spacingVariant] || spacing.default, className)}
      {...props}
    >
      {children}
    </Component>
  );
}
