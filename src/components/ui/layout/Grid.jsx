import { cn } from "@/utils/cn";

const columns = {
  1: "grid-cols-1",
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
};

export default function Grid({
  as: Component = "div",
  columns: columnCount = 3,
  className,
  children,
  ...props
}) {
  return (
    <Component
      className={cn(
        "grid gap-[var(--spacing-grid)]",
        columns[columnCount] || columns[3],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
