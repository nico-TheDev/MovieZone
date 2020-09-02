import React, { useState, useEffect } from "react";
import Slider from "components/Slider";
import usePopular from "hooks/Movie/usePopularMovies";
import { ChoiceHolder, MovieBtn, TVBtn, Container } from "./styles";
import ListSkeleton from "../ListSkeleton";

export default function UserList() {
    const { data, isLoading } = usePopular();
    const [current, setCurrent] = useState('movie');

    const setToMovie = () => setCurrent('movie');
    const setToTV = () => setCurrent('tv');

    if (isLoading) return <ListSkeleton />;

    return (
        <Container>
            <ChoiceHolder>
                <MovieBtn current={current} onClick={setToMovie}>Movie</MovieBtn>
                <TVBtn current={current} onClick={setToTV}>TV Shows</TVBtn>
            </ChoiceHolder>

            <Slider type={current} title="Favorites" movies={data.results} />
            <Slider type={current} title="Watchlist" movies={data.results} />
            <Slider type={current} title="Rated" movies={data.results} />
        </Container>
    );
}
