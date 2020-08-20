import React from "react";

export default function Nav() {
    return (
        <nav className="nav" style={{ position: `${navPosition}` }}>
            <div className="container">
                <Link to="/" className="nav__logoLink">
                    <img
                        src={navLogo}
                        alt="Movie Zone Logo"
                        className="nav__logo"
                    />
                </Link>

                <Search />

                <ul className="nav__list">
                    <li className="nav__item">
                        <NavLink className="nav__link" to="/list/trending">
                            Trending
                        </NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink className="nav__link" to="/list/popular">
                            Popular
                        </NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink className="nav__link" to="/list/toprated">
                            Top Rated
                        </NavLink>
                    </li>
                    <li className="nav__item">
                        <NavLink className="nav__link" to="/list/upcoming">
                            Upcoming
                        </NavLink>
                    </li>
                    <li className="nav__item">
                        <svg className="icon nav__avatar">
                            <use href={`${icons}#icon-user-circle`}></use>
                        </svg>
                    </li>
                </ul>

                <button className="nav__menu" onClick={() => setOpen(true)}>
                    <svg className="icon">
                        <use href={`${icons}#icon-menu`}></use>
                    </svg>
                </button>
            </div>
            <MobileNav open={open} setOpen={setOpen} />
        </nav>
    );
}
