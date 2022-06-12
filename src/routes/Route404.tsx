import { Result } from "antd";

export default function Route404() {
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
                status={'404'}
            />
        </div>
    );
}