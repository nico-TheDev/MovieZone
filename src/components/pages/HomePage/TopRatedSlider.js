import React from "react";
import { useHistory } from "react-router-dom";

import Slider from "../../Slider";
import SliderSkeleton from "./SliderSkeleton";
import useTopRatedTV from "../../../hooks/useTopratedTV";

export default function TopRatedSlider() {
    const history = useHistory();
    const { isLoading, data, hasError } = useTopRatedTV();

    if (isLoading) return <SliderSkeleton />;

    if (hasError) {
        history.push("/error");
        return;
    }

    return (
        <Slider title="Top Rated TV Shows" movies={data.results} type="tv" />
    );
}
