import React from "react";

import Slider from "./Slider";
import SliderLoader from "./Loader/SliderLoader";
import useTopRatedTV from "../hooks/useTopratedTV";

export default function TopRatedSlider() {
    const { isLoading, data, isError } = useTopRatedTV();

    if (isLoading) return <SliderLoader />;

    if (isError) return "Error";

    return <Slider title="Top Rated TV Shows" movies={data.results} type='tv'/>;
}