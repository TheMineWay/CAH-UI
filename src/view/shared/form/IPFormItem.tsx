import { Input } from "antd";
import BaseFormItem, { FormGenericTypes, useFormValidator } from "./FormBasics";
import { isIP } from 'class-validator';
import { t } from "i18next";

type Props = FormGenericTypes & {
    placeholder?: string;
}

export default function IPFormItem(props: Props) {
    
    const {
        onInputChange,
        validationStatus,
        help,
    } = useFormValidator(isIP, {
        errorMessage: t('common.forms.ipAddress.errors.ProvideAValidIP'),
    });

    return (
        <BaseFormItem
            name={props.name}
            label={props.label}
            rules={props.rules}
            required={props.required}
            validateStatus={validationStatus}
            help={help}
        >
            <Input
                type={'text'}
                maxLength={64}
                minLength={7}
                onChange={onInputChange}
                placeholder={props.placeholder ?? '192.168.0.1'}
            />
        </BaseFormItem>
    );
}