import styled from "styled-components";

const Button = styled.button`
    font-size: 1.1rem;
    color: white;
    background-color: var(--main-color);
    padding: 0.5em 1.5em;
    justify-content: space-evenly;
    border-radius: 2rem;

    &:hover {
        background:limegreen;
        box-shadow: 0 0 1.5rem rgba(var(--main-color), 0.8);
        transform: translateY(-5px);
    }
`;

export default Button;