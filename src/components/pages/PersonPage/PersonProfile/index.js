import React from "react";
import { useHistory } from "react-router-dom";

import Icon from "components/shared/Icon";
import getIcon from "util/getIcon";
import convertDate from "util/convertDate";

import {
    Profile,
    ProfileContainer,
    Backdrop,
    Content,
    Desc,
    Stats,
    Stat,
    Poster,
} from "./styles";
import usePersonDetails from "hooks/usePersonDetails";
import ProfileSkeleton from "../ProfileSkeleton";
import ErrorPage from 'components/pages/NotFoundPage';

export default function PersonProfile({ id, bg }) {
    const history = useHistory();
    const { data: details, isLoading, hasError } = usePersonDetails(id);

    if (isLoading) return <ProfileSkeleton />;

    if (hasError) {
        history.push(`/error/${hasError}`);
        return <ErrorPage />;
    }

    document.title = `MovieZone - ${details.name}`;

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
                    <Desc textLength={details.biography.length}>
                        {details.biography
                            ? details.biography
                            : "No biography found"}
                    </Desc>
                </Content>
            </ProfileContainer>
        </Profile>
    );
}
