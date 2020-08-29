import React, { useState } from "react";

import Collection from "./Collection";
import useTrendingMovies from "../../hooks/useTrendingMovies";
import PageSkeleton from "./PageSkeleton";

export default function TrendingMoviesList({ history }) {
    const [pageCount, setPageCount] = useState(1);
    const { data, isLoading, hasError } = useTrendingMovies(pageCount);

    if (isLoading) return <PageSkeleton/>;

    if (hasError) {
        history.push("/error");
        return;
    }
    
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
