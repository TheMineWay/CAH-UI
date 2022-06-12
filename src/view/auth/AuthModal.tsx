import { Modal } from "react-bootstrap";

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

        </Modal>
    );
}