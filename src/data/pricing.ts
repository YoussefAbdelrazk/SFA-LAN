import type { PricingPlan } from "@/types";

export const pricingPlans: PricingPlan[] = [
  {
    id: 1,
    title: "Basic Plan",
    price: "$19",
    period: "month",
    features: [
      "All Free Features",
      "Personalized Workout Plan",
      "Progress Tracking & Analytics",
      "75% Ads Free Experience"
    ],
    buttonText: "Get Started",
    buttonVariant: "secondary",
    isPopular: false,
  },
  {
    id: 2,
    title: "Premium Plan",
    price: "$40",
    period: "month",
    features: [
      "All Free Features",
      "Personalized Workout Plan",
      "Progress Tracking & Analytics",
      "Personal Training Sessions",
      "Access to Wellness Programs",
    ],
    buttonText: "Get Started",
    buttonVariant: "primary",
    isPopular: true,
  },
  {
    id: 3,
    title: "Elite Plan",
    price: "$60",
    period: "month",
    features: [
      "All Premium Features",
      "Monthly Health Report",
      "Smart Device Sync",
      "100% Ads Free",
      "Priority Support"
    ],
    buttonText: "Get Started",
    buttonVariant: "secondary",
    isPopular: false,
  },
];
