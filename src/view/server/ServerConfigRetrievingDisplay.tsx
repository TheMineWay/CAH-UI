import { AlertOutlined, InfoCircleOutlined, WarningOutlined } from "@ant-design/icons";
import { List, Result, Spin } from "antd";
import { t } from "i18next";
import { ServerInfo } from "../../providers/ServerContext";

const { Item } = List;

type Props = {
    loading: boolean;
    response?: ServerInfo;
}

export default function ServerConfigRetrievingDisplay(props: Props) {

    const Fetching = () => (
        <Result
            icon={<Spin size={'large'} />}
            title={t('view.serverConfig.stateDisplay.states.fetching.Title').toString()}
        />
    );

    const DisplayStatus = () => {
        const status = props.response!;

        const tWarning = (warning: string) => ({
            title: t(`view.serverConfig.stateDisplay.warningsList.warnings.${warning}.Title`),
            description: t(`view.serverConfig.stateDisplay.warningsList.warnings.${warning}.Description`),
        });

        const warnings: {
            title: string;
            description: string;
            type: 'low' | 'medium' | 'high';
        }[] = [];

        if (status.protocol === 'http') warnings.push({
            ...tWarning('protocol'),
            type: 'high',
        });

        return (
            <>
                <List>
                    {
                        warnings.map((w, i) => (
                            <Item
                                id={'wl_' + i}
                            >
                                <Item.Meta
                                    title={w.title}
                                    description={<p style={{ textAlign: 'justify' }}>{w.description}</p>}
                                    avatar={w.type === 'high' ? (
                                        <AlertOutlined
                                            style={{
                                                color: 'red'
                                            }}
                                        />
                                    ) : (w.type === 'medium' ? (
                                        <WarningOutlined
                                            style={{
                                                color: 'orange'
                                            }} />
                                    ) : (
                                        <InfoCircleOutlined
                                            style={{
                                                color: 'blue'
                                            }} />
                                    ))}
                                />
                            </Item>
                        ))
                    }
                </List>
            </>
        )
    }

    return (
        <>
            {
                props.loading && <Fetching />
            }
            {
                props.response && <DisplayStatus />
            }
        </>
    );
}