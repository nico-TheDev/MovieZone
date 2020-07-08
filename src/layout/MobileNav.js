import React from "react";
import Search from "../components/Search";
import { NavLink } from "react-router-dom";

export default function MobileNav({ open, setOpen }) {

    return (
        <nav
            className={open ? "mobileNav showNav" : "mobileNav"}
            onMouseLeave={() => setOpen(false)}
        >
            <button className="mobileNav__btn" onClick={() => setOpen(false)}>
                    <svg className="icon">
                        <use href='./assets/icons/icons.svg#icon-close'></use>
                    </svg>
            </button>
            <NavLink to="/" className="mobileNav__link">
                <img
                    src="./assets/img/logo.png"
                    alt="Movie Zone Logo"
                    className="mobileNav__logo"
                />{" "}
            </NavLink>
            <Search />
            <NavLink to="/popular" className="mobileNav__link">
                Popular
            </NavLink>
            <NavLink to="/trending" className="mobileNav__link">
                Trending
            </NavLink>
        </nav>
    );
}
