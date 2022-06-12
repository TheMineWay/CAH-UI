import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "../view/layout/Layout";
import routes from "./routes";

export default function RouterComponent() {
    return (
        <BrowserRouter>
            <Routes>
                {
                    routes.map((route) => (
                        <Route
                            path={route.path}
                            element={route.disableLayout ? route.component : <Layout>{route.component}</Layout>}
                        />
                    ))
                }
            </Routes>
        </BrowserRouter>
    );
}