import styled from "styled-components";
import Container from "../shared/Container";
import Button from "../shared/Button";

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
`;

const Genres = styled.ul`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
`;

const Stats = styled.ul`
    width: 100%;
    display: flex;
    justify-content: space-between;

    & > * {
        margin-right: 0.5rem;
        margin-bottom: 0.5rem;
    }
`;

const Stat = styled.li`
    display: flex;
    align-items: center;
    font-weight: bold;

    svg {
        fill: var(--main-color);
    }

    span {
        margin-left: 10px;
        font-weight: normal;
    }
`;

const MovieButton = styled(Button)`
    display: flex;
    align-items: center;
`;

const Poster = styled.img`

`;

export {
    Profile,
    ProfileContainer,
    Backdrop,
    Content,
    Genres,
    Stats,
    Stat,
    MovieButton,
    Poster
};
