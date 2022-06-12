import './layout.css';

type Props = {
    children: JSX.Element;
}

export default function Layout(props: Props) {
    return (
        <div
            className="base-layout"
            style={{
                height: '100vh',
                width: '100vw',
            }}
        >
            <div
                className='layout-content'
            >
                {props.children}
            </div>
        </div>
    );
}