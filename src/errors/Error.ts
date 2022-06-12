export type ErrorSection = 'http';

export class Error {
    code: number;
    message?: string;
    payload?: any;
    section: ErrorSection;

    constructor(code: number, section: ErrorSection = 'http', opts?: {
        message?: string;
        payload?: any;
    }) {
        this.section = section;
        this.code = code;
    }
}