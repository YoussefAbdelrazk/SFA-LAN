import React from "react";
import { cn } from "@/lib/utils";
import type { ButtonProps } from "@/types";

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({
    children,
    variant = "primary",
    size = "md",
    className,
    disabled = false,
    type = "button",
    onClick,
    ...props
  }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";

    const variants = {
      primary: "bg-[#3E1492] text-white hover:bg-[#2D0F6B] focus:ring-[#3E1492]",
      secondary: "bg-transparent text-[#3E1492] border border-[#3E1492] hover:bg-[#3E1492] hover:text-white focus:ring-[#3E1492]",
      outline: "bg-transparent text-[#3E1492] border border-[#3E1492] hover:bg-[#3E1492] hover:text-white focus:ring-[#3E1492]"
    };

    const sizes = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-6 py-3 text-lg"
    };

    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        onClick={onClick}
        className={cn(
          baseStyles,
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
