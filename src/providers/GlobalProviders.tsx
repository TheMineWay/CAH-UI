import AuthProvider from "./AuthContext";
import LanguageProvider from "./LanguageContext";

type Props = {
    children: JSX.Element;
}

export default function GlobalProviders(props: Props) {
    return (
        <AuthProvider>
            <LanguageProvider>
                {props.children}
            </LanguageProvider>
        </AuthProvider>
    );
}