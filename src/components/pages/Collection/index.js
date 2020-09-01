import React from "react";

import MovieCard from "components/MovieCard";
import Pagination from "./Pagination";
import { Wrapper, CollectionContainer as Container, Title } from "./styles";
import Empty from "components/EmptyPlaceholder";

export default function Collection({
    movies,
    title,
    setPageCount,
    pageCount,
    type,
    pageLimit,
}) {
    document.title = `MovieZone - ${title}`;

    return (
        <>
            <Wrapper>
                <div>
                    <Title>{title}</Title>
                    {movies.length ? (
                        <Container>
                            {movies.map((item) => (
                                <MovieCard
                                    movie={item}
                                    key={item.id}
                                    type={type}
                                    mediaType={item.media_type}
                                />
                            ))}
                        </Container>
                    ) : (
                        <Empty title={"No Media Found"} />
                    )}
                </div>
            </Wrapper>
            <Pagination
                setPageCount={setPageCount}
                pageCount={pageCount}
                pageLimit={pageLimit}
                length={movies.length}
            />
        </>
    );
}
