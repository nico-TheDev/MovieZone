import React from "react";
import {
    FeaturedLoader as Container,
    FeaturedBottom,
    SampleTags,
    SampleDesc,
    SampleButton,
    SamplePoster,
    SampleTitle,
} from "./styles";

export default function FeaturedLoader() {
    return (
        <Container>
            <FeaturedBottom>
                <SampleTitle />
                <SampleTags />
                <SampleDesc />
                <SampleButton />
                <SamplePoster />
            </FeaturedBottom>
        </Container>
    );
}
