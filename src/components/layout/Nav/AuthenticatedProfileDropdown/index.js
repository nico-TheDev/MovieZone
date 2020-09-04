import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import {
    DropdownHead,
    DropdownItem,
    DropdownButton,
    DropdownBody,
    UserIcon,
    NavBtn,
} from "./styles";

export default function ProfileDropdown() {
    const history = useHistory();
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => setIsOpen(true);
    const closePanel = () => setIsOpen(false);
    
    const logoutUser = () => {
        localStorage.clear();
        history.push("/");
        window.location.reload();
    };

    const goToProfile = () => {
        history.push("/profile");
        window.location.reload();
    };

    return <h1>hello</h1>

    // return (
    //     <DropdownHead onMouseLeave={closePanel}>
    //         <DropdownButton onClick={handleClick} name={user?.username}>
    //             <UserIcon
    //                 src={`https://secure.gravatar.com/avatar/${user?.avatar.gravatar.hash}.jpg?s=64
    //                 `}
    //                 alt={`${user?.username} avatar`}
    //             />
    //         </DropdownButton>
    //         <DropdownBody isOpen={isOpen}>
    //             <DropdownItem>
    //                 <NavBtn onClick={goToProfile}>
    //                     {user?.username} Profile
    //                 </NavBtn>
    //             </DropdownItem>
    //             <DropdownItem>
    //                 <NavBtn onClick={logoutUser}>Logout</NavBtn>
    //             </DropdownItem>
    //         </DropdownBody>
    //     </DropdownHead>
    // );
}
