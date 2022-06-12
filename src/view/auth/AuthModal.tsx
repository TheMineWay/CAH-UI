import { Modal } from "antd";
import AuthForm from "./AuthForm";

type Props = {
    visible: boolean;
    hide: () => void;
}

export default function AuthModal(props: Props) {
    return (
        <Modal
            visible={props.visible}
            onCancel={props.hide}
        >
            <AuthForm
                onFinish={props.hide}
            />
        </Modal>
    );
}