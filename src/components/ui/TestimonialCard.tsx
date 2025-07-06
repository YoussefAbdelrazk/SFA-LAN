import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { FaStar } from "react-icons/fa";

interface TestimonialCardProps {
  name: string;
  role: string;
  image: string | StaticImageData;
  rating: number;
  content: string;
  memberSince: string;
  className?: string;
}

const TestimonialCard = React.forwardRef<HTMLDivElement, TestimonialCardProps>(
  ({ name, role, image, rating, content, memberSince, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "bg-white rounded-2xl shadow-xl p-6 transition-all duration-300 hover:shadow-2xl  w-full max-w-[360px] overflow-hidden",
          className,
        )}
        {...props}
      >
        {/* User Info */}
        <div className="flex items-center gap-4 mb-4">
          <div className="relative w-16 h-16 rounded-full overflow-hidden">
            <Image src={image} alt={name} fill className="object-cover" sizes="64px" />
          </div>
          <div>
            <h3 className="font-bold text-lg text-gray-900">{name}</h3>
            <p className="text-gray-600 text-sm">{role}</p>
            <p className="text-gray-500 text-xs">Member since {memberSince}</p>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-4">
          {[...Array(5)].map((_, index) => (
            <FaStar
              key={index}
              className={cn("w-4 h-4", index < rating ? "text-yellow-400" : "text-gray-300")}
            />
          ))}
          <span className="text-sm text-gray-600 ml-2">({rating}/5)</span>
        </div>

        {/* Content */}
        <p className="text-gray-700 leading-relaxed italic break-words overflow-hidden">
          &ldquo;{content}&rdquo;
        </p>
      </div>
    );
  },
);

TestimonialCard.displayName = "TestimonialCard";

export default TestimonialCard;
