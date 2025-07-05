import { PricingCardProps } from "@/data/PricingData";

export default function PricingCard({
  title,
  price,
  features,
  buttonText,
  className = "",
}: PricingCardProps & { className?: string }) {
  const isHighlighted = className.includes("bg-[#3E1492]");
  return (
    <div
      className={`border border-[#3E1492] p-6 rounded-2xl shadow-2xl h-[479px] w-[360px] space-y-10 ${className} hover:scale-105 duration-500`}
    >
      <h3 className={`font-bold text-3xl text-center ${isHighlighted ? "text-white" : ""}`}>
        {title}
      </h3>
      <h2
        className={`text-5xl font-bold text-center ${
          isHighlighted ? "text-white" : "text-[#3E1492]"
        }`}
      >
        {price}
      </h2>
      <div>
        <ul className="space-y-2 mt-4">
          {features.map((feature, idx) => (
            <li
              key={idx}
              className={`flex items-center gap-2 ${isHighlighted ? "text-white" : ""}`}
            >
              <span className={isHighlighted ? "text-white" : "text-[#3E1492]"}>✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      <button
        className={`px-6 py-3 rounded-md cursor-pointer flex items-center gap-2 mt-4 w-full justify-center font-bold transition ${
          isHighlighted
            ? "bg-white text-[#3E1492] hover:bg-[#FCFCFD]"
            : "bg-[#3E1492] text-white hover:bg-[#2a0e6e]"
        }`}
      >
        {buttonText}
      </button>
    </div>
  );
}
