import Route404 from "./Route404";

type Route = {
    path: string;
    component: JSX.Element;
    disableLayout?: boolean;
}

const routes: Route[] = [
    {
        path: '*',
        component: <Route404/>,
    },
];

export default routes;