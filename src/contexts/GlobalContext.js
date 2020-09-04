import React from "react";
import { UserProvider } from "./UserContext";
import { AuthProvider } from "./AuthContext";

export default function GlobalContextProvider({ children }) {
    return (
        <AuthProvider>
            <UserProvider>{children}</UserProvider>
        </AuthProvider>
    );
}
