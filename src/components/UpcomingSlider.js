import React from "react";

import Slider from "./Slider";
import SliderLoader from "./Loader/SliderLoader";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

export default function PopularSlider() {
    const { isLoading, data, isError } = useUpcomingMovies();

    if (isLoading) return <SliderLoader />;

    if (isError) return "Error";

    return <Slider title="Popular" movies={data.results} />;
}