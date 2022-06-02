import i18n, { Resource } from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';

export default async function configurei18n() {
    const resources: Resource = {
        en: {
            translation: en,
        },
    };

    await i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'en',
        fallbackLng: 'en',
    });
}