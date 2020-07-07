import React from "react";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <a href="#" target="_blank" className="footer__logoLink">
                    Powered by:
                    <img
                        src="./assets/img/moviedb-logo.svg"
                        alt="moviedb logo"
                        className="footer__dbLogo"
                    />
                </a>

                <p className="footer__note">
                    Made by{" "}
                    <a
                        href="https://github.com/theAspiringDev1"
                        target="_blank"
                        className="footer__author"
                    >
                        Norberto Ignacio
                    </a>
                </p>


                <div className="footer__socials">
                    <a href="#" className="footer__socialLink">
                        <svg className="icon footer__socialIcon">
                            <use href='./assets/icons/icons.svg#icon-twitter'></use>
                        </svg>
                    </a>
    
                    <a href="#" className="footer__socialLink">
                        <svg className="icon footer__socialIcon">
                            <use href='./assets/icons/icons.svg#icon-github'></use>
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
}
