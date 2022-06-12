import Form, { Rule } from "antd/lib/form";
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

        if(!value) {
            setValidationStatus('');
            return;
        }

        const valid = validator(value);
        if(valid) {
            setValidationStatus('success');
        } else {
            setValidationStatus('error');
        }
    }

    const help = (opts?.errorMessage && validationStatus === 'error') ? opts.errorMessage : undefined;

    return {
        validationStatus,
        onInputChange,
        help,
    };
}

type Props = FormGenericTypes & {
    children: JSX.Element;
    help?: string;
    validateStatus?: ValidateStatus;
}

export default function BaseFormItem(props: Props) {
    return (
        <Form.Item
            label={props.label}
            required={props.required}
            rules={props.rules}
            name={props.name}
            help={props.help}
            validateStatus={props.validateStatus}
        >
            {props.children}
        </Form.Item>
    );
}