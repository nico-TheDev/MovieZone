import React, { useEffect } from "react";
import {
    HeaderBG,
    Avatar,
    Joined,
    Username,
    User,
    UserDetails,
} from "./styles";
import UserList from "./UserLists";
import { useAuth } from "contexts/AuthContext";

export default function Profile() {
    const { state:{user} } = useAuth();

    return (
        <>
            <HeaderBG>
                <User>
                    <Avatar
                        src={`https://secure.gravatar.com/avatar/${user?.avatar.gravatar.hash}.jpg?s=256
                    `}
                    />
                    <UserDetails>
                        <Username>{user?.username}</Username>
                        <Joined>{user?.name}</Joined>
                    </UserDetails>
                </User>
            </HeaderBG>
            <UserList />
        </>
    );
}
