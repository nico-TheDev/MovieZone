import React from 'react';
import UserContextProvider from './UserContext';

export default function GlobalContextProvider({ children }){
    return (
        <UserContextProvider>
            {children}
        </UserContextProvider>
    )
}