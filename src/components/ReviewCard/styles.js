import styled from "styled-components";

const Card = styled.figure`
    padding: 2.5rem 2rem;
    position: relative;
    background: var(--main-dark-5);

    &:hover {
        outline: 10px solid var(--main-color);
    }

    &:hover p:first-child{
    }
`;

const ReviewText = styled.p`
    line-height: 1.4;
    margin-bottom: 1rem;
    padding-left:2rem;

    &::before {
        content: open-quote;
        position: absolute;
        font-size: 7rem;
        top: 0;
        left: 8px;
        line-height: 1;
        font-family: sans-serif;
    }

    &::after {
        content: close-quote;
    }
`;

const Author = styled.p`
    text-align: right;
    color: var(--main-color);
`;

export { Card, Author, ReviewText };
