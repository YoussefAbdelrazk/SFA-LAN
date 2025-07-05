"use client";

import logo from "@/assets/images/logo.png";
import { Button } from "@/components/ui";
import { navbarLinks } from "@/data";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#FCFCFD] p-4 rounded-b-3xl z-50 shadow-2xl h-[80px] w-full overflow-x-hidden">
      <nav className="flex justify-between items-center max-w-[1140px] mx-auto">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/">
            <Image
              src={logo}
              alt="Sherife Franca Logo"
              width={100}
              height={100}
              className="h-auto w-auto"
              priority
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center justify-between gap-10">
          {navbarLinks.map(link => (
            <li key={link.id} className="group relative">
              <Link
                href={link.href}
                className="font-semibold text-xl text-gray-900 hover:text-[#3E1492] transition-colors duration-300 relative"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#3E1492] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA Button */}
        <div className="hidden lg:block">
          <Button variant="primary" size="md">
            Join Now
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={toggleMenu}
          className="lg:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
          aria-label="Toggle mobile menu"
        >
          <span
            className={cn(
              "block w-6 h-0.5 bg-[#3E1492] transition-all duration-300",
              menuOpen ? "rotate-45 translate-y-1.5" : "",
            )}
          />
          <span
            className={cn(
              "block w-6 h-0.5 bg-[#3E1492] mt-1 transition-all duration-300",
              menuOpen ? "opacity-0" : "",
            )}
          />
          <span
            className={cn(
              "block w-6 h-0.5 bg-[#3E1492] mt-1 transition-all duration-300",
              menuOpen ? "-rotate-45 -translate-y-1.5" : "",
            )}
          />
        </button>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden absolute top-full left-0 right-0 bg-[#FCFCFD] shadow-lg transition-all duration-300 overflow-hidden",
            menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <ul className="flex flex-col py-4">
            {navbarLinks.map(link => (
              <li key={link.id}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block px-6 py-3 text-lg font-medium text-gray-900 hover:text-[#3E1492] hover:bg-gray-50 transition-colors duration-300"
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="px-6 py-3">
              <Button variant="primary" size="md" className="w-full">
                Join Now
              </Button>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
