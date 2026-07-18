import { cn } from "@/utils/cn";

const sizes = {
  section: "text-2xl sm:text-3xl lg:text-4xl",
  card: "text-lg sm:text-xl",
  small: "text-base",
};

const alignment = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

export default function Heading({
  as: Component = "h2",
  size = "section",
  align = "left",
  className,
  children,
  ...props
}) {
  return (
    <Component
      className={cn(
        "font-syne font-bold leading-tight tracking-[-0.02em] text-[color:var(--color-text)]",
        sizes[size] || sizes.section,
        alignment[align] || alignment.left,
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
