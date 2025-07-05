// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

export interface NavbarLink {
  id: number;
  name: string;
  href: string;
}

import { StaticImageData } from "next/image";

export interface Service {
  title: string;
  description: string;
  image: string | StaticImageData;
}

export interface PricingPlan {
  id: number;
  title: string;
  price: string;
  period: string;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
  buttonVariant: "primary" | "secondary";
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  image: string | StaticImageData;
  rating: number;
  content: string;
  memberSince: string;
}

// ============================================================================
// COMPONENT PROPS TYPES
// ============================================================================

export interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export interface CardProps {
  title: string;
  description: string;
  image: string | StaticImageData;
  className?: string;
}

export interface PricingCardProps {
  plan: PricingPlan;
  className?: string;
}

// ============================================================================
// ANIMATION TYPES
// ============================================================================

export interface AnimationConfig {
  duration: number;
  ease: string;
  delay?: number;
  stagger?: number;
}

export interface ScrollTriggerConfig {
  trigger: string;
  start: string;
  end: string;
  scrub?: boolean | number;
}

// ============================================================================
// UTILITY TYPES
// ============================================================================

export type Theme = "light" | "dark";

export interface SiteConfig {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
  };
}
