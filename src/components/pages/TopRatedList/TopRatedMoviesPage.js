import React, { useState } from "react";

import Collection from "../Collection";
import useTopRatedMovies from "../../../hooks/useTopRatedMovies";
import PageSkeleton from "../PageSkeleton";

export default function TopRatedMovies({ history }) {
    const [pageCount, setPageCount] = useState(1);
    const { data, isLoading, hasError } = useTopRatedMovies(pageCount);

    if (isLoading) return <PageSkeleton />;

    if (hasError) {
        history.push(`/error/${hasError}`);
        return;
    }

    return (
        <Collection
            movies={data.results}
            title="Top Rated Movies"
            pageCount={pageCount}
            setPageCount={setPageCount}
            type="movie"
            pageLimit={data.total_pages}
        />
    );
}
