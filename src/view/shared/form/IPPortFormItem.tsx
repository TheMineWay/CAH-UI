import { Input, Tooltip, Button } from "antd";
import BaseFormItem, { FormGenericTypes, useFormValidator } from "./FormBasics";
import { isPort } from 'class-validator';
import { t } from "i18next";
import { QuestionCircleOutlined } from '@ant-design/icons';
import './form.css';

type Props = FormGenericTypes & {
    placeholder?: string;
    showHelp?: boolean;
}

export default function IPPortFormItem(props: Props) {

    const {
        onInputChange,
        validationStatus,
        help,
        inputStatus,
    } = useFormValidator(isPort, {
        errorMessage: t('common.forms.ipPort.errors.ProvideAValidIPPort'),
    });

    return (
        <BaseFormItem
            name={props.name}
            label={props.label ?? t('common.forms.ipPort.Label')}
            rules={props.rules ?? [
                {
                    required: true,
                    message: t('common.forms.ipPort.errors.Required'),
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
                    status={inputStatus}
                    type={'number'}
                    min={0}
                    max={24000}
                    minLength={1}
                    maxLength={5}
                    onChange={onInputChange}
                    placeholder={props.placeholder ?? '4000'}
                />
                {
                    props.showHelp && (
                        <Tooltip
                            title={t('common.forms.ipPort.Help').toString()}
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