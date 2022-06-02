import i18n, { Resource } from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';

export enum Language {
    en = 'en',
}

export function getDefaultLanguage(): Language {
    return Language.en;
}

export default async function configurei18n(language?: Language) {
    const resources: Resource = {
        en: {
            translation: en,
        },
    };

    await i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: language ?? getDefaultLanguage(),
        fallbackLng: 'en',
    });
}