import { cn } from "@/lib/utils";

function Skeleton({ className, ...props }) {
  return (
    <div
      className={cn(
        "animate-pulse rounded-md bg-white bg-opacity-10",
        className
      )}
      {...props}
    />
  );
}

export { Skeleton };
