import styled from "styled-components";

export const RatingWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const RatingForm = styled.form``;

export const RaterLabel = styled.label``;
//hide the radio button
export const Rater = styled.input`
    display: none;
`;
export const RateIcon = styled.svg`
    width: 1.5rem;
    height: 1.5rem;
    fill: var(--main-color);
    cursor: pointer;
`;

export const Alert = styled.p`
    padding: 1rem 2rem;
    background: limegreen;
    color: white;
    display: ${({ isDisplayed }) => (isDisplayed ? "block" : "none")};
    position: absolute;
    z-index: 10000;
    top: 20%;
    left: 50%;
    font-size:1.1rem;
    transform: translate(-50%, -50%);
    border-radius:1rem;
`;
