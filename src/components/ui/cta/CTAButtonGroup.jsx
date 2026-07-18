import { cn } from "@/utils/cn";

const alignment = {
  left: "justify-start",
  center: "justify-center",
  right: "justify-end",
};

export default function CTAButtonGroup({ align = "left", className, children, ...props }) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 sm:flex-row",
        alignment[align] || alignment.left,
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
