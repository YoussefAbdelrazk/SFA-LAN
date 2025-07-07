import Image from "next/image";
import mock from "@/assets/images/Bezel.png";
import banner from "@/assets/images//Group 1000004719.png";

export default function Mock() {
  return (
    <section className="my-20 text-[#344054]">
      <h2 className="text-6xl font-bold text-center">Your Training <span className="text-[#3E1492]">Any Device</span></h2>

      <div className=" ">
        <Image
          src={mock}
          alt="mock"
          width={530}
          height={500}
          className="rounded-3xl shadow-2xl w-full mx-auto  max-w-xs sm:max-w-md md:max-w-full h-auto"
        />
      </div>


      <div className="my-12">
      <Image
          src={banner}
          alt="mock"
          width={530}
          height={500}
          className="rounded-xl shadow-2xl w-full mx-auto  max-w-xs sm:max-w-md md:max-w-full h-auto"
        />
      </div>


    </section>
  )
}
