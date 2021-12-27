import { default as i18nBase } from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-xhr-backend';

export const initLocalization = () =>
  i18nBase
    .use(Backend) // plugin for loading localization files
    .use(initReactI18next)
    .init({
      fallbackLng: process.env.DEFAULT_LOCALE,
      lng: process.env.DEFAULT_LOCALE,

      backend: {
        loadPath: process.env.LOCALES_PATH,
      },

      react: {
        transSupportBasicHtmlNodes: true, // allow <br/> and simple html elements in translations
        transKeepBasicHtmlNodesFor: ['br', 'strong', 'em', 'i'], // don't convert to <1></1> if simple react elements
      },
    });

export default i18nBase;
