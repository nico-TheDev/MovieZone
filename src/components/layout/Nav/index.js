import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import {
    NavStyle,
    NavContainer,
    Logo,
    NavItem,
    UserIcon,
    Menu,
} from "./styles";
import Dropdown from "../../Dropdown";
import Search from "../../Search/index";
import MobileNav from "../MobileNav";
import getIcon from "../../../util/getIcon";
import logoDir from "../../../assets/img/logo.png";

export default function Nav() {
    const location = useLocation();
    const [isOpen, setIsOpen] = useState(false);

    // CLOSE THE NAV EVERYTIME THE URL CHANGES
    useEffect(() => setIsOpen(false), [location.pathname]);

    const handleClick = () => setIsOpen(true);

    return (
        <NavStyle>
            <NavContainer>
                <Link to="/" className="logo-link">
                    <Logo src={logoDir} alt="Movie Zone Logo" />
                </Link>

                <Search />

                <Dropdown type="movie" title="Movies" />
                <Dropdown
                    type="tv"
                    title="TV Shows"
                    item1="Today"
                    item2="Airing"
                />
                <NavItem>
                    <UserIcon>
                        <use href={getIcon("user-circle")} />
                    </UserIcon>
                </NavItem>

                <Menu onClick={handleClick}>
                    <UserIcon>
                        <use href={getIcon("menu")} />
                    </UserIcon>
                </Menu>
            </NavContainer>
            {<MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />}{" "}
        </NavStyle>
    );
}
