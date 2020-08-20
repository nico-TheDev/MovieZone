import React from "react";

import Slider from "./Slider";
import SliderLoader from "./Loader/SliderLoader";
import useTopRatedMovies from "../hooks/useTopRatedMovies";

export default function TopRatedSlider() {
    const { isLoading, data, isError } = useTopRatedMovies();

    if (isLoading) return <SliderLoader />;

    if (isError) return "Error";

    return <Slider title="Top Rated" movies={data.results} />;
}