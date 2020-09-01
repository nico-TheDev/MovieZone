import React, { createContext } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
    return (
        <AuthContext.Provider value=''>
            {children}
        </AuthContext.Provider>
    );
}
