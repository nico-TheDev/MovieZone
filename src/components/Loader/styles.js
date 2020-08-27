import styled from "styled-components";
import Container from "../shared/Container";
import { blink, ringAnim } from "../../assets/animations";

const SampleTitle = styled.h3`
    width: 200px;
    height: 30px;
    background: var(--main-mid);
    margin-bottom: 1rem;
    animation: ${blink} 0.6s both infinite;
`;

const SampleSlider = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    gap: 1rem;
    margin-bottom: 3rem;
    animation: ${blink} 0.6s both infinite;
`;

const SampleSlide = styled.div`
    width: 100%;
    height: 15rem;
    background: var(--main-mid);
    border-radius: 1rem;
    animation: ${blink} 0.6s both infinite;
`;

// LOADER

const RingLoader = styled.div`
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;

    & div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 64px;
        height: 64px;
        margin: 8px;
        border: 8px solid var(--main-color);
        border-radius: 50%;
        animation: ${ringAnim} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: var(--main-color) transparent transparent transparent;
    }

    & div:nth-child(1) {
        animation-delay: -0.45s;
    }
    & div:nth-child(2) {
        animation-delay: -0.3s;
    }
    & div:nth-child(3) {
        animation-delay: -0.15s;
    }
`;

// FEATURED LOADER

const FeaturedLoader = styled(Container)`
    min-height: 100vh;
    display: flex;
    align-items: flex-end;
    animation: ${blink} 0.6s both infinite;

    /* background:var(--main-dark); */
`;

const FeaturedBottom = styled.div`
    width: 100%;
    height: 60vh;
    display: grid;
    align-items:center;
    grid-template-columns:1fr auto;
    grid-template-rows:repeat(4,1fr);
    justify-content:space-between;
    gap:2rem;

    & > div {
        background: var(--main-mid);
        border-radius: 1rem;
    }

`;

const SampleTags = styled.div`
    height: 50px;
    width:60%;
`;

const SampleDesc = styled.div`
    height: 100%;
    width:80%;
`;

const SampleButton = styled.div`
    height: 50px;
    width: 150px;
    border-radius: 100px;
`;

const SamplePoster = styled.div`
    width: 190px;
    height: 250px;
    grid-column:2/3;
    grid-row:1/-1;
`;

export {
    SampleTitle,
    SampleSlider,
    SampleSlide,
    RingLoader,
    FeaturedBottom,
    FeaturedLoader,
    SampleTags,
    SampleDesc,
    SampleButton,
    SamplePoster,
};
