import React, { useContext, useState } from 'react';
import AuthModal from '../view/auth/AuthModal';

type Props = {
    children: JSX.Element;
}

const AuthContext = React.createContext<{
    authState: string | null,
    setAuthState: (authState: string) => void,
    displayAuthModal: () => void,
    hideAuthModal: () => void,
}>({ authState: null, setAuthState: () => { }, displayAuthModal: () => { }, hideAuthModal: () => { } });

export function useAuthState() {
    const authState = useContext(AuthContext);
    return authState;
}

export default function AuthProvider(props: Props) {

    const [authState, setAuthState] = useState<string | null>(null);
    const [authModalVisible, setAuthModalVisibility] = useState<boolean>(false);

    return (
        <AuthContext.Provider
            value={{
                authState,
                setAuthState,
                displayAuthModal: () => setAuthModalVisibility(true),
                hideAuthModal: () => setAuthModalVisibility(false),
            }}
        >
            <AuthModal
                visible={authModalVisible}
                hide={() => setAuthModalVisibility(false)}
            />
            {props.children}
        </AuthContext.Provider>
    );
}