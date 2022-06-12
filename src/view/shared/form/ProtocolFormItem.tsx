import { Select } from "antd";
import BaseFormItem, { FormGenericTypes } from "./FormBasics";
import { t } from "i18next";
import './form.css';

const { Option } = Select;

type Props = FormGenericTypes & {}

export default function HttpProtocolFormItem<T>(props: Props) {
    return (
        <BaseFormItem<T>
            name={props.name}
            label={props.label ?? t('common.forms.httpProtocol.Label')}
            required={props.required}
        >
            <Select
                style={{
                    width: '100%',
                }}
                defaultValue={'https'}
            >
                <Option
                    value={'https'}
                >https://</Option>
                <Option
                    value={'http'}
                >http://</Option>
            </Select>
        </BaseFormItem>
    );
}