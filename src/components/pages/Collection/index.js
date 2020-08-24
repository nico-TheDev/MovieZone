import React from "react";

import MovieCard from "../../MovieCard";
import Pagination from "../../Pagination";
import { Wrapper, CollectionContainer as Container, Title } from "./styles";

export default function Collection({ movies, title, setPageCount, pageCount, type }) {
    document.title = `MovieZone - ${title}`;

    return (
        <>
            <Wrapper>
                <div>
                    <Title>{title}</Title>
                    <Container>
                        {movies.map((item) => (
                            <MovieCard movie={item} key={item.id} type={type} />
                        ))}
                    </Container>
                </div>
            </Wrapper>
            <Pagination setPageCount={setPageCount} pageCount={pageCount} />
        </>
    );
}
