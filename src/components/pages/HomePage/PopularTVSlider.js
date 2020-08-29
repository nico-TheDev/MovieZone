import React from "react";
import { useHistory } from "react-router-dom";

import Slider from "../../Slider";
import SliderSkeleton from "./SliderSkeleton";
import usePopularTV from "../../../hooks/usePopularTV";

export default function PopularTVSlider() {
    const history = useHistory();
    const { isLoading, data, hasError } = usePopularTV();

    if (isLoading) return <SliderSkeleton />;

    if (hasError) {
        history.push("/error");
        return;
    }

    return (
        <Slider title="Popular TV Shows" movies={data.results} type={"tv"} />
    );
}
