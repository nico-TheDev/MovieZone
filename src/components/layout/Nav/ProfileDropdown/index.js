import React from "react";
import { NavLink } from "react-router-dom";

import getIcon from "util/getIcon";
import { DropdownHead, DropdownButton, UserIcon } from "./styles";

export default function ProfileDropdown() {
    return (
        <DropdownHead>
            <NavLink to="/login">
                <DropdownButton as="div">
                    <UserIcon>
                        <use href={getIcon("user-circle")} />
                    </UserIcon>
                </DropdownButton>
            </NavLink>
        </DropdownHead>
    );
}
