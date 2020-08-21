import React from "react";
import getIcon from "../../../util/getIcon";
import logoDir from "../../../assets/img/moviedb-logo.svg";
import {
    Footer,
    FooterContainer,
    DBLogo,
    LogoLink,
    SocialIcon,
    SocialLink,
    Note,
} from "./styles";

export default function FooterComp() {
    return (
        <Footer>
            <FooterContainer>
                <LogoLink
                    href="https://www.themoviedb.org/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <DBLogo src={logoDir} alt="Movie DB Logo" />
                </LogoLink>

                <Note>
                    Made by
                    <LogoLink
                        href="https://github.com/theAspiringDev1"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Norberto Ignacio
                    </LogoLink>
                </Note>

                <div>
                    <SocialLink
                        href="https://twitter.com/theAspiringDev1"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <SocialIcon>
                            <use href={getIcon("twitter")} />
                        </SocialIcon>
                    </SocialLink>
                    <SocialLink
                        href="https://github.com/theAspiringDev1"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <SocialIcon>
                            <use href={getIcon("github")} />
                        </SocialIcon>
                    </SocialLink>
                </div>
            </FooterContainer>
        </Footer>
    );
}
