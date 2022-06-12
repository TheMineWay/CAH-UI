import { CloudOutlined, ReloadOutlined } from "@ant-design/icons";
import { Col, Form, Row, Space, Button } from "antd";
import { useForm } from "antd/lib/form/Form";
import { isIP, isPort } from "class-validator";
import { t } from "i18next";
import IPFormItem from "../shared/form/IPFormItem";
import IPPortFormItem from "../shared/form/IPPortFormItem";
import HttpProtocolFormItem from "../shared/form/ProtocolFormItem";

export type ServerConfigFormValues = {
    address: string;
    port?: string;
    protocol: 'http' | 'https';
}

type Props = {
    setServerProps: (props: ServerConfigFormValues) => void;
}

export default function ServerConfigForm(props: Props) {

    const [form] = useForm<ServerConfigFormValues>();

    const submit = async (values: ServerConfigFormValues) => {

        const port = values.port ?? '4000';

        if (!isIP(values.address) || !isPort(port)) throw new Error();

        props.setServerProps(values);
    }

    return (
        <Form<ServerConfigFormValues>
            form={form}
            layout='vertical'
            onFinish={submit}
        >
            <Row
                gutter={[12, 12]}
            >
                <Col
                    xs={7}
                    md={5}
                    xxl={4}
                >
                    <HttpProtocolFormItem
                        name="protocol"
                        required
                    />
                </Col>
                <Col
                    xs={17}
                    md={11}
                    xxl={12}
                >
                    <IPFormItem
                        name="address"
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
                            icon={<CloudOutlined />}
                            type='primary'
                            htmlType='submit'
                        >
                            {t('view.serverConfig.form.actions.Connect').toString()}
                        </Button>
                        <Button
                            icon={<ReloadOutlined />}
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