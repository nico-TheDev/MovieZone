import React from "react";

import Slider from "./Slider";
import SliderLoader from "./Loader/SliderLoader";
import useTrendingMovies from "../hooks/useTrendingMovies";

export default function TrendingSlider() {
    const { isLoading, data, isError } = useTrendingMovies();

    if (isLoading) return <SliderLoader />;

    if (isError) return "Error";

    return <Slider title="Trending" movies={data.results} />;
}