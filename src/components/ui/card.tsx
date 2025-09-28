import * as React from "react";

import { cn } from "@/lib/utils";

function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "bg-[#1a1a1a] border border-[#2a2a2a] text-white w-full max-w-2xl shadow-lg",
        className
      )}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn("flex items-center justify-between p-0 mb-2", className)}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("text-white font-bold text-sm", className)}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...props}
    />
  );
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className
      )}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div data-slot="card-content" className={cn("p-0", className)} {...props} />
  );
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  );
}

// New components for crypto interface
function CardStats({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-stats"
      className={cn("flex items-center justify-between text-xs", className)}
      {...props}
    />
  );
}

function CardStat({
  className,
  value,
  label,
  color = "text-gray-400",
  ...props
}: React.ComponentProps<"div"> & {
  value: string;
  label: string;
  color?: string;
}) {
  return (
    <div
      data-slot="card-stat"
      className={cn("flex flex-col items-center gap-1", className)}
      {...props}
    >
      <span className={cn("font-medium", color)}>{value}</span>
      <span className="text-gray-500 text-xs">{label}</span>
    </div>
  );
}

function CardPrice({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-price"
      className={cn("flex items-center gap-3", className)}
      {...props}
    />
  );
}

function CardMetrics({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-metrics"
      className={cn("flex items-center gap-4 text-xs", className)}
      {...props}
    />
  );
}

function CardMetric({
  className,
  value,
  color = "text-gray-400",
  icon,
  ...props
}: React.ComponentProps<"div"> & {
  value: string;
  color?: string;
  icon?: React.ReactNode;
}) {
  return (
    <div
      data-slot="card-metric"
      className={cn("flex items-center gap-1", className)}
      {...props}
    >
      {icon && <span className={color}>{icon}</span>}
      <span className={color}>{value}</span>
    </div>
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
  CardStats,
  CardStat,
  CardPrice,
  CardMetrics,
  CardMetric,
};
