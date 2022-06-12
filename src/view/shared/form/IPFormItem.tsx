import { Form, Input } from "antd";
import { FormGenericTypes, useFormValidator } from "./FormBasics";
import { isIP } from 'class-validator';

type Props = FormGenericTypes & {

}

export default function IPFormItem(props: Props) {

    const {
        onInputChange,
        validationStatus,
        help,
    } = useFormValidator(isIP, {
        errorMessage: 'IP no válida'
    });

    return (
        <Form.Item
            label={props.label}
            name={props.name}
            required={props.required}
            validateStatus={validationStatus}
            rules={props.rules}
            help={help}
        >
            <Input
                type={'text'}
                maxLength={64}
                minLength={7}
                onChange={onInputChange}
            />
        </Form.Item>
    );
}