import { cn } from "@/utils/cn";

const sizes = {
  small: "size-[var(--control-height-sm)] [&>svg]:size-[var(--icon-size-sm)]",
  medium: "size-[var(--control-height-md)] [&>svg]:size-[var(--icon-size-md)]",
  large: "size-[var(--control-height-lg)] [&>svg]:size-[var(--icon-size-lg)]",
};

const variants = {
  default: "bg-[var(--color-surface)] text-[color:var(--color-information)]",
  glass: "border-[var(--border-glass)] bg-[var(--color-surface-glass)] text-[color:var(--color-text)] backdrop-blur-[var(--blur-glass)]",
  muted: "bg-[var(--color-background-elevated)] text-[color:var(--color-text-muted)]",
};

export default function IconWrapper({
  icon: Icon,
  size = "medium",
  variant = "default",
  label,
  className,
  children,
  ...props
}) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-[var(--radius-md)] border border-[color:var(--color-border-subtle)]",
        sizes[size] || sizes.medium,
        variants[variant] || variants.default,
        className,
      )}
      aria-hidden={label ? undefined : true}
      aria-label={label}
      role={label ? "img" : undefined}
      {...props}
    >
      {Icon ? <Icon aria-hidden={label ? undefined : true} /> : children}
    </span>
  );
}
