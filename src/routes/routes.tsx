import Route404 from "./Route404";

type Route = {
    path: string;
    component: JSX.Element;
}

const routes: Route[] = [
    {
        path: '*',
        component: <Route404/>,
    },
];

export default routes;