import platform from "@/assets/images/platform.jpg";
import { Button, FlexComponent } from "@/components/ui";
import { CheckCircle2, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Platform() {
  return (
    <section className="max-w-6xl mx-auto py-12 px-4 sm:px-8 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center my-20 overflow-x-hidden">
      {/* image */}
      <div className="mb-8 md:mb-0 flex justify-center">
        <Image
          src={platform}
          alt="platform"
          width={530}
          height={500}
          className="rounded-3xl shadow-2xl w-full max-w-xs sm:max-w-md md:max-w-full h-auto"
        />
      </div>

      {/* content */}
      <div className="space-y-6 text-[#344054]">
        <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl leading-tight max-w-xl">
          Why Choose <span className="text-[#3E1492]">Sherife Franca</span> Platform?
        </h2>
        <p className="text-[#475467] text-base sm:text-lg">
          Discover the Benefits That Set Us Apart and Propel Your Fitness Journey Forward.
        </p>
        {/* flex components */}
        <div className="flex flex-col gap-4 mt-6">
          <FlexComponent
            title="Expert Trainers"
            description="Our certified trainers provide personalized guidance and expert advice to help you achieve your fitness goals."
            icon={<CheckCircle2 className="w-6 h-6 text-[#3E1492]" />}
          />
          <FlexComponent
            title="State-of-the-Art Equipment"
            description="Work out with the latest and most advanced fitness equipment to maximize your results and enhance your experience."
            icon={<CheckCircle2 className="w-6 h-6 text-[#3E1492]" />}
          />
          <FlexComponent
            title="Comprehensive Programs"
            description="Enjoy a variety of classes and programs tailored to all fitness levels, from beginner to advanced.."
            icon={<CheckCircle2 className="w-6 h-6 text-[#3E1492]" />}
          />
        </div>
        <Button variant="primary" size="lg" className="group mt-6">
          Get Started Now
          <ChevronRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1 cursor-pointer" />
        </Button>
      </div>
    </section>
  );
}
