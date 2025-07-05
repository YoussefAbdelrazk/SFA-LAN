import { Section } from "@/components/layout";
import ServiceCard from "@/components/ui/ServiceCard";
import { services } from "@/data";

export default function Services() {
  return (
    <Section id="services">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold mb-4">
          Premium <span className="text-[#3E1492]">Fitness Services</span>
        </h2>
        <p className="text-lg text-[#475467] max-w-3xl mx-auto">
          Tailored Workouts, Expert Guidance, and Comprehensive Programs to Meet All Your Fitness
          Needs
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <div key={idx} className="flex justify-center h-full">
            <ServiceCard
              title={service.title}
              description={service.description}
              image={service.image}
            />
          </div>
        ))}
      </div>
    </Section>
  );
}
