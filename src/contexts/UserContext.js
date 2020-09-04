import React, { createContext } from "react";

import { useAuth } from "./AuthContext";

const UserContext = createContext();

export const UserProvider = (props) => {
    return <UserContext.Provider value={{}} {...props} />;
};

export const useUser = () => React.useContext(UserContext);
