import React from "react";
import GenrePill from "../GenrePill";
import Icon from "../shared/Icon";
import getIcon from "../../util/getIcon";
import cutText from "../../util/cutText";
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

    if (isLoading) return "Movie Loading...";

    if (isError) return "Movie Error";

    return (
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
                        {details.title ? details.title : details.original_title}{" "}
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
                            <span>Sample sample</span>
                        </Stat>
                        <Stat>
                            <Icon>
                                <use href={getIcon("calendar")} />
                            </Icon>
                            Release Date:
                            <span>Sample sample</span>
                        </Stat>
                        <Stat>
                            <Icon>
                                <use href={getIcon("timer")} />
                            </Icon>
                            Runtime:
                            <span>Sample sample</span>
                        </Stat>
                    </Stats>
                    <p>
                        {details.overview
                            ? cutText(details.overview, 400)
                            : "No summary found"}
                    </p>
                    <MovieButton>
                        <Icon>
                            <use href={getIcon("play")} />
                        </Icon>
                        Watch Trailer
                    </MovieButton>
                </Content>
            </ProfileContainer>
        </Profile>
    );
}

/*
 const getRuntime = (time) => {
        if (time) {
            const hour = Math.floor(time / 60);
            const minutes = Math.ceil(((time/60) - 3));
            return `${hour}h ${minutes}m`;
        }else{
            return 'No data';
        }
    };

    document.title = details.title ? 'MovieZone -' + details.title : 'MovieZone -' + details.original_title;

 

*/
