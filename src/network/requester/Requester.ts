import axios, { AxiosResponse } from "axios";
import HttpError from "./HTTPErrors";

type RequestOpts = {
    authToken?: string;
    body?: any;
}

export type RequestMethod = 'get' | 'post' | 'delete' | 'put';

export default async function requester<T>(method: RequestMethod, url: string, opts?: RequestOpts): Promise<AxiosResponse<T>> {
    const authHeaders: { [k: string]: string } = {}

    if (opts?.authToken) {
        authHeaders['Authorization'] = `Bearer ${opts.authToken}`;
    }

    const axiosResponse = await axios({
        method,
        url,
        headers: {
            ...authHeaders,
        },
        data: opts?.body,
    });

    if (!([200, 202].includes(axiosResponse.status))) {
        // An error has occurred
        throw new HttpError(axiosResponse.status);
    }

    return axiosResponse;
}