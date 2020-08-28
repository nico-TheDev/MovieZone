import React from "react";

import Slider from "../../Slider";
import SliderSkeleton from './SliderSkeleton';
import useTopRatedTV from "../../../hooks/useTopratedTV";

export default function TopRatedSlider() {
    const { isLoading, data, hasError } = useTopRatedTV();

    if (isLoading) return <SliderSkeleton />;

    if (hasError) return "Error";

    return <Slider title="Top Rated TV Shows" movies={data.results} type='tv'/>;
}