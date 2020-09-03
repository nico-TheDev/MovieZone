import React, { useState, useContext } from "react";

import Slider from "components/Slider";
import { ChoiceHolder, MovieBtn, TVBtn } from "./styles";
import ListSkeleton from "../ListSkeleton";
import { UserContext } from "contexts/UserContext";

export default function UserList() {
    const {
        data: { media },
        isLoading,
    } = useContext(UserContext);
    const [current, setCurrent] = useState("Movies");
    const setToMovie = () => setCurrent("Movies");
    const setToTV = () => setCurrent("TV");

    if (isLoading || !media) return <ListSkeleton />;

    return (
        <>
            <ChoiceHolder>
                <MovieBtn current={current} onClick={setToMovie}>
                    Movie
                </MovieBtn>
                <TVBtn current={current} onClick={setToTV}>
                    TV Shows
                </TVBtn>
            </ChoiceHolder>

            <Slider
                type={current === "Movies" ? "movie" : "tv"}
                title="Favorites"
                movies={media[`favorite${current}`].results}
                total={media[`favorite${current}`].total_results}
                profile
            />
            <Slider
                type={current === "Movies" ? "movie" : "tv"}
                title="Rated"
                movies={media[`rated${current}`].results}
                total={media[`rated${current}`].total_results}
                profile
            />
            <Slider
                type={current === "Movies" ? "movie" : "tv"}
                title="WatchList"
                movies={media[`watchList${current}`].results}
                total={media[`watchList${current}`].total_results}
                profile
            />
        </>
    );
}
