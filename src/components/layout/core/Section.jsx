import { cn } from "@/utils/cn";

export function Section({ className, children, ...props }) {
  return (
    <section
      className={cn(
        "relative w-full py-20 sm:py-24 lg:py-32 overflow-hidden",
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
