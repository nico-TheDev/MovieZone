import React, { useState } from "react";

import Collection from "../Collection";
import useTopRatedMovies from "../../../hooks/useTopRatedMovies";

export default function TopRatedMovies() {
    const [pageCount, setPageCount] = useState(1);
    const { data, isLoading, isError } = useTopRatedMovies(pageCount);

    if (isLoading) return "Top Rated Loading...";

    if (isError) return "Top Rated Data errror";

    return (
        <Collection
            movies={data.results}
            title="Top Rated Movies"
            pageCount={pageCount}
            setPageCount={setPageCount}
            type='movie'
        />
    );
}
