import { forwardRef } from "react";
import { cn } from "@/utils/cn";

const variants = {
  primary: "bg-[var(--color-blue-primary)] text-white hover:bg-[var(--color-interactive-hover)] active:bg-[var(--color-interactive-active)]",
  secondary: "bg-[var(--color-surface-raised)] text-[color:var(--color-text)] border border-[color:var(--color-border)] hover:bg-[var(--color-surface)]",
  outline: "border border-[color:var(--color-border)] bg-transparent text-[color:var(--color-text)] hover:border-[color:var(--color-focus)] hover:bg-[var(--color-surface)]",
  ghost: "bg-transparent text-[color:var(--color-text)] hover:bg-[var(--color-surface)]",
  danger: "bg-[var(--color-error)] text-white hover:brightness-95 active:brightness-90",
};

const sizes = {
  small: "min-h-[var(--control-height-sm)] px-3 text-xs",
  medium: "min-h-[var(--control-height-md)] px-4 text-sm",
  large: "min-h-[var(--control-height-lg)] px-6 text-sm",
};

const Button = forwardRef(function Button(
  {
    as,
    href,
    variant = "primary",
    size = "medium",
    loading = false,
    disabled = false,
    className,
    children,
    type = "button",
    onClick,
    ...props
  },
  ref,
) {
  const isLink = as === "a" || Boolean(href);
  const isDisabled = disabled || loading;
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-[var(--radius-md)] font-inter font-semibold transition-[color,background-color,border-color,box-shadow,transform] duration-[var(--duration-normal)] ease-[var(--ease-standard)] focus-visible:ring-2 focus-visible:ring-[var(--color-focus)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-background)] disabled:pointer-events-none disabled:opacity-[var(--opacity-disabled)]",
    variants[variant] || variants.primary,
    sizes[size] || sizes.medium,
    className,
  );

  if (isLink) {
    return (
      <a
        ref={ref}
        href={isDisabled ? undefined : href}
        className={classes}
        aria-disabled={isDisabled || undefined}
        aria-busy={loading || undefined}
        tabIndex={isDisabled ? -1 : props.tabIndex}
        onClick={isDisabled ? (event) => event.preventDefault() : onClick}
        {...props}
      >
        {loading && <span className="sr-only">Loading</span>}
        {children}
      </a>
    );
  }

  const Component = as || "button";
  return (
    <Component
      ref={ref}
      type={Component === "button" ? type : undefined}
      className={classes}
      disabled={Component === "button" ? isDisabled : undefined}
      aria-busy={loading || undefined}
      onClick={onClick}
      {...props}
    >
      {loading && <span className="sr-only">Loading</span>}
      {children}
    </Component>
  );
});

export default Button;
