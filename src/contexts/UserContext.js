import React, { createContext } from "react";

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
    return (
        <UserContext.Provider value={{ isLoggedIn: true }}>
            {children}
        </UserContext.Provider>
    );
}
