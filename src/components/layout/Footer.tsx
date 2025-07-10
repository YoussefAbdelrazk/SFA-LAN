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

  const footerLinks = [
    { name: commonT('privacyPolicy'), href: `/${locale}/privacy-policy` },
    { name: commonT('termsOfService'), href: `/${locale}/terms` },
    { name: commonT('cookiesSettings'), href: `/${locale}/cookies` },
  ];

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
            {navbarLinks.map((link) => (
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
            © {new Date().getFullYear()} {SITE_CONFIG.name}.{' '}
            {commonT('allRightsReserved')}.
          </p>
          <p className='text-[#344054] text-sm'>{t('description')}</p>

          <div className='flex flex-wrap items-center gap-4 text-sm'>
            {footerLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className='text-[#344054] hover:text-[#3E1492] transition-colors duration-300'
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
