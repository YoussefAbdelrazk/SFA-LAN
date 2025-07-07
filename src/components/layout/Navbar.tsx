"use client";

import logo from "@/assets/images/logo.png";
import { Button } from "@/components/ui";
import { navbarLinks } from "@/data";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-[#FCFCFD] p-4 rounded-b-3xl z-50 shadow-2xl w-full overflow-x-hidden">
        <nav className="flex justify-between items-center max-w-[1140px] mx-auto overflow-x-hidden">
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
          <ul className="hidden lg:flex items-center justify-between gap-10 text-[#344054]">
            {navbarLinks.map(link => (
              <li key={link.id} className="group relative">
                <Link
                  href={link.href}
                  className="font-semibold text-xl text-[#344054] hover:text-[#3E1492] transition-colors duration-300 relative"
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

          {/* Creative Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden relative w-12 h-12 rounded-full bg-gradient-to-r from-[#3E1492] to-[#6B46C1] shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#3E1492]/20 group"
            aria-label="Toggle mobile menu"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#3E1492] to-[#6B46C1] opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
            <div className="relative flex flex-col justify-center items-center w-full h-full">
              <span
                className={cn(
                  "block w-5 h-0.5 bg-white transition-all duration-500 ease-in-out",
                  menuOpen ? "rotate-45 translate-y-1" : "",
                )}
              />
              <span
                className={cn(
                  "block w-5 h-0.5 bg-white mt-1 transition-all duration-500 ease-in-out",
                  menuOpen ? "opacity-0 scale-0" : "",
                )}
              />
              <span
                className={cn(
                  "block w-5 h-0.5 bg-white mt-1 transition-all duration-500 ease-in-out",
                  menuOpen ? "-rotate-45 -translate-y-1" : "",
                )}
              />
            </div>
          </button>
        </nav>
      </header>

      {/* Creative Full-Screen Mobile Menu */}
      <div
        className={cn(
          "lg:hidden fixed inset-0 z-40 transition-all duration-700 ease-in-out navbar-mobile-menu",
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible",
        )}
      >
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1442] via-[#3E1492] to-[#6B46C1]">
          <div className="absolute inset-0 bg-black/20"></div>
          {/* Floating Circles Animation */}
          <div className="absolute top-16 left-8 w-20 h-20 bg-white/10 rounded-full animate-bounce"></div>
          <div className="absolute top-32 right-12 w-16 h-16 bg-white/5 rounded-full animate-pulse"></div>
          <div className="absolute bottom-24 left-16 w-12 h-12 bg-white/10 rounded-full animate-ping"></div>
          <div className="absolute bottom-16 right-8 w-10 h-10 bg-white/5 rounded-full animate-bounce"></div>
        </div>

        {/* Menu Content */}
        <div className="mobile-menu-content px-6">
          {/* Menu Items */}
          <nav className="mobile-menu-nav text-center space-y-3">
            {navbarLinks.map((link, index) => (
              <div
                key={link.id}
                className={cn(
                  "transform transition-all duration-700 ease-out mobile-menu-item",
                  menuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-white mobile-menu-text font-bold hover:text-yellow-300 transition-all duration-300 transform  group py-1"
                >
                  <span className="relative">
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-yellow-300 transform scale-x-0 origin-left transition-transform duration-300 "></span>
                  </span>
                </Link>
              </div>
            ))}

            {/* CTA Button */}
            <div
              className={cn(
                "transform transition-all duration-700 ease-out mt-4 mobile-menu-item",
                menuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0",
              )}
              style={{ transitionDelay: `${navbarLinks.length * 100}ms` }}
            >
              <Button
                variant="primary"
                size="md"
                className="bg-white text-[#3E1492] hover:bg-yellow-300 hover:text-[#1a1442] transition-all duration-300 px-6 py-2 text-base font-bold shadow-2xl"
                onClick={() => setMenuOpen(false)}
              >
                🚀 Join Now
              </Button>
            </div>
          </nav>

          {/* Decorative Elements */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
            <div className="flex space-x-2">
              <div className="w-1.5 h-1.5 bg-white/50 rounded-full animate-pulse"></div>
              <div
                className="w-1.5 h-1.5 bg-white/30 rounded-full animate-pulse"
                style={{ animationDelay: "0.2s" }}
              ></div>
              <div
                className="w-1.5 h-1.5 bg-white/50 rounded-full animate-pulse"
                style={{ animationDelay: "0.4s" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
