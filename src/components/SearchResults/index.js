import React from "react";
import { Results, Title } from "./styles";
import SearchCard from "../SearchCard";

export default function SearchResults({
    media: { movies, tvShows },
    isShowing,
}) {
    return (
        <Results isShowing={isShowing}>
            <ul>
                <Title>Movies</Title>
                {movies.length !== 0
                    ? movies.map((item) => (
                          <SearchCard
                              key={item.id}
                              details={item}
                              type="movie"
                          />
                      ))
                    : "No Movies Found"}
            </ul>
            <ul>
                <Title>TV Shows</Title>
                {tvShows.length !== 0
                    ? tvShows.map((item) => (
                          <SearchCard key={item.id} details={item} type="tv" />
                      ))
                    : "No Movies Found"}
            </ul>
        </Results>
    );
}
