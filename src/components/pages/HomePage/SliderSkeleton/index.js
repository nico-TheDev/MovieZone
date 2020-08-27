import React from "react";
import Container from "../../../shared/Container";
import { SampleTitle, SampleSlider, SampleSlide } from "./styles";

export default function SliderLoader() {
    return (
        <Container>
            <SampleTitle />
            <SampleSlider>
                <SampleSlide />
                <SampleSlide />
                <SampleSlide />
                <SampleSlide />
                <SampleSlide />
                <SampleSlide />
            </SampleSlider>
        </Container>
    );
}
