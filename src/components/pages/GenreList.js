import React, { useState } from "react";

import Collection from "./Collection";
import useGenre from "../../hooks/useGenre";

export default function GenreList({ match }) {
    const {  id, genre, type } = match.params;
    const [pageCount, setPageCount] = useState(1);
    const { data, isLoading, isError } = useGenre(pageCount,id,type);

    if (isLoading) return "Genre Loading...";

    if (isError) return "Genre Data errror";

    return (
        <>
            <Collection
                movies={data.results}
                title={`${genre} ${type === 'movie' ? 'Movies' : 'TV Shows'}`}
                pageCount={pageCount}
                setPageCount={setPageCount}
                type={type}
            />
        </>
    );
}