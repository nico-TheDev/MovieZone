import React, { useState } from "react";

import Collection from "../Collection";
import useTopRatedTV from "../../../hooks/useTopratedTV";

export default function TopRatedTV() {
    const [pageCount, setPageCount] = useState(1);
    const { data, isLoading, isError } = useTopRatedTV(pageCount);

    if (isLoading) return "Top Rated Loading...";

    if (isError) return "Top Rated Data errror";

    return (
        <Collection
            movies={data.results}
            title="Top Rated TV Shows"
            pageCount={pageCount}
            setPageCount={setPageCount}
        />
    );
}
