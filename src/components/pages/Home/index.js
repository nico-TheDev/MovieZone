import React from "react";
import PopularSlider from "../../PopularSlider";
import TrendingSlider from "../../TrendingSlider";
import UpcomingSlider from "../../UpcomingSlider";
import TopRatedSlider from "../../TopRatedSlider";

export default function Home() {
    return (
        <>
            <PopularSlider />
            <TrendingSlider />
            <UpcomingSlider />
            <TopRatedSlider />
        </>
    );
}
