import { Container, Section } from "@/components/layout";

import Image from "next/image";
import PrivacyImage from '@/assets/images//Placeholder Image.png'

export default function page() {
  return (
    <div className="min-h-screen overflow-x-hidden">
    {/* Hero Section with Background Image */}
    <section className="privacy-background relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>

      {/* Content */}
      <Container className="relative z-20 text-center text-white">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-7xl font-bold mb-6">
          Privacy and Policy
          </h1>


        </div>
      </Container>
    </section>

    {/* About Content Section */}
    <Section className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Preferences of   <span className="text-[#3E1492]">Privacy and Policy</span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
          When you visit websites, they may store or retrieve data in your browser. This storage is often necessary for the basic functionality of the website. The storage may be used for marketing, analytics, and personalization of the site, such as storing your preferences. Privacy is important to us, so you have the option of disabling certain types of storage that may not be necessary for the basic functioning of the website. Blocking categories may impact your experience on the website.
          </p>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Information You <span className="text-[#3E1492]">Provide to Us Directly</span></h2>
          <p className="text-lg text-gray-700 leading-relaxed">
          This is information you voluntarily give us, such as:
Account Information: Your name, email address, username, password, and contact preferences when you create an account.


          </p>

        </div>

        {/* Image */}
        <div className="relative">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl ">
            <Image
              src={PrivacyImage}
              alt="About Sherife Franca"
              width={530}
              height={540}
              className="object-cover object-center"
              sizes="(max-width: 530px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </Section>


  </div>
  )
}
