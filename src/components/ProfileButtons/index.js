import React, { useState, useContext } from "react";

import Icon from "components/shared/Icon";
import getIcon from "util/getIcon";
import { MovieButton, ButtonHolder } from "./styles";
import API from "api/moviedb.instance";
import { AuthContext } from "contexts/AuthContext";
import { UserContext } from "contexts/UserContext";

export default function ProfileButtons({
    openTrailer,
    favList,
    watchList,
    id,
    type,
}) {
    const { session } = useContext(AuthContext);
    const {
        data: { user },
    } = useContext(UserContext);
    let favID = favList?.map((item) => item.id);
    let watchID = watchList?.map((item) => item.id);
    let [isFavorite, setIsFavorite] = useState(favID?.includes(id));
    let [isListed, setIsListed] = useState(watchID?.includes(id));

    const config = {
        headers: {
            "Content-Type": "application/json;charset=utf-8",
        },
        params: {
            session_id: session.session_id,
        },
    };

    const favoriteBody = {
        media_type: type,
        media_id: id,
        favorite: !isFavorite,
    };
    const listBody = {
        media_type: type,
        media_id: id,
        watchlist: !isListed,
    };

    const markAsFavorite = () => {
        API.post(`account/${user.id}/favorite`, favoriteBody, config).then(
            (res) => {
                setIsFavorite(!isFavorite);
            }
        );
    };

    const markAsListed = () => {
        API.post(`account/${user.id}/watchlist`, listBody, config).then(
            (res) => {
                setIsListed(!isListed);
            }
        );
    };

    return (
        <ButtonHolder>
            <MovieButton onClick={markAsFavorite}>
                <Icon>
                    <use
                        href={getIcon(isFavorite ? "bookmark" : "bookmark-add")}
                    />
                </Icon>
                {isFavorite ? "Added" : "Add"} to Favorites
            </MovieButton>
            <MovieButton onClick={markAsListed}>
                <Icon>
                    <use href={getIcon(isListed ? "listed" : "list-add")} />
                </Icon>
                {isListed ? "Added" : "Add"} to Watchlist
            </MovieButton>
            <MovieButton onClick={openTrailer}>
                <Icon>
                    <use href={getIcon("play")} />
                </Icon>
                Watch Trailer
            </MovieButton>
        </ButtonHolder>
    );
}
