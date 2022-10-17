import { default as i18nBase } from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';

i18nBase.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',

  ns: ['translations'],
  defaultNS: 'translations',

  resources: {
    en: { translations: en },
  },
});

export default i18nBase;
