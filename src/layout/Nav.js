import React,{ useState } from "react";
import Search from "../components/Search";
import MobileNav from './MobileNav';
import { Link, NavLink } from "react-router-dom";

export default function Nav({position}) {
    const [open,setOpen] = useState(false);

    return (
        <nav className="nav" style={{position:`${position}`}}>
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
                        <NavLink className="nav__link" to="/trending">
                            Trending
                        </NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink className="nav__link" to="/popular">
                            Popular
                        </NavLink>
                    </li>
                    <li className="nav__item">
                        <svg className="icon nav__avatar">
                            <use href="./assets/icons/icons.svg#icon-user-circle"></use>
                        </svg>
                    </li>
                </ul>

                <button className="nav__menu" onClick={() => setOpen(true)}>
                    <svg className="icon">
                        <use href='./assets/icons/icons.svg#icon-menu'></use>
                    </svg>
                </button>
            </div>
            <MobileNav open={open} setOpen={setOpen}/>
        </nav>
    );
}
