import * as React from "react";

import { cn } from "@/lib/utils";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      [
        "relative overflow-hidden",
        "rounded-[2rem] border border-emerald-950/10",
        "bg-white/95 text-emerald-950",
        "shadow-[0_25px_70px_-40px_rgba(6,78,59,0.4)]",
        "backdrop-blur-sm",
        "transition-all duration-500",
        "hover:-translate-y-1",
        "hover:border-emerald-300/70",
        "hover:shadow-[0_35px_90px_-45px_rgba(6,78,59,0.5)]",
      ],
      className,
    )}
    {...props}
  />
));

Card.displayName = "Card";

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      [
        "relative z-10",
        "flex flex-col space-y-2",
        "border-b border-emerald-950/5",
        "p-6 md:p-7",
      ],
      className,
    )}
    {...props}
  />
));

CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      [
        "font-bricolage",
        "text-xl font-black",
        "leading-tight tracking-tight",
        "text-emerald-950",
      ],
      className,
    )}
    {...props}
  />
));

CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      [
        "text-sm font-medium",
        "leading-relaxed",
        "text-slate-500",
      ],
      className,
    )}
    {...props}
  />
));

CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      [
        "relative z-10",
        "p-6 md:p-7",
      ],
      className,
    )}
    {...props}
  />
));

CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      [
        "relative z-10",
        "flex items-center",
        "border-t border-emerald-950/5",
        "bg-[#f4f8f5]/70",
        "p-6 md:p-7",
      ],
      className,
    )}
    {...props}
  />
));

CardFooter.displayName = "CardFooter";

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};