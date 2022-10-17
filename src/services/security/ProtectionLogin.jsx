import React from "react";
import { Navigate } from "react-router-dom";

const AuthLogin = (valueInitial, valueFinal) => {
    if (localStorage.getItem("token") !== null) {
        return valueInitial;
    }

    return valueFinal;
}

export function RoutePrivate({ children }) {
    const auth = AuthLogin(true, false);
    return auth ? children : <Navigate to="/"/>
}

export function RoutePrivateLogin({ children }) {
    const auth = AuthLogin(false, true);
    return auth ? children : <Navigate to="/home"/>
}