import { cn } from "@/utils/cn";

const sizes = {
  content: "max-w-5xl",
  wide: "max-w-7xl",
  full: "max-w-full",
};

export default function Container({
  as: Component = "div",
  size = "wide",
  className,
  children,
  ...props
}) {
  return (
    <Component
      className={cn(
        "mx-auto w-full px-[var(--spacing-container-inline)]",
        sizes[size] || sizes.wide,
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
