import { AxiosResponse } from "axios";
import { useEffect, useState } from "react"
import { useAuthState } from "../../providers/AuthContext";
import { useServerState } from "../../providers/ServerContext";
import requester, { RequestMethod } from "./Requester";

type UseRequestsOpts = {
    path: string;
    method: RequestMethod;
    overrideHost?: string;
    overrideProtocol?: 'http' | 'https';
    overridePort?: string;
}

export default function useRequest<T>(opts: UseRequestsOpts) {

    const [axiosResponse, setAxiosResponse] = useState<AxiosResponse<T>>();
    const [loading, setLoading] = useState<boolean>(false);

    const {
        server,
    } = useServerState();

    const {
        authState,
    } = useAuthState();

    const request = async (requestOpts: {
        body: any;
    }) => {
        setLoading(true);
        try {
            const host = opts.overrideHost || server?.address;
            const protocol = opts.overrideProtocol || server?.protocol;
            const port = opts.overridePort || server?.port;

            if(!host || !protocol || !port) throw new Error(); // <-- There must be a server

            const url = `${protocol}://${host}${server?.port ? (':' + server.port) : ''}/${opts.path}`;

            const res = await requester<T>(opts.method, url, {
                authToken: authState ?? undefined,
                body: requestOpts.body,
            });

            setAxiosResponse(res);
        } catch(e: any) {
            throw e;
        }
        setLoading(false);
    }

    const clear = () => {
        setAxiosResponse(undefined);
    }

    return {
        axiosResponse,
        data: axiosResponse?.data,
        loading,
        request,
        clear,
    }
}