import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import type { LocalizedString } from '../data/types';

export type Locale = 'en' | 'zh';

export function pick(field: LocalizedString | undefined, locale: string): string {
  return field?.[locale as keyof LocalizedString] ?? field?.en ?? '';
}

const STORAGE_KEY = 'nova.locale';

interface LocaleState {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: string) => string;
}

const LocaleContext = createContext<LocaleState | null>(null);

export function LocaleProvider({
  children,
  catalog,
}: {
  children: ReactNode;
  catalog: Record<string, { en: string; zh: string }>;
}) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    try {
      return window.localStorage.getItem(STORAGE_KEY) === 'zh' ? 'zh' : 'en';
    } catch {
      return 'en';
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, locale);
    } catch {
      /* storage unavailable */
    }
    document.documentElement.lang = locale === 'zh' ? 'zh-CN' : 'en';
  }, [locale]);

  const value = useMemo<LocaleState>(
    () => ({
      locale,
      setLocale: setLocaleState,
      t: (key: string) => catalog[key]?.[locale] ?? key,
    }),
    [locale, catalog],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale(): LocaleState {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error('useLocale must be used within LocaleProvider');
  return ctx;
}
