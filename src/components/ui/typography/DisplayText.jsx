import { cn } from "@/utils/cn";

const sizes = {
  hero: "text-4xl sm:text-5xl lg:text-6xl",
  page: "text-3xl sm:text-4xl lg:text-5xl",
};

const alignment = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

export default function DisplayText({
  as: Component = "h1",
  size = "hero",
  align = "left",
  className,
  children,
  ...props
}) {
  return (
    <Component
      className={cn(
        "font-syne font-extrabold leading-[1.05] tracking-[-0.04em] text-[color:var(--color-text)]",
        sizes[size] || sizes.hero,
        alignment[align] || alignment.left,
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
