'use client';

import { cn } from '@/lib/utils';
import { Check, ChevronDown, Globe } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸', nativeName: 'English' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦', nativeName: 'Arabic' },
  { code: 'fr', name: 'Français', flag: '🇫🇷', nativeName: 'French' },
];

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const t = useTranslations('common');

  const currentLanguage = languages.find((lang) => lang.code === locale);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        buttonRef.current &&
        dropdownRef.current &&
        !buttonRef.current.contains(event.target as Node) &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (newLocale: string) => {
    setIsOpen(false);
    let newPath = pathname;
    // Remove any leading double slashes
    if (newPath.startsWith('//')) newPath = newPath.replace(/^\/\//, '/');
    // If the path does not start with a locale, add it
    const localePattern = /^\/(en|ar|fr)(\/|$)/;
    if (localePattern.test(newPath)) {
      newPath = newPath.replace(localePattern, `/${newLocale}/`);
      // Remove trailing slash if present (except for root)
      if (newPath.length > 1 && newPath.endsWith('/'))
        newPath = newPath.slice(0, -1);
    } else {
      // If no locale in path, add it
      newPath = `/${newLocale}${newPath.startsWith('/') ? '' : '/'}${newPath}`;
    }
    router.push(newPath);
  };

  const getDropdownPosition = () => {
    if (!buttonRef.current) return { top: 0, left: 0 };
    const rect = buttonRef.current.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const dropdownWidth = 280; // Increased width for better design

    // Position dropdown under the navbar (fixed position)
    const navbarHeight = 80; // Approximate navbar height
    const top = navbarHeight + 8; // 8px gap from navbar

    // Center the dropdown horizontally relative to the button
    let left = rect.left + rect.width / 2 - dropdownWidth / 2;

    // Ensure dropdown doesn't go off screen
    if (left < 10) left = 10; // Minimum margin from left
    if (left + dropdownWidth > viewportWidth - 10) {
      left = viewportWidth - dropdownWidth - 10; // Prevent overflow on right
    }

    return {
      top: top,
      left: left,
    };
  };

  if (!mounted) return null;

  return (
    <>
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'flex items-center gap-3 px-4 py-2.5 rounded-xl transition-all duration-300',
          'bg-gradient-to-r from-[#3E1492]/10 to-[#6B46C1]/10 backdrop-blur-md border border-[#3E1492]/20',
          'hover:from-[#3E1492]/20 hover:to-[#6B46C1]/20 hover:border-[#3E1492]/30 hover:scale-105',
          'text-[#3E1492] font-medium shadow-lg hover:shadow-xl',
          'focus:outline-none focus:ring-2 focus:ring-[#3E1492]/50 focus:ring-offset-2 focus:ring-offset-transparent',
          'group relative overflow-hidden'
        )}
        aria-label='Select language'
      >
        {/* Animated background */}
        <div className='absolute inset-0 bg-gradient-to-r from-[#3E1492]/5 to-[#6B46C1]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

        <div className='flex items-center gap-2 relative z-10'>
          <div className='relative'>
            <Globe className='w-4 h-4 group-hover:rotate-12 transition-transform duration-300' />
            <div className='absolute -top-1 -right-1 w-2 h-2 bg-[#3E1492] rounded-full animate-pulse'></div>
          </div>
          <span className='text-lg group-hover:scale-110 transition-transform duration-300'>
            {currentLanguage?.flag}
          </span>
        </div>
        <span className='hidden sm:block text-sm font-semibold relative z-10'>
          {currentLanguage?.name}
        </span>
        <ChevronDown
          className={cn(
            'w-4 h-4 transition-all duration-300 group-hover:rotate-180 relative z-10',
            isOpen && 'rotate-180'
          )}
        />
      </button>

      {isOpen &&
        mounted &&
        createPortal(
          <div
            ref={dropdownRef}
            className='fixed w-70 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 overflow-hidden z-[99999] animate-in slide-in-from-top-2 duration-200'
            style={{
              top: getDropdownPosition().top,
              left: getDropdownPosition().left,
              boxShadow:
                '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            }}
          >
            {/* Header with gradient */}
            <div className='px-6 py-4 bg-gradient-to-r from-[#3E1492] to-[#6B46C1] text-white'>
              <div className='flex items-center gap-3'>
                <div className='w-8 h-8 bg-white/20 rounded-full flex items-center justify-center'>
                  <Globe className='w-4 h-4' />
                </div>
                <div>
                  <h3 className='text-sm font-bold'>{t('selectLanguage')}</h3>
                  <p className='text-xs text-white/80 mt-0.5'>
                    {t('chooseLanguage')}
                  </p>
                </div>
              </div>
            </div>

            {/* Language Options */}
            <div className='py-3'>
              {languages.map((language, index) => (
                <button
                  key={language.code}
                  onClick={() => handleLanguageChange(language.code)}
                  className={cn(
                    'w-full flex items-center gap-4 px-6 py-4 text-left transition-all duration-300',
                    'hover:bg-gradient-to-r hover:from-[#3E1492]/5 hover:to-[#6B46C1]/5',
                    'focus:outline-none group relative overflow-hidden',
                    locale === language.code &&
                      'bg-gradient-to-r from-[#3E1492]/10 to-[#6B46C1]/10 border-r-4 border-[#3E1492]'
                  )}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {/* Animated background on hover */}
                  <div className='absolute inset-0 bg-gradient-to-r from-[#3E1492]/5 to-[#6B46C1]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

                  {/* Flag with animation */}
                  <div className='relative z-10'>
                    <span className='text-2xl group-hover:scale-125 transition-transform duration-300'>
                      {language.flag}
                    </span>
                    {locale === language.code && (
                      <div className='absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-pulse'></div>
                    )}
                  </div>

                  {/* Language Info */}
                  <div className='flex-1 relative z-10'>
                    <div className='font-semibold text-gray-900 group-hover:text-[#3E1492] transition-colors duration-300'>
                      {language.name}
                    </div>
                    <div className='text-xs text-gray-500 group-hover:text-gray-700 transition-colors duration-300'>
                      {language.nativeName}
                    </div>
                  </div>

                  {/* Check Icon for selected */}
                  {locale === language.code && (
                    <div className='relative z-10'>
                      <div className='w-6 h-6 bg-[#3E1492] rounded-full flex items-center justify-center'>
                        <Check className='w-3 h-3 text-white' />
                      </div>
                    </div>
                  )}
                </button>
              ))}
            </div>

            {/* Footer */}
            <div className='px-6 py-4 border-t border-gray-100 bg-gradient-to-r from-gray-50 to-gray-100'>
              <div className='flex items-center gap-3 text-xs text-gray-600'>
                <div className='flex items-center gap-1'>
                  <div className='w-2 h-2 bg-green-500 rounded-full animate-pulse'></div>
                  <span className='font-medium'>
                    {t('languageSettingsSaved')}
                  </span>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
