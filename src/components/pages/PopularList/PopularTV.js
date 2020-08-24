import React, { useState } from "react";

import Collection from "../Collection";
import usePopularTV from "../../../hooks/usePopularTV";

export default function PopularTV() {
    const [pageCount, setPageCount] = useState(1);
    const { data, isLoading, isError } = usePopularTV(pageCount);

    if (isLoading) return "Popular Loading...";

    if (isError) return "Popular Data errror";

    return (
        <Collection
            movies={data.results}
            title="Popular TV Shows"
            pageCount={pageCount}
            setPageCount={setPageCount}
        />
    );
}
