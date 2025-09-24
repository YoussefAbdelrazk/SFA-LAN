'use client';

import { Button } from '@/components/ui/Button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { usePathname, useRouter } from '@/i18n/navigation';
import { Check, Globe, Languages } from 'lucide-react';
import { useLocale } from 'next-intl';
import { useState } from 'react';

const locales = [
  { code: 'en', name: 'English', flag: '🇺🇸', dir: 'ltr' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦', dir: 'rtl' },
  { code: 'fr', name: 'Français', flag: '🇫🇷', dir: 'ltr' },
];

export default function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const currentLocale = locales.find(l => l.code === locale) || locales[0];

  const switchLocale = (newLocale: string) => {
    if (newLocale !== locale) {
      router.replace(pathname, { locale: newLocale });
      router.refresh();
    }
    setIsOpen(false);
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant='ghost'
          size='sm'
          className='h-10 px-4 bg-[#3E1492] text-white hover:bg-[#6B46C1]   border border-white/20 hover:border-white/30 hover:text-white transition-all duration-200 backdrop-blur-sm rounded-lg'
        >
          <div className='flex items-center gap-2'>
            <Globe className='h-4 w-4' />

            <span className='text-sm font-medium'>{currentLocale.name}</span>
            <Languages className='h-3 w-3 opacity-70' />
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align='end'
        className='w-52 bg-[#3E1492]/95 backdrop-blur-xl border border-white/20 shadow-2xl rounded-xl'
        sideOffset={8}
      >
        {locales.map(loc => (
          <DropdownMenuItem
            key={loc.code}
            onClick={() => switchLocale(loc.code)}
            className='flex items-center justify-between px-4 py-3 text-white hover:bg-[#F7F225] hover:text-black cursor-pointer transition-colors duration-200 rounded-lg mx-1'
            dir={loc.dir}
          >
            <div className='flex items-center gap-3'>
              <span className='text-lg'>{loc.flag}</span>
              <span className='font-medium'>{loc.name}</span>
            </div>
            {locale === loc.code && <Check className='h-4 w-4 text-[#F7F225]' />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
