import React from "react";

import Slider from "./Slider";
import SliderLoader from "./Loader/SliderLoader";
import usePopularTV from "../hooks/usePopularTV";

export default function PopularSlider() {
    const { isLoading, data, isError } = usePopularTV();

    if (isLoading) return <SliderLoader />;

    if (isError) return "Error";

    return <Slider title="Popular TV Shows" movies={data.results} type={'tv'}/>;
}