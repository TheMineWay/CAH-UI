import { CloudOutlined, ReloadOutlined } from "@ant-design/icons";
import { Col, Form, Row, Space, Button } from "antd";
import { useForm } from "antd/lib/form/Form";
import { isIP, isPort } from "class-validator";
import { t } from "i18next";
import IPFormItem from "../shared/form/IPFormItem";
import IPPortFormItem from "../shared/form/IPPortFormItem";

type FormValues = {
    ip: string;
    port?: string;
}

export default function ServerConfigForm() {

    const [form] = useForm<FormValues>();

    const submit = (values: FormValues) => {

        const port = values.port ?? '4000';

        if(!isIP(values.ip) || !isPort(port)) throw new Error();

        // Submit
    }

    return (
        <Form
            form={form}
            layout='vertical'
            onFinish={submit}
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
                        required
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

                <Col
                    span={24}
                >
                    <Space>
                        <Button
                            icon={<CloudOutlined/>}
                            type='primary'
                            htmlType='submit'
                        >
                            {t('view.serverConfig.form.actions.Connect').toString()}
                        </Button>
                        <Button
                            icon={<ReloadOutlined/>}
                            htmlType='reset'
                        >
                            {t('common.forms.actions.Reset').toString()}
                        </Button>
                    </Space>
                </Col>
            </Row>
        </Form>
    );
}