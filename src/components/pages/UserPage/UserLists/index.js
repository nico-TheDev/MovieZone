import React, { useState, useContext } from "react";

import Slider from "components/Slider";
import { ChoiceHolder, MovieBtn, TVBtn } from "./styles";
import ListSkeleton from "../ListSkeleton";
import { useAuth } from "contexts/AuthContext";

export default function UserList() {
    const {
        state: { userMedia },
    } = useAuth();
    const [current, setCurrent] = useState("Movies");
    const setToMovie = () => setCurrent("Movies");
    const setToTV = () => setCurrent("TV");

    if (!userMedia) return <ListSkeleton />;

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
                movies={userMedia[`favorite${current}`].results}
                total={userMedia[`favorite${current}`].total_results}
                profile
            />
            <Slider
                type={current === "Movies" ? "movie" : "tv"}
                title="WatchList"
                movies={userMedia[`watchList${current}`].results}
                total={userMedia[`watchList${current}`].total_results}
                profile
            />
            <Slider
                type={current === "Movies" ? "movie" : "tv"}
                title="Rated"
                movies={userMedia[`rated${current}`].results}
                total={userMedia[`rated${current}`].total_results}
                profile
            />
        </>
    );
}
