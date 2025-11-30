import { ref, computed } from 'vue';
import enTranslations from '@/i18n/en';
import faTranslations from '@/i18n/fa';

export type Language = 'en' | 'fa';

const currentLanguage = ref<Language>((localStorage.getItem('language') as Language) || 'en');

const translations = {
  en: enTranslations,
  fa: faTranslations,
};

export function useLanguage() {
  const setLanguage = (lang: Language) => {
    currentLanguage.value = lang;
    localStorage.setItem('language', lang);
    // Update document direction for RTL support
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  };

  const t = computed(() => {
    return translations[currentLanguage.value] || translations.en;
  });

  const isRTL = computed(() => currentLanguage.value === 'fa');

  // Initialize direction on mount
  if (typeof window !== 'undefined') {
    document.documentElement.dir = currentLanguage.value === 'fa' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLanguage.value;
  }

  return {
    currentLanguage,
    t,
    isRTL,
    setLanguage,
  };
}

