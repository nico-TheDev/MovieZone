import React from "react";
import { Link, NavLink } from "react-router-dom";

import {
    NavStyle,
    NavContainer,
    Logo,
    NavList,
    NavItem,
    UserIcon,
    Menu,
} from "./styles";
import getIcon from "../../../util/getIcon";
import logoDir from "../../../assets/img/logo.png";
import Search from "../../Search/index";
import Dropdown from "../../Dropdown";

export default function Nav() {
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

                <Menu>
                    <UserIcon>
                        <use href={getIcon("menu")} />
                    </UserIcon>
                </Menu>
            </NavContainer>
        </NavStyle>
    );
}

