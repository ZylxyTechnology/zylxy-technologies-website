import { cn } from "@/utils/cn";

export default function ErrorMessage({ className, children, ...props }) {
  if (!children) return null;

  return (
    <p
      role="alert"
      className={cn("font-inter text-sm leading-relaxed text-[color:var(--color-error)]", className)}
      {...props}
    >
      {children}
    </p>
  );
}
