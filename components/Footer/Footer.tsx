import logo from "@/public/logo.png";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="max-w-7xl mx-auto my-24 px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <Image src={logo} alt="logo" width={100} height={100} />
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 text">
          <button className="text-[#3E1492]">Home</button>
          <button className="text-[#3E1492]">About Us</button>
          <button className="text-[#3E1492]">Privacy And Policy</button>
          <button className="text-[#3E1492]">FAQ</button>
          <button className="text-[#3E1492]">Contact</button>
        </div>
        {/* icons */}
        <div>
          <div className="flex items-center gap-4 justify-center md:justify-end">
            <button className="text-[#3E1492]">
              <Facebook className="w-6 h-6" />
            </button>
            <button className="text-[#3E1492]">
              <Twitter className="w-6 h-6" />
            </button>
            <button className="text-[#3E1492]">
              <Linkedin className="w-6 h-6" />
            </button>
            <button className="text-[#3E1492]">
              <Youtube className="w-6 h-6" />
            </button>
            <button className="text-[#3E1492]">
              <Instagram className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-[#3E1492] my-8"></div>
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row flex-wrap items-center gap-4 justify-between text-center">
          <button className="text-[#3E1492]">© 2025 . All rights reserved@Catlista</button>
          <button className="text-[#3E1492]">Privacy Policy</button>
          <button className="text-[#3E1492]">Terms of Service</button>
          <button className="text-[#3E1492]">Cookies Settings</button>
        </div>
      </div>
    </div>
  );
}
