import React from "react";

import Slider from "../../Slider";
import SliderSkeleton from "./SliderSkeleton";
import usePopularMovies from "../../../hooks/usePopularMovies";

export default function PopularSlider() {
    const { isLoading, data, hasError } = usePopularMovies();

    if (isLoading) return <SliderSkeleton />;

    if (hasError) return "Error";
    
    return <Slider title="Popular" movies={data.results} type="movie" />;
}
