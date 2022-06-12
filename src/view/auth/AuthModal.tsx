import { Modal } from "react-bootstrap";
import AuthForm from "./AuthForm";

type Props = {
    visible: boolean;
    hide: () => void;
}

export default function AuthModal(props: Props) {
    return (
        <Modal
            show={props.visible}
            onExit={props.hide}
        >
            <AuthForm
                onFinish={props.hide}
            />
        </Modal>
    );
}