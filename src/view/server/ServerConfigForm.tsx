import { Form } from "antd";
import { useForm } from "antd/lib/form/Form";
import { t } from "i18next";
import IPFormItem from "../shared/form/IPFormItem";

export default function ServerConfigForm() {
    
    const [form] = useForm();

    return (
        <Form
            form={form}
            layout='vertical'
        >
            <IPFormItem
                name="ip"
                label={t('view.serverConfig.form.fields.ip.Label').toString()}
                rules={[
                    {
                        required: true,
                        message: t('view.serverConfig.form.fields.ip.rules.Required')
                    }
                ]}
            />
        </Form>
    );
}