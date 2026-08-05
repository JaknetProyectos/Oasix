import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import {
  cva,
  type VariantProps,
} from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2",
    "whitespace-nowrap rounded-xl",
    "text-sm font-black",
    "transition-all duration-300",
    "focus-visible:outline-none",
    "focus-visible:ring-4 focus-visible:ring-emerald-500/15",
    "focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
    "active:scale-[0.97]",
    "[&_svg]:pointer-events-none",
    "[&_svg]:size-4",
    "[&_svg]:shrink-0",
  ],
  {
    variants: {
      variant: {
        default: [
          "border border-emerald-900",
          "bg-emerald-950",
          "text-white",
          "shadow-lg shadow-emerald-950/15",
          "hover:-translate-y-0.5",
          "hover:bg-emerald-900",
          "hover:shadow-xl hover:shadow-emerald-950/20",
        ],

        destructive: [
          "border border-red-700",
          "bg-red-600",
          "text-white",
          "shadow-md shadow-red-600/20",
          "hover:-translate-y-0.5",
          "hover:bg-red-700",
          "hover:shadow-lg hover:shadow-red-600/25",
        ],

        outline: [
          "border border-emerald-950/15",
          "bg-white/80",
          "text-emerald-950",
          "shadow-sm",
          "backdrop-blur-sm",
          "hover:-translate-y-0.5",
          "hover:border-emerald-300",
          "hover:bg-emerald-50",
          "hover:text-emerald-900",
          "hover:shadow-md",
        ],

        secondary: [
          "border border-amber-200",
          "bg-amber-300",
          "text-emerald-950",
          "shadow-lg shadow-amber-300/20",
          "hover:-translate-y-0.5",
          "hover:bg-amber-200",
          "hover:shadow-xl hover:shadow-amber-300/25",
        ],

        ghost: [
          "border border-transparent",
          "bg-transparent",
          "text-emerald-950",
          "hover:border-emerald-950/5",
          "hover:bg-emerald-100",
          "hover:text-emerald-800",
        ],

        link: [
          "h-auto rounded-none",
          "px-0 py-0",
          "text-emerald-700",
          "shadow-none",
          "underline-offset-4",
          "hover:text-emerald-950",
          "hover:underline",
          "active:scale-100",
        ],
      },

      size: {
        default: "h-11 px-5 py-2.5",

        sm: [
          "h-9",
          "rounded-lg",
          "px-4",
          "text-xs",
        ],

        lg: [
          "h-14",
          "rounded-2xl",
          "px-8",
          "text-base",
        ],

        icon: [
          "h-11",
          "w-11",
          "shrink-0",
          "p-0",
        ],
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<
  HTMLButtonElement,
  ButtonProps
>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      ...props
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(
          buttonVariants({
            variant,
            size,
            className,
          }),
        )}
        ref={ref}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };