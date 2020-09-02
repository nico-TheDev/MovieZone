import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";

import {
    DropdownHead,
    DropdownItem,
    DropdownButton,
    DropdownBody,
    UserIcon,
} from "./styles";
import { UserContext } from "contexts/UserContext";

export default function ProfileDropdown() {
    const {
        data: { user },
    } = useContext(UserContext);
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => setIsOpen(true);
    const closePanel = () => setIsOpen(false);

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
                    <NavLink to="/profile">{user?.username} Profile</NavLink>
                </DropdownItem>
                <DropdownItem>
                    <NavLink to="/">Logout</NavLink>
                </DropdownItem>
            </DropdownBody>
        </DropdownHead>
    );
}
