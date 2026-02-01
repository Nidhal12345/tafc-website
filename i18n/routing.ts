import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ['fr', 'en', 'ar'],

  // Used when no locale matches
  defaultLocale: 'fr',

  // The prefix for locale-specific routes
  localePrefix: 'as-needed'
});

// Locale metadata for UI display
export const localeMetadata = {
  fr: {
    name: 'Français',
    nativeName: 'Français',
    direction: 'ltr' as const,
    flag: '🇫🇷'
  },
  en: {
    name: 'English',
    nativeName: 'English',
    direction: 'ltr' as const,
    flag: '🇬🇧'
  },
  ar: {
    name: 'Arabic',
    nativeName: 'العربية',
    direction: 'rtl' as const,
    flag: '🇸🇦'
  }
} as const;

export type Locale = (typeof routing.locales)[number];
