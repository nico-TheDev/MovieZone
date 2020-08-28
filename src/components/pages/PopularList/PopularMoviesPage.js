import React, { useState } from "react";

import Collection from "../Collection";
import usePopularMovies from "../../../hooks/usePopularMovies";
import PageSkeleton from "../PageSkeleton";

export default function PopularTV() {
    const [pageCount, setPageCount] = useState(1);
    const { data, isLoading, hasError } = usePopularMovies(pageCount);

    if (isLoading) return <PageSkeleton />;

    if (hasError) return "Popular Data errror";
    
    return (
        <Collection
            movies={data.results}
            title="Popular Movies"
            pageCount={pageCount}
            setPageCount={setPageCount}
            type="movie"
            pageLimit={data.total_pages}
        />
    );
}
