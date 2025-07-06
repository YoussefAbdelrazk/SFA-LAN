import login from "@/assets/images/Login_Mockup.png";
import Side_menu from "@/assets/images/Side_Menu_Mockup.png";
import { Button } from "@/components/ui";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="Hero bg-gradient-to-r from-[#1a1442] to-[#3E1492] py-10 md:py-20 rounded-b-3xl overflow-hidden px-4 ">
      <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 md:grid md:grid-cols-2 md:place-items-center md:gap-10 md:max-w-[1140px] md:mx-auto md:px-0">
        {/* content */}
        <div className="text-[#FCFCFD] flex flex-col space-y-6 max-w-full  md:max-w-[400px] lg:max-w-[558px]   ">
          <h1 className="font-bold  text-2xl md:text-3xl lg:text-5xl max-w-lg leading-[150%]">
            Get Fit. Pay Less.
            <br />
            Stay Strong with
            <br /> Shrife Franca App
          </h1>
          <p className="text-base md:text-lg max-w-sm">
            Join Shrife Franca Platform Today and, Personalized Programs, and a Supportive Community
            to Achieve Your Fitness Goals.
          </p>
          <div className="flex flex-col lg:flex-row gap-4">
            <Button variant="primary" size="md">
              Download App Now
            </Button>
            <Button
              variant="outline"
              size="md"
              className="text-[#FCFCFD] border-[#FCFCFD] hover:bg-[#FCFCFD] hover:text-[#3E1492]"
            >
              Use Web Platform
            </Button>
          </div>
        </div>
        {/* image */}
        <div className="hidden md:block relative w-[220px] h-[450px] md:w-[350px] md:h-[725px] mx-auto mt-8 md:mt-0">
          <Image
            src={Side_menu}
            alt="side menu"
            width={350}
            height={725}
            className="absolute top-8 left-40 z-0 w-full h-full object-contain"
          />
          <Image
            src={login}
            alt="login"
            width={350}
            height={725}
            className="relative z-10 w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
