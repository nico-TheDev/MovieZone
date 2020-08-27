import React from "react";

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
import usePersonDetails from "../../hooks/usePersonDetails";

export default function PersonProfile({ id, bg }) {
    const { data: details, isLoading, isError } = usePersonDetails(id);

    if (isLoading) return "Profile Loading";

    if (isError) return "error profile person";

    console.log(bg[0].backdrop_path);

    document.title = 'MovieZone - '+ details.name;

    return (
        <Profile>
            {bg[0].backdrop_path && (
                <Backdrop
                    src={`https://image.tmdb.org/t/p/original${bg[0].backdrop_path}`}
                    alt="backdrop"
                />
            )}
            <ProfileContainer>
                {details.profile_path && (
                    <Poster
                        src={`https://image.tmdb.org/t/p/w200/${details.profile_path}`}
                        alt="poster"
                    />
                )}
                <Content>
                    <h2>{details.name}</h2>

                    <Stats>
                        <Stat>
                            <Icon>
                                <use href={getIcon("star-full")} />
                            </Icon>
                            Popularity:
                            <span>{Number(details.popularity).toFixed(2)}</span>
                        </Stat>
                        <Stat>
                            <Icon>
                                <use href={getIcon("cake")} />
                            </Icon>
                            Birthday:
                            <span>
                                {convertDate(details.birthday) ?? "Unknown"}
                            </span>
                        </Stat>
                        <Stat>
                            <Icon>
                                <use href={getIcon("location-pin")} />
                            </Icon>
                            Birthplace:
                            <span>{details.place_of_birth ?? " Unknown"}</span>
                        </Stat>
                    </Stats>
                    <p>
                        {details.biography
                            ? details.biography
                            : "No biography found"}
                    </p>
                </Content>
            </ProfileContainer>
        </Profile>
    );
}
