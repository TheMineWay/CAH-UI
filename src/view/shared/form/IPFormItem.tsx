import { Input, Tooltip, Button } from "antd";
import BaseFormItem, { FormGenericTypes, useFormValidator } from "./FormBasics";
import { isIP } from 'class-validator';
import { t } from "i18next";
import { QuestionCircleOutlined } from '@ant-design/icons';
import './form.css';

type Props = FormGenericTypes & {
    placeholder?: string;
    showhHelp?: boolean;
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
            label={props.label ?? t('common.forms.ipAddress.Label')}
            rules={props.rules ?? [
                {
                    required: true,
                    message: t('common.forms.ipAddress.errors.Required'),
                },
            ]}
            required={props.required}
            validateStatus={validationStatus}
            help={help}
        >
            <div
                className="input-group-flex"
            >
                <Input
                    type={'text'}
                    maxLength={64}
                    minLength={7}
                    onChange={onInputChange}
                    placeholder={props.placeholder ?? '10.0.0.1'}
                />
                {
                    props.showhHelp && (
                        <Tooltip
                            title={t('common.forms.ipAddress.Help').toString()}
                        >
                            <Button
                                icon={<QuestionCircleOutlined />}
                            />
                        </Tooltip>
                    )
                }
            </div>
        </BaseFormItem>
    );
}