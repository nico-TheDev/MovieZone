import React from "react";
import UserContextProvider from "./UserContext";
import AuthContextProvider from "./AuthContext";

export default function GlobalContextProvider({ children }) {
    return (
        <AuthContextProvider>
            <UserContextProvider>{children}</UserContextProvider>
        </AuthContextProvider>
    );
}
