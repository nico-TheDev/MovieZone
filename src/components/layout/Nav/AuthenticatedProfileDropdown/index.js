import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import {
    DropdownHead,
    DropdownItem,
    DropdownButton,
    DropdownBody,
    UserIcon,
    NavBtn,
} from "./styles";
import { useAuth } from "contexts/AuthContext";
import actionTypes from "ActionTypes";

export default function ProfileDropdown() {
    const {
        state: { user },
        dispatch,
    } = useAuth();
    const history = useHistory();
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => setIsOpen(true);
    const closePanel = () => setIsOpen(false);

    const logoutUser = () => {
        dispatch({ type: actionTypes.LOGOUT });
        history.push("/");
        window.location.reload();
    };

    const goToProfile = () => {
        history.push("/profile");
        window.location.reload();
    };

    return (
        <DropdownHead onMouseLeave={closePanel}>
            <DropdownButton onClick={handleClick} name={user?.username}>
                <UserIcon
                    src={`https://secure.gravatar.com/avatar/${user?.avatar.gravatar.hash}.jpg?s=64
                    `}
                    alt={`${user?.username} avatar`}
                />
            </DropdownButton>
            <DropdownBody isOpen={isOpen}>
                <DropdownItem>
                    <NavBtn onClick={goToProfile}>
                        {user?.username} Profile
                    </NavBtn>
                </DropdownItem>
                <DropdownItem>
                    <NavBtn onClick={logoutUser}>Logout</NavBtn>
                </DropdownItem>
            </DropdownBody>
        </DropdownHead>
    );
}
