import React from "react";
import footerLogo from '../assets/img/moviedb-logo.svg';
import icons from  '../assets/icons/icons.svg';


export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <a href="https://www.themoviedb.org/" target="_blank" className="footer__logoLink">
                    Powered by:
                    <img
                        src={footerLogo}
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
                    <a href="https://twitter.com/theAspiringDev1" className="footer__socialLink">
                        <svg className="icon footer__socialIcon">
                            <use href={`${icons}#icon-twitter`}></use>
                        </svg>
                    </a>
    
                    <a href="https://github.com/theAspiringDev1" className="footer__socialLink">
                        <svg className="icon footer__socialIcon">
                            <use href={`${icons}#icon-github`}></use>
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
}
