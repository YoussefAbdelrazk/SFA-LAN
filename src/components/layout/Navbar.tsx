'use client';

import logo from '@/assets/images/logo.png';
import {
  default as LanguageSwitcher,
  default as LocaleSwitcher,
} from '@/components/ui/LanguageSwitcher';
import { navbarLinks } from '@/data';
import { Link, usePathname } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const t = useTranslations('navigation');
  // const commonT = useTranslations('common');
  const pathname = usePathname();

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (!mounted) return;

    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen, mounted]);

  return (
    <>
      <header className='fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md p-4 rounded-b-3xl z-50 shadow-2xl w-full overflow-x-hidden border-b border-gray-200/50'>
        <nav className='flex justify-between items-center max-w-[1240px] mx-auto overflow-x-hidden px-4'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <Link href='/' className='hover:scale-105 transition-transform duration-300'>
              <Image
                src={logo}
                alt='Sherife Franca Logo'
                width={120}
                height={40}
                className='h-auto w-auto'
                priority
              />
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul className='hidden lg:flex items-center justify-between gap-8 text-gray-700'>
            {navbarLinks.map(link => {
              const isActive = pathname === link.href;
              return (
                <li key={link.id} className='group relative '>
                  <Link
                    href={link.href}
                    className={cn(
                      'font-semibold text-lg transition-all duration-300 relative py-2 px-3 rounded-xl cursor-pointer',
                      isActive
                        ? 'text-white text-[#3E1492] border-b-2 border-[#3E1492] shadow-lg font-extrabold scale-105'
                        : 'text-gray-700 hover:text-[#3E1492]',
                    )}
                  >
                    <span className='relative z-10 cursor-pointer'>
                      {t(link.name as keyof typeof t)}
                    </span>
                    {/* Creative Gradient Underline for Active */}
                    {isActive && (
                      <span className='absolute left-1/2 -translate-x-1/2 bottom-0 w-3/4 h-1 rounded-full   shadow-md animate-pulse'></span>
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA Button and Language Switcher */}
          <div className='hidden lg:flex items-center gap-6'>
            <LocaleSwitcher />
            {/* <Button
              variant='primary'
              size='md'
              className='bg-gradient-to-r from-[#3E1492] to-[#6B46C1] hover:from-[#6B46C1] hover:to-[#3E1492] shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105'
            >
              {commonT('joinNow')}
            </Button> */}
          </div>

          {/* Creative Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className='lg:hidden relative w-12 h-12 rounded-full bg-gradient-to-r from-[#3E1492] to-[#6B46C1] shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#3E1492]/20 group'
            aria-label='Toggle mobile menu'
          >
            <div className='absolute inset-0 rounded-full bg-gradient-to-r from-[#3E1492] to-[#6B46C1] opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse'></div>
            <div className='relative flex flex-col justify-center items-center w-full h-full'>
              <span
                className={cn(
                  'block w-5 h-0.5 bg-white transition-all duration-500 ease-in-out',
                  menuOpen ? 'rotate-45 translate-y-1' : '',
                )}
              />
              <span
                className={cn(
                  'block w-5 h-0.5 bg-white mt-1 transition-all duration-500 ease-in-out',
                  menuOpen ? 'opacity-0 scale-0' : '',
                )}
              />
              <span
                className={cn(
                  'block w-5 h-0.5 bg-white mt-1 transition-all duration-500 ease-in-out',
                  menuOpen ? '-rotate-45 -translate-y-1' : '',
                )}
              />
            </div>
          </button>
        </nav>
      </header>

      {/* Creative Full-Screen Mobile Menu */}
      {mounted && (
        <div
          className={cn(
            'lg:hidden fixed inset-0 z-40 transition-all duration-700 ease-in-out navbar-mobile-menu',
            menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible',
          )}
        >
          {/* Animated Background */}
          <div className='absolute inset-0 bg-gradient-to-br from-[#1a1442] via-[#3E1492] to-[#6B46C1]'>
            <div className='absolute inset-0 bg-black/20'></div>
            {/* Floating Circles Animation */}
            <div className='absolute top-16 left-8 w-20 h-20 bg-white/10 rounded-full animate-bounce'></div>
            <div className='absolute top-32 right-12 w-16 h-16 bg-white/5 rounded-full animate-pulse'></div>
            <div className='absolute bottom-24 left-16 w-12 h-12 bg-white/10 rounded-full animate-ping'></div>
            <div className='absolute bottom-16 right-8 w-10 h-10 bg-white/5 rounded-full animate-bounce'></div>
          </div>

          {/* Menu Content */}
          <div className='mobile-menu-content px-6'>
            {/* Menu Items */}
            <nav className='mobile-menu-nav text-center space-y-3'>
              {navbarLinks.map((link, index) => {
                const isActive = pathname === link.href;
                return (
                  <div
                    key={link.id}
                    className={cn(
                      'transform transition-all duration-700 ease-out mobile-menu-item z-90',
                      menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
                    )}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={cn(
                        'block mobile-menu-text font-bold transition-all duration-300 transform group py-1 px-3 rounded-xl',
                        isActive
                          ? 'text-white bg-gradient-to-r from-[#3E1492] to-[#6B46C1] shadow-lg font-extrabold scale-105'
                          : 'text-white hover:text-yellow-300',
                      )}
                    >
                      <span className='relative z-10'>{t(link.name as keyof typeof t)}</span>
                      {isActive && (
                        <span className='absolute left-1/2 -translate-x-1/2 bottom-0 w-3/4 h-1 rounded-full bg-gradient-to-r from-[#feda02] to-[#3E1492] shadow-md animate-pulse'></span>
                      )}
                    </Link>
                  </div>
                );
              })}

              {/* Language Switcher for Mobile */}
              <div
                className={cn(
                  'transform transition-all duration-700 ease-out mt-4 mobile-menu-item',
                  menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0',
                )}
                style={{ transitionDelay: `${navbarLinks.length * 100}ms` }}
              >
                <div className='flex justify-center w-full '>
                  <LanguageSwitcher />
                </div>
              </div>

              {/* CTA Button */}
              {/* <div
                className={cn(
                  'transform transition-all duration-700 ease-out mt-4 mobile-menu-item',
                  menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0',
                )}
                style={{
                  transitionDelay: `${(navbarLinks.length + 1) * 100}ms`,
                }}
              >
                <Button
                  variant='primary'
                  size='md'
                  className='bg-white text-[#3E1492] hover:bg-yellow-300 hover:text-[#1a1442] transition-all duration-300 px-6 py-2 text-base font-bold shadow-2xl'
                  onClick={() => setMenuOpen(false)}
                >
                  🚀 {commonT('joinNow')}
                </Button>
              </div> */}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
