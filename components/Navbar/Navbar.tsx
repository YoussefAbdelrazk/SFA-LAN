'use client'

import { NavbarLinks } from "@/data/NavbarLinks";
import logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className= " fixed bg-[#FCFCFD] p-4 rounded-b-3xl z-50 shadow-2xl h-[72px] w-full">
      <nav className="flex justify-between items-center max-w-[1140px] mx-auto">
        <div>
          <Image src={logo} alt="logo" width={100} height={100} />
        </div>
        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center justify-between gap-10">
          {NavbarLinks.map(link => (
            <li key={link.id} className="group relative hover:text-[#3E1492]">
              <Link href={link.href} className="font-semibold text-xl">
                {link.name}
                <span className="nav-underline"></span>
              </Link>
            </li>
          ))}
        </ul>
        {/* Mobile Hamburger */}
        <button
          className="lg:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-6 h-0.5 bg-[#3E1492] mb-1 transition-all ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-[#3E1492] mb-1 transition-all ${
              menuOpen ? "opacity-0" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-[#3E1492] transition-all ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
        <div className="hidden lg:block">
          <button className="bg-[#3E1492] text-white px-4 py-2 rounded-md cursor-pointer">Join Now</button>
        </div>
      </nav>
      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-full h-full bg-[#FCFCFD] z-40 transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4">
          <Image src={logo} alt="logo" width={80} height={80} />
          <button onClick={() => setMenuOpen(false)} aria-label="Close menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#3E1492"
              className="w-8 h-8"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <ul className="flex flex-col px-6  gap-8 mt-10">
          {NavbarLinks.map(link => (
            <li
              key={link.id}
              className="text-[#3E1492] border-b-2 mb-2 text-2xl font-semibold"
              onClick={() => setMenuOpen(false)}
            >
              <Link href={link.href}>{link.name}</Link>
            </li>
          ))}
          <li>
            <button className="bg-[#3E1492] text-white px-6 py-3 rounded-md mt-4 cursor-pointer">Join Now</button>
          </li>
        </ul>
      </div>
    </header>
  );
}
