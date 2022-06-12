import ServerConfigViewPage from "../view/server/ServerConfigViewPage";
import Route404 from "./Route404";

type Route = {
    path: string;
    component: JSX.Element;
    disableLayout?: boolean;
    doesNotNeedServer?: boolean;
    requiresAuth?: boolean;
}

const routes: Route[] = [
    {
        path: '*',
        component: <Route404/>,
        doesNotNeedServer: true,
    },
    {
        path: '/',
        component: <ServerConfigViewPage/>,
        doesNotNeedServer: true,
    },
];

export default routes;