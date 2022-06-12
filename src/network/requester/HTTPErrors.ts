import { Error } from "../../errors/Error";

export default class HttpError extends Error {
    constructor(code: number, opts?: {
        message?: string;
        payload?: any;
    }) {
        super(code, 'http', opts);
    }
}