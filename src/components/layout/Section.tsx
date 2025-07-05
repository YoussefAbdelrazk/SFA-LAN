import { cn } from "@/lib/utils";
import React from "react";
import { Container } from "./Container";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  containerSize?: "sm" | "md" | "lg" | "xl" | "full";
  padding?: "none" | "sm" | "md" | "lg" | "xl";
  id?: string;
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ children, className, containerSize = "xl", padding = "lg", id, ...props }, ref) => {
    const paddings = {
      none: "",
      sm: "py-8",
      md: "py-12",
      lg: "py-16 md:py-20",
      xl: "py-20 md:py-24",
    };

    return (
      <section
        ref={ref}
        id={id}
        className={cn(paddings[padding], "overflow-x-hidden", className)}
        {...props}
      >
        <Container size={containerSize}>{children}</Container>
      </section>
    );
  },
);

Section.displayName = "Section";

export { Section };
