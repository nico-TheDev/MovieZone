import styled from "styled-components";

import Container from "../../../components/shared/Container";
import respondTo from "../../../util/respondTo";
import Icon from "../../shared/Icon";

const NavStyle = styled.nav`
    width: 100%;
    top: 0;
    left: 0;
    z-index: 500;
    position: absolute;

    ${respondTo.md`

        & ul, & li, form{
            display:none;
        }
    `}
`;

const NavContainer = styled(Container)`
    display: flex;
    height: 10vh;
    align-items: center;
    padding: 1rem 0;

    & .logo-link {
        margin-right: auto;
    }
`;

const Logo = styled.img`
    ${respondTo.sm`
        width:12rem;
    `}
`;

const NavList = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;

    ${respondTo.md`
        display:none;
    `}
`;

const NavItem = styled.li`
    margin: 0 1rem;

    & a {
        &:hover {
            color: var(--main-color);
        }
    }
`;

const UserIcon = styled(Icon)`
    width: 2.5rem;
    height: 2.5rem;
    fill:white;
`;

const Menu = styled.button`
    display: none;
    ${respondTo.md`
        display: inline-block;
        &:hover .icon{
            fill:$main-color
        }
    `}
`;

export { NavStyle, NavContainer, Logo, NavList, NavItem, UserIcon, Menu };
