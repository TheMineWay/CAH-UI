import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useAuthState } from "../providers/AuthContext";
import { useServerState } from "../providers/ServerContext";
import Layout from "../view/shared/layout/Layout";
import routes from "./routes";
import UnauthorizedRoute from "./UnauthorizedRoute";

export default function RouterComponent() {

    const {
        server,
    } = useServerState();

    const {
        authState,
    } = useAuthState();

    return (
        <BrowserRouter>
            <Routes>
                {
                    routes.map((route) => {

                        if((!server && !route.doesNotNeedServer) || (!authState && route.requiresAuth)) return <UnauthorizedRoute/>;

                        return (
                            <Route
                                path={route.path}
                                element={route.disableLayout ? route.component : <Layout>{route.component}</Layout>}
                            />
                        );
                    })
                }
            </Routes>
        </BrowserRouter>
    );
}