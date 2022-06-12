import { Col, Form, Row } from "antd";
import { useForm } from "antd/lib/form/Form";
import IPFormItem from "../shared/form/IPFormItem";

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
                    md={12}
                >
                    <IPFormItem
                        name="ip"
                        showHelp
                    />
                </Col>
            </Row>
        </Form>
    );
}