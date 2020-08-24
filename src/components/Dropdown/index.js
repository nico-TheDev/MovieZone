import React from "react";
import { NavLink } from "react-router-dom";

import {
    DropdownHead,
    DropdownItem,
    DropdownButton,
    DropdownBody,
} from "./styles";

export default function Dropdown({ type, title }) {
    return (
        <DropdownHead>
            <DropdownButton>{title}</DropdownButton>
            <DropdownBody>
                <DropdownItem>
                    <NavLink to={`/list/${type}/popular`}>Popular</NavLink>
                </DropdownItem>
                <DropdownItem>
                    <NavLink to={`/list/${type}/trending`}>Trending</NavLink>
                </DropdownItem>
                <DropdownItem>
                    <NavLink to={`/list/${type}/toprated`}>Top Rated</NavLink>{" "}
                </DropdownItem>
                <DropdownItem>
                    <NavLink to={`/list/${type}/upcoming`}>Upcoming</NavLink>
                </DropdownItem>
            </DropdownBody> 
        </DropdownHead>
    );
}
