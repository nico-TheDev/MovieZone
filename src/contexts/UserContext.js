import React, { createContext, useContext } from "react";

import { AuthContext } from "./AuthContext";
import useUserAccount from "hooks/useUserAccount";

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
    const { session } = useContext(AuthContext);
    const { data,isLoading } = useUserAccount(session);

    return (
        <UserContext.Provider value={{ data,isLoading }}>
            {children}
        </UserContext.Provider>
    );
}
