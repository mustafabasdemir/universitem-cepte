import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';
import tr from './tr.json';
import en from './en.json';


const deviceLang = Localization?.locale ? Localization.locale.split('-')[0] : 'en';

// 🚀 i18n yapılandırması
i18n
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    resources: {
      tr: { translation: tr },
      en: { translation: en },
    },
    lng: deviceLang === 'tr' ? 'tr' : 'en', 
    fallbackLng: 'en',
    interpolation: { escapeValue: false },
  });

export default i18n;
