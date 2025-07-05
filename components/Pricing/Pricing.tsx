import { pricingPlans } from "@/data/PricingData";
import PricingCard from "./PricingCard";

export default function Pricing() {
  return (
    <div className="my-24">
      <h2 className="font-bold text-4xl text-center my-6 leading-tight max-w-lg mx-auto">
        Choose the <span className="text-[#3E1492]">Perfect Plan</span> for Your Fitness Journey
      </h2>
      <p className="text-[ #475467] text-center text-md max-w-md mx-auto">
        Flexible Membership Options to Suit Your Goals and Lifestyle. Find the Right Fit and Start
        Transforming Your Life Today!
      </p>
      <div className="flex justify-center gap-4 mt-6">
        <button className="bg-[#3E1492] text-white px-6 py-3 rounded-md cursor-pointer">
          Monthly
        </button>
        <button className="text-[#3E1492] border border-[#3E1492] px-6 py-3 rounded-md cursor-pointer">
          Yearly
        </button>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-6 place-items-center">
        {pricingPlans.map((plan, idx) => (
          <PricingCard
            key={idx}
            title={plan.title}
            price={plan.price}
            features={plan.features}
            buttonText={plan.buttonText}
            highlighted={plan.highlighted}
            className={plan.highlighted ? "bg-[#3E1492] text-white scale-105 shadow-2xl" : ""}
          />
        ))}
      </div>
    </div>
  );
}
