import React from "react";
import { Results, Title } from "./styles";
import SearchCard from "../SearchCard";

export default function SearchResults({
    media: { movies, tvShows },
    isShowing,
}) {
    return (
        <Results isShowing={isShowing}>
            {movies.length !== 0 && (
                <ul>
                    <Title>Movies</Title>

                    {movies.map((item) => (
                        <SearchCard key={item.id} details={item} type="movie" />
                    ))}
                </ul>
            )}
            <ul>
                <Title>TV Shows</Title>
                {tvShows.length !== 0
                    ? tvShows.map((item) => (
                          <SearchCard key={item.id} details={item} type="tv" />
                      ))
                    : "No TV Shows Found"}
            </ul>
        </Results>
    );
}
