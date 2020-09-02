import React,{ useState } from "react";
import { NavLink } from "react-router-dom";

import sampleDir from 'assets/img/logo.png'
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
                <UserIcon src='https://vercel.com/api/www/avatar/1f0b5e1a755dd131c912ce4cb47fb9d00e5c4655?s=204' alt='avatar'/>
            </DropdownButton>
            <DropdownBody isOpen={isOpen}>
                <DropdownItem>
                    <NavLink to="/">Profile</NavLink>
                </DropdownItem>
                <DropdownItem>
                    <NavLink to="/">Logout</NavLink>
                </DropdownItem>
            </DropdownBody>
        </DropdownHead>
    );
}
