import LanguageProvider from "./LanguageContext";

type Props = {
    children: JSX.Element;
}

export default function GlobalProviders(props: Props) {
    return (
        <LanguageProvider>
            {props.children}
        </LanguageProvider>
    );
}