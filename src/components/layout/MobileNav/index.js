import React from "react";
import { Link } from "react-router-dom";

import { MobileNavMain, CloseBtn as CloseButton, Logo,MenuHolder } from "./styles";
import Search from "../../Search";
import Icon from "../../shared/Icon";
import getIcon from "../../../util/getIcon";
import logo from "../../../assets/img/logo.png";
import Dropdown from "../../Dropdown";

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
            	<Dropdown type="movie" title="Movies" />
            	<Dropdown type="tv" title="TV Shows" item1="Today" item2="Airing" />
            </MenuHolder>
        </MobileNavMain>
    );
}
