import React, { useState, useContext } from "react";

import GenrePill from "components/GenrePill";
import Trailer from "components/Trailer";
import Icon from "components/shared/Icon";
import getIcon from "util/getIcon";
import getRuntime from "util/getRuntime";
import convertDate from "util/convertDate";
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
    Overview,
    ButtonHolder,
} from "./styles";
import ProfileButtons from "components/ProfileButtons";
import { UserContext } from "contexts/UserContext";

const TYPE = "movie";

export default function MovieProfile({ details, trailers }) {
    const {
        data: { media },
    } = useContext(UserContext);
    const [isTrailerOpen, setIsTrailerOpen] = useState(false);
    const handleClick = () => setIsTrailerOpen(true);

    document.title = `MovieZone - ${
        details.name ? details.name : details.title || details.original_title
    }`;

    return (
        <>
            <Trailer
                isOpen={isTrailerOpen}
                setIsTrailerOpen={setIsTrailerOpen}
                trailers={trailers}
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
                                    {convertDate(
                                        details.release_date ||
                                            details.first_air_date
                                    )}
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
                        <Overview textLength={details.overview.length}>
                            {details.overview || "No summary found"}
                        </Overview>
                        <ProfileButtons
                            openTrailer={handleClick}
                            favList={media?.favoriteMovies.results}
                            watchList={media?.watchListMovies.results}
                            id={details.id}
                        />
                    </Content>
                </ProfileContainer>
            </Profile>
        </>
    );
}
