import { testimonials } from "@/data";
import { TestimonialCard } from "@/components/ui";
import { Section } from "@/components/layout";

export default function Transformation() {
  return (
    <Section id="testimonials" className="my-32">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">
          Real Voices, <span className="text-[#3E1492]">Real Transformations</span>
        </h2>
        <p className="text-lg max-w-[862px] mx-auto text-[#475467] px-4 md:px-0">
          Hear from our members who have transformed their lives through our programs. Their stories
          inspire us every day.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.id}
            name={testimonial.name}
            role={testimonial.role}
            image={testimonial.image}
            rating={testimonial.rating}
            content={testimonial.content}
            memberSince={testimonial.memberSince}
            className="max-w-[360px] w-full"
          />
        ))}
      </div>
    </Section>
  );
}
