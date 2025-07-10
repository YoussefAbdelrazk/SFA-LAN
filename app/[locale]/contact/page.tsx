
import contactImage from "@/assets/images/contact.jpg";
import { ContactForm, ContactInfo } from "@/components/contact";
import { Container, Section } from "@/components/layout";
import Image from "next/image";

// You can add a contact image here if you have one
// import contactImage from "@/assets/images/contact.jpg";

export default function ContactPage() {
  return (
    <div className="min-h-screen overflow-x-hidden my-20 text-[#344054] ">
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-gray-50 to-white pt-32 pb-16 ">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Contact Form - Left Side */}
            <div className="order-1 lg:order-1">
              <ContactForm />
            </div>

            {/* Contact Image/Illustration - Right Side */}
            <div className="order-2 lg:order-2 ">
              <Image
                src={contactImage}
                width={530}
                height={734}
                alt="Contact Us "
                className="rounded-3xl shadow-2xl w-full h-[300px] sm:h-[400px] md:h-[500px] lg:w-[530px] lg:h-[734px] object-cover object-center  hover:shadow-3xl"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Contact Info Cards */}
      <Section className="bg-white text-[#344054] ">
        <Container>
          <ContactInfo />
        </Container>
      </Section>
    </div>
  );
}
