import React, { useState } from "react";

import GenrePill from "../GenrePill";
import Trailer from "../Trailer";
import Icon from "../shared/Icon";
import getIcon from "../../util/getIcon";
import cutText from "../../util/cutText";
import getRuntime from "../../util/getRuntime";
import {
    Profile,
    ProfileContainer,
    Backdrop,
    Content,
    Genres,
    Stats,
    Stat,
    MovieButton,
    Poster,
} from "./styles";
import useMovieData from "../../hooks/useMovieData";

export default function MovieProfile({ id }) {
    const { data: details, isLoading, isError } = useMovieData(id);
    const [isTrailerOpen, setIsTrailerOpen] = useState(false);

    const handleClick = () => setIsTrailerOpen(true);

    if (isLoading) return "Movie Loading...";

    if (isError) return "Movie Error";

    document.title = `MovieZone - ${details.title || details.original_title}`;

    return (
        <>
            <Trailer
                id={id}
                isOpen={isTrailerOpen}
                setIsTrailerOpen={setIsTrailerOpen}
            />

            <Profile>
                <Backdrop
                    src={`https://image.tmdb.org/t/p/original/${details.backdrop_path}`}
                    alt="backdrop"
                />
                <ProfileContainer>
                    <Poster
                        src={`https://image.tmdb.org/t/p/w200/${details.poster_path}`}
                        alt="poster"
                    />
                    <Content>
                        <h2>
                            {details.title
                                ? details.title
                                : details.original_title}{" "}
                        </h2>
                        <Genres>
                            {details.genres &&
                                details.genres.map((genre) => (
                                    <GenrePill
                                        key={genre.id}
                                        genre={genre.name}
                                        id={genre.id}
                                    />
                                ))}
                        </Genres>
                        <Stats>
                            <Stat>
                                <Icon>
                                    <use href={getIcon("star-full")} />
                                </Icon>
                                Popularity:
                                <span>
                                    {String(details.vote_average).length === 1
                                        ? details.vote_average + ".0"
                                        : details.vote_average}
                                </span>
                            </Stat>
                            <Stat>
                                <Icon>
                                    <use href={getIcon("calendar")} />
                                </Icon>
                                Release Date:
                                <span>{details.release_date}</span>
                            </Stat>
                            <Stat>
                                <Icon>
                                    <use href={getIcon("timer")} />
                                </Icon>
                                Runtime:
                                <span>{getRuntime(details.runtime)}</span>
                            </Stat>
                        </Stats>
                        <p>
                            {details.overview
                                ? cutText(details.overview, 400)
                                : "No summary found"}
                        </p>
                        <MovieButton onClick={handleClick}>
                            <Icon>
                                <use href={getIcon("play")} />
                            </Icon>
                            Watch Trailer
                        </MovieButton>
                    </Content>
                </ProfileContainer>
            </Profile>
        </>
    );
}
