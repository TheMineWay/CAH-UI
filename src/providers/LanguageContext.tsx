import React, { useEffect, useState } from "react";
import configurei18n, { getDefaultLanguage, Language } from "../i18n/configure_i18n";

type Props = {
    children: JSX.Element;
}

type LanguageContextState = { language: Language, setLanguage: (language: Language) => void };

const LanguageContext = React.createContext<LanguageContextState | null>(null);

export default function LanguageProvider(props: Props) {

    const [language, setLanguage] = useState<Language>(getDefaultLanguage());

    useEffect(() => {
        configurei18n(language);
    }, [language]);

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