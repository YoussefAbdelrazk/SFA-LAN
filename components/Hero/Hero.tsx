import Side_menu from "@/public//Side_Menu_Mockup.png";
import login from "@/public/Login_Mockup.png";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="Hero bg-gradient-to-r from-[#1a1442] to-[#3E1492] py-10 md:py-20 rounded-b-3xl overflow-hidden px-4">
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 md:grid md:grid-cols-2 md:place-items-center md:gap-10 md:max-w-[1140px] md:mx-auto md:px-0">
      {/* content */}
      <div className="text-[#FCFCFD] flex flex-col space-y-6 max-w-full  md:max-w-[400px] lg:max-w-[558px]   ">
        <h1 className="font-bold  text-2xl md:text-3xl lg:text-5xl max-w-lg leading-tight">
          Get Fit. Pay Less.
          <br />
          Stay Strong with
          <br /> Shrife Franca App
        </h1>
        <p className="text-base md:text-lg max-w-sm">
          Join Shrife Franca Platform Today and, Personalized  Programs, and a Supportive Community
          to Achieve Your Fitness Goals.
        </p>
        <div className="flex flex-col lg:flex-row gap-4">
          <button className="bg-[#3E1492] text-white px-4 py-2 rounded-md cursor-pointer">
            Download App Now
          </button>
          <button className="cursor-pointer border border-[#3E1492] text-[#FCFCFD] px-4 py-2 rounded-md">
            Use Web Platform
          </button>
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
  </div>
  );
}
