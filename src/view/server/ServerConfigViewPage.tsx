import { Card } from "antd";
import { useEffect, useState } from "react";
import useRequest from "../../network/requester/useRequest";
import { ServerInfo } from "../../providers/ServerContext";
import FormPageContainer from "../shared/container/FormPageContainer";
import ServerConfigForm, { ServerConfigFormValues } from "./ServerConfigForm";

export default function ServerConfigViewPage() {

    const [serverConfig, setServerConfig] = useState<ServerConfigFormValues>();

    const {
        loading,
        response,
        request,
    } = useRequest<ServerInfo>({
        method: 'get',
        path: 'info',
        overrideHost: serverConfig?.address,
        overridePort: serverConfig?.port,
        overrideProtocol: serverConfig?.protocol,
    });

    useEffect(() => {
        if(serverConfig) doRequest();
    }, [serverConfig]);

    const doRequest = async () => {
        await request();
    }

    return (
        <FormPageContainer
            verticalAlign
        >
            <Card
                hoverable
            >
                <ServerConfigForm
                    setServerProps={setServerConfig}
                    loading={loading}
                />
            </Card>
        </FormPageContainer>
    );
}