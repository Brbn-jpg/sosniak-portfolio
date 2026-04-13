import { ui, type Lang } from './ui';

export { type Lang };

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)['en']): string {
    return (ui[lang][key] ?? ui['en'][key]) as string;
  };
}
