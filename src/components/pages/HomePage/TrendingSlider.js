import React from "react";
import { useHistory } from "react-router-dom";

import Slider from "components/Slider";
import SliderSkeleton from "./SliderSkeleton";
import useTrendingMovies from "hooks/useTrendingMovies";
import ErrorPage from 'components/pages/NotFoundPage';

export default function TrendingSlider() {
    const history = useHistory();
    const { isLoading, data, hasError } = useTrendingMovies();

    if (isLoading) return <SliderSkeleton />;

    if (hasError) {
        history.push(`/error/${hasError}`);
        return <ErrorPage />;
    }

    return <Slider title="Trending" movies={data.results} type="movie" />;
}
