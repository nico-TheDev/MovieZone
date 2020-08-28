import React, { useState } from "react";

import Collection from "../Collection";
import usePopularTV from "../../../hooks/usePopularTV";

export default function PopularTV() {
    const [pageCount, setPageCount] = useState(1);
    const { data, isLoading, hasError } = usePopularTV(pageCount);

    if (isLoading) return "Popular Loading...";

    if (hasError) return "Popular Data errror";

    return (
        <Collection
            movies={data.results}
            title="Popular TV Shows"
            pageCount={pageCount}
            setPageCount={setPageCount}
            type='tv'
            pageLimit={data.total_pages}
        />
    );
}
