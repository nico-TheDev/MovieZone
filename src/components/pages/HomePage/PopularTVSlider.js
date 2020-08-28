import React from "react";


import Slider from "../../Slider";
import SliderSkeleton from './SliderSkeleton';
import usePopularTV from "../../../hooks/usePopularTV";

export default function PopularTVSlider() {
    const { isLoading, data, hasError } = usePopularTV();

    if (isLoading) return <SliderSkeleton />;

    if (hasError) return "Error";

    return <Slider title="Popular TV Shows" movies={data.results} type={'tv'}/>;
}