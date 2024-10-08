import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

import en from './translations/en.json';
import urdu from './translations/urdu.json';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en,
      urdu,
    },
    compatibilityJSON: 'v3',
    lng: 'en', // if you're using a language detector, do not define the lng option
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false,
    },
  });

export const updateLanguage = lng => {
  i18n.changeLanguage(lng);
};
