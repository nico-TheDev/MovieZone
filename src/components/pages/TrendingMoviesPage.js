import React, { useState } from "react";

import Collection from "./Collection";
import useTrendingMovies from "../../hooks/useTrendingMovies";

export default function TrendingMoviesList() {
    const [pageCount, setPageCount] = useState(1);
    const { data, isLoading, hasError } = useTrendingMovies(pageCount);

    if (isLoading) return "Trending Loading...";

    if (hasError) return "Trending Data errror";

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
