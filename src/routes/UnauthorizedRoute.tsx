import { Result } from "antd";

export default function UnauthorizedRoute() {
    return (
        <div
            style={{
                height: '100vh',
                width: '100vw',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Result
                status={'403'}
            />
        </div>
    );
}