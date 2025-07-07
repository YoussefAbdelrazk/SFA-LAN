import { Button, PricingCard } from "@/components/ui";
import { pricingPlans } from "@/data";

export default function Pricing() {
  return (
    <div className="my-24 text-[#344054] ">
      <h2 className="font-bold text-4xl text-center my-6 leading-tight max-w-lg mx-auto">
        Choose the <span className="text-[#3E1492]">Perfect Plan</span> for Your Fitness Journey
      </h2>
      <p className="text-[ #475467] text-center text-md max-w-md mx-auto">
        Flexible Membership Options to Suit Your Goals and Lifestyle. Find the Right Fit and Start
        Transforming Your Life Today!
      </p>
      <div className="flex justify-center gap-4 mt-6">
        <Button variant="primary" size="lg">
          Monthly
        </Button>
        <Button variant="outline" size="lg">
          Yearly
        </Button>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-6 place-items-center">
        {pricingPlans.map((plan, idx) => (
          <PricingCard
            key={idx}
            title={plan.title}
            price={plan.price}
            features={plan.features}
            buttonText={plan.buttonText}
            highlighted={plan.isPopular}
            className={plan.isPopular ? "bg-[#3E1492] text-white scale-105 shadow-2xl" : ""}
          />
        ))}
      </div>
    </div>
  );
}
