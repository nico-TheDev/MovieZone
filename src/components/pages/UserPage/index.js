import React, { useContext } from "react";

import {
    HeaderBG,
    Avatar,
    Joined,
    Username,
    User,
    UserDetails,
} from "./styles";
import UserList from "./UserLists";
import { UserContext } from "contexts/UserContext";

export default function Profile() {
    const {
        data: { user },
    } = useContext(UserContext);

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
