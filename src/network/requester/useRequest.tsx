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

    const request = async (requestOpts?: {
        body?: any;
        params?: {[key: string]: string};
    }) => {
        setLoading(true);
        try {
            const host = opts.overrideHost || server?.address;
            const protocol = opts.overrideProtocol || server?.protocol || 'https';
            const port = opts.overridePort || server?.port || "4000";

            if(!host || !protocol || !port) throw new Error(); // <-- There must be a server

            const url = `${protocol}://${host}${port ? (':' + port) : ''}/${opts.path}`;

            const res = await requester<T>(opts.method, url, {
                authToken: authState ?? undefined,
                body: requestOpts?.body,
            });

            setAxiosResponse(res);
        } catch(e: any) {
            setLoading(false);
            throw e;
        }
        setLoading(false);
    }

    const clear = () => {
        setAxiosResponse(undefined);
    }

    return {
        axiosResponse,
        response: axiosResponse?.data,
        loading,
        request,
        clear,
    }
}