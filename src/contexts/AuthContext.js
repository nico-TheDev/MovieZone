import React, { createContext, useState, useEffect } from "react";
import API from "api/moviedb.instance";

export const AuthContext = createContext();

const getToken = () => {
    if (localStorage.getItem("token")) {
        return JSON.parse(localStorage.getItem("token"));
    }
    return null;
};
const getSession = () => {
    if (localStorage.getItem("session")) {
        return JSON.parse(localStorage.getItem("session"));
    }
    return null;
};

export default function AuthContextProvider({ children }) {
    const baseURL = window.location.origin;
    const [token, setToken] = useState(() => getToken());
    const [session, setSession] = useState(() => getSession());

    useEffect(() => {
        if (token && !session) {
            API.post("authentication/session/new", {
                request_token: token.request_token,
            }).then((res) => {
                if (res.data.success) {
                    console.log(res.data);
                    setSession(res.data);
                    localStorage.setItem("session", JSON.stringify(res.data));
                } else {
                    console.log(res);
                    console.log("error token");
                }
            });
        }
    }, [token]);

    const manageSession = async () => {
        const tokenData = await API.get("authentication/token/new");
        console.log(tokenData.data);
        if (tokenData.data.success) {
            localStorage.setItem("token", JSON.stringify(tokenData.data));
            setToken(tokenData.data);
            window.location
                .assign(`https://www.themoviedb.org/authenticate/${tokenData.data.request_token}?redirect_to=${baseURL}/
            `);
        } else {
            console.log("No Token ");
        }
    };

    return (
        <AuthContext.Provider value={{ manageSession, token, session }}>
            {children}
        </AuthContext.Provider>
    );
}
