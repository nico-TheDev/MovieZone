import styled from "styled-components";

const Card = styled.li`
    width: 90%;
    display: flex;
    padding: 0.5rem;
    justify-content: space-between;
    align-items: center;
    background-color: var(--main-dark);
    margin: 0 auto;
    &:hover {
        background-color: var(--main-mid);
    }
`;

const Poster = styled.img`
    width: 30px;
    display: block;
`;

const Title = styled.h4`
    flex: 1;
    margin: 0 0.5rem;
    font-size: 0.8rem;
    height: 1.5rem;
    overflow: hidden;
    text-align: center;
`;

const MiniPoster = styled.div`
    width: 30px;
    height:45px;
    background: var(--main-dark-5);
`;

export { Card, Poster, Title ,MiniPoster};
