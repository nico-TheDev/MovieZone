import React from "react";
import Search from "../components/Search";
import { Link, NavLink } from "react-router-dom";

export default function Nav() {
    return (
        <nav className="nav">
            <div className="container">
                <Link to="./" className="nav__logoLink">
                    <img
                        src="./assets/img/logo.png"
                        alt="Movie Zone Logo"
                        className="nav__logo"
                    />
                </Link>
                <Search />
                <ul className="nav__list">
                    <li className="nav__item">
                        <Link className="nav__link" to="./trending">
                            Trending
                        </Link>
                    </li>
                    <li className="nav__item">
                        <Link className="nav__link" to="./popular">
                            Popular
                        </Link>
                    </li>
                    <li className="nav__item">
                        <svg className="icon nav__avatar">
                            <use href="./assets/icons/icons.svg#icon-user-circle"></use>
                        </svg>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
