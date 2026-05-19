import en from './en.json';
import es from './es.json';

export type Locale = 'en' | 'es';

const dictionaries: Record<Locale, Record<string, unknown>> = { en, es };

export function useTranslations(locale: Locale) {
  const dict = dictionaries[locale];

  function t(key: string, params?: Record<string, string | number>): string {
    const keys = key.split('.');
    let result: unknown = dict;
    for (const k of keys) {
      if (result && typeof result === 'object' && k in result) {
        result = (result as Record<string, unknown>)[k];
      } else {
        console.warn(`Missing translation: ${key} for locale: ${locale}`);
        return key;
      }
    }

    if (typeof result === 'string') {
      if (params) {
        return Object.entries(params).reduce(
          (str, [paramKey, value]) => str.replace(`{${paramKey}}`, String(value)),
          result
        );
      }
      return result;
    }

    return key;
  }

  function tRaw(key: string): unknown {
    const keys = key.split('.');
    let result: unknown = dict;
    for (const k of keys) {
      if (result && typeof result === 'object' && k in result) {
        result = (result as Record<string, unknown>)[k];
      } else {
        console.warn(`Missing translation: ${key} for locale: ${locale}`);
        return undefined;
      }
    }
    return result;
  }

  return { t, tRaw };
}
