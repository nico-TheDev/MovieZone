import React, { useState } from "react";

import Collection from "./Collection";
import useTodayTV from "../../hooks/useTodayTV";

export default function TodayTVList() {
    const [pageCount, setPageCount] = useState(1);
    const { data, isLoading, hasError } = useTodayTV(pageCount);

    if (isLoading) return "Trending Loading...";

    if (hasError) return "Trending Data errror";

    return (
        <Collection
            movies={data.results}
            title="Airing Today TV Shows"
            pageCount={pageCount}
            setPageCount={setPageCount}
            type='tv'
            pageLimit={data.total_pages}
        />
    );
}
