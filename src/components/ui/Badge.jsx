import { cn } from "@/utils/cn";
import { cva } from "class-variance-authority";

const badgeVariants = cva(
  "inline-flex items-center gap-2 border rounded-full px-4 py-1.5 font-semibold font-inter tracking-widest uppercase transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-primary/30 bg-primary/15 text-foreground",
        secondary:
          "border-border-strong bg-surface text-muted-foreground hover:text-foreground",
        destructive:
          "border-transparent bg-red-500 text-white",
        outline: "text-foreground",
      },
      size: {
        sm: "text-[10px] px-3 py-1",
        default: "text-[11px]",
        lg: "text-xs px-5 py-2",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Badge({ className, variant, size, showDot = true, dotClassName, children, ...props }) {
  return (
    <div className={cn(badgeVariants({ variant, size }), className)} {...props}>
      {showDot && (
        <div
          className={cn(
            "w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_var(--color-accent)]",
            dotClassName
          )}
        />
      )}
      <span className="opacity-80">{children}</span>
    </div>
  );
}

export { Badge, badgeVariants };
