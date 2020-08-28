import React, { useState } from "react";

import GenrePill from "../../../GenrePill";
import Trailer from "../../../Trailer";
import Icon from "../../../shared/Icon";
import getIcon from "../../../../util/getIcon";
import getRuntime from "../../../../util/getRuntime";
import convertDate from "../../../../util/convertDate";
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
import useDetails from "../../../../hooks/useDetails";

const TYPE = "movie";

export default function MovieProfile({ id }) {
    const { data: details, isLoading, hasError } = useDetails(id, TYPE);
    const [isTrailerOpen, setIsTrailerOpen] = useState(false);

    const handleClick = () => setIsTrailerOpen(true);

    if (isLoading) return "Movie Loading...";

    if (hasError) return "Movie Error";

    document.title = `MovieZone - ${
        details.name ? details.name : details.title || details.original_title
    }`;

    return (
        <>
            <Trailer
                id={id}
                isOpen={isTrailerOpen}
                setIsTrailerOpen={setIsTrailerOpen}
                type={TYPE}
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
                        <h2>{details.name || details.original_title}</h2>
                        <Genres>
                            {details.genres?.map((genre) => (
                                <GenrePill
                                    key={genre.id}
                                    genre={genre.name}
                                    id={genre.id}
                                    TYPE={TYPE}
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
                                        ? `${details.vote_average}.0`
                                        : details.vote_average}
                                </span>
                            </Stat>
                            <Stat>
                                <Icon>
                                    <use href={getIcon("calendar")} />
                                </Icon>
                                Release Date:
                                <span>
                                    {convertDate(details.release_date || details.first_air_date)}
                                </span>
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
                            {details.overview || "No summary found"}
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
