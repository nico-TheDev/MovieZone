import React, { useState } from "react";
import { useParams } from "react-router-dom";

import GenrePill from "../GenrePill";
import Trailer from "../Trailer";
import Icon from "../shared/Icon";
import getIcon from "../../util/getIcon";
import getRuntime from "../../util/getRuntime";
import convertDate from "../../util/convertDate";
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
import useDetails from "../../hooks/useDetails";

export default function TVProfile({ id }) {
    const type = "tv";
    const { data: details, isLoading, isError } = useDetails(id, type);
    const [isTrailerOpen, setIsTrailerOpen] = useState(false);

    const handleClick = () => setIsTrailerOpen(true);

    if (isLoading) return "TV Show Loading...";

    if (isError) return "TV Show Error";

    document.title = `MovieZone - ${
        details.name ? details.name : details.title || details.original_title
    }`;

    return (
        <>
            <Trailer
                id={id}
                isOpen={isTrailerOpen}
                setIsTrailerOpen={setIsTrailerOpen}
                type={type}
            />

            <Profile>
                {details.backdrop_path && (
                    <Backdrop
                        src={`https://image.tmdb.org/t/p/original/${details.backdrop_path}`}
                        alt="backdrop"
                    />
                )}
                <ProfileContainer>
                    {details.poster_path && (
                        <Poster
                            src={`https://image.tmdb.org/t/p/w200/${details.poster_path}`}
                            alt="poster"
                        />
                    )}
                    <Content>
                        <h2>
                            {details.name
                                ? details.name
                                : details.original_title}
                        </h2>
                        <Genres>
                            {details.genres &&
                                details.genres.map((genre) => (
                                    <GenrePill
                                        key={genre.id}
                                        genre={genre.name}
                                        id={genre.id}
                                        type={type}
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
                                First Air Date:
                                <span>
                                    {convertDate(details.first_air_date) ?? "Unknown"}
                                </span>
                            </Stat>
                            <Stat>
                                <Icon>
                                    <use href={getIcon("calendar")} />
                                </Icon>
                                Last Air Date:
                                <span>
                                    {convertDate(details.last_air_date) ?? "Unknown"}
                                </span>
                            </Stat>
                            <Stat>
                                <Icon>
                                    <use href={getIcon("pen")} />
                                </Icon>
                                Created By:
                                <span>{details.created_by[0] ? details.created_by[0].name : 'Unknown'}</span>
                            </Stat>
                            <Stat>
                                <Icon>
                                    <use href={getIcon("film")} />
                                </Icon>
                                Episodes:
                                <span>
                                    {details.number_of_episodes}
                                </span>
                            </Stat>
                            <Stat>
                                <Icon>
                                    <use href={getIcon("time")} />
                                </Icon>
                                Runtime:
                                <span>
                                    {details.episode_run_time.join("-")} min
                                </span>
                            </Stat>
                        </Stats>
                        <p>
                            {details.overview
                                ? details.overview
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
