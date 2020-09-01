import React,{ useState } from "react";
import { NavLink } from "react-router-dom";

import getIcon from "util/getIcon";
import {
    DropdownHead,
    DropdownItem,
    DropdownButton,
    DropdownBody,
    UserIcon,
} from "./styles";

export default function ProfileDropdown() {
    const [isOpen,setIsOpen] = useState(false);

    const handleClick = () => setIsOpen(true);
    const closePanel = () => setIsOpen(false);

    return (
        <DropdownHead onMouseLeave={closePanel}>
            <DropdownButton onClick={handleClick}>
                <UserIcon>
                    <use href={getIcon("user-circle")} />
                </UserIcon>
            </DropdownButton>
            <DropdownBody isOpen={isOpen}>
                <DropdownItem>
                    <NavLink to="/">Guest</NavLink>
                </DropdownItem>
                <DropdownItem>
                    <NavLink to="/login">Login</NavLink>
                </DropdownItem>
            </DropdownBody>
        </DropdownHead>
    );
}
