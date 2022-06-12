import React, { useContext, useState } from 'react';

type Props = {
    children: JSX.Element;
}

const AuthContext = React.createContext<{authState: string | null, setAuthState: (authState: string) => void}>({authState: null, setAuthState: () => {}});

export function useAuthState() {
    const authState = useContext(AuthContext);
    return authState;
}

export default function AuthProvider(props: Props) {

    const [authState, setAuthState] = useState<string | null>(null);

    return (
        <AuthContext.Provider
            value={{
                authState,
                setAuthState
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
}