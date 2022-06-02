import React, { useContext, useState } from "react";
import configurei18n, { getDefaultLanguage, Language } from "../i18n/configure_i18n";

type Props = {
    children: JSX.Element;
}

type LanguageContextState = { language: Language, setLanguage: (language: Language) => void };

const LanguageContext = React.createContext<LanguageContextState | null>(null);

export function useLanguage() {
    const languageContext = useContext(LanguageContext);
    return languageContext!;
}

export default function LanguageProvider(props: Props) {

    const [language, setLanguageState] = useState<Language>(getDefaultLanguage());

    const setLanguage = async (language: Language) => {
        await configurei18n(language);
        setLanguageState(language);
    }

    return (
        <LanguageContext.Provider
            value={{
                language,
                setLanguage,
            }}
        >
            {props.children}
        </LanguageContext.Provider>
    )
}