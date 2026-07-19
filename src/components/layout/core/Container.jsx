import { cn } from "@/utils/cn";

export function Container({ className, children, ...props }) {
  return (
    <div
      className={cn(
        "w-full max-w-7xl mx-auto px-4 sm:px-8 lg:px-12",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
