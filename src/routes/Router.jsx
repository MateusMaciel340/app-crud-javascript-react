import { BrowserRouter, Routes, Route } from "react-router-dom";

// Header
import Header from "../components/Header/Header";

// Security
import {
    RoutePrivate, RoutePrivateLogin
} from "../services/security/ProtectionLogin";

import Login from "../components/Login/Login";
import Home from "../components/Home/Home";
import Users from "../components/Users/Users";

const Routers = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/"
                    element={
                        <RoutePrivateLogin>
                            <Login/>
                        </RoutePrivateLogin>}/>
                
                <Route path="/home"
                    element={
                        <RoutePrivate>
                            <Home/>
                        </RoutePrivate>}/>
                
                <Route path="/users"
                    element={
                        <RoutePrivate>
                            <Users/>
                        </RoutePrivate>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Routers;