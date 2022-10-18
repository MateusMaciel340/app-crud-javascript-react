import { BrowserRouter, Routes, Route } from "react-router-dom";

// Header
import Header from "../components/Header/Header";

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
                    element={<RoutePrivateLogin><Login /></RoutePrivateLogin>} />

                <Route path="/" element={<RoutePrivate><Header/></RoutePrivate>}>
                    <Route path="/home"
                        element={<RoutePrivate><Home/></RoutePrivate>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Routers;