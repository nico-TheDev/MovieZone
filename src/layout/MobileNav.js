import React from "react";
import Search from "../components/Search";
import { NavLink } from "react-router-dom";
import mobileLogo from '../assets/img/logo.png'
import icons from '../assets/icons/icons.svg';

export default function MobileNav({ open, setOpen }) {

    return (
        <nav
            className={open ? "mobileNav showNav" : "mobileNav"}
            onMouseLeave={() => setOpen(false)}
        >
            <button className="mobileNav__btn" onClick={() => setOpen(false)}>
                    <svg className="icon">
                        <use href={`${icons}#icon-close`}></use>
                    </svg>
            </button>
            <NavLink to="/" className="mobileNav__link">
                <img
                    src={mobileLogo}
                    alt="Movie Zone Logo"
                    className="mobileNav__logo"
                />{" "}
            </NavLink>
            <Search />
            <NavLink to="/trending" className="mobileNav__link">
                Trending
            </NavLink>
            <NavLink to="/popular" className="mobileNav__link">
                Popular
            </NavLink>
            <NavLink to="/toprated" className="mobileNav__link">
                Top Rated
            </NavLink>
            <NavLink to="/upcoming" className="mobileNav__link">
                Upcoming
            </NavLink>
        </nav>
    );
}
