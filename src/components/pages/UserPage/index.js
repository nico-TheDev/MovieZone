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

export default function Profile() {

    return <h2>Profile</h2>
    // return (
    //     <>
    //         <HeaderBG>
    //             <User>
    //                 <Avatar
    //                     src={`https://secure.gravatar.com/avatar/${user?.avatar.gravatar.hash}.jpg?s=256
    //                 `}
    //                 />
    //                 <UserDetails>
    //                     <Username>{user?.username}</Username>
    //                     <Joined>{user?.name}</Joined>
    //                 </UserDetails>
    //             </User>
    //         </HeaderBG>
    //         <UserList />
    //     </>
    // );
}
