import React, { useState } from "react";

import Collection from "../Collection";
import usePopularTV from "../../../hooks/usePopularTV";
import PageSkeleton from "../PageSkeleton";

export default function PopularTV({history}) {
    const [pageCount, setPageCount] = useState(1);
    const { data, isLoading, hasError } = usePopularTV(pageCount);

    if (isLoading) return <PageSkeleton/>;

    if (hasError) {
        history.push("/error");
        return;
    }
    
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
