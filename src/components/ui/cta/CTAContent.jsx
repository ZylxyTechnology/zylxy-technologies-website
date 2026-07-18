import { cn } from "@/utils/cn";

const alignment = {
  left: "items-start text-left",
  center: "items-center text-center",
  right: "items-end text-right",
};

export default function CTAContent({ align = "left", className, children, ...props }) {
  return (
    <div
      className={cn("flex flex-col gap-3", alignment[align] || alignment.left, className)}
      {...props}
    >
      {children}
    </div>
  );
}
