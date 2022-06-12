import AuthProvider from "./AuthContext";
import LanguageProvider from "./LanguageContext";
import ServerProvider from "./ServerContext";

type Props = {
    children: JSX.Element;
}

export default function GlobalProviders(props: Props) {
    return (
        <ServerProvider>
            <AuthProvider>
                <LanguageProvider>
                    {props.children}
                </LanguageProvider>
            </AuthProvider>
        </ServerProvider>
    );
}