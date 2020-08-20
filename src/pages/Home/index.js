import React from "react";

import usePopularMovies from "../../hooks/usePopulerMovies";
import useTrendingMovies from "../../hooks/useTrendingMovies";
import Slider from "../../components/Slider";

export default function Home() {
    const {
        isLoading: isLoadingPopular,
        data: dataPopular,
        isError: isErrorPopular,
    } = usePopularMovies();
    const {
        isLoading: isLoadingTrending,
        data: dataTrending,
        isError: isErrorTrending,
    } = useTrendingMovies();

    if (!dataPopular && !dataTrending) return "Loading";
    if (isErrorPopular && isErrorTrending) return "An error Occured";

    return (
        <>
            <Slider title="Popular" movies={dataPopular} />
            <Slider title="Trending" movies={dataTrending} />
        </>
    );
}
