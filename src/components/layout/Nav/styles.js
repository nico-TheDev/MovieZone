import styled from "styled-components";
import Container from "../../../components/shared/Container";
import Icon from "../../shared/Icon";


const NavStyle = styled.nav`
    width: 100%;
    top: 0;
    left: 0;
    z-index: 500;
    position:absolute;
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

const Logo = styled.img``;

const NavList = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const NavItem = styled.li`
    margin: 0 1rem;

    & a {
        &:hover{
            color:var(--main-color);
        }
    }
`;

const UserIcon = styled(Icon)`
 width:  2.5rem;
        height: 2.5rem;
`;

export { NavStyle, NavContainer, Logo, NavList, NavItem, UserIcon };

/*
.nav{
    width: 100%;
    top: 0;
    left: 0;
    z-index: 500;
    @include query(tabp){
        position: relative !important;
    }
    
    .container{
        display: flex;
        height: 10vh;
        align-items: center;
        padding: 1rem 0;
        // border: 1px solid red;
    }

    &__logoLink{
        margin-right: auto;
    }

    &__logo{
        @include query(cp){
            width:12rem;
        }
    }

    &__list{
        display: flex;
        justify-content: center;
        align-items: center;

        @include query(tabp){
            display:none;
        }

    }

    &__menu{
        display: none;
        @include query(tabp){
            display: inline-block;
            &:hover .icon{
                fill:$main-color
            }
        }
    }

    &__item{
        margin: 0 1rem;
    }

    &__link{
        &:hover{
            color: $main-color;
        }
    }

    &__avatar{
        width:  2.5rem;
        height: 2.5rem;
    }
 
}

a.active{
    color:$main-color;
}
*/
