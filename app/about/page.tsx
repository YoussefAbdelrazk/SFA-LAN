
import aboutUsImage from "@/assets/images/AboutUsGrid.jpg";
import { Container, Section } from "@/components/layout";
import { Button } from "@/components/ui";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Hero Section with Background Image */}
      <section className="about-background relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>

        {/* Content */}
        <Container className="relative z-20 text-center text-white">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Discover the Unique Qualities About  Sherife Franca Platform
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
            we believe that fitness is more than just a routine; its a way of life. Founded with the mission to inspire and empower individuals on their fitness journeys
            </p>

          </div>
        </Container>
      </section>

      {/* About Content Section */}
      <Section className="bg-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Our <span className="text-[#3E1492]">Story</span>
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
            At Shrife Franca Platform, we believe that fitness is more than just a routine; its a way of life. Founded with the mission to inspire and empower individuals on their fitness journeys, we offer a comprehensive range of services tailored to meet the unique needs of each member. Our state-of-the-art facility, expert trainers, and vibrant community create an environment where
              life.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our state-of-the-art facilities, expert trainers, and supportive community create the
              perfect environment for you to achieve your fitness goals, whether you&apos;re just
              starting your journey or looking to take your training to the next level.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button variant="primary" size="lg">
                Start Your Journey
              </Button>
          
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={aboutUsImage}
                alt="About Sherife Franca"
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Stats Section */}
      <Section className="bg-gradient-to-r from-[#1a1442] to-[#3E1492] text-white">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Impact</h2>
          <p className="text-xl opacity-90">Making a difference in our community</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <div className="text-4xl font-bold">1000+</div>
            <div className="text-lg opacity-90">Happy Members</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold">50+</div>
            <div className="text-lg opacity-90">Expert Trainers</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold">5+</div>
            <div className="text-lg opacity-90">Years Experience</div>
          </div>
          <div className="space-y-2">
            <div className="text-4xl font-bold">24/7</div>
            <div className="text-lg opacity-90">Access Available</div>
          </div>
        </div>
      </Section>

      {/* Mission Section */}
      <Section className="bg-gray-50">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Our <span className="text-[#3E1492]">Mission</span>
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            To empower individuals to achieve their fitness goals through personalized training,
            innovative programs, and a supportive community that celebrates every victory, no matter
            how small.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[#3E1492] rounded-full flex items-center justify-center mx-auto">
                <span className="text-white text-2xl font-bold">💪</span>
              </div>
              <h3 className="text-xl font-bold">Strength</h3>
              <p className="text-gray-600">
                Building physical and mental strength through proven training methods
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[#3E1492] rounded-full flex items-center justify-center mx-auto">
                <span className="text-white text-2xl font-bold">🤝</span>
              </div>
              <h3 className="text-xl font-bold">Community</h3>
              <p className="text-gray-600">
                Creating lasting connections and support systems for lifelong wellness
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-[#3E1492] rounded-full flex items-center justify-center mx-auto">
                <span className="text-white text-2xl font-bold">🎯</span>
              </div>
              <h3 className="text-xl font-bold">Results</h3>
              <p className="text-gray-600">
                Delivering measurable results through personalized fitness programs
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
