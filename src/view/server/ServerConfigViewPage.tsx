import { Card, Col, Row } from "antd";
import ServerConfigForm from "./ServerConfigForm";

export default function ServerConfigViewPage() {
    return (
        <Row
            justify='center'
        >
            <Col
                xs={24}
            >
                <Card>
                    <ServerConfigForm/>
                </Card>
            </Col>
        </Row>
    );
}