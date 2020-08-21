import React from "react";
import styled from 'styled-components';

import PopularSlider from "../../PopularSlider";
import TrendingSlider from "../../TrendingSlider";
import UpcomingSlider from "../../UpcomingSlider";
import TopRatedSlider from "../../TopRatedSlider";
import FeaturedSlider from "../../FeaturedSlider";
import Container from '../../shared/Container';


const Holder = styled(Container)`
    padding-top:4rem;
`;

export default function Home() {
    return (
        <>
            <FeaturedSlider/>
            <Holder>
                <PopularSlider />
                <TrendingSlider />
                <UpcomingSlider />
                <TopRatedSlider />
            </Holder>
        </>
    );
}
