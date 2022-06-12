import { Rule } from "antd/lib/form";
import { ValidateStatus } from "antd/lib/form/FormItem";
import { ChangeEventHandler, useState } from "react";

export type FormGenericTypes = {
    required?: boolean;
    icon?: JSX.Element;
    rules?: Rule[];

    name: string;
    label?: string;
}

export function useFormValidator(validator: (v: any) => boolean, opts?: {
    errorMessage?: string;
}) {
    const [validationStatus, setValidationStatus] = useState<ValidateStatus>('');

    const onInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        validate(e.target.value);
    }

    const validate = (value: any) => {
        const valid = validator(value);
        if(valid) {
            setValidationStatus('success');
        } else {
            setValidationStatus('error');
        }
    }

    const help = (opts?.errorMessage && validationStatus === 'error') && opts.errorMessage;

    return {
        validationStatus,
        onInputChange,
        help,
    };
}