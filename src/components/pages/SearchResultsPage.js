import React, { useState } from "react";

import Collection from "./Collection";
import useSearch from "../../hooks/useSearch";

export default function SearchPageResult({ match:{params:{query}} }) {
    const [pageCount, setPageCount] = useState(1);
    const { data, isLoading, isError,pageLimit } = useSearch(query,pageCount);

    if (isLoading) return "Search Results Loading...";

    if (isError) return "Search Results Data error";

    return (
        <Collection
            movies={[...data.movies,...data.tvShows]}
            title={`Search Results for ${query}`}
            pageCount={pageCount}
            setPageCount={setPageCount}
            pageLimit={pageLimit.total_pages}
        />
    );
}
