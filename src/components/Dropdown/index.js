import React from "react";
import { NavLink } from "react-router-dom";

import {
    DropdownHead,
    DropdownItem,
    DropdownButton,
    DropdownBody,
} from "./styles";

export default function Dropdown({ links, title, type }) {
    return (
        <DropdownHead>
            <DropdownButton>{title}</DropdownButton>
            <DropdownBody>
                {links?.map((link) => (
                    <DropdownItem key={link.href(type)}>
                        <NavLink to={link.href(type)}>{link.label}</NavLink>
                    </DropdownItem>
                ))}
            </DropdownBody>
        </DropdownHead>
    );
}
