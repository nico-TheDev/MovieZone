import styled from "styled-components";

import Icon from "../../shared/Icon";
import Container from "../../shared/Container";
import respondTo from '../../../util/respondTo'

const Footer = styled.footer`
    background-color: var(--main-dark-5);
    padding: 2rem 0;
    margin-top:1.5rem;
`;

const FooterContainer = styled(Container)`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 2;

    ${respondTo.sm`
       display: grid;
        gap:1rem;
        grid-template-columns: repeat(2,1fr);
        justify-content: center;
        justify-items: center;
        text-align: center;

        & > * {
            margin-bottom: 1rem;
        }
    `}
`;

const DBLogo = styled.img`
    width: 5rem;
`;

const LogoLink = styled.a`
    display: grid;
    gap: 0.4rem;
`;

const SocialIcon = styled(Icon)`
    width: 2.5rem;
    height: 2.5rem;
`;

const SocialLink = styled.a`
    &:hover svg {
        fill: var(--main-color);
    }
`;

const Note = styled.p`
    display:flex;
    align-items:center;

    a{
        margin-left:5px;
        color:var(--main-color);
    }
`;

export { Footer, FooterContainer, DBLogo, LogoLink, SocialIcon, SocialLink , Note};
