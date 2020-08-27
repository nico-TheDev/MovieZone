import React, { useState } from "react";

import Collection from "./Collection";
import useSearch from "../../hooks/useSearch";
import PageSkeleton from "./PageSkeleton";

export default function SearchPageResult({
    match: {
        params: { query },
    },
    history,
}) {
    const [pageCount, setPageCount] = useState(1);
    const { data, isLoading, hasError, pageLimit } = useSearch(
        query,
        pageCount
    );

    if (isLoading) return <PageSkeleton />;

    if (hasError) {
        history.push(`/error/${hasError}`);
        return;
    }

    return (
        <Collection
            movies={[...data.movies, ...data.tvShows]}
            title={`Search Results for ${query}`}
            pageCount={pageCount}
            setPageCount={setPageCount}
            pageLimit={pageLimit.total_pages}
        />
    );
}
