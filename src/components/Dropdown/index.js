import React from "react";
import { NavLink } from "react-router-dom";

import {
    DropdownHead,
    DropdownItem,
    DropdownButton,
    DropdownBody,
} from "./styles";

export default function Dropdown({ type, title, item1, item2 }) {
    return (
        <DropdownHead>
            <DropdownButton>{title}</DropdownButton>
            <DropdownBody>
                <DropdownItem>
                    <NavLink to={`/list/${type}/popular`}>Popular</NavLink>
                </DropdownItem>
                <DropdownItem>
                    <NavLink
                        to={`/list/${type}/${
                            item1 ? item1.toLowerCase() : "trending"
                        }`}
                    >
                        {item1 ? item1 : "Trending"}
                    </NavLink>
                </DropdownItem>
                <DropdownItem>
                    <NavLink to={`/list/${type}/toprated`}>Top Rated</NavLink>{" "}
                </DropdownItem>
                <DropdownItem>
                    <NavLink
                        to={`/list/${type}/${
                            item2 ? item2.toLowerCase() : "upcoming"
                        }`}
                    >
                        {item2 ? item2 : "Upcoming"}
                    </NavLink>
                </DropdownItem>
            </DropdownBody>
        </DropdownHead>
    );
}
