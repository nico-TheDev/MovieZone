import React from "react";

import Slider from "../../Slider";
import SliderLoader from "../../Loader/SliderLoader";
import usePopularMovies from "../../../hooks/usePopularMovies";

export default function PopularSlider() {
    const { isLoading, data, isError } = usePopularMovies();

    if (isLoading) return <SliderLoader />;

    if (isError) return "Error";

    return <Slider title="Popular" movies={data.results} type='movie'/>;
}