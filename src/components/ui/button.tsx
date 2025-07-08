import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const base = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
    
    const variants = {
      default: "bg-coral text-white hover:bg-coral/90",
      outline: "border border-charcoal text-charcoal hover:bg-charcoal hover:text-white",
    };

    return (
      <button ref={ref} className={cn(base, variants[variant], className)} {...props} />
    );
  }
);

Button.displayName = "Button";
