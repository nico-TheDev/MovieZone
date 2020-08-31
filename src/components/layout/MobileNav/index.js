import React from "react";
import { Link } from "react-router-dom";

import {
    MobileNavMain,
    CloseBtn as CloseButton,
    Logo,
    MenuHolder,
} from "./styles";
import Search from "components/Search";
import Icon from "components/shared/Icon";
import getIcon from "util/getIcon";
import logo from "assets/img/logo.png";
import Dropdown from "components/Dropdown";
import { LINK_ONE, LINK_TWO } from "components/layout/Nav";

export default function MobileNav({ isOpen, setIsOpen }) {
    const handleClick = () => setIsOpen(false);

    return (
        <MobileNavMain isOpen={isOpen} onMouseLeave={handleClick}>
            <CloseButton onClick={handleClick}>
                <Icon>
                    <use href={getIcon("close")} />
                </Icon>
            </CloseButton>
            <Link to="/">
                <Logo src={logo} alt="moviezone logo" />
            </Link>
            <Search />
            <MenuHolder>
                <Dropdown type="movie" title="Movies" links={LINK_ONE} />
                <Dropdown type="tv" title="TV Shows" links={LINK_TWO} />
            </MenuHolder>
        </MobileNavMain>
    );
}
