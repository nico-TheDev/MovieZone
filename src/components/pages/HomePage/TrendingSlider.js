import React from "react";

import Slider from "../../Slider";
import SliderSkeleton from './SliderSkeleton';
import useTrendingMovies from "../../../hooks/useTrendingMovies";

export default function TrendingSlider() {
    const { isLoading, data, hasError } = useTrendingMovies();

    if (isLoading) return <SliderSkeleton />;

    if (hasError) return "Error";

    return <Slider title="Trending" movies={data.results} type='movie' />;
}