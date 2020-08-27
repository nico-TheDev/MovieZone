import React, { useState } from "react";

import Collection from "./Collection";
import useAiring from "../../hooks/useAiring";

export default function AiringTVList() {
    const [pageCount, setPageCount] = useState(1);
    const { data, isLoading, isError } = useAiring(pageCount);

    if (isLoading) return "On air Loading...";

    if (isError) return "On air Data errror";

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
