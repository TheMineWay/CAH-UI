import { Form } from "antd";
import { useForm } from "antd/lib/form/Form";
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
            />
        </Form>
    );
}