import { Input, Tooltip, Button } from "antd";
import BaseFormItem, { FormGenericTypes } from "./FormBasics";
import { t } from "i18next";
import { QuestionCircleOutlined } from '@ant-design/icons';
import './form.css';

type Props = FormGenericTypes & {
    placeholder?: string;
    showHelp?: boolean;
}

export default function AddressFormItem<T>(props: Props) {
    return (
        <BaseFormItem<T>
            name={props.name}
            label={props.label ?? t('common.forms.address.Label')}
            rules={props.rules ?? [
                {
                    required: true,
                    message: t('common.forms.address.errors.Required'),
                },
            ]}
            required={props.required}
        >
            <div
                className="input-group-flex"
            >
                <Input
                    type={'text'}
                    maxLength={64}
                    minLength={5}
                    placeholder={props.placeholder ?? '10.0.0.1'}
                />
                {
                    props.showHelp && (
                        <Tooltip
                            title={t('common.forms.address.Help').toString()}
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