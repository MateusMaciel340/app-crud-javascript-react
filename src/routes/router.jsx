import { BrowserRouter, Routes, Route } from "react-router-dom";

// Security
import {
    RoutePrivate, RoutePrivateLogin
} from "../services/security/ProtectionLogin";

import Login from "../components/Login/Login";
import Home from "../components/Home/Home";

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/"
                    element={<RoutePrivateLogin><Login/></RoutePrivateLogin>} />
                <Route path="/home"
                    element={<RoutePrivate><Home /></RoutePrivate>} />
            </Routes>
        </BrowserRouter>
    );
}

export default Routers;