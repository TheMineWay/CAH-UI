type Props = {
    children: JSX.Element;
}

export default function Layout(props: Props) {
    return (
        <>
            {props.children}
        </>
    );
}