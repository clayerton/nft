import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en.json';
import zh from './zh.json';
const resources = {
    en: {
        translation: en,
    },
    zh: {
        translation: zh,
    },
}
i18n
    .use(initReactI18next)
    .init({
        resources,
        fallbackLang: 'zh',
        debug: true,
        lng: 'zh',
        keySeparator: '.',
        interpolation: {
            escapeValue: false,
            formatSeparator: ',',
        },
        react: {
            wait: true
        }
    })
export default i18n;