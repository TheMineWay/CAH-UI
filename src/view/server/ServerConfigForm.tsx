import { Col, Form, Row } from "antd";
import { useForm } from "antd/lib/form/Form";
import IPFormItem from "../shared/form/IPFormItem";
import IPPortFormItem from "../shared/form/IPPortFormItem";

export default function ServerConfigForm() {

    const [form] = useForm();

    return (
        <Form
            form={form}
            layout='vertical'
        >
            <Row
                gutter={[12, 12]}
            >
                <Col
                    xs={24}
                    md={16}
                >
                    <IPFormItem
                        name="ip"
                        showHelp
                    />
                </Col>
                <Col
                    xs={24}
                    md={8}
                >
                    <IPPortFormItem
                        name="port"
                        showHelp
                    />
                </Col>
            </Row>
        </Form>
    );
}