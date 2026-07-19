import { cn } from "@/utils/cn";
import { cva } from "class-variance-authority";
import { forwardRef } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-lg font-semibold font-inter transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-[0_2px_14px_rgba(59,130,246,0.35)] hover:bg-primary-hover hover:-translate-y-px hover:shadow-[0_8px_28px_rgba(59,130,246,0.5)]",
        destructive:
          "bg-red-500 text-white hover:bg-red-600",
        outline:
          "border border-border-strong text-foreground hover:bg-surface hover:border-muted",
        secondary:
          "bg-surface text-foreground hover:bg-surface-hover",
        ghost: "hover:bg-surface hover:text-foreground text-muted-foreground",
        link: "underline-offset-4 hover:underline text-primary",
      },
      size: {
        default: "h-11 px-7 py-3.5 text-sm",
        sm: "h-9 px-4 rounded-md text-xs",
        lg: "h-12 px-8 rounded-lg text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? "span" : "button"; // normally uses @radix-ui/react-slot, defaulting to button
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  );
});
Button.displayName = "Button";

export { Button, buttonVariants };
