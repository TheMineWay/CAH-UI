import { Col, Row } from "antd";
import { BasicContainerProps } from "./BasicContainer";

type Props = BasicContainerProps & {
    children: JSX.Element;
}

export default function FormPageContainer(props: Props) {

    const topSpacing = props.topSpacing ? '3em' : 0;

    return (
        <Row
            justify="center"
            align={props.verticalAlign ? 'middle' : 'top'}
            style={{
                paddingTop: topSpacing,
                height: props.verticalAlign ? '100%' : undefined,
            }}
        >
            <Col
                xs={24}
                sm={18}
                md={16}
                lg={14}
                xl={12}
                xxl={10}
            >
                {props.children}
            </Col>
        </Row>
    );
}