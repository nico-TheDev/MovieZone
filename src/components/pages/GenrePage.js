import React, { useState } from "react";

import Collection from "./Collection";
import useGenre from "../../hooks/useGenre";
import PageSkeleton from "./PageSkeleton";

export default function GenreList({ match, history }) {
    const { id, genre, type } = match.params;
    const [pageCount, setPageCount] = useState(1);
    const { data, isLoading, hasError } = useGenre(pageCount, id, type);

    if (isLoading) return <PageSkeleton />;

    if (hasError) {
        history.push(`/error/${hasError}`);
        return;
    }

    return (
        <Collection
            movies={data.results}
            title={`${genre} ${type === "movie" ? "Movies" : "TV Shows"}`}
            pageCount={pageCount}
            setPageCount={setPageCount}
            type={type}
            pageLimit={data.total_pages}
        />
    );
}
