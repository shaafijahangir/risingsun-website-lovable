import React from "react";
import { Button, type ButtonProps } from "@/components/ui/button";

export type CtaButtonProps = Omit<ButtonProps, "variant"> & {
  variant?: "primary" | "secondary" | "ghost";
};

const CtaButton = React.forwardRef<HTMLButtonElement, CtaButtonProps>(
  ({ variant = "primary", size = "lg", className, children, ...props }, ref) => {
    const variantClasses = {
      primary: "btn-3d bg-gradient-to-r from-primary to-primary/90 text-primary-foreground hover:shadow-3d-lg hover:glow-primary",
      secondary: "glass-morphism bg-white/10 text-foreground border border-white/20 hover:bg-white/20 hover:shadow-3d-md",
      ghost: "hover:bg-white/10 hover:shadow-3d-sm text-foreground/80 hover:text-foreground"
    };

    return (
      <Button 
        ref={ref} 
        variant="ghost" 
        size={size} 
        className={`transition-all duration-300 hover-lift text-shadow-sm font-semibold ${variantClasses[variant]} ${className}`} 
        {...props}
      >
        {children}
      </Button>
    );
  }
);

CtaButton.displayName = "CtaButton";

export default CtaButton;
