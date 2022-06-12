import React, { useContext, useState } from 'react';

const ServerContext = React.createContext<{
    server?: Server,
    setServer: (address: string, port?: string) => Promise<void>,
}>({
    setServer: async (address: string) => {}
});

// Server info
export type Server = {
    protocol: 'http' | 'https';
    address: string;
    port: string;
}

type Props = {
    children: JSX.Element;
}

export function useServerState() {
    const serverContext = useContext(ServerContext);
    return serverContext;
}

export default function ServerProvider(props: Props) {

    const [serverState, setServerState] = useState<Server>();

    // Do server check logic
    const setServer = async (address: string, port?: string, protocol?: 'http' | 'https') => {
        setServerState({
            address,
            port: port ?? '4000',
            protocol: protocol ?? 'https',
        });
    }

    return (
        <ServerContext.Provider
            value={{
                server: serverState,
                setServer,
            }}
        >
            {props.children}
        </ServerContext.Provider>
    );
}

export type ServerInfo = {
    port: string;
    version: {
        number: string;
        isStable: boolean;
    };
    protocol: 'http' | 'https';
}