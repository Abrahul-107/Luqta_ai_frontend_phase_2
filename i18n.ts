import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import En from './locales/en/translation.json';
import Hi from './locales/hi/translation.json';
import Ar from './locales/ar/translation.json';
import Ur from './locales/ur/translation.json';
import Or from './locales/or/translation.json';
import Ta from './locales/ta/translation.json';
import Te from './locales/te/translation.json';
import Ru from './locales/ru/translation.json';
import Fr from './locales/fr/translation.json';
import Es from './locales/es/translation.json';

const resources = {
    en: {
        translations: En
    },
    hi: {
        translations: Hi
    },
    ar: {
        translations: Ar
    },
    ur: {
        translations: Ur
    },
    or: {
        translations: Or
    },
    ta: {
        translations: Ta
    },
    te: {
        translations: Te
    },
    ru: {
        translations: Ru
    },
    fr: {
        translations: Fr
    },
    es: {
        translations: Es
    }
};
i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources,
        load: 'languageOnly',
        fallbackLng: 'en',
        ns: ['translations'],
        defaultNS: 'translations',
        interpolation: {
            escapeValue: false,
            formatSeparator: ','
        },
    });

export default i18n;
