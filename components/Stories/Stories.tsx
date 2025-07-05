import StoriesImage from "@/public/bigpic.jpg";
import smallpic1 from "@/public/smpic1.jpg";
import smallpic2 from "@/public/smpic2.jpg";
import Image from "next/image";

export default function Stories() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-8 md:px-12 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center my-20 place-items-center">
      {/* content */}
      <div className="space-y-4">
        <h2 className="text-4xl font-bold leading-tight max-w-[458px]">
          Inspiring Success Stories from <span className="text-[#3E1492]">Sherife Franca</span>{" "}
          Platform
        </h2>
        <p className="text-lg text-[#475467] max-w-[458px]">
          Sherife Franca Platform, we celebrate the incredible journeys of our members. From weight
          loss triumphs and muscle gain milestones to enhanced well-being and newfound confidence,
          our members&apos; success stories highlight the power of commitment and community. Explore
          these inspiring testimonials and see how FitLife Studio can help you reach your fitness
          goals.
        </p>
        <button className="bg-[#3E1492] text-white px-4 py-2 rounded-md cursor-pointer flex items-center gap-2 mt-4">
          Join Today
        </button>
      </div>
      {/* image */}
      <div className="relative">
        <Image
          src={StoriesImage}
          alt="stories"
          width={487}
          height={532}
          className="rounded-3xl shadow-2xl "
        />
        <Image
          src={smallpic1}
          alt="stories"
          width={216}
          height={216}
          className="rounded-3xl shadow-2xl absolute top-[230px] -left-[30px]"
        />
        <Image
          src={smallpic2}
          alt="stories"
          width={244}
          height={300}
          className="rounded-3xl shadow-xl absolute top-[64px] -right-[50px]"
        />
      </div>
    </div>
  );
}
