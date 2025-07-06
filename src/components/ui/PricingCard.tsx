import { cn } from "@/lib/utils";
import React from "react";
import { Button } from "./Button";

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  buttonText: string;
  highlighted?: boolean;
  className?: string;
}

const PricingCard = React.forwardRef<HTMLDivElement, PricingCardProps>(
  ({ title, price, features, buttonText, highlighted = false, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "border border-[#3E1492] p-6 rounded-2xl shadow-2xl min-h-[479px] w-full max-w-[360px] space-y-6 transition-all duration-500 hover:scale-105 flex flex-col justify-between overflow-hidden",
          highlighted && "bg-[#3E1492] text-white scale-105 shadow-2xl",
          className,
        )}
        {...props}
      >
        <h3
          className={cn(
            "font-bold text-3xl text-center",
            highlighted ? "text-white" : "text-gray-900",
          )}
        >
          {title}
        </h3>
        <h2
          className={cn(
            "text-5xl font-bold text-center",
            highlighted ? "text-white" : "text-[#3E1492]",
          )}
        >
          {price}
        </h2>
        <div className="overflow-hidden">
          <ul className="space-y-2 mt-4">
            {features.map((feature, idx) => (
              <li
                key={idx}
                className={cn(
                  "flex items-center gap-2 overflow-hidden",
                  highlighted ? "text-white" : "text-gray-700",
                )}
              >
                <span className={highlighted ? "text-white" : "text-[#3E1492]"}>✓</span>
                <span className="break-words overflow-hidden">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <Button
          variant={highlighted ? "secondary" : "primary"}
          size="lg"
          className={cn("w-full", highlighted && "bg-white text-[#3E1492] hover:bg-gray-100")}
        >
          {buttonText}
        </Button>
      </div>
    );
  },
);

PricingCard.displayName = "PricingCard";

export default PricingCard;
