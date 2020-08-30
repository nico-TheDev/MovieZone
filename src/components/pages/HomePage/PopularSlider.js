import React from "react";
import { useHistory } from "react-router-dom";

import Slider from "../../Slider";
import SliderSkeleton from "./SliderSkeleton";
import usePopularMovies from "../../../hooks/usePopularMovies";
import ErrorPage from '../NotFoundPage';

export default function PopularSlider() {
    const history = useHistory();
    const { isLoading, data, hasError } = usePopularMovies();

    if (isLoading) return <SliderSkeleton />;

    if (hasError) {
        history.push(`/error/${hasError}`);
        return <ErrorPage />;
    }

    return <Slider title="Popular" movies={data.results} type="movie" />;
}
