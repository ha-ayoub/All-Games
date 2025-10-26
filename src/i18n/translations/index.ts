import { fr } from './fr';
import { en } from './en';
import { es } from './es';
import { ar } from './ar';
import { pt } from './pt';
import { de } from './de';
import { ja } from './ja';
import { ko } from './ko';

export const translations = {
  fr,
  en,
  ar,
  es,
  pt,
  de,
  ja,
  ko,
};

export type Translations = typeof fr;
export type TranslationKey = keyof typeof fr;
export type LanguageCode = keyof typeof translations;