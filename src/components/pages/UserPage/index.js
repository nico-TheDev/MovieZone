import React from "react";

import { HeaderBG, Avatar, Joined, Username, User,UserDetails } from "./styles";
import UserList from "./UserLists";

export default function Profile() {
    return (
        <>
        <HeaderBG>
            <User>
                <Avatar src="https://vercel.com/api/www/avatar/1f0b5e1a755dd131c912ce4cb47fb9d00e5c4655?s=204" />
                <UserDetails>
                    <Username>theAspiringDev1</Username>
                    <Joined>Member since June 2020</Joined>
                </UserDetails>
            </User>
        </HeaderBG>
        <UserList/>
        </>
    );
}
