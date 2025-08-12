import React from "react";
import { Button, type ButtonProps } from "@/components/ui/button";

export type CtaButtonProps = Omit<ButtonProps, "variant"> & {
  variant?: "primary" | "secondary" | "ghost";
};

const CtaButton = React.forwardRef<HTMLButtonElement, CtaButtonProps>(
  ({ variant = "primary", size = "lg", className, children, ...props }, ref) => {
    return (
      <Button ref={ref} variant={variant} size={size} className={className} {...props}>
        {children}
      </Button>
    );
  }
);

CtaButton.displayName = "CtaButton";

export default CtaButton;
