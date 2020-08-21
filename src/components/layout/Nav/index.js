import React from "react";
import { Link, NavLink } from "react-router-dom";

import { NavStyle, NavContainer, Logo, NavList, NavItem, UserIcon } from "./styles";
import getIcon from "../../../util/getIcon";
import logoDir from '../../../assets/img/logo.png'
import Search from "../../Search/index";

export default function Nav() {
    return (
        <NavStyle>
            <NavContainer>
                <Link to="/" className='logo-link'>
                    <Logo src={logoDir} alt="Movie Zone Logo" />
                </Link>

                <Search/>

                <NavList>
                    <NavItem>
                        <NavLink to="/list/trending">
                            Trending
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/list/popular">
                            Popular
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/list/toprated">
                            Top Rated
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/list/upcoming">
                            Upcoming
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <UserIcon>
                            <use href={getIcon("user-circle")} />
                        </UserIcon>
                    </NavItem>
                </NavList>
            </NavContainer>
        </NavStyle>
    );
}
