import React from "react";
import styled from "styled-components";

import PopularSlider from "../../PopularSlider";
import TrendingSlider from "../../TrendingSlider";
import PopularTVSlider from "../../PopularTVSlider";
import TopRatedSlider from "../../TopRatedSlider";
import FeaturedSlider from "../../FeaturedSlider";
import Container from "../../shared/Container";

const Holder = styled(Container)`
    padding-top: 4rem;
`;

export default function Home() {
    document.title = "MovieZone - Search for Movies and TV Shows";
    return (
        <>
            <FeaturedSlider />
            <Holder>
                <PopularSlider />
                <TrendingSlider />
                <PopularTVSlider />
                <TopRatedSlider />
            </Holder>
        </>
    );
}
