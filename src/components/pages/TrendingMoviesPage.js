import React, { useState } from "react";

import Collection from "./Collection";
import useTrendingMovies from "../../hooks/useTrendingMovies";

export default function TrendingMoviesList() {
    const [pageCount, setPageCount] = useState(1);
    const { data, isLoading, isError } = useTrendingMovies(pageCount);

    if (isLoading) return "Trending Loading...";

    if (isError) return "Trending Data errror";

    return (
        <Collection
            movies={data.results}
            title="Trending Movies"
            pageCount={pageCount}
            setPageCount={setPageCount}
            type='movie'
            pageLimit={data.total_pages}
        />
    );
}
