import { cn } from "@/utils/cn";

export default function FormField({ className, children, invalid = false, ...props }) {
  return (
    <div
      className={cn("flex w-full flex-col gap-2", invalid && "text-[color:var(--color-error)]", className)}
      {...props}
    >
      {children}
    </div>
  );
}
