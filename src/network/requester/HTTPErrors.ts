export default class HttpError {
    code: number;
    message?: string;
    payload?: string;

    constructor(code: number, opts?: {
        message?: string;
        payload?: any;
    }) {
        this.code = code;
        this.message = opts?.message;
        this.payload = opts?.payload;
    }
}