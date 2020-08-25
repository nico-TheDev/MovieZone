import styled from "styled-components";
import respondTo from "../../../util/respondTo";

const MobileNavMain = styled.nav`
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: max-content;
    background-color: var(--main-dark);
    z-index: 1000;
    padding: 2rem 0;

    ${respondTo.md`
        display: flex;
        font-size: 1.5rem;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        transform: translateX(-100%);
        transition: 500ms;
        opacity: 0;
        & > *:not(:last-child){
            margin-bottom: 1rem;
        }
        `}

    & a:hover {
        color: var(--main-color);
    }
`;

/*
.mobileNav{
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: max-content;
    background-color: $main-dark;
    z-index: 1000;
    padding: 2rem 0;

    @include query{
        // height: 40vh;
    }

    &__link{
        &:hover{
            color: $main-color;
        }
    }

    @include query(tabp){
        display: flex;
        font-size: 1.5rem;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        transform: translateX(-100%);
        transition: 500ms;
        opacity: 0;
        & > *:not(:last-child){
            margin-bottom: 1rem;
        }
    
        
        .search{
            display:block;

            .search__input{
                width: 15rem;
                font-size: inherit;
            }
        }

        &__btn{
            position: absolute;
            top:2rem;
            right:2rem;

            &:hover .icon{
                fill:$main-color;
            }
        }


        &__logo{
            width: 12rem;
        }
    }
}
*/
