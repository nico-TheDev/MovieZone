import styled from "styled-components";
import Container from "../../../shared/Container";
import Button from "../../../shared/Button";
import respondTo from "../../../../util/respondTo";

const Profile = styled.header`
    position: relative;
`;

const ProfileContainer = styled(Container)`
    min-height: 100vh;
    position: relative;
    z-index: 2;
    display: grid;
    grid-template-columns: max-content 1fr;
    gap: 2rem;
    align-items: center;
    padding-bottom: 2rem;
    padding-top:15vh;

    ${respondTo.md`
        grid-template-columns: 1fr;
        justify-items: center;
        align-content: center;
        min-height:120vh;
        padding-top:20vh;
    `}
`;

const Backdrop = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    filter: brightness(25%) hue-rotate(5deg);
    z-index: 1;
`;

const Content = styled.div`
    display: grid;
    gap: 1rem;
    justify-items: start;

    ${respondTo.md`
        text-align: center;
        justify-items: center;
    `}
`;

const Genres = styled.ul`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    
`;

const Stats = styled.ul`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr max-content max-content;
    gap: 10px;

    & > * {
        margin-right: 0.5rem;
        margin-bottom: 0.5rem;
    }

    ${respondTo.md`
        justify-items:center;
        align-content:center;
        grid-template-columns:repeat(2,max-content);
    `}
    ${respondTo.sm`
        grid-template-columns:1fr;
    `}
`;

const Stat = styled.li`
    display: flex;
    align-items: center;
    font-weight: bold;

    ${respondTo.md`
        margin-bottom:1rem;
    `}

    svg {
        fill: var(--main-color);
        margin-right: 10px;
    }

    span {
        display: inline-block;
        padding-left: 5px;
        font-weight: normal;
    }
`;

const MovieButton = styled(Button)`
    display: flex;
    align-items: center;
`;

const Poster = styled.img``;

export {
    Profile,
    ProfileContainer,
    Backdrop,
    Content,
    Genres,
    Stats,
    Stat,
    MovieButton,
    Poster,
};
