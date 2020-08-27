import React from "react";

import PopularSlider from "./PopularSlider";
import TrendingSlider from "./TrendingSlider";
import PopularTVSlider from "./PopularTVSlider";
import TopRatedSlider from "./TopRatedSlider";
import FeaturedSlider from "./FeaturedSlider";
 
export default function Home() {
    document.title = "MovieZone - Search for Movies and TV Shows";
    return (
        <>
            <FeaturedSlider />
            <PopularSlider />
            <TrendingSlider />
            <PopularTVSlider />
            <TopRatedSlider />
        </>
    );
}
