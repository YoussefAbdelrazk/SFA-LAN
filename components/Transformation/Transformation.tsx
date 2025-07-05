import john from "@/public/john.jpg";
import mike from "@/public/mike.jpg";
import sarah from "@/public/sarah.jpg";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

export default function Transformation() {
  return (
    <section className="my-32">
      <h2 className="text-4xl font-bold text-center my-6 leading-tight  mx-auto">
        Real Voices, <span className="text-[#3E1492]">Real Transformations</span>
      </h2>
      <p className="text-center text-lg max-w-[862px] mx-auto text-[#475467] px-4 md:px-0">
        FitLife Studio’s group classes are so much fun and motivating. I have lost 20 pounds and
        gained a ton of confidence. The community here is amazing!.
      </p>

      <div className=" max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12 place-items-center gap-8 ">
        {/* card 1 */}
        <div className="max-w-[360px] h-[350px] p-6 rounded-xl border border-[#3E1492] flex flex-col space-y-8">
          <div className="flex items-center gap-2">
            <FaStar className="text-[#3E1492] text-xl" />
            <FaStar className="text-[#3E1492] text-xl" />
            <FaStar className="text-[#3E1492] text-xl" />
            <FaStar className="text-[#3E1492] text-xl" />
            <FaStar className="text-[#3E1492] text-xl" />
          </div>
          <p className="max-w-[390px]">
            Joining FitLife Studio was the best decision I ever made for my health. The trainers are
            incredibly supportive, and the personalized programs have helped me achieve results I{" "}
          </p>
          <div className="flex items-center gap-4">
            <Image
              src={john}
              alt="john"
              width={64}
              height={64}
              className="w-16 h-16 rounded-full object-cover border-2 border-[#3E1492] shadow"
            />
            <div>
              <h3 className="font-bold text-lg">John Doe</h3>
              <p className="text-[#475467]">Member Since 2021</p>
            </div>
          </div>
        </div>
        {/* card 2 */}
        <div className="max-w-[360px] h-[350px] p-6 rounded-xl border border-[#3E1492] flex flex-col space-y-8">
          <div className="flex items-center gap-2">
            <FaStar className="text-[#3E1492] text-xl" />
            <FaStar className="text-[#3E1492] text-xl" />
            <FaStar className="text-[#3E1492] text-xl" />
            <FaStar className="text-[#3E1492] text-xl" />
            <FaStar className="text-[#3E1492] text-xl" />
          </div>
          <p className="max-w-[390px]">
            Joining FitLife Studio was the best decision I ever made for my health. The trainers are
            incredibly supportive, and the personalized programs have helped me achieve results I{" "}
          </p>
          <div className="flex items-center gap-4">
            <Image
              src={sarah}
              alt="john"
              width={64}
              height={64}
              className="w-16 h-16 rounded-full object-cover border-2 border-[#3E1492] shadow"
            />
            <div>
              <h3 className="font-bold text-lg">Sarah Smith</h3>
              <p className="text-[#475467]">Graphic Designer</p>
            </div>
          </div>
        </div>
        {/* card 3 */}

        <div className="max-w-[360px] h-[350px] p-6 rounded-xl border border-[#3E1492] flex flex-col space-y-8">
          <div className="flex items-center gap-2">
            <FaStar className="text-[#3E1492] text-xl" />
            <FaStar className="text-[#3E1492] text-xl" />
            <FaStar className="text-[#3E1492] text-xl" />
            <FaStar className="text-[#3E1492] text-xl" />
            <FaStar className="text-[#3E1492] text-xl" />
          </div>
          <p className="max-w-[390px]">
            The holistic approach at FitLife Studio has improved my overall well-being. The
            combination of strength training, cardio, and wellness programs has been life-changing.{" "}
          </p>
          <div className="flex items-center gap-4">
            <Image
              src={mike}
              alt="john"
              width={64}
              height={64}
              className="w-16 h-16 rounded-full object-cover border-2 border-[#3E1492] shadow"
            />
            <div>
              <h3 className="font-bold text-lg">Mike Johnson</h3>
              <p className="text-[#475467]">Entrepreneur</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
