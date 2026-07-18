import { cn } from "@/utils/cn";

const alignment = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

export default function Caption({
  as: Component = "span",
  align = "left",
  className,
  children,
  ...props
}) {
  return (
    <Component
      className={cn(
        "font-inter text-xs font-medium leading-normal text-[color:var(--color-text-muted)]",
        alignment[align] || alignment.left,
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
