import { Section } from "@/components/layout";
import { TestimonialCard } from "@/components/ui";
import { testimonials } from "@/data";

export default function Transformation() {
  return (
    <Section id="testimonials" className="my-32 ">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">
          Real Voices, <span className="text-[#3E1492]">Real Transformations</span>
        </h2>
        <p className="text-lg max-w-[862px] mx-auto text-[#475467] px-4 md:px-0">
          Hear from our members who have transformed their lives through our programs. Their stories
          inspire us every day.
        </p>
      </div>

      {/* Testimonials Grid - No Scroll */}
      <div className="w-full max-w-7xl mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8 place-items-center overflow-x-hidden">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="w-full max-w-[360px] flex justify-center">
              <TestimonialCard
                name={testimonial.name}
                role={testimonial.role}
                image={testimonial.image}
                rating={testimonial.rating}
                content={testimonial.content}
                memberSince={testimonial.memberSince}
                className="w-full max-w-[360px] mx-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
