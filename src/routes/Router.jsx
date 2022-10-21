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
import ViewUser from "../components/Users/ViewUser/ViewUser";
import EditUser from "../components/Users/EditUser/EditUser";
import PostUser from "../components/Users/PostUser/PostUser";

const Routers = () => {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/"
                    element={
                        <RoutePrivateLogin>
                            <Login />
                        </RoutePrivateLogin>} />

                <Route path="/home"
                    element={
                        <RoutePrivate>
                            <Home />
                        </RoutePrivate>} />

                { /* all about users */}

                <Route path="/users"
                    element={
                        <RoutePrivate>
                            <Users />
                        </RoutePrivate>} />

                <Route path="/users/:id"
                    element={
                        <RoutePrivate>
                            <ViewUser />
                        </RoutePrivate>} />

                <Route path="/edit-users/:id"
                    element={
                        <RoutePrivate>
                            <EditUser />
                        </RoutePrivate>} />

                <Route path="/post-users"
                    element={
                        <RoutePrivate>
                            <PostUser />
                        </RoutePrivate>} />

            </Routes>
        </BrowserRouter>
    );
}

export default Routers;