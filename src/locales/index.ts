import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import {english, french} from './resources';

i18next
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    compatibilityJSON: 'v3',
    resources: {
      en: {
        ...english,
      },
      fr: {
        ...french,
      },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });
