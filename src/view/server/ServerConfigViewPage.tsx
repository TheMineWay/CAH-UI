import { Card } from "antd";
import FormPageContainer from "../shared/container/FormPageContainer";
import ServerConfigForm from "./ServerConfigForm";

export default function ServerConfigViewPage() {
    return (
        <FormPageContainer
            verticalAlign
        >
            <Card
                hoverable
            >
                <ServerConfigForm />
            </Card>
        </FormPageContainer>
    );
}