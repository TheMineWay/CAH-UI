import { AxiosResponse } from "axios";
import { useEffect, useState } from "react"
import { useAuthState } from "../../providers/AuthContext";
import { useServerState } from "../../providers/ServerContext";
import requester, { RequestMethod } from "./Requester";

type UseRequestsOpts = {
    path: string;
    method: RequestMethod;
    overrideHost?: string;
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

    const fetch = async (requestOpts: {
        body: any;
    }) => {
        setLoading(true);
        try {
            if(!server?.address) throw new Error(); // <-- There must be a server
            const host = opts.overrideHost || server?.address;
            const url = `https://${host}/${opts.path}`;

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

    return {
        axiosResponse,
        data: axiosResponse?.data,
        loading,
        fetch,
    }
}