import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector'
import { messagens } from './languages';

i18n.use(LanguageDetector).init({
  debug: true,
  defaultNS: 'translations',
  fallbackLng: 'en_us',
  ns: ['translations'],
  resources: messagens
});

export { i18n };