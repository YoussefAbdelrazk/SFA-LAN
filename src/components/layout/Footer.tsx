'use client';

import logo from '@/assets/images/logo.png';
import { SITE_CONFIG } from '@/constants';
import { navbarLinks } from '@/data';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import { Container } from './Container';

const socialLinks = [
  { icon: FaFacebook, href: SITE_CONFIG.links.facebook, label: 'Facebook' },
  { icon: FaTwitter, href: SITE_CONFIG.links.twitter, label: 'Twitter' },
  { icon: FaLinkedin, href: SITE_CONFIG.links.linkedin, label: 'LinkedIn' },
  { icon: FaYoutube, href: SITE_CONFIG.links.youtube, label: 'YouTube' },
  { icon: FaInstagram, href: SITE_CONFIG.links.instagram, label: 'Instagram' },
];

export default function Footer() {
  const t = useTranslations('footer');
  const navT = useTranslations('navigation');
  const commonT = useTranslations('common');
  const locale = useLocale();



  return (
    <footer className='bg-white border-t border-gray-200'>
      <Container className='py-12 md:py-16'>
        {/* Main Footer Content */}
        <div className='flex flex-col md:flex-row items-center justify-between gap-8 mb-8'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <Link href={`/${locale}`}>
              <Image
                src={logo}
                alt={`${SITE_CONFIG.name} Logo`}
                width={100}
                height={100}
                className='h-auto w-auto'
              />
            </Link>
          </div>

          {/* Navigation Links */}
          <nav className='flex flex-col md:flex-row items-center gap-6 md:gap-10'>
            {navbarLinks.map(link => (
              <Link
                key={link.id}
                href={`/${locale}${link.href}`}
                className='text-[#344054] hover:text-[#3E1492] transition-colors duration-300 font-medium'
              >
                {navT(link.name as keyof typeof navT)}
              </Link>
            ))}
          </nav>

          {/* Social Icons */}
          <div className='flex items-center gap-4'>
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <Link
                key={label}
                href={href}
                target='_blank'
                rel='noopener noreferrer'
                className='text-[#3E1492] hover:text-[#2D0F6B] transition-colors duration-300 p-2 rounded-full hover:bg-gray-100'
                aria-label={label}
              >
                <Icon className='w-5 h-5' />
              </Link>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className='border-t border-[#3E1492] mb-8' />

        {/* Bottom Footer */}
        <div className='flex flex-col sm:flex-row flex-wrap items-center gap-4 justify-between text-center'>
          <p className='text-[#344054] text-sm'>
            © {new Date().getFullYear()} {SITE_CONFIG.name}. {commonT('allRightsReserved')}.
          </p>
          <p className='text-[#344054] text-sm'>{t('description')}</p>
        </div>

        {/* Catalyst Credit */}
        <div className='mt-8 pt-6 border-t border-gray-100'>
          <div className='flex flex-col sm:flex-row items-center justify-center gap-2 text-center'>
            <span className='text-[#344054] text-xs opacity-70'>Designed & Developed by</span>
            <Link
              href='https://www.catalyst.com.eg/'
              target='_blank'
              rel='noopener noreferrer'
              className='group relative inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gradient-to-r from-[#3E1492] to-[#2D0F6B] text-white text-xs font-semibold hover:from-[#2D0F6B] hover:to-[#3E1492] transition-all duration-300 transform hover:scale-105 hover:shadow-lg'
            >
              <span className='relative z-10'>Catalyst</span>
              <div className='absolute inset-0 bg-gradient-to-r from-[#feda02] to-[#ffd700] opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-300'></div>
              <svg
                className='w-3 h-3 ml-1 group-hover:translate-x-0.5 transition-transform duration-300'
                fill='currentColor'
                viewBox='0 0 20 20'
              >
                <path
                  fillRule='evenodd'
                  d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                  clipRule='evenodd'
                />
              </svg>
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
