import React, { useState } from "react";

import Collection from "./Collection";
import useAiring from "../../hooks/useAiring";
import PageSkeleton from "./PageSkeleton";

export default function AiringTVList() {
    const [pageCount, setPageCount] = useState(1);
    const { data, isLoading, hasError } = useAiring(pageCount);

    if (isLoading) return <PageSkeleton/>;

    if (hasError) return "On air Data errror";

    return (
        <Collection
            movies={data.results}
            title="On Air TV Shows"
            pageCount={pageCount}
            setPageCount={setPageCount}
            type='tv'
            pageLimit={data.total_pages}
        />
    );
}
