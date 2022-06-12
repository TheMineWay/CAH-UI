import { Card, Col, Row } from "antd";
import { useEffect, useState } from "react";
import useRequest from "../../network/requester/useRequest";
import { ServerInfo } from "../../providers/ServerContext";
import FormPageContainer from "../shared/container/FormPageContainer";
import ServerConfigForm, { ServerConfigFormValues } from "./ServerConfigForm";
import ServerConfigRetrievingDisplay from "./ServerConfigRetrievingDisplay";

export default function ServerConfigViewPage() {

    const [serverConfig, setServerConfig] = useState<ServerConfigFormValues>();

    const {
        loading,
        response,
        request,
        clear: clearRequestCache,
    } = useRequest<ServerInfo>({
        method: 'get',
        path: 'info',
        overrideHost: serverConfig?.address,
        overridePort: serverConfig?.port,
        overrideProtocol: serverConfig?.protocol,
    });

    const getResponse = (): ServerInfo | undefined => {
        if(!response) return undefined;
        return {
            ...response,
            protocol: serverConfig?.protocol ?? 'http',
        }
    }

    useEffect(() => {
        if (serverConfig) doRequest();
    }, [serverConfig]);

    const doRequest = async () => {
        clearRequestCache();
        await request();
    }

    return (
        <FormPageContainer
            verticalAlign
        >
            <Row
                gutter={[24, 24]}
            >
                {
                    (loading || response) && (
                        <Col span={24}>
                            <Card hoverable>
                                <ServerConfigRetrievingDisplay
                                    loading={loading}
                                    response={getResponse()}
                                />
                            </Card>
                        </Col>
                    )
                }
                <Col span={24}>
                    <Card hoverable>
                        <ServerConfigForm
                            setServerProps={setServerConfig}
                            loading={loading}
                        />
                    </Card>
                </Col>
            </Row>
        </FormPageContainer>
    );
}