import styled from "styled-components";
import Container from "../../../../shared/Container";
import { blink } from "../../../../../assets/animations";

export const FeaturedLoader = styled(Container)`
    min-height: 100vh;
    display: flex;
    align-items: flex-end;
    animation: ${blink} var(--loader-speed) ease-in-out both infinite;
`;

export const FeaturedBottom = styled.div`
    width: 100%;
    height: 60vh;
    display: grid;
    align-items: center;
    grid-template-columns: 1fr auto;
    grid-template-rows: repeat(4, 1fr);
    justify-content: space-between;
    gap: 2rem;

    & > div {
        background: var(--main-mid);
        border-radius: 1rem;
    }
`;

export const SampleTitle = styled.h3`
    width: 200px;
    height: 30px;
    background: var(--main-mid);
    margin-bottom: 1rem;
    animation: ${blink} var(--loader-speed) ease-in-out both infinite;
`;

export const SampleTags = styled.div`
    height: 50px;
    width: 60%;
`;

export const SampleDesc = styled.div`
    height: 100%;
    width: 80%;
`;

export const SampleButton = styled.div`
    height: 50px;
    width: 150px;
    border-radius: 100px;
`;

export const SamplePoster = styled.div`
    width: 190px;
    height: 250px;
    grid-column: 2/3;
    grid-row: 1/-1;
`;
