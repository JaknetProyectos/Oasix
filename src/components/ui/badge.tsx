import * as React from "react";
import {
  cva,
  type VariantProps,
} from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  [
    "inline-flex items-center justify-center gap-1.5",
    "rounded-full border px-3 py-1",
    "text-[10px] font-black uppercase tracking-[0.12em]",
    "transition-all duration-300",
    "focus:outline-none focus:ring-4 focus:ring-emerald-500/15",
    "focus:ring-offset-2",
  ],
  {
    variants: {
      variant: {
        default: [
          "border-emerald-800",
          "bg-emerald-950",
          "text-emerald-50",
          "shadow-sm shadow-emerald-950/15",
          "hover:-translate-y-0.5",
          "hover:bg-emerald-900",
          "hover:shadow-md",
        ],

        secondary: [
          "border-amber-200",
          "bg-amber-300",
          "text-emerald-950",
          "shadow-sm shadow-amber-300/20",
          "hover:-translate-y-0.5",
          "hover:bg-amber-200",
          "hover:shadow-md",
        ],

        destructive: [
          "border-red-700",
          "bg-red-600",
          "text-white",
          "shadow-sm shadow-red-600/20",
          "hover:-translate-y-0.5",
          "hover:bg-red-700",
          "hover:shadow-md",
        ],

        outline: [
          "border-emerald-950/15",
          "bg-white/70",
          "text-emerald-800",
          "backdrop-blur-sm",
          "hover:border-emerald-300",
          "hover:bg-emerald-50",
          "hover:text-emerald-950",
        ],
      },
    },

    defaultVariants: {
      variant: "default",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({
  className,
  variant,
  ...props
}: BadgeProps) {
  return (
    <div
      className={cn(
        badgeVariants({ variant }),
        className,
      )}
      {...props}
    />
  );
}

export { Badge, badgeVariants };