import logo from "@/public/logo.png";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="max-w-7xl mx-auto my-24 px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        <Image src={logo} alt="logo" width={100} height={100} />
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 text-[#344054]">
          <button className="cursor-pointer">Home</button>
          <button className="cursor-pointer ">About Us</button>
          <button className="cursor-pointer">Privacy And Policy</button>
          <button className="cursor-pointer">FAQ</button>
          <button className="cursor-pointer">Contact</button>
        </div>
        {/* icons */}
        <div>
          <div className="flex items-center gap-4 justify-center md:justify-end">
            <button className="text-[#3E1492] hover:text-[#2D0F6B] transition-colors duration-300">
              <FaFacebook className="w-6 h-6" />
            </button>
            <button className="text-[#3E1492] hover:text-[#2D0F6B] transition-colors duration-300">
              <FaTwitter className="w-6 h-6" />
            </button>
            <button className="text-[#3E1492] hover:text-[#2D0F6B] transition-colors duration-300">
              <FaLinkedin className="w-6 h-6" />
            </button>
            <button className="text-[#3E1492] hover:text-[#2D0F6B] transition-colors duration-300">
              <FaYoutube className="w-6 h-6" />
            </button>
            <button className="text-[#3E1492] hover:text-[#2D0F6B] transition-colors duration-300">
              <FaInstagram className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
      <div className="border-t border-[#3E1492] my-8"></div>
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row flex-wrap items-center gap-4 justify-between text-center">
          <button className="text-[#344054] cursor-pointer">© 2025 . All rights reserved@Catalyst</button>
          <button className="text-[#344054] cursor-pointer">Privacy Policy</button>
          <button className="text-[#344054] cursor-pointer">Terms of Service</button>
          <button className="text-[#344054] cursor-pointer">Cookies Settings</button>
        </div>
      </div>
    </div>
  );
}
