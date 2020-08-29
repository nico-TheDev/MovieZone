import React, { useState } from "react";

import Collection from "../Collection";
import useTopRatedTV from "../../../hooks/useTopratedTV";
import PageSkeleton from "../PageSkeleton";

export default function TopRatedTV({ history }) {
    const [pageCount, setPageCount] = useState(1);
    const { data, isLoading, hasError } = useTopRatedTV(pageCount);

    if (isLoading) return <PageSkeleton/>;

    if (hasError) {
        history.push("/error");
        return;
    }
    
    return (
        <Collection
            movies={data.results}
            title="Top Rated TV Shows"
            pageCount={pageCount}
            setPageCount={setPageCount}
            type='tv'
            pageLimit={data.total_pages}
        />
    );
}
