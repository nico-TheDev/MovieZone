import styled from "styled-components";
import { blink } from "../../assets/animations";

const SampleTitle = styled.h3`
    width: 200px;
    height: 30px;
    background: var(--main-mid);
    margin-bottom: 1rem;
    animation: ${blink} 0.6s both;
`;

const SampleSlider = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    gap: 1rem;
    margin-bottom: 3rem;
    animation: ${blink} 0.6s both;
`;

const SampleSlide = styled.div`
    width: 100%;
    height: 15rem;
    background: var(--main-mid);
    border-radius: 1rem;
    animation: ${blink} 0.6s both;
`;

export { SampleTitle, SampleSlider, SampleSlide };
