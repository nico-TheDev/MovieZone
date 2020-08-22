import styled from "styled-components";
import Container from "../shared/Container";
import Icon from "../shared/Icon";

const TrailerStyle = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: var(--main-dark-3);
    display: grid;
    place-items: center;
    opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
    pointer-events: ${({ isOpen }) => (isOpen ? "all" : "none")};
    z-index: 99999;
`;

const TrailerContainer = styled(Container)`
    width: 80%;
    height: 80vh;
    border-radius: 1rem;
    display: grid;
    place-items: center;
    text-align: center;

    & iframe {
        width: 100%;
        height: 100%;
        border-radius: 1rem;
    }

    & h2 {
        display: grid;
        place-items: center;
        width: 100%;
        height: 100%;
        text-align: center;
        margin: 0;
        background-color: var(--main-mid);
    }
`;

const TrailerButton = styled.button`
    position: absolute;
    top: 2rem;
    right: 2rem;
`;

const CloseIcon = styled(Icon)`
    width: 2.5rem;
    height: 2.5rem;
    fill:white;
`;

export { TrailerStyle, TrailerContainer, TrailerButton, CloseIcon };
