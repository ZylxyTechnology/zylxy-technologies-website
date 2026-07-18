import { cn } from "@/utils/cn";

const sizes = {
  large: "text-base sm:text-lg",
  default: "text-sm sm:text-base",
  small: "text-sm",
};

const alignment = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

export default function BodyText({
  as: Component = "p",
  size = "default",
  align = "left",
  className,
  children,
  ...props
}) {
  return (
    <Component
      className={cn(
        "font-inter leading-relaxed text-[color:var(--color-text-muted)]",
        sizes[size] || sizes.default,
        alignment[align] || alignment.left,
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
