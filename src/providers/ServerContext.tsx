import React, { useContext, useState } from 'react';

const ServerContext = React.createContext<{
    server?: Server,
    setServer: (address: string) => Promise<void>,
}>({
    setServer: async (address: string) => {}
});

// Server info
export type Server = {
    address: string,
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
    const setServer = async (address: string) => {
        setServerState({
            address,
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