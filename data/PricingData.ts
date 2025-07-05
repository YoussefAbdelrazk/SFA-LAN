

 export type PricingCardProps = {
  title: string;
  price: string;
  features: string[];
  buttonText: string;
  highlighted: boolean;
};
export const pricingPlans : PricingCardProps[] = [
  {
    title: "Basic Plan",
    price: "$19/month",
    features: [
      "All Free Features",
      "Personalized Workout Plan",
      "Progress Tracking & Analytics",
      "75% Ads Free Experience"
    ],
    buttonText: "Get Started",
    highlighted: false,
  },
  {
    title: "Premium Plan",
    price: "$40/mo",
    features: [
      "All Free Features",
      "Personalized Workout Plan",
      "Progress Tracking & Analytics",
      "Personal Training Sessions",
      "Access to Wellness Programs",
    ],
    buttonText: "Get Started",
    highlighted: true,
  },
  {
    title: "Elite Plan",
    price: "$60/mo",
    features: [
      "All Fit Core Feature",
      "Monthly Health Report",
      "Smart Device Sync",
      "100% Ads Free"
    ],
    buttonText: "Get Started",
    highlighted: false,
  },
  // Add more plans as needed
];
